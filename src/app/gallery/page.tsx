"use client";

import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import PhotoFrame from "@/components/ui/PhotoFrame";
import {
  galleryFilters,
  galleryYears,
  galleryImages,
  videoHighlights,
} from "@/data";
import { stagger } from "@/lib/reveal";

export default function GalleryPage() {
  const [cat, setCat] = useState("All");
  const [year, setYear] = useState("All");

  const filtered = galleryImages.filter(
    (g) => (cat === "All" || g.category === cat) && (year === "All" || g.year === year),
  );

  return (
    <>
      <PageHero
        title="Gallery"
        breadcrumb="Gallery"
        subtitle="Moments from our conferences, meetings and workshops."
      />

      <section className="section">
        <div className="container-cog">
          {/* Filters */}
          <div className="reveal mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Pills options={galleryFilters} active={cat} onChange={setCat} />
            <Pills options={galleryYears} active={year} onChange={setYear} small />
          </div>

          {filtered.length === 0 ? (
            <p className="pop-in py-16 text-center text-brand-grey-light">
              No photos found for this selection.
            </p>
          ) : (
            /* Keyed by the filter so the grid replays its entrance on every change */
            <div key={`${cat}-${year}`} className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {filtered.map((g, i) => (
                <figure
                  key={g.seed}
                  style={stagger(i, 60)}
                  className="pop-in group relative overflow-hidden rounded-xl shadow-sm"
                >
                  <PhotoFrame seed={g.seed} icon="image" className="aspect-square transition-transform duration-300 group-hover:scale-105" />
                  <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/70 to-transparent p-3 text-xs font-medium text-white transition-transform group-hover:translate-y-0">
                    {g.title}
                  </figcaption>
                </figure>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Video highlights */}
      <section className="section bg-gray-50/70">
        <div className="container-cog">
          <SectionHeading center eyebrow="Watch" title="Video Highlights" />
          <div className="grid gap-6 sm:grid-cols-3">
            {videoHighlights.map((v, i) => (
              <button
                key={v.seed}
                style={stagger(i, 140)}
                className="reveal reveal-zoom group relative overflow-hidden rounded-2xl text-left shadow-sm"
              >
                <PhotoFrame seed={v.seed} icon="play" className="aspect-video" />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-brand-blue-700 shadow-lg transition-transform group-hover:scale-110">
                    <span className="absolute inset-0 animate-ping rounded-full bg-white/50 [animation-duration:2s]" />
                    <Icon name="play" className="h-7 w-7" />
                  </span>
                </span>
                <span className="absolute bottom-3 left-4 text-sm font-semibold text-white drop-shadow">
                  {v.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Pills({
  options,
  active,
  onChange,
  small,
}: {
  options: string[];
  active: string;
  onChange: (v: string) => void;
  small?: boolean;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o}
          onClick={() => onChange(o)}
          className={`rounded-full font-medium transition-colors ${
            small ? "px-3 py-1 text-xs" : "px-4 py-2 text-sm"
          } ${
            active === o
              ? "bg-brand-blue text-white"
              : "bg-gray-100 text-brand-grey hover:bg-brand-blue-50 hover:text-brand-blue-700"
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}
