import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import PhotoFrame from "@/components/ui/PhotoFrame";
import { missionPoints, values, objectives } from "@/data";

export const metadata: Metadata = { title: "About Us" };

const pillars = [
  {
    icon: "target" as const,
    title: "Vision",
    body: "To foster excellence in oncology through multidisciplinary collaboration and continuous learning.",
  },
  {
    icon: "eye" as const,
    title: "Mission",
    list: missionPoints,
  },
  {
    icon: "heart" as const,
    title: "Values",
    list: values,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Cochin Oncology Group"
        breadcrumb="About Us"
        subtitle="A non-profit academic society dedicated to advancing cancer care across Kerala."
      />

      {/* History */}
      <section className="section">
        <div className="container-cog grid items-center gap-10 lg:grid-cols-2">
          <div className="reveal">
            <SectionHeading eyebrow="Our Story" title="Our History" />
            <div className="space-y-4 text-brand-grey leading-relaxed">
              <p>
                Cochin Oncology Group (COG) was founded by a group of passionate
                oncology professionals in Kochi with the vision of creating a
                platform for multidisciplinary collaboration and academic
                excellence in cancer care.
              </p>
              <p>
                Over the years, COG has grown into a vibrant academic society with
                members from various disciplines including Medical, Surgical and
                Radiation Oncology, Pathology, Radiology, Nursing, Palliative Care
                and Allied Health Professions.
              </p>
              <p>
                Today the society conducts scientific meetings, tumour boards,
                conferences, workshops and community awareness initiatives, uniting
                professionals in the shared mission to collaborate, educate and cure.
              </p>
            </div>
          </div>
          <PhotoFrame
            seed="cog-history"
            icon="users"
            className="reveal aspect-[4/3] rounded-3xl shadow-xl"
          />
        </div>
      </section>

      {/* Vision / Mission / Values */}
      <section className="section bg-gray-50/70">
        <div className="container-cog">
          <SectionHeading center eyebrow="What Drives Us" title="Vision, Mission & Values" />
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((p) => (
              <article key={p.title} className="reveal card p-8">
                <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue-50 text-brand-blue-700">
                  <Icon name={p.icon} className="h-7 w-7" />
                </span>
                <h3 className="text-lg font-bold text-brand-navy">{p.title}</h3>
                {p.body && <p className="mt-3 text-sm leading-relaxed text-brand-grey">{p.body}</p>}
                {p.list && (
                  <ul className="mt-4 space-y-2">
                    {p.list.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-brand-grey">
                        <Icon name="check" className="h-4 w-4 text-brand-green-600" /> {item}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="section">
        <div className="container-cog">
          <SectionHeading eyebrow="Our Purpose" title="Objectives of the Society" />
          <div className="grid gap-4 md:grid-cols-2">
            {objectives.map((o, i) => (
              <div
                key={o}
                className="reveal flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-green-50 text-sm font-bold text-brand-green-700">
                  {i + 1}
                </span>
                <p className="text-sm leading-relaxed text-brand-grey">{o}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
