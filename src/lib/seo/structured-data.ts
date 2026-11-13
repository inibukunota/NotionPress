import { siteConfig } from "../../config/site";

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    inLanguage: siteConfig.locale,
  };
}

export function publisherSchema() {
  return {
    "@type": siteConfig.author.type,
    name: siteConfig.author.name,
    url: siteConfig.url,
  };
}

export function articleSchema(post: {
  title: string;
  description: string;
  slug: string;
  publishedDate: Date;
  updatedDate?: Date;
  author: string;
  category: string;
  tags: string[];
  heroImage?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    url: new URL(`/blog/${post.slug}/`, siteConfig.url).toString(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": new URL(`/blog/${post.slug}/`, siteConfig.url).toString(),
    },
    datePublished: post.publishedDate.toISOString(),
    ...(post.updatedDate ? { dateModified: post.updatedDate.toISOString() } : {}),
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: publisherSchema(),
    ...(post.heroImage ? { image: [post.heroImage] } : {}),
    articleSection: post.category,
    keywords: post.tags,
    inLanguage: siteConfig.locale,
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function collectionPageSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}
