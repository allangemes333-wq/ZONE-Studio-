import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUp, ArrowUpRight } from "lucide-react";
import logoSrc from "@/assets/zone-logo.png";
const logo = { url: logoSrc };
import { Button } from "@/components/ui/button";
import { Header } from "@/components/zone/Header";
import { Reveal, ScrollWords } from "@/components/zone/Reveal";
import { Star, StarRing } from "@/components/zone/Star";
import { DISCORD_URL, services } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ZONE STUDIO — Estúdio de design" },
      {
        name: "description",
        content:
          "ZONE STUDIO: identidade visual, logos, banners, artes para redes sociais, thumbnails e design para lojas.",
      },
      { property: "og:title", content: "ZONE STUDIO — Estúdio de design" },
      {
        property: "og:description",
        content: "Design pensado para destacar sua marca e transformar suas ideias em identidade.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Ticker />
        <Statement />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function SectionLabel({ index, children, tone = "light" }: { index: string; children: string; tone?: "light" | "dark" }) {
  return (
    <p
      className={
        "flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.22em] " +
        (tone === "light" ? "text-muted-foreground" : "text-ink-muted")
      }
    >
      <span className="font-serif text-base normal-case italic tracking-normal">({index})</span>
      <span className="h-px w-8 bg-current opacity-50" />
      {children}
    </p>
  );
}

function Hero() {
  const lines = [
    <>O melhor</>,
    <span className="text-outline">Designer</span>,
    <>
      Aqui<span className="text-primary">.</span>
    </>,
  ];

  return (
    <section
      id="inicio"
      className="grain relative flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden px-5 pb-8 pt-8 md:min-h-[calc(100svh-5rem)] md:px-10 md:pb-10"
    >
      {/* Graphic layer */}
      <div className="pointer-events-none absolute inset-0 -z-0 animate-fade" style={{ animationDelay: "400ms" }}>
        <StarRing className="absolute -right-[45%] top-[6%] w-[130vw] text-primary md:-right-[8%] md:top-[4%] md:w-[min(62vw,980px)] animate-spin-slow" />
        <StarRing
          count={22}
          className="absolute -right-[20%] top-[22%] w-[80vw] text-primary-deep md:right-[8%] md:top-[14%] md:w-[min(36vw,560px)] animate-spin-slower"
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-1 flex-col">
        <div className="flex items-start justify-between gap-6">
          <SectionLabel index="01">Estúdio de design</SectionLabel>
          <p className="hidden text-right text-[0.7rem] font-semibold uppercase leading-relaxed tracking-[0.22em] text-muted-foreground md:block">
            Identidade · Logos · Social
            <br />
            Thumbnails · Banners · Lojas
          </p>
        </div>

        <h1 className="mt-auto pt-24 font-display font-black uppercase leading-[0.84] tracking-[-0.03em] text-[clamp(3.2rem,min(14vw,19vh),15rem)]">
          {lines.map((line, i) => (
            <span key={i} className="line-mask">
              <span className="block animate-rise" style={{ animationDelay: `${150 + i * 120}ms` }}>
                {line}
              </span>
            </span>
          ))}
        </h1>

        <div className="mt-10 grid gap-8 border-t border-border pt-6 md:mt-12 md:grid-cols-12 md:items-end">
          <p
            className="animate-fade text-base leading-relaxed text-muted-foreground md:col-span-5 md:text-lg"
            style={{ animationDelay: "700ms" }}
          >
            Design pensado para destacar sua marca e transformar suas ideias em{" "}
            <em className="font-serif text-[1.25em] not-italic text-foreground">
              <span className="italic">identidade.</span>
            </em>
          </p>
          <div className="flex items-center justify-between gap-6 md:col-span-7 md:justify-end">
            <Button asChild variant="studio" size="pill" className="md:h-12 md:px-7">
              <a href={DISCORD_URL} target="_blank" rel="noreferrer">
                Faça seu orçamento
                <ArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
              </a>
            </Button>
            <a
              href="#estudio"
              className="group flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
            >
              Role
              <span className="flex size-10 items-center justify-center rounded-full border border-border transition-colors group-hover:border-foreground">
                <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Ticker() {
  const items = [...services.map((s) => s.name), "ZONE STUDIO"];
  const row = (
    <div className="flex shrink-0 items-center">
      {items.map((t, i) => (
        <span key={t} className="flex items-center">
          <span
            className={
              i % 2 === 1
                ? "px-6 font-serif text-3xl italic md:px-10 md:text-6xl"
                : "px-6 font-display text-2xl font-black uppercase font-wide md:px-10 md:text-5xl"
            }
          >
            {t}
          </span>
          <Star className="size-5 text-primary md:size-8" />
        </span>
      ))}
    </div>
  );
  return (
    <div className="overflow-hidden border-y border-ink/10 bg-paper py-5 text-ink md:py-7" aria-hidden="true">
      <div className="flex w-max animate-marquee">
        {row}
        {row}
      </div>
    </div>
  );
}

function Statement() {
  return (
    <section id="estudio" className="grain relative overflow-hidden bg-primary px-5 py-24 text-primary-foreground md:px-10 md:py-40">
      <Star className="pointer-events-none absolute -bottom-[18%] -left-[14%] w-[70vw] text-primary-deep opacity-70 md:w-[38vw] animate-spin-slower" />

      <div className="relative z-10 mx-auto grid max-w-[1600px] gap-12 md:grid-cols-12">
        <div className="md:col-span-3">
          <p className="flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary-foreground/70">
            <span className="font-serif text-base normal-case italic tracking-normal">(02)</span>
            <span className="h-px w-8 bg-current opacity-50" />
            Estúdio
          </p>
        </div>

        <div className="md:col-span-9">
          <ScrollWords
            className="font-display text-[clamp(2.4rem,7vw,7.5rem)] font-black uppercase leading-[0.92] tracking-[-0.02em]"
            parts={[
              { text: "Seu próximo projeto merece o" },
              { text: "melhor studio", accent: true },
              { text: "do Brasil." },
            ]}
          />

          <div className="mt-14 grid gap-10 border-t border-primary-foreground/25 pt-8 md:mt-20 md:grid-cols-2 md:items-end">
            <Reveal>
              <p className="max-w-md text-lg leading-relaxed md:text-xl">
                Na ZONE STUDIO, cada detalhe importa. Criatividade, qualidade e dedicação em cada projeto.
              </p>
            </Reveal>
            <Reveal delay={120} className="md:justify-self-end">
              <Button asChild variant="studio" size="xl">
                <a href={DISCORD_URL} target="_blank" rel="noreferrer">
                  Faça seu orçamento
                  <ArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
                </a>
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="bg-paper px-5 py-24 text-ink md:px-10 md:py-36">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <SectionLabel index="03" tone="dark">
              O que fazemos
            </SectionLabel>
            <Reveal>
              <h2 className="mt-6 font-display text-[clamp(3.6rem,13vw,12rem)] font-black uppercase leading-[0.82] tracking-[-0.03em]">
                Servi<span className="font-serif font-normal normal-case italic tracking-normal text-primary">ços</span>
                <sup className="ml-2 align-top font-serif text-[0.18em] font-normal italic tracking-normal text-ink-muted">
                  (06)
                </sup>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={100} className="md:col-span-4">
            <p className="max-w-sm text-base leading-relaxed text-ink-muted md:text-lg">
              Seis frentes de trabalho, um mesmo cuidado: entender a sua marca antes de desenhar qualquer coisa.
            </p>
          </Reveal>
        </div>

        <ol className="mt-16 border-b border-ink/15 md:mt-24">
          {services.map((s, i) => (
            <li key={s.name} className="group relative overflow-hidden border-t border-ink/15">
              <span className="absolute inset-0 origin-bottom scale-y-0 bg-ink transition-transform duration-500 ease-[var(--ease-studio)] group-hover:scale-y-100" />
              <div className="relative grid grid-cols-[auto_1fr] items-baseline gap-x-5 gap-y-3 px-1 py-7 transition-colors duration-500 group-hover:text-paper md:grid-cols-12 md:items-center md:gap-x-8 md:px-4 md:py-10">
                <span className="font-serif text-xl italic text-primary transition-colors duration-500 group-hover:text-accent md:col-span-1 md:text-2xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-[clamp(1.9rem,6vw,5.2rem)] font-black uppercase leading-[0.9] tracking-[-0.02em] transition-transform duration-500 ease-[var(--ease-studio)] md:col-span-7 md:group-hover:translate-x-4">
                  {s.name}
                </h3>
                <p className="col-start-2 max-w-sm text-sm leading-relaxed text-ink-muted transition-colors duration-500 group-hover:text-paper/75 md:col-span-3 md:col-start-auto md:text-base">
                  {s.detail}
                </p>
                <span className="hidden justify-self-end md:col-span-1 md:flex">
                  <Star className="size-8 text-primary transition-transform duration-700 ease-[var(--ease-studio)] group-hover:rotate-[135deg] group-hover:scale-125 group-hover:text-accent" />
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" className="grain relative overflow-hidden px-5 py-28 md:px-10 md:py-44">
      <StarRing
        count={26}
        className="pointer-events-none absolute -right-[40%] top-1/2 w-[110vw] -translate-y-1/2 text-primary/60 md:-right-[12%] md:w-[min(55vw,880px)] animate-spin-slow"
      />
      <div className="relative z-10 mx-auto max-w-[1600px]">
        <SectionLabel index="04">Contato</SectionLabel>

        <h2 className="mt-10 font-display font-black uppercase leading-[0.86] tracking-[-0.03em] text-[clamp(3.2rem,12.5vw,13rem)]">
          <Reveal as="span" className="block">Vamos criar</Reveal>
          <Reveal as="span" delay={100} className="block">
            algo <span className="font-serif font-normal normal-case italic tracking-normal text-accent">incrível?</span>
          </Reveal>
        </h2>

        <div className="mt-14 flex flex-col gap-10 border-t border-border pt-8 md:mt-20 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="max-w-md text-lg leading-relaxed text-muted-foreground md:text-2xl">
              Conte sua ideia e solicite seu orçamento.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Button asChild variant="studioPrimary" size="xl" className="w-full md:w-auto">
              <a href={DISCORD_URL} target="_blank" rel="noreferrer">
                <DiscordIcon />
                Pedir orçamento no Discord
                <ArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
              </a>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="overflow-hidden border-t border-border px-5 pt-10 md:px-10">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-6 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <img src={logo.url} alt="" width={32} height={32} loading="lazy" className="size-8 rounded-sm object-cover" />
          <span>© {new Date().getFullYear()} ZONE STUDIO</span>
        </div>
        <span className="font-serif text-base normal-case italic tracking-normal">Feito com cuidado, no Brasil.</span>
        <a href="#inicio" className="group flex items-center gap-2 transition-colors hover:text-foreground">
          Voltar ao topo
          <ArrowUp className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </a>
      </div>
      <p
        aria-hidden="true"
        className="text-outline-thin mx-auto mt-10 max-w-[1600px] select-none text-center font-display font-black uppercase leading-[0.72] tracking-[-0.04em] font-wide text-primary text-[clamp(5rem,26vw,26rem)] -mb-[0.12em]"
      >
        Zone
      </p>
    </footer>
  );
}

function DiscordIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="fill-current">
      <path d="M20.32 4.37A19.8 19.8 0 0 0 15.4 2.85a.07.07 0 0 0-.08.04c-.21.38-.45.87-.61 1.25a18.3 18.3 0 0 0-5.49 0 12.6 12.6 0 0 0-.62-1.25.08.08 0 0 0-.08-.04 19.7 19.7 0 0 0-4.88 1.52.07.07 0 0 0-.03.03C.53 9.05-.32 13.58.1 18.06a.08.08 0 0 0 .03.06 19.9 19.9 0 0 0 5.99 3.03.08.08 0 0 0 .08-.03c.46-.63.87-1.3 1.23-1.99a.08.08 0 0 0-.04-.11 13.1 13.1 0 0 1-1.87-.89.08.08 0 0 1-.01-.13l.37-.29a.07.07 0 0 1 .08-.01c3.93 1.79 8.18 1.79 12.06 0a.07.07 0 0 1 .08.01l.37.29a.08.08 0 0 1-.01.13c-.6.35-1.22.65-1.87.89a.08.08 0 0 0-.04.11c.36.7.77 1.36 1.22 1.99a.08.08 0 0 0 .08.03 19.8 19.8 0 0 0 6-3.03.08.08 0 0 0 .03-.06c.5-5.18-.84-9.67-3.55-13.66a.06.06 0 0 0-.03-.03ZM8.02 15.33c-1.18 0-2.16-1.09-2.16-2.42 0-1.33.96-2.42 2.16-2.42 1.21 0 2.18 1.1 2.16 2.42 0 1.33-.96 2.42-2.16 2.42Zm7.97 0c-1.18 0-2.15-1.09-2.15-2.42 0-1.33.95-2.42 2.15-2.42 1.21 0 2.18 1.1 2.16 2.42 0 1.33-.95 2.42-2.16 2.42Z" />
    </svg>
  );
}

