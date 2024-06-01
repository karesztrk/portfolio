import type { Page } from "@playwright/test";

export class HelloPage {
  constructor(public readonly page: Page) {}

  async goto() {
    await this.page.goto("./hello");
  }

  title() {
    return this.page.getByRole("heading", { name: "Hello Szia [ˈsijɒ]" });
  }
}
