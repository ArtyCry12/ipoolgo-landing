"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { faqItems } from "@/data/faq";
import { FadeInView } from "@/components/motion/FadeInView";
import { useAudio } from "@/components/providers/AudioProvider";
import { cn } from "@/lib/utils";
import { JsonLd } from "@/components/seo/JsonLd";

export default function FaqPage() {
  const t = useTranslations("faq");
  const locale = useLocale() as "ro" | "ru";
  const [open, setOpen] = useState<string | null>(null);
  const { playClick } = useAudio();

  const faqJson = faqItems.map((item) => ({
    q: item.q[locale],
    a: item.a[locale],
  }));

  return (
    <>
      <JsonLd type="FAQPage" data={{ items: faqJson }} />
    <div className="px-4 pb-24 pt-28 md:px-8">
      <div className="mx-auto max-w-3xl">
        <FadeInView>
          <h1 className="font-display text-4xl font-bold">{t("title")}</h1>
        </FadeInView>
        <div className="mt-12 space-y-3">
          {faqItems.map((item) => (
            <FadeInView key={item.id}>
              <div className="glass-card overflow-hidden rounded-2xl">
                <button
                  type="button"
                  className="flex w-full items-center justify-between p-5 text-left font-semibold"
                  onClick={() => {
                    playClick();
                    setOpen(open === item.id ? null : item.id);
                  }}
                >
                  {item.q[locale]}
                  <span className="text-ocean-400">{open === item.id ? "−" : "+"}</span>
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all",
                    open === item.id ? "max-h-96 pb-5 px-5" : "max-h-0",
                  )}
                >
                  <p className="text-sm text-ocean-200 leading-relaxed">{item.a[locale]}</p>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
