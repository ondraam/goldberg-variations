import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "cs";
type TValue = string | string[];

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  tArr: (key: string) => string[];
}

const translations: Record<Lang, Record<string, TValue>> = {
  en: {
    // NAV
    "nav.about": "About",
    "nav.tracklist": "Tracklist",
    "nav.artists": "Artists",
    "nav.gallery": "Gallery",
    "nav.credits": "Credits",
    "nav.listen": "Listen",

    // HERO
    "hero.label": "Animal Music · ANI 146",
    "hero.title.composer": "Johann Sebastian",
    "hero.title.surname": "Bach",
    "hero.title.work": "Goldberg Variations",
    "hero.sub":
      "A new arrangement for French horn, violin, marimba and bass clarinet by Tomáš Ille — recorded in Prague, October 2025.",
    "hero.order": "Order CD",
    "hero.youtube": "Listen on YouTube",
    "hero.release": "International Release · 24 April 2026",

    // ABOUT
    "about.label": "About the project",
    "about.heading":
      "A conversation between four friends, gathered around one timeless theme.",
    "about.body": [
      "On Friday 24 April 2026, Animal Music releases Bach's Goldberg Variations (ANI 146) in a new arrangement performed by Radek Baborák (French horn), Dalibor Karvay (violin), Andrej Pushkarev (marimba) and Petr Valášek (bass clarinet).",
      "The project was originally conceived by Radek Baborák during his tenure as curator of the chamber music series at the Dvořák Prague Festival in 2017. For the occasion, he commissioned Czech composer Tomáš Ille to create a new arrangement of Bach's iconic work for French horn, violin, guitar and bassoon. Nearly a decade later, Baborák and Ille revisited the score, refining the arrangement for this recording, made in Prague in October 2025. In this new version, the original guitar and bassoon parts have been reimagined for marimba and bass clarinet.",
      "Whether performed by a soloist or by ensembles of different sizes, the Goldberg Variations always represent both an artistic and technical challenge. Yet even after centuries, this music remains an endless source of inspiration and creativity.",
      "Recorded at the Sts. Simon and Jude Church in Prague with sound engineer Jakub Hadraba and producer Petr Ostrouchov. Cover design by Pavlína Štefková (Studio Najbrt), photographs by Václav Jirásek. Distributed internationally by Supraphon.",
    ],
    "about.quote":
      "\"Performed in this line-up, the Goldberg Variations resemble a conversation between four friends discussing one central theme. At times, they stand in sharp contrast to one another; at others, they seem to arrive at a shared understanding.\"",
    "about.quote.author": "— Radek Baborák",
    "about.stats.catalogue": "Catalogue",
    "about.stats.release": "Release",
    "about.stats.release.value": "24 Apr 2026",
    "about.stats.totaltime": "Total Time",
    "about.stats.tracks": "Tracks",

    // TRACKLIST
    "tracklist.label": "Tracklist",
    "tracklist.heading": "Goldberg Variations",
    "tracklist.subtitle": "Arranged by Tomáš Ille · Total time 59:55",

    // ARTISTS
    "artists.label": "Artists",
    "artists.heading": "Four voices, four instruments, one work.",
    "artists.sub": "Tap a portrait to read the full biography.",
    "artists.readbio": "Read bio →",
    "artists.visit": "Visit official website →",
    "artists.bioOf": "Biography of",

    // Per-artist (instrument labels + bios)
    "artist.baborak.instrument": "French Horn",
    "artist.baborak.bio":
      "Former Principal Horn of the Czech, Munich and Berlin Philharmonics. Internationally renowned soloist, conductor and chamber musician.",
    "artist.baborak.fullBio": [
      "Radek Baborák is one of the most celebrated French horn players of his generation. Before focusing primarily on his international solo career, conducting and chamber music, he enjoyed an extensive career as Principal Horn with orchestras such as the Czech Philharmonic, the Munich Philharmonic and the Berlin Philharmonic.",
      "The Goldberg Variations marks his seventh album on Animal Music. Previous recordings include a Piazzolla trilogy with his Orquestrina ensemble, an album of Horn Quintets featuring works by Brahms, Glazunov and Sibelius with his Baborák Ensemble, Mahler's Das Knaben Wunderhorn arranged for the Baborák Ensemble and soloists, and an album of Horn Concertos by Pauer and Glière recorded with the Prague Symphony Orchestra under Tomáš Brauner.",
      "The Goldberg Variations project was originally conceived by Baborák in 2017 during his tenure as curator of the chamber music series at the Dvořák Prague Festival.",
    ],

    "artist.karvay.instrument": "Violin",
    "artist.karvay.bio":
      "Slovakian violin virtuoso, First Concertmaster of the Vienna Symphony Orchestra from 2020 to 2025.",
    "artist.karvay.fullBio": [
      "Slovakian violinist Dalibor Karvay is one of Central Europe's most distinguished string soloists. From 2020 to 2025 he served as First Concertmaster of the Vienna Symphony Orchestra, a position he held alongside an active solo and chamber music career across Europe.",
      "A long-time collaborator of Radek Baborák and member of the Baborák Ensemble, Karvay brings a luminous, deeply singing tone to Bach's score — qualities especially suited to the intimate, conversational character of this new arrangement.",
    ],

    "artist.pushkarev.instrument": "Marimba",
    "artist.pushkarev.bio":
      "Latvian-Ukrainian percussionist, member of the Grammy Award-winning chamber orchestra Kremerata Baltica led by Gidon Kremer.",
    "artist.pushkarev.fullBio": [
      "Latvian-Ukrainian percussionist Andrej Pushkarev is a member of the Grammy Award-winning chamber orchestra Kremerata Baltica, led by Gidon Kremer, with whom he has performed and recorded internationally for more than two decades.",
      "On this recording the marimba assumes the part originally written by Tomáš Ille for guitar, lending Bach's harmonic architecture a warm, resonant pulse that anchors the ensemble.",
    ],

    "artist.valasek.instrument": "Bass Clarinet",
    "artist.valasek.bio":
      "Czech bass clarinettist and member of the acclaimed clarinet quartet Clarinet Factory.",
    "artist.valasek.fullBio": [
      "Czech bass clarinettist Petr Valášek is a long-standing member of Clarinet Factory, the celebrated clarinet quartet whose work spans contemporary classical, world and crossover repertoire.",
      "In this arrangement, the bass clarinet replaces the bassoon of the original 2017 version, contributing a darkly expressive low voice that converses with horn, violin and marimba throughout the cycle.",
    ],

    // GALLERY
    "gallery.label": "Gallery",
    "gallery.heading": "Official promo portraits by Václav Jirásek.",
    "gallery.sub": "Click any image to open the lightbox.",
    "gallery.reportage": "Recording sessions · reportage",
    "gallery.photo_credit": "Photographs © Václav Jirásek, 2026",

    // RECORDING / CREDITS
    "recording.label": "Recording Info",
    "recording.heading.pre": "Captured under",
    "recording.heading.em": "baroque vaults",
    "recording.heading.post": ", in October 2025.",
    "recording.body":
      "Recorded at the Church of St. Simon and Jude in Prague — a space whose centuries‑old acoustic shaped every note of this new arrangement.",
    "recording.youtube": "Watch on YouTube",
    "recording.animal": "Animal Music",

    "credits.location": "Location",
    "credits.location.value": "Church of St. Simon and Jude, Prague",
    "credits.recorded": "Recorded",
    "credits.recorded.value": "October 2025",
    "credits.sound": "Sound Engineer",
    "credits.producer": "Producer",
    "credits.arrangement": "Arrangement",
    "credits.design": "Design",
    "credits.photo": "Photography",
    "credits.label": "Label",
    "credits.label.value": "Animal Music · ANI 146",

    // FOOTER
    "footer.about":
      "A boutique independent label based in Prague, releasing more than 140 albums since 2007.",
    "footer.press": "Press",
    "footer.press.cz": "Czech: 2media —",
    "footer.press.intl": "International: Moë Faulkner —",
    "footer.press.label": "Label:",
    "footer.listenbuy": "Listen & Buy",
    "footer.order": "Order CD on Animal Music →",
    "footer.youtube": "YouTube playlist →",
    "footer.copyright": "© & ℗ Petr Ostrouchov (Animal Music), 2026 · ANI 146",
    "footer.credits":
      "Cover design © Pavlína Štefková (Studio Najbrt) · Photos © Václav Jirásek",
  },

  cs: {
    // NAV
    "nav.about": "O projektu",
    "nav.tracklist": "Skladby",
    "nav.artists": "Interpreti",
    "nav.gallery": "Galerie",
    "nav.credits": "Kredity",
    "nav.listen": "Poslechnout",

    // HERO
    "hero.label": "Animal Music · ANI 146",
    "hero.title.composer": "Johann Sebastian",
    "hero.title.surname": "Bach",
    "hero.title.work": "Goldbergovské variace",
    "hero.sub":
      "Nová aranžmá pro lesní roh, housle, marimbu a basklarinet od Tomáše Illeho — nahráno v Praze v říjnu 2025.",
    "hero.order": "Objednat CD",
    "hero.youtube": "Poslechnout na YouTube",
    "hero.release": "Mezinárodní vydání · 24. dubna 2026",

    // ABOUT
    "about.label": "O projektu",
    "about.heading":
      "Rozhovor čtyř přátel kolem jednoho nadčasového tématu.",
    "about.body": [
      "V pátek 24. dubna 2026 vydává Animal Music Bachovy Goldbergovské variace (ANI 146) v novém aranžmá v podání Radka Baboráka (lesní roh), Dalibora Karvaye (housle), Andreje Puškareva (marimba) a Petra Valáška (basklarinet).",
      "Projekt původně vznikl z popudu Radka Baboráka v roce 2017 během jeho působení coby kurátora komorní řady festivalu Dvořákova Praha. Pro tuto příležitost zadal českému skladateli Tomáši Illemu vytvoření nového aranžmá Bachova ikonického díla pro lesní roh, housle, kytaru a fagot. Téměř o deset let později se Baborák s Illem k partituře vrátili a aranžmá pro tuto nahrávku, pořízenou v Praze v říjnu 2025, přepracovali. V této nové verzi byly původní party kytary a fagotu nově obsazeny marimbou a basklarinetem.",
      "Ať už jsou Goldbergovské variace prováděny sólistou nebo soubory různé velikosti, vždy představují uměleckou i technickou výzvu. Přesto i po staletích zůstává tato hudba nevyčerpatelným zdrojem inspirace a tvořivosti.",
      "Nahráno v kostele sv. Šimona a Judy v Praze se zvukovým mistrem Jakubem Hadrabou a producentem Petrem Ostrouchovem. Obal navrhla Pavlína Štefková (Studio Najbrt), fotografie pořídil Václav Jirásek. Mezinárodní distribuce: Supraphon.",
    ],
    "about.quote":
      "„V tomto obsazení připomínají Goldbergovské variace rozhovor čtyř přátel, kteří diskutují o jednom společném tématu. Někdy stojí v ostrém kontrastu, jindy se zdá, že docházejí ke společnému porozumění.“",
    "about.quote.author": "— Radek Baborák",
    "about.stats.catalogue": "Katalog",
    "about.stats.release": "Vydání",
    "about.stats.release.value": "24. 4. 2026",
    "about.stats.totaltime": "Celková délka",
    "about.stats.tracks": "Skladby",

    // TRACKLIST
    "tracklist.label": "Skladby",
    "tracklist.heading": "Goldbergovské variace",
    "tracklist.subtitle": "Aranžmá Tomáš Ille · Celková délka 59:55",

    // ARTISTS
    "artists.label": "Interpreti",
    "artists.heading": "Čtyři hlasy, čtyři nástroje, jedno dílo.",
    "artists.sub": "Klikněte na portrét pro celý životopis.",
    "artists.readbio": "Životopis →",
    "artists.visit": "Oficiální web →",
    "artists.bioOf": "Životopis",

    "artist.baborak.instrument": "Lesní roh",
    "artist.baborak.bio":
      "Bývalý sólohornista České, Mnichovské a Berlínské filharmonie. Mezinárodně uznávaný sólista, dirigent a komorní hráč.",
    "artist.baborak.fullBio": [
      "Radek Baborák patří k nejvýraznějším hornistům své generace. Než se začal naplno věnovat především mezinárodní sólové dráze, dirigování a komorní hudbě, působil dlouhá léta jako sólohornista v orchestrech, jako jsou Česká filharmonie, Mnichovská filharmonie a Berlínská filharmonie.",
      "Goldbergovské variace jsou jeho sedmým albem u Animal Music. Mezi jeho předchozí nahrávky patří piazzollovská trilogie se souborem Orquestrina, album hornových kvintetů Brahmse, Glazunova a Sibelia s Baborák Ensemble, Mahlerův Chlapcův kouzelný roh v úpravě pro Baborák Ensemble a sólisty, a album hornových koncertů Pauera a Gliéra s Symfonickým orchestrem hl. m. Prahy FOK pod taktovkou Tomáše Braunera.",
      "Projekt Goldbergovských variací původně vznikl z Baborákovy iniciativy v roce 2017 během jeho působení coby kurátora komorní řady festivalu Dvořákova Praha.",
    ],

    "artist.karvay.instrument": "Housle",
    "artist.karvay.bio":
      "Slovenský houslový virtuos, v letech 2020–2025 první koncertní mistr Vídeňských symfoniků.",
    "artist.karvay.fullBio": [
      "Slovenský houslista Dalibor Karvay patří k nejvýraznějším smyčcovým sólistům střední Evropy. V letech 2020 až 2025 působil jako první koncertní mistr Vídeňských symfoniků a zároveň pokračoval v aktivní sólové i komorní kariéře po celé Evropě.",
      "Dlouholetý spolupracovník Radka Baboráka a člen Baborák Ensemble vnáší do Bachovy partitury zářivý a hluboce zpěvný tón — vlastnosti, které se výjimečně hodí k intimnímu, dialogickému charakteru tohoto nového aranžmá.",
    ],

    "artist.pushkarev.instrument": "Marimba",
    "artist.pushkarev.bio":
      "Lotyšsko-ukrajinský bicista, člen komorního orchestru Kremerata Baltica vedeného Gidonem Kremerem, oceněného cenou Grammy.",
    "artist.pushkarev.fullBio": [
      "Lotyšsko-ukrajinský bicista Andrej Puškarev je členem komorního orchestru Kremerata Baltica vedeného Gidonem Kremerem, oceněného cenou Grammy, s nímž více než dvě desetiletí mezinárodně koncertuje a nahrává.",
      "Na této nahrávce přebírá marimba part původně napsaný Tomášem Illem pro kytaru a dodává Bachově harmonické architektuře teplý, rezonantní puls, jenž celé seskupení ukotvuje.",
    ],

    "artist.valasek.instrument": "Basklarinet",
    "artist.valasek.bio":
      "Český basklarinetista a člen ceněného klarinetového kvarteta Clarinet Factory.",
    "artist.valasek.fullBio": [
      "Český basklarinetista Petr Valášek je dlouholetým členem Clarinet Factory, oceňovaného klarinetového kvarteta, jehož repertoár sahá od soudobé klasiky přes world music po crossover.",
      "V tomto aranžmá nahrazuje basklarinet fagot z původní verze z roku 2017 a přináší temně expresivní hluboký hlas, který v průběhu celého cyklu vede dialog s hornou, houslemi a marimbou.",
    ],

    // GALLERY
    "gallery.label": "Galerie",
    "gallery.heading": "Oficiální promo portréty od Václava Jiráska.",
    "gallery.sub": "Kliknutím na obrázek otevřete náhled.",
    "gallery.reportage": "Nahrávací session · reportáž",
    "gallery.photo_credit": "Fotografie © Václav Jirásek, 2026",

    // RECORDING / CREDITS
    "recording.label": "Nahrávací informace",
    "recording.heading.pre": "Zachyceno pod",
    "recording.heading.em": "barokními klenbami",
    "recording.heading.post": " v říjnu 2025.",
    "recording.body":
      "Nahráno v kostele sv. Šimona a Judy v Praze — prostoru, jehož staletími formovaná akustika ovlivnila každý tón tohoto nového aranžmá.",
    "recording.youtube": "Sledovat na YouTube",
    "recording.animal": "Animal Music",

    "credits.location": "Místo",
    "credits.location.value": "Kostel sv. Šimona a Judy, Praha",
    "credits.recorded": "Nahráno",
    "credits.recorded.value": "Říjen 2025",
    "credits.sound": "Zvukový mistr",
    "credits.producer": "Producent",
    "credits.arrangement": "Aranžmá",
    "credits.design": "Design",
    "credits.photo": "Fotografie",
    "credits.label": "Label",
    "credits.label.value": "Animal Music · ANI 146",

    // FOOTER
    "footer.about":
      "Butikový nezávislý label se sídlem v Praze, vydávající od roku 2007 více než 140 alb.",
    "footer.press": "Tisk",
    "footer.press.cz": "Česká republika: 2media —",
    "footer.press.intl": "Mezinárodní: Moë Faulkner —",
    "footer.press.label": "Label:",
    "footer.listenbuy": "Poslech & nákup",
    "footer.order": "Objednat CD u Animal Music →",
    "footer.youtube": "YouTube playlist →",
    "footer.copyright": "© & ℗ Petr Ostrouchov (Animal Music), 2026 · ANI 146",
    "footer.credits":
      "Design obalu © Pavlína Štefková (Studio Najbrt) · Fotografie © Václav Jirásek",
  },
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");
  const t = (key: string) => {
    const v = translations[lang][key];
    if (typeof v === "string") return v;
    if (Array.isArray(v)) return v.join(" ");
    return key;
  };
  const tArr = (key: string) => {
    const v = translations[lang][key];
    if (Array.isArray(v)) return v;
    if (typeof v === "string") return [v];
    return [];
  };
  return (
    <LanguageContext.Provider value={{ lang, setLang, t, tArr }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be inside LanguageProvider");
  return ctx;
};
