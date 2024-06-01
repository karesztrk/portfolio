import type { Page } from "@playwright/test";

export class IndexPage {
  menuItems = [
    { title: "Blog", path: "/blog" },
    { title: "Tips", path: "/tooltips" },
    { title: "About", path: "/about" },
    { title: "Uses", path: "/uses" },
  ] as const;

  footerTexts = [
    "Check me on Github",
    "Send me a mail",
    "Check my profile on LinkedIn",
    "My activity on Instagram",
    "Things i watch on Youtube",
    "My Facebook profile",
  ];

  constructor(public readonly page: Page) {}

  logo() {
    return this.page.getByRole("link", {
      name: "Navigate to Home",
    });
  }

  async goto() {
    await this.page.goto("./");
  }

  menu() {
    return this.menuItems;
  }
}
