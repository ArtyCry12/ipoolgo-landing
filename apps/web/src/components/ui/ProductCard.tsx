"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  slug: string;
  title: string;
  image?: string;
  cardImage?: string;
  specs?: string[];
  className?: string;
  children?: React.ReactNode;
};

export function ProductCard({
  slug,
  title,
  image,
  cardImage,
  specs = [],
  className,
  children,
}: ProductCardProps) {
  const src = cardImage ?? image ?? `/products/cards/${slug}-card.png`;

  return (
    <div
      className={cn(
        "product-card group overflow-hidden rounded-3xl border border-ocean-400/15 bg-[#FAFBFC] shadow-lg shadow-ocean-950/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-ocean-400/15",
        className,
      )}
    >
      <div className="h-1 w-full bg-gradient-to-r from-accent-lime via-ocean-300 to-ocean-500" />
      <div className="relative aspect-[4/3] bg-gradient-to-b from-white to-ocean-50/30 p-4">
        <Image
          src={src}
          alt={title}
          fill
          className="object-contain p-2 transition duration-500 group-hover:scale-105"
          sizes="(max-width:768px) 100vw, 320px"
        />
      </div>
      <div className="border-t border-ocean-100 bg-ocean-950 px-5 py-4">
        <p className="font-display text-lg font-bold text-ocean-50">{title}</p>
        {specs.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {specs.map((s) => (
              <span
                key={s}
                className="rounded-full bg-ocean-800/80 px-2 py-0.5 text-xs text-ocean-200"
              >
                {s}
              </span>
            ))}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
