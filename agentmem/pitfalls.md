# Memory

## Pitfalls
- 2026-02-04 Extraction fails on protected textbook sites; use screenshot fallback and mark entries non-refreshable.
- 2026-02-04 Perplexity can output raw attachment URLs unless the prompt forbids them; force Sources section and avoid inline links.
- 2026-02-04 PDF text extraction requires PDF.js; without it, store a PDF attachment wrapper instead of text.
- 2026-02-05 Some image URLs block HEAD or require auth; asset downloads can fail. If so, keep original URLs and proceed.
- 2026-02-05 Regex escaping in JS regex literals can break file extension detection and image parsing; use single backslashes in regex literals.
- 2026-02-06 Office extraction can fail on malformed files; always fall back to attachment wrappers instead of blocking the save flow.
- 2026-02-06 PDF.js worker must be loaded via `GlobalWorkerOptions.workerSrc`; do not include the worker script directly in the popup HTML.
