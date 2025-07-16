import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const worlds = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/worlds" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      status: z.enum(["draft", "protected", "unlisted", "published"]),
      
      publicationDate: z.date().optional(),

      description: z.string().optional(),
      image: image().optional(),
      imageAlt: z.string().optional(),
      audio: z.string().optional(),
      streamLink: z.string().optional(),
      tags: z.array(z.string()).optional(),
    }),
});

export const collections = { worlds };
