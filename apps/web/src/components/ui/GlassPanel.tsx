import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type GlassPanelProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
};

export function GlassPanel({ children, className, as: Tag = "div" }: GlassPanelProps) {
  return <Tag className={cn("glass-panel rounded-2xl", className)}>{children}</Tag>;
}
