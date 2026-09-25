/**
 * Designed medical hero illustration (pure SVG/CSS, no external assets):
 * a glowing DNA helix, a molecular network, an awareness-ribbon emblem and an
 * ECG pulse line on a deep-brand gradient panel. Stands in for photography in
 * Phase 1 while reading as intentional, professional art.
 */
export default function HeroArt() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-blue-600 via-brand-blue-700 to-brand-navy shadow-2xl ring-1 ring-white/10">
      {/* soft glows */}
      <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-brand-blue/40 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-brand-green/30 blur-3xl" />

      {/* dot grid */}
      <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:24px_24px]" />

      <svg viewBox="0 0 520 400" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <linearGradient id="strandA" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#7fe0ff" />
            <stop offset="1" stopColor="#31C5F0" />
          </linearGradient>
          <linearGradient id="strandB" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#d6ef8f" />
            <stop offset="1" stopColor="#B2D055" />
          </linearGradient>
        </defs>

        {/* DNA double helix (right side) */}
        <g className="cog-float" style={{ transformOrigin: "440px 200px" }} opacity="0.95">
          <path
            d="M440 40 C 490 90 390 130 440 180 C 490 230 390 270 440 320 C 470 350 460 360 440 370"
            fill="none"
            stroke="url(#strandA)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M440 40 C 390 90 490 130 440 180 C 390 230 490 270 440 320 C 410 350 420 360 440 370"
            fill="none"
            stroke="url(#strandB)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          {[60, 100, 140, 180, 220, 260, 300].map((y, i) => {
            const spread = i % 2 === 0 ? 34 : 34;
            return (
              <line
                key={y}
                x1={440 - spread}
                y1={y}
                x2={440 + spread}
                y2={y}
                stroke="white"
                strokeOpacity="0.35"
                strokeWidth="2.5"
              />
            );
          })}
        </g>

        {/* Molecular network (top-left) */}
        <g stroke="white" strokeOpacity="0.4" strokeWidth="1.5" fill="none">
          <line x1="70" y1="70" x2="140" y2="50" />
          <line x1="70" y1="70" x2="110" y2="130" />
          <line x1="140" y1="50" x2="110" y2="130" />
          <line x1="140" y1="50" x2="190" y2="95" />
        </g>
        {[
          [70, 70],
          [140, 50],
          [110, 130],
          [190, 95],
        ].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="6" fill="#B2D055" />
        ))}

        {/* ECG pulse line (bottom) */}
        <polyline
          points="40,340 110,340 135,300 165,360 200,320 235,340 520,340"
          fill="none"
          stroke="#B2D055"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.9"
        />
      </svg>

      {/* Center emblem: awareness ribbon in a glass ring */}
      <div className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-[58%] items-center justify-center">
        <span className="absolute inset-0 rounded-full border border-dashed border-white/25" />
        <span className="absolute inset-3 rounded-full bg-white/10 backdrop-blur-sm ring-1 ring-white/20" />
        <svg viewBox="0 0 64 64" className="relative h-20 w-20" aria-hidden>
          <path
            d="M32 6c-5 8-11 15-11 24a11 11 0 0 0 6.6 10.1L20 60l6-3 4 6 8-24"
            fill="none"
            stroke="#7fe0ff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M32 6c5 8 11 15 11 24a11 11 0 0 1-6.6 10.1L44 60l-6-3-4 6"
            fill="none"
            stroke="#B2D055"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Bottom value pills */}
      <div className="absolute inset-x-0 bottom-5 flex items-center justify-center gap-2">
        {["Collaborate", "Educate", "Cure"].map((t, i) => (
          <span
            key={t}
            className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white ring-1 ring-white/20 backdrop-blur-sm"
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                i === 1 ? "bg-brand-green" : "bg-brand-blue"
              }`}
            />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
