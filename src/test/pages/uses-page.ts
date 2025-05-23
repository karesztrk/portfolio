import { ROUTES } from "@/routes";
import type { Page } from "@playwright/test";

export class UsesPage {
  headings = {
    Software: [
      "Languages",
      "Frameworks",
      "Editors",
      "Terminal",
      "Browser",
      "Operating system",
      "Fonts",
    ],
    Hardware: ["Computer", "Pheripherals"],
    Blogroll: ["Newsletters", "Podcasts"],
    Podroll: ["Podcasts", "Youtube"],
  } as const;

  constructor(public readonly page: Page) {}

  async goto({ dark } = { dark: false }) {
    if (dark) {
      await this.page.emulateMedia({ colorScheme: "dark" });
    }
    await this.page.goto(`.${ROUTES.uses}`);
  }
}
