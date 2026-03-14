import { useEffect, useRef } from "react";
import combatImg from "@/assets/combat-feature.jpg";
import landscapeImg from "@/assets/landscape-feature.jpg";
import npcImg from "@/assets/npc-feature.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const rows = [
  {
    img: combatImg,
    title: "Combat That Defies Physics",
    desc: "Chain legendary techniques in cinematic sequences no other game delivers. Glide across water, soar between rooftops, unleash chi powers that reshape battles. All of this — completely free to experience.",
    reverse: false,
  },
  {
    img: landscapeImg,
    title: "An Entire Civilization to Explore",
    desc: "Over 100km² of meticulously crafted 10th century China. Every village, market and hidden temple handcrafted. Your choices ripple through the economy and politics of the entire world.",
    reverse: true,
  },
  {
    img: npcImg,
    title: "A World That Remembers You",
    desc: "Help a merchant today — he remembers in 3 in-game years. Betray an ally — face consequences weeks later. Where Winds Meet simulates real social consequences in ways no other free game comes close to matching.",
    reverse: false,
  },
];

const FeatureRow = ({ img, title, desc, reverse }: typeof rows[0]) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-reveal flex flex-col items-center gap-8 md:flex-row ${reverse ? "md:flex-row-reverse" : ""}`}
    >
      <div className="w-full md:w-1/2">
        <img src={img} alt={title} className="w-full rounded-lg border border-border object-cover shadow-lg" />
      </div>
      <div className="w-full md:w-1/2">
        <h3 className="mb-4 font-display text-2xl font-bold text-gold md:text-3xl">{title}</h3>
        <p className="text-lg leading-relaxed text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
};

const DeepFeatures = () => {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 space-y-16 md:space-y-24">
        {rows.map((row, i) => (
          <FeatureRow key={i} {...row} />
        ))}
      </div>
    </section>
  );
};

export default DeepFeatures;
