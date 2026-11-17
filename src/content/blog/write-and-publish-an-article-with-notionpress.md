---
title: "How to Write and Publish an Article With NotionPress"
description: "Learn how to structure, write, publish and update an article using the NotionPress Stories database."
slug: "write-and-publish-an-article-with-notionpress"
status: "draft"
publishedDate: "2026-11-13"
author: "NotionPress"
category: "Guides"
tags: ["Guide"]
---

Writing with NotionPress is designed to feel like writing a normal Notion document.

You manage the article metadata in the Stories database and write the actual article inside the page.

## 1. Start with a new story

Open the **Stories** database and create a new page.

Start by filling in the article properties.

At minimum, pay attention to:

- Title

- Slug

- Status

- Published Date

- Category

- Author

- Description

- Tags

The title is the headline readers will see.

The slug becomes part of the article URL, so keep it short and readable.

For example:

```plain text
Title: How to Choose a Laptop for Work
Slug: choose-a-laptop-for-work
```

## 2. Write a useful description

The Description field acts as the short summary for the article.

Write one or two sentences explaining what the reader will learn.

Avoid stuffing keywords into it. Write it for a person first.

A useful description answers:

> What will I get from reading this article?

## 3. Structure the article

Use headings to make longer articles easy to scan.

A typical article structure might look like:

```plain text
H1 Article title

Introduction

H2 Main topic
H3 Supporting point

H2 Second topic
H3 Supporting point

H2 Final thoughts
```

You normally only need one H1 because the article title already provides the main heading.

Use H2 for major sections and H3 for sections underneath them.

## 4. Keep paragraphs short

Online readers tend to scan rather than read every word.

A paragraph of one to four sentences is usually easier to read than a large block of text.

Use lists when several related points need to be presented together.

For example:

- Point one

- Point two

- Point three

This makes the article easier to navigate on both desktop and mobile.

## 5. Use links where they help

Add links when they give readers useful context or let them continue to a related resource.

Good internal links can point readers to:

- Related articles

- Guides

- Category pages

- Important reference pages

Do not add links simply to make an article look more connected. Every link should have a purpose.

## 6. Set the status correctly

The Status property controls whether NotionPress treats the story as published.

Use:

**Draft** when you are still working on the article.

**Published** when the article is ready to appear on the website.

This gives you a simple editorial workflow without needing a separate publishing dashboard.

## 7. Publish the article

Once the article is ready:

1. Review the title.

1. Check the slug.

1. Check the Description.

1. Confirm the category.

1. Check the tags.

1. Confirm the publication date.

1. Set Status to Published.

1. Run the Notion sync.

1. Build and deploy the site.

Always preview the article before sharing the URL publicly.

## 8. Updating an article

You can update a published article directly in Notion.

Change the text or metadata, save the page and run the sync again.

The website will use the updated content after the next build.

For substantial updates, review the article's title, description, headings and links again rather than changing only the paragraph that needed correction.

## 9. Unpublishing an article

The current NotionPress CMS uses two statuses:

- Draft

- Published

If an article should no longer be public, change it back to Draft and run the sync.

The generated site only includes stories that meet the publishing condition.

## 10. A simple editorial checklist

Before publishing, ask:

- Is the title clear?

- Does the slug match the topic?

- Does the Description accurately summarise the article?

- Is the introduction useful?

- Are the headings logical?

- Are the paragraphs easy to scan?

- Are important claims supported?

- Are internal links useful?

- Is the first image suitable?

- Is the article ready for readers?

If the answer is yes, publish it.
