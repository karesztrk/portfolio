import { test, expect } from "./fixtures";

test.describe("Hello page", () => {
  test("Page elements present", async ({ hello }) => {
    await hello.goto();
    await expect(hello.title()).toBeVisible();
  });

  test.describe("A11Y", () => {
    test("no a11y violations", async ({ hello, axe }) => {
      await hello.goto();

      const results = await axe().analyze();

      expect(results.violations).toEqual([]);
    });

    test("no a11y violations in dark mode", async ({ hello, axe }) => {
      await hello.goto({ dark: true });

      const results = await axe().analyze();

      expect(results.violations).toEqual([]);
    });
  });
});
