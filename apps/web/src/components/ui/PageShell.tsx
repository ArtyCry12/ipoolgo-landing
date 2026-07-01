import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
  className?: string;
  withShader?: boolean;
};

export function PageShell({ children, className, withShader = false }: PageShellProps) {
  return (
    <div className={cn("relative min-h-screen bg-brand-surface pb-24 pt-28", className)}>
      {withShader && (
        <div className="pointer-events-none absolute inset-0 bg-brand-deep/80" aria-hidden />
      )}
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">{children}</div>
    </div>
  );
}
