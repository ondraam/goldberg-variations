import { useLanguage } from "@/context/LanguageContext";

export const About = () => {
  const { t, tArr } = useLanguage();
  const body = tArr("about.body");
  return (
    <section id="about" className="py-32 relative">
      <div className="container-prose">
        <p className="eyebrow mb-6">{t("about.label")}</p>
        <h2 className="font-display text-4xl md:text-5xl text-cream leading-tight mb-10">
          {t("about.heading")}
        </h2>
        <div className="hairline mb-10" />

        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-light">
          {body.slice(0, 2).map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <blockquote className="relative my-12 pl-8 border-l border-gold">
            <p className="font-display text-2xl md:text-3xl italic text-cream leading-snug">
              {t("about.quote")}
            </p>
            <footer className="mt-4 text-sm uppercase tracking-[0.25em] text-gold">
              {t("about.quote.author")}
            </footer>
          </blockquote>

          {body.slice(2).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <dl className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-border">
          {[
            [t("about.stats.catalogue"), "ANI 146"],
            [t("about.stats.release"), t("about.stats.release.value")],
            [t("about.stats.totaltime"), "59:55"],
            [t("about.stats.tracks"), "32"],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">{k}</dt>
              <dd className="font-display text-2xl text-gold">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
