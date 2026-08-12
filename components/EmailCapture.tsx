"use client";

import { useState } from "react";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="w-full bg-white border-t border-zinc-200 py-16 px-6">
      <div className="max-w-xl mx-auto text-center">

        <span className="text-2xl">📬</span>

        <h2 className="mt-3 text-2xl font-bold tracking-tight text-zinc-900">
          Dicas para fechar mais propostas
        </h2>

        <p className="mt-2 text-zinc-500 text-sm leading-relaxed">
          Receba conteúdo prático sobre como apresentar, precificar e fechar propostas comerciais. Sem spam.
        </p>

        {status === "success" ? (
          <p className="mt-8 text-emerald-600 font-medium text-sm">
            ✅ Boa! Você está na lista.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl border border-zinc-200 text-sm outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-emerald-500 transition-all disabled:opacity-60 whitespace-nowrap"
            >
              {status === "loading" ? "Enviando..." : "Quero receber"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="mt-3 text-red-500 text-xs">
            Algo deu errado. Tenta de novo em instantes.
          </p>
        )}

        <p className="mt-4 text-xs text-zinc-400">
          Sem spam. Cancele quando quiser.
        </p>

      </div>
    </section>
  );
}
