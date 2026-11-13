import { getCollection } from "astro:content";

export async function getPublishedPosts() {
  const posts = await getCollection("blog");
  return posts
    .filter((post) => post.data.status === "published")
    .sort((a, b) => b.data.publishedDate.getTime() - a.data.publishedDate.getTime());
}

export function getPostUrl(slug: string) {
  return `/blog/${slug}/`;
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
