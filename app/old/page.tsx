import Link from "next/link";

export default function ProPage() {
  return (
    <main className="min-h-screen bg-slate-100 text-zinc-900 flex flex-col justify-between">

      {/* HERO */}
      <section className="flex-1 flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT - IMAGEM */}
          <div className="flex justify-center">
            <img
              src="/proposta-rapida-pro.jpg"
              alt="Empresária confiante"
              className="rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] object-cover h-[600px] w-full max-w-md"
            />
          </div>

          {/* RIGHT - CONTEÚDO */}
          <div className="text-center md:text-left">

            {/* LOGO */}
            <div className="flex justify-center md:justify-start items-center gap-2 mb-6">
              <span className="text-xl">⚡</span>
              <span className="font-semibold tracking-tight">
                Proposta <span className="text-emerald-600">Rápida</span>
              </span>
            </div>

            {/* HEADLINE */}
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              Deixe suas propostas com aparência profissional
            </h1>

            <p className="mt-4 text-zinc-600 text-lg">
              Remova a marca do PDF e envie propostas com mais credibilidade para seus clientes.
            </p>

            {/* BENEFÍCIOS */}
            <div className="mt-8 space-y-4">

              <div className="flex gap-3 items-start">
                <span>✨</span>
                <p>Remova a marca do PDF</p>
              </div>

              <div className="flex gap-3 items-start">
                <span>💼</span>
                <p>Mais profissionalismo na hora de enviar</p>
              </div>

              <div className="flex gap-3 items-start">
                <span>🚀</span>
                <p>Aumente suas chances de fechar contratos</p>
              </div>

            </div>

            {/* PREÇO */}
            <div className="mt-10">
              <p className="text-sm text-zinc-500">Pagamento único</p>
              <p className="text-4xl font-bold text-emerald-600">
                R$ 9,90
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="https://gex.goexplosion.com/link/checkout?utm=proposta-rapida-pro"
                className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-500 transition"
              >
                Comprar agora
              </a>

              <p className="text-xs text-zinc-500 mt-3">
                Acesso liberado imediatamente após o pagamento + envio por email
              </p>
            </div>

            {/* VOLTAR */}
            <div className="mt-10">
              <Link
                href="/create"
                className="text-sm underline text-zinc-600 hover:text-zinc-900"
              >
                Voltar para o gerador
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-2xl font-bold">
            Quem usa, recomenda
          </h2>

          <div className="mt-10 grid md:grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm text-left">
              <p className="text-sm text-zinc-700">
                “Minhas propostas ficaram muito mais profissionais. Já fechei dois clientes só melhorando isso.”
              </p>
              <p className="mt-4 text-xs text-zinc-500">
                — Ana, Designer Freelancer
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm text-left">
              <p className="text-sm text-zinc-700">
                “Antes eu mandava proposta no Word. Agora parece que tenho uma agência por trás.”
              </p>
              <p className="mt-4 text-xs text-zinc-500">
                — Lucas, Social Media
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm text-left">
              <p className="text-sm text-zinc-700">
                “Simples e direto. Em minutos já tenho uma proposta pronta pra enviar.”
              </p>
              <p className="mt-4 text-xs text-zinc-500">
                — Rafael, Desenvolvedor Freelancer
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA FINAL */}
      <section className="w-full bg-emerald-600 text-white py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">

          <h2 className="text-2xl font-bold">
            Comece a enviar propostas mais profissionais hoje
          </h2>

          <p className="mt-4 text-white/80">
            Leva menos de 1 minuto para melhorar a forma como seus clientes te enxergam.
          </p>

          <div className="mt-8">
            <a
              href="https://gex.goexplosion.com/link/checkout?utm=proposta-rapida-pro"
              className="inline-block bg-white text-emerald-600 px-10 py-5 rounded-xl font-semibold text-lg hover:bg-zinc-100 transition"
            >
              Quero remover a marca agora
            </a>
          </div>

        </div>
      </section>

      {/* FOOTER (AGORA VERDE) */}
      <footer className="text-center text-sm text-white py-6 bg-emerald-600 border-t border-white/20">
        ©2026{" "}
        <a
          href="https://malabares.com.br"
          target="_blank"
          className="underline hover:text-white"
        >
          Malabares MKT
        </a>{" "}
        • Feito com muito{" "}
        <span className="text-purple-300">❤</span> em Recife - PE
      </footer>

    </main>
  );
}