import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify/functions";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  integrations: [react(), image()],
});
