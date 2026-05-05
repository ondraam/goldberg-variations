import cover from "@/assets/album-cover.jpg";
import { useLanguage } from "@/context/LanguageContext";

export const Hero = () => {
  const { t } = useLanguage();
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
      <div className="container-wide relative grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative animate-fade-in order-2 lg:order-1">
          <div className="absolute -inset-6 bg-gradient-gold opacity-20 blur-3xl rounded-full" />
          <img
            src={cover}
            alt="Album cover: Johann Sebastian Bach – Goldberg Variations performed by Radek Baborák, Dalibor Karvay, Andrej Pushkarev, Petr Valášek"
            className="relative w-full max-w-xl mx-auto shadow-elegant"
          />
        </div>

        <div className="order-1 lg:order-2 animate-fade-up">
          <p className="eyebrow mb-6">{t("hero.label")}</p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-cream">
            {t("hero.title.composer")} <span className="italic text-gold">{t("hero.title.surname")}</span>
            <span className="block mt-2">{t("hero.title.work")}</span>
          </h1>
          <div className="hairline my-8" />
          <p className="text-muted-foreground text-lg leading-relaxed max-w-md mb-8">
            {t("hero.sub")}
          </p>
          <div className="flex flex-wrap gap-3 text-sm font-light text-cream/90 mb-10">
            {["Radek Baborák", "Dalibor Karvay", "Andrej Pushkarev", "Petr Valášek"].map((n) => (
              <span key={n} className="px-3 py-1 border border-border/80 rounded-sm">
                {n}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://animalmusic.cz/album/baborak-karvay-pushkarev-valasek-johann-sebastian-bach-goldberg-variations"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-gold text-primary-foreground text-sm uppercase tracking-[0.2em] hover:shadow-gold transition-all duration-500"
            >
              {t("hero.order")}
            </a>
            <a
              href="https://youtube.com/playlist?list=OLAK5uy_nykMPLZYMeiIvfDuHSnkBY7UBj6wYlSZI"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border border-gold text-gold text-sm uppercase tracking-[0.2em] hover:bg-gold hover:text-primary-foreground transition-all duration-500"
            >
              {t("hero.youtube")}
            </a>
          </div>
          <p className="mt-10 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {t("hero.release")}
          </p>
        </div>
      </div>
    </section>
  );
};
