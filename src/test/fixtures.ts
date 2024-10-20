import { test as base } from "@playwright/test";
import { IndexPage } from "./pages/index-page";
import { AboutPage } from "./pages/about-page";
import { TooltipsPage } from "./pages/tooltips-page";
import { BlogPage } from "./pages/blog-page";
import { UsesPage } from "./pages/uses-page";
import { HelloPage } from "./pages/hello-page";
import AxeBuilder from "@axe-core/playwright";

interface Fixtures {
  index: IndexPage;
  hello: HelloPage;
  about: AboutPage;
  tooltips: TooltipsPage;
  blog: BlogPage;
  uses: UsesPage;
  axe: () => AxeBuilder;
}

export const test = base.extend<Fixtures>({
  index: async ({ page }, use) => {
    const indexPage = new IndexPage(page);
    await use(indexPage);
  },
  hello: async ({ page }, use) => {
    const helloPage = new HelloPage(page);
    await use(helloPage);
  },
  about: async ({ page }, use) => {
    const aboutPage = new AboutPage(page);
    await use(aboutPage);
  },
  tooltips: async ({ page }, use) => {
    const tooltipsPage = new TooltipsPage(page);
    await use(tooltipsPage);
  },
  blog: async ({ page }, use) => {
    const blogPage = new BlogPage(page);
    await use(blogPage);
  },
  uses: async ({ page }, use) => {
    const usesPage = new UsesPage(page);
    await use(usesPage);
  },
  axe: async ({ page }, use) => {
    const makeAxeBuilder = () =>
      new AxeBuilder({ page }).withTags([
        "wcag2a",
        "wcag2aa",
        "wcag21a",
        "wcag21aa",
      ]);

    await use(makeAxeBuilder);
  },
});

export { expect } from "@playwright/test";
