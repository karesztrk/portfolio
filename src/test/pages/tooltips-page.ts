import type { Page } from "@playwright/test";

export class TooltipsPage {
  constructor(public readonly page: Page) {}

  async goto() {
    await this.page.goto("./tooltips");
  }

  async openSearch() {
    await this.page.getByRole("button", { name: "Search" }).click();
  }

  searchDialog() {
    return this.page.locator("#search-dialog");
  }
}
