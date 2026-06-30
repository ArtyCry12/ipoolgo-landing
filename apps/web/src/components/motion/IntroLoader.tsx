"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

type IntroLoaderProps = {
  onComplete: () => void;
};

export function IntroLoader({ onComplete }: IntroLoaderProps) {
  const t = useTranslations("loader");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 600);
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ocean-950"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="relative mb-8 h-24 w-24 rounded-full border-2 border-ocean-400"
            animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-ocean-400 to-ocean-600 animate-ripple" />
          </motion.div>
          <motion.p
            className="font-display text-3xl font-bold tracking-widest text-gradient"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {t("loading")}
          </motion.p>
          <button
            type="button"
            onClick={() => {
              setVisible(false);
              setTimeout(onComplete, 300);
            }}
            className="mt-8 text-sm text-ocean-300 underline-offset-4 hover:underline"
          >
            {t("skip")}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
