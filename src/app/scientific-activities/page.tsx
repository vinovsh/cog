import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import { scientificActivities } from "@/data";

export const metadata: Metadata = { title: "Scientific Activities" };

export default function ScientificActivitiesPage() {
  return (
    <>
      <PageHero
        title="Scientific Activities"
        breadcrumb="Scientific Activities"
        subtitle="Continuous academic engagement through meetings, tumour boards, journal clubs and CME."
      />

      <section className="section">
        <div className="container-cog">
          <SectionHeading center eyebrow="Academic Engagement" title="What We Do" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {scientificActivities.map((a) => (
              <article
                key={a.title}
                className="reveal card group relative overflow-hidden p-8"
              >
                <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-brand-blue-50 transition-transform group-hover:scale-150" />
                <span className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue text-white shadow-md">
                  <Icon name={a.icon} className="h-7 w-7" />
                </span>
                <h3 className="relative text-lg font-bold text-brand-navy">{a.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-brand-grey">{a.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight band */}
      <section className="section bg-brand-navy">
        <div className="container-cog grid items-center gap-8 text-white lg:grid-cols-[1.4fr_1fr]">
          <div className="reveal">
            <p className="eyebrow !text-brand-green">Continuing Education</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
              Advancing knowledge, one meeting at a time
            </h2>
            <p className="mt-4 max-w-xl text-white/80">
              COG hosts regular academic sessions where members present cases,
              review the latest literature and discuss complex multidisciplinary
              treatment plans — building a culture of shared learning.
            </p>
          </div>
          <div className="reveal grid grid-cols-3 gap-4 text-center">
            {[
              { v: "12+", l: "Meetings / year" },
              { v: "40+", l: "Case discussions" },
              { v: "500+", l: "Participants" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl bg-white/5 p-5">
                <p className="text-2xl font-bold text-brand-green">{s.v}</p>
                <p className="mt-1 text-xs text-white/70">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
