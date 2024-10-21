import type { Page } from "@playwright/test";

export class AboutPage {
  headers = [
    { name: "About me", level: 1, anchorLabel: "" },
    { name: "Experience", exact: true, level: 2, anchorLabel: "Experience" },
    { name: "Highlights", level: 2, anchorLabel: "Highlights" },
    { name: "Projects", level: 2, anchorLabel: "Projects" },
    { name: "What's next?", level: 2, anchorLabel: "Next" },
  ] as const;

  constructor(public readonly page: Page) {}

  async goto({ dark } = { dark: false }) {
    if (dark) {
      await this.page.emulateMedia({ colorScheme: "dark" });
    }
    await this.page.goto("./about");
  }
}
