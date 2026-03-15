import { useScrollReveal } from "@/hooks/useScrollReveal";
import CTAButton from "./CTAButton";
import combatBg from "@/assets/combat-bg.jpg";

const BrutalTruthSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute left-0 top-0 bottom-0 w-full md:w-[60%]">
        <img src={combatBg} alt="Epic Combat" className="h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-l from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div ref={ref} className="scroll-reveal relative z-10 mx-auto w-full max-w-6xl px-4 py-16 md:py-24">
        <div className="grid items-center gap-8 md:grid-cols-2">
          {/* Left side — empty, background image shows through */}
          <div className="hidden md:block" />

          {/* Right side — Text */}
          <div className="text-left md:text-right">
            <h2 className="mb-8 font-display text-3xl font-bold text-foreground md:text-5xl">
              Your Squad Is Already
              <br />
              <span className="text-gradient-gold">In-Game</span>
            </h2>

            <div className="mb-8 space-y-5 text-base leading-relaxed text-foreground/90 md:text-lg">
              <p>
                Right now, while you're scrolling,
                <br />
                <span className="font-semibold text-gold">50,000+ gamers are grinding legendary quests</span>
                <br />
                in a massive open world.
              </p>
              <p>
                They're mastering 50+ combat techniques.
                <br />
                Flying across rooftops. Walking on water.
                <br />
                Building alliances. Dominating kingdoms.
              </p>
              <p className="font-semibold text-gold text-2xl">
                Total cost? $0. Zero. Nada.
              </p>
              <p className="text-foreground">
                The only difference between them and you?
                <br />
                <span className="font-bold text-green-glow text-2xl">They hit download.</span>
              </p>
            </div>

            <div className="flex justify-start md:justify-end">
              <CTAButton text="▶ JOIN THE FIGHT — IT'S FREE →" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrutalTruthSection;
