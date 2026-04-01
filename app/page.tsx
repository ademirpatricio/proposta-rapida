import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 to-black text-white flex flex-col justify-between">

      {/* HERO */}
      <section className="flex-1 flex items-center px-6 py-20">
        <div className="max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT - COPY */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
              Pare de perder clientes com propostas mal feitas
            </h1>

            <p className="mt-4 text-zinc-400 text-lg">
              Crie propostas profissionais em minutos e impressione seus clientes sem esforço.
            </p>

            {/* TÓPICOS */}
            <div className="mt-6 space-y-4 text-sm">

              <div className="flex items-start gap-3">
                <span className="mt-1">⚡</span>
                <p className="text-zinc-300 leading-relaxed">
                  Crie propostas em menos de 2 minutos
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1">📄</span>
                <p className="text-zinc-300 leading-relaxed">
                  Gere um PDF profissional pronto para enviar
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1">💼</span>
                <p className="text-zinc-300 leading-relaxed">
                  Ideal para freelancers e pequenas agências
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1">🟢</span>
                <p className="text-zinc-300 leading-relaxed">
                  100% gratuito, sem cadastro
                </p>
              </div>

            </div>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href="/create"
                className="w-full text-center inline-block bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold text-lg hover:bg-emerald-500 transition-all"
              >
                Criar minha proposta agora
              </Link>

              <p className="text-xs text-zinc-500 mt-4 text-center">
                Sem cadastro. Sem complicação.
              </p>
            </div>
          </div>

          {/* RIGHT - PREVIEW */}
          <div className="max-w-full mx-auto">

            <p className="text-xs text-zinc-500 mb-2 text-center">
              Exemplo de proposta gerada
            </p>

            <div className="bg-white text-black p-14 rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.6)]">

              <div className="flex justify-between border-b pb-4">
                <div>
                  <h2 className="font-bold text-xl">
                    Proposta Comercial
                  </h2>
                  <p className="text-sm text-zinc-500">
                    Criação de site institucional
                  </p>
                </div>

                <div className="text-right text-sm">
                  <p className="text-zinc-500">Para</p>
                  <p className="font-medium">Empresa XYZ</p>
                </div>
              </div>

              <div className="mt-6 text-sm text-zinc-700">
                <p>
                  Desenvolvimento completo de um site moderno, responsivo e otimizado.
                </p>
              </div>

              <ul className="mt-6 space-y-2 text-sm">
                <li className="bg-zinc-100 p-2 rounded">Design UI/UX</li>
                <li className="bg-zinc-100 p-2 rounded">Desenvolvimento</li>
                <li className="bg-zinc-100 p-2 rounded">SEO básico</li>
              </ul>

              <div className="mt-8 p-4 bg-zinc-900 text-white rounded-xl flex justify-between">
                <span>R$ 2.500,00</span>
                <span>15 dias</span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-sm text-zinc-600 py-8 border-t border-zinc-800">
        ©2026{" "}
        <a
          href="https://malabaresmkt.com"
          target="_blank"
          className="underline hover:text-white"
        >
          Malabares MKT
        </a>{" "}
        • Feito com muito{" "}
        <span className="text-purple-500">❤</span> em Recife - PE
      </footer>

    </main>
  );
}