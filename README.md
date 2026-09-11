# woltix.com

Marketing site for Woltix. Jekyll, no plugins, no JS framework, no build step
beyond Jekyll itself.

```bash
bundle install
bundle exec jekyll serve     # http://localhost:4000
```

## Layout of the repo

```
index.html              the landing page (front matter + markup, styles are shared)
privacy.md              Privacy Policy        →  /privacy/
cookies.md              Cookie Policy         →  /cookies/
terms.md                Terms of Use          →  /terms/
404.md                  404 page
robots.txt              search + AI crawler rules   (Liquid template)
sitemap.xml             generated from site.pages   (Liquid template)
llms.txt                structured summary for AI assistants (Liquid template)
site.webmanifest        PWA manifest

_includes/
  head.html             <head>: SEO, Open Graph, icons, fonts
  structured-data.html  schema.org JSON-LD graph
  analytics.html        GA4 via Google Consent Mode v2
  cookie-consent.html   consent banner + logic
  topbar.html           sticky header and mobile nav
  footer.html           footer, legal links, disclaimers
_layouts/
  base.html             html shell used by everything
  landing.html          home
  page.html             legal / prose pages
  404.html
assets/
  css/woltix.css        the whole design system, one file
  js/site.js            mobile nav + demo form (~3 KB, no dependencies)
  fonts/                Manrope, self-hosted (variable, weights 400–800)
```

## Things that are easy to get wrong

**Analytics.** `_includes/analytics.html` declares Consent Mode defaults as
*denied* **before** `gtag.js` loads. That ordering is what makes the site
lawful and what makes the numbers correct — do not move the script tag above
the inline block, and do not re-add a `location.reload()` to the consent
banner (it destroys pageview attribution). Set `analytics.ga4_id: ""` in
`_config.yml` to switch analytics off entirely; the banner disappears with it.

**No plugins.** `robots.txt`, `sitemap.xml`, `llms.txt` and
`site.webmanifest` are Liquid templates with front matter, not plugin output.
This keeps the site building identically under GitHub Pages' classic build and
under modern Jekyll. Adding a plugin re-introduces that divergence.

**`theme: null` in `_config.yml`** is deliberate. Without it, GitHub Pages'
classic build injects `jekyll-theme-primer` and its stylesheet.

**The home page title** is pinned in `head.html` rather than read from
`page.title`, because the classic build force-enables
`jekyll-titles-from-headings`, which would otherwise overwrite it with the
hero H1.

**A new legal page** gets `layout: page`, a `title:`, a `description:` and an
`updated:` date. It is picked up by `sitemap.xml` automatically. To keep a
page out of Google and the sitemap, set `noindex: true`.

## Deployment

`.github/workflows/deploy.yml` builds with the Jekyll version pinned in the
`Gemfile` and deploys to GitHub Pages, with a post-build check that the
expected files exist, the canonical URL is right and no `localhost` URL
leaked in.

**One-time setup:** repository **Settings → Pages → Build and deployment →
Source** must be set to **GitHub Actions**. Until then the older classic build
is what actually serves the site (it still works — the site is plugin-free —
but it runs Jekyll 3.10 rather than the version in the `Gemfile`).

## Editing copy

Everything on the landing page is plain HTML in `index.html`; the section
comment banners make it navigable. Legal pages are Markdown. Company details,
the GA4 ID and the form endpoint all live in `_config.yml` — change them
there, not in the templates.

## The demo form

Posts to Pageclip (`forms.pageclip_endpoint` in `_config.yml`). `site.js`
submits it over `fetch` so the visitor stays on the page, validates the email,
drops honeypot submissions, and falls back to a normal form POST if JavaScript
is unavailable. If the endpoint ever changes, change it in `_config.yml` and
update the processor table in `privacy.md`.

## Checks worth re-running after a change

- Build: `bundle exec jekyll build --trace`
- Every internal link resolves, one H1 per page, no `localhost` leak — the
  deploy workflow covers the last two.
- Responsive: no horizontal overflow between 320 px and 1920 px.
- Accessibility: axe-core with `wcag2aa` should stay at zero violations.
