import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";
import compress from "astro-compress";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://newperspectivecayman.com/",
  integrations: [
    react(),
    image(),
    mdx(),
    sitemap(),
    compress({
      css: false,
      html: false,
      js: false,
    }),
     partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
