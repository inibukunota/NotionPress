---
title: "NotionPress Quick Start: Set Up Your Notion-Powered Website"
description: "Learn how to set up NotionPress, connect Notion to GitHub, configure your site, sync content, and deploy an SEO-friendly website with Astro and Cloudflare Pages."
slug: "notionpress-quick-start"
status: "published"
publishedDate: "2026-11-17"
author: "NotionPress"
category: "Guides"
tags: ["Guide"]
---

NotionPress lets you publish a fast, SEO-friendly website using Notion as your CMS, GitHub for content syncing, Astro for the site, and Cloudflare Pages for deployment.

## 1. Prepare your Notion database

Create a Notion database for your articles. NotionPress uses fields such as Title, Slug, Status, Published Date, Category, Author, Description, and Tags.

Set the article Status to Published when you want NotionPress to include it on your website. Keep new articles as Draft while you are working on them.

## 2. Connect Notion to GitHub

Add your Notion credentials to the project's environment variables or GitHub Secrets:

- NOTION_TOKEN

- NOTION_DATABASE_ID

Keep these values private. They should not be placed in your public configuration file.

## 3. Configure your website

Open `src/config/config.ts` and update your site information. You normally do not need to edit other files for basic site setup.

The configuration covers your site, author, organization, Google Analytics 4, social profiles, and monetisation settings.

## 4. Sync and preview your content

Install the dependencies, sync your Notion content, and start the local development server:

```bash
npm install
npm run sync:notion
npm run dev
```

When you are ready to check the production build, run:

```bash
npm run build
```

## 5. Deploy with Cloudflare Pages

Connect your GitHub repository to Cloudflare Pages. Use `npm run sync:build` as the build command and `dist` as the output directory.

Once deployed, NotionPress can sync your Notion articles through GitHub and rebuild the Astro website automatically.

That is the basic NotionPress workflow: write in Notion, sync through GitHub, build with Astro, and deploy to Cloudflare Pages.
