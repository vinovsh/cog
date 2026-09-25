"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Adds `.in-view` to any element with the `.reveal` class as it scrolls into
 * the viewport, driving the entrance animation. Re-scans on route change and
 * also picks up `.reveal` elements rendered later (e.g. after a filter change),
 * which would otherwise stay hidden.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const pending = () =>
      Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.in-view)"));

    if (!("IntersectionObserver" in window)) {
      pending().forEach((el) => el.classList.add("in-view"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    pending().forEach((el) => io.observe(el));

    // Observing an element twice is a no-op, so re-scanning is safe.
    const mo = new MutationObserver(() => pending().forEach((el) => io.observe(el)));
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
}
