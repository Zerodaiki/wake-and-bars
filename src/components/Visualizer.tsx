"use client";

export function Visualizer({
  bars = 5,
  height = 24,
  className = "",
}: {
  bars?: number;
  height?: number;
  className?: string;
}) {
  return (
    <div className={`flex items-end gap-[2px] ${className}`} style={{ height }}>
      {Array.from({ length: bars }).map((_, i) => (
        <div
          key={i}
          className="w-[3px] rounded-full bg-gradient-to-t from-accent-pink to-accent-orange origin-bottom"
          style={{
            height: "100%",
            animation: `bar-bounce ${0.6 + i * 0.15}s ease-in-out infinite`,
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}
    </div>
  );
}
