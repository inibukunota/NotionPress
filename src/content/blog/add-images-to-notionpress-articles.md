---
title: "How to Add Images to NotionPress Articles"
description: "Learn how images work in NotionPress, including the automatic featured image system and practical image formatting tips."
slug: "add-images-to-notionpress-articles"
status: "published"
publishedDate: "2026-11-13"
author: "NotionPress"
category: "Guides"
tags: ["Guide"]
---

NotionPress keeps image management deliberately simple.

You do not need a separate featured-image field. Instead, the first image in your Notion article becomes the article's featured image automatically.

The same image is removed from the article body during sync so it does not appear twice.

## 1. Add an image to your article

Open your story in Notion and add an image block to the article.

You can upload an image or use an image source supported by Notion.

Place the image where it makes sense in the article.

For the automatic featured-image behaviour, make the image the first image block in the article.

## 2. The first image becomes the featured image

NotionPress looks for the first image in the article body.

That image is used as the article's featured image.

This means you do not need to maintain two copies:

```plain text
First article image
      ↓
Featured image
      +
Article image source
```

The synced article keeps the image as the featured image and removes the duplicate from the article body.

## 3. Why use this approach?

A separate featured-image property sounds useful, but it creates another piece of metadata to maintain.

The first-image approach is easier:

1. Write the article.

1. Add the main image first.

1. Continue writing.

1. Sync the content.

1. NotionPress uses that first image automatically.

This keeps the CMS simple for normal users.

## 4. Choose a useful first image

Your first image should represent the article clearly.

A good featured image should:

- Relate directly to the article

- Look good when cropped

- Have enough resolution for the site's layout

- Avoid unnecessary text

- Work reasonably well on mobile

Do not choose an image simply because it looks attractive if it has little connection to the article.

## 5. Use additional images inside the article

You can add more images later in the article.

These images remain in the article body because only the first image receives the automatic featured-image treatment.

Use additional images when they help explain something.

For example, a tutorial might use:

1. A main image at the beginning

1. A screenshot for step one

1. A screenshot for step two

1. A final screenshot showing the result

## 6. Think about image size

Very large images can make pages heavier.

Before uploading images, consider whether the original file is much larger than what readers need.

For a normal blog image, you usually do not need a huge source file intended for print.

A practical target is an image that is large enough for the website's content area without being unnecessarily enormous.

## 7. Use meaningful images

Images should add information, context or visual interest.

For example, use screenshots to show a process rather than telling readers to "look at the screen".

Use diagrams when a concept is easier to understand visually.

Use photographs when the visual itself is part of the story.

## 8. Be aware of Notion-hosted images

The NotionPress MVP uses images referenced from Notion rather than copying them into a separate object-storage system.

That keeps the setup simple and avoids requiring an R2 bucket.

However, Notion-hosted file URLs can have limitations, including URL expiration behaviour.

For a simple starter site this is an acceptable trade-off. If your website eventually needs a large image library or stronger asset control, you can add a dedicated image-storage layer later.

## 9. A simple image workflow

For most articles:

```plain text
Choose main image
      ↓
Place it first in Notion
      ↓
Write the article
      ↓
Add supporting images where useful
      ↓
Sync NotionPress
      ↓
First image becomes featured image
```

That is all you need to manage images in the MVP.
