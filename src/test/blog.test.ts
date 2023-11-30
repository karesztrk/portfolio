import { test, expect } from "./fixtures";

test.describe("Blog page", () => {
  test("Page elements present", async ({ blog, page }) => {
    await expect(page.getByRole("heading", { name: "Blog" })).toBeVisible();
  });
});
