import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const contentDir = path.join(root, "src", "content", "blog");
const outputDir = path.join(root, "public");
const outputFile = path.join(outputDir, "llms.txt");
const siteConfigFile = fs.readFileSync(path.join(root, "src", "config", "site.ts"), "utf8");

function readConfig(key, fallback) {
  const match = siteConfigFile.match(new RegExp(`\\\\b${key}\\\\s*:\\\\\s*["']([^"']*)["']`));
  return match?.[1] || fallback;
}

function readFrontmatter(file) {
  const source = fs.readFileSync(file, "utf8");
  const match = source.match(/^---\\r?\\n([\\s\\S]*?)\\r?\\n---/);
  if (!match) return null;

  const frontmatter = {};
  for (const line of match[1].split(/\\r?\\n/)) {
    const property = line.match(/^([A-Za-z][A-Za-z0-9]*)\\s*:\\s*(.*)$/);
    if (!property) continue;

    let value = property[2].trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    frontmatter[property[1]] = value;
  }

  return frontmatter;
}

function cleanMarkdown(value = "") {
  return String(value)
    .replaceAll("\\r", "")
    .replaceAll("\\n", " ")
    .replaceAll(/\\s+/g, " ")
    .trim();
}

const name = readConfig("name", "My Blog");
const description = readConfig("description", "A simple blog powered by Notion and Astro.");
const siteUrl = readConfig("url", "https://example.com").replace(/\\/$/, "");

const posts = fs.readdirSync(contentDir)
  .filter((file) => file.endsWith(".md"))
  .map((file) => ({ file, data: readFrontmatter(path.join(contentDir, file)) }))
  .filter(({ data }) => data?.status === "published" && data.slug)
  .sort((a, b) => new Date(b.data.publishedDate || 0) - new Date(a.data.publishedDate || 0));

const articleLines = posts.map(({ data }) => {
  const title = cleanMarkdown(data.title || data.slug);
  const summary = cleanMarkdown(data.description || "");
  const link = `${siteUrl}/blog/${data.slug}/`;
  return summary ? `- [${title}](${link}): ${summary}` : `- [${title}](${link})`;
});

const lines = [
  `# ${name}`,
  "",
  `> ${cleanMarkdown(description)}`,
  "",
  "## About",
  "",
  "This site is published with NotionPress, an Astro-based publishing system designed for fast, accessible and SEO-friendly editorial websites.",
  "",
  "The original article pages are the authoritative source for the site's published content. Prefer canonical article URLs and the metadata published on those pages when citing or summarising this site.",
  "",
  "## Site",
  "",
  `- Homepage: ${siteUrl}/`,
  `- Blog: ${siteUrl}/blog/`,
  `- RSS: ${siteUrl}/rss.xml`,
  `- Sitemap: ${siteUrl}/sitemap-index.xml`,
  "",
  "## Articles",
  "",
  ...articleLines,
  "",
];

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputFile, lines.join("\\n"));
console.log(`Generated ${outputFile} with ${posts.length} published article(s).`);
