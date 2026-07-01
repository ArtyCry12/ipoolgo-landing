"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getFeaturedProducts, getProductSpecs } from "@/data/products";
import { FadeInView } from "@/components/motion/FadeInView";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/ui/ProductCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CONTACT } from "@/lib/constants";

export function ProductCarousel() {
  const t = useTranslations("products");
  const locale = useLocale() as "ro" | "ru";
  const products = getFeaturedProducts();

  return (
    <section className="bg-brand-surface px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeInView>
          <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        </FadeInView>

        <div className="mt-12 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
          {products.map((product, i) => (
            <motion.div
              key={product.slug}
              className="w-72 shrink-0 snap-center md:w-80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link href={`/products/${product.slug}`}>
                <ProductCard
                  slug={product.slug}
                  title={`IPOOLGO ${product.dimensions[locale]}`}
                  cardImage={product.cardImage}
                  image={product.image}
                  specs={getProductSpecs(product, locale)}
                  productType={product.productType}
                  isPlunge={product.isPlunge}
                />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a href={CONTACT.telegramUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="primary">{t("cta")}</Button>
          </a>
        </div>
      </div>
    </section>
  );
}
