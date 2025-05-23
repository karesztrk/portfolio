import { ROUTES } from "@/routes";
import type { Page } from "@playwright/test";

export class BlogPage {
  constructor(public readonly page: Page) {}

  async goto({ dark } = { dark: false }) {
    if (dark) {
      await this.page.emulateMedia({ colorScheme: "dark" });
    }

    await this.page.goto(`.${ROUTES.blog}`);
  }

  firstPost() {
    return this.page.getByRole("article").getByRole("article").first();
  }
}
