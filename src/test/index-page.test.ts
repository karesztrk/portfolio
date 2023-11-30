import { test, expect } from "./fixtures";

test.describe("Index page", () => {
  test("Page elements present", async ({ index, page }) => {
    await expect(index.title()).toBeVisible();

    await expect(
      page.getByRole("link", { name: "Check me on Github" }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Send me a mail" }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Check my profile on LinkedIn" }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "My activity on Instagram" }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Things i watch on Youtube" }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "My Facebook profile" }),
    ).toBeVisible();

    await expect(page.getByText("Károly Török ©")).toBeVisible();
  });
});
