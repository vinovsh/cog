import Link from "next/link";
import Logo from "./Logo";
import { SocialIcon } from "./Header";
import { navItems, site } from "@/lib/site";
import { stagger } from "@/lib/reveal";

const quickLinks = navItems.filter((n) =>
  ["/about", "/committee", "/membership", "/scientific-activities", "/events"].includes(n.href),
);
const resources = [
  { label: "Research & Publications", href: "/research" },
  { label: "Gallery", href: "/gallery" },
  { label: "News & Announcements", href: "/news" },
  { label: "Download Center", href: "/research#downloads" },
  { label: "Member Login", href: "/login" },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-brand-navy text-white/80">
      {/* Newsletter strip */}
      <div className="bg-brand-blue-700">
        <div className="reveal container-cog flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/60">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6 text-white">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </span>
            <div className="text-white">
              <p className="text-lg font-semibold">Stay Updated with COG</p>
              <p className="text-sm text-white/80">
                Subscribe for the latest updates on events, news and more.
              </p>
            </div>
          </div>
          <form className="flex w-full max-w-md items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="h-11 w-full rounded-lg bg-white px-4 text-sm text-brand-grey outline-none"
            />
            <button type="submit" className="btn-green h-11 shrink-0 !rounded-lg">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-cog grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div style={stagger(0)} className="reveal">
          <Logo variant="light" />
          <p className="mt-4 text-sm leading-relaxed">
            Advancing cancer care through collaboration, education and research.
          </p>
          <div className="mt-5 flex gap-2">
            {(["facebook", "instagram", "linkedin", "youtube"] as const).map((s) => (
              <a
                key={s}
                href={site.socials[s]}
                aria-label={s}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-brand-blue"
              >
                <SocialIcon name={s} className="h-4 w-4 text-white" />
              </a>
            ))}
          </div>
        </div>

        <div style={stagger(1)} className="reveal">
          <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-brand-green">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div style={stagger(2)} className="reveal">
          <h4 className="mb-4 font-semibold text-white">Resources</h4>
          <ul className="space-y-2.5 text-sm">
            {resources.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-brand-green">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div style={stagger(3)} className="reveal">
          <h4 className="mb-4 font-semibold text-white">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2.5">
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
              <span>
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.line3}
              </span>
            </li>
            <li>
              <a href={`tel:${site.phone}`} className="hover:text-brand-green">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-brand-green">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-cog flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Cochin Oncology Group (COG). All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Use</Link>
            <Link href="#" className="hover:text-white">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function PinIcon(p: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={p.className}>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
