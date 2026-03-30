"use client";

import { useState, type FormEvent } from "react";
import { submitEmail } from "@/lib/submitEmail";

export function InlineWaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [trackNumber, setTrackNumber] = useState(0);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email || loading) return;
    setError("");
    setLoading(true);

    const result = await submitEmail(email, "waitlist");
    setLoading(false);

    if (!result.success) {
      setError(result.error || "Something went wrong.");
      return;
    }

    setTrackNumber(Math.floor(Math.random() * 9000) + 1000);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 py-4">
        <div className="w-12 h-12 rounded-full bg-accent-green/20 flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="#00E5A0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="font-heading font-bold text-lg text-white">You&apos;re in.</p>
        <p className="text-text-secondary text-sm">
          Track <span className="text-accent-green font-heading font-bold">#{trackNumber}</span> on the waitlist.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
      <input
        type="email"
        required
        placeholder="your@email.com"
        value={email}
        onChange={(e) => { setEmail(e.target.value); setError(""); }}
        className="flex-1 px-4 py-3 rounded-xl bg-surface border border-white/10 text-white placeholder:text-text-secondary focus:outline-none focus:border-accent-pink/50 focus:ring-1 focus:ring-accent-pink/30 font-body transition-all"
      />
      <button
        type="submit"
        disabled={loading}
        className="px-6 py-3 rounded-xl bg-white/10 border border-white/10 text-white font-heading font-bold text-sm whitespace-nowrap hover:bg-white/15 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
            Joining...
          </span>
        ) : "Join Waitlist"}
      </button>
      {error && <p className="text-red-400 text-xs sm:col-span-2">{error}</p>}
    </form>
  );
}
