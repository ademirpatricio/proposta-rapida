import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-8">
      <div className="max-w-4xl w-full text-center">

        {/* HEADLINE */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Crie propostas comerciais profissionais
          <br />
          em menos de 2 minutos
        </h1>

        {/* SUB */}
        <p className="mt-4 text-zinc-400 text-lg">
          Preencha, visualize e baixe um PDF pronto para enviar ao cliente.
        </p>

        {/* CTA */}
        <div className="mt-8">
          <Link
            href="/create"
            className="bg-white text-black px-6 py-3 rounded-xl font-semibold text-lg hover:opacity-90"
          >
            Criar proposta grátis
          </Link>
        </div>

        {/* BENEFÍCIOS */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-sm text-zinc-400">
          <div>
            ⚡ Rápido e simples
          </div>
          <div>
            📄 PDF profissional
          </div>
          <div>
            💼 Perfeito para freelancers
          </div>
        </div>

      </div>
    </main>
  );
}