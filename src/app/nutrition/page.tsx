import Image from "next/image";
import Link from "next/link";
import NutritionCalculator from "@/components/interactive/nutrition-calculator";
import { images } from "@/lib/content";

export const metadata = {
  title: "Nutrition | Stella Horntvedt",
  description: "Current nutrition structure from Stella Horntvedt.",
};

const principles = [
  { title: "Protein first", line: "Build each meal around protein before anything else." },
  { title: "Simple timing", line: "Eat on a repeatable schedule to reduce random choices." },
  { title: "Hydration early", line: "Hydrate before caffeine and before training." },
];

export default function NutritionPage() {
  return (
    <main className="pb-12 text-cream">
      <section className="section-shell py-10 sm:py-12">
        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="hero-glass-card ring-glow rounded-[24px] border border-white/14 bg-earth p-5 sm:p-6">
            <p className="font-heading text-[11px] tracking-[0.2em] uppercase text-sage">Nutrition</p>
            <h1 className="font-heading mt-2 text-4xl leading-tight sm:text-5xl">
              Real food structure, every day
            </h1>
            <p className="mt-3 max-w-2xl text-base text-cream/82">
              Clear macro targets and meal timing that support training, recovery, and stable energy.
            </p>
          </article>

          <article className="ring-glow relative min-h-[16rem] overflow-hidden rounded-[24px] border border-white/14">
            <Image
              src={images.heroFood}
              alt="Nutrition visual"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </article>
        </div>
      </section>

      <section className="section-shell pt-0">
        <NutritionCalculator />
      </section>

      <section className="section-shell pt-0">
        <div className="grid gap-4 md:grid-cols-3">
          {principles.map((item) => (
            <article
              key={item.title}
              className="hero-glass-card ring-glow rounded-[20px] border border-white/14 bg-olive p-4"
            >
              <h2 className="font-heading text-2xl">{item.title}</h2>
              <p className="mt-2 text-sm text-cream/80">{item.line}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="ring-glow relative min-h-[18rem] overflow-hidden rounded-[22px] border border-white/14">
            <Image
              src={images.heroFood}
              alt="Meal visual"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="ring-glow relative min-h-[18rem] overflow-hidden rounded-[22px] border border-white/14">
            <Image
              src={images.smoothie}
              alt="Smoothie visual"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
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
