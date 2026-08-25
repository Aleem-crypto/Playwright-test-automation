"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-check
const test_1 = require("@playwright/test");
const dotenv = __importStar(require("dotenv"));
const fs = __importStar(require("fs"));
const envFile = `.env.${process.env.TEST_ENV || 'dev'}`;
if (fs.existsSync(envFile)) {
    dotenv.config({ path: envFile });
}
else {
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
exports.default = (0, test_1.defineConfig)({
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
                ...test_1.devices['Desktop Chrome'],
                headless: false,
            },
        },
        {
            name: 'firefox',
            use: {
                ...test_1.devices['Desktop Firefox'],
                screenshot: 'on',
                video: 'on',
                trace: 'on-first-retry'
            },
        },
        {
            name: 'webkit',
            use: {
                ...test_1.devices['Desktop Safari'],
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
                ...test_1.devices['iPhone 16 Pro'],
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
//# sourceMappingURL=playwright.config.js.map