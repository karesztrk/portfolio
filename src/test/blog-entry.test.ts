import { test, expect } from "./fixtures";

test.describe.only("Blog entry page", () => {
  test("Page elements present", async ({ blog, page }) => {
    await expect(
      page
        .getByRole("article")
        .first()
        .getByText(/Publish date/),
    ).toBeVisible();
    await page.getByRole("article").first().getByRole("link").click();

    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.getByText(/Tags/)).toBeVisible();
    await expect(page.getByText(/Publish date/)).toBeVisible();
    await expect(page.getByText(/Read time/)).toBeVisible();
  });
});
