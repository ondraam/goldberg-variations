import { useLanguage } from "@/context/LanguageContext";

export const RecordingInfo = () => {
  const { t } = useLanguage();

  const credits = [
    { label: t("credits.location"), value: t("credits.location.value") },
    { label: t("credits.recorded"), value: t("credits.recorded.value") },
    { label: t("credits.sound"), value: "Jakub Hadraba" },
    { label: t("credits.producer"), value: "Petr Ostrouchov" },
    { label: t("credits.arrangement"), value: "Tomáš Ille" },
    { label: t("credits.design"), value: "Pavlína Štefková · Studio Najbrt" },
    { label: t("credits.photo"), value: "Václav Jirásek" },
    { label: t("credits.label"), value: t("credits.label.value") },
  ];

  return (
    <section id="recording" className="py-32 border-t border-border">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-4">{t("recording.label")}</p>
            <h2 className="font-display text-4xl md:text-5xl text-cream leading-tight mb-8">
              {t("recording.heading.pre")}{" "}
              <span className="italic text-gold">{t("recording.heading.em")}</span>
              {t("recording.heading.post")}
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-10">
              {t("recording.body")}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://youtube.com/playlist?list=OLAK5uy_nykMPLZYMeiIvfDuHSnkBY7UBj6wYlSZI"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-7 py-3 bg-gradient-gold text-primary-foreground text-xs uppercase tracking-[0.25em] hover:shadow-gold transition-all duration-500"
              >
                {t("recording.youtube")}
              </a>
              <a
                href="https://animalmusic.cz/album/baborak-karvay-pushkarev-valasek-johann-sebastian-bach-goldberg-variations"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-7 py-3 border border-gold text-gold text-xs uppercase tracking-[0.25em] hover:bg-gold hover:text-primary-foreground transition-all duration-500"
              >
                {t("recording.animal")}
              </a>
            </div>
          </div>

          <dl className="lg:col-span-7 grid sm:grid-cols-2 gap-x-10">
            {credits.map((c) => (
              <div
                key={c.label}
                className="flex items-baseline justify-between gap-6 py-5 border-b border-border/60"
              >
                <dt className="text-xs uppercase tracking-[0.25em] text-muted-foreground shrink-0">
                  {c.label}
                </dt>
                <dd className="text-cream font-light text-right">{c.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};
