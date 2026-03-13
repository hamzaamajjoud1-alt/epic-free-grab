import { useScrollReveal } from "@/hooks/useScrollReveal";
import CTAButton from "./CTAButton";

const BrutalTruthSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="bg-secondary py-20 md:py-28">
      <div ref={ref} className="scroll-reveal mx-auto max-w-3xl px-4 text-center">
        <h2 className="mb-10 font-display text-3xl font-bold text-foreground md:text-5xl">
          Let's Be Completely Honest With You
        </h2>

        <div className="mb-10 space-y-6 text-lg leading-relaxed text-foreground/90 md:text-xl">
          <p>
            Right now, while you're reading this,<br />
            <span className="font-semibold text-gold">50,000 people are living an epic life</span><br />
            in Ancient China.
          </p>
          <p>
            They're mastering legendary sword techniques.<br />
            They're walking on water and flying between rooftops.<br />
            They're building careers, forging alliances,<br />
            and shaping the fate of entire kingdoms.
          </p>
          <p className="font-semibold text-gold text-2xl">
            And they paid exactly $0 to do it.
          </p>
          <p className="text-foreground">
            The only difference between them and you?<br />
            <span className="font-bold text-green-glow text-2xl">They clicked download.</span>
          </p>
        </div>

        <CTAButton text="▶ JOIN THEM — IT'S FREE →" />
      </div>
    </section>
  );
};

export default BrutalTruthSection;
