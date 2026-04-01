"use client";

import { useState } from "react";
import ProposalPreview from "@/components/ProposalPreview";

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

  // =========================
  // FORMATADOR DE MOEDA
  // =========================
  function formatCurrency(value: string) {
    const number = value.replace(/\D/g, "");

    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(Number(number) / 100);
  }

  // =========================
  // HANDLER PADRÃO
  // =========================
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  // =========================
  // HANDLER DO PREÇO
  // =========================
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
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 to-black text-white p-6">
      <div className="max-w-6xl mx-auto">

        {/* HEADER 
        <div className="flex justify-between items-center mb-10">

            <h1 className="text-2xl font-semibold">
                Criar proposta comercial
            </h1>

        </div>*/}

        <div className="grid md:grid-cols-2 gap-10">

          {/* FORM */}
          <div className="space-y-6">

            {/* BLOCO 1 */}
            <div className="bg-zinc-900/60 backdrop-blur p-6 rounded-xl border border-zinc-800">
              <h2 className="text-sm text-zinc-400 mb-4">
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
                    autoFocus
                  />
                </div>

                <div>
                  <label className="text-xs text-zinc-500 mb-1 block">
                    Nome do projeto
                  </label>
                  <input
                    name="projectName"
                    placeholder="Ex: Criação de site"
                    onChange={handleChange}
                    className="input"
                  />
                </div>
              </div>
            </div>

            {/* BLOCO 2 */}
            <div className="bg-zinc-900/60 backdrop-blur p-6 rounded-xl border border-zinc-800">
              <h2 className="text-sm text-zinc-400 mb-4">
                Detalhes
              </h2>

              <div className="space-y-3">
                <div>
                  <label className="text-xs text-zinc-500 mb-1 block">
                    Descrição do projeto
                  </label>
                  <textarea
                    name="description"
                    placeholder="Explique o objetivo do projeto..."
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
                    placeholder="Um serviço por linha"
                    onChange={handleChange}
                    className="input"
                  />
                </div>
              </div>
            </div>

            {/* BLOCO 3 */}
            <div className="bg-zinc-900/60 backdrop-blur p-6 rounded-xl border border-zinc-800">
              <h2 className="text-sm text-zinc-400 mb-4">
                Valores
              </h2>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-zinc-500 mb-1 block">
                    Valor
                  </label>
                  <input
                    name="price"
                    placeholder="R$ 0,00"
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

             <div className="flex flex-col">
                <button
                onClick={handlePrint}
                className="bg-emerald-600 w-full px-4 py-6 rounded-lg font-medium hover:bg-emerald-500 transition"
                >
                Baixar PDF
                </button>

                <p className="text-xs text-zinc-500 mt-2 text-center">
                    Dica: desative "Cabeçalhos e rodapés" na impressão
                </p>
            </div>

          </div>

          {/* PREVIEW */}
          <div className="bg-white text-black p-8 rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
            <ProposalPreview data={form} />
          </div>

        </div>

      </div>
    </div>
  );
}