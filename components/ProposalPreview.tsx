type Props = {
  data: {
    clientName: string;
    projectName: string;
    description: string;
    services: string;
    price: string;
    deadline: string;
    yourName: string;
  };
  hideWatermark?: boolean;
};

export default function ProposalPreview({ data, hideWatermark }: Props) {
  const servicesList = data.services
    ? data.services.split("\n")
    : [];

  return (
    <div className="print-area bg-white text-black p-10 rounded-card-lg">

      {/* HEADER */}
      <div className="flex justify-between items-start border-b pb-6">
        <div>
          <h1 className="text-3xl font-bold">
            Proposta Comercial
          </h1>
          <p className="text-sm text-ink-muted mt-1">
            {data.projectName || "Nome do projeto"}
          </p>
        </div>

        <div className="text-right text-sm text-ink-muted">
          <p>Para:</p>
          <p className="font-medium text-black">
            {data.clientName || "Nome do cliente"}
          </p>
        </div>
      </div>

      {/* DESCRIÇÃO */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-2">
          Descrição do projeto
        </h2>
        <p className="text-sm text-ink-secondary leading-relaxed">
          {data.description || "Descreva aqui os detalhes do projeto..."}
        </p>
      </div>

      {/* SERVIÇOS */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-3">
          Serviços inclusos
        </h2>

        <ul className="space-y-2">
          {servicesList.length > 0 ? (
            servicesList.map((item, i) => (
              <li
                key={i}
                className="bg-surface p-3 rounded-btn text-sm"
              >
                {item}
              </li>
            ))
          ) : (
            <li className="text-sm text-ink-subtle">
              Adicione os serviços...
            </li>
          )}
        </ul>
      </div>

      {/* VALOR */}
      <div className="mt-10 p-6 bg-dark text-white rounded-card flex justify-between items-center">
        <div>
          <p className="text-sm text-ink-subtle">
            Investimento
          </p>
          <p className="text-2xl font-bold">
            {data.price || "R$ 0,00"}
          </p>
        </div>

        <div className="text-right text-sm">
          <p className="text-ink-subtle">Prazo</p>
          <p className="font-medium">
            {data.deadline || "—"}
          </p>
        </div>
      </div>

      {/* ASSINATURA */}
      <div className="mt-12 text-sm text-ink-secondary">
        <p>Atenciosamente,</p>
        <p className="mt-2 font-semibold text-black">
          {data.yourName || "Seu nome / empresa"}
        </p>
      </div>

      {/* WATERMARK (FREE ONLY) */}
      {!hideWatermark && (
        <div className="mt-12 text-center text-[12px] text-ink-subtle">
          Gerado com ⚡ Proposta{" "}
          <span className="text-brand">Rápida</span> • Remova no PRO
        </div>
      )}

    </div>
  );
}
