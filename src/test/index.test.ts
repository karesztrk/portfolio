import { test, expect } from "./fixtures";

test.describe("Index page", () => {
  test("Page elements present", async ({ index, page }) => {
    await index.goto();
    for (const text of index.footerTexts) {
      await expect(page.getByRole("link", { name: text })).toBeVisible();
    }

    await expect(page.getByText("Károly Török ©")).toBeVisible();
  });

  test("should not have accessibility violations", async ({ index, axe }) => {
    await index.goto();

    const results = await axe().analyze();

    expect(results.violations).toEqual([]);
  });
});
