import { artists } from "@/data/album";
import baborak from "@/assets/baborak.jpg";
import karvay from "@/assets/karvay.jpg";
import pushkarev from "@/assets/pushkarev.jpg";
import valasek from "@/assets/valasek.jpg";

const portraits: Record<string, string> = {
  "Radek Baborák": baborak,
  "Dalibor Karvay": karvay,
  "Andrei Pushkarev": pushkarev,
  "Petr Valášek": valasek,
};

export const Artists = () => {
  return (
    <section id="artists" className="py-32">
      <div className="container-wide">
        <div className="mb-16 max-w-2xl">
          <p className="eyebrow mb-4">Artists</p>
          <h2 className="font-display text-4xl md:text-5xl text-cream leading-tight">
            Four voices, four instruments, one work.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {artists.map((a) => (
            <a
              key={a.name}
              href={a.link}
              target="_blank"
              rel="noreferrer"
              className="group block"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-5">
                <img
                  src={portraits[a.name]}
                  alt={`${a.name} – ${a.instrument}`}
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2">{a.instrument}</p>
              <h3 className="font-display text-2xl text-cream group-hover:text-gold transition-colors mb-3">
                {a.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">{a.bio}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
