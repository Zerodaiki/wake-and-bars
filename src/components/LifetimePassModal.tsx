"use client";

import { useState, useEffect, type FormEvent } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { submitEmail } from "@/lib/submitEmail";

const benefits = [
  { emoji: "🔥", text: "First access before public launch" },
  { emoji: "♾️", text: "Lifetime Pro membership — no subscription ever" },
  { emoji: "🎵", text: "All music styles: rap, pop, lo-fi, motivational" },
  { emoji: "📲", text: "Clean sharing — no watermarks" },
  { emoji: "💰", text: "Full refund anytime, no questions asked" },
];

export function LifetimePassModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email || loading) return;
    setError("");
    setLoading(true);

    const result = await submitEmail(email, "lifetime_pass");
    setLoading(false);

    if (!result.success) {
      setError(result.error || "Something went wrong.");
      return;
    }
    setSubmitted(true);
  }

  function handleClose() {
    onClose();
    setTimeout(() => {
      setEmail("");
      setSubmitted(false);
      setError("");
      setLoading(false);
    }, 300);
  }

  if (!mounted) return null;

  const modalContent = (
    <AnimatePresence>
      {open ? (
        <motion.div
          key="lifetime-modal"
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed inset-0 flex items-end sm:items-center justify-center p-0 sm:p-5"
          style={{ zIndex: 9999 }}
          onClick={handleClose}
        >
          {/* Backdrop */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{ duration: 0.15 }}
            className="absolute inset-0 bg-[#0A0A0F]"
          />

          {/* Modal card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ type: "spring", damping: 30, stiffness: 400, delay: 0.05 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full sm:max-w-lg bg-surface border border-white/10 rounded-t-3xl sm:rounded-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
            style={{ zIndex: 10000 }}
          >
            {/* Gradient border glow */}
            <div className="absolute -inset-px rounded-t-3xl sm:rounded-2xl bg-gradient-to-br from-accent-pink/20 via-transparent to-accent-orange/20 -z-10 blur-sm" />

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-text-secondary hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            {/* Mobile drag handle */}
            <div className="sm:hidden w-10 h-1 bg-white/20 rounded-full mx-auto mb-4" />

            {/* Header */}
            <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-6">
              Unlock <span className="gradient-text">Lifetime Pro</span>
            </h3>

            {/* Benefits */}
            <div className="space-y-3 mb-6">
              {benefits.map((b) => (
                <div key={b.text} className="flex items-start gap-3">
                  <span className="text-lg leading-none mt-0.5">{b.emoji}</span>
                  <span className="text-sm text-white/90">{b.text}</span>
                </div>
              ))}
            </div>

            {/* Urgency */}
            <div className="rounded-xl bg-white/[0.03] border border-white/5 p-4 mb-6 text-center">
              <p className="text-sm text-text-secondary">
                <span className="font-heading font-bold text-lg gradient-text">147</span>
                <span className="text-white/70"> / 200 spots remaining</span>
              </p>
            </div>

            {/* Form or success */}
            {submitted ? (
              <div className="text-center py-4">
                <p className="font-heading font-bold text-lg text-white mb-1">
                  You&apos;re locked in 🔒
                </p>
                <p className="text-text-secondary text-sm">
                  We&apos;ll send your payment link within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(""); }}
                  className="w-full px-4 py-3 rounded-xl bg-bg-dark border border-white/10 text-white placeholder:text-text-secondary focus:outline-none focus:border-accent-pink/50 focus:ring-1 focus:ring-accent-pink/30 font-body transition-all"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-3.5 rounded-xl bg-gradient-to-r from-accent-pink to-accent-orange text-white font-heading font-bold text-sm pulse-cta hover:scale-[1.02] transition-transform cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                      Locking your spot...
                    </span>
                  ) : "Lock My Spot"}
                </button>
                {error && <p className="text-red-400 text-xs text-center">{error}</p>}
              </form>
            )}

            <p className="text-text-secondary text-[11px] text-center mt-4">
              We&apos;ll email you the $5 payment link as soon as it&apos;s live.
            </p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}
