/** Brand media via GitHub raw keeps production file deploys under size limits. */
export const ASSET_BASE =
  "https://raw.githubusercontent.com/intercal-labs/Intercal/cursor/intercal-labs-splash-v1/public";

export const assets = {
  // ?v=2 busts stale Next Image CDN entries of the old 1024² logo.
  logo: `${ASSET_BASE}/intercal-labs-logo.png?v=2`,
  hero: `${ASSET_BASE}/hero-lab.webp`,
  shay: `${ASSET_BASE}/shay-rodriguez-garcia.webp`,
  taylor: `${ASSET_BASE}/taylor-rodriguez.webp`,
} as const;
