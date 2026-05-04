import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const baseSchema = z.object({
  tags: z.array(z.string()),
});

const blogSchema = baseSchema.extend({
  date: z.date(),
  features: z.array(z.string()).optional(),
});

const articles = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/Articles",
  }),
  schema: baseSchema,
});

const codepens = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/Codepens",
  }),
  schema: baseSchema,
});

const libraries = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/Libraries",
  }),
  schema: baseSchema,
});

const snippets = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/Snippets",
  }),
  schema: baseSchema,
});

const tools = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/Tools",
  }),
  schema: baseSchema,
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/Blog" }),
  schema: blogSchema,
});

export const collections = {
  blog,
  articles,
  codepens,
  libraries,
  snippets,
  tools,
};
