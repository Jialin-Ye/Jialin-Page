# Jialin Ye Academic Website

This repository contains the editable source for my personal academic website, built with [al-folio](https://github.com/alshedivat/al-folio) and published with GitHub Pages.

## Daily Workflow

1. Open the folder in VS Code.
2. Edit Markdown, YAML, or BibTeX files locally.
3. Preview the site if needed.
4. Commit and push to `main`.
5. GitHub Actions builds the site and deploys it automatically.

## What to Edit

| Goal | File or Folder |
| --- | --- |
| Homepage/profile | `_pages/about.md` |
| Publications | `_bibliography/papers.bib` |
| CV | `_data/cv.yml` |
| Notes, thoughts, travel journals | `_posts/` |
| Draft templates | `_drafts/` |
| Images | `assets/img/` |
| PDFs | `assets/pdf/` |
| Site settings | `_config.yml` |
| Social links | `_data/socials.yml` |

## Create a New Post

Copy one draft template from `_drafts/` into `_posts/` and rename it:

```text
_posts/YYYY-MM-DD-short-title.md
```

Use one of these categories:

- `notes`
- `thoughts`
- `travel`

## Publish

```bash
git add .
git commit -m "Update website content"
git push -u origin main
```

After the first push, plain `git push` is enough.

The deployment workflow is `.github/workflows/pages.yml`. It builds the site from `main` and publishes the generated `_site` folder to the `gh-pages` branch.

In GitHub repository settings, Pages should use:

- Source: `Deploy from a branch`
- Branch: `gh-pages`
- Folder: `/ (root)`

## Local Preview

Docker is the recommended al-folio preview path:

```bash
docker compose pull
docker compose up
```

Then open <http://localhost:8080/Jialin-Page/>.

If you do not use Docker, install Ruby 3.3.5 and run:

```bash
bundle install
bundle exec jekyll serve --baseurl /Jialin-Page
```
