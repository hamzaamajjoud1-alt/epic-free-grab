import { useEffect, useState } from "react";
import { AFFILIATE_LINK } from "@/lib/constants";
import btnTexture from "@/assets/btn-texture.png";

const ExitIntentPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("exit-shown")) return;

    const handler = (e: MouseEvent) => {
      if (e.clientY < 10) {
        setShow(true);
        sessionStorage.setItem("exit-shown", "1");
        document.removeEventListener("mouseleave", handler);
      }
    };

    document.addEventListener("mouseleave", handler);
    return () => document.removeEventListener("mouseleave", handler);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
      <div className="relative mx-auto max-w-md rounded-lg border border-gold/40 bg-card p-8 text-center shadow-[0_0_60px_hsla(45,78%,47%,0.2)]">
        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground text-xl"
        >
          ✕
        </button>

        <h3 className="mb-3 font-display text-2xl font-bold text-gradient-gold">
          Wait — It's Completely Free!
        </h3>
        <p className="mb-4 text-muted-foreground">
          You're about to leave without downloading the most epic free game of 2025...
        </p>

        <ul className="mb-6 space-y-2 text-left text-foreground">
          <li>✅ 100% Free — No credit card ever</li>
          <li>✅ 50,000+ players already in-game</li>
          <li>✅ Delete it anytime — zero risk</li>
        </ul>

        <a
          href={AFFILIATE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="relative mb-3 block overflow-hidden rounded px-6 py-4 font-bold uppercase tracking-wider text-foreground animate-green-pulse"
        >
          <img src={btnTexture} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <span className="relative z-10">▶ OK FINE — I'LL PLAY FOR FREE →</span>
        </a>

        <button
          onClick={() => setShow(false)}
          className="text-sm text-muted-foreground hover:text-foreground/80"
        >
          No thanks, I prefer missing out
        </button>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
