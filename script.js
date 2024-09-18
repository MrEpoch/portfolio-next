import { browser } from 'k6/browser';

export const options = {
  scenarios: {
    ui: {
      vus: 5,
      iterations: 10,
      maxDuration: '60s',
      executor: 'shared-iterations',
      options: {
        browser: {
          type: 'chromium',
        },
      },
    },
  },
  thresholds: {
    checks: ['rate==1.0'],
  },
};

export default async function () {
  const page = await browser.newPage();

  try {
    await page.goto('http://localhost:3000');
    await page.screenshot({ path: 'screenshots/screenshot.png' });
  } finally {
    await page.close();
  }
}
