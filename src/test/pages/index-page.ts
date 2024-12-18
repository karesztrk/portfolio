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
  ] as const;

  constructor(public readonly page: Page) {}

  logo() {
    return this.page.getByRole("link", {
      name: "Navigate to Home",
    });
  }

  async goto({ dark } = { dark: false }) {
    if (dark) {
      await this.page.emulateMedia({ colorScheme: "dark" });
    }
    await this.page.goto("./");
  }

  menu() {
    return this.menuItems;
  }
}
