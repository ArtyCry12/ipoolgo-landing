"use client";



import { useTranslations } from "next-intl";

import { FadeInView } from "@/components/motion/FadeInView";

import { StatCounter } from "@/components/motion/StatCounter";

import { SectionHeading } from "@/components/ui/SectionHeading";

import { GlassPanel } from "@/components/ui/GlassPanel";

import { StitchShader } from "@/components/visual/StitchShader";



export function OriginalitySection() {

  const t = useTranslations("originality");



  return (
    <section className="relative border-y border-white/5 bg-brand-surface/50 px-4 py-24 md:px-8">

      <div className="mx-auto max-w-4xl">

        <FadeInView>

          <SectionHeading title={t("title")} />

        </FadeInView>

        <FadeInView delay={0.1}>

          <GlassPanel className="mt-8 space-y-4 p-8 leading-relaxed text-white/85">

            <p>{t("p1")}</p>

            <p>{t("p2")}</p>

            <p>{t("p3")}</p>

            <p>{t("p4")}</p>

          </GlassPanel>

        </FadeInView>

      </div>

    </section>

  );

}



export function BenefitsSection() {

  const t = useTranslations("benefits");

  const tTech = useTranslations("technology");

  const items = t.raw("items") as string[];



  return (

    <section className="relative overflow-hidden px-4 py-24 md:px-8">

      <StitchShader className="opacity-60" />

      <div className="relative mx-auto max-w-7xl">

        <FadeInView>

          <SectionHeading title={t("title")} align="center" />

        </FadeInView>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">

          <div className="grid gap-4 sm:grid-cols-2">

            {items.map((item, i) => (

              <FadeInView key={item} delay={i * 0.05}>

                <GlassPanel className="group border-l-4 border-l-transparent p-6 transition-all hover:border-l-accent-lime hover:bg-white/10">

                  <span className="font-display text-2xl font-bold text-accent-lime">

                    {String(i + 1).padStart(2, "0")}

                  </span>

                  <p className="mt-3 font-medium text-white">{item}</p>

                </GlassPanel>

              </FadeInView>

            ))}

          </div>

          <FadeInView delay={0.15}>

            <GlassPanel className="p-8">

              <h3 className="font-display text-xl font-bold text-accent-lime">{tTech("title")}</h3>

              <p className="mt-4 text-sm leading-relaxed text-white/80">{tTech("text")}</p>

              <div className="mt-8 flex flex-col gap-2">

                {[1, 2, 3, 4, 5].map((layer) => (

                  <div

                    key={layer}

                    className="flex items-center gap-3 rounded-lg bg-white/5 px-4 py-2"

                    style={{ marginLeft: `${(layer - 1) * 8}px` }}

                  >

                    <div className="h-2 flex-1 rounded bg-gradient-to-r from-accent-lime to-ocean-400" />

                    <span className="text-xs text-white/60">

                      {tTech("diagramLabel")} {layer}

                    </span>

                  </div>

                ))}

              </div>

            </GlassPanel>

          </FadeInView>

        </div>

        <div className="mt-16 grid grid-cols-3 gap-8">
          <div className="text-center">
            <p className="font-display text-4xl font-bold text-accent-lime md:text-5xl">−20°</p>
            <p className="mt-2 text-sm text-ocean-200">{t("statCold")}</p>
          </div>
          <StatCounter value={8} suffix="" label={t("statLife")} />
          <StatCounter value={80} suffix="°" label={t("statHot")} />
        </div>
        <p className="mt-8 text-center text-sm text-white/70">{t("plungeNote")}</p>

      </div>

    </section>

  );

}



export function MaterialsTechSection() {

  const tMat = useTranslations("materials");

  const tAcc = useTranslations("accessories");

  const accItems = tAcc.raw("items") as string[];



  return (

    <section className="border-y border-white/10 bg-brand-surface/50 px-4 py-16 md:px-8">

      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">

        <FadeInView>

          <GlassPanel className="p-8">

            <h3 className="font-display text-2xl font-bold text-accent-lime">{tMat("title")}</h3>

            <p className="mt-4 leading-relaxed text-white/80">{tMat("text")}</p>

          </GlassPanel>

        </FadeInView>

        <FadeInView delay={0.1}>

          <GlassPanel className="p-8">

            <h3 className="font-display text-2xl font-bold text-accent-lime">{tAcc("title")}</h3>

            <ul className="mt-6 flex flex-wrap gap-2">

              {accItems.map((item) => (

                <li

                  key={item}

                  className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm text-white/90"

                >

                  {item}

                </li>

              ))}

            </ul>

          </GlassPanel>

        </FadeInView>

      </div>

    </section>

  );

}

