"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { useAudio } from "@/components/providers/AudioProvider";

function ViberIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M11.398.002C9.473.028 5.331.344 3.014 2.467 1.294 4.177.528 6.657.085 10.184c-.044.356-.034.742.033 1.098.317 1.812 1.002 3.518 2.034 4.978.378.522.812 1.002 1.298 1.432.19.172.402.322.632.448.23.126.476.227.732.3 1.002.3 2.062.448 3.122.448.742 0 1.484-.074 2.204-.222.296-.06.58-.148.852-.26.272-.112.53-.248.772-.408.242-.16.466-.344.668-.548.202-.204.38-.43.532-.672.152-.242.276-.498.368-.764.092-.266.15-.542.172-.822.044-.56.044-1.122 0-1.682-.022-.28-.08-.556-.172-.822-.092-.266-.216-.522-.368-.764-.152-.242-.33-.468-.532-.672-.202-.204-.426-.388-.668-.548-.242-.16-.5-.296-.772-.408-.272-.112-.556-.2-.852-.26-.72-.148-1.462-.222-2.204-.222-1.06 0-2.12.148-3.122.448-.256.073-.502.174-.732.3-.23.126-.442.276-.632.448-.486.43-.92.91-1.298 1.432-1.032 1.46-1.717 3.166-2.034 4.978-.067.356-.077.742-.033 1.098.443 3.527 1.209 6.007 2.929 7.717 2.317 2.123 6.459 2.439 8.384 2.465h.004c1.925-.026 6.067-.342 8.384-2.465 1.72-1.71 2.486-4.19 2.929-7.717.044-.356.034-.742-.033-1.098-.317-1.812-1.002-3.518-2.034-4.978-.378-.522-.812-1.002-1.298-1.432-.19-.172-.402-.322-.632-.448-.23-.126-.476-.227-.732-.3-1.002-.3-2.062-.448-3.122-.448-.742 0-1.484.074-2.204.222-.296.06-.58.148-.852.26-.272.112-.53.248-.772.408-.242.16-.466.344-.668.548-.202.204-.38.43-.532.672-.152.242-.276.498-.368.764-.092.266-.15.542-.172.822-.044.56-.044 1.122 0 1.682.022.28.08.556.172.822.092.266.216.522.368.764.152.242.33.468.532.672.202.204.426.388.668.548.242.16.5.296.772.408.272.112.556.2.852.26.72.148 1.462.222 2.204.222 1.06 0 2.12-.148 3.122-.448.256-.073.502-.174.732-.3.23-.126.442-.276.632-.448.486-.43.92-.91 1.298-1.432 1.032-1.46 1.717-3.166 2.034-4.978.067-.356.077-.742.033-1.098-.443-3.527-1.209-6.007-2.929-7.717C17.465.344 13.323.028 11.398.002z" />
    </svg>
  );
}

const links = [
  { href: CONTACT.viberUrl, label: "Viber", icon: ViberIcon, color: "bg-[#7360f2]" },
  {
    href: CONTACT.whatsappUrl,
    label: "WhatsApp",
    icon: () => <MessageCircle className="h-5 w-5" />,
    color: "bg-[#25D366]",
  },
  {
    href: CONTACT.telegramUrl,
    label: "Telegram",
    icon: () => <SendIcon />,
    color: "bg-[#0088cc]",
  },
  {
    href: `tel:${CONTACT.phone}`,
    label: "Call",
    icon: () => <Phone className="h-5 w-5" />,
    color: "bg-ocean-500",
  },
];

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
  );
}

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
            className={`flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg ${link.color}`}
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
