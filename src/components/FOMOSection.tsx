import { useScrollReveal } from "@/hooks/useScrollReveal";
import CTAButton from "./CTAButton";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { number: "847", label: "Players who downloaded in the last hour" },
  { number: "50,000+", label: "Legends already living in Ancient China" },
  { number: "0", label: "Reasons not to download right now" },
];

const FOMOSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="relative py-20 md:py-28">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-background/75" />
      </div>
      <div ref={ref} className="scroll-reveal relative z-10 mx-auto max-w-5xl px-4 text-center">
        <h2 className="mb-12 font-display text-3xl font-bold text-foreground md:text-5xl">
          Every Minute You Wait...
        </h2>

        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {stats.map((s, i) => (
            <div key={i} className="rounded-lg border border-destructive/30 bg-card p-8">
              <div className="mb-2 font-display text-5xl font-black text-destructive md:text-6xl">{s.number}</div>
              <div className="text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>

        <p className="mb-8 text-xl text-gold">
          The servers are free. The game is free.<br />
          The only cost is the time you waste not playing it.
        </p>

        <CTAButton text="⚔️ JOIN THEM NOW — IT'S FREE →" />
      </div>
    </section>
  );
};

export default FOMOSection;
