import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import logoSrc from "@/assets/zone-logo.png";
const logo = { url: logoSrc };
import { Button } from "@/components/ui/button";
import { DISCORD_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#estudio", label: "Estúdio" },
  { href: "#servicos", label: "Serviços" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-5 md:h-20 md:px-10">
        <a href="#inicio" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={logo.url}
            alt="ZONE STUDIO"
            width={40}
            height={40}
            className="size-9 rounded-sm object-cover md:size-10"
          />
          <span className="font-display text-sm font-black uppercase tracking-[0.04em] font-wide md:text-base">
            Zone<span className="ml-1.5 font-serif text-[1.15em] font-normal italic tracking-normal normal-case [font-stretch:100%]">studio</span>
          </span>
        </a>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Principal">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="mr-1.5 font-serif text-sm normal-case italic tracking-normal text-accent">
                0{i + 1}
              </span>
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild variant="studioPrimary" size="pill" className="hidden sm:inline-flex">
            <a href={DISCORD_URL} target="_blank" rel="noreferrer">
              Orçamento
              <ArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
            </a>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="flex h-10 items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] md:hidden"
          >
            {open ? "Fechar" : "Menu"}
            <span className="relative block h-3 w-6">
              <span
                className={cn(
                  "absolute left-0 top-0 h-px w-full bg-foreground transition-transform duration-300",
                  open && "translate-y-1.5 rotate-45",
                )}
              />
              <span
                className={cn(
                  "absolute bottom-0 left-0 h-px w-full bg-foreground transition-transform duration-300",
                  open && "-translate-y-1.5 -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </div>
    </header>

      {open && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col justify-between bg-background px-5 pb-10 pt-8 md:hidden">
          <nav className="flex flex-col" aria-label="Menu">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="line-mask border-b border-border py-3"
              >
                <span
                  className="flex animate-rise items-baseline gap-4 font-display text-5xl font-black uppercase font-wide"
                  style={{ animationDelay: `${i * 70}ms` }}
                >
                  <span className="font-serif text-lg font-normal normal-case italic text-accent [font-stretch:100%]">
                    0{i + 1}
                  </span>
                  {l.label}
                </span>
              </a>
            ))}
          </nav>
          <Button asChild variant="studioPrimary" size="xl" className="w-full">
            <a href={DISCORD_URL} target="_blank" rel="noreferrer">
              Faça seu orçamento
              <ArrowUpRight />
            </a>
          </Button>
        </div>
      )}
    </>
  );
}
