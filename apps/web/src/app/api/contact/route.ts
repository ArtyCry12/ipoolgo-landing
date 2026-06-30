import { escapeHtml, formatTelegramLead } from "@/lib/telegram";

export type ContactPayload = {
  name: string;
  phone: string;
  product?: string;
  message?: string;
  locale?: string;
  website?: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactPayload & { _hp?: string };

    if (body._hp) {
      return Response.json({ ok: true });
    }

    const name = body.name?.trim();
    const phone = body.phone?.trim();

    if (!name || name.length < 2 || !phone || phone.length < 6) {
      return Response.json({ ok: false, error: "Invalid input" }, { status: 400 });
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      console.error("[contact] Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID");
      return Response.json({ ok: false, error: "Server not configured" }, { status: 500 });
    }

    const text = formatTelegramLead({
      name: escapeHtml(name),
      phone: escapeHtml(phone),
      product: body.product ? escapeHtml(body.product.trim()) : undefined,
      message: body.message ? escapeHtml(body.message.trim()) : undefined,
      locale: body.locale ?? "ro",
      site: process.env.NEXT_PUBLIC_SITE_URL ?? "ipoolgo-landing",
    });

    const tgRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });

    const tgJson = await tgRes.json();

    if (!tgRes.ok || !tgJson.ok) {
      console.error("[contact] Telegram error:", tgJson);
      return Response.json(
        { ok: false, error: "Telegram delivery failed" },
        { status: 502 },
      );
    }

    return Response.json({ ok: true });
  } catch (e) {
    console.error("[contact]", e);
    return Response.json({ ok: false, error: "Internal error" }, { status: 500 });
  }
}
