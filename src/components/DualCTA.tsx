"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LifetimePassModal } from "./LifetimePassModal";
import { InlineWaitlistForm } from "./WaitlistForm";

export function DualCTA() {
  const [modalOpen, setModalOpen] = useState(false);
  const [showWaitlistForm, setShowWaitlistForm] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center lg:items-start gap-4 w-full max-w-md">
        {/* Buttons row */}
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          {/* Primary: Lifetime Pass */}
          <button
            onClick={() => setModalOpen(true)}
            className="flex-1 px-6 py-3.5 rounded-xl bg-gradient-to-r from-accent-pink to-accent-orange text-white font-heading font-bold text-sm pulse-cta hover:scale-105 transition-transform cursor-pointer"
          >
            Lifetime Pass — $5
          </button>

          {/* Secondary: Join Waitlist */}
          <button
            onClick={() => setShowWaitlistForm(true)}
            className="flex-1 px-6 py-3.5 rounded-xl bg-transparent border border-white/15 text-white font-heading font-bold text-sm hover:bg-white/5 hover:border-white/25 transition-all cursor-pointer"
          >
            Join Waitlist
          </button>
        </div>

        {/* Inline waitlist form — animated reveal */}
        <AnimatePresence>
          {showWaitlistForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-full overflow-hidden"
            >
              <div className="pt-1">
                <InlineWaitlistForm />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Subtext */}
        <p className="text-text-secondary text-xs">
          First 200 get lifetime Pro access. No subscription ever.
        </p>
      </div>

      <LifetimePassModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
