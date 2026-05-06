import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#tracklist", label: "Tracklist" },
  { href: "#artists", label: "Artists" },
  { href: "#gallery", label: "Gallery" },
  { href: "#recording", label: "Credits" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border/60" : "bg-transparent"
      }`}
    >
      <nav className="container-wide flex items-center justify-between h-16">
        <a href="#top" className="font-display text-xl tracking-wide text-cream">
          <span className="text-gold">BWV</span> 988
        </a>
        <ul className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-gold transition-colors duration-300">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="https://open.spotify.com/album/2S13F6rilYYqlmb9mwla9r?si=xmjU_2cTRcK_yBBwT-X3Bw"
          target="_blank"
          rel="noreferrer"
          className="text-xs uppercase tracking-[0.25em] text-gold hover:text-accent transition-colors"
        >
          Listen
        </a>
      </nav>
    </header>
  );
};
