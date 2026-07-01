export type ProductType = "pool" | "accessory";

export type Product = {
  slug: string;
  image: string;
  cardImage: string;
  dimensions: { ro: string; ru: string };
  title: { ro: string; ru: string };
  shape: "round" | "rect" | "plunge";
  categorySlug: string;
  productType: ProductType;
  isPlunge?: boolean;
  featured?: boolean;
};

const POOL_IMAGE = "/products/ipoolgo-67x11.png";
const PLACEHOLDER = "/products/placeholder-pool.png";

export const flagshipProducts: Product[] = [
  {
    slug: "ipoolgo-67x11",
    image: "/products/ipoolgo-67x11.png",
    cardImage: "/products/cards/ipoolgo-67x11-card.png",
    dimensions: { ro: "6,7 × 1,1 m", ru: "6,7 × 1,1 м" },
    title: { ro: "Piscină gonflabilă", ru: "Надувной бассейн" },
    shape: "round",
    categorySlug: "pool-round",
    productType: "pool",
    featured: true,
  },
  {
    slug: "ipoolgo-64x13",
    image: "/products/ipoolgo-64x13.png",
    cardImage: "/products/cards/ipoolgo-64x13-card.png",
    dimensions: { ro: "6,4 × 1,3 m", ru: "6,4 × 1,3 м" },
    title: { ro: "Piscină gonflabilă", ru: "Надувной бассейн" },
    shape: "round",
    categorySlug: "pool-round",
    productType: "pool",
    featured: true,
  },
  {
    slug: "ipoolgo-70x12",
    image: "/products/ipoolgo-7x12.png",
    cardImage: "/products/cards/ipoolgo-7x12-card.png",
    dimensions: { ro: "7,0 × 1,2 m", ru: "7,0 × 1,2 м" },
    title: { ro: "Piscină gonflabilă", ru: "Надувной бассейн" },
    shape: "round",
    categorySlug: "pool-round",
    productType: "pool",
    featured: true,
  },
  {
    slug: "ipoolgo-50x15",
    image: "/products/ipoolgo-5x15.png",
    cardImage: "/products/cards/ipoolgo-5x15-card.png",
    dimensions: { ro: "5,0 × 1,5 m", ru: "5,0 × 1,5 м" },
    title: { ro: "Piscină gonflabilă", ru: "Надувной бассейн" },
    shape: "round",
    categorySlug: "pool-round",
    productType: "pool",
    featured: true,
  },
  {
    slug: "ipoolgo-50x10",
    image: "/products/ipoolgo-6x1.png",
    cardImage: "/products/cards/ipoolgo-6x1-card.png",
    dimensions: { ro: "5,0 × 1,0 m", ru: "5,0 × 1,0 м" },
    title: { ro: "Piscină gonflabilă", ru: "Надувной бассейн" },
    shape: "round",
    categorySlug: "pool-round",
    productType: "pool",
    featured: true,
  },
  {
    slug: "ipoolgo-60x10",
    image: "/products/ipoolgo-6x1.png",
    cardImage: "/products/cards/ipoolgo-6x1-card.png",
    dimensions: { ro: "6,0 × 1,0 m", ru: "6,0 × 1,0 м" },
    title: { ro: "Piscină gonflabilă", ru: "Надувной бассейн" },
    shape: "round",
    categorySlug: "pool-round",
    productType: "pool",
  },
  {
    slug: "ipoolgo-46x12",
    image: "/products/ipoolgo-64x13.png",
    cardImage: "/products/cards/ipoolgo-64x13-card.png",
    dimensions: { ro: "4,6 × 1,2 m", ru: "4,6 × 1,2 м" },
    title: { ro: "Piscină gonflabilă", ru: "Надувной бассейн" },
    shape: "round",
    categorySlug: "pool-round",
    productType: "pool",
  },
  {
    slug: "ipoolgo-37x12",
    image: "/products/ipoolgo-64x13.png",
    cardImage: "/products/cards/ipoolgo-64x13-card.png",
    dimensions: { ro: "3,7 × 1,2 m", ru: "3,7 × 1,2 м" },
    title: { ro: "Piscină gonflabilă", ru: "Надувной бассейн" },
    shape: "round",
    categorySlug: "pool-round",
    productType: "pool",
  },
  {
    slug: "ipoolgo-30x15",
    image: "/products/ipoolgo-6x15.png",
    cardImage: "/products/cards/ipoolgo-6x15-card.png",
    dimensions: { ro: "3,0 × 1,5 m", ru: "3,0 × 1,5 м" },
    title: { ro: "Piscină gonflabilă", ru: "Надувной бассейн" },
    shape: "round",
    categorySlug: "pool-round",
    productType: "pool",
  },
  {
    slug: "ipoolgo-20x05",
    image: "/products/ipoolgo-24x1.png",
    cardImage: "/products/cards/ipoolgo-24x1-card.png",
    dimensions: { ro: "2,0 × 0,5 m", ru: "2,0 × 0,5 м" },
    title: { ro: "Piscină compactă", ru: "Компактный бассейн" },
    shape: "plunge",
    categorySlug: "ice-bath",
    productType: "pool",
    isPlunge: true,
    featured: true,
  },
  {
    slug: "ladder-162",
    image: PLACEHOLDER,
    cardImage: PLACEHOLDER,
    dimensions: { ro: "H 1,62 m", ru: "H 1,62 м" },
    title: { ro: "Scară", ru: "Лестница" },
    shape: "round",
    categorySlug: "ladder-regular",
    productType: "accessory",
  },
  {
    slug: "ladder-132",
    image: PLACEHOLDER,
    cardImage: PLACEHOLDER,
    dimensions: { ro: "H 1,32 m", ru: "H 1,32 м" },
    title: { ro: "Scară", ru: "Лестница" },
    shape: "round",
    categorySlug: "ladder-regular",
    productType: "accessory",
  },
  {
    slug: "filter-sand-2300",
    image: PLACEHOLDER,
    cardImage: PLACEHOLDER,
    dimensions: { ro: "2300 gal/h", ru: "2300 gal/h" },
    title: { ro: "Filtru cu nisip", ru: "Песочный фильтр" },
    shape: "round",
    categorySlug: "filter-sandy",
    productType: "accessory",
  },
  {
    slug: "pump-dc-6000",
    image: PLACEHOLDER,
    cardImage: PLACEHOLDER,
    dimensions: { ro: "DC 12–14,4 V", ru: "DC 12–14,4 В" },
    title: { ro: "Pompă electrică", ru: "Электронасос" },
    shape: "round",
    categorySlug: "pump-electro",
    productType: "accessory",
  },
];

export const productSlugs = flagshipProducts.map((p) => p.slug);

/** @deprecated old slugs → redirect targets */
export const legacyProductRedirects: Record<string, string> = {
  "ipoolgo-7x12": "ipoolgo-70x12",
  "ipoolgo-5x15": "ipoolgo-50x15",
  "ipoolgo-6x1": "ipoolgo-60x10",
};

export function getProduct(slug: string) {
  return flagshipProducts.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string) {
  return flagshipProducts.filter((p) => p.categorySlug === categorySlug);
}

export function getFeaturedProducts() {
  return flagshipProducts.filter((p) => p.featured);
}

export function getProductSpecs(product: Product, locale: "ro" | "ru"): string[] {
  if (product.productType === "accessory") {
    return locale === "ro" ? ["Original IPOOLGO", "Certificat"] : ["Оригинал IPOOLGO", "Сертификат"];
  }
  const specs =
    locale === "ro"
      ? ["−20°…+80°", "8 ani", "Drop Stitch"]
      : ["−20°…+80°", "8 лет", "Drop Stitch"];
  if (product.isPlunge) {
    specs.push(locale === "ro" ? "Cadă rece" : "Купель");
  }
  return specs;
}

export function getProductDisplayName(product: Product, locale: "ro" | "ru") {
  return `${product.title[locale]} ${product.dimensions[locale]}`;
}

export function getProductImage(slug: string, preferCard = true) {
  const p = getProduct(slug);
  if (!p) return POOL_IMAGE;
  return preferCard ? p.cardImage : p.image;
}
