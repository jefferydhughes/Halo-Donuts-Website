# Halo Donuts website prototype

A mobile-responsive, multi-page static site designed for Halo Donuts.

## Quick content updates

- Update the homepage seasonal campaign and Square order URL in `data/site.json`.
- Update core flavour cards in `app.js`.
- Replace images in `assets/` without changing their filenames.

## Square menu integration

The prototype routes all order buttons to the configured Square ordering URL. A true automatic catalogue sync requires a small server-side endpoint and Halo's Square location/catalogue credentials; do not place Square access tokens in front-end JavaScript. Until that connection is added, the Square-hosted ordering page remains the live source of availability and pricing.
