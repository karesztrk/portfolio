import { test, expect } from "./fixtures";

test.describe("Mind-map page", () => {
  test("Page elements present", async ({ mindMap, page }) => {
    await expect(page.getByRole("heading", { name: "Mind-map" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Search" })).toBeVisible();
  });

  test("Search entry", async ({ mindMap, page }) => {
    await mindMap.openSearch();

    await expect(mindMap.searchDialog()).toBeVisible();
    await page.locator("#search-input").fill("html");

    const dialog = mindMap.searchDialog();
    // Fist button is the close button, the Second is the first inside the menu
    const entryButton = dialog.locator("button").locator("nth=1");
    const entryText = await entryButton.textContent();

    expect(entryText).not.toBeNull();
    await entryButton.click();

    await expect(mindMap.searchDialog()).not.toBeVisible();
    if (entryText) {
      await expect(
        page.getByRole("article").getByText(entryText),
      ).toBeVisible();
    }
  });

  test("Search dialog can be closed with Keyboard", async ({
    mindMap,
    page,
  }) => {
    await mindMap.openSearch();
    await expect(mindMap.searchDialog()).toBeVisible();

    await page.locator("id=search-dialog").press("Escape");

    await expect(mindMap.searchDialog()).not.toBeVisible();
  });
});
