import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import {
  researchAreas,
  publications,
  researchCollaborations,
  downloads,
} from "@/data";
import { stagger } from "@/lib/reveal";

export const metadata: Metadata = { title: "Research & Publications" };

export default function ResearchPage() {
  return (
    <>
      <PageHero
        title="Research & Publications"
        breadcrumb="Research & Publications"
        subtitle="Driving evidence-based oncology through research, collaboration and knowledge sharing."
      />

      {/* Focus areas */}
      <section className="section">
        <div className="container-cog">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {researchAreas.map((a, i) => (
              <article key={a.title} style={stagger(i, 120)} className="reveal card group p-6 text-center hover:-translate-y-1">
                <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green-50 text-brand-green-700 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-brand-green group-hover:text-white">
                  <Icon name={a.icon} className="h-7 w-7" />
                </span>
                <h3 className="font-semibold text-brand-navy">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-grey">{a.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gray-50/70 pt-0 sm:pt-0">
        <div className="container-cog grid gap-10 pt-16 lg:grid-cols-[1.3fr_1fr]">
          {/* Publications */}
          <div>
            <SectionHeading eyebrow="By Our Members" title="Recent Publications" />
            <div className="space-y-4">
              {publications.map((p, i) => (
                <article
                  key={p.title}
                  style={stagger(i, 90)}
                  className="reveal reveal-left card flex gap-4 p-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue-50 text-brand-blue-700">
                    <Icon name="book" className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold leading-snug text-brand-navy">{p.title}</h3>
                    <p className="mt-1 text-sm text-brand-grey">{p.authors}</p>
                    <p className="text-xs italic text-brand-grey-light">{p.journal}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Collaborations */}
          <div>
            <SectionHeading eyebrow="Partners" title="Research Collaborations" />
            <div className="grid gap-4 sm:grid-cols-2">
              {researchCollaborations.map((c, i) => (
                <div key={c.name} style={stagger(i, 90)} className="reveal reveal-zoom card flex items-center gap-3 p-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-navy text-xs font-bold text-white">
                    {c.seed}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-brand-navy">{c.name}</p>
                    <p className="text-xs text-brand-grey-light">{c.place}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download centre */}
      <section id="downloads" className="section scroll-mt-24">
        <div className="container-cog">
          <SectionHeading eyebrow="Download Centre" title="Guidelines & Resources" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {downloads.map((d, i) => (
              <a
                key={d.title}
                href="#"
                style={stagger(i, 110)}
                className="reveal group card flex flex-col p-6 hover:-translate-y-1 hover:border-brand-blue"
              >
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue text-white transition-transform duration-300 group-hover:scale-110">
                  <Icon name="download" className="h-6 w-6" />
                </span>
                <p className="font-semibold text-brand-navy">{d.title}</p>
                <span className="mt-3 inline-flex w-fit rounded-full bg-brand-green-50 px-2.5 py-1 text-xs font-medium text-brand-green-700">
                  {d.tag}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
