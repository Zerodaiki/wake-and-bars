"use client";

const steps = [
  {
    number: "01",
    title: "Connect",
    description: "Link your Google Calendar, Notion, or Todoist in one tap. We read your schedule — that's it.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4v8m0 0l-3-3m3 3l3-3" stroke="#00E5A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="6" y="14" width="20" height="14" rx="3" stroke="#00E5A0" strokeWidth="2" />
        <circle cx="16" cy="21" r="2" stroke="#00E5A0" strokeWidth="2" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Sleep",
    description: "While you rest, AI writes lyrics about YOUR day and produces a full track — vocals, beat, everything.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M24 16c0-4.4-3.6-8-8-8-1.5 0-2.9.4-4 1.1A7 7 0 0026 16" stroke="#FF3366" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 22l2-2m4-4l2-2m4-4l2-2" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 18h2m6-8h2m6 0h2" stroke="#FF3366" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Wake",
    description: "Your alarm hits with a personalized anthem. Rise to bars about crushing your investor meeting and destroying leg day.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 6v4m-8.5 1.5l2.8 2.8M7 20h4m14 0h-4m1.7-5.7l-2.8 2.8" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" />
        <circle cx="16" cy="20" r="6" stroke="#FF3366" strokeWidth="2" />
        <path d="M16 17v3l2 1" stroke="#FF3366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <section className="relative px-5 py-24 sm:py-32">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-heading text-sm text-accent-pink uppercase tracking-widest mb-3">The Pipeline</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold">
            Calendar → Lyrics → <span className="gradient-text">Banger</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <div key={step.number} className="relative group">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-gradient-to-r from-white/10 to-white/5" />
              )}
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <span className="font-heading text-xs text-text-secondary mb-2">{step.number}</span>
                <h3 className="font-heading text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
