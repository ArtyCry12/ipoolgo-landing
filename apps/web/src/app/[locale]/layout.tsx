import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MessengerFab } from "@/components/layout/MessengerFab";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { AudioProvider } from "@/components/providers/AudioProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import "../globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      languages: {
        ro: "/ro",
        ru: "/ru",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${manrope.variable} h-full`}>
      <head>
        <JsonLd type="Organization" />
      </head>
      <body className="min-h-full font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          <AudioProvider>
            <SmoothScrollProvider>
              <Header />
              <main className="min-h-screen">{children}</main>
              <Footer />
              <MessengerFab />
            </SmoothScrollProvider>
          </AudioProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
