import { tracklist } from "@/data/album";
import { useLanguage } from "@/context/LanguageContext";

export const Tracklist = () => {
  const { t } = useLanguage();
  return (
    <section id="tracklist" className="py-32 bg-secondary/30 border-y border-border">
      <div className="container-wide">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">{t("tracklist.label")}</p>
          <h2 className="font-display text-4xl md:text-5xl text-cream">
            {t("tracklist.heading")} <span className="italic text-gold">BWV 988</span>
          </h2>
          <p className="mt-4 text-sm text-muted-foreground tracking-wider">
            {t("tracklist.subtitle")}
          </p>
        </div>

        <ol className="grid md:grid-cols-2 gap-x-12 gap-y-1 max-w-5xl mx-auto">
          {tracklist.map((tr) => (
            <li
              key={tr.n}
              className="group flex items-baseline gap-4 py-3 border-b border-border/50 hover:border-gold/60 transition-colors"
            >
              <span className="font-display text-gold/70 w-8 tabular-nums text-right text-sm">
                {String(tr.n).padStart(2, "0")}
              </span>
              <span className="flex-1 text-cream/90 font-light group-hover:text-gold transition-colors">
                {tr.title}
              </span>
              <span className="text-muted-foreground text-sm tabular-nums">{tr.time}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
