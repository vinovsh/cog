"use client";

import { useState } from "react";
import Icon from "./Icon";
import { stagger } from "@/lib/reveal";

export default function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            style={stagger(i, 90)}
            className="reveal overflow-hidden rounded-xl border border-gray-200 bg-white transition-shadow hover:shadow-md"
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-medium text-brand-navy">{item.q}</span>
              <Icon
                name="chevron"
                className={`h-5 w-5 shrink-0 text-brand-blue-600 transition-transform ${
                  isOpen ? "rotate-90" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-4 text-sm leading-relaxed text-brand-grey">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
