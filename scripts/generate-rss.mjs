import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const contentDir = path.join(root, "src", "content", "blog");
const outputDir = path.join(root, "public");
const outputFile = path.join(outputDir, "rss.xml");
const siteConfigFile = fs.readFileSync(path.join(root, "src", "config", "site.ts"), "utf8");

function readConfig(key, fallback) {
  const match = siteConfigFile.match(new RegExp(`\\b${key}\\s*:\\s*["']([^"']*)["']`));
  return match?.[1] || fallback;
}

function escapeXml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function readFrontmatter(file) {
  const source = fs.readFileSync(file, "utf8");
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;

  const frontmatter = {};
  for (const line of match[1].split(/\r?\n/)) {
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

const name = readConfig("name", "My Blog");
const description = readConfig("description", "A simple blog powered by Notion and Astro.");
const siteUrl = readConfig("url", "https://example.com").replace(/\/$/, "");

const posts = fs.readdirSync(contentDir)
  .filter((file) => file.endsWith(".md"))
  .map((file) => ({ file, data: readFrontmatter(path.join(contentDir, file)) }))
  .filter(({ data }) => data?.status === "published" && data.slug)
  .sort((a, b) => new Date(b.data.publishedDate || 0) - new Date(a.data.publishedDate || 0));

const items = posts.map(({ data }) => {
  const link = `${siteUrl}/blog/${data.slug}/`;
  const pubDate = data.publishedDate ? new Date(data.publishedDate).toUTCString() : new Date().toUTCString();

  return `    <item>
      <title>${escapeXml(data.title || data.slug)}</title>
      <description>${escapeXml(data.description || "")}</description>
      <link>${escapeXml(link)}</link>
      <guid isPermaLink="true">${escapeXml(link)}</guid>
      <pubDate>${pubDate}</pubDate>
    </item>`;
}).join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(name)}</title>
    <description>${escapeXml(description)}</description>
    <link>${escapeXml(siteUrl)}/</link>
    <language>en</language>
${items}
  </channel>
</rss>
`;

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputFile, xml);
console.log(`Generated ${outputFile} with ${posts.length} published post(s).`);
