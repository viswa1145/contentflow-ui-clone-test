import React from "react";

type FestivalKey = "diwali" | "holi" | "christmas" | null;

interface FestivalEffectsProps {
  festival: FestivalKey;
}

export default function FestivalEffects({ festival }: FestivalEffectsProps) {
  if (!festival) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[60]">
      {festival === "diwali" ? <DiwaliEffects /> : null}
      {festival === "holi" ? <HoliEffects /> : null}
    </div>
  );
}

function DiwaliEffects() {
  // Subtle diyas in corners with gentle flicker
  return (
    <>
      <div className="fe-diya fe-diya--bl" />
      <div className="fe-diya fe-diya--br" />
    </>
  );
}

function HoliEffects() {
  // Soft confetti streamers falling slowly
  const pieces = Array.from({ length: 14 });
  return (
    <div className="fe-confetti">
      {pieces.map((_, idx) => (
        <span key={idx} className={`fe-confetti-piece fe-confetti-${(idx % 7) + 1}`} />
      ))}
    </div>
  );
}


