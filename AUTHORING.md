# Authoring Guide

This site is organized so most updates happen in plain text files.

Edit the `main` branch only. GitHub Actions builds the site and deploys it from
the generated `_site` artifact. The `gh-pages` branch is not the source of truth.

## Profile

Edit `_pages/about.md`.

Use the `profile.more_info` block for short contact/location details. Put longer biography text below the front matter.

## Publications

Edit `_bibliography/papers.bib`.

Keep only real BibTeX entries in this file. Do not leave commented-out `@article`
examples inside `papers.bib`, because `jekyll-scholar` may still try to parse
them during the GitHub Actions build.

Useful fields:

```bibtex
selected = {true}
pdf = {paper.pdf}
doi = {10.xxxx/example}
code = {https://github.com/user/repo}
website = {https://example.com}
```

Place PDFs in `assets/pdf/`.

## Notes, Thoughts, and Travel Journals

Published posts live in `_posts/` and must use this filename pattern:

```text
YYYY-MM-DD-short-title.md
```

Recommended front matter:

```yaml
---
layout: post
title: "Post title"
date: 2026-05-11 12:00:00+02:00
description: One-sentence summary.
categories: notes
tags: research reading
related_posts: false
---
```

Use `categories: notes`, `categories: thoughts`, or `categories: travel`.

## Drafts

Templates live in `_drafts/`. They are not published unless copied into `_posts/`.

## Site Settings

Edit `_config.yml` when changing the site title, URL, base path, search settings, blog labels, or publication rendering.

For this repository, keep:

```yaml
url: https://jialin-ye.github.io
baseurl: /Jialin-Page
```

## Files to Ignore

Do not edit generated HTML folders such as `blog/`, `cv/`, `news/`,
`publications/`, or root files such as `index.html`, `feed.xml`, and
`sitemap.xml` on `main`. Those are build output and should only appear inside
the temporary `_site` folder or in a deployment artifact.
