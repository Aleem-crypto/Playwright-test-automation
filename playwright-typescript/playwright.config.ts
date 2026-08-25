// @ts-check
import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
import *as fs from 'fs';

const envFile = `.env.${process.env.TEST_ENV || 'dev'}`;

if (fs.existsSync(envFile)) {
  dotenv.config({ path: envFile });
} else {
  dotenv.config();
}


/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: 1,
  /* Opt out of parallel tests on CI. */
  ...(process.env.CI ? { workers: 1 } : {}),
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html', { outputFolder: 'reports' }],
    ['allure-playwright', { resultsDir: 'allure-rp' }],
    ['json', { outputFile: 'reports/samplejsonreport.json' }],
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        headless: false,
      },
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        screenshot: 'on',
        video: 'on',
        trace: 'on-first-retry'
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
        viewport: { width: 1280, height: 720 },
        locale: 'en-US',
        timezoneId: 'America/Los_Angeles',
        geolocation: { longitude: 12.492507, latitude: 41.889938 },
        acceptDownloads: false,
        colorScheme: 'light',
        ignoreHTTPSErrors: true
      },
    },
    {
      name: 'iPhone 16 Pro',
      use: {
        ...devices['iPhone 16 Pro'],
        headless: false,
      },
    },
    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

