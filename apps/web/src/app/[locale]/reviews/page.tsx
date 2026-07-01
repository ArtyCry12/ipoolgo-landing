"use client";

import { useTranslations, useLocale } from "next-intl";
import { reviews } from "@/data/reviews";
import { FadeInView } from "@/components/motion/FadeInView";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHeroBand } from "@/components/ui/PageHeroBand";
import { GlassPanel } from "@/components/ui/GlassPanel";

export default function ReviewsPage() {
  const t = useTranslations("reviews");
  const locale = useLocale() as "ro" | "ru";

  return (
    <>
      <PageHeroBand title={t("title")} subtitle={t("subtitle")} />
      <div className="px-4 pb-24 pt-10 md:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-6">
            {reviews.map((r) => (
              <FadeInView key={r.id}>
                <GlassPanel className="p-6">
                  <div className="flex justify-between">
                    <span className="font-semibold text-accent-lime">{r.author}</span>
                    <span className="text-xs text-white/50">{r.date}</span>
                  </div>
                  <p className="mt-3 text-white/80">{r.text[locale]}</p>
                </GlassPanel>
              </FadeInView>
            ))}
          </div>
          <div className="mt-16">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
