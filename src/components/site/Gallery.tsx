import quartet from "@/assets/quartet.jpg";
import s1 from "@/assets/session-1.jpg";
import s2 from "@/assets/session-2.jpg";

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
          <figure className="col-span-12 md:col-span-8 relative overflow-hidden group">
            <img
              src={quartet}
              alt="Baborák, Karvay, Pushkarev and Valášek standing before the baroque altar"
              className="w-full h-full object-cover aspect-[4/3] transition-transform duration-[1.2s] group-hover:scale-[1.03]"
            />
          </figure>
          <figure className="col-span-6 md:col-span-4 overflow-hidden group">
            <img
              src={s1}
              alt="Recording session detail"
              className="w-full h-full object-cover aspect-[4/5] transition-transform duration-[1.2s] group-hover:scale-[1.03]"
            />
          </figure>
          <figure className="col-span-6 md:col-span-4 overflow-hidden group">
            <img
              src={s2}
              alt="Musicians at the marimba reading the score"
              className="w-full h-full object-cover aspect-[4/5] transition-transform duration-[1.2s] group-hover:scale-[1.03]"
            />
          </figure>
          <figure className="col-span-12 md:col-span-8 relative overflow-hidden group bg-background flex items-center justify-center p-12">
            <blockquote className="font-display text-2xl md:text-3xl italic text-cream max-w-xl text-center leading-snug">
              "Even after centuries, this music remains an endless source of inspiration and creativity."
              <footer className="mt-6 text-xs not-italic uppercase tracking-[0.3em] text-gold font-body font-medium">
                Radek Baborák
              </footer>
            </blockquote>
          </figure>
        </div>

        <p className="mt-8 text-xs text-muted-foreground tracking-wider">
          Photographs © Václav Jirásek, 2026
        </p>
      </div>
    </section>
  );
};
