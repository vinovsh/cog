import Icon, { type IconName } from "./Icon";

const gradients = [
  "from-brand-blue-100 to-brand-blue-500",
  "from-brand-green-50 to-brand-green-600",
  "from-brand-blue-50 to-brand-navy",
  "from-brand-green-100 to-brand-blue-600",
  "from-brand-blue-500 to-brand-navy",
];

function pick(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 33 + seed.charCodeAt(i)) >>> 0;
  return gradients[h % gradients.length];
}

/** Gradient stand-in for a photograph, with an optional icon watermark/label. */
export default function PhotoFrame({
  seed,
  icon = "image",
  label,
  className = "aspect-video",
}: {
  seed: string;
  icon?: IconName;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${pick(
        seed,
      )} ${className}`}
      aria-hidden
    >
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,white_1px,transparent_0)] [background-size:16px_16px]" />
      <Icon name={icon} className="h-10 w-10 text-white/70" />
      {label && (
        <span className="absolute bottom-2 left-3 text-xs font-medium text-white/90">
          {label}
        </span>
      )}
    </div>
  );
}
