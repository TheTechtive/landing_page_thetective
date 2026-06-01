import { Link } from "react-router-dom";
import { useContent } from "../i18n";
import { Container, Logo } from "./ui";

export default function Footer() {
  const { footer } = useContent();
  return (
    <footer className="border-t border-black/5 bg-cream py-16">
      <Container>
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              {footer.tagline}
            </p>
          </div>

          <div className="flex flex-col gap-12 sm:flex-row sm:gap-20">
            {footer.columns.map((col) => (
              <div key={col.title}>
                <h4 className="mb-4 text-[12px] font-medium uppercase tracking-[0.18em] text-ink-400">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="text-[15px] text-ink-700 transition-colors hover:text-ink"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h4 className="mb-4 text-[12px] font-medium uppercase tracking-[0.18em] text-ink-400">
                {footer.contactTitle}
              </h4>
              <a
                href={`mailto:${footer.email}`}
                className="block text-[15px] text-ink-700 transition-colors hover:text-ink"
              >
                {footer.email}
              </a>
              <a
                href={`tel:${footer.phone.replace(/[^+\d]/g, "")}`}
                className="mt-2 block text-[15px] text-ink-700 transition-colors hover:text-ink"
              >
                {footer.phone}
              </a>
              <p className="mt-2.5 text-[15px] text-ink-600">{footer.address}</p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-black/5 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-ink-400">
            {footer.legal} · {footer.location}
          </p>
          <p className="text-[13px] text-ink-400">{footer.bottom}</p>
        </div>
      </Container>
    </footer>
  );
}
