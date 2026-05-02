export const Footer = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container-wide grid md:grid-cols-3 gap-10 text-sm">
        <div>
          <p className="font-display text-2xl text-cream mb-3">Animal Music</p>
          <p className="text-muted-foreground font-light leading-relaxed">
            A boutique independent label based in Prague, releasing more than 140 albums since 2007.
          </p>
        </div>
        <div>
          <p className="eyebrow mb-4">Press</p>
          <ul className="space-y-2 text-muted-foreground font-light">
            <li>Czech: 2media — <a className="text-cream hover:text-gold" href="mailto:marketa@2media.cz">marketa@2media.cz</a></li>
            <li>International: Moë Faulkner — <a className="text-cream hover:text-gold" href="mailto:moefaulkner@outlook.com">moefaulkner@outlook.com</a></li>
            <li>Label: <a className="text-cream hover:text-gold" href="mailto:info@animalmusic.cz">info@animalmusic.cz</a></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4">Listen & Buy</p>
          <ul className="space-y-2">
            <li>
              <a className="text-cream hover:text-gold" href="https://animalmusic.cz/album/baborak-karvay-pushkarev-valasek-johann-sebastian-bach-goldberg-variations" target="_blank" rel="noreferrer">
                Order CD on Animal Music →
              </a>
            </li>
            <li>
              <a className="text-cream hover:text-gold" href="https://youtube.com/playlist?list=OLAK5uy_nykMPLZYMeiIvfDuHSnkBY7UBj6wYlSZI" target="_blank" rel="noreferrer">
                YouTube playlist →
              </a>
            </li>
            <li>
              <a className="text-cream hover:text-gold" href="https://www.animalmusic.cz" target="_blank" rel="noreferrer">
                animalmusic.cz →
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-wide mt-12 pt-8 border-t border-border/50 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground tracking-wider">
        <p>© & ℗ Petr Ostrouchov (Animal Music), 2026 · ANI 146</p>
        <p>Cover design © Pavlína Štefková (Studio Najbrt) · Photos © Václav Jirásek</p>
      </div>
    </footer>
  );
};
