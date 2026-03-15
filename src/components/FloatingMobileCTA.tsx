import { AFFILIATE_LINK } from "@/lib/constants";
import btnTexture from "@/assets/btn-texture.png";

const FloatingMobileCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 block md:hidden">
      <a
        href={AFFILIATE_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex h-[60px] items-center justify-center overflow-hidden text-base font-extrabold uppercase tracking-wider text-foreground shadow-[0_-4px_20px_hsla(30,75%,48%,0.3)]"
      >
        <img src={btnTexture} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <span className="relative z-10">▶ PLAY FREE NOW — DOWNLOAD ON STEAM →</span>
      </a>
    </div>
  );
};

export default FloatingMobileCTA;
