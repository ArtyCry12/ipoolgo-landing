"use client";

import { useTranslations } from "next-intl";
import { Phone, Mail } from "lucide-react";
import { FadeInView } from "@/components/motion/FadeInView";
import { ContactForm } from "@/components/forms/ContactForm";
import { CONTACT } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassPanel } from "@/components/ui/GlassPanel";

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <div className="px-4 pb-24 pt-28 md:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <div>
          <FadeInView>
            <SectionHeading title={t("title")} subtitle={t("subtitle")} />
            <GlassPanel className="mt-8 space-y-4 p-6">
              <a
                href={`tel:${CONTACT.phone}`}
                className="flex items-center gap-3 text-white/90 transition hover:text-accent-lime"
              >
                <Phone size={20} />
                {CONTACT.phoneDisplay}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 text-white/90 transition hover:text-accent-lime"
              >
                <Mail size={20} />
                {CONTACT.email}
              </a>
              <a
                href={CONTACT.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/90 transition hover:text-accent-lime"
              >
                Telegram @{CONTACT.telegram}
              </a>
            </GlassPanel>
          </FadeInView>
        </div>
        <FadeInView delay={0.1}>
          <ContactForm />
        </FadeInView>
      </div>
    </div>
  );
}
