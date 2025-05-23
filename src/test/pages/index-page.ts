import { ROUTES } from "@/routes";
import type { Page } from "@playwright/test";

export class IndexPage {
  menuItems = [
    { title: "Blog", path: ROUTES.blog },
    { title: "Tips", path: ROUTES.tips },
    { title: "About", path: ROUTES.about },
    { title: "Uses", path: ROUTES.uses },
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
    await this.page.goto(`.${ROUTES.root}`);
  }

  menu() {
    return this.menuItems;
  }
}
