import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), mdx(), react()],
  markdown: {
    shikiConfig: {
      theme: "dark-plus",
    },
  },
  site: "https://emotiveworldcraft.com",
  vite: {
    plugins: [tailwindcss()],
  },
});