"use client";

import { motion } from "framer-motion";
import { DualCTA } from "./DualCTA";
import { Visualizer } from "./Visualizer";

export function FinalCTA() {
  return (
    <section className="relative px-5 py-24 sm:py-32">
      <div className="max-w-2xl mx-auto text-center">
        {/* Decorative visualizers */}
        <div className="flex justify-center gap-8 mb-8 opacity-40">
          <Visualizer bars={4} height={20} />
          <Visualizer bars={6} height={28} />
          <Visualizer bars={4} height={20} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Be first. <span className="gradient-text">Wake different.</span>
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            Join the waitlist and be the first to turn your mornings into music.
          </p>
          <DualCTA />
        </motion.div>
      </div>
    </section>
  );
}
