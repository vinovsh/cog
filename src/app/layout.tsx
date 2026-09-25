import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { HeaderGate, FooterGate } from "@/components/layout/Chrome";
import ScrollReveal from "@/components/ui/ScrollReveal";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Cochin Oncology Group (COG) — Advancing Cancer Care",
    template: "%s | Cochin Oncology Group",
  },
  description:
    "Cochin Oncology Group (COG) is a multidisciplinary academic oncology society based in Kochi, Kerala, advancing cancer care through collaboration, education, and research.",
  keywords: [
    "Cochin Oncology Group",
    "COG",
    "oncology society Kerala",
    "cancer care",
    "medical education",
    "Kochi oncology",
  ],
  openGraph: {
    title: "Cochin Oncology Group (COG)",
    description:
      "Advancing Cancer Care Through Collaboration, Education, and Research.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${poppins.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-white text-[color:var(--color-ink)]">
        {/* Enable scroll-reveal before first paint so JS users get animations
            with no flash; without JS, content stays visible. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('reveal-ready')`,
          }}
        />
        <HeaderGate />
        <main className="flex-1">{children}</main>
        <FooterGate />
        <ScrollReveal />
      </body>
    </html>
  );
}
