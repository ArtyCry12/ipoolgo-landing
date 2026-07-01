"use client";

import { useTranslations } from "next-intl";
import { FadeInView } from "@/components/motion/FadeInView";
import { BenefitsSection, MaterialsTechSection } from "@/components/home/ContentSections";
import { CONTACT } from "@/lib/constants";
import { PageHeroBand } from "@/components/ui/PageHeroBand";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Button } from "@/components/ui/Button";

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <>
      <PageHeroBand title={t("title")} subtitle={t("subtitle")} />
      <BenefitsSection />
      <MaterialsTechSection />
      <div className="px-4 py-16 md:px-8">
        <FadeInView className="mx-auto max-w-3xl">
          <GlassPanel className="p-8 text-center">
            <h2 className="font-display text-2xl font-bold text-white">{t("wholesale")}</h2>
            <p className="mt-4 text-white/70">{t("wholesaleText")}</p>
            <a href={CONTACT.telegramUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block">
              <Button variant="primary">@{CONTACT.telegram}</Button>
            </a>
          </GlassPanel>
        </FadeInView>
      </div>
    </>
  );
}
