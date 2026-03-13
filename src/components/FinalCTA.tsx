import { useScrollReveal } from "@/hooks/useScrollReveal";
import CTAButton from "./CTAButton";

const excuses = [
  { excuse: "It costs money", answer: "WRONG. It's free." },
  { excuse: "I might not like it", answer: "WRONG. Delete it if so." },
  { excuse: "My PC can't run it", answer: "CHECK Steam. Probably can." },
  { excuse: "I don't have time", answer: "20 min tutorial. That's it." },
  { excuse: "Free games are low quality", answer: "50,000+ players disagree." },
  { excuse: 'I\'ll do it later', answer: '"Later" is where legends go to die.' },
];

const FinalCTA = () => {
  const ref = useScrollReveal();

  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-28">
      {/* Gold center glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-[600px] w-[600px] rounded-full bg-gold/5 blur-[120px]" />
      </div>

      <div ref={ref} className="scroll-reveal relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h2 className="mb-10 font-display text-3xl font-black text-gradient-gold md:text-5xl lg:text-6xl">
          You Have Zero Reasons<br />
          Not To Download This<br />
          Right Now
        </h2>

        {/* No excuse list */}
        <div className="mx-auto mb-10 max-w-xl space-y-3 text-left">
          {excuses.map((e, i) => (
            <div key={i} className="flex items-start gap-3 text-lg">
              <span className="text-destructive font-bold">❌</span>
              <span className="text-muted-foreground">{e.excuse} →</span>
              <span className="font-bold text-foreground">{e.answer}</span>
            </div>
          ))}
        </div>

        {/* Value summary */}
        <div className="mb-10 rounded-lg border border-gold/30 bg-card/50 p-6 text-foreground">
          <p className="text-lg">
            ✅ Full Open World RPG &nbsp;• &nbsp;✅ 50+ Combat Techniques<br />
            ✅ 100h+ of Content &nbsp;• &nbsp;✅ 1,000+ NPCs<br />
            ✅ Epic Main Story &nbsp;• &nbsp;✅ Free Updates Forever
          </p>
          <p className="mt-3 text-2xl font-bold">
            💰 TOTAL VALUE: <span className="text-destructive">$59.99+</span> → YOUR PRICE:{" "}
            <span className="text-green-glow text-3xl font-black">$0</span>
          </p>
        </div>

        <CTAButton
          text="▶ PLAY FREE ON STEAM — DOWNLOAD NOW →"
          subtext="🔒 Official Steam Download • Windows PC Required • No Credit Card • No Catch • Ever"
        />
      </div>
    </section>
  );
};

export default FinalCTA;
