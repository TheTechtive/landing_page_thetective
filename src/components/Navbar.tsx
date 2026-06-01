import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useContent } from "../i18n";
import { Container, Logo } from "./ui";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { pathname } = useLocation();
  const { nav } = useContent();
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-cream/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-8 md:flex">
            {nav.links.map((link) => {
              const active =
                link.to === pathname ||
                (link.to === "/" && pathname === "/");
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-[14px] transition-colors hover:text-ink ${
                    active ? "text-ink font-medium" : "text-ink-600"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSwitcher />

            <Link
              to={nav.cta.to}
              className="hidden rounded-full bg-ink px-5 py-2.5 text-[14px] font-medium text-cream transition-opacity hover:opacity-90 sm:inline-block"
            >
              {nav.cta.label}
            </Link>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-black/5 md:hidden"
            >
              <span className="relative block h-4 w-5">
                <span
                  className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300 ${
                    open ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 block h-0.5 w-5 bg-current transition-opacity duration-300 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300 ${
                    open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu panel */}
      <div
        className={`overflow-hidden border-t border-black/5 bg-cream/95 backdrop-blur-md transition-[max-height] duration-300 ease-out md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <Container>
          <nav className="flex flex-col gap-1 py-4">
            {nav.links.map((link) => {
              const active =
                link.to === pathname ||
                (link.to === "/" && pathname === "/");
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`rounded-lg px-2 py-3 text-[16px] transition-colors hover:bg-black/5 ${
                    active ? "text-ink font-medium" : "text-ink-700"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              to={nav.cta.to}
              className="mt-3 flex items-center justify-center rounded-full bg-ink px-5 py-3 text-[15px] font-medium text-cream transition-opacity hover:opacity-90"
            >
              {nav.cta.label}
            </Link>
          </nav>
        </Container>
      </div>
    </header>
  );
}
