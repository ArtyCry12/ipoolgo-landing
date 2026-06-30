"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { flagshipProducts } from "@/data/products";
import { FadeInView } from "@/components/motion/FadeInView";

export default function GalleryPage() {
  const t = useTranslations("gallery");
  const galleryImages = flagshipProducts.flatMap((p) => [p.cardImage, p.image]);

  return (
    <div className="px-4 pb-24 pt-28 md:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeInView>
          <h1 className="font-display text-4xl font-bold md:text-6xl">{t("title")}</h1>
          <p className="mt-4 text-ocean-200">{t("subtitle")}</p>
        </FadeInView>
        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((src, i) => (
            <FadeInView key={`${src}-${i}`} delay={i * 0.05} className="mb-4 break-inside-avoid">
              <div className="relative overflow-hidden rounded-2xl bg-[#FAFBFC] shadow-lg shadow-ocean-950/20">
                <Image
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  width={600}
                  height={400}
                  className="w-full object-contain p-2 transition duration-500 hover:scale-105"
                />
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </div>
  );
}
