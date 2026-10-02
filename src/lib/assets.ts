/** Brand media: GitHub raw keeps production file deploys under MCP size limits. */
export const ASSET_BASE =
  "https://raw.githubusercontent.com/intercal-labs/Intercal/cursor/intercal-labs-splash-v1/public";

export const assets = {
  logo: `${ASSET_BASE}/intercal-labs-logo.png`,
  hero: `${ASSET_BASE}/hero-lab.webp`,
  shay: `${ASSET_BASE}/shay-rodriguez-garcia.webp`,
  taylor: `${ASSET_BASE}/taylor-rodriguez.webp`,
} as const;
