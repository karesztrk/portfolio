import { test, expect } from "./fixtures";

test.describe("Hello page", () => {
  test("Page elements present", async ({ hello }) => {
    await expect(hello.title()).toBeVisible();
  });
});
