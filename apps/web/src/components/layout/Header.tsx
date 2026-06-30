"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Menu, X, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAudio } from "@/components/providers/AudioProvider";
import { Button } from "@/components/ui/Button";
import { CONTACT } from "@/lib/constants";

const navKeys = [
  "home",
  "catalog",
  "gallery",
  "about",
  "reviews",
  "faq",
  "contact",
] as const;

const paths: Record<(typeof navKeys)[number], string> = {
  home: "/",
  catalog: "/catalog",
  gallery: "/gallery",
  about: "/about",
  reviews: "/reviews",
  faq: "/faq",
  contact: "/contact",
};

export function Header() {
  const t = useTranslations("nav");
  const tAudio = useTranslations("audio");
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { muted, toggleMute } = useAudio();

  const switchLocale = locale === "ro" ? "ru" : "ro";

  return (
    <header className="fixed top-0 z-50 w-full border-b border-ocean-400/10 bg-ocean-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link href="/" className="font-display text-xl font-bold tracking-tight text-gradient">
          IPOOLGO®
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navKeys.map((key) => (
            <Link
              key={key}
              href={paths[key]}
              className={cn(
                "text-sm font-medium transition-colors hover:text-ocean-300",
                pathname === paths[key] ? "text-ocean-300" : "text-ocean-100/80",
              )}
            >
              {t(key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleMute}
            className="rounded-full p-2 text-ocean-200 hover:bg-ocean-800/60"
            aria-label={muted ? tAudio("unmute") : tAudio("mute")}
          >
            {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
          <Link
            href={pathname}
            locale={switchLocale}
            className="rounded-full border border-ocean-400/30 px-3 py-1 text-xs font-semibold uppercase text-ocean-200 hover:bg-ocean-800/60"
          >
            {switchLocale}
          </Link>
          <a href={`tel:${CONTACT.phone}`} className="hidden sm:block">
            <Button variant="primary" className="!py-2 !text-sm">
              {t("cta")}
            </Button>
          </a>
          <button
            type="button"
            className="rounded-full p-2 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-ocean-400/10 bg-ocean-950/95 px-4 py-4 lg:hidden">
          {navKeys.map((key) => (
            <Link
              key={key}
              href={paths[key]}
              className="block py-2 text-ocean-100"
              onClick={() => setOpen(false)}
            >
              {t(key)}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
