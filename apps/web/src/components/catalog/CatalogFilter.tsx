"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { catalogCategories } from "@/data/categories";
import { cn } from "@/lib/utils";

export function CatalogFilter() {
  const t = useTranslations("categories");
  const pathname = usePathname();
  const isAll = pathname === "/catalog";

  return (
    <div className="flex flex-wrap gap-2">
      <Link
        href="/catalog"
        className={cn(
          "rounded-full px-4 py-2 text-sm font-medium transition",
          isAll
            ? "bg-accent-lime text-brand-deep"
            : "glass-panel text-white/80 hover:bg-white/15",
        )}
      >
        {t("all")}
      </Link>
      {catalogCategories.map((cat) => {
        const href = `/catalog/${cat.slug}`;
        const active = pathname === href;
        return (
          <Link
            key={cat.slug}
            href={href}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition",
              active
                ? "bg-accent-lime text-brand-deep"
                : "glass-panel text-white/80 hover:bg-white/15",
            )}
          >
            {cat.icon} {t(cat.slug)}
          </Link>
        );
      })}
    </div>
  );
}
