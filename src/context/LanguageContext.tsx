import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "cs";

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<Lang, Record<string, string>> = {
  en: {
    "nav.about": "About",
    "nav.tracklist": "Tracklist",
    "nav.artists": "Artists",
    "nav.gallery": "Gallery",
    "nav.credits": "Credits",
    "nav.listen": "Listen",
    "hero.label": "Animal Music · ANI 146",
    "hero.sub": "A new arrangement for French horn, violin, marimba and bass clarinet by Tomáš Ille — recorded in Prague, October 2025.",
    "hero.order": "Order CD",
    "hero.youtube": "Listen on YouTube",
    "about.label": "About the project",
    "about.heading": "A conversation between four friends, gathered around one timeless theme.",
    "recording.label": "Recording Sessions · Reportage",
  },
  cs: {
    "nav.about": "O projektu",
    "nav.tracklist": "Seznam skladeb",
    "nav.artists": "Interpreti",
    "nav.gallery": "Galerie",
    "nav.credits": "Kredity",
    "nav.listen": "Poslechnout",
    "hero.label": "Animal Music · ANI 146",
    "hero.sub": "Nová aranžmá pro lesní roh, housle, marimbu a basklarinet — Tomáš Ille. Nahráno v Praze, říjen 2025.",
    "hero.order": "Objednat CD",
    "hero.youtube": "Poslechnout na YouTube",
    "about.label": "O projektu",
    "about.heading": "Rozhovor čtyř přátel kolem jednoho nadčasového tématu.",
    "recording.label": "Nahrávací session · Reportáž",
  },
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");
  const t = (key: string) => translations[lang][key] ?? key;
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be inside LanguageProvider");
  return ctx;
};
