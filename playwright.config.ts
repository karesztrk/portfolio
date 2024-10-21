import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL || "http://localhost:4321/",
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  ...(!process.env.CI && {
    webServer: {
      command: "pnpm dev",
      url: "http://localhost:4321/hello",
      timeout: 120 * 1000,
      reuseExistingServer: !process.env.CI,
    },
  }),
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        contextOptions: {
          reducedMotion: "reduce",
        },
      },
    },
    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"],
        contextOptions: {
          reducedMotion: "reduce",
        },
      },
    },
  ],
  maxFailures: process.env.CI ? 10 : undefined,
});
