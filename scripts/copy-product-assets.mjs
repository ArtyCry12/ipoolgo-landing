#!/usr/bin/env node
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const ASSETS =
  "C:/Users/Asus/.cursor/projects/c-Users-Asus-cursor-projects-kirill-bassiki/assets";
const OUT = join(ROOT, "apps/web/public/products");
const CARDS = join(OUT, "cards");

const MAP = {
  "photo_5920139683830632002_y-ad9b3e3c-eec8-4e29-a8d5-3fb1e26233d4.png": "ipoolgo-67x11",
  "photo_5920139683830632001_y-2a844dbc-3bf7-4d6d-ad39-3cbffdc56175.png": "ipoolgo-24x1",
  "photo_5920139683830632000_y-8068e0db-88dc-4323-810f-e310debaab47.png": "ipoolgo-64x13",
  "photo_5920139683830631998_y-35aec65b-b09c-4c2b-8df4-00fe7774079a.png": "ipoolgo-6x15",
  "photo_5920139683830632005_y-63764aad-5134-4c9c-a411-1e6e4558053c.png": "ipoolgo-3x2x12",
  "photo_5920139683830632004_y-388c998c-b49c-4200-873d-e3d5016a90af.png": "ipoolgo-6x1",
  "photo_5920139683830632003_y-1ac20d60-753a-444f-b20d-4cff8ab53b59.png": "ipoolgo-5x15",
  "photo_5920139683830631999_y-a6ab1795-78a2-44be-97f9-14960bdfdee7.png": "ipoolgo-7x12",
};

mkdirSync(CARDS, { recursive: true });

const manifest = { version: 2, products: {}, cards: {} };

for (const [file, slug] of Object.entries(MAP)) {
  const src = join(ASSETS, `c__Users_Asus_AppData_Roaming_Cursor_User_workspaceStorage_a909a9e26bd2b4b13cdf237d67a00ffe_images_${file}`);
  const dest = join(OUT, `${slug}.png`);
  copyFileSync(src, dest);
  manifest.products[slug] = { local: `/products/${slug}.png`, card: `/products/cards/${slug}-card.png` };
  console.log(`Copied ${slug}.png`);
}

writeFileSync(join(ROOT, ".asset-manifest.json"), JSON.stringify(manifest, null, 2));
console.log("Updated .asset-manifest.json");
