import Link from "next/link";
import CommunityMoodboardUploader from "@/components/interactive/community-moodboard-uploader";

export const metadata = {
  title: "Community Moodboard | Stella Horntvedt",
  description: "Upload and share weekly lifestyle frames with the Stella community.",
};

export default function CommunityMoodboardPage() {
  return (
    <main className="pb-14 text-cream">
      <section className="section-shell py-10 sm:py-12">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
          <div>
            <p className="font-heading text-[11px] tracking-[0.2em] uppercase text-sage">Community</p>
            <h1 className="font-heading mt-1 text-4xl leading-tight sm:text-5xl">Community moodboard</h1>
            <p className="mt-2 max-w-3xl text-base text-cream/80">
              Members can post their own weekly lifestyle snapshots to build a shared visual culture.
            </p>
          </div>
          <Link
            href="/moodboard"
            className="rounded-full border border-white/26 bg-white/[0.07] px-4 py-2 text-[11px] tracking-[0.16em] uppercase text-white/86 transition hover:border-white/45"
          >
            See Stella&apos;s full moodboard
          </Link>
        </div>
        <CommunityMoodboardUploader />
      </section>
    </main>
  );
}
