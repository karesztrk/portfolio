import { test, expect } from "./fixtures";

test.describe("Index page", () => {
  test("Page elements present", async ({ index, page }) => {
    await index.goto();
    for (const text of index.footerTexts) {
      await expect(page.getByRole("link", { name: text })).toBeVisible();
    }

    await expect(page.getByText("Károly Török ©")).toBeVisible();
  });

  test.describe("A11Y", () => {
    test("no a11y violations", async ({ index, axe }) => {
      await index.goto();

      const results = await axe().analyze();

      expect(results.violations).toEqual([]);
    });

    test("no a11y violations in dark mode", async ({ index, axe }) => {
      await index.goto({ dark: true });

      const results = await axe().analyze();

      expect(results.violations).toEqual([]);
    });
  });
});
