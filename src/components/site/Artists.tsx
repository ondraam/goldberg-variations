import { useState } from "react";
import { artists } from "@/data/album";
import baborak from "@/assets/baborak.jpg";
import karvay from "@/assets/karvay.jpg";
import pushkarev from "@/assets/pushkarev.jpg";
import valasek from "@/assets/valasek.jpg";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const portraits: Record<string, string> = {
  "Radek Baborák": baborak,
  "Dalibor Karvay": karvay,
  "Andrei Pushkarev": pushkarev,
  "Petr Valášek": valasek,
};

export const Artists = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const active = openIdx !== null ? artists[openIdx] : null;

  return (
    <section id="artists" className="py-32">
      <div className="container-wide">
        <div className="mb-16 max-w-2xl">
          <p className="eyebrow mb-4">Artists</p>
          <h2 className="font-display text-4xl md:text-5xl text-cream leading-tight">
            Four voices, four instruments, one work.
          </h2>
          <p className="mt-6 text-muted-foreground font-light">
            Tap a portrait to read the full biography.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {artists.map((a, i) => (
            <button
              key={a.name}
              onClick={() => setOpenIdx(i)}
              className="group block text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-gold"
              aria-label={`Read biography of ${a.name}`}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-5">
                <img
                  src={portraits[a.name]}
                  alt={`${a.name} – ${a.instrument}`}
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
                <span className="absolute bottom-4 right-4 text-[10px] uppercase tracking-[0.3em] text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Read bio →
                </span>
              </div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2">{a.instrument}</p>
              <h3 className="font-display text-2xl text-cream group-hover:text-gold transition-colors mb-3">
                {a.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">{a.bio}</p>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={openIdx !== null} onOpenChange={(o) => !o && setOpenIdx(null)}>
        <DialogContent className="max-w-3xl bg-card border-border p-0 overflow-hidden">
          {active && (
            <div className="grid md:grid-cols-5 gap-0">
              <div className="md:col-span-2 relative aspect-[3/4] md:aspect-auto bg-secondary">
                <img
                  src={portraits[active.name]}
                  alt={active.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="md:col-span-3 p-8 md:p-10 max-h-[80vh] overflow-y-auto">
                <DialogHeader className="text-left space-y-3">
                  <p className="eyebrow">{active.instrument}</p>
                  <DialogTitle className="font-display text-3xl md:text-4xl text-cream font-light">
                    {active.name}
                  </DialogTitle>
                  <DialogDescription className="sr-only">
                    Biography of {active.name}, {active.instrument} player on the Goldberg Variations album.
                  </DialogDescription>
                </DialogHeader>
                <div className="hairline my-6" />
                <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
                  {active.fullBio.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <a
                  href={active.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-8 text-xs uppercase tracking-[0.3em] text-gold hover:text-accent transition-colors border-b border-gold/40 hover:border-accent pb-1"
                >
                  Visit official website →
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
