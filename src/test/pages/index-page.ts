import type { Page } from "@playwright/test";

export class IndexPage {
  menuItems = [
    { title: "Blog", path: "/blog" },
    { title: "Mind-map", path: "/mind-map" },
    { title: "About", path: "/about" },
  ] as const;

  constructor(public readonly page: Page) {}

  logo() {
    return this.page.getByRole("link", { name: "Space invader alien" });
  }

  async goto() {
    await this.page.goto("./");
  }

  menu() {
    return this.menuItems;
  }

  title() {
    return this.page.getByRole("heading", { name: "Hello Szia /ˈsijɒ/" });
  }
}
