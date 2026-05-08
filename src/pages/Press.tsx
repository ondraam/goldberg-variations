import { useEffect } from "react";
import { Download, FileText, Mail, Phone, Globe } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

const downloads = [
  {
    label: "Press Release",
    badge: "CZ",
    href: "/Goldberg_variations_press_release_CZ.pdf",
  },
  {
    label: "Press Release",
    badge: "EN",
    href: "/Goldberg_variations_press_release_EN.pdf",
  },
  {
    label: "CD Booklet",
    badge: null,
    href: "/Goldberg_Variations_E-BOOKLET.pdf",
  },
];

const Press = () => {
  useEffect(() => {
    document.title = "Press / EPK – Goldberg Variations | Baborák · Karvay · Pushkarev · Valášek";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="pt-32 pb-24">
        {/* Intro */}
        <section className="container-prose">
          <p className="eyebrow mb-6">Electronic Press Kit</p>
          <h1 className="font-display text-4xl md:text-5xl text-cream leading-tight mb-10">
            Goldberg Variations — a new arrangement.
          </h1>
          <div className="hairline mb-10" />
          <p className="text-muted-foreground text-lg leading-relaxed font-light">
            Bach's Goldberg Variations in a new arrangement for French horn, violin, marimba and
            bass clarinet — a world premiere release on Animal Music (24 April 2026). The project
            was initiated by horn player and conductor Radek Baborák, joined by violinist Dalibor
            Karvay, marimbist Andrei Pushkarev and bass clarinettist Petr Valášek. The arrangement
            was commissioned from Czech composer Tomáš Ille for the Dvořák Prague Festival.
          </p>
        </section>

        {/* Making Of */}
        <section className="container-wide mt-32">
          <p className="eyebrow mb-4">Behind the scenes</p>
          <h2 className="font-display text-3xl md:text-4xl text-cream leading-tight mb-10">
            Making Of
          </h2>
          <div className="relative w-full overflow-hidden border border-border" style={{ paddingTop: "56.25%" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/Zo3uS6X1xdA"
              title="Goldberg Variations — Making Of"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        {/* Press Photos */}
        <section className="container-prose mt-32 text-center">
          <p className="eyebrow mb-4">Photo © Václav Jirásek, 2025</p>
          <h2 className="font-display text-3xl md:text-4xl text-cream leading-tight mb-10">
            Press Photos
          </h2>
          <a
            href="https://www.dropbox.com/scl/fi/lcyisa97l3ubxro21tga5/PHOTOS_HighRes_300-DPI.zip?rlkey=44uxjp93vqrxvboyno7nfa0cd&st=ewxu1j2f&dl=1"
            download
            className="inline-flex w-full sm:w-auto items-center justify-center gap-3 px-8 py-4 min-h-11 bg-gradient-gold text-primary-foreground text-xs uppercase tracking-[0.25em] hover:shadow-gold transition-all duration-500"
          >
            <Download className="w-4 h-4" />
            Download Press Photo Package
          </a>
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            ZIP • 300 DPI • Photo © Václav Jirásek
          </p>
        </section>

        {/* Downloads */}
        <section className="container-wide mt-32">
          <h2 className="font-display text-3xl md:text-4xl text-cream leading-tight mb-10">
            Downloads
          </h2>
          <ul className="divide-y divide-border border-y border-border">
            {downloads.map((d, i) => (
              <li key={i} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-5">
                <div className="flex items-center gap-4 min-w-0">
                  <FileText className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-cream font-light truncate">{d.label}</span>
                  {d.badge && (
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gold border border-gold/50 px-2 py-0.5">
                      {d.badge}
                    </span>
                  )}
                </div>
                <a
                  href={d.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-2.5 min-h-11 border border-gold text-gold text-xs uppercase tracking-[0.25em] hover:bg-gold hover:text-primary-foreground transition-all duration-500 shrink-0"
                >
                  <Download className="w-4 h-4" />
                  PDF
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Media Contact */}
        <section className="container-wide mt-32">
          <h2 className="font-display text-3xl md:text-4xl text-cream leading-tight mb-10">
            Media Contact
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ContactBlock
              label="Czech Press Service"
              name="Markéta Faustová / 2media"
              items={[
                { icon: <Mail className="w-4 h-4" />, text: "marketa@2media.cz", href: "mailto:marketa@2media.cz" },
                { icon: <Phone className="w-4 h-4" />, text: "+420 722 119 091", href: "tel:+420722119091" },
              ]}
            />
            <ContactBlock
              label="International Press"
              name="Moë Faulkner"
              items={[
                { icon: <Mail className="w-4 h-4" />, text: "moefaulkner@outlook.com", href: "mailto:moefaulkner@outlook.com" },
                { icon: <Phone className="w-4 h-4" />, text: "+44 7534 602149 (UK)", href: "tel:+447534602149" },
                { icon: <Phone className="w-4 h-4" />, text: "+420 774 836 576 (CZ)", href: "tel:+420774836576" },
              ]}
            />
          </div>

          <div className="mt-8">
            <ContactBlock
              label="Label"
              name="Animal Music — Petr Ostrouchov"
              items={[
                { icon: <Mail className="w-4 h-4" />, text: "info@animalmusic.cz", href: "mailto:info@animalmusic.cz" },
                { icon: <Globe className="w-4 h-4" />, text: "www.animalmusic.cz", href: "https://www.animalmusic.cz" },
              ]}
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const ContactBlock = ({
  label,
  name,
  items,
}: {
  label: string;
  name: string;
  items: { icon: React.ReactNode; text: string; href: string }[];
}) => (
  <div className="border border-border p-8 bg-card">
    <p className="eyebrow mb-3">{label}</p>
    <p className="font-display text-2xl text-cream mb-5">{name}</p>
    <ul className="space-y-2.5">
      {items.map((it, i) => (
        <li key={i}>
          <a
            href={it.href}
            target={it.href.startsWith("http") ? "_blank" : undefined}
            rel={it.href.startsWith("http") ? "noreferrer" : undefined}
            className="inline-flex items-center gap-3 text-cream hover:text-gold transition-colors font-light"
          >
            <span className="text-gold">{it.icon}</span>
            {it.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Press;
