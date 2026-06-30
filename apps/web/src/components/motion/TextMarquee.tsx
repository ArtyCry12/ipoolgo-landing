"use client";

import { useTranslations } from "next-intl";

export function TextMarquee() {
  const t = useTranslations("marquee");
  const items = t.raw("items") as string[];
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-ocean-400/20 bg-ocean-800/40 py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="mx-8 font-display text-lg font-semibold tracking-[0.2em] text-ocean-200/80"
          >
            {item}
            <span className="mx-8 text-accent-lime">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
