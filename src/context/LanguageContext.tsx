import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "cs";

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<Lang, Record<string, string>> = {
  en: {
    // NAV
    "nav.about": "About",
    "nav.tracklist": "Tracklist",
    "nav.artists": "Artists",
    "nav.gallery": "Gallery",
    "nav.credits": "Credits",
    "nav.listen": "Listen",

    // HERO
    "hero.label": "Animal Music · ANI 146",
    "hero.sub": "A new arrangement for French horn, violin, marimba and bass clarinet by Tomáš Ille — recorded in Prague, October 2025.",
    "hero.order": "Order CD",
    "hero.youtube": "Listen on YouTube",

    // ABOUT
    "about.label": "About the project",
    "about.heading": "A conversation between four friends, gathered around one timeless theme.",

    // TRACKLIST
    "tracklist.label": "Tracklist",
    "tracklist.heading": "32 Variations",
    "tracklist.total": "Total duration",

    // ARTISTS
    "artists.label": "Artists",
    "artists.heading": "The Performers",

    // GALLERY
    "gallery.label": "Recording Sessions · Reportage",
    "gallery.heading": "Behind the Scenes",

    // CREDITS
    "credits.label": "Credits",
    "credits.producer": "Producer",
    "credits.sound": "Sound Engineer",
    "credits.design": "Design",
    "credits.photo": "Photography",
    "credits.recorded": "Recorded",
    "credits.recorded.value": "October 2025, Church of St. Simon and Jude, Prague",
    "credits.label.value": "Animal Music",
  },
  cs: {
    // NAV
    "nav.about": "O projektu",
    "nav.tracklist": "Seznam skladeb",
    "nav.artists": "Interpreti",
    "nav.gallery": "Galerie",
    "nav.credits": "Kredity",
    "nav.listen": "Poslechnout",

    // HERO
    "hero.label": "Animal Music · ANI 146",
    "hero.sub": "Nová aranžmá pro lesní roh, housle, marimbu a basklarinet — Tomáš Ille. Nahráno v Praze, říjen 2025.",
    "hero.order": "Objednat CD",
    "hero.youtube": "Poslechnout na YouTube",

    // ABOUT
    "about.label": "O projektu",
    "about.heading": "Rozhovor čtyř přátel kolem jednoho nadčasového tématu.",

    // TRACKLIST
    "tracklist.label": "Seznam skladeb",
    "tracklist.heading": "32 variací",
    "tracklist.total": "Celková délka",

    // ARTISTS
    "artists.label": "Interpreti",
    "artists.heading": "Účinkující",

    // GALLERY
    "gallery.label": "Nahrávací session · Reportáž",
    "gallery.heading": "Za scénou",

    // CREDITS
    "credits.label": "Kredity",
    "credits.producer": "Producent",
    "credits.sound": "Zvukový režisér",
    "credits.design": "Design",
    "credits.photo": "Fotografie",
    "credits.recorded": "Nahráno",
    "credits.recorded.value": "Říjen 2025, kostel sv. Šimona a Judy, Praha",
    "credits.label.value": "Animal Music",
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
