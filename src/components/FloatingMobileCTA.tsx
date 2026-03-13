import { AFFILIATE_LINK } from "@/lib/constants";

const FloatingMobileCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 block md:hidden">
      <a
        href={AFFILIATE_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-[60px] items-center justify-center bg-gradient-to-r from-green-600 to-green-free text-base font-extrabold uppercase tracking-wider text-background shadow-[0_-4px_20px_hsla(142,71%,45%,0.3)]"
      >
        ▶ PLAY FREE NOW — DOWNLOAD ON STEAM →
      </a>
    </div>
  );
};

export default FloatingMobileCTA;
