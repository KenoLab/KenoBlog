# KenoBlog

The blog of the [Kenolab](https://kenolab.eu) team: writeups, research and fun.
Live at https://blog.kenolab.eu

Built with [Hugo](https://gohugo.io) (extended edition) and the [BlogRa](https://github.com/rafed/BlogRa) theme, which is a git submodule and is not edited. All customisation lives in `assets/` and `layouts/`.

## Run locally

```bash
git clone --recurse-submodules <repository-url>
cd KenoBlog
hugo server -D
```

`-D` also shows drafts. If `themes/BlogRa` is empty: `git submodule update --init --recursive`.

## Write a post

Create `content/blog/<section>/<post-name>/index.md` (sections: `writeup`, `fun`, `R&D`) and put the images next to it.

```yaml
---
title: "My post"
date: 2026-10-05
description: "One sentence for the cards."
tags: ["tag1", "tag2"]
image: cover.png
authors:
  - "author-folder-name"   # a folder in content/authors/
---
```

Callouts: start a quote with `> [!NOTE]`, `[!TIP]`, `[!IMPORTANT]`, `[!WARNING]` or `[!CAUTION]`.

## Create your author profile

Do this first: posts and the team page both refer to it. Create `content/authors/<your-name>/_index.md` and put your avatar image (square) in the same folder:

```yaml
---
title: "your-name"
description: "A short bio"
avatar: "avatar.png"
---
```

Use the folder name in `authors:` of your posts and in the team page.

## Team page

Each member of `content/team.md` uses the `team-member` shortcode. Link parameters are optional and become icons:

```markdown
{{< team-member author="author-folder-name" github="https://..." x="https://..." >}}

A short description.

{{< /team-member >}}
```

Supported links: `github`, `x`, `linkedin`, `hackthebox`, `tryhackme`, `bluesky`, `blog`, `website`, `mastodon`, `discord`, `youtube`.

To add another one, put its SVG in `assets/icons/` and add a line to the list in `layouts/shortcodes/team-member.html`.

## Deploy

Pushing to `main` builds the site with `hugo --gc --minify` and publishes it to GitHub Pages.
