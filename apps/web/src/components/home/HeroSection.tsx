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

      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-accent-lime/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-1/3 h-72 w-72 rounded-full bg-ocean-400/15 blur-3xl"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-ocean-950/20 to-ocean-950" />

      <motion.div
        className="relative z-10 max-w-5xl text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="mb-6 inline-block rounded-full border border-accent-lime/50 bg-ocean-800/60 px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent-lime shadow-lg shadow-accent-lime/10">
          {t("badge")}
        </span>
        <h1 className="font-display text-5xl font-bold leading-[1.05] text-gradient md:text-7xl lg:text-[5.5rem]">
          {t("title")}
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ocean-100/90 md:text-xl">
          {t("subtitle")}
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a href={`tel:${CONTACT.phone}`}>
            <Button variant="primary" className="min-w-[180px]">
              {t("ctaPrimary")}
            </Button>
          </a>
          <Link href="/catalog" onClick={() => playWhoosh()}>
            <Button variant="secondary" className="min-w-[180px]">
              {t("ctaSecondary")}
            </Button>
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
