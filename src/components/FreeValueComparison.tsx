import { useScrollReveal } from "@/hooks/useScrollReveal";
import CTAButton from "./CTAButton";
import heroBg from "@/assets/hero-bg.jpg";

const games = [
  { name: "Ghost of Tsushima", price: "$59.99" },
  { name: "Assassin's Creed", price: "$69.99" },
  { name: "Elden Ring", price: "$59.99" },
  { name: "Sekiro", price: "$59.99" },
];

const FreeValueComparison = () => {
  const ref = useScrollReveal();

  return (
    <section className="relative py-20 md:py-28">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-background/80" />
      </div>
      <div ref={ref} className="scroll-reveal relative z-10 mx-auto max-w-3xl px-4 text-center">
        <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-5xl">
          What You'd Normally Pay vs. What You Pay
        </h2>

        <div className="my-10 overflow-x-auto">
          <table className="mx-auto w-full max-w-lg text-left">
            <thead>
              <tr className="border-b border-border text-sm uppercase text-muted-foreground">
                <th className="py-3 px-4">Game</th>
                <th className="py-3 px-4 text-center">Their Price</th>
                <th className="py-3 px-4 text-center">You Get</th>
              </tr>
            </thead>
            <tbody>
              {games.map((g, i) => (
                <tr key={i} className="border-b border-border/50">
                  <td className="py-3 px-4 text-foreground">{g.name}</td>
                  <td className="py-3 px-4 text-center text-destructive font-semibold">{g.price}</td>
                  <td className="py-3 px-4 text-center" />
                </tr>
              ))}
              <tr className="bg-green-free/10 border-2 border-green-free/40">
                <td className="py-4 px-4 font-display font-bold text-gold text-lg">WHERE WINDS MEET</td>
                <td className="py-4 px-4 text-center font-black text-green-glow text-xl">$0.00 ✅</td>
                <td className="py-4 px-4 text-center font-bold text-green-glow">FREE NOW →</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-8 text-lg text-muted-foreground">
          Same epic scale. Same depth. Same jaw-dropping quality.<br />
          <span className="font-bold text-foreground">Zero dollars.</span>
        </p>

        <CTAButton text="▶ GET IT FREE →" />
      </div>
    </section>
  );
};

export default FreeValueComparison;
