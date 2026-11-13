/**
 * NotionPress site and SEO configuration.
 *
 * Edit this file when setting up your website.
 * Most SEO metadata is generated automatically from these values
 * and from each article's Notion content.
 */

export const siteConfig = {
  // Site identity
  name: "My Blog",
  description: "A simple blog powered by Notion and Astro.",
  url: "https://example.com",
  language: "en",
  locale: "en-MY",

  // Author / publisher
  author: {
    name: "Your Name",
    url: "",
    type: "Person" as "Person" | "Organization",
  },

  // SEO defaults
  // Used when a page does not provide its own value.
  seo: {
    defaultImage: "/og-image.jpg",
  },

  // Social profiles
  // These are also used as sameAs links in structured data when provided.
  social: {
    x: "",
    facebook: "",
    instagram: "",
    youtube: "",
    linkedin: "",
  },
};
