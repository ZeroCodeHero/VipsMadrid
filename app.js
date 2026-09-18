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
  wireLink("review-link", CONFIG.GOOGLE_REVIEW_LINK);
  wireLink("instagram-link", CONFIG.INSTAGRAM_LINK);
  wireLink("tiktok-link", CONFIG.TIKTOK_LINK);
  wireLink("facebook-link", CONFIG.FACEBOOK_LINK);
  wireLink("youtube-link", CONFIG.YOUTUBE_LINK);
  wireLink("website-link", CONFIG.WEBSITE_LINK);
})();
