/* ============================================================================
   Applies the CONFIG block from index.html to the page.
   DO NOT edit per client — change the values in index.html instead.
   ============================================================================ */
(function () {
  "use strict";

  // Wire an <a> to a config URL. If the URL is empty, hide the button entirely.
  function wireLink(id, url) {
    const el = document.getElementById(id);
    if (!el) return null;
    el.hidden = !url;
    if (url) el.href = url;
    return el;
  }

  // --- Text content ---
  document.title = CONFIG.BUSINESS_NAME;

  // --- Links (every button hidden when its URL is blank) ---
  const review = wireLink("review-link", CONFIG.GOOGLE_REVIEW_LINK);
  const instagram = wireLink("instagram-link", CONFIG.INSTAGRAM_LINK);
  wireLink("tiktok-link", CONFIG.TIKTOK_LINK);
  wireLink("facebook-link", CONFIG.FACEBOOK_LINK);
  wireLink("x-link", CONFIG.X_LINK);
  wireLink("youtube-link", CONFIG.YOUTUBE_LINK);
  wireLink("website-link", CONFIG.WEBSITE_LINK);

  // One primary CTA per screen: when a review link is set it takes the lead
  // and Instagram steps down to a secondary button.
  if (review && !review.hidden && instagram) {
    instagram.classList.replace("btn-primary", "btn-outline");
  }
})();
