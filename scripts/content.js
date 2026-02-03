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

const NOISE_PATTERN = /(nav|footer|sidebar|advert|ads|promo|subscribe|cookie|modal|popup|banner|share|social|comment)/i;

function getMetaContent(name) {
  return document.querySelector(`meta[name="${name}"]`)?.content || '';
}

function getMetaProperty(prop) {
  return document.querySelector(`meta[property="${prop}"]`)?.content || '';
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
  return textLength - linkTextLength * 0.5;
}

function findVitalSourceContent() {
  const mosaicBook = document.querySelector('mosaic-book');
  if (mosaicBook && mosaicBook.shadowRoot) {
    const iframe = mosaicBook.shadowRoot.querySelector('iframe');
    if (iframe && iframe.contentDocument && iframe.contentDocument.body) {
      return { element: iframe.contentDocument.body, selector: 'mosaic-book iframe body' };
    }
  }
  return null;
}

function findMainContent() {
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
        const src = resolveUrl(node.getAttribute('src') || '');
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
  if (request.action !== 'extractContent') return;

  try {
    const content = findMainContent();
    if (!content || !content.element) {
      sendResponse({
        success: false,
        error: 'Could not find main content on this page.'
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
        error: 'No substantial content found on this page.'
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
      meta: metadata
    });
  } catch (error) {
    sendResponse({
      success: false,
      error: `Error extracting content: ${error.message}`
    });
  }

  return true;
});

console.log('KnowledgeBase content script loaded');
