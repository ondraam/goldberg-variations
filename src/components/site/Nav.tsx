import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#tracklist", label: "Tracklist" },
  { href: "/#artists", label: "Artists" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#recording", label: "Credits" },
  { href: "/press", label: "Press" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || open ? "bg-background/95 backdrop-blur-md border-b border-border/60" : "bg-transparent"
      }`}
    >
      <nav className="container-wide flex items-center justify-between h-16">
        <a href="#top" className="font-display text-xl tracking-wide text-cream" onClick={() => setOpen(false)}>
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
          className="hidden md:inline-block text-xs uppercase tracking-[0.25em] text-gold hover:text-accent transition-colors"
        >
          Listen
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 text-cream hover:text-gold transition-colors"
        >
          {open ? <Menu className="w-6 h-6" style={{ display: "none" }} /> : null}
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-md">
          <ul className="container-wide py-4 flex flex-col text-sm uppercase tracking-[0.25em] text-cream">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center min-h-11 py-2 hover:text-gold transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://open.spotify.com/album/2S13F6rilYYqlmb9mwla9r?si=xmjU_2cTRcK_yBBwT-X3Bw"
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center min-h-11 py-2 text-gold hover:text-accent transition-colors"
              >
                Listen
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
