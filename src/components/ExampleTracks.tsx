"use client";

import { motion } from "framer-motion";
import { Visualizer } from "./Visualizer";

const tracks = [
  {
    title: "Monday Grind",
    genre: "Hip-Hop",
    genreColor: "bg-accent-pink/20 text-accent-pink",
    vibe: "Aggressive energy",
    events: ["9:00 Team standup", "12:00 Investor pitch", "17:00 Leg day"],
    lyrics: [
      "Standup at nine, whole squad aligned,",
      "Pitch at noon, yeah the deck is refined,",
      "Leg day later, no excuses defined,",
      "Monday built different — I'm in my prime.",
    ],
    bgGradient: "from-accent-pink/5 to-accent-orange/5",
    barColor: "from-accent-pink to-accent-orange",
  },
  {
    title: "Chill Friday",
    genre: "Lo-fi Pop",
    genreColor: "bg-purple-500/20 text-purple-400",
    vibe: "Laid-back vibes",
    events: ["10:00 One-on-one", "15:00 Early finish", "21:00 Rooftop party"],
    lyrics: [
      "One meeting, then I'm floating free,",
      "Friday mood, ocean breeze and tea,",
      "Rooftop later, city lights to see,",
      "Weekend loading — this one's for me.",
    ],
    bgGradient: "from-purple-500/5 to-blue-500/5",
    barColor: "from-purple-500 to-blue-400",
  },
  {
    title: "Deadline Beast",
    genre: "Drill",
    genreColor: "bg-accent-orange/20 text-accent-orange",
    vibe: "Intense flow",
    events: ["8:00 Sprint review", "13:00 Deploy v2.0", "18:00 Retro"],
    lyrics: [
      "Sprint review, I'm presenting heat,",
      "Deploy at one, zero bugs on repeat,",
      "Coffee IV, I don't know defeat,",
      "Ship it clean — that's the dev elite.",
    ],
    bgGradient: "from-accent-orange/5 to-red-500/5",
    barColor: "from-accent-orange to-red-500",
  },
];

export function ExampleTracks() {
  return (
    <section className="relative px-5 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <p className="font-heading text-sm text-accent-orange uppercase tracking-widest mb-3">Preview</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold">
            Every morning hits <span className="gradient-text">different</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {tracks.map((track, i) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.12 }}
              className={`relative rounded-2xl bg-gradient-to-br ${track.bgGradient} border border-white/5 hover:border-white/10 transition-all group overflow-hidden`}
            >
              {/* Top bar — mini player */}
              <div className="p-5 pb-3">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    {/* Play button */}
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/15 transition-colors">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="white">
                        <path d="M0 0l14 8-14 8V0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-heading text-sm font-bold">&quot;{track.title}&quot;</p>
                      <p className="text-[10px] text-text-secondary">{track.vibe}</p>
                    </div>
                  </div>
                  <span className={`text-[10px] font-heading font-bold px-2.5 py-1 rounded-full ${track.genreColor}`}>
                    {track.genre}
                  </span>
                </div>

                {/* Waveform visualizer */}
                <div className="flex items-end gap-[2px] h-8 mb-3">
                  {Array.from({ length: 30 }).map((_, j) => (
                    <div
                      key={j}
                      className={`flex-1 rounded-full bg-gradient-to-t ${track.barColor} origin-bottom`}
                      style={{
                        height: "100%",
                        animation: `bar-bounce ${0.5 + (j % 5) * 0.12}s ease-in-out infinite`,
                        animationDelay: `${j * 0.05}s`,
                        opacity: 0.6,
                      }}
                    />
                  ))}
                </div>

                {/* Event pills */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {track.events.map((event) => (
                    <span
                      key={event}
                      className="text-[9px] font-heading px-2 py-0.5 rounded-full bg-white/5 text-text-secondary border border-white/5"
                    >
                      {event}
                    </span>
                  ))}
                </div>
              </div>

              {/* Lyrics */}
              <div className="px-5 pb-5 pt-2 border-t border-white/5">
                <div className="flex items-center gap-2 mb-2">
                  <Visualizer bars={3} height={10} />
                  <span className="text-[9px] font-heading text-text-secondary uppercase tracking-wider">Lyrics</span>
                </div>
                <div className="space-y-1">
                  {track.lyrics.map((line, j) => (
                    <p key={j} className="text-xs text-text-secondary leading-relaxed italic">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
