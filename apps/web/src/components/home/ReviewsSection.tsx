"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { reviews } from "@/data/reviews";
import { FadeInView } from "@/components/motion/FadeInView";
import { motion } from "framer-motion";
import { CONTACT } from "@/lib/constants";

export function ReviewsSection() {
  const t = useTranslations("reviews");
  const locale = useLocale() as "ro" | "ru";

  return (
    <section className="bg-ocean-800/20 px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeInView>
          <h2 className="font-display text-3xl font-bold md:text-5xl">{t("title")}</h2>
          <p className="mt-3 text-ocean-200">{t("subtitle")}</p>
        </FadeInView>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.slice(0, 6).map((review, i) => (
            <motion.div
              key={review.id}
              className="glass-card rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-ocean-300">{review.author}</span>
                <span className="text-xs text-ocean-400">{review.date}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ocean-100/85">
                {review.text[locale]}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/reviews"
            className="text-ocean-300 underline-offset-4 hover:underline"
          >
            {t("cta")} →
          </Link>
        </div>
      </div>
    </section>
  );
}

export function CtaSection() {
  const t = useTranslations("cta");
  const { phone, telegramUrl } = CONTACT;

  return (
    <section className="relative overflow-hidden px-4 py-24 md:px-8">
      <div className="absolute inset-0 bg-gradient-to-r from-ocean-600/30 via-ocean-400/20 to-ocean-600/30" />
      <FadeInView className="relative mx-auto max-w-3xl text-center">
        <h2 className="font-display text-4xl font-bold md:text-6xl">{t("title")}</h2>
        <p className="mt-4 text-lg text-ocean-100">{t("subtitle")}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${phone}`}
            className="rounded-full bg-accent-lime px-8 py-3 font-bold text-ocean-950 transition hover:scale-105"
          >
            {t("call")}
          </a>
          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-ocean-300 px-8 py-3 font-semibold text-ocean-50 transition hover:bg-ocean-800/60"
          >
            {t("write")}
          </a>
        </div>
      </FadeInView>
    </section>
  );
}
