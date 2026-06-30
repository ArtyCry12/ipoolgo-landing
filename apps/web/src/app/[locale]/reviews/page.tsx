"use client";

import { useTranslations, useLocale } from "next-intl";
import { reviews } from "@/data/reviews";
import { FadeInView } from "@/components/motion/FadeInView";
import { ContactForm } from "@/components/forms/ContactForm";

export default function ReviewsPage() {
  const t = useTranslations("reviews");
  const locale = useLocale() as "ro" | "ru";

  return (
    <div className="px-4 pb-24 pt-28 md:px-8">
      <div className="mx-auto max-w-4xl">
        <FadeInView>
          <h1 className="font-display text-4xl font-bold">{t("title")}</h1>
          <p className="mt-4 text-ocean-200">{t("subtitle")}</p>
        </FadeInView>
        <div className="mt-12 space-y-6">
          {reviews.map((r) => (
            <FadeInView key={r.id}>
              <div className="glass-card rounded-2xl p-6">
                <div className="flex justify-between">
                  <span className="font-semibold text-ocean-300">{r.author}</span>
                  <span className="text-xs text-ocean-400">{r.date}</span>
                </div>
                <p className="mt-3 text-ocean-100/85">{r.text[locale]}</p>
              </div>
            </FadeInView>
          ))}
        </div>
        <div className="mt-16">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
