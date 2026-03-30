"use client";

import { motion } from "framer-motion";
import { PhoneMockup } from "./PhoneMockup";
import { DualCTA } from "./DualCTA";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-5 py-20 overflow-hidden">
      {/* Background gradient orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-accent-pink/10 to-bg-purple/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-heading text-text-secondary mb-6"
          >
            🔥 The alarm clock that spits bars
          </motion.div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
            Your schedule{" "}
            <span className="shimmer-text">just dropped</span>
            <br />a new track
          </h1>

          <p className="text-text-secondary text-lg sm:text-xl max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
            Wake & Bars connects to your calendar, writes lyrics about your actual day,
            and wakes you up with a{" "}
            <span className="text-white font-medium">personalized banger</span> every single morning.
          </p>

          <div className="flex justify-center lg:justify-start">
            <DualCTA />
          </div>
        </motion.div>

        {/* Right: Phone */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateY: -10 }}
          animate={{ opacity: 1, y: 0, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          <PhoneMockup />
        </motion.div>
      </div>
    </section>
  );
}
