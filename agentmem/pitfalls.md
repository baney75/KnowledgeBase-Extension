# Memory

## Pitfalls
- 2026-02-04 Extraction fails on protected textbook sites; use screenshot fallback and mark entries non-refreshable.
- 2026-02-04 Perplexity can output raw attachment URLs unless the prompt forbids them; force Sources section and avoid inline links.
- 2026-02-04 PDF text extraction requires PDF.js; without it, store a PDF attachment wrapper instead of text.
- 2026-02-05 Some image URLs block HEAD or require auth; asset downloads can fail. If so, keep original URLs and proceed.
- 2026-02-05 Regex escaping in JS regex literals can break file extension detection and image parsing; use single backslashes in regex literals.
- 2026-02-06 Office extraction can fail on malformed files; always fall back to attachment wrappers instead of blocking the save flow.
- 2026-02-06 PDF.js worker must be loaded via `GlobalWorkerOptions.workerSrc`; do not include the worker script directly in the popup HTML.
- 2026-02-08 Some servers block HEAD/Range responses; treat unknown-size downloads as unsafe and skip them to avoid oversized attachments.
- 2026-02-08 Opening `popup.html` outside the extension runtime can crash if code assumes `chrome.*`; guard with `IS_EXTENSION_RUNTIME` for local preview and design audits.
- 2026-02-08 Preview mode must guard any Library action that calls `chrome.*` (for example: Open Source, Reveal File), not just refresh/remove.
- 2026-02-08 Library UX/perf can regress if entry actions are nested inside additional `<details>` accordions or if the list is re-sorted/re-rendered on every keystroke; keep disclosure shallow and cache/batch rendering work.
- 2026-02-09 Hashing full `data:` image URLs can be expensive on pages with inline base64 images; use a stable truncated hash key to avoid multi-megabyte string hashing.
- 2026-02-09 Content script embedded-url collection can become a worst-case perf trap if it scans all anchors or traverses all DOM nodes/shadows unbounded; keep it selector-based and time-bounded.
- 2026-02-09 Library actions can silently fail if older entries are missing `url` (only `source_url` present); normalize entries on load and match/remove by `url` and `file_path`.
- 2026-02-10 Library actions can also fail for file imports or legacy entries with no `url` at all; always key entries by `url` or `file_path`/`download_id` and allow Remove to match by these fallbacks.
- 2026-02-10 Vendor builds: aggressive whitespace minification on large vendored bundles can create syntax ambiguities (for example `? .2` collapsing into `?.2`). When transpiling vendor JS, avoid whitespace minification and always verify with `node -c`.
- 2026-02-10 Asset header probing must return a `Headers` object (not a `Response`). If code calls `.get(...)` on the wrong thing, it can crash capture flows and terminate the MV3 service worker, surfacing as “message port closed”.
