const { test, expect } = require('playwright/test');
const fs = require('fs');

async function openLibrary(page) {
  await page.goto('http://127.0.0.1:4314/popup.html', { waitUntil: 'domcontentloaded' });
  await page.getByText('KnowledgeBase Library', { exact: true }).click();
  await page.getByText('Example Capture', { exact: true }).click();
}

test('capture iteration7', async ({ page }) => {
  await page.addInitScript(() => {
    try { localStorage.setItem('kb_debug_perf', '1'); } catch (e) {}
  });

  const outDir = 'design-audit/iteration7-bg-soft-librarygrid';

  await page.setViewportSize({ width: 375, height: 667 });
  await openLibrary(page);
  await page.waitForTimeout(150);
  await page.screenshot({ path: `${outDir}/mobile-375x667.png`, fullPage: true });

  await page.setViewportSize({ width: 768, height: 1024 });
  await openLibrary(page);
  await page.waitForTimeout(150);
  await page.screenshot({ path: `${outDir}/tablet-768x1024.png`, fullPage: true });

  await page.setViewportSize({ width: 1280, height: 720 });
  await openLibrary(page);
  await page.waitForTimeout(150);
  await page.screenshot({ path: `${outDir}/desktop-1280x720.png`, fullPage: true });

  const a11y = await page.accessibility.snapshot();
  fs.writeFileSync(`${outDir}/accessibility.json`, JSON.stringify(a11y, null, 2));

  expect(a11y).toBeTruthy();
});
