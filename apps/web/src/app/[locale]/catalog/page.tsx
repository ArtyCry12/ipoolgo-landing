"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { categories } from "@/data/categories";
import { FadeInView } from "@/components/motion/FadeInView";
import { CONTACT } from "@/lib/constants";

export default function CatalogPage() {
  const t = useTranslations("catalog");
  const tCat = useTranslations("categories");

  return (
    <div className="px-4 pb-24 pt-28 md:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeInView>
          <h1 className="font-display text-4xl font-bold md:text-6xl">{t("title")}</h1>
          <p className="mt-4 max-w-2xl text-ocean-200">{t("subtitle")}</p>
        </FadeInView>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <FadeInView key={cat.slug} delay={i * 0.03}>
              <Link
                href={`/catalog/${cat.slug}`}
                className="glass-card group block overflow-hidden rounded-2xl transition hover:border-ocean-300/40"
              >
                {cat.image && (
                  <div className="relative h-40 bg-white/5">
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
                  <h2 className="mt-2 font-display text-lg font-semibold text-ocean-50">
                    {tCat(cat.slug)}
                  </h2>
                  <p className="mt-1 text-sm text-ocean-400">{t("noPrice")}</p>
                </div>
              </Link>
            </FadeInView>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={CONTACT.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-ocean-500 px-8 py-3 font-semibold text-ocean-950"
          >
            {t("consult")}
          </a>
        </div>
      </div>
    </div>
  );
}
