"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { flagshipProducts } from "@/data/products";
import { FadeInView } from "@/components/motion/FadeInView";
import { PageHeroBand } from "@/components/ui/PageHeroBand";

export default function GalleryPage() {
  const t = useTranslations("gallery");
  const locale = useLocale() as "ro" | "ru";
  const poolProducts = flagshipProducts.filter((p) => p.productType === "pool");

  return (
    <>
      <PageHeroBand title={t("title")} subtitle={t("subtitle")} />
      <div className="px-4 pb-24 pt-10 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {poolProducts.map((p, i) => (
              <FadeInView key={p.slug} delay={i * 0.05} className="mb-4 break-inside-avoid">
                <div className="overflow-hidden rounded-2xl bg-[#FAFBFC] shadow-lg shadow-black/30 ring-1 ring-white/10">
                  <div className="h-1 bg-gradient-to-r from-accent-lime to-ocean-400" />
                  <Image
                    src={p.image}
                    alt={`IPOOLGO ${p.dimensions[locale]}`}
                    width={600}
                    height={400}
                    className="w-full object-contain p-4 transition duration-500 hover:scale-105"
                  />
                  <p className="bg-brand-surface px-4 py-2 text-sm font-medium text-white/80">
                    {p.dimensions[locale]}
                  </p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
