"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { catalogCategories } from "@/data/categories";
import { flagshipProducts, getProductDisplayName, getProductSpecs } from "@/data/products";
import { FadeInView } from "@/components/motion/FadeInView";
import { PageHeroBand } from "@/components/ui/PageHeroBand";
import { CatalogFilter } from "@/components/catalog/CatalogFilter";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { ProductCard } from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/Button";
import { CONTACT } from "@/lib/constants";
import { useLocale } from "next-intl";

export default function CatalogPage() {
  const t = useTranslations("catalog");
  const tCat = useTranslations("categories");
  const locale = useLocale() as "ro" | "ru";

  return (
    <>
      <PageHeroBand title={t("title")} subtitle={t("subtitle")} />
      <div className="px-4 pb-24 pt-10 md:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeInView>
            <CatalogFilter />
          </FadeInView>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {catalogCategories.map((cat, i) => (
              <FadeInView key={cat.slug} delay={i * 0.03}>
                <Link href={`/catalog/${cat.slug}`} className="group block">
                  <GlassPanel className="overflow-hidden transition hover:bg-white/10">
                    {cat.image ? (
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
                    ) : (
                      <div className="flex h-44 items-center justify-center bg-brand-deep/40 text-5xl">
                        {cat.icon}
                      </div>
                    )}
                    <div className="p-5">
                      <h2 className="font-display text-lg font-bold text-white">
                        {cat.icon} {tCat(cat.slug)}
                      </h2>
                      <p className="mt-1 text-sm text-accent-lime">{t("noPrice")}</p>
                    </div>
                  </GlassPanel>
                </Link>
              </FadeInView>
            ))}
          </div>

          <FadeInView className="mt-16">
            <h2 className="font-display text-2xl font-bold text-white">{t("allProducts")}</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {flagshipProducts.map((p) => (
                <Link key={p.slug} href={`/products/${p.slug}`}>
                  <ProductCard
                    slug={p.slug}
                    title={getProductDisplayName(p, locale)}
                    cardImage={p.cardImage}
                    image={p.image}
                    specs={getProductSpecs(p, locale)}
                    productType={p.productType}
                    isPlunge={p.isPlunge}
                  />
                </Link>
              ))}
            </div>
          </FadeInView>

          <div className="mt-12 text-center">
            <a href={CONTACT.telegramUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="primary">{t("consult")}</Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
