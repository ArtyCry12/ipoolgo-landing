"use client";

import { useTranslations } from "next-intl";
import { FadeInView } from "@/components/motion/FadeInView";
import { BenefitsSection, MaterialsTechSection } from "@/components/home/ContentSections";
import { CONTACT } from "@/lib/constants";

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <div className="pb-12 pt-20">
      <div className="px-4 pt-8 md:px-8">
        <div className="mx-auto max-w-4xl">
          <FadeInView>
            <h1 className="font-display text-4xl font-bold md:text-6xl">{t("title")}</h1>
            <p className="mt-4 text-lg text-ocean-200">{t("subtitle")}</p>
          </FadeInView>
        </div>
      </div>
      <BenefitsSection />
      <MaterialsTechSection />
      <div className="px-4 py-16 md:px-8">
        <FadeInView className="glass-card mx-auto max-w-3xl rounded-3xl p-8 text-center">
          <h2 className="font-display text-2xl font-bold">{t("wholesale")}</h2>
          <p className="mt-4 text-ocean-200">{t("wholesaleText")}</p>
          <a
            href={CONTACT.telegramUrl}
            className="mt-6 inline-block rounded-full bg-ocean-500 px-8 py-3 font-semibold text-ocean-950"
          >
            @{CONTACT.telegram}
          </a>
        </FadeInView>
      </div>
    </div>
  );
}
