import { useScrollReveal } from "@/hooks/useScrollReveal";
import CTAButton from "./CTAButton";
import heroBg from "@/assets/hero-bg.jpg";

const BrutalTruthSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="relative py-20 md:py-28">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-background/85" />
      </div>
      <div ref={ref} className="scroll-reveal relative z-10 mx-auto max-w-3xl px-4 text-center">
        <h2 className="mb-10 font-display text-3xl font-bold text-foreground md:text-5xl">
          Your Squad Is Already In-Game
        </h2>

        <div className="mb-10 space-y-6 text-lg leading-relaxed text-foreground/90 md:text-xl">
          <p>
            Right now, while you're scrolling,<br />
            <span className="font-semibold text-gold">50,000+ gamers are grinding legendary quests</span><br />
            in a massive open world.
          </p>
          <p>
            They're mastering 50+ combat techniques.<br />
            Flying across rooftops. Walking on water.<br />
            Building alliances. Dominating kingdoms.
          </p>
          <p className="font-semibold text-gold text-2xl">
            Total cost? $0. Zero. Nada.
          </p>
          <p className="text-foreground">
            The only difference between them and you?<br />
            <span className="font-bold text-green-glow text-2xl">They hit download.</span>
          </p>
        </div>

        <CTAButton text="▶ JOIN THE FIGHT — IT'S FREE →" />
      </div>
    </section>
  );
};

export default BrutalTruthSection;
