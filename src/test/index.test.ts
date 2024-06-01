import { test, expect } from "./fixtures";

test.describe("Index page", () => {
  test("Page elements present", async ({ index, page }) => {
    for (const text of index.footerTexts) {
      await expect(page.getByRole("link", { name: text })).toBeVisible();
    }

    await expect(page.getByText("Károly Török ©")).toBeVisible();
  });
});
