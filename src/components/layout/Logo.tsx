import Link from "next/link";

/**
 * Typographic COG wordmark. `variant="light"` renders white text for dark
 * backgrounds (footer); `variant="dark"` renders the coloured mark for light
 * backgrounds (header). A small ribbon-in-hands glyph stands in for the logo.
 */
export default function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const isLight = variant === "light";
  const sub = isLight ? "text-white/80" : "text-brand-navy";

  return (
    <Link
      href="/"
      className={`group inline-flex flex-col items-start leading-none ${className}`}
      aria-label="Cochin Oncology Group — Home"
    >
      <span className="flex items-center text-3xl font-extrabold tracking-tight">
        <span className="text-brand-blue">C</span>
        <span className="relative mx-[1px] inline-flex items-center justify-center">
          <span className="text-brand-green">O</span>
          <RibbonGlyph className="absolute h-3.5 w-3.5" />
        </span>
        <span className="text-brand-blue">G</span>
      </span>
      <span
        className={`mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] ${sub}`}
      >
        Cochin Oncology Group
      </span>
    </Link>
  );
}

function RibbonGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M12 3c-1.6 2.8-3.4 5.4-3.4 8.2 0 1.9 1.5 3.4 3.4 3.4s3.4-1.5 3.4-3.4C15.4 8.4 13.6 5.8 12 3z"
        fill="#31C5F0"
      />
      <path
        d="M10.4 12.6 7 20l2.2-.9L10.8 22l2-6.1a3.4 3.4 0 0 1-2.4-3.3z"
        fill="#B2D055"
      />
    </svg>
  );
}
