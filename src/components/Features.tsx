"use client";

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4C8.5 4 4 8.5 4 14s4.5 10 10 10 10-4.5 10-10S19.5 4 14 4z" stroke="#FF3366" strokeWidth="2" />
        <path d="M14 8v6l4 2" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" />
        <path d="M4 14h2M22 14h2M14 4v2M14 22v2" stroke="#FF3366" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
    title: "Every day is unique",
    description: "Your alarm never repeats. New day, new schedule, new track. Every morning is a world premiere.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M7 20V10l7-5 7 5v10l-7 4-7-4z" stroke="#FF3366" strokeWidth="2" strokeLinejoin="round" />
        <path d="M14 15v9M7 10l7 5 7-5" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Your life, your lyrics",
    description: "It's literally about YOUR day. Your meetings, your gym session, your dentist appointment — all bars.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="8" width="8" height="12" rx="2" stroke="#FF3366" strokeWidth="2" />
        <rect x="16" y="4" width="8" height="16" rx="2" stroke="#FF6B35" strokeWidth="2" />
        <path d="M4 24h20" stroke="#FF3366" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
    title: "Multiple styles",
    description: "Rap, pop, rock, lo-fi, motivational coach mode — pick your vibe or let AI surprise you.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M18 8l-4-4-4 4" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 4v14" stroke="#FF3366" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 18v4a2 2 0 002 2h12a2 2 0 002-2v-4" stroke="#FF3366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Share your morning",
    description: "Post your daily track to Stories. Flex your AI-generated anthem. Make your followers jealous.",
  },
];

export function Features() {
  return (
    <section className="relative px-5 py-24 sm:py-32">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-heading text-sm text-accent-green uppercase tracking-widest mb-3">Features</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold">
            Not your average <span className="gradient-text">alarm clock</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="font-heading text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
