---
title: "Getting Started With NotionPress: Build Your First Notion-Powered Blog"
description: "A practical introduction to NotionPress, including the setup flow from GitHub and Notion to Astro and Cloudflare Pages."
slug: "getting-started-with-notionpress"
status: "published"
publishedDate: "2026-11-13"
author: "NotionPress"
category: "Guides"
tags: ["Guide"]
---

NotionPress is a lightweight blog starter that lets you write articles in Notion and publish them as a fast website.

The basic idea is simple:

```plain text
Notion
  ↓
Notion API
  ↓
GitHub sync
  ↓
Astro
  ↓
Cloudflare Pages
  ↓
Your website
```

You do not need to manage a traditional database or a complicated CMS. Your Notion database acts as the editorial workspace, while Astro turns the published content into a website.

## 1. Create your GitHub repository

Start by creating your own copy of the NotionPress repository.

On GitHub, open the NotionPress repository and select **Use this template**.

Create a new repository under your GitHub account or organisation.

Once created, you have your own independent copy of the starter.

## 2. Create your Notion CMS

Duplicate the NotionPress CMS template into your Notion workspace.

The CMS contains a **Stories** database. Each row represents an article.

The important fields are:

The article itself is written inside the Notion page.

## 3. Connect Notion to the project

Create a Notion integration and give it access to your Stories database.

The integration needs permission to read the database and its article pages.

Copy the integration token and keep it private.

You will also need the database or data source ID used by your NotionPress setup.

## 4. Configure environment variables

NotionPress uses environment variables rather than hard-coding private credentials.

A typical local configuration looks like:

```plain text
NOTION_TOKEN=your_notion_token
NOTION_DATABASE_ID=your_database_id
PUBLIC_GA4_ID=G-XXXXXXXXXX
```

Only add the GA4 variable if you want analytics.

Never commit your Notion token to GitHub.

## 5. Install the project

Clone your repository and install its dependencies.

Then run the Notion sync:

```plain text
npm run sync:notion
```

The sync script reads your published and draft stories from Notion and generates the local content used by Astro.

Start the development server:

```plain text
npm run dev
```

Open the local address shown by Astro.

## 6. Publish your first article

Create a story in the Notion database.

Fill in the required properties and write the article in the page body.

For the first test, keep the article simple.

Set:

- Status: Published

- Title: your article title

- Slug: a clean URL slug

- Published Date: today's date

- Category: a suitable category

- Author: your author

- Description: a short summary

- Tags: relevant topics

Run the sync again.

Your article should now appear in the generated website.

## 7. Deploy to Cloudflare Pages

Connect the GitHub repository to Cloudflare Pages.

Use Astro's normal production build:

```plain text
npm run build
```

Set the output directory to:

```plain text
dist
```

Your GitHub sync workflow can update the content repository, after which Cloudflare Pages rebuilds the site.

## 8. The important mental model

NotionPress is not a live Notion-to-website renderer.

Your website is generated from synced content.

That means changing an article in Notion does not instantly change the live website. The content must first be synchronised, committed to GitHub and built by Astro.

This approach keeps the public site fast and simple.

## 9. What you should customise first

After the first successful deployment, customise these areas:

- Site name and description

- Website URL

- Navigation

- Colours

- Typography

- Analytics

- ads.txt

- Categories and tags

- Sample content

Keep the first deployment close to the default. Make sure the publishing pipeline works before making major design changes.

## 10. Your first successful workflow

Once everything is connected, publishing becomes straightforward:

```plain text
Write in Notion
      ↓
Set Status to Published
      ↓
Sync to GitHub
      ↓
Astro builds the site
      ↓
Cloudflare Pages deploys
      ↓
Article is live
```

That is the core NotionPress workflow.
