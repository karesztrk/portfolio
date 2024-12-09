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

    const dialog = tooltips.searchDialog();

    await expect(dialog).toBeVisible();
    await page.getByRole("searchbox").fill("html");

    // Fist button is the close button, the Second is the first inside the menu
    const buttons = await dialog.getByRole("button").all();
    const entryButton = buttons[1];
    const entryText = await entryButton.textContent();

    expect(entryText).not.toBeNull();
    await entryButton.click();

    await expect(tooltips.searchDialog()).not.toBeVisible();
    if (entryText) {
      await expect(
        page.getByRole("heading", { name: entryText.trim(), level: 2 }),
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

    await page.getByRole("dialog").press("Escape");

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

  test.describe("A11Y", () => {
    test("no a11y violations", async ({ tooltips, axe }) => {
      await tooltips.goto();

      const results = await axe().analyze();

      expect(results.violations).toEqual([]);
    });

    test("no a11y violations in dark mode", async ({ tooltips, axe }) => {
      await tooltips.goto({ dark: true });

      const results = await axe().analyze();

      expect(results.violations).toEqual([]);
    });
  });
});
