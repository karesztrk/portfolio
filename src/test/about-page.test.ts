import { test, expect } from "./fixtures";

test.describe("About page", () => {
  test("Page elements present", async ({ about, page }) => {
    await expect(page.getByRole("heading", { name: "About me" })).toBeVisible();

    await expect(page.getByRole("heading", { name: "Story" })).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Experience", exact: true }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Highlights" }),
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "Projects" })).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "What's next?" }),
    ).toBeVisible();
  });
});
