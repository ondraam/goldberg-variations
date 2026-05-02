import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const Gallery = () => {
  return (
    <section id="gallery" className="py-32 bg-secondary/30 border-t border-border">
      <div className="container-wide">
        <div className="mb-16">
          <p className="eyebrow mb-4">Gallery</p>
          <h2 className="font-display text-4xl md:text-5xl text-cream max-w-2xl leading-tight">
            From the recording sessions at <span className="italic text-gold">Sts. Simon and Jude Church</span>, Prague.
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <figure className="col-span-12 md:col-span-8 overflow-hidden group">
            <img src={g1} alt="The quartet performing inside the baroque church" className="w-full h-full object-cover aspect-[4/3] transition-transform duration-1000 group-hover:scale-[1.03]" />
          </figure>
          <figure className="col-span-6 md:col-span-4 overflow-hidden group">
            <img src={g2} alt="Recording session detail" className="w-full h-full object-cover aspect-[4/5] transition-transform duration-1000 group-hover:scale-[1.03]" />
          </figure>

          <figure className="col-span-6 md:col-span-4 overflow-hidden group">
            <img src={g3} alt="Musicians reading the score" className="w-full h-full object-cover aspect-square transition-transform duration-1000 group-hover:scale-[1.03]" />
          </figure>
          <figure className="col-span-6 md:col-span-4 overflow-hidden group">
            <img src={g4} alt="Marimba mallets and instrument" className="w-full h-full object-cover aspect-square transition-transform duration-1000 group-hover:scale-[1.03]" />
          </figure>
          <figure className="col-span-12 md:col-span-4 overflow-hidden group bg-background flex items-center justify-center p-10">
            <blockquote className="font-display text-xl md:text-2xl italic text-cream text-center leading-snug">
              "An endless source of inspiration and creativity."
              <footer className="mt-5 text-[10px] not-italic uppercase tracking-[0.3em] text-gold font-body font-medium">
                Radek Baborák
              </footer>
            </blockquote>
          </figure>

          <figure className="col-span-6 md:col-span-5 overflow-hidden group">
            <img src={g5} alt="French horn detail in candlelight" className="w-full h-full object-cover aspect-[4/3] transition-transform duration-1000 group-hover:scale-[1.03]" />
          </figure>
          <figure className="col-span-6 md:col-span-7 overflow-hidden group">
            <img src={g6} alt="Wide view of the recording session" className="w-full h-full object-cover aspect-[4/3] transition-transform duration-1000 group-hover:scale-[1.03]" />
          </figure>
        </div>

        <p className="mt-8 text-xs text-muted-foreground tracking-wider">
          Photographs © Václav Jirásek, 2026
        </p>
      </div>
    </section>
  );
};
