# Representative User Testing Report (2026-02-10)

## Representative
- Name: Alex R. (alexr)
- Environment: macOS, Chromium (Vivaldi/Chrome), uses extension popup frequently during homework
- Tech comfort: Medium
- Time pressure: High (between classes)
- Primary goal: Capture pages and quickly get a tutor-style prompt into their chosen AI without losing context
- Top tasks:
  - Save a page to Markdown (with assets)
  - Study Capture and open AI destination
  - Find an older capture in the Library and remove an incorrect entry

## Edge Personas (Accessibility)
- “Nina V.”: Visual Snow Syndrome (sensitive to high-frequency textures and border grids)
- “Sam D.”: Dyslexia (needs slightly larger type and less dense text blocks)
- “Chris M.”: Dyscalculia (prefers explicit labels, avoids ambiguous icons-only actions)
- “Jordan A.”: ADHD (needs minimal choices and fast feedback; hates slow lists)
- “Riley O.”: OCD (needs predictable outcomes; removal must be explicit and reliable)
- “Taylor S.”: HFA/Autism (prefers stable layouts, low animation)
- “Morgan K.”: Anxiety (needs gentle errors and clear recovery steps)

## Charter
1. Open the popup.
2. Confirm the primary action is obvious and the UI is calm.
3. Open Library and search for an entry.
4. Expand entry, use primary actions, then use `More` for secondary actions.
5. Remove a bad entry and confirm the count updates.
6. Right-click on a page selection and send to AI.
7. If anything fails, find actionable diagnostics without leaving the popup.

## Likely Complaints (Predicted)
- Alex (time pressure): “This feels slow when I search my library.”
- Jordan (ADHD): “Too many nested menus; I can’t find the action quickly.”
- Riley (OCD): “Remove looks like it worked but the item is still there.”
- Nina (VSS): “The background and borders look like faint lines; it hurts to focus.”
- Sam (Dyslexia): “Text feels cramped and low contrast in dense sections.”
- Taylor (Autism): “Motion/transitions make it feel unstable.”
- Morgan (Anxiety): “When it breaks, I don’t know what to do.”

## Findings (Observed) and Fixes
- Blocker: Library actions could no-op when entries lacked `url` (file import/legacy entries).
  - Fix: stable per-entry key (`url` or `file_path`/`download_id`) so action lookup never depends solely on URL.
- Major: Background “crash” reports were hard to debug without service worker logs.
  - Fix: record last background error into `chrome.storage.local` and surface it in a collapsed Diagnostics panel.
- Major: Students requested a right-click menu entrypoint.
  - Fix: context menu “KnowledgeBase: Send to AI” copies a student-safe prompt (offscreen clipboard) and opens the chosen AI destination.
- Minor (VSS): reduce background/border “line intensity”.
  - Fix: keep background texture low-frequency; disable texture and soften borders/shadows when VSS is selected.

## Re-test Results
- Library interactions remain fast in preview (batched rendering + debounced search).
- `+/-` affordances are consistent on panels and nested details.
- Context-menu flow is implemented (copy prompt + open AI).
- Diagnostics provides an in-product breadcrumb trail for crash reports.

