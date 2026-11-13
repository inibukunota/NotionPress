---
title: "How to Customize Your NotionPress Website Without Breaking It"
description: "A practical guide to changing the look and feel of NotionPress while keeping the codebase modular and maintainable."
slug: "customize-your-notionpress-website"
status: "published"
publishedDate: "2026-11-13"
author: "NotionPress"
category: "Guides"
tags: ["Guide"]
---

NotionPress is designed so common customisation does not require editing the whole project.

The easiest approach is to change configuration and styles first, then move into components only when necessary.

## 1. Start with the configuration

Your first stop should be the configuration files.

Use the site configuration for things such as:

- Site name

- Site description

- Website URL

- Language

- Default author information

Keep site-wide settings in configuration rather than scattering them throughout page files.

## 2. Change the navigation

The navigation configuration controls the main links shown by the site.

This is where you can add, remove or rename links such as:

- Home

- Blog

- Search

- About

- Contact

Keep navigation labels short and clear.

## 3. Change colours in one place

The theme stylesheet should contain the main visual variables.

For example:

```plain text
Text colour
Muted text
Background
Borders
Accent colour
```

Changing these variables lets you restyle much of the site without hunting through individual components.

This is one of the most important ideas in the NotionPress architecture: repeated design decisions should live in one place.

## 4. Change typography separately

Typography should have its own stylesheet or clearly separated section.

This lets you adjust:

- Body font

- Heading font

- Font sizes

- Line height

- Heading spacing

- Article readability

For article pages, readability should be prioritised over fitting as much text as possible onto one line.

The default article body is intentionally narrow enough to remain comfortable to read on desktop.

## 5. Keep the article width controlled

The article body uses a constrained content width rather than stretching across the entire desktop screen.

A useful starting point is around 750px.

The site shell can be wider while the actual article text remains narrower.

This creates a useful distinction:

```plain text
Wide site layout
      ↓
Narrow reading column
      ↓
Comfortable article text
```

## 6. Edit components when you need structural changes

If changing CSS is not enough, edit the relevant component.

For example:

- Header → Header component

- Footer → Footer component

- Article metadata → Story layout

- Article cards → Story card component

- SEO metadata → Base head

- Structured data → SEO structured-data module

Try to keep each component responsible for one area of the interface.

## 7. Avoid editing generated content

Do not manually edit generated article files as part of your normal publishing workflow.

Your source content is Notion.

If you edit a generated Markdown file and run the sync again, your manual change may be overwritten.

The safe workflow is:

```plain text
Content change → Notion
Design change → Astro/CSS
Site setting → Configuration
```

## 8. Test after every meaningful change

You do not need a complicated testing system for every CSS change.

At minimum, check:

- Homepage

- Blog listing

- Article page

- Category page

- Tag page

- Search

- Mobile navigation

- 404 page

Also resize the browser to check mobile behaviour.

## 9. Make one type of change at a time

If you change the typography, navigation, article layout and homepage at the same time, it becomes difficult to identify what caused a problem.

A better workflow is:

1. Make one change.

1. Run the local site.

1. Check the affected pages.

1. Commit the change.

1. Move to the next change.

This keeps the Git history easier to understand too.

## 10. Keep the modular principle

When adding a new feature, ask:

> Can this live in its own component, configuration file or utility?

If the answer is yes, keep it separate.

That makes NotionPress easier to maintain and makes future customisation much less painful.
