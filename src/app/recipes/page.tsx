import Image from "next/image";
import Link from "next/link";
import RecipeExplorer from "@/components/interactive/recipe-explorer";
import { images } from "@/lib/content";

export const metadata = {
  title: "Recipes | Stella Horntvedt",
  description: "Recipe structure from Stella Horntvedt.",
};

export default function RecipesPage() {
  return (
    <main className="pb-12 text-cream">
      <section className="section-shell py-10 sm:py-12">
        <div className="grid gap-4 lg:grid-cols-[1.02fr_0.98fr]">
          <article className="hero-glass-card ring-glow rounded-[24px] border border-white/14 bg-earth p-5 sm:p-6">
            <p className="font-heading text-[11px] tracking-[0.2em] uppercase text-sage">Recipes</p>
            <h1 className="font-heading mt-2 text-4xl leading-tight sm:text-5xl">
              What Stella actually cooks
            </h1>
            <p className="mt-3 max-w-2xl text-base text-cream/82">
              Simple recipes that fit the training week: high protein, practical prep, no over-complication.
            </p>
          </article>

          <article className="ring-glow relative min-h-[16rem] overflow-hidden rounded-[24px] border border-white/14">
            <Image
              src={images.heroFood}
              alt="Recipe visual"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </article>
        </div>
      </section>

      <section className="section-shell pt-0">
        <RecipeExplorer />
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
