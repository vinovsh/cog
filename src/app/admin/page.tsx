"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/layout/Logo";
import Icon, { type IconName } from "@/components/ui/Icon";
import Avatar from "@/components/ui/Avatar";
import CountUp from "@/components/ui/CountUp";
import {
  adminStats,
  upcomingEvents,
  recentMembers,
  recentActivities,
} from "@/data";
import { stagger } from "@/lib/reveal";

const nav: { label: string; icon: IconName; active?: boolean }[] = [
  { label: "Dashboard", icon: "dashboard", active: true },
  { label: "Members", icon: "users" },
  { label: "Events", icon: "calendar" },
  { label: "News & Announcements", icon: "megaphone" },
  { label: "Gallery", icon: "image" },
  { label: "Publications", icon: "book" },
  { label: "Downloads", icon: "download" },
  { label: "Newsletter", icon: "mail" },
  { label: "Contact Messages", icon: "document" },
  { label: "Settings", icon: "settings" },
];

const accentMap: Record<string, string> = {
  green: "bg-brand-green-50 text-brand-green-700",
  blue: "bg-brand-blue-50 text-brand-blue-700",
  purple: "bg-purple-50 text-purple-600",
  orange: "bg-orange-50 text-orange-600",
};

export default function AdminDashboard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 shrink-0 bg-brand-navy text-white/80 transition-transform lg:static lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center border-b border-white/10 bg-white px-6">
          <Logo />
        </div>
        <nav className="space-y-1 p-4">
          {nav.map((n) => (
            <button
              key={n.label}
              className={`flex w-full items-center gap-3 rounded-lg px-4 py-2.5 text-sm transition-colors ${
                n.active
                  ? "bg-brand-blue text-white"
                  : "hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon name={n.icon} className="h-5 w-5" />
              {n.label}
            </button>
          ))}
          <Link
            href="/"
            className="mt-4 flex w-full items-center gap-3 rounded-lg px-4 py-2.5 text-sm text-white/70 hover:bg-white/10 hover:text-white"
          >
            <Icon name="logout" className="h-5 w-5" />
            Logout
          </Link>
        </nav>
      </aside>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
          aria-hidden
        />
      )}

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Topbar */}
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-gray-100 bg-white px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 lg:hidden"
              aria-label="Toggle sidebar"
            >
              <Icon name="dashboard" className="h-5 w-5 text-brand-grey" />
            </button>
            <h1 className="text-lg font-bold text-brand-navy">Dashboard Overview</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-brand-grey">
              <Icon name="bell" className="h-5 w-5" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-brand-green" />
            </button>
            <div className="flex items-center gap-2">
              <Avatar seed="Admin" className="h-9 w-9 text-xs" />
              <span className="hidden text-sm font-medium text-brand-navy sm:block">Admin User</span>
            </div>
          </div>
        </header>

        <main className="flex-1 space-y-6 p-4 sm:p-6">
          {/* Stat cards */}
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {adminStats.map((s, i) => (
              <div
                key={s.label}
                style={stagger(i, 90)}
                className="reveal flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${accentMap[s.accent]}`}>
                  <Icon name={s.icon} className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-2xl font-bold text-brand-navy">
                    <CountUp value={s.value} duration={1500} delay={i * 90} />
                  </p>
                  <p className="text-sm text-brand-grey-light">{s.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Upcoming events */}
            <div style={stagger(2, 150)} className="reveal lg:col-span-2 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="font-bold text-brand-navy">Upcoming Events</h2>
                <button className="text-sm font-medium text-brand-blue-700">View All Events</button>
              </div>
              <div className="space-y-3">
                {upcomingEvents.map((e) => (
                  <div key={e.id} className="flex items-center gap-4 rounded-xl bg-gray-50 p-3">
                    <div className={`flex h-12 w-12 flex-col items-center justify-center rounded-lg text-white ${e.accent === "green" ? "bg-brand-green" : "bg-brand-blue"}`}>
                      <span className="text-[0.6rem] font-semibold uppercase">{e.month}</span>
                      <span className="text-lg font-bold leading-none">{e.day}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-brand-navy">{e.title}</p>
                      <p className="text-xs text-brand-grey-light">{e.dateLabel} · {e.venue}</p>
                    </div>
                    <button className="rounded-lg p-2 text-brand-grey-light hover:bg-white">
                      <Icon name="chevron" className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent members */}
            <div style={stagger(3, 150)} className="reveal rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h2 className="mb-4 font-bold text-brand-navy">Recent Members</h2>
              <div className="space-y-4">
                {recentMembers.map((m) => (
                  <div key={m.name} className="flex items-center gap-3">
                    <Avatar seed={m.seed} className="h-10 w-10 text-xs" />
                    <div>
                      <p className="text-sm font-semibold text-brand-navy">{m.name}</p>
                      <p className="text-xs text-brand-grey-light">{m.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent activities */}
          <div className="reveal rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-4 font-bold text-brand-navy">Recent Activities</h2>
            <ul className="space-y-4">
              {recentActivities.map((a, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-blue-50 text-brand-blue-700">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm text-brand-navy">{a.text}</p>
                    <p className="text-xs text-brand-grey-light">{a.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
