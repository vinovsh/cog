import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import SectionHeading from "@/components/ui/SectionHeading";
import HeroArt from "@/components/home/HeroArt";
import HeroParticles from "@/components/home/HeroParticles";
import CountUp from "@/components/ui/CountUp";
import { stagger } from "@/lib/reveal";
import {
  stats,
  leadershipMessages,
  upcomingEvents,
  news,
  whyJoin,
  membershipBenefits,
} from "@/data";
import { asset } from "@/lib/asset";

// Placeholder portraits for the leadership messages until real photos are available
const leaderPortraits = ["/images/doctors/doctor-1.avif", "/images/doctors/doctor-2.avif"];

export default function HomePage() {
  const featured = news.find((n) => n.featured)!;
  const rest = news.filter((n) => !n.featured).slice(0, 3);
  const latest = [featured, ...rest];

  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue-50 via-white to-brand-green-50">
        <div className="medical-dots absolute inset-0 opacity-60" aria-hidden />
        <div className="absolute right-0 top-0 h-[520px] w-[520px] translate-x-1/3 rounded-full border-[40px] border-brand-blue/10" aria-hidden />
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-brand-green/10 blur-3xl" aria-hidden />
        <HeroParticles />
        <div className="container-cog relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <span style={stagger(0)} className="reveal inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-white/70 px-4 py-1.5 text-xs font-semibold text-brand-blue-700 shadow-sm backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-green opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-green" />
              </span>
              Multidisciplinary Oncology Society · Kochi, Kerala
            </span>
            <h1 style={stagger(1)} className="reveal mt-5 text-4xl font-bold leading-[1.1] text-brand-navy sm:text-5xl">
              Advancing Cancer Care Through{" "}
              <span className="text-gradient">Collaboration,</span>{" "}
              <span className="text-gradient">Education,</span> and{" "}
              <span className="text-gradient">Research.</span>
            </h1>
            <p style={stagger(2)} className="reveal mt-6 max-w-xl text-lg leading-relaxed text-brand-grey">
              Cochin Oncology Group (COG) is a multidisciplinary academic society
              committed to improving cancer care through education, research,
              collaboration and professional development.
            </p>
            <div style={stagger(3)} className="reveal mt-8 flex flex-wrap gap-4">
              <Link href="/about" className="btn-blue">
                Discover More <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link href="/membership" className="btn-green">
                Join COG Today <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>
            <div style={stagger(4)} className="reveal mt-8 flex items-center gap-6 text-sm text-brand-grey">
              <span className="flex items-center gap-2">
                <Icon name="check-circle" className="h-5 w-5 text-brand-green-600" /> 850+ members
              </span>
              <span className="flex items-center gap-2">
                <Icon name="check-circle" className="h-5 w-5 text-brand-green-600" /> 15+ years of excellence
              </span>
            </div>
          </div>

          <div style={stagger(2)} className="reveal reveal-right relative">
            <HeroArt />
            {/* floating card — bottom left */}
            <div className="cog-float absolute -bottom-5 -left-5 hidden rounded-2xl [animation-delay:-3s] bg-white p-4 shadow-xl ring-1 ring-black/5 sm:block">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-green-50 text-brand-green-700">
                  <Icon name="heart" className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-brand-navy">Collaborate</p>
                  <p className="text-xs text-brand-grey-light">Educate · Cure</p>
                </div>
              </div>
            </div>
            {/* floating card — top right */}
            <div className="cog-float absolute -right-4 top-6 hidden rounded-2xl bg-white p-3 pr-5 shadow-xl ring-1 ring-black/5 lg:flex lg:items-center lg:gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-blue-50 text-brand-blue-700">
                <Icon name="microscope" className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-brand-navy">120+ Meetings</p>
                <p className="text-xs text-brand-grey-light">Scientific &amp; CME</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar — overlaps the hero, kept outside overflow-hidden so nothing clips */}
      <div className="container-cog relative z-10 -mt-10">
        <div className="reveal reveal-zoom grid grid-cols-2 overflow-hidden rounded-2xl bg-gradient-to-r from-brand-navy to-brand-blue-700 text-white shadow-xl ring-1 ring-white/10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              style={stagger(i + 2)}
              className="reveal group flex items-center gap-4 px-6 py-7 transition-colors hover:bg-white/5 lg:border-l lg:border-white/10 lg:first:border-l-0"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-green transition-transform group-hover:scale-110">
                <Icon name={s.icon} className="h-6 w-6" />
              </span>
              <div>
                <p className="text-2xl font-bold">
                  <CountUp value={s.value} delay={300 + i * 120} />
                </p>
                <p className="text-sm text-white/70">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- Welcome + leadership ---------------- */}
      <section className="section pt-16">
        <div className="container-cog grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="reveal reveal-left">
            <SectionHeading
              eyebrow="Welcome"
              title={
                <>
                  Welcome to <span className="text-brand-blue">Cochin Oncology Group</span>
                </>
              }
            />
            <p className="text-brand-grey leading-relaxed">
              COG brings together oncologists, surgeons, radiation oncologists,
              medical oncologists, pathologists, radiologists, nurses, researchers
              and allied healthcare professionals to foster excellence in cancer
              care through multidisciplinary collaboration and continuous learning.
            </p>
            <Link href="/about" className="btn-blue mt-8">
              About COG <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {leadershipMessages.map((l, i) => (
              <article
                key={l.role}
                style={stagger(i + 1, 150)}
                className="reveal card group p-6 text-center transition-all duration-300 hover:-translate-y-1"
              >
                <span className="inline-block rounded-full bg-brand-blue-50 px-3 py-1 text-xs font-semibold text-brand-blue-700">
                  Message from {l.role}
                </span>
                <div className="relative mx-auto mt-4 h-24 w-24 overflow-hidden rounded-full bg-brand-blue-50 ring-4 ring-brand-blue-50 transition-shadow duration-300 group-hover:ring-brand-blue/30">
                  <Image
                    src={asset(leaderPortraits[i % leaderPortraits.length])}
                    alt={l.name}
                    fill
                    sizes="96px"
                    className="object-cover object-[50%_20%] transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="mt-4 font-semibold text-brand-navy">{l.name}</h3>
                <p className="text-xs text-brand-grey-light">{l.role}</p>
                <Icon name="quote" className="mx-auto mt-4 h-6 w-6 text-brand-blue/30" />
                <p className="mt-1 text-sm italic leading-relaxed text-brand-grey">
                  {l.message}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Upcoming events ---------------- */}
      <section className="section bg-gray-50/70">
        <div className="container-cog">
          <SectionHeading
            eyebrow="Mark your calendar"
            title="Upcoming Events"
            linkHref="/events"
            linkLabel="View All Events"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {upcomingEvents.map((e, i) => (
              <article
                key={e.id}
                style={stagger(i)}
                className={`reveal card flex flex-col border-t-4 p-6 transition-all duration-300 hover:-translate-y-1 ${
                  e.accent === "green" ? "border-t-brand-green" : "border-t-brand-blue"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl text-white shadow-md ${
                      e.accent === "green" ? "bg-brand-green" : "bg-brand-blue"
                    }`}
                  >
                    <span className="text-[0.65rem] font-semibold uppercase">{e.month}</span>
                    <span className="text-2xl font-bold leading-none">{e.day}</span>
                  </div>
                  <h3 className="mt-1 font-semibold text-brand-navy">{e.title}</h3>
                </div>
                <ul className="mt-5 flex-1 space-y-2 text-sm text-brand-grey">
                  <li className="flex items-center gap-2">
                    <Icon name="calendar" className="h-4 w-4 text-brand-blue-600" /> {e.dateLabel}
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="clock" className="h-4 w-4 text-brand-blue-600" /> {e.time}
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="pin" className="h-4 w-4 text-brand-blue-600" /> {e.venue}
                  </li>
                </ul>
                <Link
                  href="/events"
                  className="mt-5 inline-flex items-center gap-1.5 border-t border-gray-100 pt-4 text-sm font-semibold text-brand-blue-700 hover:gap-2.5"
                >
                  {e.cta} <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Why Join CTA ---------------- */}
      <section className="section">
        <div className="container-cog">
          <div className="reveal reveal-zoom relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-blue-50 to-brand-green-50 p-8 sm:p-12">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold text-brand-navy sm:text-3xl">Why Join COG?</h2>
                <ul className="mt-6 space-y-3">
                  {whyJoin.map((w, i) => (
                    <li key={w} style={stagger(i + 2, 90)} className="reveal flex items-start gap-3 text-brand-grey">
                      <Icon name="check-circle" className="mt-0.5 h-5 w-5 shrink-0 text-brand-green-600" />
                      {w}
                    </li>
                  ))}
                </ul>
                <Link href="/membership" className="btn-green mt-8">
                  Become a Member Today <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {membershipBenefits.slice(0, 4).map((b, i) => (
                  <div
                    key={b.title}
                    style={stagger(i + 3, 120)}
                    className={`reveal reveal-zoom rounded-2xl bg-white/80 p-5 shadow-sm ring-1 ring-black/5 backdrop-blur transition-transform hover:-translate-y-1 ${
                      i % 2 ? "sm:translate-y-4" : ""
                    }`}
                  >
                    <span
                      className={`mb-3 flex h-11 w-11 items-center justify-center rounded-xl text-white ${
                        i % 2 ? "bg-brand-green" : "bg-brand-blue"
                      }`}
                    >
                      <Icon name={b.icon} className="h-5 w-5" />
                    </span>
                    <p className="text-sm font-semibold text-brand-navy">{b.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-brand-grey-light">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Latest news ---------------- */}
      <section className="section bg-gray-50/70">
        <div className="container-cog">
          <SectionHeading
            title="Latest News & Announcements"
            linkHref="/news"
            linkLabel="View All News"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {latest.map((n, i) => (
              <article
                key={n.id}
                style={stagger(i)}
                className="reveal card group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={asset(n.image)}
                      alt={n.title}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <span className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/25 to-transparent" />
                  {n.featured ? (
                    <span className="absolute left-3 top-3 rounded-md bg-brand-blue px-2.5 py-1 text-[0.65rem] font-bold uppercase text-white shadow">
                      Featured
                    </span>
                  ) : (
                    <span className="absolute left-3 top-3 rounded-md bg-white/90 px-2.5 py-1 text-[0.65rem] font-bold uppercase text-brand-blue-700 shadow">
                      {n.category}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="flex items-center gap-1.5 text-xs font-medium text-brand-grey-light">
                    <Icon name="calendar" className="h-3.5 w-3.5" /> {n.date}
                  </p>
                  <h3 className="mt-2 font-semibold leading-snug text-brand-navy group-hover:text-brand-blue-700">
                    {n.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-brand-grey">{n.excerpt}</p>
                  <Link
                    href="/news"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue-700 hover:gap-2.5"
                  >
                    Read More <Icon name="arrow" className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
