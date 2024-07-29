import { test, expect } from "./fixtures";

test.describe("Menu", () => {
  test.beforeEach(async ({ index }) => {
    await index.goto();
  });

  test("Logo navigation", async ({ index }) => {
    await index.logo().click();
  });

  test("Main menu navigation", async ({ index, page }) => {
    for (const { path, title } of index.menu()) {
      await page.getByRole("link", { name: title }).click();
      await expect(page.getByRole("heading", { name: title })).toBeVisible();
      await expect(page).toHaveURL(new RegExp(`${path}`));
    }
  });
});
