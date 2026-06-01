import { useLang } from "../i18n";
import type { Lang } from "../data";

const OPTIONS: { value: Lang; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "id", label: "ID" },
];

/**
 * Segmented EN | ID toggle. The active pill slides between the two segments
 * and switching is instant: every piece of copy re-renders from the i18n
 * context. `className` lets callers tweak spacing per placement.
 */
export default function LanguageSwitcher({
  className = "",
}: {
  className?: string;
}) {
  const { lang, setLang } = useLang();
  const activeIndex = OPTIONS.findIndex((o) => o.value === lang);

  return (
    <div
      role="group"
      aria-label="Language"
      className={`relative inline-flex items-center rounded-full border border-black/10 bg-white/60 p-0.5 ${className}`}
    >
      {/* Sliding active indicator */}
      <span
        aria-hidden="true"
        className="absolute top-0.5 bottom-0.5 left-0.5 w-[calc(50%-2px)] rounded-full bg-ink transition-transform duration-300 ease-out"
        style={{ transform: `translateX(${activeIndex * 100}%)` }}
      />
      {OPTIONS.map((opt) => {
        const active = opt.value === lang;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => setLang(opt.value)}
            aria-pressed={active}
            className={`relative z-10 w-9 rounded-full py-1 text-[12px] font-semibold tracking-wide transition-colors duration-300 ${
              active ? "text-cream" : "text-ink-600 hover:text-ink"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
