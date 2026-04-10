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
    <div className="min-h-screen bg-slate-100 text-zinc-900 p-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        {/* FORM */}
        <div className="space-y-4 no-print">

          <input
            name="clientName"
            placeholder="Nome do cliente"
            onChange={handleChange}
            className="input"
          />

          <input
            name="projectName"
            placeholder="Nome do projeto"
            onChange={handleChange}
            className="input"
          />

          <textarea
            name="description"
            placeholder="Descrição"
            onChange={handleChange}
            className="input"
          />

          <textarea
            name="services"
            placeholder="Serviços (um por linha)"
            onChange={handleChange}
            className="input"
          />

          <input
            name="price"
            placeholder="Valor"
            value={form.price}
            onChange={handlePriceChange}
            className="input"
          />

          <input
            name="deadline"
            placeholder="Prazo"
            onChange={handleChange}
            className="input"
          />

          <input
            name="yourName"
            placeholder="Seu nome / empresa"
            onChange={handleChange}
            className="input"
          />

          <button
            onClick={handlePrint}
            className="bg-emerald-600 w-full px-4 py-3 rounded-xl text-white"
          >
            Baixar PDF
          </button>
        </div>

        {/* PREVIEW */}
        <ProposalPreview data={form} hideWatermark />
      </div>
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