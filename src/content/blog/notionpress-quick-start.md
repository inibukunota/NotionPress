---
title: "NotionPress Quick Start: Set Up Your Notion-Powered Website"
description: "Learn how to set up NotionPress, connect Notion to GitHub, configure your site, sync content, and deploy an SEO-friendly website with Astro and Cloudflare Pages."
slug: "notionpress-quick-start"
status: "published"
publishedDate: "2026-11-17"
author: "NotionPress"
category: "Guides"
tags: ["Guide"]
heroImage: "https://prod-files-secure.s3.us-west-2.amazonaws.com/70474600-0b48-49f4-a26b-e78f72d414ab/833cb4be-8860-4f39-aef9-1d5e648bde9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMRCSNUT%2F20261117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261117T150050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIGoeiitjZ82Vg64mEwXIOuYBJXNT8TCGTAOwhGLBxnQVAiA11Mcu5%2F1wiI7LZA3Y0231fyZmh%2BMAV1p7xGyeiUrGMyqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoj8USa99tbNSex2gKtwDE4ZXxR5T5poq4OBYxHAU6eSrGP9Zoz3%2FUQavXH1x3AQ8oVnJW4aXWBE0VXlKloyTSHMVFsPDzH92mkIGj5PnRv7nu4%2BAF1JKQ83ViHxlgQs68xpohGuV9%2BQZzyitp7nPAIjelfsklb99xRgbSC7P%2FVjE%2FTkQuejqER%2B080KkHPTR%2BGnbj72ac0cFBljs4shaBVxWZeJ7piOgJ9I9ZY6WYevj3mQD2V0h1ujmX0beKG7hexKonaxIuT656iF7Lcjo72PkuphU7qRPzdEByExefeWbLmvOFLFUYtdn1AALZd48dlmZSBR18UOC6iytFNyp5q9JcQPw9ldX7p6KDeZ5UYywrE7le1bOr%2BC0H%2FA94zMWX4NkU%2BfTthwo3guIlGIUKVn2I1LuUZQMZIS0daXueMVUAtYYwdoHZhEM2jXOCdZzMELnvhESr83DSjfIGlIF63gjAattc55XSmD5amKgqVDedUa9XiMYjRvC8RsuGyjHXB5En%2Bslw9NlKiuBDmgYYHhrARD83xRUWOxnPKIkYN1c5c2M9mCAuFehz71v3MHkY9An%2BptA%2BneLEUJ6Y%2FcqOgVRSANsIfmw9erSxUIweHLjdSUSIK1fORjMZjvRtFftCd9rtvmEsT8Q5OIwiKDx1wY6pgHYTu2HWmyasPFozmbbmfKc19Wv8m2Ycday8Gi9BRUtQeHpUw55GLY0%2BvcqkWnFbMqNxkqO4zvkbzEMXhkzbcbR3ZuSYD5uMRahjKbGrCntRiKaTNunCtDJ2cjBazE2urLhlcX46rvw%2FZiH1UAyUPI5%2BSKOUnmUeoQvlm7rDzK%2BWYqK5v%2B5HfX%2F4I05dGdVDaUc0o7L%2Bk%2FkpGa%2B%2B4OJU0xGjihe0lcx&X-Amz-Signature=918c7e617903628f506fb8df9371f0323ced32e824a9e2212df94f06bb022d21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
---

NotionPress lets you publish a fast, SEO-friendly website using Notion as your CMS, GitHub for content syncing, Astro for the site, and Cloudflare Pages for deployment.

## 1. Prepare your Github repository & Notion database

First you need all the working files by [cloning the NotionPress repository](https://github.com/inibukunota/NotionPress). 

After that, create a Notion database for your articles. NotionPress uses fields such as Title, Slug, Status, Published Date, Category, Author, Description, and Tags.

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/70474600-0b48-49f4-a26b-e78f72d414ab/9eab29f1-bc0e-4c77-988d-29208ced7f9d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMRCSNUT%2F20261117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20261117T150050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIGoeiitjZ82Vg64mEwXIOuYBJXNT8TCGTAOwhGLBxnQVAiA11Mcu5%2F1wiI7LZA3Y0231fyZmh%2BMAV1p7xGyeiUrGMyqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoj8USa99tbNSex2gKtwDE4ZXxR5T5poq4OBYxHAU6eSrGP9Zoz3%2FUQavXH1x3AQ8oVnJW4aXWBE0VXlKloyTSHMVFsPDzH92mkIGj5PnRv7nu4%2BAF1JKQ83ViHxlgQs68xpohGuV9%2BQZzyitp7nPAIjelfsklb99xRgbSC7P%2FVjE%2FTkQuejqER%2B080KkHPTR%2BGnbj72ac0cFBljs4shaBVxWZeJ7piOgJ9I9ZY6WYevj3mQD2V0h1ujmX0beKG7hexKonaxIuT656iF7Lcjo72PkuphU7qRPzdEByExefeWbLmvOFLFUYtdn1AALZd48dlmZSBR18UOC6iytFNyp5q9JcQPw9ldX7p6KDeZ5UYywrE7le1bOr%2BC0H%2FA94zMWX4NkU%2BfTthwo3guIlGIUKVn2I1LuUZQMZIS0daXueMVUAtYYwdoHZhEM2jXOCdZzMELnvhESr83DSjfIGlIF63gjAattc55XSmD5amKgqVDedUa9XiMYjRvC8RsuGyjHXB5En%2Bslw9NlKiuBDmgYYHhrARD83xRUWOxnPKIkYN1c5c2M9mCAuFehz71v3MHkY9An%2BptA%2BneLEUJ6Y%2FcqOgVRSANsIfmw9erSxUIweHLjdSUSIK1fORjMZjvRtFftCd9rtvmEsT8Q5OIwiKDx1wY6pgHYTu2HWmyasPFozmbbmfKc19Wv8m2Ycday8Gi9BRUtQeHpUw55GLY0%2BvcqkWnFbMqNxkqO4zvkbzEMXhkzbcbR3ZuSYD5uMRahjKbGrCntRiKaTNunCtDJ2cjBazE2urLhlcX46rvw%2FZiH1UAyUPI5%2BSKOUnmUeoQvlm7rDzK%2BWYqK5v%2B5HfX%2F4I05dGdVDaUc0o7L%2Bk%2FkpGa%2B%2B4OJU0xGjihe0lcx&X-Amz-Signature=568bb116aeb77144a71d7cca7171b251188e2d40e1730e95a1a77ff3d6862038&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
