import { test, expect } from "./fixtures";

test.describe("Blog entry page", () => {
  test("Page elements present", async ({ blog, page }) => {
    await blog.goto();
    await expect(
      page
        .getByRole("article")
        .getByRole("article")
        .first()
        .getByText(/Publish date/),
    ).toBeVisible();
    await page
      .getByRole("article")
      .getByRole("article")
      .first()
      .getByRole("link")
      .click();

    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.getByText(/Tags/)).toBeVisible();
    await expect(page.getByText(/Publish date/)).toBeVisible();
    await expect(page.getByText(/Read time/)).toBeVisible();
  });

  test("should not have accessibility violations", async ({
    blog,
    page,
    axe,
  }) => {
    await blog.goto();
    await page
      .getByRole("article")
      .getByRole("article")
      .first()
      .getByRole("link")
      .click();

    const results = await axe().analyze();

    expect(results.violations).toEqual([]);
  });
});
