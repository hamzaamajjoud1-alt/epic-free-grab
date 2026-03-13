import { AFFILIATE_LINK } from "@/lib/constants";

interface CTAButtonProps {
  text?: string;
  subtext?: string;
  className?: string;
}

const CTAButton = ({ text = "▶ PLAY FREE NOW →", subtext, className = "" }: CTAButtonProps) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <a
        href={AFFILIATE_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-block rounded bg-gradient-to-r from-amber-700 to-green-free px-10 py-5 font-body text-lg font-extrabold uppercase tracking-widest text-background transition-transform hover:scale-105 animate-green-pulse md:px-14 md:text-xl ${className}`}
      >
        {text}
      </a>
      {subtext && (
        <p className="text-sm text-muted-foreground">{subtext}</p>
      )}
    </div>
  );
};

export default CTAButton;
