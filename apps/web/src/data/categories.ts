export type Category = {
  slug: string;
  icon: string;
  image?: string;
};

/** Categories shown on catalog page (nkids assortment) */
export const catalogCategories: Category[] = [
  { slug: "pool-round", icon: "⭕", image: "/products/ipoolgo-67x11.png" },
  { slug: "ice-bath", icon: "❄️", image: "/products/ipoolgo-24x1.png" },
  { slug: "ladder-regular", icon: "🪜" },
  { slug: "filter-sandy", icon: "🌊" },
  { slug: "pump-electro", icon: "⚡" },
];

export const categories: Category[] = catalogCategories;

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
