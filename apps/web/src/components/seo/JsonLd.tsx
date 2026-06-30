import { SITE_URL, CONTACT } from "@/lib/constants";

type JsonLdProps = {
  type: "Organization" | "Product" | "FAQPage";
  data?: Record<string, unknown>;
};

export function JsonLd({ type, data }: JsonLdProps) {
  let schema: Record<string, unknown> = {};

  if (type === "Organization") {
    schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "IPOOLGO",
      url: SITE_URL,
      telephone: CONTACT.phone,
      areaServed: ["MD", "RO"],
      sameAs: [CONTACT.telegramUrl, CONTACT.whatsappUrl],
    };
  } else if (type === "Product" && data) {
    schema = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: data.name,
      description: data.description,
      brand: { "@type": "Brand", name: "IPOOLGO" },
      image: data.image,
    };
  } else if (type === "FAQPage" && data?.items) {
    schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: (data.items as { q: string; a: string }[]).map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
