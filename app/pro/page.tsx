import Link from "next/link";

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
    <main className="min-h-screen bg-white text-ink">

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center py-20 md:py-0 bg-[#0B1F17] text-white">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-10">

          {/* coluna da esquerda */}
          <div className="space-y-8">
            <span className="inline-flex rounded-pill border border-brand-on-dark/30 bg-brand-hover/10 px-4 py-2 text-sm font-medium text-brand-on-dark">
              ⚡ PROPOSTA RÁPIDA PRO
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                Sua proposta está te fazendo perder clientes.
                <span className="text-brand-on-dark"> E você nem percebe.</span>
              </h1>
              <p className="text-2xl font-bold text-zinc-100">
                Não adianta ter um serviço incrível se sua proposta parece feita às pressas.
              </p>
              <p className="text-lg font-light text-zinc-300">
                Remova a marca d'água, gere PDFs limpos e apresente seu serviço com vai valor.
              </p>
            </div>
            {/* cta + text */}
            <div className="flex flex-col gap-4 items-center">
              <Link
                href="https://gex.goexplosion.com/link/checkout?utm=proposta-rapida-pro"
                className="rounded-card bg-brand-hover px-8 py-4 text-center text-lg w-full font-semibold shadow-lg transition hover:scale-[1.02]"
              >
                Quero minha versão PRO agora
              </Link>
              <p className="text-sm text-zinc-500 text-center">
                Pagamento único de R$ 9,90 com acesso liberado imediatamente após o pagamento.
              </p>
            </div>

          </div>

          {/* coluna da direita */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">

              {/* foto */}
              <img
                src="/proposta-rapida-pro.jpg"
                alt="Profissional usando a Proposta Rápida"
                className="rounded-3xl object-cover w-full h-[600px]"
              />
              {/* card sobreposto */}
              <div className="absolute bottom-4 left-4 right-4 rounded-card-lg bg-white p-6 text-ink shadow-xl">
                <p className="text-sm text-ink-muted">
                  "Depois que tirei a marca d'água, comecei a ser levado muito mais a sério."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <img
                    src="/proposta-rapida-pro.jpg"
                    alt="Profissional usando a Proposta Rápida"
                    className="h-10 w-10 rounded-full bg-surface"
                  />
                  <div>
                    <p className="text-sm font-semibold">João Silva</p>
                    <p className="text-xs text-ink-muted">Designer Freelancer</p>
                  </div>
                </div>
                <div className="mt-4 border-t border-border pt-4 flex flex-row items-center gap-3">
                  <p className="text-xs text-ink-muted font-bold">Versão PRO</p>
                  <p className="text-2xl font-bold text-brand">R$ 9,90</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tópicos Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold md:text-4xl">
            O que muda quando sua proposta parece{" "}
            <span className="text-brand">profissional</span>?
          </h2>

          <p className="mt-4 text-ink-muted">
            Pequenos detalhes que fazem o cliente te enxergar como a melhor escolha.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, index) => (
            <div
              key={item}
              className="group rounded-3xl border border-border p-6 shadow-sm bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-brand-on-dark/40"
            >
              <div className="flex items-start gap-3">
                <div className="text-xl transition-transform duration-300 group-hover:scale-110">
                  {["📄", "🚫", "💼", "📈", "💰", "⚡"][index]}
                </div>
                <p className="font-medium text-ink leading-relaxed">
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cta Section */}
      <section className="bg-surface-2 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-10 items-center">

          {/* TEXTO */}
          <div className="space-y-6 max-w-xl">
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              Sua proposta pode estar te fazendo parecer{" "}
              <span className="text-brand">menos profissional</span>.
            </h2>

            <p className="text-lg text-ink-secondary">
              E isso custa clientes. Antes mesmo da conversa começar.
            </p>

            <p className="text-ink-muted">
              Quando sua proposta parece premium, seu preço passa a fazer sentido e o cliente chega mais preparado para fechar.
            </p>
          </div>

          {/* CARD */}
          <div
            id="comprar"
            className="relative rounded-3xl bg-white p-8 shadow-lg ring-1 ring-zinc-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            {/* Badge */}
            <div className="absolute -top-3 right-6">
              <span className="bg-brand-hover text-white text-xs font-semibold px-3 py-1 rounded-pill shadow">
                acesso imediato
              </span>
            </div>

            <p className="text-sm font-medium text-brand">
              Versão PRO liberada por
            </p>

            <p className="mt-2 text-6xl font-bold text-ink">
              R$ 9,90
            </p>

            <p className="mt-2 text-sm text-ink-muted">
              Pagamento único • sem mensalidade
            </p>

            {/* CTA */}
            <Link
              href="https://gex.goexplosion.com/link/checkout?utm=proposta-rapida-pro"
              className="mt-8 block rounded-card-lg bg-brand-hover px-6 py-4 text-center font-semibold text-white text-lg shadow-md transition-all duration-300 hover:bg-brand hover:scale-[1.02]"
            >
              Quero minha proposta profissional
            </Link>

            <p className="mt-4 text-xs text-center text-ink-subtle">
              Liberação imediata após o pagamento
            </p>
          </div>

        </div>
      </section>

      {/* Audiências */}
      <section className="mx-auto px-6 pt-10 pb-20 lg:px-10 bg-surface-2">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold md:text-4xl">
            Ideal para quem quer parecer{" "}
            <span className="text-brand">profissional</span>
          </h2>

          <p className="mt-4 text-ink-muted">
            Se você envia propostas, isso foi feito pra você.
          </p>
        </div>

        <div className="mt-12 max-w-7xl grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {audiences.map((item, index) => (
            <div
              key={item}
              className="group rounded-card-lg border border-border p-6 text-center bg-white transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-brand-on-dark/40"
            >
              <div className="text-2xl mb-3 transition-transform duration-300 group-hover:scale-110">
                {["💻", "🎨", "📱", "📊", "🏢", "🧠", "🛠️", "📄"][index]}
              </div>
              <p className="font-medium text-ink">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#0B1F17] pt-20 text-white">
        <div className="mx-auto max-w-5xl px-6">

          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Dúvidas frequentes
          </h2>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-card-lg border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-brand-on-dark/30 hover:bg-white/10"
              >
                <summary className="flex items-center justify-between cursor-pointer font-medium list-none">
                  {faq.question}
                  <span className="ml-4 text-brand-on-dark transition-transform duration-300 group-open:rotate-180">
                    ⌄
                  </span>
                </summary>

                <p className="mt-4 text-zinc-300 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

        </div>
      </section>

      {/* CTA final */}
      <section className="bg-[#0B1F17] py-20 text-white">
        <div className="mx-auto max-w-2xl px-6 text-center space-y-8">

          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            Seu cliente decide se confia em você{" "}
            <span className="text-brand-on-dark">antes de ver seu preço.</span>
          </h2>

          <p className="text-zinc-300 text-lg">
            A decisão do cliente começa na aparência da sua proposta. Você quer parecer amador ou quer parecer a melhor escolha?
          </p>

          <Link
            href="https://gex.goexplosion.com/link/checkout?utm=proposta-rapida-pro"
            className="mt-8 inline-block w-full text-center rounded-card-lg bg-brand-hover px-8 py-4 font-semibold text-white text-lg shadow-md transition-all duration-300 hover:bg-brand hover:scale-[1.02]"
          >
            Quero minha proposta profissional
          </Link>

          <p className="text-xs text-zinc-400">
            Liberação imediata • pagamento único
          </p>

        </div>
      </section>

      {/* Footer */}
      <section id="footer" className="text-center text-sm text-brand py-5 bg-[#0B1F17] border-t border-brand/20">
        ©2026{" "}
        <a
          href="https://malabares.com.br"
          target="_blank"
          className="underline hover:text-white"
        >
          Malabares MKT
        </a>{" "}
        • Feito com muito{" "}
        <span className="text-accent-2">❤</span> em Recife - PE
      </section>

    </main>
  );
}
