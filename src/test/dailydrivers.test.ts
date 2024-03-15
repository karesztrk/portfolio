import { test, expect } from "./fixtures";

const headings = {
  Software: [
    "Languages",
    "Frameworks",
    "Editors",
    "Terminal",
    "Browser",
    "Operating system",
    "Fonts",
  ],
  Hardware: ["Computer", "Pheripherals"],
  Education: ["Podcasts", "Youtube", "Newsletters", "Podcasts"],
} as const;

test.describe("Daily Drivers page", () => {
  test("Page elements present", async ({ dailyDrivers, page }) => {
    await expect(
      page.getByRole("heading", { name: "Daily drivers", level: 1 }),
    ).toBeVisible();

    for (const [title, entries] of Object.entries(dailyDrivers.headings)) {
      await expect(
        page.getByRole("heading", { name: title, level: 2 }),
      ).toBeVisible();

      for (const entry of entries) {
        await expect(
          page.getByRole("heading", { name: entry, level: 3 }),
        ).toBeVisible();
      }
    }
  });
});
