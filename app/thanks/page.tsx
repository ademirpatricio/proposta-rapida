const PRO_URL =
  "https://propostarapida.malabares.com.br/create-pro?token=pro123";

const steps = [
  {
    num: "01",
    title: "Acesse o gerador PRO",
    desc: "Use o link acima — salve nos seus favoritos para usar sempre que precisar.",
  },
  {
    num: "02",
    title: "Preencha os dados da proposta",
    desc: "Nome do cliente, escopo, valor e prazo. Leva menos de dois minutos.",
  },
  {
    num: "03",
    title: "Baixe o PDF limpo",
    desc: "Sem marca d'água. Pronto para enviar e impressionar.",
  },
];

function ArrowRight({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M2.5 8h10M9 4.5 12.5 8 9 11.5"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ThanksPage() {
  return (
    <main className="bg-page">

      {/* CONFIRMAÇÃO */}
      <section className="px-4 pt-4 lg:px-6 lg:pt-8">
        <div className="relative overflow-hidden rounded-panel bg-brand-deep text-ink-inverse">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.90] mix-blend-screen"
            style={{
              backgroundImage: "url('/bg-hero.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* nav */}
          <div className="relative mx-auto flex max-w-[1240px] items-center px-6 py-5 lg:pl-8 lg:py-6">
            <img
              src="/logo-dark-mobile.svg"
              alt="Proposta Rápida"
              className="block h-8 w-auto lg:hidden"
            />
            <img
              src="/logo-dark.svg"
              alt="Proposta Rápida"
              className="hidden h-8 w-auto lg:block"
            />
          </div>

          <div className="relative mx-auto max-w-[760px] px-6 pb-12 pt-6 text-center lg:px-11">
            <span className="text-[13px] font-semibold uppercase tracking-[0.20em] text-brand-on-dark">
              Compra confirmada
            </span>

            <h1 className="mt-3 text-3xl font-bold leading-[1.06] tracking-tight md:text-4xl">
              Seu acesso PRO está liberado.
            </h1>

            <a
              href={PRO_URL}
              className="mt-6 inline-flex min-h-[52px] items-center gap-3 rounded-pill
              bg-brand px-7 py-3.5 text-[16px] font-semibold text-ink-on-brand transition
              hover:-translate-y-px hover:bg-brand-on-dark hover:text-brand-deep
              focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-on-dark/45"
            >
              Acessar versão PRO
              <ArrowRight className="size-[16px]" />
            </a>

            <p className="mt-3 text-sm text-ink-faint">
              Salve esse link — é seu acesso permanente
            </p>
          </div>
        </div>
      </section>

      {/* COMO USAR */}
      <section className="mx-auto max-w-[1240px] px-6 py-16 lg:px-11">
        <div className="mx-auto max-w-[680px]">
          <span className="text-[13px] font-semibold uppercase tracking-[0.16em] text-brand">
            Como usar
          </span>
          <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight md:text-[30px]">
            Três passos e sua proposta está pronta.
          </h2>

          <div className="mt-8 flex flex-col divide-y divide-border">
            {steps.map((step) => (
              <div key={step.num} className="flex items-baseline gap-5 py-4">
                <span className="shrink-0 text-sm font-bold tracking-tight text-brand opacity-40">
                  {step.num}
                </span>
                <div>
                  <p className="font-semibold text-ink">{step.title}</p>
                  <p className="mt-0.5 text-[15px] leading-relaxed text-ink-secondary">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <a
              href={PRO_URL}
              className="inline-flex min-h-[52px] items-center gap-2.5 rounded-pill bg-brand
              px-6 py-3.5 font-semibold text-ink-on-brand transition
              hover:-translate-y-px hover:bg-brand-hover"
            >
              Acessar versão PRO
              <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER + SUPORTE */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-ink-muted lg:px-11">
          <p>
            Dúvida ou problema com o acesso?{" "}
            <a
              href="https://wa.me/5581997278234?text=Olá!%20Acabei%20de%20comprar%20o%20Proposta%20Rápida%20PRO%20e%20preciso%20de%20ajuda."
              target="_blank"
              className="font-bold text-brand underline underline-offset-2 hover:text-brand-deep"
            >
              Falar com suporte no WhatsApp
            </a>
          </p>
          <p>
            ©2026{" "}
            <a
              href="https://malabares.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand hover:text-brand-deep"
            >
              Malabares MKT
            </a>{" "}
            • Feito com muito <span className="text-brand">♥</span> em Recife - PE
          </p>
        </div>
      </footer>

    </main>
  );
}
