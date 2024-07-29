import { test, expect } from "./fixtures";

test.describe("Tooltips page", () => {
  test.beforeEach(async ({ tooltips }) => {
    await tooltips.goto();
  });

  test("Page elements present", async ({ tooltips, page }) => {
    await expect(
      page.getByRole("heading", { name: tooltips.title }),
    ).toBeVisible();
    await expect(page.getByRole("button", { name: "Search" })).toBeVisible();
  });

  test("Search entry", async ({ tooltips, page }) => {
    await tooltips.openSearch();

    await expect(tooltips.searchDialog()).toBeVisible();
    await page.locator("#search-input").fill("html");

    const dialog = tooltips.searchDialog();
    // Fist button is the close button, the Second is the first inside the menu
    const entryButton = dialog.locator("button:visible").locator("nth=1");
    const entryText = await entryButton.textContent();

    expect(entryText).not.toBeNull();
    await entryButton.click();

    await expect(tooltips.searchDialog()).not.toBeVisible();
    if (entryText) {
      await expect(
        page.getByRole("article").getByRole("article").getByText(entryText),
      ).toBeVisible();
      await tooltips.expectBreadcrumbContent("Articles");
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

  test("Select entry from the sidebar", async ({ tooltips, page }) => {
    await page.getByLabel("Breadcrumb").locator("label svg").click();

    for (const category of tooltips.categories) {
      await expect(page.getByText(category, { exact: true })).toBeVisible();
    }

    const selectedCategory = tooltips.categories[0];

    await page.getByText(selectedCategory, { exact: true }).click();
    const entryButton = page.locator("form button").locator("nth=0");
    const entryText = await entryButton.textContent();
    await entryButton.click();

    await expect(
      page.getByLabel(tooltips.breadcrumb).getByText(tooltips.title),
    ).toBeVisible();

    if (entryText) {
      await expect(
        page.getByRole("heading", { name: entryText }),
      ).toBeVisible();
      await tooltips.expectBreadcrumbContent(selectedCategory);
    }
  });
});
