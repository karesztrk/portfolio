import { test, expect } from "./fixtures";

test.describe("Menu", () => {
  test("Logo navigation", async ({ index, page }) => {
    await index.logo().click();
    await expect(index.title()).toBeVisible();
  });

  test("Main menu navigation", async ({ index, page }) => {
    for (const { path, title } of index.menu()) {
      await page.getByRole("link", { name: title }).click();
      await expect(page.getByRole("heading", { name: title })).toBeVisible();
      await expect(page).toHaveURL(new RegExp(`${path}`));
    }
  });
});
