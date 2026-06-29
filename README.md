# screenbridge-website

Static export of the Screenbridge marketing site, migrated off Webflow.
Pure HTML/CSS/JS — no build step. Serve the folder as-is from any static host.

## Origin

Exported from Webflow (`screenbridge.webflow.zip`, 2026-06-29). The flat layout
is intentional: every page links to `css/`, `js/`, `images/`, and `videos/`
with **relative paths**, so the directory must be served from its root and files
must not be reorganized into subfolders without rewriting those links.

## Structure

```
*.html            28 pages (index, work, case-studies, blog, ctv-…, ugc-ad-checker, legal)
detail_*.html     Webflow CMS template stubs — not standalone pages
css/              normalize.css, webflow.css, screenbridge.webflow.css
js/               webflow.js
images/           ~314 assets (svg/png/jpg)
videos/           36 mp4/webm assets (~151 MB)
```

## Local preview

```bash
python3 -m http.server 8080   # then open http://localhost:8080
```

## Deploy

- **Vercel:** import the repo, framework = "Other", output dir = root, no build command.
- **GitHub Pages:** enable Pages on the chosen branch, root folder.
- **Lovable:** import the repo to edit/host.

## Branch

`webflow-export` holds the raw Webflow dump as a clean baseline. Edits happen on
branches off it; keep this branch as the untouched reference.
