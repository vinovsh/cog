"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { navItems, site } from "@/lib/site";

// Items shown inline on desktop; the rest collapse into the "More" dropdown.
const PRIMARY_HREFS = new Set([
  "/",
  "/about",
  "/membership",
  "/scientific-activities",
  "/events",
]);
const primaryItems = navItems.filter((i) => PRIMARY_HREFS.has(i.href));
const moreItems = navItems.filter((i) => !PRIMARY_HREFS.has(i.href));

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const moreActive = moreItems.some((i) => isActive(i.href));

  // Close menus whenever the route changes.
  useEffect(() => {
    setMoreOpen(false);
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top utility bar */}
      <div className="hidden bg-brand-navy text-white/90 md:block">
        <div className="container-cog flex h-9 items-center justify-between text-xs">
          <div className="flex items-center gap-5">
            <a href={`mailto:${site.email}`} className="flex items-center gap-1.5 hover:text-white">
              <MailIcon className="h-3.5 w-3.5" /> {site.email}
            </a>
            <a href={`tel:${site.phone}`} className="flex items-center gap-1.5 hover:text-white">
              <PhoneIcon className="h-3.5 w-3.5" /> {site.phone}
            </a>
          </div>
          <div className="flex items-center gap-3">
            {(["facebook", "instagram", "linkedin", "youtube"] as const).map((s) => (
              <a key={s} href={site.socials[s]} aria-label={s} className="opacity-80 hover:opacity-100">
                <SocialIcon name={s} className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav row: logo + inline menu (+ More) + actions */}
      <div className="border-b border-gray-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="container-cog flex h-20 items-center justify-between gap-4">
          <Logo />

          <nav className="hidden items-center gap-0.5 xl:flex">
            {primaryItems.map((item) => (
              <NavLink key={item.href} href={item.href} active={isActive(item.href)}>
                {item.label}
              </NavLink>
            ))}

            {/* More dropdown (hover or click) */}
            <div
              className="relative"
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => setMoreOpen(false)}
            >
              <button
                onClick={() => setMoreOpen((v) => !v)}
                aria-haspopup="menu"
                aria-expanded={moreOpen}
                className={`group relative flex items-center gap-1 rounded-md px-2.5 py-2 text-[0.82rem] font-medium transition-colors ${
                  moreActive || moreOpen
                    ? "text-brand-blue-700"
                    : "text-brand-grey hover:text-brand-blue-600"
                }`}
              >
                More
                <ChevronDownIcon
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    moreOpen ? "rotate-180" : ""
                  }`}
                />
                <span
                  className={`pointer-events-none absolute inset-x-2.5 -bottom-0.5 h-[2px] origin-center rounded-full bg-brand-blue transition-transform ${
                    moreActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </button>

              {/* invisible bridge so hover doesn't drop between button and panel */}
              {moreOpen && (
                <div className="absolute right-0 top-full z-50 pt-3">
                  <div className="w-64 overflow-hidden rounded-2xl border border-gray-100 bg-white p-1.5 shadow-xl ring-1 ring-black/5">
                    {moreItems.map((item) => {
                      const active = isActive(item.href);
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMoreOpen(false)}
                          className={`group flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                            active
                              ? "bg-brand-blue-50 text-brand-blue-700"
                              : "text-brand-grey hover:bg-gray-50 hover:text-brand-blue-700"
                          }`}
                        >
                          {item.label}
                          <ChevronRightIcon className="h-4 w-4 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </nav>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setSearch((v) => !v)}
              aria-label="Search"
              className="hidden h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-brand-grey transition-colors hover:border-brand-blue hover:text-brand-blue sm:flex"
            >
              <SearchIcon className="h-4 w-4" />
            </button>
            <Link
              href="/login"
              className="btn-green hidden !px-5 !py-2.5 shadow-lg shadow-brand-green/20 sm:inline-flex"
            >
              Member Login <PlusIcon className="h-4 w-4" />
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-brand-grey xl:hidden"
            >
              {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Search panel */}
      {search && (
        <div className="border-b border-gray-100 bg-white">
          <div className="container-cog py-3">
            <div className="flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 focus-within:border-brand-blue">
              <SearchIcon className="h-4 w-4 text-brand-grey" />
              <input
                autoFocus
                placeholder="Search the COG website…"
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {open && (
        <div className="border-b border-gray-100 bg-white xl:hidden">
          <nav className="container-cog flex flex-col py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm font-medium ${
                  isActive(item.href)
                    ? "bg-brand-blue-50 text-brand-blue-700"
                    : "text-brand-grey hover:bg-gray-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/login" onClick={() => setOpen(false)} className="btn-green mt-3">
              Member Login <PlusIcon className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ---- Desktop inline nav link with animated underline ---- */
function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className="group relative whitespace-nowrap rounded-md px-2.5 py-2 text-[0.82rem] font-medium transition-colors"
    >
      <span
        className={
          active ? "text-brand-blue-700" : "text-brand-grey group-hover:text-brand-blue-600"
        }
      >
        {children}
      </span>
      <span
        className={`pointer-events-none absolute inset-x-2.5 -bottom-0.5 h-[2px] origin-center rounded-full bg-brand-blue transition-transform duration-300 ${
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
      />
    </Link>
  );
}

/* ---- Inline icons (no external deps) ---- */
function ChevronDownIcon(p: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className={p.className}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
function ChevronRightIcon(p: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={p.className}>
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}
function MailIcon(p: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={p.className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
function PhoneIcon(p: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={p.className}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}
function SearchIcon(p: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={p.className}>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
function PlusIcon(p: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={p.className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  );
}
function MenuIcon(p: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={p.className}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}
function XIcon(p: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={p.className}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}
export function SocialIcon({ name, className }: { name: string; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    facebook: <path d="M15 3h-3a4 4 0 0 0-4 4v3H5v4h3v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </>
    ),
    linkedin: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 17v-7" />
      </>
    ),
    youtube: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="4" />
        <path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none" />
      </>
    ),
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      {paths[name]}
    </svg>
  );
}
