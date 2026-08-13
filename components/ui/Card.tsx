import type { ComponentProps, ReactNode } from "react";

/**
 * Card — Proposta Rápida DS v1.1
 *
 * Três variantes com papéis distintos. O que muda entre elas é
 * raio e elevação — nunca a cor de fundo.
 *
 * · content  — card de conteúdo em grid. Borda em repouso, elevação no hover.
 * · feature  — card de conversão. Elevado desde o repouso, raio maior.
 * · document — a proposta gerada. Sem hover, imprime via .print-area.
 *
 * Substitui os rounded-3xl / shadow-lg / shadow-xl espalhados
 * em app/pro/page.tsx.
 */

type Variant = "content" | "feature" | "document";

const variants: Record<Variant, string> = {
  content:
    "bg-canvas rounded-card border border-border p-6 " +
    "transition-all duration-300 " +
    "hover:shadow-card hover:-translate-y-0.5 hover:border-brand-light",
  feature:
    "bg-canvas rounded-card-lg border border-border-subtle shadow-card p-8 relative",
  document: "print-area bg-canvas text-ink rounded-card-lg shadow-card p-10",
};

type CardProps = {
  variant?: Variant;
  /** Desliga o hover em cards de conteúdo que não são clicáveis. */
  static?: boolean;
  children: ReactNode;
} & ComponentProps<"div">;

export function Card({
  variant = "content",
  static: isStatic,
  children,
  className,
  ...rest
}: CardProps) {
  const style =
    isStatic && variant === "content"
      ? "bg-canvas rounded-card border border-border p-6"
      : variants[variant];

  return (
    <div {...rest} className={[style, className ?? ""].filter(Boolean).join(" ")}>
      {children}
    </div>
  );
}

/** Badge sobreposta no canto superior direito de um Card feature. */
export function CardBadge({
  tone = "brand",
  children,
}: {
  tone?: "brand" | "accent";
  children: ReactNode;
}) {
  const tones = {
    brand: "bg-brand text-ink-on-brand",
    accent: "bg-accent text-ink",
  };

  return (
    <span
      className={
        "absolute -top-3 right-6 rounded-pill px-3 py-1 " +
        "text-xs font-semibold " +
        tones[tone]
      }
    >
      {children}
    </span>
  );
}

/**
 * PriceBlock — o bloco escuro de investimento/prazo.
 * Aparece na home, no ProposalPreview e no PDF; era duplicado nos três.
 */
export function PriceBlock({
  price,
  deadline,
  size = "md",
}: {
  price: string;
  deadline: string;
  size?: "sm" | "md";
}) {
  const pad = size === "sm" ? "p-4" : "p-6";
  const priceSize = size === "sm" ? "text-base" : "text-2xl";

  return (
    <div
      className={`${pad} bg-dark text-ink-inverse rounded-btn flex items-center justify-between`}
    >
      <div>
        <p className="text-xs text-ink-subtle mb-0.5">Investimento</p>
        <p className={`${priceSize} font-bold`}>{price}</p>
      </div>
      <div className="text-right">
        <p className="text-xs text-ink-subtle mb-0.5">Prazo</p>
        <p className="text-sm font-semibold">{deadline}</p>
      </div>
    </div>
  );
}

export default Card;
