import { createRequire } from 'node:module';
import { chromium } from 'playwright-core';

const require = createRequire(import.meta.url);
const axePath = require.resolve('axe-core/axe.min.js');
const URL = 'https://www.matchakohi.store/';
const errors = [];
const failures = [];

const browser = await chromium.launch({
  executablePath:
    process.env.BROWSER_PATH || 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  headless: true,
});
const context = await browser.newContext({ viewport: { width: 1440, height: 960 } });
const page = await context.newPage();
page.on('console', (message) => {
  if (message.type() === 'error') errors.push(message.text());
});
page.on('pageerror', (error) => errors.push(error.message));
page.on('requestfailed', (request) =>
  failures.push(`${request.url()} — ${request.failure()?.errorText}`),
);

await page.goto(URL, { waitUntil: 'networkidle' });
await page.waitForSelector('.selection');
await page.waitForTimeout(700);
console.log('Title:', await page.title());
console.log('Selection visible:', await page.locator('.selection').isVisible());
console.log('Theme before choice:', await page.evaluate(() => document.documentElement.dataset.theme));
console.log(
  'Active stylesheet loaded:',
  await page.evaluate(() => document.styleSheets.length > 0),
);
console.log(
  'Canonical:',
  await page.locator('link[rel="canonical"]').getAttribute('href'),
);
console.log(
  'OG URL:',
  await page.locator('meta[property="og:url"]').getAttribute('content'),
);
console.log('Clean initial address:', page.url());

await page.getByRole('button', { name: /Explore Coffee/ }).click();
await page.waitForTimeout(900);
console.log('Coffee hero:', (await page.locator('#hero-title').innerText()).replace(/\n/g, ' '));
console.log('Data theme:', await page.evaluate(() => document.documentElement.dataset.theme));
console.log('Clean address after choice:', page.url());

await page.getByRole('radio', { name: 'Matcha' }).click();
await page.waitForTimeout(800);
console.log('Matcha hero:', (await page.locator('#hero-title').innerText()).replace(/\n/g, ' '));
console.log('Matcha origin title:', await page.locator('#origins-title').innerText());
console.log('Clean address after switch:', page.url());

await page.reload({ waitUntil: 'networkidle' });
await page.waitForTimeout(500);
console.log('Selection after reload:', await page.locator('.selection').count());
console.log('Theme after reload:', await page.evaluate(() => document.documentElement.dataset.theme));
console.log('Clean address after reload:', page.url());

await page.evaluate(async () => {
  for (const img of document.querySelectorAll('img')) img.loading = 'eager';
  const deadline = Date.now() + 10000;
  while (Date.now() < deadline) {
    if ([...document.querySelectorAll('img')].every((img) => img.complete)) break;
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
});
const broken = await page.evaluate(() =>
  [...document.querySelectorAll('img')]
    .filter((img) => !img.complete || img.naturalWidth === 0)
    .map((img) => img.currentSrc || img.src),
);
console.log('Images:', await page.locator('img').count(), 'broken:', broken.length ? broken : 'none');

await page.addScriptTag({ path: axePath });
const axe = await page.evaluate(async () => {
  // eslint-disable-next-line no-undef
  return window.axe.run(document, {
    runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] },
  });
});
console.log('Axe violations:', axe.violations.length);
for (const violation of axe.violations) {
  console.log(' -', violation.impact, violation.id, violation.help);
}

const og = await page.evaluate(
  () => document.querySelector('meta[property="og:image"]')?.getAttribute('content'),
);
if (og) {
  const response = await page.request.get(og);
  console.log('OG image:', response.status(), og);
}

await page.goto(`${URL}?theme=coffee#sources`, { waitUntil: 'networkidle' });
await page.waitForTimeout(900);
console.log('Legacy theme applied:', await page.evaluate(() => document.documentElement.dataset.theme));
console.log('Legacy address cleaned:', page.url());
console.log(
  'Legacy section scroll:',
  await page.evaluate(() => Math.round(window.scrollY)),
);

const alias = await page.goto('https://mimi-kimi.github.io/Matchakohi/', {
  waitUntil: 'networkidle',
});
await page.waitForTimeout(900);
console.log('Legacy GitHub URL redirects to:', page.url(), '(HTTP', alias?.status(), ')');

console.log('Console errors:', errors.length ? errors : 'none');
console.log('Failed requests:', failures.length ? failures : 'none');
await browser.close();
