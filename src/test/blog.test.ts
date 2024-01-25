import { test, expect } from "./fixtures";

test.describe("Blog page", () => {
  test("Page elements present", async ({ blog, page }) => {
    await expect(
      page.getByRole("heading", { name: "Blog", level: 1 }),
    ).toBeVisible();

    const articles = await page.getByRole("article").count();
    expect(articles).toBeGreaterThan(0);
  });
});
