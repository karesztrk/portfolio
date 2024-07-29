import { test, expect } from "./fixtures";

test.describe("Hello page", () => {
  test("Page elements present", async ({ hello }) => {
    await hello.goto();
    await expect(hello.title()).toBeVisible();
  });
});
