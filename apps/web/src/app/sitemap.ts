import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ipoolgo-landing.vercel.app";
  const locales = ["ro", "ru"];
  const paths = [
    "",
    "/catalog",
    "/gallery",
    "/about",
    "/reviews",
    "/faq",
    "/contact",
    "/legal/privacy",
    "/legal/terms",
    "/legal/delivery",
  ];
  const productSlugs = [
    "ipoolgo-67x11",
    "ipoolgo-24x1",
    "ipoolgo-64x13",
    "ipoolgo-6x15",
    "ipoolgo-3x2x12",
    "ipoolgo-6x1",
    "ipoolgo-5x15",
    "ipoolgo-7x12",
  ];

  return locales.flatMap((locale) => [
    ...paths.map((p) => ({
      url: `${base}/${locale}${p}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
    })),
    ...productSlugs.map((slug) => ({
      url: `${base}/${locale}/products/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
    })),
  ]);
}
