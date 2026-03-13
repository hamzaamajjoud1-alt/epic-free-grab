import { useEffect, useState } from "react";

const messages = [
  "🎮 Marcus from Texas just downloaded — it's free!",
  "⚔️ Sarah from London just started her legend",
  "🏆 Kevin from Toronto: '200 hours and still going'",
  "⭐ Aisha from Dubai left a 5-star review",
  "🎮 James from Sydney: 'Why is this actually free?'",
];

const SocialProofToast = () => {
  const [current, setCurrent] = useState<string | null>(null);

  useEffect(() => {
    let idx = 0;
    const show = () => {
      setCurrent(messages[idx % messages.length]);
      idx++;
      setTimeout(() => setCurrent(null), 4000);
    };

    const interval = setInterval(show, 30000);
    // First one after 15s
    const timeout = setTimeout(show, 15000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  if (!current) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 hidden animate-fade-in-up rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground shadow-lg md:block">
      {current}
    </div>
  );
};

export default SocialProofToast;
