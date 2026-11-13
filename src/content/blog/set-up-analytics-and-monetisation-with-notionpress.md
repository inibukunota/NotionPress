---
title: "How to Set Up Analytics and Monetisation With NotionPress"
description: "Learn how to connect Google Analytics 4, configure ads.txt and use basic traffic data to understand and grow a NotionPress website."
slug: "set-up-analytics-and-monetisation-with-notionpress"
status: "published"
publishedDate: "2026-11-13"
author: "NotionPress"
category: "Guides"
tags: ["Guide"]
---

NotionPress gives you a simple publishing workflow, but publishing is only the beginning. If you want to understand whether people are visiting your site and eventually earn revenue from it, you need basic analytics and monetisation tools.

This guide walks through the two built-in pieces of the NotionPress starter: Google Analytics 4 and ads.txt.

## 1. Set up Google Analytics 4

Google Analytics 4, usually called GA4, lets you measure how people use your website.

For a basic blog, the most useful information includes:

- How many users visit your site

- Which pages receive the most traffic

- How visitors find your site

- How long people engage with your content

- Which articles are becoming your strongest traffic sources

You do not need to configure every GA4 feature before launching. Start with the basics and add more tracking when you have a reason to measure something.

### Create a GA4 property

If you do not already have Google Analytics:

1. Open Google Analytics.

1. Create an Analytics account if necessary.

1. Create a GA4 property for your website.

1. Create a Web data stream.

1. Enter your website URL.

1. Copy the Measurement ID.

The Measurement ID normally looks like this:

```plain text
G-XXXXXXXXXX
```

Keep this ID available for the next step.

## 2. Add your GA4 Measurement ID

NotionPress keeps analytics configuration separate from the article content.

Add your Measurement ID as the `PUBLIC_GA4_ID` environment variable.

For local development, add it to your `.env` file:

```plain text
PUBLIC_GA4_ID=G-XXXXXXXXXX
```

Do not put your Google Analytics Measurement ID in a Notion article. It belongs in the site's configuration.

When `PUBLIC_GA4_ID` is empty, NotionPress does not render the Analytics script. This means you can develop the site without accidentally sending development traffic to your production property.

## 3. Add GA4 to Cloudflare Pages

If your production site is deployed with Cloudflare Pages, add the same variable in the site's environment variables.

Go to your Cloudflare Pages project and find the environment variable settings.

Add:

```plain text
PUBLIC_GA4_ID=G-XXXXXXXXXX
```

Make sure the variable is available to the production build.

After the next deployment, open your website and check the GA4 Realtime report. Visiting the site yourself should eventually appear as an active user.

If you do not see traffic immediately, give Analytics a little time and check that the Measurement ID is correct.

## 4. What should you measure?

You can get lost in analytics very quickly. For a new blog, keep it simple.

Start by watching:

The most useful question is not simply "How much traffic did I get?"

Ask:

> Which content is attracting visitors, and what should I publish next?

For example, if three articles consistently attract search traffic, those topics may deserve follow-up articles, updates or related guides.

## 5. Use analytics to improve your content

Analytics becomes more useful when you connect it to your publishing decisions.

A simple workflow is:

1. Publish an article in Notion.

1. Let NotionPress sync and deploy it.

1. Wait for the article to collect traffic.

1. Identify articles that attract visitors.

1. Look for related questions or topics.

1. Publish supporting content.

1. Link the related articles together.

You can also compare traffic before and after updating an article.

Do not treat pageviews as the only measure of success. A smaller article that attracts highly relevant visitors can be more valuable than a high-traffic page that nobody engages with.

## 6. Set up ads.txt

NotionPress also includes an `ads.txt` file.

The file is located at:

```plain text
public/ads.txt
```

After deployment, it should be accessible at:

```plain text
https://yourdomain.com/ads.txt
```

The starter contains a placeholder. Replace it with the entry supplied by your advertising network.

For example, an advertising provider may give you an entry similar to:

```plain text
google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
```

Use the exact entry supplied by your advertising provider. Do not copy a random example from another website.

## 7. What is ads.txt?

ads.txt is a standard used by publishers to declare which advertising platforms are authorised to sell advertising inventory for their domains.

Think of it as a public list of authorised advertising sellers.

It is separate from the actual advertising code. Adding an entry to `ads.txt` does not automatically place ads on your website.

You still need to create an account with an advertising network and follow that network's implementation instructions.

## 8. When should you monetise?

You do not necessarily need to put ads on a new blog immediately.

For a small site, heavy advertising can make the site harder to use while generating very little revenue.

A better approach is to first build useful content and understand where your visitors come from.

Consider monetisation when you have:

- A consistent publishing schedule

- Some organic or referral traffic

- A clear audience

- Pages that attract repeat visitors

- Enough traffic for advertising revenue to be meaningful

Depending on the site, other options can include affiliate links, sponsorships, digital products, memberships or direct advertising.

## 9. Keep analytics and monetisation separate

Analytics tells you what is happening.

Monetisation determines how you earn from the audience.

Do not optimise for advertising revenue at the expense of the content experience.

A useful site should still be easy to read, fast to load and straightforward to navigate.

The goal is not to put an ad on every available space. The goal is to build an audience that finds the content useful enough to return.

## 10. A simple NotionPress growth loop

Once everything is connected, your workflow can look like this:

```plain text
Notion
  ↓
Publish useful content
  ↓
NotionPress sync
  ↓
Cloudflare Pages deployment
  ↓
Visitors discover your articles
  ↓
GA4 measures traffic
  ↓
Identify successful topics
  ↓
Publish better related content
  ↓
Grow the audience
  ↓
Monetise when it makes sense
```

This is the basic growth loop behind a content site.

NotionPress handles the publishing infrastructure. You decide what to publish, measure what works and decide how the site should grow.
