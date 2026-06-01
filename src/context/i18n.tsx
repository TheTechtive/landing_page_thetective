import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { content } from "../data";
import type { Content, Lang } from "../data";

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
};

const LangContext = createContext<LangContextValue | null>(null);

const STORAGE_KEY = "thetective-lang";

function readInitialLang(): Lang {
  if (typeof window === "undefined") return "en";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "en" || saved === "id") return saved;
  // Fall back to the browser preference, defaulting to English.
  return navigator.language?.toLowerCase().startsWith("id") ? "id" : "en";
}

/** Wraps the app, holds the active language, and persists it across reloads. */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(readInitialLang);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggle = () => setLang((prev: any) => (prev === "en" ? "id" : "en"));

  return (
    <LangContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LangContext.Provider>
  );
}

/** Access (and change) the active language. */
export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within a LanguageProvider");
  return ctx;
}

/** The full copy bundle for the active language. */
export function useContent(): Content {
  const { lang } = useLang();
  return content[lang];
}
