# VIPS Madrid — NFC tap card

A single-screen "tap card" landing page for **VIPS Gran Vía, 65 (Madrid)**. Tap the NFC
chip → this page opens → one tap leaves a Google review or follows VIPS on social.

Full-bleed VIPS red (`#DD1B2D`, from the official 2024 Spain logo) with the white
**VIPS** wordmark and a faint oversized "V" chevron in the background. White
Google review CTA, frosted social grid (TikTok, Facebook, Instagram, YouTube) and an outline
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
| TikTok | https://www.tiktok.com/@envips |
| Facebook | https://www.facebook.com/vips/ |
| Instagram | https://www.instagram.com/envips/ |
| YouTube | https://www.youtube.com/@envips |
| Website | https://www.vips.es/ |
| **Google review** (primary) | `writereview?placeid=ChIJeWcNi3woQg0R0AehfKUYvb4` — VIPS Gran Vía, 65 |

### Google review link

Place ID `ChIJeWcNi3woQg0R0AehfKUYvb4` was verified on Google Maps as **VIPS, Gran Vía 65,
28013 Madrid** (4.2★). For another VIPS location, swap the Place ID in `GOOGLE_REVIEW_LINK`.

## Hosting on Cloudflare Pages

No build step — plain static files.

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Pick this repo. Framework preset: **None**. Build command: *(empty)*. Output directory: `/`.
3. Deploy, then write the `*.pages.dev` URL (or custom domain) to the NFC chip.
