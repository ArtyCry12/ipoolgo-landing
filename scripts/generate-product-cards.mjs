#!/usr/bin/env node
/**
 * Generate studio product cards via Gemini image model.
 * Requires GEMINI_API_KEY in env. Falls back to copying source PNG.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT = join(ROOT, "apps/web/public/products/cards");
const PRODUCTS = join(ROOT, "apps/web/public/products");

const SLUGS = [
  "ipoolgo-67x11",
  "ipoolgo-24x1",
  "ipoolgo-64x13",
  "ipoolgo-6x15",
  "ipoolgo-3x2x12",
  "ipoolgo-6x1",
  "ipoolgo-5x15",
  "ipoolgo-7x12",
];

const API_KEY = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;

mkdirSync(OUT, { recursive: true });

async function generateCard(slug) {
  const srcPath = join(PRODUCTS, `${slug}.png`);
  if (!existsSync(srcPath)) {
    console.warn(`Skip ${slug}: no source PNG`);
    return;
  }
  const outPath = join(OUT, `${slug}-card.png`);
  const imageBytes = readFileSync(srcPath);
  const base64 = imageBytes.toString("base64");

  if (!API_KEY) {
    writeFileSync(outPath, imageBytes);
    console.log(`Fallback copy ${slug}-card.png`);
    return;
  }

  const prompt =
    "Transform this product photo into a premium e-commerce card asset: clean white studio background, soft floor shadow, centered product, subtle cyan gradient glow at bottom edge, no text, no watermarks, photorealistic, high-end catalog style.";

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                { text: prompt },
                { inline_data: { mime_type: "image/png", data: base64 } },
              ],
            },
          ],
          generationConfig: { responseModalities: ["TEXT", "IMAGE"] },
        }),
      },
    );

    if (!res.ok) {
      throw new Error(await res.text());
    }

    const json = await res.json();
    const parts = json.candidates?.[0]?.content?.parts ?? [];
    const imgPart = parts.find((p) => p.inlineData || p.inline_data);
    const data = imgPart?.inlineData?.data || imgPart?.inline_data?.data;

    if (data) {
      writeFileSync(outPath, Buffer.from(data, "base64"));
      console.log(`Generated ${slug}-card.png`);
    } else {
      writeFileSync(outPath, imageBytes);
      console.log(`No image in response, copied ${slug}-card.png`);
    }
  } catch (e) {
    writeFileSync(outPath, imageBytes);
    console.warn(`Gemini failed for ${slug}, copied source:`, e.message?.slice(0, 80));
  }
}

for (const slug of SLUGS) {
  await generateCard(slug);
}

console.log("Done generating cards");
