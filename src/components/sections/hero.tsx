import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Header } from "./header";

export function Hero() {
  return (
    <section
      id="inicio"
      className="bg-ink relative isolate flex min-h-svh flex-col overflow-hidden"
    >
      {/* Fundo decorativo (vidro canelado verde + vinheta) */}
      <div aria-hidden className="fluted -z-10" />
      <div aria-hidden className="hero-vignette -z-10" />

      <Header />

      <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-5 py-20 text-center sm:px-8">
        <p className="animate-rise border-brand-400/30 bg-brand-400/10 text-brand-200 mb-7 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium tracking-wide sm:text-sm">
          <span className="bg-brand-400 size-1.5 rounded-full" />
          Marketing · Vendas · Tecnologia
        </p>

        <h1 className="animate-rise text-4xl leading-[1.08] font-light tracking-tight text-balance [animation-delay:120ms] sm:text-6xl lg:text-7xl">
          Vamos construir uma estrutura completa que{" "}
          <span className="from-brand-300 to-brand-500 bg-gradient-to-r bg-clip-text font-medium text-transparent">
            vende semijoias todo santo dia
          </span>{" "}
          para você.
        </h1>

        <p className="animate-rise mt-7 max-w-2xl text-base leading-relaxed text-pretty text-white/70 [animation-delay:240ms] sm:text-lg">
          Vamos entrar no seu negócio como parceiros, entender sua operação e aplicar nosso método
          para integrar marketing, vendas e tecnologia em uma estrutura preparada para atrair
          clientes e gerar venda todos os dias.
        </p>

        <div className="animate-rise mt-10 [animation-delay:360ms]">
          <Button href={site.ctaHref} className="px-8 py-4 text-base">
            Quero conhecer o método
            <span aria-hidden>↘</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
