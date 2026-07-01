import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { getCategory } from "@/data/categories";
import { getProductsByCategory, getProductDisplayName, getProductSpecs } from "@/data/products";
import { Link } from "@/i18n/navigation";
import { CONTACT } from "@/lib/constants";
import { FadeInView } from "@/components/motion/FadeInView";
import { ProductCard } from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/Button";
import { PageHeroBand } from "@/components/ui/PageHeroBand";
import { CatalogFilter } from "@/components/catalog/CatalogFilter";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("catalog");
  const tCat = await getTranslations("categories");
  const category = getCategory(slug);
  if (!category) notFound();

  const related = getProductsByCategory(slug);
  const loc = locale as "ro" | "ru";

  return (
    <>
      <PageHeroBand title={tCat(slug)} subtitle={t("subtitle")} />
      <div className="px-4 pb-24 pt-10 md:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeInView>
            <Link href="/catalog" className="text-sm text-white/50 hover:text-accent-lime">
              ← {t("title")}
            </Link>
            <div className="mt-6">
              <CatalogFilter />
            </div>
          </FadeInView>

          {related.length > 0 ? (
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {related.map((p) => (
                <Link key={p.slug} href={`/products/${p.slug}`}>
                  <ProductCard
                    slug={p.slug}
                    title={getProductDisplayName(p, loc)}
                    cardImage={p.cardImage}
                    image={p.image}
                    specs={getProductSpecs(p, loc)}
                    productType={p.productType}
                    isPlunge={p.isPlunge}
                  />
                </Link>
              ))}
            </div>
          ) : (
            <p className="mt-12 text-white/60">{t("emptyCategory")}</p>
          )}

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
