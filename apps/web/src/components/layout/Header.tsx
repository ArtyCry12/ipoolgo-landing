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
  const isActive = (path: string) => pathname === path || (path !== "/" && pathname.startsWith(path));

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-2 pt-3 md:px-4">
      <div className="glass-nav mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-2.5 md:px-6 md:py-3">
        <Link
          href="/"
          className="font-display text-xl font-black italic tracking-tight text-white md:text-2xl"
        >
          IPOOLGO
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navKeys.map((key) => (
            <Link
              key={key}
              href={paths[key]}
              className={cn(
                "font-display text-sm font-bold tracking-tight transition-all duration-300 hover:scale-105",
                isActive(paths[key])
                  ? "border-b-2 border-accent-lime pb-0.5 text-accent-lime"
                  : "text-white/80 hover:bg-white/10 hover:text-white",
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
            className="rounded-full p-2 text-white/80 hover:bg-white/10"
            aria-label={muted ? tAudio("unmute") : tAudio("mute")}
          >
            {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
          <Link
            href={pathname}
            locale={switchLocale}
            className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold uppercase text-white/90 hover:bg-white/10"
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
            className="rounded-full p-2 text-white lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="glass-nav mx-auto mt-2 max-w-7xl rounded-3xl px-4 py-4 lg:hidden">
          {navKeys.map((key) => (
            <Link
              key={key}
              href={paths[key]}
              className={cn(
                "block py-2 font-display font-bold",
                isActive(paths[key]) ? "text-accent-lime" : "text-white/90",
              )}
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
