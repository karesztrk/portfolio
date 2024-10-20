import { test, expect } from "./fixtures";

test.describe("About page", () => {
  test("Page elements present", async ({ about, page }) => {
    await about.goto();
    for (const { name, level, anchorLabel } of about.headers) {
      const heading = page.getByRole("heading", { name, level });
      await expect(heading).toBeVisible();

      if (anchorLabel) {
        await expect(
          heading.getByRole("link", { name: `Navigate to ${anchorLabel}` }),
        ).toBeVisible();
      }
    }
  });

  test("should not have accessibility violations", async ({ about, axe }) => {
    await about.goto();

    const results = await axe().analyze();

    expect(results.violations).toEqual([]);
  });
});
