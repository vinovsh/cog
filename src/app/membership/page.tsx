import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import Accordion from "@/components/ui/Accordion";
import { membershipBenefits, membershipTiers, membershipFaqs } from "@/data";

export const metadata: Metadata = { title: "Membership" };

export default function MembershipPage() {
  return (
    <>
      <PageHero
        title="Membership"
        breadcrumb="Membership"
        subtitle="Join Kerala's leading multidisciplinary oncology community."
      />

      {/* Benefits */}
      <section className="section">
        <div className="container-cog">
          <SectionHeading center eyebrow="Why Join COG?" title="Benefits of Membership" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {membershipBenefits.map((b) => (
              <article key={b.title} className="reveal card p-6">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green-50 text-brand-green-700">
                  <Icon name={b.icon} className="h-6 w-6" />
                </span>
                <h3 className="font-semibold text-brand-navy">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-grey">{b.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories + registration */}
      <section className="section bg-gray-50/70">
        <div className="container-cog grid gap-8 lg:grid-cols-2">
          <div className="reveal card p-8">
            <h3 className="text-xl font-bold text-brand-navy">Membership Categories</h3>
            <div className="mt-6 overflow-hidden rounded-xl border border-gray-100">
              <div className="grid grid-cols-2 bg-brand-navy px-5 py-3 text-sm font-semibold text-white">
                <span>Category</span>
                <span className="text-right">Fee (INR)</span>
              </div>
              {membershipTiers.map((t, i) => (
                <div
                  key={t.name}
                  className={`grid grid-cols-2 items-center px-5 py-4 ${
                    i % 2 ? "bg-gray-50/60" : "bg-white"
                  }`}
                >
                  <div>
                    <p className="font-medium text-brand-navy">{t.name}</p>
                    <p className="text-xs text-brand-grey-light">{t.note}</p>
                  </div>
                  <span className="text-right font-semibold text-brand-blue-700">{t.fee}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal flex flex-col rounded-2xl bg-gradient-to-br from-brand-blue-600 to-brand-navy p-8 text-white">
            <h3 className="text-xl font-bold">Membership Registration</h3>
            <p className="mt-3 text-white/85">
              Please fill in the form below to apply for COG membership. Our
              secretariat will review your application and respond within 5–7
              working days.
            </p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-green mt-6 self-start !bg-white !text-brand-blue-700 hover:!bg-brand-green hover:!text-white"
            >
              Open Google Form <Icon name="arrow" className="h-4 w-4" />
            </a>
            <p className="mt-3 text-xs text-white/60">(Google Form will open in a new tab)</p>

            {/* Certificate preview */}
            <div className="mt-8 rounded-xl bg-white/10 p-5 backdrop-blur">
              <p className="text-sm font-semibold">Membership Certificate Preview</p>
              <div className="mt-3 rounded-lg border-4 border-double border-white/40 bg-white/95 p-5 text-center text-brand-navy">
                <Icon name="award" className="mx-auto h-8 w-8 text-brand-blue-600" />
                <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-brand-grey-light">
                  Certificate of Membership
                </p>
                <p className="mt-1 text-lg font-bold">Dr. Your Name Here</p>
                <p className="text-[0.7rem] text-brand-grey-light">
                  is a member of Cochin Oncology Group (COG)
                </p>
                <div className="mt-3 flex items-center justify-between text-[0.65rem] text-brand-grey-light">
                  <span>Membership ID: COG2025001</span>
                  <span>Valid: 01 Jan 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-cog max-w-3xl">
          <SectionHeading center eyebrow="Need Help?" title="Frequently Asked Questions" />
          <Accordion items={membershipFaqs} />
        </div>
      </section>
    </>
  );
}
