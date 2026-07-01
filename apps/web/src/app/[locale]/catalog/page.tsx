"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { categories } from "@/data/categories";
import { FadeInView } from "@/components/motion/FadeInView";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Button } from "@/components/ui/Button";
import { CONTACT } from "@/lib/constants";

export default function CatalogPage() {
  const t = useTranslations("catalog");
  const tCat = useTranslations("categories");

  return (
    <div className="px-4 pb-24 pt-28 md:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeInView>
          <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        </FadeInView>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <FadeInView key={cat.slug} delay={i * 0.03}>
              <Link href={`/catalog/${cat.slug}`} className="group block">
                <GlassPanel className="overflow-hidden transition hover:bg-white/10">
                  {cat.image && (
                    <div className="relative h-44 bg-[#FAFBFC]">
                      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent-lime to-ocean-400" />
                      <Image
                        src={cat.image}
                        alt={tCat(cat.slug)}
                        fill
                        className="object-contain p-4 transition group-hover:scale-105"
                        sizes="400px"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <span className="text-2xl">{cat.icon}</span>
                    <h2 className="mt-2 font-display text-lg font-bold text-white">{tCat(cat.slug)}</h2>
                    <p className="mt-1 text-sm text-accent-lime">{t("noPrice")}</p>
                  </div>
                </GlassPanel>
              </Link>
            </FadeInView>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href={CONTACT.telegramUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="primary">{t("consult")}</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
