import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getProduct,
  getProductDisplayName,
  getProductSpecs,
  productSlugs,
} from "@/data/products";
import { JsonLd } from "@/components/seo/JsonLd";
import { FadeInView } from "@/components/motion/FadeInView";
import { CONTACT, SITE_URL } from "@/lib/constants";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/Button";
import { ProductSpecChips } from "@/components/ui/ProductSpecChips";
import { PlungeCallout } from "@/components/ui/PlungeCallout";
import { PageHeroBand } from "@/components/ui/PageHeroBand";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const product = getProduct(slug);
  if (!product) notFound();

  const t = await getTranslations("products");
  const tCatalog = await getTranslations("catalog");
  const loc = locale as "ro" | "ru";
  const name = getProductDisplayName(product, loc);
  const specs = getProductSpecs(product, loc);

  return (
    <>
      <JsonLd
        type="Product"
        data={{
          name: `IPOOLGO ${product.dimensions[loc]}`,
          description: t("subtitle"),
          image: `${SITE_URL}${product.cardImage}`,
        }}
      />
      <PageHeroBand title={name} subtitle={tCatalog("noPrice")} />
      <div className="px-4 pb-24 pt-10 md:px-8">
        <div className="mx-auto max-w-6xl">
          <Link href={`/catalog/${product.categorySlug}`} className="text-sm text-white/50 hover:text-accent-lime">
            ← {tCatalog("title")}
          </Link>
          <div className="mt-8 grid gap-12 lg:grid-cols-2">
            <FadeInView>
              <div className="overflow-hidden rounded-3xl bg-[#FAFBFC] shadow-2xl">
                <div className="h-1 w-full bg-gradient-to-r from-accent-lime via-ocean-300 to-ocean-500" />
                <div className="relative aspect-square bg-gradient-to-b from-white to-ocean-50/30">
                  <Image
                    src={product.cardImage}
                    alt={name}
                    fill
                    className="object-contain p-8"
                    priority
                  />
                </div>
              </div>
            </FadeInView>
            <FadeInView delay={0.1}>
              <h2 className="font-display text-2xl font-bold text-white">{t("specs")}</h2>
              <ProductSpecChips specs={specs} className="mt-4" />
              <p className="mt-6 text-white/80">{t("subtitle")}</p>
              {product.isPlunge && <PlungeCallout />}
              <div className="mt-10 flex flex-wrap gap-4">
                <a href={`tel:${CONTACT.phone}`}>
                  <Button variant="primary">{t("cta")}</Button>
                </a>
                <a href={CONTACT.telegramUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary">Telegram @{CONTACT.telegram}</Button>
                </a>
              </div>
            </FadeInView>
          </div>
        </div>
      </div>
    </>
  );
}

export function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }));
}
