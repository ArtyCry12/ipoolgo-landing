"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { faqItems } from "@/data/faq";
import { FadeInView } from "@/components/motion/FadeInView";
import { cn } from "@/lib/utils";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeroBand } from "@/components/ui/PageHeroBand";
import { GlassPanel } from "@/components/ui/GlassPanel";

export default function FaqPage() {
  const t = useTranslations("faq");
  const locale = useLocale() as "ro" | "ru";
  const [open, setOpen] = useState<string | null>(null);

  const faqJson = faqItems.map((item) => ({
    q: item.q[locale],
    a: item.a[locale],
  }));

  return (
    <>
      <JsonLd type="FAQPage" data={{ items: faqJson }} />
      <PageHeroBand title={t("title")} />
      <div className="px-4 pb-24 pt-10 md:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-3">
            {faqItems.map((item) => (
              <FadeInView key={item.id}>
                <GlassPanel className="overflow-hidden">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between p-5 text-left font-semibold text-white"
                    onClick={() => setOpen(open === item.id ? null : item.id)}
                  >
                    {item.q[locale]}
                    <span className="text-accent-lime">{open === item.id ? "−" : "+"}</span>
                  </button>
                  <div
                    className={cn(
                      "overflow-hidden transition-all",
                      open === item.id ? "max-h-96 px-5 pb-5" : "max-h-0",
                    )}
                  >
                    <p className="text-sm leading-relaxed text-white/75">{item.a[locale]}</p>
                  </div>
                </GlassPanel>
              </FadeInView>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
