import Image from "next/image";

const CHECKOUT_URL =
  "https://gex.goexplosion.com/link/checkout?utm=proposta-rapida-pro";

const PRECO = "R$ 9,90";

const benefits = [
  "PDF limpo e profissional",
  "Sem marca d'água da plataforma",
  "Mais credibilidade na apresentação",
  "Mais chances de fechar contratos",
  "Melhor percepção de valor",
  "Pagamento único e acesso imediato",
];

const audiences = [
  "Freelancers",
  "Designers",
  "Social Medias",
  "Gestores de Tráfego",
  "Agências",
  "Consultores",
  "Prestadores de Serviço",
  "Profissionais que enviam propostas",
];

const guarantees = [`Pagamento único de ${PRECO}`, "Acesso imediato", "Sem mensalidade"];

const faqs = [
  {
    question: "O que eu recebo ao comprar?",
    answer:
      "Você libera a versão PRO da Proposta Rápida e pode gerar PDFs sem marca d'água, com aparência premium e muito mais profissional.",
  },
  {
    question: "O pagamento é recorrente?",
    answer:
      "Não. O pagamento é único, sem mensalidade e sem cobrança recorrente.",
  },
  {
    question: "Como funciona o acesso?",
    answer:
      "Após a confirmação do pagamento, seu acesso é liberado imediatamente e o link chega via email. Mas qualquer dúvida é só entrar em contato com a gente.",
  },
  {
    question: "Posso usar em quantas propostas eu quiser?",
    answer:
      "Sim. Depois da liberação da versão PRO, você pode utilizar normalmente com o link enviado por email. Lembrando que qualquer dúvida com o acesso é só entrar em contato com a gente. Nossos canais de atendimento estão aqui no site.",
  },
];

/* ---------- ícones ---------- */

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

function CheckCircle({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth={1.4} />
      <path
        d="M5 8.2 7 10.2l4-4.4"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Check({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3.5 8.4 6.4 11.3 12.5 4.9"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Chevron({ className = "size-4.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M4 6.2 8 10.2l4-4"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Traço decorativo do hero — fica na coluna da foto para colapsar junto com ela. */
function HeroStroke() {
  return (
    <svg
      viewBox="0 0 520 620"
      fill="none"
      aria-hidden="true"
      className="pointer-events-none absolute bottom-0 right-[-4%] z-0 h-auto w-[108%] max-w-[560px] opacity-55"
    >
      <path
        d="M262 26C126 26 34 118 34 254c0 96 54 158 148 186 44 13 62 34 62 74 0 44-30 66-84 66"
        stroke="var(--color-brand-on-dark)"
        strokeWidth={2.5}
        strokeLinecap="round"
      />
      <path
        d="M330 468c88-36 138-112 138-214C468 122 392 44 286 30"
        stroke="var(--color-brand)"
        strokeWidth={2.5}
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ---------- página ---------- */

export default function PropostaRapidaProPage() {
  return (
    <main className="bg-page">

      {/* HERO */}
      <section className="px-4 pt-4 lg:px-6 lg:pt-8 ">
        <div className="relative overflow-hidden rounded-panel bg-brand-deep text-ink-inverse">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.90] mix-blend-screen" style={{ backgroundImage: "url('/bg-hero.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />

          {/* nav */}
          <div className="relative mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-6 py-5 lg:pl-8 lg:pt-12">
            <img src="/logo-dark-mobile.svg" alt="Proposta Rápida" className="block h-8 w-auto lg:hidden" />
            <img src="/logo-dark.svg" alt="Proposta Rápida" className="hidden h-8 w-auto lg:block" />
            <a
              href={CHECKOUT_URL}
              className="inline-flex items-center gap-2 rounded-pill bg-brand-on-dark px-5 py-3 
              text-sm md:text-md font-semibold text-brand-deep transition hover:-translate-y-px hover:bg-canvas"
            >
              Quero a versão PRO
              <ArrowRight className="size-3.5" />
            </a>
          </div>

          <div className="relative mx-auto grid max-w-[1240px] items-end gap-10 px-6 lg:grid-cols-2 lg:px-8">

            <div className="flex flex-col gap-6 pb-16 pt-10 lg:pt-14">
              <span className="text-[13px] font-semibold uppercase tracking-[0.20em] text-brand-on-dark">
                Proposta Rápida PRO
              </span>

              <h1 className="max-w-[13ch] text-4xl font-bold leading-[1.06] tracking-tight md:text-5xl lg:text-[45px]">
                Sua proposta está te fazendo perder clientes.
                <span className="text-brand-on-dark"> E você nem percebe.</span>
              </h1>

              <p className="max-w-[34ch] text-xl font-semibold leading-snug text-surface">
                Não adianta ter um serviço incrível se sua proposta parece feita às pressas.
              </p>
              <p className="max-w-[42ch] text-[17px] font-light leading-relaxed text-ink-on-dark">
                Remova a marca d&apos;água, gere PDFs limpos e apresente seu serviço com mais valor.
              </p>

              <a
                href={CHECKOUT_URL}
                className="inline-flex min-h-[60px] items-center gap-3 self-start rounded-pill
                bg-brand px-8 py-4 text-[17px] font-semibold text-ink-on-brand transition 
                hover:-translate-y-px hover:bg-brand-on-dark hover:text-brand-deep focus-visible:outline-none 
                focus-visible:ring-3 focus-visible:ring-brand-on-dark/45"
              >
                Quero minha versão PRO agora
                <ArrowRight className="size-[17px]" />
              </a>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-1">
                {guarantees.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2.5 text-sm text-ink-faint"
                  >
                    <CheckCircle className="size-[17px] shrink-0 text-brand-on-dark" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative min-h-[480px] self-end">
              <HeroStroke />
              <Image
                src="/proposta-rapida-pro.jpg"
                alt="Profissional usando a Proposta Rápida"
                width={520}
                height={560}
                priority
                className="relative z-10 ml-auto block h-[560px] w-full max-w-[520px] rounded-t-arch object-cover object-[50%_12%]"
              />

              <div className="absolute bottom-14 left-1/2 z-20 flex w-[85%] max-w-[320px] -translate-x-1/2 flex-col gap-3.5 rounded-card-lg bg-canvas p-5 text-ink shadow-card lg:left-0 lg:w-auto lg:translate-x-0">
                <p className="text-[15px] leading-relaxed text-ink-secondary">
                  &quot;Depois que tirei a marca d&apos;água, comecei a ser levado muito mais a sério.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <Image
                    src="/proposta-rapida-pro.jpg"
                    alt="João Silva"
                    width={38}
                    height={38}
                    className="size-9.5 rounded-pill object-cover object-[50%_15%]"
                  />
                  <div>
                    <p className="text-sm font-semibold">João Silva</p>
                    <p className="text-xs text-ink-muted">Designer Freelancer</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="mx-auto max-w-[1240px] px-6 py-24 lg:px-11">
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-[72px]">

          <div className="flex max-w-[38ch] flex-col gap-5">
            <span className="text-[13px] font-semibold uppercase tracking-[0.16em] text-brand">
              O que muda
            </span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-[40px]">
              O que muda quando sua proposta parece{" "}
              <span className="mark-brand">profissional</span>?
            </h2>
            <p className="text-[17px] leading-relaxed text-ink-secondary">
              Pequenos detalhes que fazem o cliente te enxergar como a melhor escolha.
            </p>
            <a
              href={CHECKOUT_URL}
              className="mt-1.5 inline-flex min-h-[52px] items-center gap-2.5 self-start rounded-pill bg-brand px-6 py-3.5 font-semibold text-ink-on-brand transition hover:-translate-y-px hover:bg-brand-hover"
            >
              Liberar minha versão PRO
              <ArrowRight />
            </a>
          </div>

          <div className="grid gap-x-11">
            {benefits.map((text) => (
              <div key={text} className="flex items-start gap-3.5 py-4">
                <span className="mt-px flex size-6.5 shrink-0 items-center justify-center rounded-pill bg-brand-light text-brand">
                  <Check />
                </span>
                <p className="text-[17px] font-medium leading-snug text-ink">{text}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA + PREÇO */}
      <section className="px-4">
        <div className="relative overflow-hidden rounded-panel bg-brand-deep text-ink-inverse">
          <div className="mx-auto grid max-w-[1240px] items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:px-11">

            <div className="flex max-w-[50ch] flex-col gap-5">
              <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-[42px]">
                Sua proposta pode estar te fazendo parecer{" "}
                <span className="text-brand-on-dark">menos profissional</span>.
              </h2>
              <p className="text-[19px] font-medium leading-snug text-surface">
                E isso custa clientes. Antes mesmo da conversa começar.
              </p>
              <p className="leading-loose text-ink-on-dark">
                Quando sua proposta parece premium, seu preço passa a fazer sentido e o cliente chega mais preparado para fechar.
              </p>
            </div>

            <div
              id="comprar"
              className="flex w-full max-w-[420px] flex-col rounded-[24px] bg-canvas p-8 text-ink lg:justify-self-end"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-semibold text-brand">Versão PRO liberada por</p>
                <span className="rounded-pill bg-brand-light px-3.5 py-1.5 text-xs font-semibold text-brand">
                  acesso imediato
                </span>
              </div>
              <p className="mt-3.5 text-7xl font-bold leading-none tracking-tight">{PRECO}</p>
              <p className="mt-2.5 text-sm text-ink-muted">Pagamento único • sem mensalidade</p>

              <a
                href={CHECKOUT_URL}
                className="mt-7 flex min-h-[58px] items-center justify-center gap-2.5 rounded-pill bg-brand 
                px-6 py-4 text-[13px] md:text-[17px] font-semibold text-ink-on-brand transition hover:bg-brand-hover 
                focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand/25"
              >
                Quero minha proposta profissional
                <ArrowRight />
              </a>

              <p className="mt-3.5 text-center text-xs text-ink-subtle">
                Liberação imediata após o pagamento
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* AUDIÊNCIAS */}
      <section className="mx-auto max-w-[1000px] px-6 pb-21 pt-23 text-center lg:px-11">
        <span className="text-[13px] font-semibold uppercase tracking-[0.16em] text-brand">
          Para quem é
        </span>
        <h2 className="mt-4.5 text-3xl font-bold leading-tight tracking-tight md:text-[38px]">
          Ideal para quem quer parecer <span className="mark-brand">profissional</span>
        </h2>
        <p className="mt-3.5 text-[17px] leading-relaxed text-ink-secondary">
          Se você envia propostas, isso foi feito pra você.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {audiences.map((text) => (
            <span
              key={text}
              className="inline-flex items-center rounded-pill border border-border-chip bg-canvas px-5.5 py-3 font-medium text-ink transition hover:border-brand-on-dark hover:bg-surface-mint"
            >
              {text}
            </span>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-canvas px-4 py-24">
        <div className="mx-auto grid max-w-[1240px] items-start gap-10 px-2 lg:grid-cols-2 lg:px-8">

          <div className="flex max-w-[35ch] flex-col gap-5">
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-[40px]">
              Dúvidas frequentes
            </h2>
            <p className="text-[17px] leading-relaxed text-ink-secondary">
              Ainda ficou com dúvida? Nosso time responde rápido e te ajuda a liberar o acesso.
            </p>
            <a
              href={CHECKOUT_URL}
              className="mt-1 inline-flex min-h-[52px] items-center gap-2.5 self-start rounded-pill bg-brand-on-dark px-6 py-3.5 font-semibold text-brand-deep transition hover:-translate-y-px hover:bg-brand hover:text-ink-on-brand"
            >
              Entrar em contato
              <ArrowRight />
            </a>
          </div>

          <div className="flex flex-col gap-3.5">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-[18px] border border-border-brand bg-canvas px-8 py-5 transition hover:border-brand-on-dark hover:shadow-card"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[17px] font-semibold text-brand-deep">
                  {faq.question}
                  <span className="shrink-0 text-brand transition-transform group-open:rotate-180">
                    <Chevron />
                  </span>
                </summary>
                <p className="mt-4 leading-loose text-ink-secondary">{faq.answer}</p>
              </details>
            ))}
          </div>

        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-4 pb-4">
        <div className="relative overflow-hidden rounded-panel bg-brand text-ink-on-brand">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[1] mix-blend" style={{ backgroundImage: "url('/bg-cta.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />

          <div className="relative mx-auto flex max-w-[760px] flex-col items-center gap-6 px-6 py-25 text-center lg:px-11">
            <h2 className="text-4xl font-bold leading-[1.08] tracking-tight md:text-[40px]">
              Seu cliente decide se confia em você{" "}
              <span className="text-brand-mint">antes de ver seu preço.</span>
            </h2>
            <p className="max-w-[52ch] text-lg leading-relaxed text-brand-on-dark-2">
              A decisão do cliente começa na aparência da sua proposta. Você quer parecer amador ou quer parecer a melhor escolha?
            </p>
            <a
              href={CHECKOUT_URL}
              className="inline-flex min-h-[60px] items-center gap-3 rounded-pill bg-canvas px-8 py-4 text-[17px] font-semibold text-brand transition hover:-translate-y-px hover:bg-brand-deep hover:text-ink-inverse focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-canvas/50"
            >
              Quero minha proposta profissional
              <ArrowRight className="size-[17px]" />
            </a>
            <p className="text-[13px] text-brand-mint">Liberação imediata • pagamento único</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="footer"
        className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-3.5 px-6 pb-12 pt-8 text-sm text-ink-muted lg:px-11"
      >
        <span>
          ©2026{" "}
          <a
            href="https://malabares.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brand hover:text-brand-deep"
          >
            Malabares MKT
          </a>
        </span>
        <span>
          Feito com muito <span className="text-brand">♥</span> em Recife - PE
        </span>
      </footer>

    </main>
  );
}
