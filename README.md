# SSH Network — Chartered Accountants (Website)

Static website for SSH Network, built for GitHub Pages. No backend, no build
step for pages — all text content lives in editable data files.

## How the site is organised

| Folder / file | What it is |
|---|---|
| `index.html`, `about.html`, `team.html`, `services.html`, `contact.html` | The pages (layout shells — don't edit for text changes) |
| `content/site.js` | **All general text** — hero, tagline, about, contact details, footer |
| `content/team.js` | **Team members** — one block per person |
| `content/services.js` | **Services** — categories and items |
| `assets/css/style.css` | Design (colours, fonts, layout) |
| `assets/js/render.js` | Puts the content into the pages |
| `assets/images/` | Logo, team photos, office photos |
| `blog/<slug>/index.html` | Your exported blog posts (one folder each) |
| `blog/index.html` | Auto-generated listing — **never edit by hand** |
| `scripts/build_blog_index.py` | Rebuilds the blog listing |
| `.github/workflows/build-blog.yml` | Rebuilds the blog listing automatically on push |

**To change any text:** see `HOW-TO-EDIT-TEXT.txt` (plain-English guide).

## First-time deployment to GitHub Pages

1. Create a new repository on github.com (e.g. `ssh-network-website`), keep it **Public**.
2. In this folder run:
   ```
   git init
   git add .
   git commit -m "Initial website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/ssh-network-website.git
   git push -u origin main
   ```
3. On GitHub: repository → **Settings → Pages** → under *Build and deployment*
   choose **Deploy from a branch**, branch `main`, folder `/ (root)`. Save.
4. Wait ~1 minute. The site is live at
   `https://YOUR-USERNAME.github.io/ssh-network-website/`

## Custom domain

1. On GitHub: **Settings → Pages → Custom domain** — type your domain
   (e.g. `www.sshnetwork.in`) and save. GitHub creates the `CNAME` file for you.
2. At your domain registrar (GoDaddy / Hostinger / etc.) add a DNS record:
   - **Type:** CNAME, **Name/Host:** `www`, **Value:** `YOUR-USERNAME.github.io`
   - For the bare domain (`sshnetwork.in`) add four **A** records pointing to
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
3. Back on the Pages settings page, tick **Enforce HTTPS** once it becomes available.

## Connecting the contact form (Formspree — free)

1. Sign up at [formspree.io](https://formspree.io) with samir@casamir.in.
2. Create a new form; copy its ID (looks like `xabcdefg`).
3. Open `content/site.js`, find `formspreeId: ""` and paste the ID between the quotes.
4. Push to GitHub. Form submissions now arrive in your email.

## Publishing a blog post

1. Export your designed post as HTML (it should have a `<title>` and a
   `<meta name="description">` — your exports already do).
2. Create `blog/<short-name>/` and place the file inside renamed to `index.html`.
3. `git add . && git commit -m "New post" && git push`
4. The GitHub Action rebuilds `blog/index.html` automatically (newest first).
   Post dates are stored in `blog/posts.json` — edit that file to change ordering.

## Updating the live site after any edit

```
git add .
git commit -m "Update content"
git push
```
The live site refreshes in about a minute.

---
*Note on ICAI compliance: the "experience includes" strip is worded as the
professionals' corporate experience, not firm client claims. Review against the
ICAI Advertisement Guidelines before go-live.*
