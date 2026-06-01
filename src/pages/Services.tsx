import { useState } from "react";
import { Link } from "react-router-dom";
import { useContent } from "../context/i18n";
import ConsultationSection from "../components/ConsultationSection";
import { ArrowUpRight, Container, Reveal, SectionKicker } from "../components/ui";

function ServicesSection() {
  const { services } = useContent();
  const [active, setActive] = useState(0);
  const detail = services.tabs[active].detail;

  return (
    <section className="pt-28 pb-24 sm:pt-32 sm:pb-28">
      <Container>
        <Reveal>
          <SectionKicker>{services.kicker}</SectionKicker>
          <h1 className="max-w-2xl text-[40px] font-bold leading-[1.05] tracking-tight sm:text-[56px]">
            {services.heading}
          </h1>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-ink-600">
            {services.subtitle}
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Tab list */}
          <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-x-visible lg:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {services.tabs.map((tab: any, i: any) => {
              const isActive = i === active;
              return (
                <button
                  key={tab.label}
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className={`flex shrink-0 items-center justify-between whitespace-nowrap rounded-xl border px-5 py-4 text-left text-[16px] font-medium transition-colors lg:whitespace-normal ${isActive
                      ? "border-transparent bg-ink text-cream"
                      : "border-black/8 bg-white text-ink-700 hover:border-black/20"
                    }`}
                >
                  {tab.label}
                  <ArrowUpRight
                    className={`h-4 w-4 transition-opacity ${isActive ? "opacity-100" : "opacity-0"
                      }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Detail card reflects the active tab */}
          <div key={active} className="animate-rise rounded-2xl border border-black/5 bg-white p-8 sm:p-10">
            <h3 className="text-[26px] font-bold tracking-tight">
              {detail.title}
            </h3>
            <p className="mt-4 max-w-md text-[16px] leading-relaxed text-ink-600">
              {detail.description}
            </p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {detail.tags.map((tag: any) => (
                <span
                  key={tag}
                  className="rounded-full bg-cream-200 px-3.5 py-1.5 text-[13px] font-medium text-ink-700"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 text-[15px] font-medium text-accent transition-colors hover:text-accent-600"
            >
              {detail.cta}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default function Services() {
  return (
    <>
      <ServicesSection />
      <ConsultationSection />
    </>
  );
}
