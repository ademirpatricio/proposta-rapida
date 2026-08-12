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
    <section
      className="w-full py-16 px-6 relative overflow-hidden"
      style={{
        backgroundImage: `url("/bg-email.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-xl mx-auto text-center relative z-10">

        <p className="text-brand-light text-xs font-semibold uppercase tracking-widest mb-3">
          Para freelancers e agências
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-white">
          Dicas para fechar mais propostas
        </h2>

        <p className="mt-3 text-brand-light/70 text-sm leading-relaxed">
          Conteúdo prático sobre como apresentar, precificar e fechar propostas. Direto ao ponto, sem spam.
        </p>

        {status === "success" ? (
          <div className="mt-8 inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-5 py-3 rounded-btn text-sm font-medium">
            ✅ Boa! Você está na lista.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-btn bg-white/10 border border-white/20 text-white text-sm placeholder-white/40 outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-white text-brand-dark px-6 py-3 rounded-btn font-bold text-sm uppercase tracking-wide hover:bg-brand-bg transition-all disabled:opacity-60 whitespace-nowrap"
            >
              {status === "loading" ? "Enviando..." : "Quero receber"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="mt-3 text-red-300 text-xs">
            Algo deu errado. Tenta de novo em instantes.
          </p>
        )}

        <p className="mt-4 text-xs text-white/30">
          Sem spam. Cancele quando quiser.
        </p>

      </div>
    </section>
  );
}
