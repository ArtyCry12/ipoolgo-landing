import { cn } from "@/lib/utils";

type ProductSpecChipsProps = {
  specs: string[];
  className?: string;
};

export function ProductSpecChips({ specs, className }: ProductSpecChipsProps) {
  if (specs.length === 0) return null;

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {specs.map((s) => (
        <span
          key={s}
          className="glass-panel rounded-full px-3 py-1 text-xs font-medium text-white/90 md:text-sm"
        >
          {s}
        </span>
      ))}
    </div>
  );
}
