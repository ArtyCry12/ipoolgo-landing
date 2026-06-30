import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { getCategory } from "@/data/categories";
import { flagshipProducts } from "@/data/products";
import { Link } from "@/i18n/navigation";
import { CONTACT } from "@/lib/constants";
import { FadeInView } from "@/components/motion/FadeInView";
import { ProductCard } from "@/components/ui/ProductCard";

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

  const related = flagshipProducts.filter((p) => p.categorySlug === slug);
  const loc = locale as "ro" | "ru";

  return (
    <div className="px-4 pb-24 pt-28 md:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeInView>
          <Link href="/catalog" className="text-sm text-ocean-400 hover:text-ocean-300">
            ← {t("title")}
          </Link>
          <h1 className="mt-4 font-display text-4xl font-bold">{tCat(slug)}</h1>
          <p className="mt-3 text-ocean-200">{t("subtitle")}</p>
        </FadeInView>

        {related.length > 0 && (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}`}>
                <ProductCard
                  slug={p.slug}
                  title={`IPOOLGO ${p.dimensions[loc]}`}
                  cardImage={p.cardImage}
                  image={p.image}
                  specs={p.specs}
                />
              </Link>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <a
            href={CONTACT.telegramUrl}
            className="inline-block rounded-full bg-accent-lime px-8 py-3 font-bold text-ocean-950"
          >
            {t("consult")}
          </a>
        </div>
      </div>
    </div>
  );
}
