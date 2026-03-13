const items = [
  "🆓 100% Free Forever",
  "⭐ 4.9/5 Steam Rating",
  "🎮 50,000+ Active Players",
  "⏱️ 100h+ of Free Content",
  "🌍 Massive Open World",
  "⚔️ 50+ Combat Techniques",
  "🏯 1,000+ Interactive NPCs",
  "🔄 Regular Free Updates",
  "🏆 Top Free Game 2025",
];

const SocialProofBar = () => {
  return (
    <div className="overflow-hidden border-y border-gold/20 bg-secondary py-4">
      <div className="animate-ticker flex whitespace-nowrap">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex gap-8 px-4">
            {items.map((item, j) => (
              <span key={j} className="text-sm font-semibold text-gold md:text-base">
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialProofBar;
