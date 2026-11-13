# NotionPress

NotionPress is a simple, fast and SEO-friendly blog starter powered by Notion, Astro and Cloudflare Pages.

Write in Notion. Sync to GitHub. Build with Astro. Deploy to Cloudflare Pages.

## What you get

- Notion as the content management system
- Astro static blog
- Responsive design
- Categories, tags and authors
- Draft, Published and Unpublished statuses
- Featured image taken from the first image in the Notion article
- SEO metadata, canonical URLs, Open Graph and Twitter/X cards
- JSON-LD structured data: WebSite, Article, BreadcrumbList and CollectionPage
- Sitemap, robots.txt and RSS
- Google Analytics 4
- ads.txt
- Search-friendly clean URLs
- Cloudflare Pages compatible
- No database and no R2 required

## Quick start

1. Click **Use this template** on GitHub.
2. Duplicate the Notion CMS template.
3. Create a Notion integration and give it access to the database.
4. Copy the database ID and integration token.
5. Copy .env.example to .env and add:
   - NOTION_TOKEN
   - NOTION_DATABASE_ID
   - PUBLIC_GA4_ID (optional)
6. Run `npm install`.
7. Run `npm run sync:notion`.
8. Run `npm run dev`.
9. Connect the repository to Cloudflare Pages. Use `npm run sync:build` as the build command and `dist` as the output directory.

For GitHub Actions sync, add NOTION_TOKEN and NOTION_DATABASE_ID as repository secrets. The workflow runs daily and can also be started manually.

## Notion database fields

Create these properties:

| Property | Type | Purpose |
|---|---|---|
| Title | Title | Article title |
| Slug | Rich text | URL slug |
| Status | Select | Draft, Published or Unpublished |
| Published Date | Date | Publication date |
| Category | Select | Main category |
| Author | Person or Rich text | Author name |
| Excerpt | Rich text | Search/social description |
| Tags | Multi-select | Article tags |

The article body lives inside the Notion page.

The first image in the article becomes the featured image automatically and is removed from the article body to avoid duplication.

## Configuration

Most site changes live in obvious locations:

- Site name, URL and owner: `src/config/site.ts`
- Navigation: `src/config/navigation.ts`
- Colours, widths and fonts: `src/styles/theme.css`
- Typography: `src/styles/typography.css`
- General styling: `src/styles/global.css`
- Header: `src/components/Header.astro`
- Footer: `src/components/Footer.astro`
- Article layout: `src/layouts/StoryLayout.astro`
- SEO and structured data: `src/lib/seo/`
- Notion sync: `scripts/notion-sync/index.mjs`

## Analytics

Set `PUBLIC_GA4_ID` to your GA4 Measurement ID, for example `G-XXXXXXXXXX`.

If it is empty, no Analytics script is rendered.

## ads.txt

Edit `public/ads.txt` and add your advertising network entries. It is served at:

`https://yourdomain.com/ads.txt`

## Images

NotionPress intentionally does not use R2. Article images are referenced from Notion.

Important: Notion-hosted file URLs can be temporary/expiring. This makes direct Notion image URLs suitable for a simple starter but not a perfect long-term image-hosting solution. If a site needs permanent, cacheable image hosting, an image storage layer should be added later.

## Content workflow

Notion → GitHub sync → Astro build → Cloudflare Pages.

Changing content in Notion does not by itself change the deployed static site. A sync must run and create a Git commit, which then triggers a Cloudflare Pages build.

## License

Use, modify and adapt NotionPress for your own projects.