import { test as base } from "@playwright/test";
import { IndexPage } from "./pages/index-page";
import { AboutPage } from "./pages/about-page";
import { MindMapPage } from "./pages/mindmap-page";
import { BlogPage } from "./pages/blog-page";

interface Fixtures {
  index: IndexPage;
  about: AboutPage;
  mindMap: MindMapPage;
  blog: BlogPage;
}

export const test = base.extend<Fixtures>({
  index: async ({ page }, use) => {
    const indexPage = new IndexPage(page);
    await indexPage.goto();
    await use(indexPage);
  },
  about: async ({ page }, use) => {
    const aboutPage = new AboutPage(page);
    await aboutPage.goto();
    await use(aboutPage);
  },
  mindMap: async ({ page }, use) => {
    const mindMapPage = new MindMapPage(page);
    await mindMapPage.goto();
    await use(mindMapPage);
  },
  blog: async ({ page }, use) => {
    const blogPage = new BlogPage(page);
    await blogPage.goto();
    await use(blogPage);
  },
});

export { expect } from "@playwright/test";
