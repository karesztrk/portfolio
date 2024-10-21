import { test, expect } from "./fixtures";

test.describe("Blog page", () => {
  test("Page elements present", async ({ blog, page }) => {
    await blog.goto();
    await expect(
      page.getByRole("heading", { name: "Blog", level: 1 }),
    ).toBeVisible();

    const articles = await page.getByRole("article").count();
    expect(articles).toBeGreaterThan(0);
  });

  test.describe("A11Y", () => {
    test("no a11y violations", async ({ blog, axe }) => {
      await blog.goto();

      const results = await axe().analyze();

      expect(results.violations).toEqual([]);
    });

    test("no a11y violations in dark mode", async ({ blog, axe }) => {
      await blog.goto({ dark: true });

      const results = await axe().analyze();

      expect(results.violations).toEqual([]);
    });
  });
});
