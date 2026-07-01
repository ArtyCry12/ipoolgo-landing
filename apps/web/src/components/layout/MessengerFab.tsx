"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { useAudio } from "@/components/providers/AudioProvider";

function ViberIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M11.4.002C9.5.028 5.4.34 3.1 2.5 1.4 4.2.6 6.7.1 10.2c-.04.36-.03.74.03 1.1.32 1.81 1 3.52 2.03 5 .38.52.81 1 1.3 1.43.19.17.4.32.63.45.23.13.48.23.73.3 1 .3 2.06.45 3.12.45.74 0 1.48-.07 2.2-.22.3-.06.58-.15.85-.26.27-.11.53-.25.77-.41.24-.16.47-.34.67-.55.2-.2.38-.43.53-.67.15-.24.28-.5.37-.76.09-.27.15-.54.17-.82.04-.56.04-1.12 0-1.68-.02-.28-.08-.56-.17-.82-.09-.27-.22-.52-.37-.76-.15-.24-.33-.47-.53-.67-.2-.2-.43-.39-.67-.55-.24-.16-.5-.3-.77-.41-.27-.11-.55-.2-.85-.26-.72-.15-1.46-.22-2.2-.22-1.06 0-2.12.15-3.12.45-.26.07-.5.17-.73.3-.23.13-.44.28-.63.45-.49.43-.92.91-1.3 1.43-1.03 1.46-1.72 3.17-2.03 5-.07.36-.08.74-.03 1.1.44 3.53 1.21 6.01 2.93 7.72 2.32 2.12 6.46 2.44 8.38 2.47h.01c1.93-.03 6.07-.35 8.38-2.47 1.72-1.71 2.49-4.19 2.93-7.72.05-.36.04-.74-.03-1.1-.31-1.83-1-3.54-2.03-5-.38-.52-.81-1-1.3-1.43-.19-.17-.4-.32-.63-.45-.23-.13-.48-.23-.73-.3-1-.3-2.06-.45-3.12-.45-.74 0-1.48.07-2.2.22-.3.06-.58.15-.85.26-.27.11-.53.25-.77.41-.24.16-.47.34-.67.55-.2.2-.38.43-.53.67-.15.24-.28.5-.37.76-.09.27-.15.54-.17.82-.04.56-.04 1.12 0 1.68.02.28.08.56.17.82.09.27.22.52.37.76.15.24.33.47.53.67.2.2.43.39.67.55.24.16.5.3.77.41.27.11.55.2.85.26.72.15 1.46.22 2.2.22 1.06 0 2.12-.15 3.12-.45.26-.07.5-.17.73-.3.23-.13.44-.28.63-.45.49-.43.92-.91 1.3-1.43 1.03-1.46 1.72-3.17 2.03-5 .07-.36.08-.74.03-1.1-.44-3.53-1.21-6.01-2.93-7.72C17.5.34 13.4.028 11.4.002z" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
  );
}

const links = [
  { href: CONTACT.telegramUrl, label: "Telegram", icon: SendIcon },
  { href: CONTACT.whatsappUrl, label: "WhatsApp", icon: () => <MessageCircle className="h-5 w-5" /> },
  { href: CONTACT.viberUrl, label: "Viber", icon: ViberIcon },
  { href: `tel:${CONTACT.phone}`, label: "Call", icon: () => <Phone className="h-5 w-5" /> },
];

export function MessengerFab() {
  const { playSplash } = useAudio();

  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3 md:right-6">
      {links.map((link, i) => {
        const Icon = link.icon;
        return (
          <motion.a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("tel") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="glass-nav flex h-12 w-12 items-center justify-center rounded-full text-accent-lime shadow-lg hover:bg-white/15"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + i * 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => playSplash()}
            aria-label={link.label}
          >
            <Icon />
          </motion.a>
        );
      })}
    </div>
  );
}
