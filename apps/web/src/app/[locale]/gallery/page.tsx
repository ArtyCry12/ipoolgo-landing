"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { flagshipProducts } from "@/data/products";
import { FadeInView } from "@/components/motion/FadeInView";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function GalleryPage() {
  const t = useTranslations("gallery");
  const galleryImages = flagshipProducts.flatMap((p) => [p.cardImage, p.image]);

  return (
    <div className="px-4 pb-24 pt-28 md:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeInView>
          <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        </FadeInView>
        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((src, i) => (
            <FadeInView key={`${src}-${i}`} delay={i * 0.05} className="mb-4 break-inside-avoid">
              <div className="overflow-hidden rounded-2xl bg-[#FAFBFC] shadow-lg shadow-black/30 ring-1 ring-white/10">
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
