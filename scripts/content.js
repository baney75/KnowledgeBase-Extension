// Content script for KnowledgeBase extension
// Extracts main content from the current page and converts to Markdown

const CONTENT_SELECTORS = [
  'article',
  'main',
  '[role="main"]',
  '#content',
  '.content',
  '.article',
  '.post',
  '.entry-content',
  '.markdown-body',
  '.docs-content',
  '.doc-content',
  '.prose',
  '.readme',
  '.documentation',
  '[data-testid="article"]'
];

const REMOVE_SELECTORS = [
  'script',
  'style',
  'noscript',
  'svg',
  'canvas',
  'nav',
  'footer',
  'aside',
  'form',
  'button',
  'input',
  'textarea',
  'select',
  'option',
  'iframe',
  'audio',
  'video'
];

const NOISE_PATTERN = /(nav|footer|sidebar|advert|ads|promo|subscribe|cookie|modal|popup|banner|share|social|comment|breadcrumb|newsletter|related)/i;
let protectedContentDetected = false;
const FILE_EXTENSIONS = ['pdf', 'docx', 'pptx', 'doc', 'ppt', 'xlsx', 'xls'];

function extractMarkdownHeadings(markdown) {
  const headings = [];
  const lines = (markdown || '').split('\n');
  for (const line of lines) {
    const match = line.match(/^(#{1,6})\s+(.*)$/);
    if (match) {
      headings.push({ level: match[1].length, text: match[2].trim(), slug: '' });
    }
  }
  return headings;
}

function getMetaContent(name) {
  return document.querySelector(`meta[name="${name}"]`)?.content || '';
}

function getMetaProperty(prop) {
  return document.querySelector(`meta[property="${prop}"]`)?.content || '';
}

function extensionFromUrl(value) {
  if (!value) return '';
  const match = value.toLowerCase().match(/\.([a-z0-9]+)(\?|#|$)/);
  if (!match) return '';
  const ext = match[1];
  return FILE_EXTENSIONS.includes(ext) ? ext : '';
}

function collectEmbeddedUrls() {
  const urls = new Set();
  const collectFromRoot = (root) => {
    root.querySelectorAll('iframe[src]').forEach((iframe) => {
      const src = iframe.getAttribute('src');
      if (src) urls.add(src);
    });
    root.querySelectorAll('[data-ally-file-preview-url]').forEach((node) => {
      const value = node.getAttribute('data-ally-file-preview-url');
      if (value) urls.add(value);
    });
    root.querySelectorAll('[data-ally-file-preview]').forEach((node) => {
      const value = node.getAttribute('data-ally-file-preview');
      if (value) urls.add(value);
    });
    root.querySelectorAll('a[href]').forEach((anchor) => {
      const href = anchor.getAttribute('href');
      if (href && extensionFromUrl(href)) urls.add(href);
    });
  };

  const traverseShadows = (root) => {
    root.querySelectorAll('*').forEach((node) => {
      if (node.shadowRoot) {
        collectFromRoot(node.shadowRoot);
        traverseShadows(node.shadowRoot);
      }
    });
  };

  collectFromRoot(document);
  traverseShadows(document);

  const pdfUrls = [];
  const fileUrls = [];
  const unknownUrls = [];

  Array.from(urls).forEach((raw) => {
    let resolved = raw;
    try {
      resolved = new URL(raw, document.baseURI).href;
    } catch (error) {
      resolved = raw;
    }
    const ext = extensionFromUrl(resolved);
    if (ext === 'pdf') {
      pdfUrls.push(resolved);
    } else if (ext) {
      fileUrls.push(resolved);
    } else {
      unknownUrls.push(resolved);
    }
  });

  return { pdfUrls, fileUrls, unknownUrls };
}

function extractMetadata() {
  const language = document.documentElement?.lang || getMetaProperty('og:locale') || '';
  const siteName = getMetaProperty('og:site_name') || getMetaContent('application-name') || '';
  const description = getMetaContent('description') || getMetaProperty('og:description') || '';
  const author = getMetaContent('author') || getMetaProperty('article:author') || '';
  const publishedTime = getMetaProperty('article:published_time') || getMetaProperty('og:published_time') || '';
  const modifiedTime = getMetaProperty('article:modified_time') || getMetaProperty('og:updated_time') || getMetaContent('last-modified') || '';
  const lastModified = document.lastModified || '';

  return {
    language,
    siteName,
    description,
    author,
    publishedTime,
    modifiedTime,
    lastModified
  };
}

function scoreElement(element) {
  const text = element.textContent || '';
  const textLength = text.trim().length;
  if (textLength < 200) return 0;
  let linkTextLength = 0;
  element.querySelectorAll('a').forEach((link) => {
    linkTextLength += (link.textContent || '').length;
  });
  const linkDensity = linkTextLength / Math.max(1, textLength);
  const paragraphCount = element.querySelectorAll('p').length;
  const headingCount = element.querySelectorAll('h1,h2,h3').length;
  const imageCount = element.querySelectorAll('img').length;
  return textLength
    + paragraphCount * 40
    + headingCount * 25
    + Math.min(imageCount, 10) * 10
    - linkDensity * 200;
}

function findVitalSourceContent() {
  const mosaicBook = document.querySelector('mosaic-book');
  if (mosaicBook && mosaicBook.shadowRoot) {
    const iframe = mosaicBook.shadowRoot.querySelector('iframe');
    if (iframe) {
      try {
        if (iframe.contentDocument && iframe.contentDocument.body) {
          return { element: iframe.contentDocument.body, selector: 'mosaic-book iframe body' };
        }
        protectedContentDetected = true;
      } catch (error) {
        protectedContentDetected = true;
      }
    }
  }
  return null;
}

function findMainContent() {
  protectedContentDetected = false;
  const vital = findVitalSourceContent();
  if (vital) return vital;

  let bestElement = null;
  let bestScore = 0;
  let bestSelector = '';

  for (const selector of CONTENT_SELECTORS) {
    document.querySelectorAll(selector).forEach((element) => {
      const score = scoreElement(element);
      if (score > bestScore) {
        bestScore = score;
        bestElement = element;
        bestSelector = selector;
      }
    });
  }

  if (!bestElement && document.body) {
    bestElement = document.body;
    bestSelector = 'body';
  }

  return bestElement ? { element: bestElement, selector: bestSelector } : null;
}

function cloneAndPrune(element) {
  const clone = element.cloneNode(true);
  clone.querySelectorAll(REMOVE_SELECTORS.join(',')).forEach((node) => node.remove());
  clone.querySelectorAll('[aria-hidden="true"]').forEach((node) => node.remove());

  clone.querySelectorAll('[class],[id]').forEach((node) => {
    const id = node.id || '';
    const className = node.className || '';
    if (NOISE_PATTERN.test(id) || NOISE_PATTERN.test(className)) {
      const textLength = (node.textContent || '').trim().length;
      if (textLength < 400) {
        node.remove();
      }
    }
  });

  return clone;
}

function normalizeText(text) {
  return text.replace(/\s+/g, ' ');
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'section';
}

function htmlToMarkdown(root, options = {}) {
  if (!root) return { markdown: '', headings: [], text: '' };

  const headings = [];
  const baseUrl = options.baseUrl || location.href;
  const headingOffset = Number.isInteger(options.headingOffset) ? options.headingOffset : 0;

  function resolveUrl(url) {
    if (!url) return '';
    try {
      return new URL(url, baseUrl).href;
    } catch (error) {
      return url;
    }
  }

  function processInlineChildren(node) {
    let result = '';
    node.childNodes.forEach((child) => {
      result += processNode(child, true);
    });
    return result;
  }

  function pickBestSrcset(srcset) {
    if (!srcset) return '';
    const candidates = srcset
      .split(',')
      .map(part => part.trim())
      .map((entry) => {
        const [url, descriptor] = entry.split(/\s+/);
        let score = 0;
        if (descriptor && descriptor.endsWith('w')) {
          score = parseInt(descriptor.replace('w', ''), 10) || 0;
        } else if (descriptor && descriptor.endsWith('x')) {
          score = (parseFloat(descriptor.replace('x', '')) || 1) * 1000;
        }
        return { url, score };
      })
      .filter(candidate => candidate.url);
    candidates.sort((a, b) => b.score - a.score);
    return candidates[0]?.url || '';
  }

  function getImageSource(node) {
    const srcset = node.getAttribute('srcset') || node.getAttribute('data-srcset') || '';
    const srcsetUrl = pickBestSrcset(srcset);
    if (srcsetUrl) return resolveUrl(srcsetUrl);
    const attrs = ['src', 'data-src', 'data-original', 'data-lazy-src', 'data-src'];
    for (const attr of attrs) {
      const value = node.getAttribute(attr);
      if (value) return resolveUrl(value);
    }
    return '';
  }

  function processList(listNode, ordered, depth) {
    let result = '\n';
    let index = 1;
    Array.from(listNode.children).forEach((child) => {
      if (child.tagName && child.tagName.toLowerCase() === 'li') {
        result += processListItem(child, ordered, depth, index);
        index += 1;
      }
    });
    return result + '\n';
  }

  function processListItem(listItem, ordered, depth, index) {
    const indent = '  '.repeat(depth);
    const prefix = ordered ? `${index}. ` : '- ';
    let textContent = '';
    let nested = '';

    listItem.childNodes.forEach((child) => {
      if (child.nodeType === Node.ELEMENT_NODE) {
        const tag = child.tagName.toLowerCase();
        if (tag === 'ul' || tag === 'ol') {
          nested += processList(child, tag === 'ol', depth + 1);
          return;
        }
      }
      textContent += processNode(child, true);
    });

    const line = `${indent}${prefix}${normalizeText(textContent).trim()}\n`;
    return line + nested;
  }

  function processTable(tableNode) {
    const rows = tableNode.querySelectorAll('tr');
    if (!rows.length) return '';

    const getCells = (row) => Array.from(row.querySelectorAll('th, td'));
    const escapeCell = (text) => normalizeText(text).replace(/\|/g, '\\|');

    const headerCells = getCells(rows[0]);
    const header = headerCells.map(cell => escapeCell(cell.textContent || '')).join(' | ');
    const separator = headerCells.map(() => '---').join(' | ');

    let table = `| ${header} |\n| ${separator} |\n`;

    for (let i = 1; i < rows.length; i += 1) {
      const cells = getCells(rows[i]);
      if (!cells.length) continue;
      const rowText = cells.map(cell => escapeCell(cell.textContent || '')).join(' | ');
      table += `| ${rowText} |\n`;
    }

    return table;
  }

  function processNode(node, inline = false) {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = normalizeText(node.nodeValue || '');
      return inline ? text : text;
    }

    if (node.nodeType !== Node.ELEMENT_NODE) return '';

    const tagName = node.tagName.toLowerCase();
    switch (tagName) {
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6': {
        const rawLevel = Number(tagName.substring(1));
        const level = Math.min(6, rawLevel + headingOffset);
        const headingText = normalizeText(node.textContent || '').trim();
        const slug = slugify(headingText);
        headings.push({ level, text: headingText, slug });
        return `\n\n${'#'.repeat(level)} ${headingText}\n\n<!-- KB:section:${slug} -->\n\n`;
      }
      case 'p': {
        const content = normalizeText(processInlineChildren(node)).trim();
        return content ? `\n\n${content}\n\n` : '';
      }
      case 'br':
        return '  \n';
      case 'strong':
      case 'b':
        return `**${processInlineChildren(node).trim()}**`;
      case 'em':
      case 'i':
        return `*${processInlineChildren(node).trim()}*`;
      case 'code':
        return `\`${normalizeText(node.textContent || '').trim()}\``;
      case 'pre': {
        const codeNode = node.querySelector('code');
        const codeText = (codeNode ? codeNode.textContent : node.textContent) || '';
        const languageMatch = codeNode?.className?.match(/language-([a-z0-9-_]+)/i);
        const language = languageMatch ? languageMatch[1] : '';
        const fence = language ? '```' + language + '\n' : '```\n';
        return '\n\n' + fence + codeText.trim() + '\n```\n\n';
      }
      case 'blockquote': {
        const quoteText = normalizeText(processInlineChildren(node)).trim();
        if (!quoteText) return '';
        const lines = quoteText.split(/\n+/).map(line => `> ${line}`);
        return `\n\n${lines.join('\n')}\n\n`;
      }
      case 'ul':
        return processList(node, false, 0);
      case 'ol':
        return processList(node, true, 0);
      case 'li':
        return processInlineChildren(node);
      case 'a': {
        const href = resolveUrl(node.getAttribute('href') || '');
        const text = normalizeText(processInlineChildren(node)).trim();
        if (!text) return href;
        if (!href) return text;
        return `[${text}](${href})`;
      }
      case 'img': {
        const src = getImageSource(node);
        const alt = normalizeText(node.getAttribute('alt') || 'image');
        if (!src) return '';
        return inline ? `![${alt}](${src})` : `\n\n![${alt}](${src})\n\n`;
      }
      case 'hr':
        return '\n\n---\n\n';
      case 'table':
        return `\n\n${processTable(node)}\n\n`;
      default:
        return processInlineChildren(node);
    }
  }

  let markdown = processNode(root);
  markdown = markdown.replace(/\n{3,}/g, '\n\n').trim();

  const text = normalizeText(root.textContent || '').trim();
  return { markdown, headings, text };
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getPageMetrics') {
    const doc = document.documentElement;
    sendResponse({
      success: true,
      totalHeight: Math.max(doc.scrollHeight, doc.offsetHeight, doc.clientHeight),
      viewportHeight: window.innerHeight,
      viewportWidth: window.innerWidth,
      devicePixelRatio: window.devicePixelRatio || 1,
      scrollY: window.scrollY || window.pageYOffset || 0
    });
    return true;
  }

  if (request.action === 'scrollTo') {
    window.scrollTo(0, request.y || 0);
    setTimeout(() => sendResponse({ success: true }), 100);
    return true;
  }

  if (request.action !== 'extractContent') return;

  try {
    const contentType = document.contentType || '';
    const url = location.href;
    const looksLikeMarkdown = contentType.includes('text/markdown')
      || (contentType.includes('text/plain') && url.toLowerCase().endsWith('.md'));
    const embeddedFiles = collectEmbeddedUrls();

    if (looksLikeMarkdown) {
      const rawMarkdown = document.body?.innerText || '';
      const metadata = extractMetadata();
      sendResponse({
        success: Boolean(rawMarkdown.trim()),
        markdown: rawMarkdown,
        text: rawMarkdown,
        headings: extractMarkdownHeadings(rawMarkdown),
        title: document.title || 'markdown',
        pageTitle: document.title || 'markdown',
        url,
        contentSelector: 'body',
        meta: metadata,
        rawMarkdown: true,
        protectedContent: false,
        embeddedFiles
      });
      return true;
    }

    const content = findMainContent();
    if (!content || !content.element) {
      sendResponse({
        success: false,
        error: 'Could not find main content on this page.',
        protectedContent: protectedContentDetected,
        embeddedFiles
      });
      return true;
    }

    const cleaned = cloneAndPrune(content.element);
    const extracted = htmlToMarkdown(cleaned, {
      baseUrl: document.baseURI,
      headingOffset: request.headingOffset || 0
    });

    if (!extracted.markdown || extracted.markdown.length < 50) {
      sendResponse({
        success: false,
        error: 'No substantial content found on this page.',
        protectedContent: protectedContentDetected,
        embeddedFiles
      });
      return true;
    }

    const metadata = extractMetadata();
    const contentTitle = cleaned.querySelector('h1')?.textContent?.trim();
    const pageTitle = document.title || 'untitled-page';
    const title = contentTitle || pageTitle;

    sendResponse({
      success: true,
      markdown: extracted.markdown,
      text: extracted.text,
      headings: extracted.headings,
      title,
      pageTitle,
      url: location.href,
      contentSelector: content.selector,
      meta: metadata,
      protectedContent: protectedContentDetected,
      embeddedFiles
    });
  } catch (error) {
    sendResponse({
      success: false,
      error: `Error extracting content: ${error.message}`,
      embeddedFiles: collectEmbeddedUrls()
    });
  }

  return true;
});

console.log('KnowledgeBase content script loaded');
