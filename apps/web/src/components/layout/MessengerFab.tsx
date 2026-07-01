"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Send } from "lucide-react";
import { CONTACT } from "@/lib/constants";

const links = [
  { href: CONTACT.telegramUrl, label: "Telegram", icon: Send },
  { href: CONTACT.whatsappUrl, label: "WhatsApp", icon: MessageCircle },
  { href: `tel:${CONTACT.phone}`, label: "Call", icon: Phone },
];

export function MessengerFab() {
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
            aria-label={link.label}
          >
            <Icon className="h-5 w-5" />
          </motion.a>
        );
      })}
    </div>
  );
}
