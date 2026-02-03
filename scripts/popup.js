// Popup script for KnowledgeBase extension

let currentMarkdown = '';
let currentFilePath = '';
let currentHash = '';
let currentWordCount = 0;

const convertBtn = document.getElementById('convertBtn');
const refreshAllBtn = document.getElementById('refreshAllBtn');
const copyBtn = document.getElementById('copyBtn');
const statusMessage = document.getElementById('statusMessage');
const statusText = document.getElementById('statusText');
const progressBar = document.getElementById('progressBar');
const progressFill = document.getElementById('progressFill');
const progressLabel = document.getElementById('progressLabel');
const captureStudyBtn = document.getElementById('captureStudyBtn');
const studyCard = document.getElementById('studyCard');
const studyPreview = document.getElementById('studyPreview');
const studyPromptEl = document.getElementById('studyPrompt');
const copyPromptBtn = document.getElementById('copyPromptBtn');
const copyImageBtn = document.getElementById('copyImageBtn');
const destinationSelect = document.getElementById('destinationSelect');
const sendStudyBtn = document.getElementById('sendStudyBtn');
const saveCard = document.getElementById('saveCard');
const previewContent = document.getElementById('previewContent');
const baseFolderInput = document.getElementById('baseFolder');
const overwriteToggle = document.getElementById('overwriteToggle');
const skipUnchangedToggle = document.getElementById('skipUnchanged');
const openDownloadsSettings = document.getElementById('openDownloadsSettings');
const fileNameEl = document.getElementById('fileName');
const wordCountEl = document.getElementById('wordCount');
const contentHashEl = document.getElementById('contentHash');
const savedCountEl = document.getElementById('savedCount');
const lastRefreshEl = document.getElementById('lastRefresh');

const DEFAULT_SETTINGS = {
  baseFolder: 'KnowledgeBase',
  overwrite: true,
  skipUnchanged: true
};

let studyPromptText = '';
let studyImageUrl = '';

function updateStatus(message, type = 'info') {
  if (statusMessage) {
    statusMessage.dataset.state = type;
  }
  if (statusText) {
    statusText.textContent = message;
  }
}

function setProgress(completed, total) {
  if (!progressBar || !progressFill || !progressLabel) return;
  if (!total || total <= 0) {
    progressBar.style.display = 'none';
    progressBar.setAttribute('aria-hidden', 'true');
    return;
  }
  const percent = Math.min(100, Math.round((completed / total) * 100));
  progressBar.style.display = 'flex';
  progressBar.setAttribute('aria-hidden', 'false');
  progressFill.style.width = `${percent}%`;
  progressLabel.textContent = `${percent}%`;
}

function resetProgress() {
  if (!progressBar || !progressFill || !progressLabel) return;
  progressBar.style.display = 'none';
  progressBar.setAttribute('aria-hidden', 'true');
  progressFill.style.width = '0%';
  progressLabel.textContent = '0%';
}

function showActions(show) {
  if (saveCard) {
    saveCard.style.display = show ? 'block' : 'none';
  }
}

function showStudyCard(show) {
  if (!studyCard) return;
  studyCard.style.display = show ? 'block' : 'none';
}

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

function countWords(text) {
  if (!text) return 0;
  const matches = text.trim().match(/\S+/g);
  return matches ? matches.length : 0;
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

function isHttpUrl(url) {
  return url && (url.startsWith('http://') || url.startsWith('https://'));
}

function buildDownloadPath(baseFolder, url, urlHash) {
  const folder = sanitizeFolder(baseFolder);
  const domainFolder = sanitizeSegment(url.hostname);
  const pathSlug = normalizePathname(url.pathname);
  const filename = `${pathSlug}--${urlHash}.md`;
  return `${folder}/${domainFolder}/${filename}`;
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

  return {
    markdown: `${frontmatter}\n\n${metadataTable}\n\n${titleHeader}${outlineSection}${chunkTable}${contentHeader}${chunked.markdown}\n`,
    meta,
    contentHash,
    wordCount
  };
}

function cacheSettings(settings) {
  baseFolderInput.value = settings.baseFolder;
  overwriteToggle.checked = settings.overwrite;
  skipUnchangedToggle.checked = settings.skipUnchanged;
}

function loadSettings() {
  return new Promise(resolve => {
    chrome.storage.local.get(DEFAULT_SETTINGS, (settings) => {
      cacheSettings(settings);
      resolve(settings);
    });
  });
}

function persistSettings() {
  const settings = {
    baseFolder: sanitizeFolder(baseFolderInput.value),
    overwrite: overwriteToggle.checked,
    skipUnchanged: skipUnchangedToggle.checked
  };
  chrome.storage.local.set(settings);
  return settings;
}

function formatTimestamp(value) {
  if (!value) return '-';
  try {
    const date = new Date(value);
    return date.toLocaleString();
  } catch (error) {
    return value;
  }
}

function refreshStats() {
  chrome.runtime.sendMessage({ action: 'getSavedStats' }, (response) => {
    if (!response || !response.success) return;
    savedCountEl.textContent = String(response.count ?? 0);
    lastRefreshEl.textContent = response.lastRefresh ? formatTimestamp(response.lastRefresh) : '-';
  });
}

function getSavedStats() {
  return new Promise((resolve) => {
    chrome.runtime.sendMessage({ action: 'getSavedStats' }, (response) => {
      if (!response || !response.success) {
        resolve({ count: 0, lastRefresh: '' });
        return;
      }
      resolve({ count: response.count ?? 0, lastRefresh: response.lastRefresh || '' });
    });
  });
}

function saveEntry(entry) {
  chrome.runtime.sendMessage({ action: 'saveUrlEntry', entry }, (response) => {
    if (response?.success) {
      savedCountEl.textContent = String(response.count);
    }
  });
}

function buildStudyPrompt(url, title) {
  const safeTitle = title || 'this problem';
  return [
    'You are my learning coach. Use the attached screenshot of the problem and the page context below.',
    '',
    `Context:`,
    `- URL: ${url}`,
    `- Title: ${safeTitle}`,
    '',
    'Requirements:',
    '- Ground every explanation in academic sources (textbooks, peer-reviewed papers, or university course notes).',
    '- Cite sources inline with author + year or institution + year.',
    '- Start by extracting the problem statement from the image in your own words.',
    '- Explain the solution step-by-step, including why each step is valid.',
    '- Provide a compact summary of the key concepts and formulas used.',
    '- Add memory techniques: a mnemonic, a short recall drill, and a spaced-repetition checklist.',
    '- End with 2 similar practice problems (no solutions) to reinforce learning.',
    '',
    'Tone: patient, encouraging, and precise. Assume I am learning this for the first time.'
  ].join('\\n');
}

async function copyImageToClipboard(dataUrl) {
  const response = await fetch(dataUrl);
  const blob = await response.blob();
  const item = new ClipboardItem({ [blob.type]: blob });
  await navigator.clipboard.write([item]);
}

async function copyStudyPackToClipboard(prompt, dataUrl) {
  const response = await fetch(dataUrl);
  const blob = await response.blob();
  const textBlob = new Blob([prompt], { type: 'text/plain' });
  const item = new ClipboardItem({
    [blob.type]: blob,
    'text/plain': textBlob
  });
  await navigator.clipboard.write([item]);
}

const STUDY_DESTINATIONS = {
  perplexity: {
    label: 'Perplexity',
    url: 'https://www.perplexity.ai/'
  },
  gemini: {
    label: 'Gemini',
    url: 'https://gemini.google.com/app'
  },
  grok: {
    label: 'Grok',
    url: 'https://x.com/i/grok'
  }
};

convertBtn.addEventListener('click', async () => {
  try {
    convertBtn.disabled = true;
    updateStatus('Extracting content and preparing Markdown...', 'info');
    resetProgress();

    const settings = persistSettings();
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    if (!tab || !isHttpUrl(tab.url)) {
      updateStatus('Open a website (http/https) to save it to KnowledgeBase.', 'warning');
      convertBtn.disabled = false;
      return;
    }

    chrome.tabs.sendMessage(tab.id, { action: 'extractContent', headingOffset: 1 }, async (response) => {
      if (chrome.runtime.lastError) {
        updateStatus('Could not connect to this page. Try refreshing and retry.', 'error');
        convertBtn.disabled = false;
        return;
      }

      if (!response || !response.success) {
        const errorMsg = response ? response.error : 'Unknown error occurred';
        updateStatus(`Error: ${errorMsg}`, 'error');
        convertBtn.disabled = false;
        return;
      }

      const built = await buildMarkdown(response);
      currentMarkdown = built.markdown;
      currentHash = built.contentHash;
      currentWordCount = built.wordCount;

      const url = new URL(response.url);
      const urlHash = await shortHash(url.href);
      currentFilePath = buildDownloadPath(settings.baseFolder, url, urlHash);

      const blob = new Blob([currentMarkdown], { type: 'text/markdown' });
      const blobUrl = URL.createObjectURL(blob);

      chrome.downloads.download({
        url: blobUrl,
        filename: currentFilePath,
        saveAs: false,
        conflictAction: settings.overwrite ? 'overwrite' : 'uniquify'
      }, (downloadId) => {
        if (chrome.runtime.lastError || !downloadId) {
          updateStatus(`Download failed: ${chrome.runtime.lastError?.message || 'unknown error'}`, 'error');
        } else {
          updateStatus('Saved to KnowledgeBase. Ready for RAG.', 'success');
          showActions(true);
          fileNameEl.textContent = currentFilePath;
          wordCountEl.textContent = String(currentWordCount);
          contentHashEl.textContent = currentHash.slice(0, 12);

          const previewText = currentMarkdown.substring(0, 900) + (currentMarkdown.length > 900 ? '...' : '');
          previewContent.textContent = previewText;

          saveEntry({
            url: url.href,
            title: response.title || response.pageTitle || url.hostname,
            last_saved_at: new Date().toISOString(),
            content_hash: currentHash,
            word_count: currentWordCount,
            file_path: currentFilePath
          });
        }
        setTimeout(() => URL.revokeObjectURL(blobUrl), 1500);
        convertBtn.disabled = false;
        refreshStats();
      });
    });
  } catch (error) {
    updateStatus(`Error: ${error.message}`, 'error');
    convertBtn.disabled = false;
  }
});

captureStudyBtn?.addEventListener('click', async () => {
  try {
    captureStudyBtn.disabled = true;
    updateStatus('Capturing a study snapshot...', 'info');
    showStudyCard(false);

    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab || !isHttpUrl(tab.url)) {
      updateStatus('Open a website (http/https) to capture a study prompt.', 'warning');
      captureStudyBtn.disabled = false;
      return;
    }

    chrome.tabs.captureVisibleTab(tab.windowId, { format: 'png' }, (dataUrl) => {
      if (chrome.runtime.lastError || !dataUrl) {
        updateStatus(`Capture failed: ${chrome.runtime.lastError?.message || 'unknown error'}`, 'error');
        captureStudyBtn.disabled = false;
        return;
      }

      studyImageUrl = dataUrl;
      studyPreview.src = dataUrl;
      studyPromptText = buildStudyPrompt(tab.url, tab.title || '');
      studyPromptEl.textContent = studyPromptText;
      showStudyCard(true);
      updateStatus('Study pack ready. Copy the prompt and screenshot.', 'success');
      captureStudyBtn.disabled = false;
    });
  } catch (error) {
    updateStatus(`Capture failed: ${error.message}`, 'error');
    captureStudyBtn.disabled = false;
  }
});

copyPromptBtn?.addEventListener('click', async () => {
  if (!studyPromptText) {
    updateStatus('No study prompt yet. Capture a problem first.', 'warning');
    return;
  }
  try {
    await navigator.clipboard.writeText(studyPromptText);
    updateStatus('Study prompt copied to clipboard.', 'success');
  } catch (error) {
    updateStatus(`Copy failed: ${error.message}`, 'error');
  }
});

copyImageBtn?.addEventListener('click', async () => {
  if (!studyImageUrl) {
    updateStatus('No screenshot yet. Capture a problem first.', 'warning');
    return;
  }
  try {
    await copyImageToClipboard(studyImageUrl);
    updateStatus('Screenshot copied to clipboard.', 'success');
  } catch (error) {
    updateStatus(`Image copy failed: ${error.message}`, 'error');
  }
});

sendStudyBtn?.addEventListener('click', async () => {
  if (!studyPromptText || !studyImageUrl) {
    updateStatus('Capture a study pack first.', 'warning');
    return;
  }
  const destination = STUDY_DESTINATIONS[destinationSelect?.value || 'perplexity'];
  if (!destination) {
    updateStatus('Select a destination to continue.', 'warning');
    return;
  }
  try {
    await copyStudyPackToClipboard(studyPromptText, studyImageUrl);
    chrome.tabs.create({ url: destination.url });
    updateStatus(`Copied study pack. Paste into ${destination.label}.`, 'success');
  } catch (error) {
    updateStatus(`Send failed: ${error.message}`, 'error');
  }
});

refreshAllBtn.addEventListener('click', async () => {
  refreshAllBtn.disabled = true;
  updateStatus('Refreshing all saved sites...', 'info');
  const stats = await getSavedStats();
  if (!stats.count) {
    updateStatus('No saved sites yet. Save a page first.', 'warning');
    refreshAllBtn.disabled = false;
    resetProgress();
    return;
  }
  setProgress(0, stats.count);

  chrome.runtime.sendMessage({ action: 'refreshAllSavedSites' }, (response) => {
    if (!response || !response.success) {
      updateStatus('Refresh request failed. Try again.', 'error');
      refreshAllBtn.disabled = false;
      resetProgress();
      return;
    }
  });
});

chrome.runtime.onMessage.addListener((request) => {
  if (request.action !== 'refreshProgress') return;
  const progress = request.progress;
  if (!progress) return;

  if (progress.total === 0) {
    updateStatus('No saved sites to refresh.', 'warning');
    refreshAllBtn.disabled = false;
    resetProgress();
    refreshStats();
    return;
  }

  setProgress(progress.completed, progress.total);
  if (progress.success) {
    const status = progress.skipped ? 'Skipped unchanged' : 'Updated';
    updateStatus(`${status}: ${progress.completed}/${progress.total}`, 'success');
  } else {
    updateStatus(`Failed on ${progress.completed}/${progress.total}: ${progress.error || 'unknown error'}`, 'error');
  }

  if (progress.completed === progress.total) {
    updateStatus('Refresh complete.', 'success');
    refreshAllBtn.disabled = false;
    resetProgress();
    refreshStats();
  }
});

copyBtn.addEventListener('click', async () => {
  if (!currentMarkdown) {
    updateStatus('No Markdown to copy yet. Save a site first.', 'error');
    return;
  }

  try {
    await navigator.clipboard.writeText(currentMarkdown);
    updateStatus('Markdown copied to clipboard.', 'success');
  } catch (error) {
    updateStatus(`Copy failed: ${error.message}`, 'error');
  }
});

baseFolderInput.addEventListener('blur', () => {
  baseFolderInput.value = sanitizeFolder(baseFolderInput.value);
  persistSettings();
});

overwriteToggle.addEventListener('change', () => {
  persistSettings();
});

skipUnchangedToggle.addEventListener('change', () => {
  persistSettings();
});

openDownloadsSettings.addEventListener('click', () => {
  chrome.tabs.create({ url: 'chrome://settings/downloads' });
});

window.addEventListener('DOMContentLoaded', async () => {
  await loadSettings();

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0] && isHttpUrl(tabs[0].url)) {
      updateStatus('Ready to capture the current page.', 'info');
      convertBtn.disabled = false;
    } else {
      updateStatus('Open a website (http/https) to save it to KnowledgeBase.', 'warning');
      convertBtn.disabled = true;
    }
  });

  refreshStats();
});
