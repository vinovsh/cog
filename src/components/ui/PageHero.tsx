import Link from "next/link";
import HeroParticles from "@/components/home/HeroParticles";
import { stagger } from "@/lib/reveal";

/** Consistent inner-page banner with title + breadcrumb, used on all sub-pages. */
export default function PageHero({
  title,
  subtitle,
  breadcrumb,
}: {
  title: string;
  subtitle?: string;
  breadcrumb: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue-50 via-white to-brand-green-50">
      <div className="medical-dots absolute inset-0 opacity-70" aria-hidden />
      <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-blue/10 blur-3xl" aria-hidden />
      <div className="absolute -bottom-20 left-1/3 h-64 w-64 rounded-full bg-brand-green/10 blur-3xl" aria-hidden />
      <HeroParticles />
      <div className="container-cog relative py-14 sm:py-16">
        <h1 className="reveal text-3xl font-bold text-brand-navy sm:text-4xl">{title}</h1>
        {subtitle && (
          <p style={stagger(1)} className="reveal mt-3 max-w-2xl text-brand-grey-light">{subtitle}</p>
        )}
        <nav style={stagger(2)} className="reveal mt-4 flex items-center gap-2 text-sm text-brand-grey-light">
          <Link href="/" className="hover:text-brand-blue-600">
            Home
          </Link>
          <span>/</span>
          <span className="font-medium text-brand-blue-700">{breadcrumb}</span>
        </nav>
      </div>
    </section>
  );
}
