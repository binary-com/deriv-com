import type { PlaywrightTestConfig } from '@playwright/test';

import { config as dotenvConfig } from 'dotenv';

dotenvConfig({ path: `.env.development` })


/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  testDir: './end-to-end-tests',
  testMatch: ["end-to-end-tests/translation.spec.ts"],
  /* Maximum time one test can run for. */
  timeout: 60 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: process.env.APP_URL,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    headless: false,
    launchOptions: {
      // slowMo: 1000
    },
    ignoreHTTPSErrors: true,
    testIdAttribute: 'data-testid',
  },


  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  outputDir: 'test-results/',

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:8000/',
  //   timeout: 600 * 1000,
  //   reuseExistingServer: !process.env.CI,
  // },

};

export default config;
