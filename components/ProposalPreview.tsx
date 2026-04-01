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
};

export default function ProposalPreview({ data }: Props) {
  const servicesList = data.services
    ? data.services.split("\n")
    : [];

  return (
    <div className="print-area bg-white text-black p-10 rounded-2xl">

      {/* HEADER */}
      <div className="flex justify-between items-start border-b pb-6">
        <div>
          <h1 className="text-3xl font-bold">
            Proposta Comercial
          </h1>
          <p className="text-sm text-zinc-500 mt-1">
            {data.projectName || "Nome do projeto"}
          </p>
        </div>

        <div className="text-right text-sm text-zinc-500">
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
        <p className="text-sm text-zinc-700 leading-relaxed">
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
                className="bg-zinc-100 p-3 rounded-lg text-sm"
              >
                {item}
              </li>
            ))
          ) : (
            <li className="text-sm text-zinc-400">
              Adicione os serviços...
            </li>
          )}
        </ul>
      </div>

      {/* VALOR */}
      <div className="mt-10 p-6 bg-zinc-900 text-white rounded-xl flex justify-between items-center">
        <div>
          <p className="text-sm text-zinc-400">
            Investimento
          </p>
          <p className="text-2xl font-bold">
            {data.price || "R$ 0,00"}
          </p>
        </div>

        <div className="text-right text-sm">
          <p className="text-zinc-400">Prazo</p>
          <p className="font-medium">
            {data.deadline || "—"}
          </p>
        </div>
      </div>

      {/* ASSINATURA */}
      <div className="mt-12 text-sm text-zinc-600">
        <p>Atenciosamente,</p>
        <p className="mt-2 font-semibold text-black">
          {data.yourName || "Seu nome / empresa"}
        </p>
      </div>

    </div>
  );
}