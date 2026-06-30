import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProduct } from "@/data/products";
import { JsonLd } from "@/components/seo/JsonLd";
import { FadeInView } from "@/components/motion/FadeInView";
import { CONTACT, SITE_URL } from "@/lib/constants";
import { Link } from "@/i18n/navigation";

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
  const dims = product.dimensions[loc];

  return (
    <>
      <JsonLd
        type="Product"
        data={{
          name: `IPOOLGO ${dims}`,
          description: t("subtitle"),
          image: `${SITE_URL}${product.cardImage}`,
        }}
      />
      <div className="px-4 pb-24 pt-28 md:px-8">
        <div className="mx-auto max-w-6xl">
          <Link href="/catalog" className="text-sm text-ocean-400">
            ← {tCatalog("title")}
          </Link>
          <div className="mt-8 grid gap-12 lg:grid-cols-2">
            <FadeInView>
              <div className="product-card overflow-hidden rounded-3xl border border-ocean-400/15 bg-[#FAFBFC] shadow-xl">
                <div className="h-1 w-full bg-gradient-to-r from-accent-lime via-ocean-300 to-ocean-500" />
                <div className="relative aspect-square bg-gradient-to-b from-white to-ocean-50/30">
                  <Image
                    src={product.cardImage}
                    alt={`IPOOLGO ${dims}`}
                    fill
                    className="object-contain p-8"
                    priority
                  />
                </div>
              </div>
            </FadeInView>
            <FadeInView delay={0.1}>
              <h1 className="font-display text-4xl font-bold md:text-5xl">
                IPOOLGO {dims}
              </h1>
              <p className="mt-4 text-ocean-200">{t("subtitle")}</p>
              <p className="mt-2 text-lg text-accent-lime">{tCatalog("noPrice")}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {product.specs.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-ocean-600/30 px-4 py-1 text-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="rounded-full bg-ocean-500 px-8 py-3 font-semibold text-ocean-950"
                >
                  {t("cta")}
                </a>
                <a
                  href={CONTACT.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-ocean-300 px-8 py-3"
                >
                  Telegram @{CONTACT.telegram}
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
  return [
    "ipoolgo-67x11",
    "ipoolgo-24x1",
    "ipoolgo-64x13",
    "ipoolgo-6x15",
    "ipoolgo-3x2x12",
    "ipoolgo-6x1",
    "ipoolgo-5x15",
    "ipoolgo-7x12",
  ].map((slug) => ({ slug }));
}
