import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "http://newperspectivecayman.com",
  integrations: [react(), image(), mdx(), sitemap(), compress()],
});
