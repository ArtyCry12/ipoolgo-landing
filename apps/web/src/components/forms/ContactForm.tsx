"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { useAudio } from "@/components/providers/AudioProvider";

const schema = z.object({
  name: z.string().min(2),
  phone: z.string().min(6),
  product: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const t = useTranslations("contact");
  const { playSplash } = useAudio();
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    playSplash();
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setSent(true);
  }

  if (sent) {
    return (
      <p className="rounded-2xl border border-accent-lime/40 bg-ocean-800/40 p-6 text-center text-ocean-50">
        {t("formSuccess")}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="glass-card space-y-4 rounded-3xl p-8">
      <div>
        <label className="mb-1 block text-sm text-ocean-200">{t("formName")}</label>
        <input
          {...register("name")}
          className="w-full rounded-xl border border-ocean-400/30 bg-ocean-950/60 px-4 py-3 text-ocean-50 outline-none focus:border-ocean-300"
        />
        {errors.name && <p className="mt-1 text-xs text-red-400">Required</p>}
      </div>
      <div>
        <label className="mb-1 block text-sm text-ocean-200">{t("formPhone")}</label>
        <input
          {...register("phone")}
          type="tel"
          className="w-full rounded-xl border border-ocean-400/30 bg-ocean-950/60 px-4 py-3 text-ocean-50 outline-none focus:border-ocean-300"
        />
        {errors.phone && <p className="mt-1 text-xs text-red-400">Required</p>}
      </div>
      <div>
        <label className="mb-1 block text-sm text-ocean-200">{t("formProduct")}</label>
        <input
          {...register("product")}
          className="w-full rounded-xl border border-ocean-400/30 bg-ocean-950/60 px-4 py-3 text-ocean-50 outline-none focus:border-ocean-300"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm text-ocean-200">{t("formMessage")}</label>
        <textarea
          {...register("message")}
          rows={4}
          className="w-full rounded-xl border border-ocean-400/30 bg-ocean-950/60 px-4 py-3 text-ocean-50 outline-none focus:border-ocean-300"
        />
      </div>
      <Button type="submit" variant="primary" disabled={isSubmitting} className="w-full">
        {t("formSubmit")}
      </Button>
    </form>
  );
}
