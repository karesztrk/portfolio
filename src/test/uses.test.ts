import { test, expect } from "./fixtures";

test.describe("Uses page", () => {
  test("Page elements present", async ({ uses, page }) => {
    await expect(
      page.getByRole("heading", { name: "Uses", level: 1 }),
    ).toBeVisible();

    for (const [title, entries] of Object.entries(uses.headings)) {
      await expect(
        page.getByRole("heading", { name: title, level: 2 }),
      ).toBeVisible();

      for (const entry of entries) {
        await expect(
          page.getByRole("heading", { name: entry, level: 3 }),
        ).toBeVisible();
      }
    }
  });
});
