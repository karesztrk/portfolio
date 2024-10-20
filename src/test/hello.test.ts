import { test, expect } from "./fixtures";

test.describe("Hello page", () => {
  test("Page elements present", async ({ hello }) => {
    await hello.goto();
    await expect(hello.title()).toBeVisible();
  });

  test("should not have accessibility violations", async ({ hello, axe }) => {
    await hello.goto();

    const results = await axe().analyze();

    expect(results.violations).toEqual([]);
  });
});
