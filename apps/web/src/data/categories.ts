export type Category = {
  slug: string;
  icon: string;
  image?: string;
};

export const categories: Category[] = [
  { slug: "pool-round", icon: "⭕", image: "/products/ipoolgo-6x15.png" },
  { slug: "pool-rectangle", icon: "▭", image: "/products/ipoolgo-3x2x12.png" },
  { slug: "pool-inground-rectangle", icon: "⬛" },
  { slug: "ice-bath", icon: "❄️" },
  { slug: "bubble", icon: "👶" },
  { slug: "onsen", icon: "💆", image: "/products/ipoolgo-24x1.png" },
  { slug: "settee", icon: "🛋️" },
  { slug: "bergere", icon: "💺" },
  { slug: "clamshell", icon: "🪑" },
  { slug: "surface", icon: "🪵" },
  { slug: "pontoon", icon: "🛟" },
  { slug: "tray", icon: "🍹" },
  { slug: "slope", icon: "🎢" },
  { slug: "buckler", icon: "🔵" },
  { slug: "buckler-square", icon: "🟦" },
  { slug: "ladder-regular", icon: "🪜" },
  { slug: "ladder-inflatable", icon: "📶" },
  { slug: "filter-sandy", icon: "🌊" },
  { slug: "pump-electro", icon: "⚡" },
  { slug: "pump-heat", icon: "🔥" },
  { slug: "verro", icon: "🤖" },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
