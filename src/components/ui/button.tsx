import type { ComponentProps } from "react";

type Props = ComponentProps<"a"> & { variant?: "primary" | "ghost" };

// Botão-link reutilizável. "primary" = verde sólido, "ghost" = contorno discreto.
export function Button({ variant = "primary", className = "", ...props }: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-300";
  const styles =
    variant === "primary"
      ? "bg-brand-400 text-ink hover:bg-brand-300 shadow-[0_0_40px_-8px] shadow-brand-400/70"
      : "border border-white/15 bg-white/5 text-white hover:bg-white/10";
  return <a className={`${base} ${styles} ${className}`} {...props} />;
}
