import type { Page } from "@playwright/test";

export class IndexPage {
  menuItems = [
    { title: "Blog", path: "/blog" },
    { title: "Tips", path: "/tooltips" },
    { title: "About", path: "/about" },
    { title: "Daily", path: "/daily" },
  ] as const;

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

  title() {
    return this.page.getByRole("heading", { name: "Hello Szia [ˈsijɒ]" });
  }
}
