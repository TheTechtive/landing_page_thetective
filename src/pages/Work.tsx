import { Link } from "react-router-dom";
import { useContent } from "../i18n";
import ConsultationSection from "../components/ConsultationSection";
import { ArrowUpRight, Container, Reveal, SectionKicker } from "../components/ui";

/** Small browser-window frame around a product screenshot. */
function BrowserFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_40px_90px_-40px_rgba(10,10,10,0.35)]">
      <div className="flex items-center gap-1.5 border-b border-black/5 bg-cream-200 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
      </div>
      <img src={src} alt={alt} className="w-full" />
    </div>
  );
}

function Check() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="mt-0.5 h-5 w-5 shrink-0 text-accent"
      aria-hidden="true"
    >
      <path
        d="M16.5 6 8.25 14.25 4.5 10.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Products() {
  const { work } = useContent();

  return (
    <section className="pt-28 pb-24 sm:pt-32 sm:pb-28">
      <Container>
        <Reveal>
          <SectionKicker>{work.kicker}</SectionKicker>
          <h1 className="max-w-3xl text-[40px] font-bold leading-[1.05] tracking-tight sm:text-[56px]">
            {work.headingLead}
            <span className="text-accent">{work.headingHighlight}</span>
            {work.headingTail}
          </h1>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-ink-600">
            {work.note}
          </p>
        </Reveal>

        <div className="mt-16 space-y-20 sm:space-y-28">
          {work.products.map((product, i) => {
            const flip = i % 2 === 1;
            return (
              <Reveal
                key={product.name}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <div className={flip ? "lg:order-2" : ""}>
                  <BrowserFrame src={product.image} alt={product.name} />
                </div>

                <div className={flip ? "lg:order-1" : ""}>
                  <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {product.tag}
                  </span>

                  <h2 className="mt-5 text-[32px] font-bold tracking-tight sm:text-[40px]">
                    {product.name}
                  </h2>

                  <p className="mt-4 max-w-md text-[17px] leading-relaxed text-ink-600">
                    {product.description}
                  </p>

                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-[15px] font-medium text-ink-700"
                      >
                        <Check />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="mt-9 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-[15px] font-medium text-cream transition-opacity hover:opacity-90"
                  >
                    {work.cta}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default function Work() {
  return (
    <>
      <Products />
      <ConsultationSection />
    </>
  );
}
