/** Brand media via GitHub raw keeps production file deploys under size limits. */
export const ASSET_BASE =
  "https://raw.githubusercontent.com/intercal-labs/Intercal/cursor/intercal-labs-splash-v1/public";

export const assets = {
  // Full-color INTERCAL Labs lockup — hero + footer.
  logo: `${ASSET_BASE}/intercal-labs-logo.png?v=2`,
  // Dedicated cream wordmark for sticky nav (black bg removed; ?v= busts CDN).
  logoNav: `${ASSET_BASE}/intercal-navbar-logo.png?v=1`,
  hero: `${ASSET_BASE}/hero-lab.webp`,
  // Same-origin MP4 so the hero streams from the deploy CDN (not GitHub raw).
  heroVideo: "/video-hero.mp4",
  shay: `${ASSET_BASE}/shay-rodriguez-garcia.webp`,
  taylor: `${ASSET_BASE}/taylor-rodriguez.webp`,
} as const;
