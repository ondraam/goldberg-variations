import { useLanguage } from "@/context/LanguageContext";
  { label: "Location", value: "Church of St. Simon and Jude, Prague" },
  { label: "Recorded", value: "October 2025" },
  { label: "Sound Engineer", value: "Jakub Hadraba" },
  { label: "Producer", value: "Petr Ostrouchov" },
  { label: "Arrangement", value: "Tomáš Ille" },
  { label: "Design", value: "Pavlína Štefková · Studio Najbrt" },
  { label: "Photography", value: "Václav Jirásek" },
  { label: "Label", value: "Animal Music · ANI 146" },
];

export const RecordingInfo = () => {
  return (
    <section id="recording" className="py-32 border-t border-border">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-4">Recording Info</p>
            <h2 className="font-display text-4xl md:text-5xl text-cream leading-tight mb-8">
              Captured under <span className="italic text-gold">baroque vaults</span>, in October 2025.
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-10">
              Recorded at the Church of St. Simon and Jude in Prague — a space whose centuries‑old
              acoustic shaped every note of this new arrangement.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://youtube.com/playlist?list=OLAK5uy_nykMPLZYMeiIvfDuHSnkBY7UBj6wYlSZI"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-7 py-3 bg-gradient-gold text-primary-foreground text-xs uppercase tracking-[0.25em] hover:shadow-gold transition-all duration-500"
              >
                Watch on YouTube
              </a>
              <a
                href="https://animalmusic.cz/album/baborak-karvay-pushkarev-valasek-johann-sebastian-bach-goldberg-variations"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-7 py-3 border border-gold text-gold text-xs uppercase tracking-[0.25em] hover:bg-gold hover:text-primary-foreground transition-all duration-500"
              >
                Animal Music
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
