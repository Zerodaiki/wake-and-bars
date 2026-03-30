"use client";

import { Visualizer } from "./Visualizer";

const events = [
  { time: "9:00", label: "Team standup", color: "from-accent-pink to-accent-orange" },
  { time: "11:30", label: "Investor pitch", color: "from-purple-500 to-blue-500" },
  { time: "14:00", label: "Leg day", color: "from-accent-green to-emerald-400" },
];

const lyrics = [
  "Nine AM, standup crew, let's align the vision",
  "Pitch deck loaded up, making big decisions",
  "Leg day coming up, no room for submission",
  "Wake & Bars on repeat, this is MY mission",
];

export function PhoneMockup() {
  return (
    <div className="relative w-[280px] sm:w-[300px] mx-auto">
      {/* Glow behind phone */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-pink/20 to-accent-orange/20 blur-[60px] rounded-full scale-110" />

      {/* Phone frame */}
      <div className="relative bg-surface border border-white/10 rounded-[2.5rem] p-3 shadow-2xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-surface rounded-b-2xl z-10" />

        {/* Screen */}
        <div className="bg-bg-dark rounded-[2rem] overflow-hidden p-5 pt-8 min-h-[480px] flex flex-col">
          {/* Time */}
          <div className="text-center mb-4">
            <p className="font-heading text-4xl font-bold text-white">7:00</p>
            <p className="text-text-secondary text-sm mt-1">Monday, March 29</p>
          </div>

          {/* Visualizer */}
          <div className="flex justify-center mb-4">
            <Visualizer bars={20} height={40} />
          </div>

          {/* Now playing */}
          <div className="bg-surface-light rounded-xl p-3 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Visualizer bars={3} height={14} />
              <span className="text-xs font-heading text-accent-pink font-bold uppercase tracking-wider">Now Playing</span>
            </div>
            <p className="font-heading text-sm font-bold text-white">&quot;Monday Grind&quot;</p>
            <p className="text-xs text-text-secondary">AI-generated • Hip-Hop</p>
          </div>

          {/* Scrolling lyrics */}
          <div className="flex-1 overflow-hidden relative mb-3">
            <div className="animate-lyrics space-y-2">
              {lyrics.map((line, i) => (
                <p
                  key={i}
                  className={`text-xs leading-relaxed ${i === 0 ? "text-white font-medium" : "text-text-secondary"}`}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>

          {/* Events */}
          <div className="space-y-2">
            {events.map((event) => (
              <div
                key={event.label}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/5"
              >
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${event.color}`} />
                <span className="text-[10px] font-heading text-text-secondary">{event.time}</span>
                <span className="text-[10px] text-white">{event.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
