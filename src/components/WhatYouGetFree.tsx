import { useScrollReveal } from "@/hooks/useScrollReveal";
import CTAButton from "./CTAButton";

const features = [
  { icon: "⚔️", title: "LEGENDARY COMBAT SYSTEM", desc: "Master 50+ ancient techniques — walk on water, aerial acrobatics, chi-powered strikes. Free." },
  { icon: "🌍", title: "MASSIVE OPEN WORLD", desc: "100km²+ of Ancient China to explore. Mountains, temples, hidden caves, bustling markets. Free." },
  { icon: "🏯", title: "TOTAL LIFE FREEDOM", desc: "Choose your path: doctor, architect, bodyguard, merchant. Live how YOU want. Free." },
  { icon: "👥", title: "LIVING NPC WORLD", desc: "1,000+ NPCs who remember you, react to your choices, and have their own lives. Free." },
  { icon: "📖", title: "EPIC MAIN STORY", desc: "40+ hours of deep narrative through dynastic wars and ancient conflicts. Free." },
  { icon: "🔄", title: "ONGOING UPDATES", desc: "Regular new content, events and expansions from the developers. Free." },
];

const WhatYouGetFree = () => {
  const ref = useScrollReveal();

  return (
    <section className="bg-background py-20 md:py-28">
      <div ref={ref} className="scroll-reveal mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-5xl">
            Everything Inside — <span className="text-gradient-gold">100% Free. Always.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            No season pass. No pay-to-win. No hidden fees. Just pure epic game.
          </p>
        </div>

        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={i}
              className="card-hover rounded-lg border border-border bg-card p-6"
            >
              <div className="mb-3 text-4xl">{f.icon}</div>
              <h3 className="mb-2 font-display text-lg font-semibold text-gold">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mb-8 rounded-lg border border-gold/30 bg-card p-6 text-center">
          <p className="text-xl font-bold text-foreground">
            All of this. Games like this sell for <span className="text-destructive">$59.99</span>.<br />
            Yours today: <span className="text-green-glow text-3xl font-black">FREE.</span>
          </p>
        </div>

        <div className="text-center">
          <CTAButton text="▶ GET ALL OF THIS — FREE →" />
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetFree;
