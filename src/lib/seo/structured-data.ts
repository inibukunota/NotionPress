import { siteConfig } from "../../config/site";

const absoluteUrl = (value: string) => new URL(value, siteConfig.url).toString();

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    inLanguage: siteConfig.locale,
    publisher: publisherSchema(),
  };
}

export function publisherSchema() {
  const sameAs = Object.values(siteConfig.social).filter(Boolean);

  return {
    "@type": siteConfig.author.type,
    name: siteConfig.author.name,
    url: siteConfig.author.url || siteConfig.url,
    ...(sameAs.length > 0 ? { sameAs } : {}),
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
  wordCount?: number;
  readingTime?: number;
}) {
  const url = absoluteUrl(`/blog/${post.slug}/`);
  const image = post.heroImage ? [absoluteUrl(post.heroImage)] : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    datePublished: post.publishedDate.toISOString(),
    ...(post.updatedDate ? { dateModified: post.updatedDate.toISOString() } : {}),
    author: { "@type": "Person", name: post.author },
    publisher: publisherSchema(),
    ...(image ? { image } : {}),
    ...(post.wordCount ? { wordCount: post.wordCount } : {}),
    ...(post.readingTime ? { timeRequired: `PT${post.readingTime}M` } : {}),
    articleSection: post.category,
    keywords: post.tags,
    inLanguage: siteConfig.locale,
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
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

export function collectionPageSchema(
  name: string,
  description: string,
  url: string,
  posts: Array<{ title: string; slug: string; heroImage?: string }> = [],
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url,
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
    ...(posts.length > 0
      ? {
          mainEntity: {
            "@type": "ItemList",
            itemListElement: posts.map((post, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: absoluteUrl(`/blog/${post.slug}/`),
              name: post.title,
              ...(post.heroImage ? { image: absoluteUrl(post.heroImage) } : {}),
            })),
          },
        }
      : {}),
  };
}
