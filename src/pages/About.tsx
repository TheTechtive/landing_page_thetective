import { useContent } from "../i18n";
import ConsultationSection from "../components/ConsultationSection";
import { Container, Reveal, SectionKicker } from "../components/ui";

function AboutHero() {
  const { aboutHero } = useContent();
  return (
    <section className="pt-16 pb-12 sm:pt-20">
      <Container>
        <div className="inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1 text-[12px] font-medium tracking-wide text-ink-600">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {aboutHero.badge}
        </div>

        <div className="mt-7 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <h1 className="text-[48px] font-bold leading-[1.02] tracking-tight sm:text-[72px]">
            {aboutHero.headingLead}
            <span className="text-accent">{aboutHero.headingHighlight}</span>
            {aboutHero.headingTail}
          </h1>
          <div className="lg:pb-3">
            <p className="text-[17px] leading-relaxed text-ink-700">
              {aboutHero.subtitle}
            </p>
            <p className="mt-5 inline-flex items-center gap-2 text-[14px] font-medium text-ink-600">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {aboutHero.location}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Story() {
  const { story } = useContent();
  return (
    <section className="border-t border-black/5 py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionKicker>{story.kicker}</SectionKicker>
        </Reveal>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal>
            <h2 className="text-[40px] font-bold leading-[1.05] tracking-tight sm:text-[56px]">
              {story.headingLead}
              <span className="text-accent">{story.headingHighlight}</span>
              {story.headingTail}
            </h2>
          </Reveal>
          <Reveal delay={120} className="space-y-5 lg:pt-3">
            {story.paragraphs.map((p, i) => (
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

function Principles() {
  const { principles } = useContent();
  return (
    <section className="border-t border-black/5 py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionKicker>{principles.kicker}</SectionKicker>
          <h2 className="max-w-2xl text-[40px] font-bold leading-[1.05] tracking-tight sm:text-[56px]">
            {principles.heading}
          </h2>
          <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-ink-600">
            {principles.subtitle}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {principles.items.map((item, i) => (
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

export default function About() {
  return (
    <>
      <AboutHero />
      <Story />
      <Principles />
      <ConsultationSection />
    </>
  );
}
