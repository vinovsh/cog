import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Avatar from "@/components/ui/Avatar";
import { officeBearers, executiveMembers, advisoryBoard, type Member } from "@/data";
import { SocialIcon } from "@/components/layout/Header";

function MemberCard({ m, large }: { m: Member; large?: boolean }) {
  return (
    <article className="reveal card group p-6 text-center">
      <Avatar
        seed={m.photoSeed}
        className={`mx-auto ${large ? "h-28 w-28 text-2xl" : "h-20 w-20 text-xl"}`}
      />
      <h3 className={`mt-4 font-semibold text-brand-navy ${large ? "text-lg" : ""}`}>{m.name}</h3>
      <p className="text-sm font-medium text-brand-blue-700">{m.role}</p>
      {m.specialty && <p className="mt-0.5 text-xs text-brand-grey-light">{m.specialty}</p>}
      <div className="mt-4 flex justify-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue-50 text-brand-blue-700">
          <SocialIcon name="linkedin" className="h-4 w-4" />
        </span>
      </div>
    </article>
  );
}

export const metadata: Metadata = { title: "Executive Committee" };

export default function CommitteePage() {
  return (
    <>
      <PageHero
        title="Executive Committee"
        breadcrumb="Executive Committee"
        subtitle="Meet the dedicated professionals leading the Cochin Oncology Group."
      />

      <section className="section">
        <div className="container-cog">
          <SectionHeading center eyebrow="Leadership" title="Office Bearers" />
          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
            {officeBearers.map((m) => (
              <MemberCard key={m.name} m={m} large />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gray-50/70">
        <div className="container-cog">
          <SectionHeading center eyebrow="Our Team" title="Executive Committee Members" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {executiveMembers.map((m) => (
              <MemberCard key={m.name} m={m} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-cog">
          <SectionHeading center eyebrow="Guidance" title="Advisory Board Members" />
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advisoryBoard.map((m) => (
              <MemberCard key={m.name} m={m} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
