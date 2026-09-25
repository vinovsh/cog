"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

/** Hides the public header/footer on the admin dashboard (which has its own shell). */
function isBare(pathname: string) {
  return pathname.startsWith("/admin");
}

export function HeaderGate() {
  const pathname = usePathname();
  if (isBare(pathname)) return null;
  return <Header />;
}

export function FooterGate() {
  const pathname = usePathname();
  if (isBare(pathname)) return null;
  return <Footer />;
}
