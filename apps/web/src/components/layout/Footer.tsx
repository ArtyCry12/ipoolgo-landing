"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Phone, Send } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { FadeInView } from "@/components/motion/FadeInView";

export function Footer() {
  const t = useTranslations("footer");
  const tLegal = useTranslations("legal");
  const tNav = useTranslations("nav");

  return (
    <footer className="relative overflow-hidden border-t border-ocean-400/20 bg-ocean-950 pt-16 pb-32">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-ocean-300 animate-float"
            style={{
              left: `${(i * 17) % 100}%`,
              top: `${(i * 23) % 100}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <FadeInView>
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <p className="font-display text-2xl font-bold text-gradient">IPOOLGO®</p>
              <p className="mt-3 text-sm text-ocean-200">{t("tagline")}</p>
            </div>
            <div>
              <p className="mb-3 font-semibold text-ocean-100">{tNav("catalog")}</p>
              <div className="flex flex-col gap-2 text-sm text-ocean-200">
                <Link href="/catalog" className="hover:text-ocean-300">
                  {tNav("catalog")}
                </Link>
                <Link href="/gallery" className="hover:text-ocean-300">
                  {tNav("gallery")}
                </Link>
                <Link href="/about" className="hover:text-ocean-300">
                  {tNav("about")}
                </Link>
              </div>
            </div>
            <div>
              <p className="mb-3 font-semibold text-ocean-100">{tNav("contact")}</p>
              <a
                href={`tel:${CONTACT.phone}`}
                className="flex items-center gap-2 text-sm text-ocean-200 hover:text-ocean-300"
              >
                <Phone size={14} />
                {CONTACT.phoneDisplay}
              </a>
              <a
                href={CONTACT.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center gap-2 text-sm text-ocean-200 hover:text-ocean-300"
              >
                <Send size={14} />@{CONTACT.telegram}
              </a>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap gap-4 border-t border-ocean-400/10 pt-8 text-xs text-ocean-300/60">
            <Link href="/legal/privacy">{tLegal("privacy")}</Link>
            <Link href="/legal/terms">{tLegal("terms")}</Link>
            <Link href="/legal/delivery">{tLegal("delivery")}</Link>
            <span className="ml-auto">{t("rights")}</span>
          </div>
        </FadeInView>
      </div>
    </footer>
  );
}
