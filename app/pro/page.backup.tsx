import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Card, CardBadge } from "@/components/ui/Card";

const CHECKOUT_URL =
  "https://gex.goexplosion.com/link/checkout?utm=proposta-rapida-pro";

const PRECO = "R$ 9,90";

const benefits = [
  { glyph: "📄", text: "PDF limpo e profissional" },
  { glyph: "🚫", text: "Sem marca d'água da plataforma" },
  { glyph: "💼", text: "Mais credibilidade na apresentação" },
  { glyph: "📈", text: "Mais chances de fechar contratos" },
  { glyph: "💰", text: "Melhor percepção de valor" },
  { glyph: "⚡", text: "Pagamento único e acesso imediato" },
];

const audiences = [
  { glyph: "💻", text: "Freelancers" },
  { glyph: "🎨", text: "Designers" },
  { glyph: "📱", text: "Social Medias" },
  { glyph: "📊", text: "Gestores de Tráfego" },
  { glyph: "🏢", text: "Agências" },
  { glyph: "🧠", text: "Consultores" },
  { glyph: "🛠️", text: "Prestadores de Serviço" },
  { glyph: "📄", text: "Profissionais que enviam propostas" },
];

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

export default function PropostaRapidaProPage() {
  return (
    <main className="min-h-screen bg-canvas text-ink">

      {/* HERO */}
      <section
        id="hero"
        className="flex min-h-screen items-center bg-brand-deep py-20 text-ink-inverse md:py-0"
      >
        <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">

          <div className="flex flex-col gap-8">
            <span className="self-start rounded-pill border border-brand-on-dark/30 bg-brand/20 px-4 py-2 text-sm font-medium text-brand-on-dark">
              ⚡ PROPOSTA RÁPIDA PRO
            </span>

            <div className="flex flex-col gap-5">
              <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                Sua proposta está te fazendo perder clientes.
                <span className="text-brand-on-dark"> E você nem percebe.</span>
              </h1>
              <p className="text-2xl font-bold leading-snug text-surface">
                Não adianta ter um serviço incrível se sua proposta parece feita às pressas.
              </p>
              <p className="text-lg font-light leading-relaxed text-ink-faint">
                Remova a marca d&apos;água, gere PDFs limpos e apresente seu serviço com mais valor.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <ButtonLink href={CHECKOUT_URL} variant="primary" size="lg" fullWidth>
                Quero minha versão PRO agora
              </ButtonLink>
              <p className="text-center text-sm leading-relaxed text-ink-subtle">
                Pagamento único de {PRECO} com acesso liberado imediatamente após o pagamento.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <Image
                src="/proposta-rapida-pro.jpg"
                alt="Profissional usando a Proposta Rápida"
                width={448}
                height={600}
                className="h-[600px] w-full rounded-card-lg object-cover"
                priority
              />

              <div className="absolute inset-x-4 bottom-4 rounded-card-lg bg-canvas p-6 text-ink shadow-card">
                <p className="text-sm leading-relaxed text-ink-muted">
                  &quot;Depois que tirei a marca d&apos;água, comecei a ser levado muito mais a sério.&quot;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <Image
                    src="/proposta-rapida-pro.jpg"
                    alt="João Silva"
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-pill bg-surface object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold">João Silva</p>
                    <p className="text-xs text-ink-muted">Designer Freelancer</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                  <p className="text-xs font-bold text-ink-muted">Versão PRO</p>
                  <p className="text-2xl font-bold tracking-tight text-brand">{PRECO}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="mx-auto flex max-w-2xl flex-col gap-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            O que muda quando sua proposta parece{" "}
            <span className="text-brand">profissional</span>?
          </h2>
          <p className="text-ink-muted">
            Pequenos detalhes que fazem o cliente te enxergar como a melhor escolha.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ glyph, text }) => (
            <Card key={text}>
              <div className="flex items-start gap-3">
                <span className="shrink-0 text-xl leading-snug">{glyph}</span>
                <p className="font-medium leading-relaxed text-ink">{text}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA + PREÇO */}
      <section className="bg-surface-2 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">

          <div className="flex max-w-xl flex-col gap-6">
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-5xl">
              Sua proposta pode estar te fazendo parecer{" "}
              <span className="text-brand">menos profissional</span>.
            </h2>
            <p className="text-lg text-ink-secondary">
              E isso custa clientes. Antes mesmo da conversa começar.
            </p>
            <p className="leading-relaxed text-ink-muted">
              Quando sua proposta parece premium, seu preço passa a fazer sentido e o cliente chega mais preparado para fechar.
            </p>
          </div>

          <Card id="comprar" variant="feature">
            <CardBadge>acesso imediato</CardBadge>

            <p className="text-sm font-medium text-brand">Versão PRO liberada por</p>
            <p className="mt-2 text-6xl font-bold tracking-tight text-ink">{PRECO}</p>
            <p className="mt-2 text-sm text-ink-muted">
              Pagamento único • sem mensalidade
            </p>

            <ButtonLink
              href={CHECKOUT_URL}
              variant="primary"
              size="lg"
              fullWidth
              className="mt-8"
            >
              Quero minha proposta profissional
            </ButtonLink>

            <p className="mt-4 text-center text-xs text-ink-subtle">
              Liberação imediata após o pagamento
            </p>
          </Card>

        </div>
      </section>

      {/* AUDIÊNCIAS */}
      <section className="bg-surface-2 px-6 pb-20 pt-10 lg:px-10">
        <div className="mx-auto flex max-w-2xl flex-col gap-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Ideal para quem quer parecer <span className="text-brand">profissional</span>
          </h2>
          <p className="text-ink-muted">
            Se você envia propostas, isso foi feito pra você.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-7xl gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {audiences.map(({ glyph, text }) => (
            <Card key={text} className="text-center">
              <div className="mb-3 text-2xl">{glyph}</div>
              <p className="font-medium text-ink">{text}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-deep pt-20 text-ink-inverse">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
            Dúvidas frequentes
          </h2>

          <div className="flex flex-col gap-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-card-lg border border-canvas/10 bg-canvas/5 p-6 transition-colors duration-300 hover:border-brand-on-dark/30 hover:bg-canvas/10"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                  {faq.question}
                  <span className="shrink-0 text-brand-on-dark transition-transform duration-300 group-open:rotate-180">
                    ⌄
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-ink-faint">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-brand-deep py-20 text-ink-inverse">
        <div className="mx-auto flex max-w-2xl flex-col gap-8 px-6 text-center">
          <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Seu cliente decide se confia em você{" "}
            <span className="text-brand-on-dark">antes de ver seu preço.</span>
          </h2>

          <p className="text-lg leading-relaxed text-ink-faint">
            A decisão do cliente começa na aparência da sua proposta. Você quer parecer amador ou quer parecer a melhor escolha?
          </p>

          <ButtonLink href={CHECKOUT_URL} variant="primary" size="lg" fullWidth>
            Quero minha proposta profissional
          </ButtonLink>

          <p className="text-xs text-ink-subtle">
            Liberação imediata • pagamento único
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="footer"
        className="border-t border-brand/25 bg-brand-deep py-5 text-center text-sm text-brand-on-dark"
      >
        ©2026{" "}
        <a
          href="https://malabares.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-canvas"
        >
          Malabares MKT
        </a>{" "}
        • Feito com muito <span className="text-accent-2">❤</span> em Recife - PE
      </footer>

    </main>
  );
}
