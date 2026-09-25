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
            {researchAreas.map((a) => (
              <article key={a.title} className="reveal card p-6 text-center">
                <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green-50 text-brand-green-700">
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
              {publications.map((p) => (
                <article
                  key={p.title}
                  className="reveal card flex gap-4 p-5"
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
              {researchCollaborations.map((c) => (
                <div key={c.name} className="reveal card flex items-center gap-3 p-4">
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
            {downloads.map((d) => (
              <a
                key={d.title}
                href="#"
                className="reveal group card flex flex-col p-6 hover:border-brand-blue"
              >
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue text-white">
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
