# Personal Blog

A minimalist blog built with [Eleventy](https://www.11ty.dev/). Posts are
plain Markdown files, organized into four categories: travel, books, life,
and epiphanies. Includes an RSS feed and a Buttondown newsletter signup.

## Run it locally

Requires Node.js 18+.

```bash
npm install
npm run serve    # live-reload dev server at http://localhost:8080
npm run build    # writes the final site to _site/
```

## Write a post

Add a Markdown file to `src/posts/`:

```markdown
---
title: My New Post
date: 2026-07-13
tags: [travel]
---

Your content here.
```

`tags` picks the category: `travel`, `books`, `life`, or `epiphanies`.
Delete the sample posts whenever you're ready.

## Customize

Edit `src/_data/site.json` — title, description, author, and your site URL
(needed for the RSS feed once you deploy). Styles live in `src/css/style.css`.

## Newsletter (Buttondown)

1. Create a free account at [buttondown.com](https://buttondown.com) (free up to 100 subscribers).
2. Put your Buttondown username in `src/_data/site.json` (`buttondownUsername`).
3. Rebuild. The subscribe form in the footer now works.

Tip: in Buttondown settings you can connect your RSS feed
(`https://yoursite.com/feed.xml`) so new posts are emailed automatically.

## Deploy (when ready)

**GitHub Pages**: create a repo named `yourusername.github.io`, push this
folder, then in repo Settings → Pages set Source to "GitHub Actions".
The included workflow (`.github/workflows/deploy.yml`) builds and deploys
automatically on every push to `main`.

**Netlify / Vercel**: connect the repo; build command `npm run build`,
output directory `_site`. Nothing else to configure.

After deploying, set `url` in `src/_data/site.json` to your real domain.
