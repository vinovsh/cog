import type { CSSProperties } from "react";

/** Staggers `.reveal` / `.pop-in` entrances within a group, e.g. cards in a grid. */
export const stagger = (i: number, step = 110) =>
  ({ "--reveal-delay": `${i * step}ms` }) as CSSProperties;
