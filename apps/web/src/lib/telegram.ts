export function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

type Lead = {
  name: string;
  phone: string;
  product?: string;
  message?: string;
  locale: string;
  site: string;
};

export function formatTelegramLead(lead: Lead) {
  const now = new Date().toLocaleString("ro-MD", { timeZone: "Europe/Chisinau" });
  const lines = [
    "🏊 <b>IPOOLGO — Cerere nouă</b>",
    "",
    `👤 <b>Nume:</b> ${lead.name}`,
    `📞 <b>Telefon:</b> ${lead.phone}`,
  ];

  if (lead.product) lines.push(`📦 <b>Produs:</b> ${lead.product}`);
  if (lead.message) lines.push(`💬 <b>Mesaj:</b> ${lead.message}`);

  lines.push("", `🕐 ${now}`, `🌐 ${lead.site} / ${lead.locale}`);

  return lines.join("\n");
}
