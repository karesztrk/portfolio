import { test, expect } from "./fixtures";

test.describe("Blog entry page", () => {
  test("Page elements present", async ({ blog, page }) => {
    await blog.goto();
    await expect(blog.firstPost().getByText(/Publish date/)).toBeVisible();
    await blog.firstPost().getByRole("link").click();

    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.getByText(/Tags/)).toBeVisible();
    await expect(page.getByText(/Publish date/)).toBeVisible();
    await expect(page.getByText(/Read time/)).toBeVisible();
  });

  test.describe("A11Y", () => {
    test("no a11y violations", async ({ blog, axe }) => {
      await blog.goto();

      await blog.firstPost().getByRole("link").click();

      const results = await axe().analyze();

      expect(results.violations).toEqual([]);
    });

    test("no a11y violations in dark mode", async ({ blog, axe }) => {
      await blog.goto({ dark: true });

      await blog.firstPost().getByRole("link").click();

      const results = await axe().analyze();

      expect(results.violations).toEqual([]);
    });
  });
});
