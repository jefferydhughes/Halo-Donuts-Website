# Halo Donuts website prototype

A mobile-responsive, multi-page static site designed for Halo Donuts.

## GitHub Pages

The Pages workflow at `.github/workflows/deploy-pages.yml` publishes this
folder when changes are pushed to `main`. In the repository's
**Settings → Pages**, set **Build and deployment → Source** to **GitHub Actions**.
If Pages is still set to deploy from the `main` branch's `/ (root)` folder,
the root `index.html` redirects visitors into this folder. Branch publishing
does not offer a `/halo-donuts-site/` folder option. The site URL is
`https://jefferydhughes.github.io/Halo-Donuts-Website/`.

## Quick content updates

- Update the homepage seasonal campaign and Square order URL in `data/site.json`.
- Update core flavour cards in `app.js`.
- Replace images in `assets/` without changing their filenames.

## Square menu integration

The prototype routes all order buttons to the configured Square ordering URL. A true automatic catalogue sync requires a small server-side endpoint and Halo's Square location/catalogue credentials; do not place Square access tokens in front-end JavaScript. Until that connection is added, the Square-hosted ordering page remains the live source of availability and pricing.
