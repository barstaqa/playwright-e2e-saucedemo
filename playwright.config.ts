import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './',

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    trace: 'retain-on-failure',
    headless: true,
    viewport: { width: 1280, height: 720 },
    screenshot: {
      mode: 'only-on-failure',
      fullPage: true,
    },
    actionTimeout: 15_000,
    testIdAttribute: 'data-test',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

});
