#!/usr/bin/env node
/**
 * One-time content cache from ipoolgoo.ru WordPress REST API.
 * Run: npm run scrape
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "content", "cache");

const BASE = "https://ipoolgoo.ru/wp-json/wp/v2";

async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url} → ${res.status}`);
  return res.json();
}

async function main() {
  mkdirSync(OUT, { recursive: true });

  const [pages, options] = await Promise.all([
    fetchJson(`${BASE}/pages?per_page=50&_fields=slug,title,content,link`),
    fetchJson(`${BASE}/option?per_page=100&_fields=slug,title,content,link`),
  ]);

  writeFileSync(join(OUT, "pages.json"), JSON.stringify(pages, null, 2));
  writeFileSync(join(OUT, "options.json"), JSON.stringify(options, null, 2));
  console.log(`Cached ${pages.length} pages, ${options.length} options → ${OUT}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
