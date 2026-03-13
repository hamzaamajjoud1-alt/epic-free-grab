import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    initials: "TM",
    name: "Thomas M.",
    location: "New York, USA",
    quote: "I almost scrolled past this because I thought 'free game = low quality.' I was completely wrong. This is better than games I paid $60 for. 200 hours in and still going.",
  },
  {
    initials: "SK",
    name: "Sarah K.",
    location: "London, UK",
    quote: "Downloaded it expecting nothing because it was free. Now it's the only game I play. The profession system alone has more depth than most paid RPGs. Absolutely mind-blowing.",
  },
  {
    initials: "KB",
    name: "Kevin B.",
    location: "Toronto, Canada",
    quote: "My friends had to beg me to try it because I assumed free meant bad. Now I'm the one begging everyone I know to download it. Best gaming decision of my life — and it cost me zero dollars.",
  },
];

const Testimonials = () => {
  const ref = useScrollReveal();

  return (
    <section className="bg-background py-20 md:py-28">
      <div ref={ref} className="scroll-reveal mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-2 font-display text-3xl font-bold text-foreground md:text-5xl">
            Real Players. Real Legends.
          </h2>
          <p className="text-lg text-muted-foreground">What 50,000+ free players are saying</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="card-hover rounded-lg border border-border bg-card p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-light font-display font-bold text-background">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.location}</div>
                </div>
              </div>
              <div className="mb-3 text-gold">★★★★★</div>
              <p className="mb-4 text-muted-foreground leading-relaxed italic">"{t.quote}"</p>
              <span className="text-xs text-green-free font-semibold">✅ Free Player — Verified Steam Review</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
