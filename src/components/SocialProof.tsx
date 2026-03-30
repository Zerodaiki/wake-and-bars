"use client";

import { useEffect, useState } from "react";
import { getWaitlistCount } from "@/lib/submitEmail";

const quotes = [
  {
    text: "My alarm just roasted my leg day and I've never been more motivated 😭🔥",
    handle: "@fitjake_",
    avatar: "J",
  },
  {
    text: "It knew about my dentist appointment and turned it into a pop banger",
    handle: "@sarahcodes",
    avatar: "S",
  },
  {
    text: "My girlfriend and I wake up to the same track now. Couple goals.",
    handle: "@marcusbeats",
    avatar: "M",
  },
];

const BASE_COUNT = 2847;

function AnimatedCounter() {
  const [count, setCount] = useState(BASE_COUNT);

  useEffect(() => {
    getWaitlistCount().then((real) => {
      if (real > 0) setCount(BASE_COUNT + real);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + Math.floor(Math.random() * 3));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold gradient-text tabular-nums">
      {count.toLocaleString()}
    </span>
  );
}

export function SocialProof() {
  return (
    <section className="relative px-5 py-24 sm:py-32">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <AnimatedCounter />
          <p className="text-text-secondary text-lg mt-3">people waiting to wake up different</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((quote) => (
            <div
              key={quote.handle}
              className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-pink to-accent-orange flex items-center justify-center text-xs font-bold">
                  {quote.avatar}
                </div>
                <span className="text-xs font-heading text-text-secondary">{quote.handle}</span>
              </div>
              <p className="text-sm text-white/90 leading-relaxed">&quot;{quote.text}&quot;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
