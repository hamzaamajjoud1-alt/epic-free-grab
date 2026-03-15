import { AFFILIATE_LINK } from "@/lib/constants";
import btnTexture from "@/assets/btn-texture.png";

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
        className={`relative inline-block overflow-hidden rounded-lg px-10 py-5 font-body text-lg font-extrabold uppercase tracking-widest text-foreground transition-transform hover:scale-105 animate-green-pulse md:px-14 md:text-xl ${className}`}
      >
        <img src={btnTexture} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <span className="relative z-10">{text}</span>
      </a>
      {subtext && (
        <p className="text-sm text-muted-foreground">{subtext}</p>
      )}
    </div>
  );
};

export default CTAButton;
