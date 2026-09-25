import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import { site } from "@/lib/site";
import { SocialIcon } from "@/components/layout/Header";
import { stagger } from "@/lib/reveal";

export const metadata: Metadata = { title: "Contact Us" };

const details = [
  {
    icon: "pin" as const,
    title: "COG Secretariat",
    lines: [site.address.line1, site.address.line2, site.address.line3],
  },
  { icon: "phone" as const, title: "Call Us", lines: [site.phone], href: `tel:${site.phone}` },
  { icon: "mail" as const, title: "Email Us", lines: [site.email], href: `mailto:${site.email}` },
  { icon: "clock" as const, title: "Working Hours", lines: ["Mon – Sat: 9:00 AM – 5:00 PM"] },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        breadcrumb="Contact Us"
        subtitle="We'd love to hear from you. Reach out with any questions or enquiries."
      />

      <section className="section">
        <div className="container-cog grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* Info + map */}
          <div>
            <SectionHeading eyebrow="Get in Touch" title="Contact Information" />
            <div className="space-y-4">
              {details.map((d, i) => (
                <div key={d.title} style={stagger(i)} className="reveal reveal-left flex gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue-50 text-brand-blue-700">
                    <Icon name={d.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-brand-navy">{d.title}</p>
                    {d.lines.map((l) =>
                      d.href ? (
                        <a key={l} href={d.href} className="block text-sm text-brand-grey hover:text-brand-blue-700">
                          {l}
                        </a>
                      ) : (
                        <p key={l} className="text-sm text-brand-grey">{l}</p>
                      ),
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div style={stagger(4)} className="reveal mt-4 flex gap-2">
              {(["facebook", "instagram", "linkedin", "youtube"] as const).map((s) => (
                <a
                  key={s}
                  href={site.socials[s]}
                  aria-label={s}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-navy text-white transition hover:-translate-y-0.5 hover:bg-brand-blue"
                >
                  <SocialIcon name={s} className="h-4 w-4" />
                </a>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="reveal reveal-zoom mt-6 flex aspect-[16/9] items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue-50 to-brand-green-50 text-center">
              <div>
                <Icon name="pin" className="cog-float mx-auto h-10 w-10 text-brand-blue-600" />
                <p className="mt-2 text-sm font-medium text-brand-navy">Amrita Hospital, Kochi</p>
                <p className="text-xs text-brand-grey-light">Embedded Google Map (Phase 2)</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div style={stagger(1, 150)} className="reveal reveal-right card p-8">
            <SectionHeading eyebrow="Send a Message" title="We'll get back to you" />
            <form className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Your Name" placeholder="Dr. Full Name" />
                <Field label="Your Email" type="email" placeholder="you@example.com" />
              </div>
              <Field label="Subject" placeholder="How can we help?" />
              <div>
                <label className="mb-1.5 block text-sm font-medium text-brand-navy">Message</label>
                <textarea
                  rows={5}
                  placeholder="Write your message here…"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue-100"
                />
              </div>
              <button type="submit" className="btn-blue w-fit">
                Send Message <Icon name="arrow" className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-brand-navy">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue-100"
      />
    </div>
  );
}
