import Image from "next/image";
import Link from "next/link";
import HeroPersonal from "@/components/interactive/hero-personal";
import LiveCommunityTicker from "@/components/interactive/live-community-ticker";
import PillarSwitch from "@/components/interactive/pillar-switch";
import { images, insightDeck, socialMoodboard, todayInsightIndex } from "@/lib/content";

const modules = [
  {
    href: "/workouts",
    title: "Workout plans",
    note: "Strength, cardio and progression by week",
    image: images.heroTrain,
    accent: "Training",
  },
  {
    href: "/nutrition",
    title: "Nutrition plans",
    note: "Daily targets, timing and recovery meals",
    image: images.heroFood,
    accent: "Nutrition",
  },
  {
    href: "/recipes",
    title: "Recipe library",
    note: "Simple meals Stella actually repeats",
    image: images.smoothie,
    accent: "Recipes",
  },
  {
    href: "/insights",
    title: "Daily insights",
    note: "Practical notes from science to routine",
    image: images.heroNature,
    accent: "Insights",
  },
] as const;

export default function HomePage() {
  const insightIndex = todayInsightIndex();
  const insight = insightDeck[insightIndex];
  const moodboardPreview = socialMoodboard.slice(0, 6);
  const upcomingInsights = insightDeck
    .map((entry, index) => ({ entry, index }))
    .filter(({ index }) => index !== insightIndex)
    .slice(0, 3);

  return (
    <main className="pb-16">
      <HeroPersonal insight={insight} />
      <LiveCommunityTicker />

      <section className="section-shell py-12 sm:py-14">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <article>
            <p className="font-heading text-[11px] tracking-[0.2em] uppercase text-ink/62">
              Stella Method
            </p>
            <h2 className="font-heading mt-2 max-w-3xl text-4xl leading-tight sm:text-5xl">
              A real health website, built around how Stella lives week to week.
            </h2>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed text-ink/72">
              No noise and no hype. You can move from training, to nutrition, to recipes in seconds and
              understand exactly what to do today.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Link
                href="/workouts"
                className="rounded-full bg-ink px-4 py-2 text-[11px] tracking-[0.16em] uppercase text-cream transition hover:bg-ink/92"
              >
                Start with workouts
              </Link>
              <Link
                href="/nutrition"
                className="rounded-full border border-ink/24 bg-white/72 px-4 py-2 text-[11px] tracking-[0.16em] uppercase text-ink transition hover:border-ink/42"
              >
                Open nutrition plan
              </Link>
              <Link
                href="/recipes"
                className="rounded-full border border-ink/24 bg-white/72 px-4 py-2 text-[11px] tracking-[0.16em] uppercase text-ink transition hover:border-ink/42"
              >
                Browse recipes
              </Link>
            </div>
          </article>

          <article className="panel ring-glow overflow-hidden rounded-[30px] border border-ink/12">
            <div className="relative h-[19rem]">
              <Image
                src={images.garden}
                alt="Nature and longevity lifestyle"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/48 via-black/12 to-transparent" />
              <div className="absolute left-4 right-4 bottom-4 rounded-2xl border border-white/25 bg-black/35 p-3 text-white backdrop-blur">
                <p className="text-[10px] tracking-[0.15em] uppercase text-sage">Lifestyle context</p>
                <p className="font-heading mt-1 text-2xl">Longevity has to fit real life.</p>
                <p className="mt-1 text-sm text-white/84">
                  Training, food and recovery are integrated, not isolated.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section-shell py-0">
        <PillarSwitch />
      </section>

      <section className="section-shell py-12 sm:py-14">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-heading text-[11px] tracking-[0.2em] uppercase text-ink/62">Explore</p>
            <h2 className="font-heading mt-1 text-4xl leading-tight sm:text-5xl">Navigate by what you need</h2>
          </div>
          <p className="max-w-xl text-base text-ink/70">
            Each section has practical tools and clear structure. Start anywhere and keep your week coherent.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {modules.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative min-h-[18rem] overflow-hidden rounded-[26px] border border-ink/12"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-black/26 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(206,208,186,0.24),transparent_44%)] opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="absolute left-4 right-4 bottom-4">
                <p className="text-[10px] tracking-[0.15em] uppercase text-sage">{item.accent}</p>
                <h3 className="font-heading mt-1 text-3xl leading-tight text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-white/84">{item.note}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-shell pt-0 pb-12 sm:pb-16">
        <div className="ring-glow relative overflow-hidden rounded-[30px] border border-white/14 bg-[#0d2624] text-cream">
          <div className="hero-grid-overlay absolute inset-0 opacity-20" aria-hidden="true" />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(206,208,186,0.24),transparent_46%)]"
            aria-hidden="true"
          />
          <div className="relative grid gap-6 p-5 sm:p-7 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="font-heading text-[11px] tracking-[0.2em] uppercase text-sage">Insight of the day</p>
              <h2 className="font-heading mt-2 text-4xl leading-tight sm:text-5xl">{insight.title}</h2>
              <p className="mt-3 max-w-2xl text-lg text-cream/82">{insight.line}</p>
              <div className="mt-5 rounded-2xl border border-white/14 bg-white/[0.05] p-4">
                <p className="text-[10px] tracking-[0.15em] uppercase text-sage">Try this today</p>
                <p className="mt-1 text-lg text-cream">{insight.action}</p>
              </div>
              <Link
                href="/insights"
                className="mt-4 inline-flex rounded-full border border-white/30 bg-white/[0.07] px-4 py-2 text-[11px] tracking-[0.15em] uppercase text-white/86 transition hover:border-white/50"
              >
                Open full insight library
              </Link>
            </div>

            <div className="grid gap-2 self-end">
              {upcomingInsights.map(({ entry }) => (
                <div
                  key={entry.title}
                  className="rounded-xl border border-white/14 bg-black/20 p-3 transition hover:border-white/30"
                >
                  <p className="text-[10px] tracking-[0.15em] uppercase text-sage">{entry.tag}</p>
                  <p className="font-heading mt-1 text-2xl leading-tight">{entry.title}</p>
                  <p className="mt-1 text-sm text-cream/75">{entry.action}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pt-0 pb-12 sm:pb-16">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="font-heading text-[11px] tracking-[0.2em] uppercase text-ink/62">Social moodboard</p>
            <h2 className="font-heading mt-1 text-3xl sm:text-4xl">Lifestyle notes from Stella&apos;s week</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/moodboard"
              className="rounded-full bg-ink px-4 py-2 text-[11px] tracking-[0.16em] uppercase text-cream transition hover:bg-ink/92"
            >
              See full moodboard
            </Link>
            <Link
              href="/community-moodboard"
              className="rounded-full border border-ink/24 bg-white/72 px-4 py-2 text-[11px] tracking-[0.16em] uppercase text-ink transition hover:border-ink/42"
            >
              Community uploads
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {moodboardPreview.map((item) => (
            <figure key={item.id} className="group relative overflow-hidden rounded-[22px] border border-ink/12">
              <div className="relative h-[12rem] sm:h-[14rem]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-3 py-2 text-white">
                <p className="text-[10px] tracking-[0.12em] uppercase text-sage">{item.tag}</p>
                <p className="text-sm">{item.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
