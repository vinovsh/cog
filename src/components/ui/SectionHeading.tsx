import Link from "next/link";

export default function SectionHeading({
  eyebrow,
  title,
  center,
  linkHref,
  linkLabel,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  center?: boolean;
  linkHref?: string;
  linkLabel?: string;
}) {
  return (
    <div
      className={`mb-10 flex flex-col gap-3 ${
        center ? "items-center text-center" : "sm:flex-row sm:items-end sm:justify-between"
      }`}
    >
      <div className={center ? "max-w-2xl" : ""}>
        {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
        <h2 className="text-2xl font-bold text-brand-navy sm:text-3xl">{title}</h2>
        <span
          className={`mt-3 block h-1 w-16 rounded-full bg-brand-green ${
            center ? "mx-auto" : ""
          }`}
        />
      </div>
      {linkHref && linkLabel && (
        <Link
          href={linkHref}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue-700 hover:gap-2.5 hover:text-brand-blue-600"
        >
          {linkLabel}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      )}
    </div>
  );
}
