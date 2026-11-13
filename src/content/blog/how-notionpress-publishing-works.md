---
title: "How NotionPress Publishing Works: From Notion to Your Live Website"
description: "Understand the complete NotionPress publishing pipeline and what happens after you change an article in Notion."
slug: "how-notionpress-publishing-works"
status: "published"
publishedDate: "2026-11-13"
author: "NotionPress"
category: "Guides"
tags: ["Guide"]
---

One of the most important things to understand about NotionPress is that Notion is the content source, not the public website itself.

Your articles move through a publishing pipeline before they appear on the live site.

## 1. The complete pipeline

The basic flow is:

```plain text
Notion CMS
   ↓
Notion API
   ↓
Sync script
   ↓
GitHub content
   ↓
Astro build
   ↓
Cloudflare Pages
   ↓
Live website
```

Each part has a specific job.

## 2. Notion is your CMS

You write and manage articles in the Stories database.

This is where you control:

- Title

- Slug

- Status

- Published Date

- Category

- Author

- Description

- Tags

- Article content

You do not need to edit generated website files to publish an article.

## 3. The sync script reads Notion

The sync process connects to the Notion API using your integration credentials.

It reads the Stories database and the content inside each relevant page.

The sync process converts the Notion content into files that Astro can use.

This is the bridge between your CMS and your website code.

## 4. Draft and Published status

NotionPress uses the Status field to decide which stories should appear on the site.

A Draft is still being worked on.

A Published story is eligible for the public website.

This means you can prepare articles in Notion without immediately making them public.

## 5. GitHub stores the synced content

After synchronisation, the generated article content is stored in the repository.

This gives you a useful history of changes and makes the website build reproducible.

GitHub becomes the bridge between the CMS and the deployment platform.

## 6. Astro generates the website

Astro reads the content and generates the pages.

It creates the HTML required for:

- Homepage

- Blog listing

- Article pages

- Category pages

- Tag pages

- Author pages

- Search

- RSS

- Sitemap

- Robots.txt

Because the public pages are generated ahead of time, the website does not need a database request every time someone opens an article.

## 7. Cloudflare Pages deploys the build

Cloudflare Pages takes the generated site and serves it to visitors.

When the repository changes, Cloudflare Pages can build and deploy the new version.

The result is a static website with a simple delivery architecture.

## 8. What happens when you edit an article?

Suppose you change an article in Notion.

The live site does not automatically change at that exact moment.

Instead:

```plain text
Edit Notion
   ↓
Run sync
   ↓
GitHub content changes
   ↓
New build
   ↓
Cloudflare deployment
   ↓
Updated article
```

This distinction is important when troubleshooting publishing delays.

## 9. Sync is not the same as deployment

A sync updates the content stored in the repository.

A deployment builds and publishes the website.

In the normal workflow, these happen as two connected steps:

```plain text
Sync → commit → build → deploy
```

If the sync succeeds but the deployment does not run, your repository may contain the new article while the live site still shows the previous version.

## 10. Why use this architecture?

The main benefit is simplicity.

The public website does not need to query Notion for every visitor.

That can improve:

- Performance

- Reliability

- Caching

- Hosting simplicity

- Operational cost

The trade-off is that publishing is a build process rather than an instant database update.

For a normal blog, that is usually a very reasonable trade-off.
