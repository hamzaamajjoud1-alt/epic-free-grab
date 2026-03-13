import { useEffect, useState } from "react";

const LivePlayerCounter = () => {
  const [count, setCount] = useState(54847);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + Math.floor(Math.random() * 3) + 1);
    }, Math.random() * 7000 + 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="animate-count-pulse flex items-center justify-center gap-2 text-xl font-bold text-foreground md:text-2xl">
      <span>🎮</span>
      <span className="font-display text-gradient-gold tabular-nums">
        {count.toLocaleString()}
      </span>
      <span className="text-muted-foreground font-body text-base">Legends Already Playing</span>
    </div>
  );
};

export default LivePlayerCounter;
