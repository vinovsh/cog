import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { stagger } from "@/lib/reveal";

export const metadata: Metadata = { title: "Member Login" };

export default function LoginPage() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue-50 via-white to-brand-green-50">
      <div className="medical-dots absolute inset-0 opacity-60" aria-hidden />
      <div className="container-cog relative grid min-h-[70vh] items-center gap-10 py-16 lg:grid-cols-2">
        {/* Illustration side */}
        <div className="reveal reveal-left hidden lg:block">
          <div className="relative mx-auto flex h-80 w-80 items-center justify-center rounded-full bg-white/60 shadow-inner">
            <div className="absolute inset-6 animate-[spin_40s_linear_infinite] rounded-full border-4 border-dashed border-brand-blue/20" />
            <Icon name="lock" className="cog-float h-24 w-24 text-brand-blue-600" />
          </div>
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-bold text-brand-navy">Member Portal</h2>
            <p className="mt-2 text-brand-grey">
              Access exclusive resources, event registrations and your membership
              certificate.
            </p>
          </div>
        </div>

        {/* Form card */}
        <div style={stagger(1, 150)} className="reveal reveal-right mx-auto w-full max-w-md rounded-3xl bg-white p-8 shadow-xl sm:p-10">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-brand-navy">Welcome Back!</h1>
            <p className="mt-1 text-sm text-brand-grey">Log in to access the member portal.</p>
          </div>

          <form className="mt-8 space-y-5">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-brand-navy">Email Address</label>
              <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 focus-within:border-brand-blue focus-within:ring-2 focus-within:ring-brand-blue-100">
                <Icon name="mail" className="h-4 w-4 text-brand-grey-light" />
                <input type="email" placeholder="you@example.com" className="w-full py-3 text-sm outline-none" />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-brand-navy">Password</label>
              <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 focus-within:border-brand-blue focus-within:ring-2 focus-within:ring-brand-blue-100">
                <Icon name="lock" className="h-4 w-4 text-brand-grey-light" />
                <input type="password" placeholder="••••••••" className="w-full py-3 text-sm outline-none" />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-brand-grey">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-300 accent-brand-blue" />
                Remember Me
              </label>
              <Link href="#" className="font-medium text-brand-blue-700 hover:underline">
                Forgot Password?
              </Link>
            </div>

            <Link href="/admin" className="btn-blue w-full">
              Login <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </form>

          <p className="mt-6 text-center text-sm text-brand-grey">
            Don&apos;t have an account?{" "}
            <Link href="/membership" className="font-semibold text-brand-blue-700 hover:underline">
              Apply for Membership
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
