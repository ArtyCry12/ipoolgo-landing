export const CONTACT = {
  phone: "+37379689028",
  phoneDisplay: "+373 79 689 028",
  phoneLocal: "079689028",
  telegram: "saletoe",
  telegramUrl: "https://t.me/saletoe",
  viberUrl: "viber://chat?number=%2B37379689028",
  whatsappUrl: "https://wa.me/37379689028",
  email: "ipoolgoo@mail.ru",
} as const;

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ipoolgo-landing.vercel.app";

export const OCEAN = {
  950: "#03045E",
  800: "#023E8A",
  600: "#0077B6",
  500: "#0096C7",
  400: "#00B4D8",
  300: "#48CAE4",
  200: "#90E0EF",
  100: "#ADE8F4",
  50: "#CAF0F8",
  lime: "#B8FF3C",
} as const;
