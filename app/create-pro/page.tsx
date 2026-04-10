"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProposalPreview from "@/components/ProposalPreview";

function CreateProContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  // 🔐 PROTEÇÃO
  if (token !== "pro123") {
    return (
      <div className="min-h-screen flex items-center justify-center text-center p-6 bg-slate-100">
        <div>
          <h1 className="text-xl font-bold mb-4">
            Acesso restrito
          </h1>

          <p className="text-zinc-600 mb-4">
            Essa página é exclusiva para usuários PRO.
          </p>

          <a
            href="/pro"
            className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-xl mb-4"
          >
            Desbloquear acesso
          </a>

          <p className="text-sm text-zinc-500">
            Caso esteja com dúvidas ou problemas para acessar a versão PRO,{" "}
            <a
              href="https://wa.me/5581997278234?text=Olá!%20Comprei%20o%20Proposta%20Rápida%20PRO%20e%20não%20estou%20conseguindo%20acessar."
              target="_blank"
              className="underline text-emerald-600"
            >
              chama nosso suporte
            </a>.
          </p>
        </div>
      </div>
    );
  }

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

      <div className="p-6">
        <div className="max-w-6xl mx-auto">

          {/* LOGO */}
          <div className="flex justify-center items-center mb-8 no-print">
            <div className="flex items-center gap-2">
              <span className="text-xl">⚡</span>
              <span className="font-semibold tracking-tight">
                Proposta <span className="text-emerald-600">Rápida</span>
              </span>
            </div>
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
                      placeholder="Ex: Desenvolvimento completo..."
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
              </div>

            </div>

            {/* PREVIEW */}
            <div className="bg-white p-5 rounded-2xl border border-zinc-200 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
              <ProposalPreview data={form} hideWatermark />
            </div>

          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="text-center text-sm text-zinc-500 py-6 border-t border-zinc-200 no-print">
        ©2026{" "}
        <a
          href="https://malabaresmkt.com"
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

export default function Page() {
  return (
    <Suspense fallback={<div className="p-6">Carregando...</div>}>
      <CreateProContent />
    </Suspense>
  );
}