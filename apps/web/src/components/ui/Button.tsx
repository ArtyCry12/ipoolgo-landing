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
          "bg-gradient-to-r from-ocean-500 to-ocean-400 text-ocean-950 shadow-lg shadow-ocean-400/30",
        variant === "secondary" &&
          "border border-ocean-300/40 bg-ocean-800/60 text-ocean-50 backdrop-blur",
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
