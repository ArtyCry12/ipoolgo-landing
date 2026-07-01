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

    <footer className="relative overflow-hidden border-t border-white/10 bg-brand-surface pb-32 pt-16">

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">

        <FadeInView>

          <div className="grid gap-12 md:grid-cols-3">

            <div>

              <p className="font-display text-2xl font-black italic text-white">IPOOLGO</p>

              <p className="mt-3 text-sm text-white/70">{t("tagline")}</p>

            </div>

            <div>

              <p className="mb-3 font-display font-bold text-accent-lime">{tNav("catalog")}</p>

              <div className="flex flex-col gap-2 text-sm text-white/70">

                <Link href="/catalog" className="hover:text-accent-lime">

                  {tNav("catalog")}

                </Link>

                <Link href="/gallery" className="hover:text-accent-lime">

                  {tNav("gallery")}

                </Link>

                <Link href="/about" className="hover:text-accent-lime">

                  {tNav("about")}

                </Link>

                <Link href="/reviews" className="hover:text-accent-lime">

                  {tNav("reviews")}

                </Link>

              </div>

            </div>

            <div>

              <p className="mb-3 font-display font-bold text-accent-lime">{tNav("contact")}</p>

              <a

                href={`tel:${CONTACT.phone}`}

                className="flex items-center gap-2 text-sm text-white/70 hover:text-accent-lime"

              >

                <Phone size={14} />

                {CONTACT.phoneDisplay}

              </a>

              <a

                href={CONTACT.telegramUrl}

                target="_blank"

                rel="noopener noreferrer"

                className="mt-2 flex items-center gap-2 text-sm text-white/70 hover:text-accent-lime"

              >

                <Send size={14} />@{CONTACT.telegram}

              </a>

            </div>

          </div>

          <div className="mt-12 flex flex-wrap gap-4 border-t border-white/10 pt-8 text-xs text-white/50">

            <Link href="/legal/privacy" className="hover:text-accent-lime">

              {tLegal("privacy")}

            </Link>

            <Link href="/legal/terms" className="hover:text-accent-lime">

              {tLegal("terms")}

            </Link>

            <Link href="/legal/delivery" className="hover:text-accent-lime">

              {tLegal("delivery")}

            </Link>

            <span className="ml-auto">{t("rights")}</span>

          </div>

        </FadeInView>

      </div>

    </footer>

  );

}

