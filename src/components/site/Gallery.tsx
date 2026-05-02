import { useEffect, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import promoBaborak from "@/assets/promo-baborak.jpg";
import karvay from "@/assets/karvay.jpg";
import promoPushkarev from "@/assets/promo-pushkarev.jpg";
import promoValasek from "@/assets/promo-valasek.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

type Shot = { src: string; alt: string; caption?: string };

const promo: Shot[] = [
  { src: promoBaborak, alt: "Radek Baborák with French horn", caption: "Radek Baborák · French horn" },
  { src: karvay, alt: "Dalibor Karvay holding violin", caption: "Dalibor Karvay · Violin" },
  { src: promoPushkarev, alt: "Andrei Pushkarev with marimba mallets", caption: "Andrei Pushkarev · Marimba" },
  { src: promoValasek, alt: "Petr Valášek with bass clarinet", caption: "Petr Valášek · Bass Clarinet" },
];

const sessions: Shot[] = [
  { src: g1, alt: "The quartet performing inside the baroque church" },
  { src: g2, alt: "Recording session detail" },
  { src: g3, alt: "Musicians reading the score" },
  { src: g4, alt: "Marimba mallets and instrument" },
  { src: g5, alt: "French horn detail in candlelight" },
  { src: g6, alt: "Wide view of the recording session" },
];

const all = [...promo, ...sessions];

export const Gallery = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const close = useCallback(() => setOpenIdx(null), []);
  const next = useCallback(
    () => setOpenIdx((i) => (i === null ? i : (i + 1) % all.length)),
    []
  );
  const prev = useCallback(
    () => setOpenIdx((i) => (i === null ? i : (i - 1 + all.length) % all.length)),
    []
  );

  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openIdx, close, next, prev]);

  const Tile = ({ shot, idx, className = "" }: { shot: Shot; idx: number; className?: string }) => (
    <button
      onClick={() => setOpenIdx(idx)}
      className={`group relative overflow-hidden bg-secondary focus:outline-none focus-visible:ring-1 focus-visible:ring-gold ${className}`}
      aria-label={`Open ${shot.alt}`}
    >
      <img
        src={shot.src}
        alt={shot.alt}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-500" />
      {shot.caption && (
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold">{shot.caption}</span>
        </div>
      )}
    </button>
  );

  return (
    <section id="gallery" className="py-32 bg-secondary/30 border-t border-border">
      <div className="container-wide">
        <div className="mb-16">
          <p className="eyebrow mb-4">Gallery</p>
          <h2 className="font-display text-4xl md:text-5xl text-cream max-w-2xl leading-tight">
            Official promo portraits by <span className="italic text-gold">Václav Jirásek</span>.
          </h2>
          <p className="mt-6 text-muted-foreground font-light max-w-xl">
            Photographed on location at the Sts. Simon and Jude Church in Prague. Click any image to open the lightbox.
          </p>
        </div>

        {/* Promo grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {promo.map((shot, i) => (
            <Tile key={shot.src} shot={shot} idx={i} className="aspect-[3/4]" />
          ))}
        </div>

        {/* Session photos */}
        <div className="mt-20">
          <p className="eyebrow mb-6">From the recording sessions</p>
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <Tile shot={sessions[0]} idx={promo.length + 0} className="col-span-12 md:col-span-8 aspect-[4/3]" />
            <Tile shot={sessions[1]} idx={promo.length + 1} className="col-span-6 md:col-span-4 aspect-[4/5]" />
            <Tile shot={sessions[2]} idx={promo.length + 2} className="col-span-6 md:col-span-4 aspect-square" />
            <Tile shot={sessions[3]} idx={promo.length + 3} className="col-span-6 md:col-span-4 aspect-square" />
            <Tile shot={sessions[4]} idx={promo.length + 4} className="col-span-12 md:col-span-4 aspect-square" />
            <Tile shot={sessions[5]} idx={promo.length + 5} className="col-span-12 aspect-[21/9]" />
          </div>
        </div>

        <p className="mt-8 text-xs text-muted-foreground tracking-wider">
          Photographs © Václav Jirásek, 2026
        </p>
      </div>

      {/* Lightbox */}
      {openIdx !== null && (
        <div
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center animate-fade-in"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={(e) => { e.stopPropagation(); close(); }}
            className="absolute top-6 right-6 p-2 text-cream hover:text-gold transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 md:left-8 p-3 text-cream hover:text-gold transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 md:right-8 p-3 text-cream hover:text-gold transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <figure
            className="max-w-[92vw] max-h-[88vh] flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={all[openIdx].src}
              alt={all[openIdx].alt}
              className="max-w-full max-h-[80vh] object-contain shadow-elegant"
            />
            <figcaption className="text-center">
              <p className="text-cream font-light">{all[openIdx].caption || all[openIdx].alt}</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-2">
                {openIdx + 1} / {all.length} · © Václav Jirásek
              </p>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
};
