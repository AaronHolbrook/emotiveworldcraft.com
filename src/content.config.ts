import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const worlds = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/worlds" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publicationDate: z.date(),
      image: image().optional(),
      imageAlt: z.string().optional(),
      tags: z.array(z.string()).optional(),
    }),
});

export const collections = { worlds };
