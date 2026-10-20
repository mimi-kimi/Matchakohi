import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';
import { setTimeout as sleep } from 'node:timers/promises';
import { chromium } from 'playwright-core';

const require = createRequire(import.meta.url);
const axePath = require.resolve('axe-core/axe.min.js');
const EDGE =
  process.env.BROWSER_PATH || 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const PORT = '4199';
const BASE = `http://127.0.0.1:${PORT}`;
const errors = [];
const failedRequests = [];
const consoleWarnings = [];
const notes = [];

const server = spawn(
  'npm.cmd',
  ['run', 'preview', '--', '--host', '127.0.0.1', '--port', PORT],
  { shell: true, stdio: 'ignore' },
);

async function waitForServer() {
  for (let i = 0; i < 50; i += 1) {
    try {
      const response = await fetch(BASE);
      if (response.ok) return;
    } catch {
      // server not ready yet
    }
    await sleep(250);
  }
  throw new Error('Preview server did not start');
}

function watch(page, label) {
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(`${label}: ${message.text()}`);
    if (message.type() === 'warning') consoleWarnings.push(`${label}: ${message.text()}`);
  });
  page.on('pageerror', (error) => errors.push(`${label}: pageerror — ${error.message}`));
  page.on('requestfailed', (request) =>
    failedRequests.push(`${label}: ${request.url()} — ${request.failure()?.errorText}`),
  );
}

async function runAxe(page, label) {
  await page.addScriptTag({ path: axePath });
  const result = await page.evaluate(async () => {
    // eslint-disable-next-line no-undef
    return window.axe.run(document, {
      runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] },
    });
  });
  const violations = result.violations.map((violation) => ({
    id: violation.id,
    impact: violation.impact,
    help: violation.help,
    nodes: violation.nodes.slice(0, 4).map((node) => node.target.join(' ')),
  }));
  notes.push(`AXE ${label}: ${violations.length} violation types`);
  for (const violation of violations) {
    notes.push(
      `  [${violation.impact}] ${violation.id}: ${violation.help} — ${violation.nodes.join(' | ')}`,
    );
  }
}

async function scrollAll(page) {
  const ids = [
    'origins',
    'process',
    'varieties',
    'flavor',
    'prepare',
    'culture',
    'compare',
    'discover',
    'about',
    'sources',
  ];
  for (const id of ids) {
    await page.locator(`#${id}`).scrollIntoViewIfNeeded();
    await sleep(240);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await sleep(250);
}

async function checkImages(page, label) {
  // Force all lazy images to resolve so this checks asset integrity, not viewport timing.
  await page.evaluate(async () => {
    for (const img of document.querySelectorAll('img')) img.loading = 'eager';
    const deadline = Date.now() + 8000;
    while (Date.now() < deadline) {
      const pending = [...document.querySelectorAll('img')].filter((img) => !img.complete);
      if (!pending.length) break;
      await new Promise((resolve) => setTimeout(resolve, 200));
    }
  });
  await page.waitForTimeout(500);
  const broken = await page.evaluate(() =>
    [...document.querySelectorAll('img')]
      .filter((img) => !img.complete || img.naturalWidth === 0)
      .map((img) => img.getAttribute('src')),
  );
  if (broken.length) notes.push(`BROKEN IMAGES ${label}: ${broken.join(', ')}`);
  else notes.push(`Images OK: ${label} (${await page.locator('img').count()} images)`);
}

async function checkOverflow(page, label) {
  const result = await page.evaluate(() => {
    const vw = window.innerWidth;
    const overflows = [];
    for (const element of document.querySelectorAll('main *, footer *, header *')) {
      const style = getComputedStyle(element);
      if (style.position === 'fixed') continue;
      const rect = element.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) continue;
      if (rect.right <= vw + 1 && rect.left >= -1) continue;
      let parent = element.parentElement;
      let inScroller = false;
      while (parent) {
        const parentStyle = getComputedStyle(parent);
        if (parentStyle.overflowX === 'auto' || parentStyle.overflowX === 'scroll') {
          inScroller = true;
          break;
        }
        parent = parent.parentElement;
      }
      if (inScroller) continue;
      overflows.push({
        tag: element.tagName,
        cls: typeof element.className === 'string' ? element.className.slice(0, 70) : '',
        right: Math.round(rect.right),
        width: Math.round(rect.width),
      });
      if (overflows.length >= 5) break;
    }
    return { documentWidth: document.documentElement.scrollWidth, viewport: vw, overflows };
  });
  const diff = result.documentWidth - result.viewport;
  notes.push(
    `Overflow ${label}: doc ${result.documentWidth} / view ${result.viewport}${
      diff > 1 ? ` — ${diff}px overflow` : ' — OK'
    }${result.overflows.length ? `; ${JSON.stringify(result.overflows)}` : ''}`,
  );
}

async function main() {
  await waitForServer();
  const browser = await chromium.launch({ executablePath: EDGE, headless: true });

  // ------------------------------------------------------------------ desktop
  const desktop = await browser.newContext({ viewport: { width: 1440, height: 960 } });
  const page = await desktop.newPage();
  watch(page, 'desktop');

  await page.goto(BASE, { waitUntil: 'networkidle' });
  await page.waitForSelector('.selection');
  await page.waitForTimeout(900);

  notes.push(`First visit selection visible: ${await page.locator('.selection').isVisible()}`);
  notes.push(
    `Initial data-theme: ${await page.evaluate(() => document.documentElement.dataset.theme)}`,
  );
  await page.screenshot({ path: 'screens/selection-desktop.png' });
  await runAxe(page, 'selection desktop');

  const focusTrapped = [];
  for (let i = 0; i < 8; i += 1) {
    await page.keyboard.press('Tab');
    focusTrapped.push(
      await page.evaluate(() => Boolean(document.activeElement?.closest('.selection'))),
    );
  }
  notes.push(`Selection focus remains trapped for 8 tabs: ${focusTrapped.every(Boolean)}`);
  await page.keyboard.press('Escape');
  notes.push(`First-visit Escape leaves selection open: ${await page.locator('.selection').isVisible()}`);

  await page.getByRole('button', { name: /Explore Coffee/ }).focus();
  await page.keyboard.press('Enter');
  await page.waitForTimeout(900);
  notes.push(`After choosing coffee — selection count: ${await page.locator('.selection').count()}`);
  notes.push(`Coffee hero: ${(await page.locator('#hero-title').innerText()).replace(/\n/g, ' ')}`);
  notes.push(`Stored theme: ${await page.evaluate(() => localStorage.getItem('matchakohi:theme'))}`);
  notes.push(`URL theme: ${new URL(page.url()).searchParams.get('theme')}`);

  await page.getByRole('radio', { name: 'Coffee' }).focus();
  await page.keyboard.press('ArrowRight');
  await page.waitForTimeout(450);
  const keyboardMatcha = await page.evaluate(() => document.documentElement.dataset.theme);
  await page.keyboard.press('ArrowLeft');
  await page.waitForTimeout(450);
  const keyboardCoffee = await page.evaluate(() => document.documentElement.dataset.theme);
  notes.push(`Keyboard switcher ArrowRight/Left: ${keyboardMatcha} → ${keyboardCoffee}`);
  await page.screenshot({ path: 'screens/coffee-hero.png' });
  await runAxe(page, 'coffee desktop');

  await page.locator('#origins').scrollIntoViewIfNeeded();
  await page.waitForTimeout(700);
  await page.screenshot({ path: 'screens/coffee-origins.png' });
  await page.locator('#process').scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await page.screenshot({ path: 'screens/coffee-process.png' });
  await page.locator('#varieties').scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'screens/coffee-varieties.png' });

  const firstCardButton = page.locator('.variety-card .text-button').first();
  await firstCardButton.click();
  notes.push(`Variety detail expanded: ${await firstCardButton.getAttribute('aria-expanded')}`);

  await page.locator('#flavor').scrollIntoViewIfNeeded();
  await page.getByRole('button', { name: 'Fruity', exact: true }).click();
  await page.waitForTimeout(250);
  notes.push(
    `Flavor result updated: ${(await page.locator('.flavor__result h3').innerText()).replace(/\n/g, ' ')}`,
  );
  await page.screenshot({ path: 'screens/coffee-flavor.png' });

  await page.locator('#prepare').scrollIntoViewIfNeeded();
  await page.getByRole('tab').first().focus();
  await page.keyboard.press('ArrowRight');
  await page.waitForTimeout(250);
  notes.push(
    `Prep tab keyboard selection: ${await page.locator('.prep__tab[aria-selected="true"]').innerText()}`,
  );
  await page.getByRole('tab', { name: /French press/ }).click();
  await page.waitForTimeout(350);
  notes.push(`Prep panel: ${await page.locator('.prep__panel .prep__intro h3').innerText()}`);
  await page.locator('.prep__steps label').first().click();
  notes.push(
    `Prep progress after check: ${await page.locator('.prep__progress').getAttribute('aria-valuenow')}`,
  );
  await page.screenshot({ path: 'screens/coffee-prep.png' });
  await page.getByRole('button', { name: /Reset guide/ }).click();

  await page.locator('#discover').scrollIntoViewIfNeeded();
  const questions = page.locator('.quiz__question');
  for (let i = 0; i < (await questions.count()); i += 1) {
    await questions.nth(i).locator('input').first().check();
  }
  await page.waitForTimeout(300);
  notes.push(`Quiz result: ${await page.locator('.quiz__result h3').innerText()}`);
  await page.screenshot({ path: 'screens/coffee-quiz.png' });

  await scrollAll(page);
  await page
    .locator('#process .process__rail')
    .evaluate((element) => {
      element.scrollLeft = element.scrollWidth;
    });
  await page.waitForTimeout(800);
  await checkImages(page, 'coffee desktop');

  await page.getByRole('radio', { name: 'Matcha' }).click();
  await page.waitForTimeout(800);
  notes.push(
    `After switcher — data-theme: ${await page.evaluate(() => document.documentElement.dataset.theme)}`,
  );
  notes.push(`Matcha hero: ${(await page.locator('#hero-title').innerText()).replace(/\n/g, ' ')}`);
  notes.push(`Matcha origins title: ${await page.locator('#origins-title').innerText()}`);
  notes.push(`URL after switch: ${new URL(page.url()).searchParams.get('theme')}`);
  await page.locator('#top').scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await page.screenshot({ path: 'screens/matcha-hero.png' });
  await runAxe(page, 'matcha desktop');

  await scrollAll(page);
  await checkImages(page, 'matcha desktop');
  await page.locator('#culture').scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'screens/matcha-culture.png' });

  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  notes.push(`After reload — selection count: ${await page.locator('.selection').count()}`);
  notes.push(
    `After reload — data-theme: ${await page.evaluate(() => document.documentElement.dataset.theme)}`,
  );

  await page.getByRole('button', { name: /Choose world/i }).first().click();
  await page.waitForTimeout(400);
  notes.push(`Choose world dialog visible: ${await page.getByRole('dialog').isVisible()}`);
  await page.screenshot({ path: 'screens/selection-revisit.png' });
  await page.getByRole('button', { name: /Explore Coffee/ }).click();
  await page.waitForTimeout(700);

  await page.locator('#compare').scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  await page.screenshot({ path: 'screens/comparison.png' });
  await page.getByRole('button', { name: /Explore the Other Side/ }).click();
  await page.waitForTimeout(900);
  notes.push(
    `Other side switch: ${await page.evaluate(() => document.documentElement.dataset.theme)}`,
  );

  await page.locator('#about').scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  await page.screenshot({ path: 'screens/about.png' });
  await page.locator('.final-cta').scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'screens/final-cta.png' });
  await page.locator('#sources').scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  const backTop = page.getByRole('button', { name: 'Back to top' });
  notes.push(`Back-to-top visible: ${await backTop.isVisible()}`);
  await backTop.click();
  await page.waitForTimeout(900);
  notes.push(
    `Scroll after back-to-top: ${await page.evaluate(() => Math.round(window.scrollY))}`,
  );

  await page.locator('.final-cta').scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  await page.getByRole('button', { name: /Discover Coffee/ }).click();
  await page.waitForTimeout(900);
  notes.push(
    `Final CTA secondary switch: ${await page.evaluate(
      () => document.documentElement.dataset.theme,
    )} at scroll ${await page.evaluate(() => Math.round(window.scrollY))}`,
  );

  for (const width of [320, 375, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const theme of ['coffee', 'matcha']) {
      await page.goto(`${BASE}/?theme=${theme}`, { waitUntil: 'networkidle' });
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(250);
      await checkOverflow(page, `${width}px ${theme} top`);
      await scrollAll(page);
      await checkOverflow(page, `${width}px ${theme} bottom`);
    }
  }
  await desktop.close();

  // ------------------------------------------------------------------- mobile
  const mobile = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 1,
    isMobile: true,
    hasTouch: true,
  });
  const m = await mobile.newPage();
  watch(m, 'mobile');
  await m.goto(BASE, { waitUntil: 'networkidle' });
  await m.waitForTimeout(800);
  await m.screenshot({ path: 'screens/mobile-selection.png' });
  await runAxe(m, 'selection mobile');
  await m.getByRole('button', { name: /Explore Matcha/ }).click();
  await m.waitForTimeout(900);
  await m.screenshot({ path: 'screens/mobile-hero-matcha.png' });

  const switchBox = await m.locator('.navbar__switch').boundingBox();
  notes.push(
    `Mobile nav switch visible/in viewport: ${Boolean(
      switchBox && switchBox.x >= 0 && switchBox.x + switchBox.width <= 390,
    )} (${JSON.stringify(switchBox)})`,
  );

  await m.getByRole('button', { name: 'Open menu' }).click();
  await m.waitForTimeout(400);
  await m.screenshot({ path: 'screens/mobile-menu.png' });
  notes.push(`Mobile menu box: ${JSON.stringify(await m.locator('.mobile-menu').boundingBox())}`);
  await runAxe(m, 'mobile menu');
  await m.keyboard.press('Escape');
  await m.waitForTimeout(250);
  notes.push(`Mobile menu Escape closed: ${await m.locator('.mobile-menu').isHidden()}`);
  notes.push(
    `Focus returned to menu toggle: ${await m.evaluate(() =>
      Boolean(document.activeElement?.classList.contains('menu-toggle')),
    )}`,
  );
  await m.getByRole('button', { name: 'Open menu' }).click();
  await m.waitForTimeout(300);
  await m.locator('.mobile-menu__nav a').first().click();
  await m.waitForTimeout(900);
  notes.push(`Mobile menu closed: ${await m.locator('.mobile-menu').isHidden()}`);
  notes.push(`Mobile scroll after nav: ${await m.evaluate(() => Math.round(window.scrollY))}`);
  await m.locator('#origins').screenshot({ path: 'screens/mobile-origins.png' });

  await scrollAll(m);
  await m
    .locator('#process .process__rail')
    .evaluate((element) => {
      element.scrollLeft = element.scrollWidth;
    });
  await m.waitForTimeout(800);
  await checkImages(m, 'matcha mobile');
  await m.locator('#compare').scrollIntoViewIfNeeded();
  await m.waitForTimeout(400);
  await m.screenshot({ path: 'screens/mobile-compare.png' });
  await checkOverflow(m, '390px matcha');
  await mobile.close();

  const reduced = await browser.newContext({
    viewport: { width: 900, height: 900 },
    reducedMotion: 'reduce',
  });
  const rp = await reduced.newPage();
  watch(rp, 'reduced-motion');
  await rp.goto(`${BASE}/?theme=matcha`, { waitUntil: 'networkidle' });
  await rp.waitForTimeout(400);
  notes.push(
    `Reduced motion reveal visible: ${await rp.evaluate(() => {
      const reveal = document.querySelector('.reveal');
      return reveal ? getComputedStyle(reveal).opacity : 'none';
    })}`,
  );
  notes.push(
    `Reduced motion theme: ${await rp.evaluate(() => document.documentElement.dataset.theme)}`,
  );
  await reduced.close();

  await browser.close();

  notes.push(`Console errors: ${errors.length ? '\n  ' + errors.join('\n  ') : 'none'}`);
  notes.push(
    `Failed requests: ${failedRequests.length ? '\n  ' + failedRequests.join('\n  ') : 'none'}`,
  );
  notes.push(
    `Console warnings: ${consoleWarnings.length ? '\n  ' + consoleWarnings.join('\n  ') : 'none'}`,
  );
  console.log(notes.join('\n'));
}

main()
  .catch((error) => {
    console.error('TEST FAILED:', error);
    console.log('\n--- NOTES SO FAR ---\n' + notes.join('\n'));
    process.exitCode = 1;
  })
  .finally(async () => {
    try {
      if (process.platform === 'win32') {
        spawn('taskkill', ['/pid', String(server.pid), '/f', '/t'], { stdio: 'ignore' });
      } else {
        server.kill();
      }
    } catch {
      // ignore cleanup errors
    }
    await sleep(300);
  });
