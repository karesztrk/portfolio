import { defineCollection, z } from "astro:content";

const mindMapCollection = defineCollection({
  type: "content",
  schema: z.object({
    tags: z.array(z.string()),
  }),
});

export const collections = {
  mindMap: mindMapCollection,
};
