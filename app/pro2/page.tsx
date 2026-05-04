import Link from "next/link";

const benefits = [
  "PDF limpo e profissional",
  "Sem marca d’água da plataforma",
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
      "Você libera a versão PRO da Proposta Rápida e pode gerar PDFs sem marca d’água, com aparência premium e muito mais profissional.",
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
    <main className="min-h-screen bg-white text-zinc-900">

      {/* Hero Section --------------------------------------------------- */}
      <section id="hero" className="
      min-h-screen flex items-center py-20 md:py-0
      bg-[#0B1F17] text-white 
      ">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-10">

          {/* coluna da esquerda */}
          <div className="space-y-8">
            <span className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300">
              ⚡ PROPOSTA RÁPIDA PRO
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                Sua proposta está te fazendo perder clientes.
                <span className="text-emerald-400"> E você nem percebe.</span>
              </h1>
              <p className="text-2xl font-bold text-zinc-100 ">
                Não adianta ter um serviço incrível se sua proposta parece feita às pressas.
              </p>
              <p className="text-lg font-light text-zinc-300">
                Remova a marca d’água, gere PDFs limpos e apresente seu serviço com vai valor.
              </p>
            </div>
            {/* cta + text */}
            <div className="flex flex-col gap-4 items-center">
              <Link
                href="https://gex.goexplosion.com/link/checkout?utm=proposta-rapida-pro"
                className="
                rounded-xl bg-emerald-500 px-8 py-4 text-center text-lg w-full
                font-semibold shadow-lg transition hover:scale-[1.02]"
                >Quero minha versão PRO agora
              </Link>
              <p className="text-sm text-zinc-500 text-center">
                Pagamento único de R$ 9,90 com acesso liberado imediatamente após o pagamento.
              </p>
            </div>

          </div>{/* fim da coluna da esquerda */}

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
              <div className="
                absolute bottom-4 left-4 right-4
                rounded-2xl bg-white p-6 text-zinc-900 shadow-xl
              ">
                <p className="text-sm text-zinc-500">
                  “Depois que tirei a marca d’água, comecei a ser levado muito mais a sério.”
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <img
                    src="/proposta-rapida-pro.jpg"
                    alt="Profissional usando a Proposta Rápida"
                    className="h-10 w-10 rounded-full bg-zinc-200"
                  />
                  <div>
                    <p className="text-sm font-semibold">João Silva</p>
                    <p className="text-xs text-zinc-500">Designer Freelancer</p>
                  </div>
                </div>
                <div className="mt-4 border-t border-zinc-200 pt-4 flex flex-row items-center gap-3">
                  <p className="text-xs text-zinc-500 font-bold">Versão PRO</p>
                  <p className="text-2xl font-bold text-emerald-600">R$ 9,90</p>
                </div>
              </div>{/* fim do card sobreposto */}
            </div>
          </div>{/* fim da coluna da direita */}
        </div>
      </section>{/* fim Hero Section ---------------------------------------------- */}



      {/* Tópicos Section --------------------------------------------------- */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold md:text-4xl">
            O que muda quando sua proposta parece{" "}
            <span className="text-emerald-600">profissional</span>?
          </h2>

          <p className="mt-4 text-zinc-500">
            Pequenos detalhes que fazem o cliente te enxergar como a melhor escolha.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, index) => (
            <div
              key={item}
              className="
              group rounded-3xl border border-zinc-200 p-6 shadow-sm bg-white
              transition-all duration-300
              hover:shadow-lg hover:-translate-y-1 hover:border-emerald-400/40
            "
            >
              <div className="flex items-start gap-3">
                
                {/* Emoji */}
                <div className="
                  text-xl transition-transform duration-300
                  group-hover:scale-110
                ">
                  {[
                    "📄",
                    "🚫",
                    "💼",
                    "📈",
                    "💰",
                    "⚡"
                  ][index]}
                </div>

                {/* Texto */}
                <p className="font-medium text-zinc-800 leading-relaxed">
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>{/* Fim do Tópicos Section ---------------------------------- */}



      {/* Cta Section --------------------------------------------------- */}
      <section className="bg-zinc-50 py-20">
  <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-10 items-center">
    
    {/* TEXTO */}
    <div className="space-y-6 max-w-xl">
      <h2 className="text-3xl font-bold leading-tight md:text-5xl">
        Sua proposta pode estar te fazendo parecer{" "}
        <span className="text-emerald-600">menos profissional</span>.
      </h2>

      <p className="text-lg text-zinc-600">
        E isso custa clientes. Antes mesmo da conversa começar.
      </p>

      <p className="text-zinc-500">
        Quando sua proposta parece premium, seu preço passa a fazer sentido e o cliente chega mais preparado para fechar.
      </p>
    </div>

    {/* CARD */}
    <div
      id="comprar"
      className="
        relative rounded-3xl bg-white p-8 shadow-lg
        ring-1 ring-zinc-200
        transition-all duration-300
        hover:shadow-xl hover:-translate-y-1
      "
    >
      {/* Badge */}
      <div className="absolute -top-3 right-6">
        <span className="bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
          acesso imediato
        </span>
      </div>

      <p className="text-sm font-medium text-emerald-600">
        Versão PRO liberada por
      </p>

      <p className="mt-2 text-6xl font-bold text-zinc-900">
        R$ 9,90
      </p>

      <p className="mt-2 text-sm text-zinc-500">
        Pagamento único • sem mensalidade
      </p>

      {/* CTA */}
      <Link
        href="https://gex.goexplosion.com/link/checkout?utm=proposta-rapida-pro"
        className="
          mt-8 block rounded-2xl bg-emerald-500 px-6 py-4 text-center
          font-semibold text-white text-lg
          shadow-md transition-all duration-300
          hover:bg-emerald-600 hover:scale-[1.02]
        "
      >
        Quero minha proposta profissional
      </Link>

      {/* Micro confiança */}
      <p className="mt-4 text-xs text-center text-zinc-400">
        Liberação imediata após o pagamento
      </p>
    </div>

  </div>
</section>{/* Fim do Cta Section ---------------------------------------------- */}



      <section className="mx-auto px-6 pt-10 pb-20 lg:px-10 bg-zinc-50">
  <div className="text-center max-w-2xl mx-auto">
    <h2 className="text-3xl font-bold md:text-4xl">
      Ideal para quem quer parecer{" "}
      <span className="text-emerald-600">profissional</span>
    </h2>

    <p className="mt-4 text-zinc-500">
      Se você envia propostas, isso foi feito pra você.
    </p>
  </div>

  <div className="mt-12 max-w-7xl grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {audiences.map((item, index) => (
      <div
        key={item}
        className="
          group rounded-2xl border border-zinc-200 p-6 text-center bg-white
          transition-all duration-300
          hover:shadow-md hover:-translate-y-1 hover:border-emerald-400/40
        "
      >
        {/* Emoji */}
        <div className="text-2xl mb-3 transition-transform duration-300 group-hover:scale-110">
          {[
            "💻",
            "🎨",
            "📱",
            "📊",
            "🏢",
            "🧠",
            "🛠️",
            "📄"
          ][index]}
        </div>

        {/* Texto */}
        <p className="font-medium text-zinc-800">
          {item}
        </p>
      </div>
    ))}
  </div>
</section>


{/* FAQ ------------ */}
 <section className="bg-[#0B1F17] pt-20 text-white">
  <div className="mx-auto max-w-5xl px-6">
    
    <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
      Dúvidas frequentes
    </h2>

    <div className="space-y-4">
      {faqs.map((faq) => (
        <details
          key={faq.question}
          className="
            group rounded-2xl border border-white/10 bg-white/5 p-6
            transition-all duration-300
            hover:border-emerald-400/30 hover:bg-white/10
          "
        >
          <summary className="
            flex items-center justify-between cursor-pointer font-medium
            list-none
          ">
            {faq.question}

            {/* Ícone */}
            <span className="
              ml-4 text-emerald-400 transition-transform duration-300
              group-open:rotate-180
            ">
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




      <section className="bg-[#0B1F17] py-20 text-white">
  <div className="mx-auto max-w-2xl px-6 text-center space-y-8">

    <h2 className="text-4xl font-bold leading-tight md:text-5xl">
      Seu cliente decide se confia em você{" "}
      <span className="text-emerald-400">antes de ver seu preço.</span>
    </h2>

    <p className="text-zinc-300 text-lg">
      A decisão do cliente começa na aparência da sua proposta. Você quer parecer amador ou quer parecer a melhor escolha? 
    </p>

    <Link
        href="https://gex.goexplosion.com/link/checkout?utm=proposta-rapida-pro"
        className="
          mt-8 inline-block w-full text-center
          rounded-2xl bg-emerald-500 px-8 py-4
          font-semibold text-white text-lg
          shadow-md transition-all duration-300
          hover:bg-emerald-600 hover:scale-[1.02]
        "
      >
        Quero minha proposta profissional
      </Link>

      <p className="text-xs text-zinc-400">
        Liberação imediata • pagamento único
      </p>

  </div>
</section>

      {/* Footer --------------------------------------------------- */}
      <section id="footer" className="text-center text-sm text-emerald-600 py-5 bg-[#0B1F17] border-t border-emerald-600/20">
        ©2026{" "}
        <a
          href="https://malabares.com.br"
          target="_blank"
          className="underline hover:text-white"
        >
          Malabares MKT
        </a>{" "}
        • Feito com muito{" "}
        <span className="text-purple-500">❤</span> em Recife - PE
      </section>{/* Fim do Footer ------------------------------------- */}
      
    </main>
  );
}
