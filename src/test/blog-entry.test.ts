import { test, expect } from "./fixtures";

test.describe("Blog entry page", () => {
  test("Page elements present", async ({ blog, page }) => {
    await blog.goto();
    await expect(blog.firstPost().getByText(/Publish date/)).toBeVisible();
    await blog.firstPost().getByRole("link").click();

    await expect(page.getByRole("heading", { level: 1 }).first()).toBeVisible();
    await expect(page.getByText(/Tags/)).toBeVisible();
    await expect(page.getByText(/Publish date/)).toBeVisible();
    await expect(page.getByText(/Read time/)).toBeVisible();
    await expect(page.getByRole("button", { name: "Copy URL" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Share" })).toBeHidden();
    await expect(page.getByRole("link", { name: "Back to top" })).toBeVisible();
  });

  test("copy url", async ({ blog, page }) => {
    await blog.goto();
    await expect(blog.firstPost().getByText(/Publish date/)).toBeVisible();
    await blog.firstPost().getByRole("link").click();

    await page.getByRole("button", { name: "Copy URL" }).click();
    await expect(page.getByRole("alert").getByText("Copied!")).toBeVisible();
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
