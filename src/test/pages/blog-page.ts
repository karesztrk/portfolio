import type { Page } from "@playwright/test";

export class BlogPage {
  constructor(public readonly page: Page) {}

  async goto() {
    await this.page.goto("./blog");
  }
}
