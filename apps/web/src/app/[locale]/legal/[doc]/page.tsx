import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { FadeInView } from "@/components/motion/FadeInView";
import { GlassPanel } from "@/components/ui/GlassPanel";

const docs = ["privacy", "terms", "delivery"] as const;

const content: Record<(typeof docs)[number], { ro: string; ru: string }> = {
  privacy: {
    ro: "Respectăm confidențialitatea datelor dvs. personale. Informațiile colectate prin formularul de contact sunt utilizate exclusiv pentru a răspunde solicitărilor dvs. Nu vindem date către terți. Conform legislației MD/RO privind protecția datelor.",
    ru: "Мы уважаем конфиденциальность ваших персональных данных. Информация, собранная через форму обратной связи, используется исключительно для ответа на ваши запросы. Мы не продаём данные третьим лицам. В соответствии с законодательством MD/RO о защите данных.",
  },
  terms: {
    ro: "Utilizarea site-ului IPOOLGO implică acceptarea termenilor. Produsele sunt oferite fără prețuri online — consultația și oferta comercială se furnizează individual. Toate produsele sunt originale, fabricate sub control IPOOLGO.",
    ru: "Использование сайта IPOOLGO означает принятие условий. Продукты предлагаются без цен онлайн — консультация и коммерческое предложение предоставляются индивидуально. Вся продукция оригинальная, произведённая под контролем IPOOLGO.",
  },
  delivery: {
    ro: "Livrăm în Moldova și România prin curier sau transport. Termenele și costul se calculează individual la consultație. Returnarea produselor de calitate corespunzătoare — conform legislației locale, în termen de 14 zile.",
    ru: "Доставляем по Молдове и Румынии курьером или транспортной компанией. Сроки и стоимость рассчитываются индивидуально при консультации. Возврат товаров надлежащего качества — согласно местному законодательству, в течение 14 дней.",
  },
};

export default async function LegalPage({
  params,
}: {
  params: Promise<{ locale: string; doc: string }>;
}) {
  const { locale, doc } = await params;
  setRequestLocale(locale);
  if (!docs.includes(doc as (typeof docs)[number])) notFound();

  const t = await getTranslations("legal");
  const loc = locale as "ro" | "ru";
  const title = t(doc as "privacy" | "terms" | "delivery");
  const body = content[doc as (typeof docs)[number]][loc];

  return (
    <div className="px-4 pb-24 pt-28 md:px-8">
      <div className="mx-auto max-w-3xl">
        <FadeInView>
          <h1 className="font-display text-4xl font-black italic text-gradient md:text-5xl">{title}</h1>
          <GlassPanel className="mt-8 p-8">
            <p className="leading-relaxed text-white/85">{body}</p>
          </GlassPanel>
        </FadeInView>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return docs.map((doc) => ({ doc }));
}
