import { chromium } from 'playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');
const popupPath = path.join(repoRoot, 'popup.html');
const popupUrl = new URL(`file://${popupPath}`).toString();

const shots = [
  { name: 'popup-360x640', width: 360, height: 640 },
  { name: 'popup-390x640', width: 390, height: 640 },
  { name: 'popup-768x1024', width: 768, height: 1024 }
];

const outDir = path.join(repoRoot, 'design-audit', 'iteration12-vendor-pdfjs-soft-icons');

const browser = await chromium.launch();
try {
  for (const shot of shots) {
    const context = await browser.newContext({ viewport: { width: shot.width, height: shot.height }, deviceScaleFactor: 2 });
    const page = await context.newPage();
    await page.goto(popupUrl, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(100);
    await page.screenshot({ path: path.join(outDir, `${shot.name}.png`), fullPage: true });
    await context.close();
  }
} finally {
  await browser.close();
}
