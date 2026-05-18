"use client";

import { useState } from "react";
import ProposalPreview from "@/components/ProposalPreview";
import Link from "next/link";

export default function CreatePage() {
  const [form, setForm] = useState({
    clientName: "",
    projectName: "",
    description: "",
    services: "",
    price: "",
    deadline: "",
    yourName: "",
  });

  function formatCurrency(value: string) {
    const number = value.replace(/\D/g, "");

    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(Number(number) / 100);
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handlePriceChange(e: React.ChangeEvent<HTMLInputElement>) {
    const formatted = formatCurrency(e.target.value);

    setForm({
      ...form,
      price: formatted,
    });
  }

  function handlePrint() {
    window.print();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 text-zinc-900 flex flex-col justify-between">

      {/* TOP BAR PRO */}
      <div className="w-full bg-emerald-600 text-white text-sm py-2 px-4 text-center no-print">
        ✨ Remova a marca do PDF com o PRO{" "}
        <Link href="/pro" className="underline font-medium ml-2">
          Ver versão PRO
        </Link>
      </div>

      <div className="p-6">
        <div className="max-w-6xl mx-auto">

          {/* LOGO + PRO */}
          <div className="flex justify-center items-center gap-4 mb-8 no-print">
            <div className="flex items-center gap-2">
              <span className="text-xl">⚡</span>
              <span className="font-semibold tracking-tight">
                Proposta <span className="text-emerald-600">Rápida</span>
              </span>
            </div>

            <Link
              href="/pro"
              className="text-xs text-emerald-600 hover:underline"
            >
              Versão PRO
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* FORM */}
            <div className="space-y-4 no-print">

              {/* BLOCO 1 */}
              <div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm">
                <h2 className="text-xs text-zinc-500 mb-3">
                  Informações básicas
                </h2>

                <div className="grid grid-cols-2 gap-3">

                  <div>
                    <label className="text-xs text-zinc-500 mb-1 block">
                      Nome do cliente
                    </label>
                    <input
                      name="clientName"
                      placeholder="Ex: Empresa XPTO"
                      onChange={handleChange}
                      className="input"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-zinc-500 mb-1 block">
                      Nome do projeto
                    </label>
                    <input
                      name="projectName"
                      placeholder="Ex: Criação de site institucional"
                      onChange={handleChange}
                      className="input"
                    />
                  </div>

                </div>
              </div>

              {/* BLOCO 2 */}
              <div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm">
                <h2 className="text-xs text-zinc-500 mb-3">
                  Detalhes
                </h2>

                <div className="space-y-3">

                  <div>
                    <label className="text-xs text-zinc-500 mb-1 block">
                      Descrição
                    </label>
                    <textarea
                      name="description"
                      placeholder="Ex: Desenvolvimento completo de um site moderno, responsivo e otimizado."
                      onChange={handleChange}
                      className="input"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-zinc-500 mb-1 block">
                      Serviços
                    </label>
                    <textarea
                      name="services"
                      placeholder={`Ex: Design UI/UX\nDesenvolvimento\nSEO básico`}
                      onChange={handleChange}
                      className="input"
                    />
                  </div>

                </div>
              </div>

              {/* BLOCO 3 */}
              <div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm">
                <h2 className="text-xs text-zinc-500 mb-3">
                  Valores
                </h2>

                <div className="grid grid-cols-2 gap-3">

                  <div>
                    <label className="text-xs text-zinc-500 mb-1 block">
                      Valor
                    </label>
                    <input
                      name="price"
                      placeholder="Ex: R$ 2.500,00"
                      value={form.price}
                      onChange={handlePriceChange}
                      className="input"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-zinc-500 mb-1 block">
                      Prazo
                    </label>
                    <input
                      name="deadline"
                      placeholder="Ex: 15 dias"
                      onChange={handleChange}
                      className="input"
                    />
                  </div>

                </div>

                <div className="mt-3">
                  <label className="text-xs text-zinc-500 mb-1 block">
                    Seu nome / empresa
                  </label>
                  <input
                    name="yourName"
                    placeholder="Ex: Malabares MKT"
                    onChange={handleChange}
                    className="input"
                  />
                </div>
              </div>

              {/* BOTÃO */}
              <div className="no-print">
                <button
                  onClick={handlePrint}
                  className="bg-emerald-600 w-full px-4 py-4 rounded-xl font-semibold text-white hover:bg-emerald-500 transition"
                >
                  Baixar PDF
                </button>

                <p className="text-xs text-zinc-500 text-center mt-2">
                  Dica: desative "Cabeçalhos e rodapés" na impressão
                </p>

                {/* PRO CTA */}
                <p className="text-xs text-center mt-3 text-zinc-500">
                  Quer remover a marca do PDF?{" "}
                  <Link href="/pro" className="underline text-emerald-600">
                    Conheça o PRO
                  </Link>
                </p>
              </div>

            </div>

            {/* PREVIEW */}
            <div className="bg-white p-5 rounded-2xl border border-zinc-200 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
              <ProposalPreview data={form} />
            </div>

          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="text-center text-sm text-zinc-500 py-6 border-t border-zinc-200 no-print">
        ©2026{" "}
        <a
          href="https://malabares.com.br"
          target="_blank"
          className="underline hover:text-zinc-900"
        >
          Malabares MKT
        </a>{" "}
        • Feito com muito{" "}
        <span className="text-purple-500">❤</span> em Recife - PE
      </footer>

    </div>
  );
}