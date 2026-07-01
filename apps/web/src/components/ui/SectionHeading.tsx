import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      <h2 className="font-display text-3xl font-bold text-accent-lime md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-3 max-w-2xl text-ocean-100/85 md:text-lg">{subtitle}</p>}
    </div>
  );
}
