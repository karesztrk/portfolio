import { defineConfig } from "@playwright/test";

export default defineConfig({
  use: {
    baseURL: "http://localhost:4321/",
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  webServer: {
    command: "pnpm preview",
    url: "http://localhost:4321/",
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
});
