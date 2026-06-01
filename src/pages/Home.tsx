import { Link } from "react-router-dom";
import { useContent } from "../i18n";
import ConsultationSection from "../components/ConsultationSection";
import { ArrowUpRight, Container, Reveal, SectionKicker } from "../components/ui";

function Hero() {
  const { hero } = useContent();
  return (
    <section className="relative overflow-hidden">
      {/* soft accent glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-24 -top-32 h-[480px] w-[480px] rounded-full bg-accent/10 blur-[130px]" />
      </div>

      <Container>
        <div className="grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          {/* Copy */}
          <div className="order-2 lg:order-1">
            <div
              className="animate-rise inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-[12px] font-semibold tracking-wide text-ink-700"
              style={{ animationDelay: "0ms" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {hero.badge}
            </div>

            <h1
              className="animate-rise mt-6 text-[44px] font-bold leading-[1.02] tracking-tight sm:text-[64px]"
              style={{ animationDelay: "100ms" }}
            >
              {hero.preline} <span className="text-accent">{hero.highlight}</span>
            </h1>

            <p
              className="animate-rise mt-6 max-w-xl text-[18px] font-medium leading-relaxed text-ink-600"
              style={{ animationDelay: "200ms" }}
            >
              {hero.subtitle}
            </p>

            <div
              className="animate-rise mt-8 flex flex-wrap gap-3"
              style={{ animationDelay: "300ms" }}
            >
              <Link
                to={hero.ctaPrimary.to}
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-[15px] font-semibold text-cream transition-opacity hover:opacity-90"
              >
                {hero.ctaPrimary.label}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to={hero.ctaSecondary.to}
                className="inline-flex items-center gap-2 rounded-full border border-black/15 px-6 py-3 text-[15px] font-semibold text-ink transition-colors hover:bg-black/5"
              >
                {hero.ctaSecondary.label}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Brand mark */}
          <div className="animate-rise flex justify-center order-1 lg:order-2" style={{ animationDelay: "220ms" }}>
            <div className="relative flex w-full max-w-md flex-col items-center overflow-hidden rounded-3xl border border-black/5 bg-white px-10 py-16 text-center shadow-[0_50px_100px_-40px_rgba(10,10,10,0.25)]">
              <div className="bg-dot-grid pointer-events-none absolute inset-0 opacity-[0.04]" />
              <div className="pointer-events-none absolute -top-16 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/10 blur-[90px]" />
              <img
                src="/assets/logo.png"
                alt="Thetective"
                className="relative h-28 w-28 object-contain"
              />
              <span className="relative mt-6 text-[30px] font-bold tracking-tight text-ink">
                thetective
              </span>
              <p className="relative mt-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-ink-500">
                {hero.badge}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Clients() {
  const { clients } = useContent();
  // Duplicate the list so the marquee can loop seamlessly at -50%.
  const loop = [...clients.logos, ...clients.logos];

  return (
    <section className="border-y border-black/5 py-12 sm:py-14">
      <Container>
        <p className="mb-9 text-center text-[12px] font-semibold uppercase tracking-[0.18em] text-ink-400">
          {clients.label}
        </p>
      </Container>

      <div className="marquee-mask group overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-4 pr-4 group-hover:[animation-play-state:paused]">
          {loop.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              aria-hidden={i >= clients.logos.length}
              className="flex h-20 w-44 shrink-0 items-center justify-center rounded-xl border border-black/5 bg-white px-5"
            >
              <img
                src={logo.src}
                alt={i < clients.logos.length ? logo.name : ""}
                title={logo.name}
                className="max-h-10 w-auto max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  const { capabilities } = useContent();
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionKicker>{capabilities.kicker}</SectionKicker>
          <h2 className="max-w-2xl text-[36px] font-bold leading-[1.08] tracking-tight sm:text-[48px]">
            {capabilities.heading}
          </h2>
          <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-ink-600">
            {capabilities.subtitle}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(i % 3) * 80}
              className="group rounded-2xl border border-black/5 bg-white p-6 transition-colors hover:border-black/15"
            >
              <h3 className="flex items-center justify-between text-[17px] font-bold tracking-tight">
                {item.title}
                <ArrowUpRight className="h-4 w-4 text-ink-400 transition-colors group-hover:text-accent" />
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-600">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function WeAre() {
  const { weAre } = useContent();
  return (
    <section className="border-t border-black/5 py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionKicker>{weAre.kicker}</SectionKicker>
        </Reveal>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal>
            <h2 className="text-[36px] font-bold leading-[1.08] tracking-tight sm:text-[52px]">
              {weAre.headingLead}
              <span className="text-accent">{weAre.headingHighlight}</span>
              {weAre.headingTail}
            </h2>
          </Reveal>
          <Reveal delay={120} className="space-y-5 lg:pt-3">
            {weAre.paragraphs.map((p, i) => (
              <p key={i} className="text-[17px] leading-relaxed text-ink-700">
                {p}
              </p>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Assurance() {
  const { assurance } = useContent();
  return (
    <section className="border-t border-black/5 py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionKicker>{assurance.kicker}</SectionKicker>
          <h2 className="max-w-2xl text-[36px] font-bold leading-[1.08] tracking-tight sm:text-[48px]">
            {assurance.heading}
          </h2>
          <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-ink-600">
            {assurance.subtitle}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {assurance.items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 100}
              className="rounded-2xl border border-black/5 bg-white p-7"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-[15px] font-bold text-cream">
                {i + 1}
              </span>
              <h3 className="mt-5 text-[19px] font-bold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-600">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Capabilities />
      <WeAre />
      <Assurance />
      <ConsultationSection />
    </>
  );
}
