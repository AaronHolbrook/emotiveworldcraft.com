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
  facebook: {
    label: "Facebook",
    href: "https://www.facebook.com/aaronjholbrook/"
  },
  instagram: {
    label: "Instagram",
    href: "https://www.instagram.com/aaronjholbrook/"
  },
  bluesky: {
    label: "Bluesky",
    href: "https://bsky.app/profile/emotiveworldcraft.bsky.social"
  },
  twitter: {
    label: "X (formerly Twitter)",
    href: "https://twitter.com/aaronjholbrook",
  },
  email: {
    label: "Email",
    href: "mailto:hello@aaronjholbrook.com",
  },
};
