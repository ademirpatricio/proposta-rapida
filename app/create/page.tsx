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

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">
          Criar proposta
        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          {/* FORM */}
          <div className="space-y-4">

            <input
              name="clientName"
              placeholder="Nome do cliente"
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-800"
            />

            <input
              name="projectName"
              placeholder="Nome do projeto"
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-800"
            />

            <textarea
              name="description"
              placeholder="Descrição"
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-800"
            />

            <textarea
              name="services"
              placeholder="Serviços (um por linha)"
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-800"
            />

            <input
              name="price"
              placeholder="Valor"
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-800"
            />

            <input
              name="deadline"
              placeholder="Prazo"
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-800"
            />

            <input
              name="yourName"
              placeholder="Seu nome / empresa"
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-800"
            />
            
            <div className="flex justify-end mb-4">
                <button
                    onClick={handlePrint}
                    className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:opacity-90"
                >
                    Baixar PDF
                </button>
            </div>  

          </div>

          {/* PREVIEW PLACEHOLDER */}
          <ProposalPreview data={form} />

        </div>
      </div>
    </div>
  );
}

function handlePrint() {
  window.print();
}