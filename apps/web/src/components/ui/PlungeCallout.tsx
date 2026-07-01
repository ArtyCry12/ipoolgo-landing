"use client";

import { useTranslations } from "next-intl";
import { GlassPanel } from "@/components/ui/GlassPanel";

export function PlungeCallout() {
  const t = useTranslations("products");

  return (
    <GlassPanel className="mt-8 border border-accent-lime/20 p-5 text-center">
      <p className="text-sm font-medium text-accent-lime">{t("plungeHint")}</p>
    </GlassPanel>
  );
}
