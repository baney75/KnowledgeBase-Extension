# AGENTS.md

These instructions apply to the KnowledgeBase Chromium extension in this folder.

## Mission
Build a Chromium extension that saves any webpage as AI-ready Markdown for RAG.
The output should be highly searchable and stable over time.

## Product Name
- KnowledgeBase

## Core Requirements
- Save the current page as Markdown in a KnowledgeBase folder under Chrome Downloads.
- Use URL-based filenames so re-saving overwrites the same file.
- Export Markdown with:
  - YAML frontmatter
  - Metadata table
  - Outline
  - Chunk table + chunk markers
  - Clean content

## Extraction Expectations
- Prefer main content (readable doc/article), minimize nav/ads/boilerplate.
- Keep headings, lists, tables, code blocks, blockquotes, links, and images.
- Preserve relative links by resolving to absolute URLs.

## RAG Optimization
- Chunk content at paragraph boundaries.
- Add chunk markers in the Markdown for retrieval.
- Keep metadata consistent across runs.

## Update Workflow
- Saving the same URL should overwrite the existing file by default.
- Provide Refresh All capability for saved URLs.
- Optional skip when content hash unchanged.

## Constraints
- Chrome extensions cannot choose arbitrary filesystem locations; only Downloads subfolders.
- Chrome extensions cannot auto-upload files to 3rd-party sites.

## Quality Bar
- Avoid noisy content; prefer readable extraction.
- Keep output stable for diffing and RAG.
- Keep UI simple and fast.

## Files to Know
- `manifest.json`
- `scripts/content.js`
- `scripts/popup.js`
- `scripts/background.js`
- `popup.html`
- `styles/popup.css`

## Testing Notes
- Test on:
  - VitalSource bookshelf pages
  - Documentation sites
  - Blog/article pages
- Verify:
  - Markdown renders cleanly
  - File path and overwrite behavior
  - Refresh All updates files
