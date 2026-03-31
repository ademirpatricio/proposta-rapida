import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-8">
      <div className="max-w-4xl w-full text-center">

        {/* HEADLINE */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Pare de perder clientes com propostas mal feitas
        </h1>

        {/* SUB */}
        <p className="mt-4 text-zinc-400 text-lg">
          Crie propostas profissionais em minutos e impressione seus clientes.
        </p>

        {/* CTA */}
        <div className="mt-8">
          <Link
            href="/create"
            className="bg-white text-black px-6 py-3 rounded-xl font-semibold text-lg hover:opacity-90"
          >
            Criar minha proposta agora
          </Link>
          <p className="text-xs text-zinc-500 mt-2">
  Sem cadastro. Sem complicação.
</p>
        </div>
        

        <div className="mt-12 bg-white text-black p-6 rounded-2xl shadow-2xl max-w-2xl mx-auto">
  <h2 className="text-lg font-semibold mb-2">
    Exemplo de proposta
  </h2>

  <p className="text-sm text-zinc-600">
    Cliente: Empresa XYZ  
  </p>
  <p className="text-sm text-zinc-600">
    Projeto: Criação de site institucional
  </p>

  <div className="mt-4 text-sm">
    <p className="font-medium">Serviços:</p>
    <ul className="list-disc ml-5">
      <li>Design UI/UX</li>
      <li>Desenvolvimento</li>
      <li>Otimização SEO</li>
    </ul>
  </div>

  <div className="mt-4 font-bold text-lg">
    R$ 2.500,00
  </div>
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