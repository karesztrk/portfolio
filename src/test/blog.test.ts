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

  test("should not have accessibility violations", async ({ blog, axe }) => {
    await blog.goto();

    const results = await axe().analyze();

    expect(results.violations).toEqual([]);
  });
});
