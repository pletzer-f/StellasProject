import Image from "next/image";
import Link from "next/link";
import InsightCarousel from "@/components/interactive/insight-carousel";
import { images } from "@/lib/content";

export const metadata = {
  title: "Insights | Stella Horntvedt",
  description: "Daily insights from Stella Horntvedt.",
};

const notes = [
  { label: "Sleep", value: "Keep wake time fixed. Don’t compensate with long weekend sleep." },
  { label: "Training", value: "Zone-2 consistency beats random high-intensity days." },
  { label: "Nutrition", value: "Protein + fiber first makes appetite easier to manage." },
];

export default function InsightsPage() {
  return (
    <main className="pb-12 text-cream">
      <section className="section-shell py-10 sm:py-12">
        <div className="grid gap-4 lg:grid-cols-[1.02fr_0.98fr]">
          <article className="hero-glass-card ring-glow rounded-[24px] border border-white/14 bg-earth p-5 sm:p-6">
            <p className="font-heading text-[11px] tracking-[0.2em] uppercase text-sage">Insights</p>
            <h1 className="font-heading mt-2 text-4xl leading-tight sm:text-5xl">
              One practical signal each day
            </h1>
            <p className="mt-3 max-w-2xl text-base text-cream/82">
              Quick notes from Stella&apos;s own protocol. Clear inputs, no generic motivation.
            </p>
          </article>

          <article className="ring-glow relative min-h-[16rem] overflow-hidden rounded-[24px] border border-white/14">
            <Image
              src={images.yoga}
              alt="Recovery and focus visual"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </article>
        </div>
      </section>

      <section className="section-shell pt-0">
        <InsightCarousel />
      </section>

      <section className="section-shell pt-0">
        <div className="grid gap-4 md:grid-cols-3">
          {notes.map((item) => (
            <article
              key={item.label}
              className="hero-glass-card ring-glow rounded-[20px] border border-white/14 bg-olive p-4"
            >
              <p className="text-[10px] tracking-[0.14em] uppercase text-sage">{item.label}</p>
              <p className="mt-2 text-sm text-cream/82">{item.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="flex flex-wrap gap-2">
          <Link
            href="/community-moodboard"
            className="rounded-full border border-white/28 bg-white/[0.07] px-4 py-2 text-[11px] tracking-[0.16em] uppercase text-white/86 transition hover:border-white/50"
          >
            Community moodboard
          </Link>
          <Link
            href="/moodboard"
            className="rounded-full border border-white/28 bg-white/[0.07] px-4 py-2 text-[11px] tracking-[0.16em] uppercase text-white/86 transition hover:border-white/50"
          >
            Stella moodboard
          </Link>
        </div>
      </section>
    </main>
  );
}
