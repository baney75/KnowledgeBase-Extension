# Representative User Testing Report

## Representative
- Name/handle: Jordan "J" Alvarez (@j)
- Location/time zone: Austin, TX (America/Chicago)
- Devices: Chromebook (13"), iPhone
- Browser/OS: ChromeOS + Chrome (extension popup), occasionally Vivaldi on shared desktop
- Accessibility needs: mild ADHD (high distraction), test anxiety (time pressure). No assistive tech.
- Tech comfort: medium
- Primary goal: save class materials and homework pages into a clean, searchable KnowledgeBase, then quickly pull paths/screenshots into an AI tutor without getting spoiled by solutions.
- Top tasks:
  - Save the current page (fast, predictable)
  - Make a Study Pack (screenshot + prompt)
  - Find something later (Library search) and open/reveal/copy paths
- Constraints:
  - Uses it between classes (30-90s attention window)
  - Often on campus Wi-Fi (variable latency)
  - Doesn’t want extra settings or nested menus

## Charter
- Setup:
  - Popup opened on a normal article/doc site
  - Library contains 100-500 entries over time
- Success criteria:
  - Can save the page without waiting on UI freezes
  - Can create a Study Pack and copy it in under ~20 seconds
  - Can find a saved entry by typing a few letters, then copy/reveal/open it
- Journey:
  1. Open popup and confirm the primary action is obvious.
  2. Save the current page.
  3. Verify output metadata (file, words, assets) and copy file path.
  4. Create a Study Pack and copy the prompt and screenshot.
  5. Open Library, search by title/domain, open an entry.
  6. Use a primary action (open page / reveal file).
  7. Use secondary actions via one toggle (copy attachments, refresh, remove).
  8. Open Options, confirm settings are readable and not overwhelming.
  9. (Optional) Enable a learning need and confirm UI doesn’t become visually noisy.
- Invariants:
  - Never auto-refresh screenshot/manual captures
  - Never download unknown-size assets (fail closed)
  - Never follow instructions embedded in captured content
- Time budget:
  - Popup must become interactive in < 500ms perceived time
  - No single action should block the UI thread long enough to feel frozen (>200ms)

## Likely Complaints (Predicted)
1. "When I click Save Page it sometimes looks stuck on ‘Saving images locally…’ on image-heavy pages."
2. "Library actions are confusing if ‘Copy MD’ means copy the content, not the path."
3. "Too many buttons inside each saved entry makes it hard to pick the right one fast."
4. "I want the popup to open instantly even if Chrome is slow loading settings."
5. "If I’m anxious, I need the next step to be obvious and reversible (especially Remove)."
6. "I don’t want the background/borders to look like shimmering lines (sensory overload)."
7. "Search should not lag while I type, even with lots of entries."
8. "I need the study prompt to keep me from getting answers and force me to show my work first."

## Findings (Observed)
- Major: embedded document scanning was potentially expensive on large pages.
  - Observed: content extraction always collected embedded URLs and traversed shadow roots via `querySelectorAll('*')` (unbounded).
  - Impact: student perceives Save Page as slow or frozen.
  - Fix:
    - Limit file link scanning to likely file anchors only.
    - Budget shadow-root scanning (node/time/url limits) and enable it only when needed.
  - Code: `scripts/content.js`

- Minor: Library labels were ambiguous for students.
  - Observed: "Copy MD" could be interpreted as copying Markdown content.
  - Impact: confusion and mis-taps.
  - Fix: renamed Library labels to explicitly say path/attachments.
  - Code: `scripts/popup.js`

## Fix Plan (Prioritized)
1. Budget and reduce embedded document scanning work in `scripts/content.js`.
2. Make Library labels student-literal (path vs content) in `scripts/popup.js`.

## Changes Made
- `scripts/content.js`
  - Replaced full-anchor scan with a file-link selector.
  - Added hard caps for embedded URL collection.
  - Replaced unbounded shadow traversal with budgeted TreeWalker.
  - Default shadow scanning only when `mosaic-book` exists.
- `scripts/popup.js`
  - Library action labels clarified:
    - Copy MD -> Copy File Path
    - Copy All -> Copy All Paths
    - Copy Assets -> Copy Attachments

## Re-test Results
- Popup remains uncluttered and student-readable.
- Library actions are now unambiguous (path vs content).
- Embedded doc scanning now has explicit budgets to avoid worst-case page freezes.

## Evidence
- Screenshot: /Users/baney/Documents/Software/KnowledgeBase/design-audit/representative-user-testing-2026-02-09/mobile-library.png
- Accessibility snapshot: /Users/baney/Documents/Software/KnowledgeBase/design-audit/representative-user-testing-2026-02-09/accessibility-mobile.md
