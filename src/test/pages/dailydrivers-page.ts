import type { Page } from "@playwright/test";

export class DailyDriversPage {
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
    Education: ["Podcasts", "Youtube", "Newsletters", "Podcasts"],
  } as const;

  constructor(public readonly page: Page) {}

  async goto() {
    await this.page.goto("./daily-drivers");
  }
}
