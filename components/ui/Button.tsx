import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

/**
 * Button — Proposta Rápida DS v1.1
 *
 * Regras que este componente aplica por construção:
 * · uma tela tem no máximo um `primary`
 * · altura mínima de 44px em qualquer tamanho clicável no mobile
 * · transição só em cor (sem hover:scale — texto de botão largo tremula)
 * · `onDark` usa brand-dark, que agora existe nos tokens
 */

type Variant = "primary" | "secondary" | "onDark" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-btn font-semibold " +
  "transition-colors duration-200 cursor-pointer select-none " +
  "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand/30 " +
  "disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-ink-on-brand hover:bg-brand-hover",
  secondary:
    "bg-transparent text-brand border-2 border-brand hover:bg-brand hover:text-ink-on-brand " +
    "uppercase tracking-wide",
  onDark:
    "bg-canvas text-brand-dark hover:bg-brand-bg uppercase tracking-wide " +
    "focus-visible:ring-canvas/40",
  ghost: "bg-transparent text-ink-muted hover:text-ink-secondary font-medium",
};

const sizes: Record<Size, string> = {
  sm: "min-h-11 px-4 text-xs",
  md: "min-h-11 px-6 text-sm",
  lg: "min-h-14 px-6 text-base",
};

type ButtonOwnProps = {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  loading?: boolean;
  loadingLabel?: string;
  children: ReactNode;
  className?: string;
};

function classes({
  variant = "primary",
  size = "md",
  fullWidth,
  className,
}: ButtonOwnProps) {
  return [
    base,
    variants[variant],
    sizes[size],
    fullWidth ? "w-full" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");
}

export function Button({
  variant,
  size,
  fullWidth,
  loading,
  loadingLabel = "Enviando…",
  children,
  className,
  disabled,
  ...rest
}: ButtonOwnProps & ComponentProps<"button">) {
  return (
    <button
      {...rest}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={classes({ variant, size, fullWidth, className, children })}
    >
      {loading ? loadingLabel : children}
    </button>
  );
}

/**
 * ButtonLink — mesma aparência, semântica de navegação.
 * Use para CTAs que levam para outra rota (/create, /pro, checkout).
 */
export function ButtonLink({
  variant,
  size,
  fullWidth,
  children,
  className,
  href,
  ...rest
}: ButtonOwnProps & ComponentProps<typeof Link>) {
  return (
    <Link
      {...rest}
      href={href}
      className={classes({ variant, size, fullWidth, className, children })}
    >
      {children}
    </Link>
  );
}

export default Button;
