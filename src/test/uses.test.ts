import { test, expect } from "./fixtures";

test.describe("Uses page", () => {
  test("Page elements present", async ({ uses, page }) => {
    await uses.goto();
    await expect(
      page.getByRole("heading", { name: "Uses", level: 1 }),
    ).toBeVisible();

    for (const [title, entries] of Object.entries(uses.headings)) {
      const heading = page.getByRole("heading", { name: title, level: 2 });
      await expect(heading).toBeVisible();
      await expect(
        heading.getByRole("link", { name: `Navigate to ${title}` }),
      ).toBeVisible();

      for (const entry of entries) {
        const subHeading = page.getByRole("heading", { name: entry, level: 3 });
        await expect(subHeading).toBeVisible();
        await expect(
          subHeading.getByRole("link", { name: `Navigate to ${entry}` }),
        ).toBeVisible();
      }
    }
  });

  test.describe("A11Y", () => {
    test("no a11y violations", async ({ uses, axe }) => {
      await uses.goto();

      const results = await axe().analyze();

      expect(results.violations).toEqual([]);
    });

    test("no a11y violations in dark mode", async ({ uses, axe }) => {
      await uses.goto({ dark: true });

      const results = await axe().analyze();

      expect(results.violations).toEqual([]);
    });
  });
});
