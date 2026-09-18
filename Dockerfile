# Minimal static file server on nginx (alpine).
# nginx:alpine already serves /usr/share/nginx/html on port 80 with sensible
# defaults, so no custom nginx.conf is required.
#
# NOTE: Cloudflare Pages does NOT use this file — it serves the repo statically.
# This Dockerfile is only for self-hosting the card on a container platform.
FROM nginx:alpine

# Copy only the served assets (keeps the image minimal, no README/Dockerfile inside).
COPY index.html style.css app.js logo.svg /usr/share/nginx/html/

EXPOSE 80
