"use client";

import { cn } from "@/lib/utils";
import { useAudio } from "@/components/providers/AudioProvider";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
};

export function Button({
  variant = "primary",
  className,
  children,
  onClick,
  ...props
}: ButtonProps) {
  const { playClick } = useAudio();

  return (
    <button
      type="button"
      className={cn(
        "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition-all duration-300",
        "hover:scale-105 active:scale-95",
        variant === "primary" &&
          "bg-accent-lime text-brand-deep shadow-lg shadow-accent-lime/30 hover:shadow-accent-lime/50",
        variant === "secondary" &&
          "glass-panel border border-white/20 text-white hover:bg-white/10",
        variant === "ghost" && "text-ocean-200 hover:text-ocean-50",
        className,
      )}
      onClick={(e) => {
        playClick();
        onClick?.(e);
      }}
      {...props}
    >
      {children}
    </button>
  );
}
