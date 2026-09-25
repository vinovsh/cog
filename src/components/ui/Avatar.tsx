const palettes = [
  "from-brand-blue-500 to-brand-blue-700",
  "from-brand-green-500 to-brand-green-700",
  "from-brand-blue-600 to-brand-navy",
  "from-brand-green-600 to-brand-blue-600",
];

function pick(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return palettes[h % palettes.length];
}

/** Circular initials avatar — stands in for member photos in Phase 1. */
export default function Avatar({
  seed,
  className = "h-20 w-20 text-xl",
}: {
  seed: string;
  className?: string;
}) {
  const initials = seed.slice(0, 2).toUpperCase();
  return (
    <div
      className={`flex items-center justify-center rounded-full bg-gradient-to-br font-semibold text-white shadow-inner ${pick(
        seed,
      )} ${className}`}
      aria-hidden
    >
      {initials}
    </div>
  );
}
