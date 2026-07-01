"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  slug: string;
  title: string;
  image?: string;
  cardImage?: string;
  specs?: string[];
  productType?: "pool" | "accessory";
  isPlunge?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export function ProductCard({
  slug,
  title,
  image,
  cardImage,
  specs = [],
  productType = "pool",
  isPlunge = false,
  className,
  children,
}: ProductCardProps) {
  const t = useTranslations("products");
  const src = cardImage ?? image ?? `/products/cards/${slug}-card.png`;
  const isPlaceholder = src.includes("placeholder");
  const accessoryIcon = slug.startsWith("ladder") ? "🪜" : slug.startsWith("filter") ? "🌊" : "⚡";

  return (
    <div
      className={cn(
        "group overflow-hidden rounded-3xl bg-[#FAFBFC] shadow-xl shadow-black/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-lime/10",
        className,
      )}
    >
      <div className="h-1 w-full bg-gradient-to-r from-accent-lime via-ocean-300 to-ocean-500" />
      <div className="relative aspect-[4/3] bg-gradient-to-b from-white to-ocean-50/30 p-4">
        {productType === "accessory" && isPlaceholder ? (
          <div className="flex h-full flex-col items-center justify-center gap-2 text-brand-deep/60">
            <span className="text-5xl">{accessoryIcon}</span>
            <span className="text-xs font-medium uppercase tracking-wider">IPOOLGO</span>
          </div>
        ) : (
          <Image
            src={src}
            alt={title}
            fill
            className="object-contain p-2 transition duration-500 group-hover:scale-105"
            sizes="(max-width:768px) 100vw, 320px"
          />
        )}
      </div>
      <div className="border-t border-white/10 bg-brand-surface px-5 py-4">
        <p className="font-display text-lg font-bold text-white">{title}</p>
        {specs.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {specs.map((s) => (
              <span
                key={s}
                className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/70"
              >
                {s}
              </span>
            ))}
          </div>
        )}
        {isPlunge && <p className="mt-2 text-xs text-accent-lime/90">{t("plungeHint")}</p>}
        {children}
      </div>
    </div>
  );
}
