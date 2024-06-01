import { test as base } from "@playwright/test";
import { IndexPage } from "./pages/index-page";
import { AboutPage } from "./pages/about-page";
import { TooltipsPage } from "./pages/tooltips-page";
import { BlogPage } from "./pages/blog-page";
import { UsesPage } from "./pages/uses-page";
import { HelloPage } from "./pages/hello-page";

interface Fixtures {
  index: IndexPage;
  hello: HelloPage;
  about: AboutPage;
  tooltips: TooltipsPage;
  blog: BlogPage;
  uses: UsesPage;
}

export const test = base.extend<Fixtures>({
  index: async ({ page }, use) => {
    const indexPage = new IndexPage(page);
    await indexPage.goto();
    await use(indexPage);
  },
  hello: async ({ page }, use) => {
    const helloPage = new HelloPage(page);
    await helloPage.goto();
    await use(helloPage);
  },
  about: async ({ page }, use) => {
    const aboutPage = new AboutPage(page);
    await aboutPage.goto();
    await use(aboutPage);
  },
  tooltips: async ({ page }, use) => {
    const tooltipsPage = new TooltipsPage(page);
    await tooltipsPage.goto();
    await use(tooltipsPage);
  },
  blog: async ({ page }, use) => {
    const blogPage = new BlogPage(page);
    await blogPage.goto();
    await use(blogPage);
  },
  uses: async ({ page }, use) => {
    const usesPage = new UsesPage(page);
    await usesPage.goto();
    await use(usesPage);
  },
});

export { expect } from "@playwright/test";
