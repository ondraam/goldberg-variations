import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Tracklist } from "@/components/site/Tracklist";
import { Artists } from "@/components/site/Artists";
import { Gallery } from "@/components/site/Gallery";
import { Footer } from "@/components/site/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "J. S. Bach – Goldberg Variations | Baborák · Karvay · Pushkarev · Valášek";
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta(
      "description",
      "Bach's Goldberg Variations newly arranged for French horn, violin, marimba and bass clarinet. Released by Animal Music, 24 April 2026."
    );
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Tracklist />
        <Artists />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
