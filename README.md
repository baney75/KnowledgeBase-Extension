# KnowledgeBase Chrome Extension

Save any page (including VitalSource) as AI-ready Markdown for RAG and search.

## What’s New (v1.2)

- Saved URL library and **Refresh All** workflow
- Chunked Markdown with `KB:chunk` markers and chunk table
- Optional skip when content is unchanged (hash match)

## Features

- **One-click capture**: Save the current page to your KnowledgeBase folder
- **RAG-optimized Markdown**: YAML frontmatter, metadata table, outline, chunks, and clean content
- **Stable file naming**: URL-based filenames so re-saving overwrites the same file
- **Main-content extraction**: Focuses on relevant content while removing boilerplate
- **Saved URL library**: Refresh all saved sites when docs change

## Installation (Unpacked)

1. Open `chrome://extensions/` in Chrome
2. Enable **Developer mode**
3. Click **Load unpacked** and select the `vitalsource-to-md-extension` folder

## How to Use

1. Open any page you want to capture (VitalSource, documentation, articles, etc.)
2. Click the KnowledgeBase extension
3. Click **Save Site to KnowledgeBase**
4. The Markdown file is downloaded automatically

To keep docs current, click **Refresh All Saved Sites**.

## Folder Location

Files are saved inside your Chrome **Downloads** directory, under a folder you can configure in the popup.

To save directly into `Documents/KnowledgeBase`, set Chrome’s download location to your Documents folder:

1. Open **Download Settings** from the extension
2. Set the download location to `~/Documents`
3. Keep the extension folder set to `KnowledgeBase`

## Output Format

Every Markdown file includes:

- YAML frontmatter (title, URL, timestamps, word count, hash)
- A metadata table
- An outline section (headings)
- A chunks table + `KB:chunk` markers
- Cleaned content

Example top-of-file layout:

```
---
kb_version: "1.1"
title: "Example Page"
source_url: "https://example.com/docs"
source_domain: "example.com"
captured_at: "2026-02-03T12:00:00.000Z"
word_count: 1234
content_hash: "sha256:..."
---
| Field | Value |
| --- | --- |
| Title | Example Page |
| URL | https://example.com/docs |
| Domain | example.com |
| Captured | 2026-02-03T12:00:00.000Z |
| Words | 1234 |
| Content hash | sha256:... |

# Example Page

## Outline
- Heading One
  - Subheading

## Chunks
| Chunk | Words |
| --- | --- |
| 1 | 350 |
| 2 | 310 |

## Content
<!-- KB:chunk:1 -->
...
```

## Updating Files

The extension uses a URL-based filename and overwrites by default. If the page changes, just save again to update the existing file.

## Limitations

- Chrome extensions cannot automatically upload local files to NotebookLM or other sites. The extension saves files locally; you can upload them manually from your KnowledgeBase folder.
- Refresh All opens background tabs to re-extract content; on large libraries this can take time.

## Permissions

- **downloads**: save Markdown files
- **storage**: remember folder and overwrite settings
- **activeTab / host permissions**: read page content to convert

## Legal

Please respect publisher and site terms of service when saving content.
