import { Play } from "lucide-react";
import { tracklist } from "@/data/album";

const PLAYLIST_ID = "OLAK5uy_nykMPLZYMeiIvfDuHSnkBY7UBj6wYlSZI";

export const Tracklist = () => {
  return (
    <section id="tracklist" className="py-32 bg-secondary/30 border-y border-border">
      <div className="container-wide">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">Tracklist</p>
          <h2 className="font-display text-4xl md:text-5xl text-cream">
            Goldberg Variations <span className="italic text-gold">BWV 988</span>
          </h2>
          <p className="mt-4 text-sm text-muted-foreground tracking-wider">
            Arranged by Tomáš Ille · Total time 59:55
          </p>
        </div>

        <ol
          className="grid md:grid-cols-2 gap-x-12 max-w-5xl mx-auto md:[grid-auto-flow:column] md:[grid-template-rows:repeat(16,auto)]"
        >
          {tracklist.map((t) => (
            <li key={t.n}>
              <a
                href={`https://www.youtube.com/playlist?list=${PLAYLIST_ID}&index=${t.n}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-baseline gap-4 py-3 border-b border-border/50 hover:border-gold/60 transition-colors no-underline"
              >
                <span className="font-display text-gold/70 w-8 tabular-nums text-right text-sm">
                  {String(t.n).padStart(2, "0")}
                </span>
                <span className="flex-1 text-cream/90 font-light group-hover:text-gold transition-colors">
                  {t.title}
                </span>
                <span className="text-muted-foreground text-sm tabular-nums">{t.time}</span>
                <Play
                  className="w-3 h-3 text-gold opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="currentColor"
                />
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
