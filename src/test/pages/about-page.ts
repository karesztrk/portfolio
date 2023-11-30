import type { Page } from "@playwright/test";

export class AboutPage {
  constructor(public readonly page: Page) {}

  async goto() {
    await this.page.goto("./about");
  }
}
