export type Product = {
  slug: string;
  image: string;
  cardImage: string;
  dimensions: { ro: string; ru: string };
  shape: "round" | "rect" | "jacuzzi";
  categorySlug: string;
  specs: string[];
};

export const flagshipProducts: Product[] = [
  {
    slug: "ipoolgo-67x11",
    image: "/products/ipoolgo-67x11.png",
    cardImage: "/products/cards/ipoolgo-67x11-card.png",
    dimensions: { ro: "6,7 × 1,1 m", ru: "6,7 × 1,1 м" },
    shape: "round",
    categorySlug: "pool-round",
    specs: ["500 kg", "8 ani", "-20°/+80°"],
  },
  {
    slug: "ipoolgo-24x1",
    image: "/products/ipoolgo-24x1.png",
    cardImage: "/products/cards/ipoolgo-24x1-card.png",
    dimensions: { ro: "2,4 × 1 m", ru: "2,4 × 1 м" },
    shape: "jacuzzi",
    categorySlug: "onsen",
    specs: ["Hidromasaj", "Drop Stitch"],
  },
  {
    slug: "ipoolgo-64x13",
    image: "/products/ipoolgo-64x13.png",
    cardImage: "/products/cards/ipoolgo-64x13-card.png",
    dimensions: { ro: "6,4 × 1,3 m", ru: "6,4 × 1,3 м" },
    shape: "round",
    categorySlug: "pool-round",
    specs: ["500 kg", "8 ani", "-20°/+80°"],
  },
  {
    slug: "ipoolgo-6x15",
    image: "/products/ipoolgo-6x15.png",
    cardImage: "/products/cards/ipoolgo-6x15-card.png",
    dimensions: { ro: "6 × 1,5 m", ru: "6 × 1,5 м" },
    shape: "round",
    categorySlug: "pool-round",
    specs: ["500 kg", "8 ani", "-20°/+80°"],
  },
  {
    slug: "ipoolgo-3x2x12",
    image: "/products/ipoolgo-3x2x12.png",
    cardImage: "/products/cards/ipoolgo-3x2x12-card.png",
    dimensions: { ro: "3 × 2 × 1,2 m", ru: "3 × 2 × 1,2 м" },
    shape: "rect",
    categorySlug: "pool-rectangle",
    specs: ["500 kg", "8 ani", "-20°/+80°"],
  },
  {
    slug: "ipoolgo-6x1",
    image: "/products/ipoolgo-6x1.png",
    cardImage: "/products/cards/ipoolgo-6x1-card.png",
    dimensions: { ro: "6 × 1 m", ru: "6 × 1 м" },
    shape: "round",
    categorySlug: "pool-round",
    specs: ["500 kg", "8 ani", "-20°/+80°"],
  },
  {
    slug: "ipoolgo-5x15",
    image: "/products/ipoolgo-5x15.png",
    cardImage: "/products/cards/ipoolgo-5x15-card.png",
    dimensions: { ro: "5 × 1,5 m", ru: "5 × 1,5 м" },
    shape: "round",
    categorySlug: "pool-round",
    specs: ["500 kg", "8 ani", "-20°/+80°"],
  },
  {
    slug: "ipoolgo-7x12",
    image: "/products/ipoolgo-7x12.png",
    cardImage: "/products/cards/ipoolgo-7x12-card.png",
    dimensions: { ro: "7 × 1,2 m", ru: "7 × 1,2 м" },
    shape: "round",
    categorySlug: "pool-round",
    specs: ["500 kg", "8 ani", "-20°/+80°"],
  },
];

export function getProduct(slug: string) {
  return flagshipProducts.find((p) => p.slug === slug);
}

export function getProductImage(slug: string, preferCard = true) {
  const p = getProduct(slug);
  if (!p) return "/products/ipoolgo-67x11.png";
  return preferCard ? p.cardImage : p.image;
}
