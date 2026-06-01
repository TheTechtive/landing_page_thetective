import { createElement, useEffect, useRef, useState } from "react";
import type { ElementType, ReactNode } from "react";
import { Link } from "react-router-dom";

/**
 * Reveals its children with a fade-up the first time they scroll into view.
 * `delay` (ms) lets callers stagger sibling reveals. Pass `as` to render a
 * different element (e.g. an anchor) while keeping the reveal behaviour; any
 * extra props (href, onClick, …) are forwarded to that element.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  as = "div",
  ...rest
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
} & Record<string, unknown>) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return createElement(
    as,
    {
      ref,
      style: { transitionDelay: `${delay}ms` },
      className: `reveal ${visible ? "reveal-in" : ""} ${className}`,
      ...rest,
    },
    children
  );
}

/** Centered, max-width page container matching the Figma 1536px artboard's content column. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-6 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}

/** The small "(0x) label" eyebrow that introduces each section. */
export function SectionKicker({ children }: { children: ReactNode }) {
  return (
    <p className="mb-6 text-[12px] font-medium uppercase tracking-[0.18em] text-ink-400">
      {children}
    </p>
  );
}

/** Diagonal arrow used on links, buttons and cards. Color follows currentColor. */
export function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4.6665 4.6665H11.3332V11.3332"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.6665 11.3332L11.3332 4.6665"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Word-mark: the "T" glyph + "thetective" lockup used in nav and footer. */
export function Logo({
  to = "/",
  light = false,
}: {
  to?: string;
  light?: boolean;
}) {
  return (
    <Link to={to} className="flex items-center gap-2.5">
      <img src="/assets/logo.png" alt="" className="h-7 w-7" />
      <span
        className={`text-[18px] font-bold tracking-tight ${
          light ? "text-cream" : "text-ink"
        }`}
      >
        thetective
      </span>
    </Link>
  );
}
