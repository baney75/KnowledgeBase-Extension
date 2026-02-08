# Memory

## Decisions
- 2026-02-04 Add an "AI Guide" section to every KnowledgeBase Markdown export with formatting rules, source handling, and prompt-injection guardrails.
- 2026-02-04 Study prompts must teach without solving, request student work before checking, and include memory techniques.
- 2026-02-04 Add protected-content fallback: screenshot capture with Markdown wrapper and mark entries non-refreshable.
- 2026-02-04 Support PDF/Markdown import; wrap imports into KnowledgeBase format with AI Guide and chunking.
- 2026-02-04 Improve popup accessibility and clarity: focus-visible styles, aria-live/progress semantics, larger small-text scale, and collapsible learning-needs section.
- 2026-02-04 Tailor study prompt formatting per destination with table-friendly guidance and platform-specific citation/rendering rules.
- 2026-02-05 Save page images locally into a per-page `.assets` folder and list them in an Assets section with relative paths.
- 2026-02-05 Add a KnowledgeBase Library panel to copy Markdown paths and attachment paths quickly.
- 2026-02-05 Support Office imports (`.docx`, `.pptx`, `.xlsx`, plus legacy formats) as attachment wrappers.
- 2026-02-05 Bump KnowledgeBase Markdown schema to 1.3 to include assets metadata and stronger AI guardrails.
- 2026-02-05 Strengthen study prompts with diagnostic questions, explicit tool guidance, and accessibility-adapted scaffolding.
- 2026-02-05 Detect embedded PDF/Office links (iframes and Blackboard Ally preview URLs) and extract them before HTML capture; full-page screenshot fallback for protected pages.
- 2026-02-05 Add Reveal in Folder actions using downloads metadata or filename search to open files in the OS.
- 2026-02-06 Vendor JSZip + PDF.js to enable docx/pptx/xlsx and PDF text extraction inside the extension; fall back to attachment wrappers when extraction fails.
- 2026-02-06 Split full-page screenshot captures into multiple images for very tall pages and list them in the Markdown assets section.
- 2026-02-06 Use authenticated fetch for embedded docs and fall back to direct downloads when CORS/auth blocks extraction.
- 2026-02-08 Fail closed when asset or attachment size is unknown, enforce data URL size limits, and remove unused manifest permissions.
