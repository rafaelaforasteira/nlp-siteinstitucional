import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="relative z-20 mx-auto flex w-full max-w-6xl items-center justify-between px-5 pt-6 sm:px-8">
      {/* Logo provisório: troque pelo SVG da marca em /public quando tiver */}
      <a href="#inicio" className="flex items-center gap-2 text-lg font-bold tracking-tight">
        <span className="bg-brand-400 text-ink grid size-8 place-items-center rounded-lg text-sm">
          N
        </span>
        {site.name}
      </a>

      <nav
        aria-label="Principal"
        className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 backdrop-blur md:flex"
      >
        {site.nav.map((item, i) => (
          <a
            key={item.href}
            href={item.href}
            className={`rounded-full px-4 py-2 text-sm transition ${
              i === 0 ? "bg-white/10 text-white" : "text-white/65 hover:text-white"
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <Button href={site.ctaHref} className="px-5 py-2.5 text-sm">
        Falar com a gente
      </Button>
    </header>
  );
}
