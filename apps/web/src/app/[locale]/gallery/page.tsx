"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { FadeInView } from "@/components/motion/FadeInView";

const galleryImages = [
  "/products/ipoolgo-6x15.webp",
  "/products/ipoolgo-64x13.webp",
  "/products/ipoolgo-5x15.jpg",
  "/products/ipoolgo-7x12.jpg",
  "/products/ipoolgo-3x2x12.webp",
  "/products/ipoolgo-24x1.webp",
  "https://ipoolgoo.ru/wp-content/uploads/photo_2025-05-01_16-03-08.webp",
  "https://ipoolgoo.ru/wp-content/uploads/sq-pool-11.webp",
  "https://ipoolgoo.ru/wp-content/uploads/bat-bar-06-1.webp",
  "https://ipoolgoo.ru/wp-content/uploads/photo_2026-02-25_08-02-11.webp",
];

export default function GalleryPage() {
  const t = useTranslations("gallery");

  return (
    <div className="px-4 pb-24 pt-28 md:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeInView>
          <h1 className="font-display text-4xl font-bold md:text-6xl">{t("title")}</h1>
          <p className="mt-4 text-ocean-200">{t("subtitle")}</p>
        </FadeInView>
        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((src, i) => (
            <FadeInView key={src} delay={i * 0.05} className="mb-4 break-inside-avoid">
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  width={600}
                  height={400}
                  className="w-full object-cover transition hover:scale-105"
                />
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </div>
  );
}
