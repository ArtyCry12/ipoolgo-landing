import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const legacyMap: Record<string, string> = {
  "ipoolgo-7x12": "ipoolgo-70x12",
  "ipoolgo-5x15": "ipoolgo-50x15",
  "ipoolgo-6x1": "ipoolgo-60x10",
};

const removedToCatalog = [
  "ipoolgo-24x1",
  "ipoolgo-3x2x12",
  "ipoolgo-6x15",
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "ipoolgoo.ru", pathname: "/wp-content/**" },
    ],
  },
  async redirects() {
    const redirects: { source: string; destination: string; permanent: boolean }[] = [];

    for (const [oldSlug, newSlug] of Object.entries(legacyMap)) {
      redirects.push(
        { source: `/ro/products/${oldSlug}`, destination: `/ro/products/${newSlug}`, permanent: true },
        { source: `/ru/products/${oldSlug}`, destination: `/ru/products/${newSlug}`, permanent: true },
      );
    }

    for (const slug of removedToCatalog) {
      redirects.push(
        { source: `/ro/products/${slug}`, destination: `/ro/catalog`, permanent: false },
        { source: `/ru/products/${slug}`, destination: `/ru/catalog`, permanent: false },
      );
    }

    return redirects;
  },
};

export default withNextIntl(nextConfig);
