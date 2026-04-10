import Link from "next/link";

export default function ThanksPage() {
  return (
    <main className="min-h-screen bg-slate-100 text-zinc-900 flex flex-col justify-between">

      <section className="flex-1 flex items-center px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">

          {/* LOGO */}
          <div className="flex justify-center items-center gap-2 mb-6">
            <span className="text-xl">⚡</span>
            <span className="font-semibold tracking-tight">
              Proposta <span className="text-emerald-600">Rápida</span>
            </span>
          </div>

          {/* HEADLINE */}
          <h1 className="text-3xl font-bold">
            🎉 Compra confirmada!
          </h1>

          <p className="mt-4 text-zinc-600">
            Obrigado por adquirir o <strong>Proposta Rápida PRO</strong>.
            Seu acesso já está liberado 👇
          </p>

          {/* CTA PRINCIPAL */}
          <div className="mt-8">
            <a
              href="https://lab.malabares.com.br/create-pro?token=pro123"
              className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-500 transition"
            >
              Acessar versão PRO
            </a>
          </div>

          <p className="text-sm text-zinc-500 mt-3">
            Salve esse link para usar sempre que precisar
          </p>

          {/* INSTRUÇÃO */}
          <div className="mt-10 bg-white p-6 rounded-xl border border-zinc-200 text-left">
            <h2 className="font-semibold mb-2">
              Como usar:
            </h2>

            <ol className="text-sm text-zinc-600 space-y-2 list-decimal list-inside">
              <li>Acesse o link acima</li>
              <li>Preencha os dados da proposta</li>
              <li>Baixe o PDF sem marca</li>
            </ol>
          </div>

          {/* SUPORTE */}
          <div className="mt-10">
            <p className="text-sm text-zinc-600">
              Precisa de ajuda?
            </p>

            <a
              href="https://wa.me/5581997278234?text=Olá!%20Acabei%20de%20comprar%20o%20Proposta%20Rápida%20PRO%20e%20preciso%20de%20ajuda."
              target="_blank"
              className="text-emerald-600 underline text-sm"
            >
              Falar com suporte no WhatsApp
            </a>
          </div>

          {/* MALABARES */}
          <div className="mt-12 bg-emerald-600 text-white p-6 rounded-xl">
            <h2 className="font-semibold text-lg">
              Conheça a Malabares MKT
            </h2>

            <p className="text-sm mt-2 text-white/90">
              Somos uma agência criativa focada em ajudar negócios a crescer com estratégia, design e presença digital.
            </p>

            <div className="mt-4 flex justify-center gap-4 text-sm">
              <a
                href="https://malabares.com.br"
                target="_blank"
                className="underline"
              >
                Acessar site
              </a>

              <a
                href="https://wa.me/5581997278234"
                target="_blank"
                className="underline"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* VOLTAR */}
          <div className="mt-10">
            <Link
              href="/"
              className="text-xs text-zinc-500 underline"
            >
              Voltar para o início
            </Link>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-sm text-zinc-500 py-6 border-t border-zinc-200">
        ©2026 Malabares MKT • Feito com muito{" "}
        <span className="text-purple-500">❤</span> em Recife - PE
      </footer>

    </main>
  );
}