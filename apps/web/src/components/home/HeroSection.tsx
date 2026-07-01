"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/Button";
import { StitchGlowOrbs, StitchShader } from "@/components/visual/StitchShader";
import { CONTACT } from "@/lib/constants";

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-brand-deep px-4 pt-24">
      <StitchShader className="z-0" />
      <StitchGlowOrbs />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-brand-deep/20 to-brand-surface" />

      <motion.div
        className="relative z-10 max-w-5xl text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="glass-panel mb-6 inline-block rounded-full px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent-lime">
          {t("badge")}
        </span>
        <h1 className="font-display text-5xl font-black italic leading-[1.05] text-gradient md:text-7xl lg:text-[5.5rem]">
          {t("title")}
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
          {t("subtitle")}
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a href={`tel:${CONTACT.phone}`}>
            <Button variant="primary" className="min-w-[200px] font-bold">
              {t("ctaPrimary")}
            </Button>
          </a>
          <Link href="/catalog">
            <Button variant="secondary" className="min-w-[200px] font-bold">
              {t("ctaSecondary")}
            </Button>
          </Link>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 z-10 flex flex-col items-center gap-2 text-white/50"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs uppercase tracking-widest">{t("scroll")}</span>
        <div className="flex h-10 w-5 flex-col items-center rounded-full border border-white/30 p-1">
          <div className="h-2 w-1 animate-scroll-dot rounded-full bg-accent-lime" />
        </div>
        <ChevronDown size={18} className="opacity-60" />
      </motion.div>
    </section>
  );
}
