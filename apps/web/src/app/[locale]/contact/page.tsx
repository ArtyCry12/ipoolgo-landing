"use client";

import { useTranslations } from "next-intl";
import { Phone, Mail } from "lucide-react";
import { FadeInView } from "@/components/motion/FadeInView";
import { ContactForm } from "@/components/forms/ContactForm";
import { CONTACT } from "@/lib/constants";

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <div className="px-4 pb-24 pt-28 md:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <div>
          <FadeInView>
            <h1 className="font-display text-4xl font-bold">{t("title")}</h1>
            <p className="mt-4 text-ocean-200">{t("subtitle")}</p>
            <div className="mt-8 space-y-4">
              <a
                href={`tel:${CONTACT.phone}`}
                className="flex items-center gap-3 text-ocean-100 hover:text-ocean-300"
              >
                <Phone size={20} />
                {CONTACT.phoneDisplay}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 text-ocean-100 hover:text-ocean-300"
              >
                <Mail size={20} />
                {CONTACT.email}
              </a>
              <a
                href={CONTACT.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-ocean-100 hover:text-ocean-300"
              >
                Telegram @{CONTACT.telegram}
              </a>
            </div>
          </FadeInView>
        </div>
        <FadeInView delay={0.1}>
          <ContactForm />
        </FadeInView>
      </div>
    </div>
  );
}
