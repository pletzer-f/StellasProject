import Image from "next/image";
import Link from "next/link";
import { socialMoodboard } from "@/lib/content";

export const metadata = {
  title: "Lifestyle | Stella Horntvedt",
  description: "Lifestyle layer of Stella Horntvedt: rituals, visuals, and curated environments.",
};

const rituals = [
  {
    title: "Morning frequency",
    line: "Hydration, daylight, and one mobility sequence before digital noise.",
  },
  {
    title: "Visual discipline",
    line: "Calm environments are part of protocol quality, not decoration.",
  },
  {
    title: "Food aesthetics",
    line: "Meals should be simple, nutrient-dense, and visually intentional.",
  },
];

export default function LifestylePage() {
  const featured = socialMoodboard.slice(3, 9);

  return (
    <main className="pb-14 text-cream">
      <section className="section-shell py-10 sm:py-12">
        <div className="grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
          <article className="hero-glass-card ring-glow rounded-[24px] border border-white/14 bg-[#0f2422] p-5 sm:p-6">
            <p className="font-heading text-[11px] tracking-[0.2em] uppercase text-sage">Lifestyle</p>
            <h1 className="font-heading mt-2 text-4xl leading-tight sm:text-5xl">
              The lifestyle layer behind the protocol
            </h1>
            <p className="mt-3 max-w-2xl text-base text-cream/82">
              Stella&apos;s curation of spaces, visuals, routines, and food context that support long-term
              consistency.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Link
                href="/moodboard"
                className="rounded-full bg-white px-4 py-2 text-[11px] tracking-[0.16em] uppercase text-ink transition hover:bg-white/90"
              >
                See full moodboard
              </Link>
              <Link
                href="/community-moodboard"
                className="rounded-full border border-white/28 px-4 py-2 text-[11px] tracking-[0.16em] uppercase text-white/84 transition hover:border-white/52"
              >
                Community moodboard
              </Link>
            </div>
          </article>

          <article className="ring-glow relative min-h-[17rem] overflow-hidden rounded-[24px] border border-white/14">
            <Image
              src="/moodboard/nature-red-house.jpg"
              alt="Nordic outdoor lifestyle setting"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </article>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="grid gap-4 md:grid-cols-3">
          {rituals.map((item) => (
            <article
              key={item.title}
              className="hero-glass-card ring-glow rounded-[20px] border border-white/14 bg-[#102622] p-4"
            >
              <h2 className="font-heading text-2xl">{item.title}</h2>
              <p className="mt-2 text-sm text-cream/82">{item.line}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="grid gap-3 md:grid-cols-3">
          {featured.map((item) => (
            <figure key={item.id} className="group overflow-hidden rounded-[20px] border border-white/14">
              <div className="relative h-56">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/62 to-transparent" />
                <figcaption className="absolute left-3 right-3 bottom-3">
                  <p className="text-[10px] tracking-[0.14em] uppercase text-sage">{item.tag}</p>
                  <p className="text-lg text-white">{item.title}</p>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </section>

      <section className="section-shell pt-0">
        <article className="hero-glass-card ring-glow rounded-[24px] border border-white/14 bg-[#102622] p-5 sm:p-6">
          <p className="font-heading text-[11px] tracking-[0.2em] uppercase text-sage">Pipeline</p>
          <h2 className="font-heading mt-2 text-3xl sm:text-4xl">Member map is in the pipeline</h2>
          <p className="mt-2 max-w-3xl text-sm text-cream/80">
            We&apos;re preparing a community map to visualize where members are building routines. It will launch
            after moderation and privacy settings are finalized.
          </p>
        </article>
      </section>
    </main>
  );
}
