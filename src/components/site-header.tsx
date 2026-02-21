"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandLogo from "@/components/brand-logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/lifestyle", label: "Lifestyle" },
  { href: "/workouts", label: "Workouts" },
  { href: "/nutrition", label: "Nutrition" },
  { href: "/recipes", label: "Recipes" },
  { href: "/insights", label: "Insights" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-ink/12 bg-cream/92 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/">
          <BrandLogo compact />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3 py-1.5 text-xs tracking-[0.16em] uppercase transition ${
                  active ? "bg-ink text-cream" : "text-ink/75 hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/insights"
          className="rounded-full border border-ink/22 px-3 py-1.5 text-[11px] tracking-[0.16em] uppercase transition hover:border-ink/45"
        >
          Daily Insight
        </Link>
      </div>
      <div className="scrollbar-hide border-t border-ink/8 px-3 py-2 md:hidden">
        <nav className="flex gap-2 overflow-x-auto">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`shrink-0 rounded-full px-3 py-1.5 text-[11px] tracking-[0.15em] uppercase ${
                  active ? "bg-ink text-cream" : "bg-white/70 text-ink/80"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
