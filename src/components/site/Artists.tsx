import { useState } from "react";
import baborak from "@/assets/baborak.jpg";
import karvay from "@/assets/karvay.jpg";
import pushkarev from "@/assets/pushkarev.jpg";
import valasek from "@/assets/valasek.jpg";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useLanguage } from "@/context/LanguageContext";

type ArtistKey = "baborak" | "karvay" | "pushkarev" | "valasek";

const artistDefs: { key: ArtistKey; name: string; portrait: string; link: string }[] = [
  { key: "baborak", name: "Radek Baborák", portrait: baborak, link: "https://www.baborak.com" },
  { key: "karvay", name: "Dalibor Karvay", portrait: karvay, link: "https://www.daliborkarvay.com" },
  { key: "pushkarev", name: "Andrej Pushkarev", portrait: pushkarev, link: "https://www.andreipushkarev.com" },
  { key: "valasek", name: "Petr Valášek", portrait: valasek, link: "https://www.clarinet-factory.cz" },
];

export const Artists = () => {
  const { t, tArr } = useLanguage();
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const active = openIdx !== null ? artistDefs[openIdx] : null;

  return (
    <section id="artists" className="py-32">
      <div className="container-wide">
        <div className="mb-16 max-w-2xl">
          <p className="eyebrow mb-4">{t("artists.label")}</p>
          <h2 className="font-display text-4xl md:text-5xl text-cream leading-tight">
            {t("artists.heading")}
          </h2>
          <p className="mt-6 text-muted-foreground font-light">{t("artists.sub")}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {artistDefs.map((a, i) => {
            const instrument = t(`artist.${a.key}.instrument`);
            const bio = t(`artist.${a.key}.bio`);
            return (
              <button
                key={a.key}
                onClick={() => setOpenIdx(i)}
                className="group block text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-gold"
                aria-label={`${t("artists.bioOf")} ${a.name}`}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-5">
                  <img
                    src={a.portrait}
                    alt={`${a.name} – ${instrument}`}
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out scale-105 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
                  <span className="absolute bottom-4 right-4 text-[10px] uppercase tracking-[0.3em] text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {t("artists.readbio")}
                  </span>
                </div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2">{instrument}</p>
                <h3 className="font-display text-2xl text-cream group-hover:text-gold transition-colors mb-3">
                  {a.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">{bio}</p>
              </button>
            );
          })}
        </div>
      </div>

      <Dialog open={openIdx !== null} onOpenChange={(o) => !o && setOpenIdx(null)}>
        <DialogContent className="max-w-3xl bg-card border-border p-0 overflow-hidden">
          {active && (
            <div className="grid md:grid-cols-5 gap-0">
              <div className="md:col-span-2 relative aspect-[3/4] md:aspect-auto bg-secondary">
                <img
                  src={active.portrait}
                  alt={active.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="md:col-span-3 p-8 md:p-10 max-h-[80vh] overflow-y-auto">
                <DialogHeader className="text-left space-y-3">
                  <p className="eyebrow">{t(`artist.${active.key}.instrument`)}</p>
                  <DialogTitle className="font-display text-3xl md:text-4xl text-cream font-light">
                    {active.name}
                  </DialogTitle>
                  <DialogDescription className="sr-only">
                    {t("artists.bioOf")} {active.name}
                  </DialogDescription>
                </DialogHeader>
                <div className="hairline my-6" />
                <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
                  {tArr(`artist.${active.key}.fullBio`).map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <a
                  href={active.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-8 text-xs uppercase tracking-[0.3em] text-gold hover:text-accent transition-colors border-b border-gold/40 hover:border-accent pb-1"
                >
                  {t("artists.visit")}
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
