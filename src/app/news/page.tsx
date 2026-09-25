"use client";

import { useState } from "react";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Icon from "@/components/ui/Icon";
import PhotoFrame from "@/components/ui/PhotoFrame";
import { news, newsCategories } from "@/data";

export default function NewsPage() {
  const [cat, setCat] = useState("All News");
  const featured = news.find((n) => n.featured)!;
  const list = news.filter((n) =>
    cat === "All News" ? true : n.category === cat,
  );

  return (
    <>
      <PageHero
        title="News & Announcements"
        breadcrumb="News & Announcements"
        subtitle="Stay up to date with the latest from Cochin Oncology Group."
      />

      <section className="section">
        <div className="container-cog grid gap-10 lg:grid-cols-[1fr_300px]">
          {/* Main list */}
          <div>
            {/* Featured */}
            <article className="reveal card mb-8 grid overflow-hidden md:grid-cols-2">
              <PhotoFrame seed={featured.imageSeed} icon="megaphone" className="min-h-56" />
              <div className="flex flex-col justify-center p-7">
                <span className="mb-3 inline-flex w-fit rounded-md bg-brand-blue px-2.5 py-1 text-[0.65rem] font-bold uppercase text-white">
                  Featured
                </span>
                <p className="text-xs font-medium text-brand-grey-light">{featured.date}</p>
                <h2 className="mt-2 text-xl font-bold text-brand-navy">{featured.title}</h2>
                <p className="mt-2 text-sm text-brand-grey">{featured.excerpt}</p>
                <Link href="#" className="btn-blue mt-5 w-fit !py-2.5">
                  Read More <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </div>
            </article>

            <div className="grid gap-6 sm:grid-cols-2">
              {list.map((n) => (
                <article key={n.id} className="reveal card group flex flex-col overflow-hidden">
                  <PhotoFrame seed={n.imageSeed} icon="bell" className="aspect-[16/10]" />
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="rounded-full bg-brand-green-50 px-2 py-0.5 font-medium text-brand-green-700">
                        {n.category}
                      </span>
                      <span className="text-brand-grey-light">{n.date}</span>
                    </div>
                    <h3 className="mt-2 font-semibold leading-snug text-brand-navy group-hover:text-brand-blue-700">
                      {n.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-brand-grey">{n.excerpt}</p>
                    <Link
                      href="#"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue-700 hover:gap-2.5"
                    >
                      Read More <Icon name="arrow" className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="card p-6">
              <h3 className="mb-4 font-semibold text-brand-navy">Categories</h3>
              <ul className="space-y-1">
                {newsCategories.map((c) => (
                  <li key={c}>
                    <button
                      onClick={() => setCat(c)}
                      className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ${
                        cat === c
                          ? "bg-brand-blue-50 font-medium text-brand-blue-700"
                          : "text-brand-grey hover:bg-gray-50"
                      }`}
                    >
                      {c}
                      <Icon name="chevron" className="h-4 w-4" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-brand-blue-600 to-brand-navy p-6 text-white">
              <Icon name="mail" className="h-8 w-8 text-brand-green" />
              <h3 className="mt-3 font-semibold">Subscribe to Newsletter</h3>
              <p className="mt-1 text-sm text-white/80">
                Get the latest news and announcements in your inbox.
              </p>
              <input
                type="email"
                placeholder="Your email address"
                className="mt-4 h-10 w-full rounded-lg px-3 text-sm text-brand-grey outline-none"
              />
              <button className="btn-green mt-3 w-full !rounded-lg">Subscribe</button>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
