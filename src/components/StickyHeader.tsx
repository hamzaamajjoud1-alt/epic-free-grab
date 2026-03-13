import { AFFILIATE_LINK } from "@/lib/constants";

const StickyHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gold/30 bg-background/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        <span className="font-display text-lg font-bold text-gradient-gold whitespace-nowrap">
          ⚔️ Where Winds Meet
        </span>

        <div className="hidden flex-1 overflow-hidden mx-6 md:block">
          <div className="animate-ticker flex whitespace-nowrap gap-8 text-sm text-muted-foreground">
            {[...Array(2)].map((_, i) => (
              <span key={i} className="flex gap-8">
                <span>🎮 100% FREE on Steam</span>
                <span>•</span>
                <span>50,000+ Players</span>
                <span>•</span>
                <span>⭐⭐⭐⭐⭐ Overwhelmingly Positive</span>
                <span>•</span>
                <span>No Credit Card Required</span>
                <span>•</span>
                <span>Download in 1 Click</span>
                <span>•</span>
                <span>Ancient China Awaits You</span>
                <span className="px-8" />
              </span>
            ))}
          </div>
        </div>

        <a
          href={AFFILIATE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="animate-green-pulse whitespace-nowrap rounded bg-gradient-to-r from-amber-700 to-green-free px-4 py-2 text-sm font-bold uppercase tracking-wider text-background"
        >
          ▶ PLAY FREE NOW
        </a>
      </div>
    </header>
  );
};

export default StickyHeader;
