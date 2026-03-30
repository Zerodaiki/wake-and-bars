"use client";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className="border-b border-white/[0.06]"
        style={{
          background: "rgba(10, 10, 15, 0.75)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          {/* Logo */}
          <span className="font-heading font-bold text-base text-white tracking-tight">
            Wake &amp; Bars
          </span>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="text-text-secondary hover:text-white transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
              </svg>
            </a>

            {/* TikTok */}
            <a
              href="#"
              aria-label="TikTok"
              className="text-text-secondary hover:text-white transition-colors"
            >
              <svg width="16" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
