import { cn } from "@/lib/utils";

type PageHeroBandProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export function PageHeroBand({ title, subtitle, className }: PageHeroBandProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden border-b border-white/10 bg-brand-surface/80 px-4 py-16 md:px-8 md:py-20",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-ocean-600/20 via-transparent to-accent-lime/5" />
      <div className="relative mx-auto max-w-7xl">
        <h1 className="font-display text-4xl font-black italic tracking-tight text-gradient md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-white/70">{subtitle}</p>}
      </div>
    </div>
  );
}
