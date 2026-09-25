import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import PhotoFrame from "@/components/ui/PhotoFrame";
import { upcomingEvents, pastConferences, brochures } from "@/data";

export const metadata: Metadata = { title: "Conferences & Events" };

export default function EventsPage() {
  return (
    <>
      <PageHero
        title="Conferences & Events"
        breadcrumb="Conferences & Events"
        subtitle="Explore upcoming events, register online and browse our conference archives."
      />

      {/* Featured conference banner */}
      <section className="section">
        <div className="container-cog">
          <div className="reveal relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-blue-600 to-brand-navy p-8 text-white sm:p-12">
            <div className="medical-dots absolute inset-0 opacity-20" aria-hidden />
            <div className="relative max-w-2xl">
              <span className="inline-block rounded-full bg-brand-green px-3 py-1 text-xs font-semibold">
                Flagship Event
              </span>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">COG Annual Conference 2025</h2>
              <p className="mt-2 text-lg font-medium text-brand-green">
                10 – 12 October 2025 · Le Méridien, Kochi, Kerala
              </p>
              <p className="mt-4 text-white/85">
                Innovate. Collaborate. Elevate. Shaping the future of oncology
                with three days of keynotes, workshops and networking.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="#" className="btn-green">
                  Register Now <Icon name="arrow" className="h-4 w-4" />
                </Link>
                <Link href="#" className="btn-outline !border-white !text-white hover:!bg-white/10">
                  Download Brochure <Icon name="download" className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming events */}
      <section className="section pt-0">
        <div className="container-cog">
          <SectionHeading eyebrow="Save the date" title="Upcoming Events" />
          <div className="space-y-4">
            {upcomingEvents.map((e) => (
              <article
                key={e.id}
                className="reveal card flex flex-col items-start gap-5 p-5 sm:flex-row sm:items-center"
              >
                <div
                  className={`flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-2xl text-white ${
                    e.accent === "green" ? "bg-brand-green" : "bg-brand-blue"
                  }`}
                >
                  <span className="text-xs font-semibold uppercase">{e.month}</span>
                  <span className="text-3xl font-bold leading-none">{e.day}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-brand-navy">{e.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm text-brand-grey">
                    <span className="flex items-center gap-1.5">
                      <Icon name="calendar" className="h-4 w-4 text-brand-blue-600" /> {e.dateLabel}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Icon name="clock" className="h-4 w-4 text-brand-blue-600" /> {e.time}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Icon name="pin" className="h-4 w-4 text-brand-blue-600" /> {e.venue}
                    </span>
                  </div>
                </div>
                <Link href="#" className="btn-blue shrink-0 !py-2.5">
                  {e.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Past conferences */}
      <section className="section bg-gray-50/70">
        <div className="container-cog">
          <SectionHeading
            eyebrow="Archives"
            title="Past Conferences"
            linkHref="/gallery"
            linkLabel="View All Archives"
          />
          <div className="grid gap-6 sm:grid-cols-3">
            {pastConferences.map((c) => (
              <article key={c.title} className="reveal card group overflow-hidden">
                <PhotoFrame seed={c.seed} icon="presentation" label={c.year} className="aspect-[16/10]" />
                <div className="p-5">
                  <h3 className="font-semibold text-brand-navy group-hover:text-brand-blue-700">
                    {c.title}
                  </h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-brand-grey-light">
                    <Icon name="pin" className="h-4 w-4" /> {c.place}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Brochures / downloads */}
      <section className="section">
        <div className="container-cog">
          <SectionHeading eyebrow="Resources" title="Downloadable Brochures & Programmes" />
          <div className="grid gap-4 sm:grid-cols-2">
            {brochures.map((b) => (
              <a
                key={b.title}
                href="#"
                className="reveal group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:border-brand-blue hover:shadow-md"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue-50 text-brand-blue-700">
                  <Icon name="document" className="h-6 w-6" />
                </span>
                <div className="flex-1">
                  <p className="font-medium text-brand-navy">{b.title}</p>
                  <p className="text-xs text-brand-grey-light">{b.size}</p>
                </div>
                <Icon name="download" className="h-5 w-5 text-brand-grey-light group-hover:text-brand-blue-700" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
