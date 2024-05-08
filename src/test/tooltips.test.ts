import { test, expect } from "./fixtures";

test.describe("Tooltips page", () => {
  test("Page elements present", async ({ tooltips, page }) => {
    await expect(page.getByRole("heading", { name: "Tooltips" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Search" })).toBeVisible();
  });

  test("Search entry", async ({ tooltips, page }) => {
    await tooltips.openSearch();

    await expect(tooltips.searchDialog()).toBeVisible();
    await page.locator("#search-input").fill("html");

    const dialog = tooltips.searchDialog();
    // Fist button is the close button, the Second is the first inside the menu
    const entryButton = dialog.locator("button").locator("nth=1");
    const entryText = await entryButton.textContent();

    expect(entryText).not.toBeNull();
    await entryButton.click();

    await expect(tooltips.searchDialog()).not.toBeVisible();
    if (entryText) {
      await expect(
        page.getByRole("article").getByRole("article").getByText(entryText),
      ).toBeVisible();
    }
  });

  test("Search dialog can be closed with Keyboard", async ({
    tooltips,
    page,
  }) => {
    await tooltips.openSearch();
    await expect(tooltips.searchDialog()).toBeVisible();

    await page.locator("id=search-dialog").press("Escape");

    await expect(tooltips.searchDialog()).not.toBeVisible();
  });
});
