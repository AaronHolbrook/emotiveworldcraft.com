import type {
  SiteConfiguration,
  NavigationLinks,
  SocialLinks,
} from "@/types.ts";

export const SITE: SiteConfiguration = {
  title: "Emotive WorldCraft",
  description:
    "Emotive WorldCraft: Immersive worlds of sound, story, and art for those willing to feel deeply. A creation of Aaron Holbrook.",
  href: "https://emotiveworldcraft.com",
  author: "Aaron Holbrook",
  locale: "en-US",
};

export const NAV_LINKS: NavigationLinks = {
  worlds: {
    path: "/worlds",
    label: "Worlds",
  },
};

export const SOCIAL_LINKS: SocialLinks = {
  email: {
    label: "Email",
    href: "mailto:hello@aaronjholbrook.com",
  },
};
