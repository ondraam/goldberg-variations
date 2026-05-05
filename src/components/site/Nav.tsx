import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export const Nav = () => {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: t("nav.about") },
    { href: "#tracklist", label: t("nav.tracklist") },
    { href: "#artists", label: t("nav.artists") },
    { href: "#gallery", label: t("nav.gallery") },
    { href: "#recording", label: t("nav.credits") },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border/60" : "bg-transparent"
      }`}
    >
      <nav className="container-wide flex items-center justify-between h-16">
        <a href="#top" className="font-display text-xl tracking-wide text-cream">
          <span className="text-gold">BWV</span> 988
        </a>

        <ul className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-gold transition-colors duration-300">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <div className="flex items-center border border-gold/30 rounded-sm overflow-hidden text-[10px] tracking-widest">
            <button
              onClick={() => setLang("cs")}
              className={`px-3 py-1.5 transition-colors ${
                lang === "cs"
                  ? "bg-gold text-primary-foreground font-medium"
                  : "text-gold/60 hover:text-gold"
              }`}
              aria-label="Přepnout do češtiny"
            >
              CS
            </button>
            <div className="w-px h-4 bg-gold/30" />
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1.5 transition-colors ${
                lang === "en"
                  ? "bg-gold text-primary-foreground font-medium"
                  : "text-gold/60 hover:text-gold"
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>

          <a
            href="https://animalmusic.cz/album/baborak-karvay-pushkarev-valasek-johann-sebastian-bach-goldberg-variations"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline text-xs uppercase tracking-[0.25em] text-gold hover:text-accent transition-colors"
          >
            {t("nav.listen")}
          </a>
        </div>
      </nav>
    </header>
  );
};
