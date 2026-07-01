"use client";



import { useTranslations, useLocale } from "next-intl";

import { Link } from "@/i18n/navigation";

import { reviews } from "@/data/reviews";

import { FadeInView } from "@/components/motion/FadeInView";

import { motion } from "framer-motion";

import { CONTACT } from "@/lib/constants";

import { SectionHeading } from "@/components/ui/SectionHeading";

import { GlassPanel } from "@/components/ui/GlassPanel";

import { Button } from "@/components/ui/Button";



export function ReviewsSection() {

  const t = useTranslations("reviews");

  const locale = useLocale() as "ro" | "ru";



  return (

    <section className="px-4 py-24 md:px-8">

      <div className="mx-auto max-w-7xl">

        <FadeInView>

          <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        </FadeInView>



        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {reviews.slice(0, 6).map((review, i) => (

            <motion.div

              key={review.id}

              initial={{ opacity: 0, y: 20 }}

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true }}

              transition={{ delay: i * 0.06 }}

            >

              <GlassPanel className="h-full p-6">

                <div className="flex items-center justify-between">

                  <span className="font-semibold text-accent-lime">{review.author}</span>

                  <span className="text-xs text-white/50">{review.date}</span>

                </div>

                <p className="mt-4 text-sm leading-relaxed text-white/80">{review.text[locale]}</p>

              </GlassPanel>

            </motion.div>

          ))}

        </div>



        <div className="mt-8 text-center">

          <Link href="/reviews" className="text-accent-lime underline-offset-4 hover:underline">

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

      <div className="absolute inset-0 bg-gradient-to-r from-ocean-600/20 via-accent-lime/10 to-ocean-600/20" />

      <FadeInView className="relative mx-auto max-w-3xl text-center">

        <h2 className="font-display text-4xl font-black italic text-gradient md:text-6xl">{t("title")}</h2>

        <p className="mt-4 text-lg text-white/85">{t("subtitle")}</p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <a href={`tel:${phone}`}>

            <Button variant="primary" className="min-w-[160px]">

              {t("call")}

            </Button>

          </a>

          <a href={telegramUrl} target="_blank" rel="noopener noreferrer">

            <Button variant="secondary" className="min-w-[160px]">

              {t("write")}

            </Button>

          </a>

        </div>

      </FadeInView>

    </section>

  );

}

