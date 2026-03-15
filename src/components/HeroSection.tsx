import heroChar from "@/assets/hero-character.png";
import CTAButton from "./CTAButton";

const HeroSection = () => {
  return (
    <section className="relative flex items-center overflow-hidden pt-16 min-h-[90vh]">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-[60%]">
        <img src={heroChar} alt="Where Winds Meet Character" className="h-full w-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Cherry blossom petals */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="animate-petal pointer-events-none fixed text-pink-300"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${12 + Math.random() * 10}s`,
            animationDelay: `${Math.random() * 10}s`,
            fontSize: `${10 + Math.random() * 8}px`,
            opacity: 0.08,
          }}
        >
          🌸
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-16 md:py-24">
        <div className="grid items-center gap-8 md:grid-cols-2">
          {/* Left side — Text */}
          <div className="text-left">
            {/* Badges */}
            <div className="mb-6 flex flex-wrap gap-3">
              <span className="rounded-full border-2 border-green-free/60 px-4 py-1.5 text-xs font-bold text-green-glow shadow-[0_0_15px_hsla(30,75%,48%,0.3)]">
                🎮 100% FREE — NO CREDIT CARD
              </span>
              <span className="rounded-full border-2 border-gold/60 px-4 py-1.5 text-xs font-bold text-gradient-gold shadow-[0_0_15px_hsla(45,78%,47%,0.3)]">
                ⭐ OVERWHELMINGLY POSITIVE
              </span>
            </div>

            {/* Headline */}
            <h1 className="mb-6 font-display text-4xl font-black leading-tight text-foreground md:text-5xl lg:text-6xl xl:text-7xl">
              Master the Art of
              <br />
              <span className="text-gradient-gold">Ancient Combat</span>
              <br />
              For Free
            </h1>

            {/* Subheadline */}
            <p className="mb-8 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              Open world. Legendary sword techniques. Total freedom.
              Jump into Ancient China's most epic RPG — no credit card,
              no catch, just pure gaming.
            </p>

            {/* CTA */}
            <div className="mb-8">
              <CTAButton
                text="▶ DOWNLOAD FREE ON STEAM →"
                subtext="⚡ One click • Instant download • Windows PC"
              />
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              <div>
                <div className="font-display text-3xl font-black text-gradient-gold md:text-4xl">50K+</div>
                <div className="text-sm text-muted-foreground">Active Players</div>
              </div>
              <div>
                <div className="font-display text-3xl font-black text-gradient-gold md:text-4xl">100h+</div>
                <div className="text-sm text-muted-foreground">Free Content</div>
              </div>
              <div>
                <div className="font-display text-3xl font-black text-gradient-gold md:text-4xl">4.9★</div>
                <div className="text-sm text-muted-foreground">Steam Rating</div>
              </div>
            </div>
          </div>

          {/* Right side — empty, background image shows through */}
          <div className="hidden md:block" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
