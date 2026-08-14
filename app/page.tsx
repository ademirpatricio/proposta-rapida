import Link from "next/link";
import EmailCapture from "@/components/EmailCapture";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface text-ink flex flex-col">

      {/* TOP BAR */}
      <div className="w-full bg-dark text-white text-sm py-3 px-4 text-center">
        <span>✨ Remova a marca d&apos;água com o Proposta Rápida PRO</span>
        {" "}
        <Link href="/pro" className="underline font-medium ml-2 text-brand-on-dark hover:text-brand-light transition-colors">
          Conhecer versão PRO →
        </Link>
      </div>

      {/* NAV */}
      <nav className="w-full px-6 py-5 max-w-5xl mx-auto flex items-center justify-between">
        <img src="/logo-light.svg" alt="Proposta Rápida" className="h-8 w-auto" />
        <Link
          href="/pro"
          className="text-xs font-bold uppercase tracking-wide text-brand border-2 border-brand rounded-md px-4 py-2 hover:bg-brand hover:text-white transition-all"
        >
          Versão PRO
        </Link>
      </nav>

      {/* HERO */}
      <section className="flex-1 px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* LEFT */}
          <div>

            {/* BADGE */}
            <div className="inline-flex items-center gap-2 text-brand-dark text-xs font-semibold mb-6">
              <span className="w-1.5 h-1.5 bg-brand rounded-full inline-block animate-pulse"></span>
              100% gratuito — sem cadastro
            </div>

            <h1 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight text-ink">
              Pare de perder clientes com{" "}
              <span className="text-brand">propostas mal feitas</span>
            </h1>

            <p className="mt-4 text-ink-muted text-lg leading-relaxed">
              Crie propostas profissionais em minutos e impressione seus clientes sem esforço.
            </p>

            {/* BULLETS */}
            <div className="mt-8 space-y-3">
              {[
                { icon: "⚡", text: "Proposta pronta em menos de 2 minutos" },
                { icon: "📄", text: "PDF profissional pronto para enviar" },
                { icon: "💼", text: "Ideal para freelancers e pequenas agências" },
                { icon: "✨", text: "Versão PRO remove a marca d'água do PDF" },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <span className="text-base w-6 text-center shrink-0">{icon}</span>
                  <p className="text-ink-secondary text-sm">{text}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Link
                href="/create"
                className="inline-flex items-center justify-center gap-2 w-full bg-brand text-white px-6 py-4 rounded-btn font-semibold text-base hover:bg-brand-hover transition-all shadow-sm shadow-brand-light"
              >
                Criar minha proposta agora
                <span aria-hidden>→</span>
              </Link>

              <div className="flex items-center justify-center gap-3 mt-5">
                <div className="h-px bg-border-subtle flex-1" />
                <Link href="/pro" className="text-xs text-ink-subtle hover:text-ink-secondary transition-colors whitespace-nowrap">
                  Quer remover a marca? Conheça o PRO
                </Link>
                <div className="h-px bg-border-subtle flex-1" />
              </div>
            </div>

          </div>

          {/* RIGHT - PREVIEW */}
          <div>
            <p className="text-xs text-ink-subtle mb-3 text-center font-medium uppercase tracking-widest">
              Exemplo de proposta gerada
            </p>

            <div className="bg-white text-black p-10 rounded-card shadow-card border border-border-subtle ring-1 ring-zinc-900/5">

              <div className="flex justify-between border-b border-border-subtle pb-5">
                <div>
                  <h2 className="font-bold text-lg text-ink">Proposta Comercial</h2>
                  <p className="text-xs text-ink-subtle mt-0.5">Criação de site institucional</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-ink-subtle">Para</p>
                  <p className="font-semibold text-sm text-ink">Empresa XYZ</p>
                </div>
              </div>

              <p className="mt-5 text-xs text-ink-muted leading-relaxed">
                Desenvolvimento completo de um site moderno, responsivo e otimizado para conversão.
              </p>

              <ul className="mt-4 space-y-2">
                {["Design UI/UX", "Desenvolvimento", "SEO básico"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-ink-secondary bg-surface px-3 py-2 rounded-md">
                    <span className="w-1.5 h-1.5 bg-brand-on-dark rounded-full shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 p-4 bg-dark text-white rounded-btn flex justify-between items-center">
                <div>
                  <p className="text-[10px] text-ink-subtle mb-0.5">Investimento</p>
                  <p className="font-bold text-base">R$ 2.500,00</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-ink-subtle mb-0.5">Prazo</p>
                  <p className="font-semibold text-sm">15 dias</p>
                </div>
              </div>

              <p className="text-[9px] text-ink-faint mt-4 text-center tracking-widest uppercase">
                Gerado com Proposta Rápida
              </p>

            </div>
          </div>

        </div>
      </section>

      {/* EMAIL CAPTURE */}
      <EmailCapture />

      {/* FOOTER */}
      <footer className="bg-brand text-center text-xs text-white py-8">
        ©2026{" "}
        <a
          href="https://malabares.com.br"
          target="_blank"
          className="underline hover:text-brand-light transition-colors"
        >
          Malabares MKT
        </a>
        {" "}• Feito com muito{" "}
        <span className="text-accent-2">❤</span> em Recife - PE
      </footer>

    </main>
  );
}
