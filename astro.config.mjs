import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { siteConfig } from "./src/config/site";

export default defineConfig({
  site: siteConfig.url,
  trailingSlash: "always",
  integrations: [sitemap()],
});
