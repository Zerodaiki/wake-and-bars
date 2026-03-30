"use client";

import { Visualizer } from "./Visualizer";

export function Footer() {
  return (
    <footer className="border-t border-white/5 px-5 py-8">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Visualizer bars={3} height={14} />
          <span className="font-heading text-sm font-bold">Wake & Bars</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="text-text-secondary hover:text-white text-sm transition-colors">Twitter/X</a>
          <a href="#" className="text-text-secondary hover:text-white text-sm transition-colors">Instagram</a>
          <a href="#" className="text-text-secondary hover:text-white text-sm transition-colors">TikTok</a>
        </div>

        <p className="text-text-secondary text-xs">&copy; 2026 Wake &amp; Bars</p>
      </div>
    </footer>
  );
}
