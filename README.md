# VIPS Madrid — NFC tap card

A single-screen "tap card" landing page for **VIPS Madrid**. Tap the NFC chip → this
page opens → one tap follows VIPS on any of their social channels.

Full-bleed VIPS red (`#DD1B2D`, from the official 2024 Spain logo) with the white
**VIPS** wordmark and a faint oversized "V" chevron in the background. White
Instagram CTA, frosted social grid (TikTok, Facebook, X, YouTube) and an outline
link to vips.es. Fully static, no web fonts, no third-party requests. Spanish copy.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Structure **+ the `CONFIG` block** (the only thing to edit) |
| `style.css`  | Fixed design (VIPS red / white). |
| `app.js`     | Wires `CONFIG` into the page; hides any button whose URL is `""`. |
| `logo.svg`   | Official VIPS wordmark, white on transparent. |
| `Dockerfile` | Optional static `nginx` container for non-Cloudflare hosting. |

## Links (CONFIG)

| Button | URL |
|--------|-----|
| Instagram | https://www.instagram.com/envips/ |
| TikTok | https://www.tiktok.com/@envips |
| Facebook | https://www.facebook.com/vips/ |
| X | https://x.com/VIPS |
| YouTube | https://www.youtube.com/@envips |
| Website | https://www.vips.es/ |
| Google review | *(empty — hidden)* |

### Adding a Google review button

VIPS has many restaurants in Madrid, so the review link is left empty. To turn the
card into a review card for one location, set `GOOGLE_REVIEW_LINK` to
`https://search.google.com/local/writereview?placeid=<PLACE_ID>`. The review button
then becomes the primary CTA and Instagram drops to a secondary button automatically.

## Hosting on Cloudflare Pages

No build step — plain static files.

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Pick this repo. Framework preset: **None**. Build command: *(empty)*. Output directory: `/`.
3. Deploy, then write the `*.pages.dev` URL (or custom domain) to the NFC chip.
