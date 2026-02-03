// Background service worker for KnowledgeBase extension

const STORAGE_KEYS = {
  savedUrls: 'kb_saved_urls',
  lastRefresh: 'kb_last_refresh'
};

const DEFAULT_SETTINGS = {
  baseFolder: 'KnowledgeBase',
  overwrite: true,
  skipUnchanged: true
};

function sanitizeFolder(value) {
  if (!value) return DEFAULT_SETTINGS.baseFolder;
  return value
    .replace(/\\/g, '/')
    .replace(/\.{2,}/g, '')
    .replace(/^[\/]+/g, '')
    .replace(/[<>:"|?*]/g, '')
    .trim() || DEFAULT_SETTINGS.baseFolder;
}

function sanitizeSegment(value) {
  if (!value) return 'index';
  const cleaned = value
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/gi, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
  return cleaned || 'index';
}

function normalizePathname(pathname) {
  if (!pathname || pathname === '/') return 'index';
  const decoded = decodeURIComponent(pathname).replace(/\/+$/g, '');
  return sanitizeSegment(decoded.replace(/\//g, '-'));
}

function buildDownloadPath(baseFolder, url, urlHash) {
  const folder = sanitizeFolder(baseFolder);
  const domainFolder = sanitizeSegment(url.hostname);
  const pathSlug = normalizePathname(url.pathname);
  const filename = `${pathSlug}--${urlHash}.md`;
  return `${folder}/${domainFolder}/${filename}`;
}

function yamlValue(value) {
  if (value === null || value === undefined || value === '') return '""';
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);
  return JSON.stringify(String(value));
}

function tableValue(value) {
  if (value === null || value === undefined || value === '') return '-';
  return String(value).replace(/\|/g, '\\|');
}

function buildFrontmatter(meta) {
  const lines = ['---'];
  for (const [key, value] of Object.entries(meta)) {
    if (value === undefined) continue;
    lines.push(`${key}: ${yamlValue(value)}`);
  }
  lines.push('---');
  return lines.join('\n');
}

function buildMetadataTable(meta) {
  const rows = [
    ['Title', meta.title],
    ['URL', meta.source_url],
    ['Domain', meta.source_domain],
    ['Captured', meta.captured_at],
    ['Updated', meta.source_updated_at || meta.source_published_at],
    ['Words', meta.word_count],
    ['Content hash', meta.content_hash]
  ];

  let table = '| Field | Value |\n| --- | --- |\n';
  for (const [label, value] of rows) {
    table += `| ${label} | ${tableValue(value)} |\n`;
  }
  return table.trim();
}

function buildOutlineSection(headings) {
  if (!headings || headings.length === 0) return '';
  const minLevel = Math.min(...headings.map(h => h.level));
  const lines = headings.map(heading => {
    const indent = '  '.repeat(Math.max(0, heading.level - minLevel));
    return `${indent}- ${heading.text}`;
  });
  return `## Outline\n${lines.join('\n')}\n\n`;
}

function countWords(text) {
  if (!text) return 0;
  const matches = text.trim().match(/\S+/g);
  return matches ? matches.length : 0;
}

async function sha256(text) {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

async function shortHash(text) {
  const full = await sha256(text);
  return full.slice(0, 10);
}

function chunkMarkdown(markdown, maxWords = 350) {
  const paragraphs = markdown.split(/\n\n+/).filter(Boolean);
  let wordCount = 0;
  let chunkId = 1;
  const chunks = [];
  const output = [];

  if (!paragraphs.length) {
    return { markdown: '', chunks: [] };
  }

  const startChunk = () => {
    output.push(`<!-- KB:chunk:${chunkId} -->`);
  };

  startChunk();
  for (const paragraph of paragraphs) {
    const words = paragraph.trim().match(/\S+/g) || [];
    if (wordCount > 0 && wordCount + words.length > maxWords) {
      chunks.push({ id: chunkId, words: wordCount });
      chunkId += 1;
      wordCount = 0;
      output.push('');
      startChunk();
    }
    output.push(paragraph);
    wordCount += words.length;
  }

  if (wordCount > 0) {
    chunks.push({ id: chunkId, words: wordCount });
  }

  return {
    markdown: output.join('\n\n').replace(/\n{3,}/g, '\n\n').trim(),
    chunks
  };
}

function buildChunkTable(chunks) {
  if (!chunks.length) return '';
  let table = '## Chunks\n\n| Chunk | Words |\n| --- | --- |\n';
  chunks.forEach((chunk) => {
    table += `| ${chunk.id} | ${chunk.words} |\n`;
  });
  return `${table}\n`;
}

async function buildMarkdown(response) {
  const url = new URL(response.url);
  const capturedAt = new Date().toISOString();
  const textContent = response.text || '';
  const wordCount = response.wordCount || countWords(textContent);
  const contentHash = await sha256(textContent || response.markdown || '');

  const meta = {
    kb_version: '1.1',
    title: response.title || response.pageTitle || url.hostname,
    source_url: url.href,
    source_domain: url.hostname,
    captured_at: capturedAt,
    source_published_at: response.meta?.publishedTime || '',
    source_updated_at: response.meta?.modifiedTime || response.meta?.lastModified || '',
    site_name: response.meta?.siteName || '',
    author: response.meta?.author || '',
    description: response.meta?.description || '',
    language: response.meta?.language || '',
    word_count: wordCount,
    char_count: textContent.length,
    content_hash: `sha256:${contentHash}`,
    content_selector: response.contentSelector || ''
  };

  const frontmatter = buildFrontmatter(meta);
  const metadataTable = buildMetadataTable(meta);
  const outlineSection = buildOutlineSection(response.headings || []);
  const titleHeader = meta.title ? `# ${meta.title}\n\n` : '';

  const chunked = chunkMarkdown(response.markdown || '');
  const chunkTable = buildChunkTable(chunked.chunks);
  const contentHeader = '## Content\n\n';

  const markdown = `${frontmatter}\n\n${metadataTable}\n\n${titleHeader}${outlineSection}${chunkTable}${contentHeader}${chunked.markdown}\n`;

  return {
    markdown,
    meta,
    contentHash,
    wordCount
  };
}

async function downloadMarkdown(markdown, filePath, overwrite) {
  const blob = new Blob([markdown], { type: 'text/markdown' });
  const blobUrl = URL.createObjectURL(blob);

  return new Promise((resolve) => {
    chrome.downloads.download({
      url: blobUrl,
      filename: filePath,
      saveAs: false,
      conflictAction: overwrite ? 'overwrite' : 'uniquify'
    }, (downloadId) => {
      setTimeout(() => URL.revokeObjectURL(blobUrl), 1500);
      resolve({
        success: Boolean(downloadId),
        error: chrome.runtime.lastError?.message || null
      });
    });
  });
}

async function getSavedUrls() {
  return new Promise((resolve) => {
    chrome.storage.local.get({ [STORAGE_KEYS.savedUrls]: [] }, (data) => {
      resolve(data[STORAGE_KEYS.savedUrls] || []);
    });
  });
}

async function saveUrls(urls) {
  return new Promise((resolve) => {
    chrome.storage.local.set({ [STORAGE_KEYS.savedUrls]: urls }, resolve);
  });
}

async function getSettings() {
  return new Promise((resolve) => {
    chrome.storage.local.get(DEFAULT_SETTINGS, (settings) => {
      resolve(settings);
    });
  });
}

function updateUrlEntry(urls, entry) {
  const index = urls.findIndex(item => item.url === entry.url);
  if (index >= 0) {
    urls[index] = { ...urls[index], ...entry };
  } else {
    urls.push(entry);
  }
  return urls;
}

function waitForTabComplete(tabId) {
  return new Promise((resolve) => {
    const listener = (updatedTabId, info) => {
      if (updatedTabId === tabId && info.status === 'complete') {
        chrome.tabs.onUpdated.removeListener(listener);
        resolve();
      }
    };
    chrome.tabs.onUpdated.addListener(listener);
  });
}

async function refreshUrl(entry, settings) {
  const tab = await chrome.tabs.create({ url: entry.url, active: false });
  await waitForTabComplete(tab.id);

  const response = await new Promise((resolve) => {
    chrome.tabs.sendMessage(tab.id, { action: 'extractContent', headingOffset: 1 }, (payload) => {
      resolve(payload);
    });
  });

  await chrome.tabs.remove(tab.id);

  if (!response || !response.success) {
    return { success: false, error: response?.error || 'Extraction failed' };
  }

  const built = await buildMarkdown(response);
  if (settings.skipUnchanged && entry.content_hash === built.contentHash) {
    return { success: true, skipped: true, contentHash: built.contentHash, wordCount: built.wordCount };
  }

  const urlHash = await shortHash(entry.url);
  const filePath = buildDownloadPath(settings.baseFolder, new URL(entry.url), urlHash);
  const downloadResult = await downloadMarkdown(built.markdown, filePath, settings.overwrite);

  return {
    success: downloadResult.success,
    error: downloadResult.error,
    contentHash: built.contentHash,
    wordCount: built.wordCount,
    filePath
  };
}

async function refreshAllSavedSites(sendProgress) {
  const urls = await getSavedUrls();
  const settings = await getSettings();

  if (!urls.length) {
    if (sendProgress) {
      sendProgress({
        total: 0,
        completed: 0,
        url: '',
        success: true,
        skipped: false,
        error: null
      });
    }
    chrome.storage.local.set({ [STORAGE_KEYS.lastRefresh]: new Date().toISOString() });
    return;
  }

  let completed = 0;
  for (const entry of urls) {
    const result = await refreshUrl(entry, settings);
    completed += 1;
    if (result.success) {
      const updated = {
        ...entry,
        last_saved_at: new Date().toISOString(),
        content_hash: result.contentHash || entry.content_hash,
        word_count: result.wordCount || entry.word_count,
        file_path: result.filePath || entry.file_path
      };
      const updatedList = updateUrlEntry(urls, updated);
      await saveUrls(updatedList);
    }
    if (sendProgress) {
      sendProgress({
        total: urls.length,
        completed,
        url: entry.url,
        success: result.success,
        skipped: result.skipped || false,
        error: result.error || null
      });
    }
  }

  chrome.storage.local.set({ [STORAGE_KEYS.lastRefresh]: new Date().toISOString() });
}

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    console.log('KnowledgeBase extension installed');
  } else if (details.reason === 'update') {
    console.log('KnowledgeBase extension updated');
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'saveUrlEntry') {
    getSavedUrls().then((urls) => {
      const updated = updateUrlEntry(urls, request.entry);
      saveUrls(updated).then(() => sendResponse({ success: true, count: updated.length }));
    });
    return true;
  }

  if (request.action === 'getSavedStats') {
    Promise.all([
      getSavedUrls(),
      new Promise((resolve) => {
        chrome.storage.local.get({ [STORAGE_KEYS.lastRefresh]: '' }, (data) => {
          resolve(data[STORAGE_KEYS.lastRefresh] || '');
        });
      })
    ]).then(([urls, lastRefresh]) => {
      sendResponse({ success: true, count: urls.length, lastRefresh });
    });
    return true;
  }

  if (request.action === 'refreshAllSavedSites') {
    refreshAllSavedSites((progress) => {
      chrome.runtime.sendMessage({ action: 'refreshProgress', progress });
    }).then(() => {
      sendResponse({ success: true });
    });
    return true;
  }

  return false;
});
