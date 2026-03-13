import heroBg from "@/assets/hero-bg.jpg";
import CTAButton from "./CTAButton";
import LivePlayerCounter from "./LivePlayerCounter";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/80" />
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
        {/* Badges */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
          <span className="rounded-full border-2 border-green-free/60 px-5 py-2 text-sm font-bold text-green-glow shadow-[0_0_15px_hsla(30,75%,48%,0.3)]">
            🎮 100% FREE — NO CREDIT CARD
          </span>
          <span className="rounded-full border-2 border-gold/60 px-5 py-2 text-sm font-bold text-gradient-gold shadow-[0_0_15px_hsla(45,78%,47%,0.3)]">
            ⭐ OVERWHELMINGLY POSITIVE — STEAM
          </span>
        </div>

        {/* Headline */}
        <h1 className="mb-6 font-display text-4xl font-black leading-tight text-gradient-gold md:text-6xl lg:text-7xl xl:text-8xl text-center">
          The Most Epic Game<br />
          You'll Ever Play<br />
          Is Completely Free
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-foreground/80 md:text-xl text-center">
          Step into Ancient China's 10th Century as a legendary sword master. Open world. Epic combat. Total freedom.
          50,000+ players are already living this adventure.
          <br />
          <span className="font-semibold text-foreground">And it costs you absolutely nothing.</span>
        </p>

        {/* Wide Video Section */}
        <div className="mx-auto mb-10 w-full max-w-5xl overflow-hidden rounded-lg border-2 border-gold/30 shadow-[0_0_40px_hsla(45,78%,47%,0.15)]">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Where Winds Meet Gameplay Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Price badge */}
        <div className="mx-auto mb-8 flex justify-center">
          <div className="rounded-lg border-2 border-gold/40 bg-card/80 px-8 py-5 backdrop-blur-sm text-center">
            <div className="text-lg text-muted-foreground">
              💰 NORMAL PRICE:{" "}
              <span className="animate-strikethrough inline-block text-destructive font-bold">$59.99</span>
            </div>
            <div className="mt-1 text-2xl font-black">
              🎁 YOUR PRICE TODAY:{" "}
              <span className="text-green-glow text-3xl">FREE</span>
            </div>
            <div className="mt-1 text-sm text-muted-foreground">No card. No catch. Ever.</div>
          </div>
        </div>

        <div className="mb-6">
          <CTAButton
            text="▶ DOWNLOAD FREE ON STEAM →"
            subtext="⚡ One click • Instant download • Windows PC required"
          />
        </div>

        <LivePlayerCounter />
      </div>
    </section>
  );
};

export default HeroSection;
