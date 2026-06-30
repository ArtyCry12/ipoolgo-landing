"use client";

import { useTranslations } from "next-intl";
import { FadeInView } from "@/components/motion/FadeInView";
import { StatCounter } from "@/components/motion/StatCounter";

export function OriginalitySection() {
  const t = useTranslations("originality");

  return (
    <section className="relative px-4 py-24 md:px-8">
      <div className="mx-auto max-w-4xl">
        <FadeInView>
          <h2 className="font-display text-3xl font-bold text-ocean-50 md:text-5xl">
            {t("title")}
          </h2>
        </FadeInView>
        <FadeInView delay={0.1}>
          <div className="mt-8 space-y-4 text-ocean-100/85 leading-relaxed">
            <p>{t("p1")}</p>
            <p>{t("p2")}</p>
            <p>{t("p3")}</p>
            <p>{t("p4")}</p>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}

export function BenefitsSection() {
  const t = useTranslations("benefits");
  const items = t.raw("items") as string[];

  return (
    <section className="relative bg-ocean-800/30 px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeInView>
          <h2 className="font-display text-center text-3xl font-bold md:text-5xl">
            {t("title")}
          </h2>
        </FadeInView>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <FadeInView key={item} delay={i * 0.05}>
              <div className="glass-card group rounded-2xl border-l-4 border-l-transparent p-6 transition-all hover:border-l-accent-lime hover:border-ocean-300/50 hover:shadow-lg hover:shadow-ocean-400/10">
                <span className="font-display text-2xl font-bold text-accent-lime">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 font-medium text-ocean-50">{item}</p>
              </div>
            </FadeInView>
          ))}
        </div>
        <div className="mt-16 grid grid-cols-3 gap-8">
          <StatCounter value={500} suffix=" kg" label={items[1]?.split("—")[1]?.trim() ?? "500 kg"} />
          <StatCounter value={8} suffix="" label={items[3]?.split("—")[1]?.trim() ?? "8 ani"} />
          <StatCounter value={80} suffix="°" label="Max temp" />
        </div>
      </div>
    </section>
  );
}

export function MaterialsTechSection() {
  const tMat = useTranslations("materials");
  const tTech = useTranslations("technology");

  return (
    <section className="px-4 py-24 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
        <FadeInView>
          <div className="glass-card rounded-3xl p-8">
            <h3 className="font-display text-2xl font-bold text-ocean-300">
              {tMat("title")}
            </h3>
            <p className="mt-4 text-ocean-100/85 leading-relaxed">{tMat("text")}</p>
          </div>
        </FadeInView>
        <FadeInView delay={0.15}>
          <div className="glass-card rounded-3xl p-8">
            <h3 className="font-display text-2xl font-bold text-ocean-300">
              {tTech("title")}
            </h3>
            <p className="mt-4 text-ocean-100/85 leading-relaxed">{tTech("text")}</p>
            <div className="mt-8 flex flex-col gap-2">
              {[1, 2, 3, 4, 5].map((layer) => (
                <div
                  key={layer}
                  className="flex items-center gap-3 rounded-lg bg-ocean-600/20 px-4 py-2"
                  style={{ marginLeft: `${(layer - 1) * 8}px` }}
                >
                  <div className="h-2 flex-1 rounded bg-gradient-to-r from-ocean-400 to-ocean-300" />
                  <span className="text-xs text-ocean-200">
                    {tTech("diagramLabel")} {layer}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}

export function AccessoriesSection() {
  const t = useTranslations("accessories");
  const items = t.raw("items") as string[];

  return (
    <section className="border-y border-ocean-400/10 bg-ocean-950 px-4 py-16 md:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <FadeInView>
          <h2 className="font-display text-2xl font-bold md:text-3xl">{t("title")}</h2>
          <ul className="mt-8 flex flex-wrap justify-center gap-3">
            {items.map((item) => (
              <li
                key={item}
                className="rounded-full border border-ocean-400/30 bg-ocean-800/40 px-5 py-2 text-sm text-ocean-100"
              >
                {item}
              </li>
            ))}
          </ul>
        </FadeInView>
      </div>
    </section>
  );
}
