import type { Page } from "@playwright/test";
import { expect } from "../fixtures";

export class TooltipsPage {
  categories = [
    "Articles",
    "Codepens",
    "Libraries",
    "Snippets",
    "Stack",
    "Tools",
  ] as const;

  breadcrumb = "Breadcrumb" as const;

  title = "Tooltips" as const;

  constructor(public readonly page: Page) {}

  async goto({ dark } = { dark: false }) {
    if (dark) {
      await this.page.emulateMedia({ colorScheme: "dark" });
    }
    await this.page.goto("./tooltips");
  }

  async openSearch() {
    await this.page.getByRole("button", { name: "Search" }).click();
  }

  searchDialog() {
    return this.page.locator("#search-dialog");
  }

  async expectBreadcrumbContent(category: (typeof this.categories)[number]) {
    await expect(
      this.page.getByLabel(this.breadcrumb).getByText(this.title),
    ).toBeVisible();

    await expect(
      this.page.getByLabel(this.breadcrumb).getByText(category),
    ).toBeVisible();
  }
}
