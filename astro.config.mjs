import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { config } from "./src/config/config";

export default defineConfig({
  site: config.site.url,
  trailingSlash: "always",
  integrations: [sitemap()],
});
