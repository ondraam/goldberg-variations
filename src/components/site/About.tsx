export const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container-prose">
        <p className="eyebrow mb-6">About the Project</p>
        <h2 className="font-display text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl text-cream leading-tight mb-10">
          A conversation between four friends, gathered around one timeless theme.
        </h2>
        <div className="hairline mb-10" />

        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-light">
          <p>
            On Friday <span className="text-cream">24 April 2026</span>, Animal Music releases
            Bach's <em className="text-cream">Goldberg Variations</em> (ANI 146) in a new
            arrangement performed by Radek Baborák (French horn), Dalibor Karvay (violin),
            Andrej Pushkarev (marimba) and Petr Valášek (bass clarinet).
          </p>
          <p>
            The project was originally conceived by Radek Baborák during his tenure as curator of
            the chamber music series at the Dvořák Prague Festival in 2017. For the occasion, he
            commissioned Czech composer Tomáš Ille to create a new arrangement of Bach's iconic
            work for French horn, violin, guitar and bassoon. Nearly a decade later, Baborák and
            Ille revisited the score, refining the arrangement for this recording, made in Prague
            in October 2025. In this new version, the original guitar and bassoon parts have been
            reimagined for marimba and bass clarinet.
          </p>

          <blockquote className="relative my-12 pl-8 border-l border-gold">
            <p className="font-display text-2xl md:text-3xl italic text-cream leading-snug">
              "Performed in this line-up, the Goldberg Variations resemble a conversation between
              four friends discussing one central theme. At times, they stand in sharp contrast to
              one another; at others, they seem to arrive at a shared understanding."
            </p>
            <footer className="mt-4 text-sm uppercase tracking-[0.25em] text-gold">
              — Radek Baborák
            </footer>
          </blockquote>

          <p>
            Whether performed by a soloist or by ensembles of different sizes, the{" "}
            <em className="text-cream">Goldberg Variations</em> always represent both an artistic
            and technical challenge. Yet even after centuries, this music remains an endless
            source of inspiration and creativity.
          </p>
          <p>
            Recorded at the Sts. Simon and Jude Church in Prague with sound engineer Jakub Hadraba
            and producer Petr Ostrouchov. Cover design by Pavlína Štefková (Studio Najbrt),
            photographs by Václav Jirásek. Distributed internationally by Supraphon.
          </p>
        </div>

        <dl className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-border">
          {[
            ["Catalogue", "ANI 146"],
            ["Release", "24 Apr 2026"],
            ["Total Time", "59:55"],
            ["Tracks", "32"],
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
