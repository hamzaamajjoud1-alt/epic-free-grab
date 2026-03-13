import { AFFILIATE_LINK, STEAM_LINK } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary py-10">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <p className="mb-4 font-display text-lg text-gold">
          ⚔️ Where Winds Meet — Free on Steam
        </p>
        <div className="mb-4 flex items-center justify-center gap-4 text-sm text-muted-foreground">
          <a href={STEAM_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
            Steam Page
          </a>
          <span>|</span>
          <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
            Download Free
          </a>
        </div>
        <p className="mb-4 text-xs text-muted-foreground">
          This site contains affiliate links. We may earn a commission at no cost to you.
        </p>
        <div className="mb-4 text-3xl opacity-30">☯</div>
        <p className="text-xs text-muted-foreground">© 2025 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
