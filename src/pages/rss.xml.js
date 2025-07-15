import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "@/siteConfig";

export async function GET(context) {
  const worlds = await getCollection("worlds");
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    items: worlds.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publicationDate,
      link: `/worlds/${post.id}`,
    })),
  });
}
