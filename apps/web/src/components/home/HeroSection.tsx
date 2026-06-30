"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/Button";
import { CONTACT } from "@/lib/constants";
import { useAudio } from "@/components/providers/AudioProvider";

const WaterHero3D = dynamic(
  () => import("./WaterHero3D").then((m) => m.WaterHero3D),
  { ssr: false, loading: () => null },
);

export function HeroSection() {
  const t = useTranslations("hero");
  const { playWhoosh } = useAudio();

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden gradient-mesh px-4 pt-24">
      <WaterHero3D />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-ocean-950/20 to-ocean-950" />

      <motion.div
        className="relative z-10 max-w-4xl text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="mb-4 inline-block rounded-full border border-accent-lime/40 bg-ocean-800/50 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-accent-lime">
          {t("badge")}
        </span>
        <h1 className="font-display text-5xl font-bold leading-tight text-gradient md:text-7xl lg:text-8xl">
          {t("title")}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-ocean-100/90 md:text-xl">
          {t("subtitle")}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href={`tel:${CONTACT.phone}`}>
            <Button variant="primary">{t("ctaPrimary")}</Button>
          </a>
          <Link href="/catalog" onClick={() => playWhoosh()}>
            <Button variant="secondary">{t("ctaSecondary")}</Button>
          </Link>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 flex flex-col items-center gap-2 text-ocean-300/60"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs uppercase tracking-widest">{t("scroll")}</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}
