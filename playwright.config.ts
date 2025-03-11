import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './src/tests',
  fullyParallel: true,
  timeout: 60000,
  workers: 5,

  projects: [
    {
      name: 'UI Tests',
      testMatch: 'src/tests/ui/*.test.ts',
      use: {
        baseURL: process.env.GOOGLE_URL,
        headless: false,
        viewport: { width: 1280, height: 720 },
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'on',
      },
    },
    {
      name: 'API Tests',
      testMatch: 'src/tests/api/*.test.ts',
      use: {
        baseURL: process.env.PETSTORE_API_TEST_BASE_URL,
        extraHTTPHeaders: {
          'Content-Type': 'application/json',
        },
      },
    },
  ],
});
