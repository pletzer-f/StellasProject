import Link from "next/link";
import BrandLogo from "@/components/brand-logo";

export default function SiteFooter() {
  return (
    <footer className="border-t border-ink/12 bg-cream/85">
      <div className="mx-auto grid max-w-6xl gap-4 px-5 py-6 text-sm text-ink/70 md:grid-cols-[1fr_auto] md:items-end">
        <div className="space-y-2">
          <BrandLogo compact />
          <p>Evidence-based longevity, made clear.</p>
        </div>

        <nav className="flex flex-wrap items-center gap-2 text-[11px] tracking-[0.14em] uppercase">
          <Link href="/lifestyle" className="rounded-full border border-ink/18 px-3 py-1.5 hover:border-ink/38">
            Lifestyle
          </Link>
          <Link href="/moodboard" className="rounded-full border border-ink/18 px-3 py-1.5 hover:border-ink/38">
            Full moodboard
          </Link>
          <Link
            href="/community-moodboard"
            className="rounded-full border border-ink/18 px-3 py-1.5 hover:border-ink/38"
          >
            Community moodboard
          </Link>
        </nav>
      </div>
    </footer>
  );
}
