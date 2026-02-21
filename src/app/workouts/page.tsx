import Image from "next/image";
import Link from "next/link";
import WorkoutPlanner from "@/components/interactive/workout-planner";
import { images, workoutPrograms } from "@/lib/content";

export const metadata = {
  title: "Workouts | Stella Horntvedt",
  description: "Current workout structure from Stella Horntvedt.",
};

export default function WorkoutsPage() {
  return (
    <main className="pb-12 text-cream">
      <section className="section-shell py-10 sm:py-12">
        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="hero-glass-card ring-glow rounded-[24px] border border-white/14 bg-[#0f2422] p-5 sm:p-6">
            <p className="font-heading text-[11px] tracking-[0.2em] uppercase text-sage">Workouts</p>
            <h1 className="font-heading mt-2 text-4xl leading-tight sm:text-5xl">
              This week&apos;s training structure
            </h1>
            <p className="mt-3 max-w-2xl text-base text-cream/82">
              The same setup Stella follows: strength days, zone-2 sessions, and clear progression.
            </p>
          </article>

          <article className="ring-glow relative min-h-[16rem] overflow-hidden rounded-[24px] border border-white/14">
            <Image
              src={images.heroTrain}
              alt="Training reference visual"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
          </article>
        </div>
      </section>

      <section className="section-shell pt-0">
        <WorkoutPlanner />
      </section>

      <section className="section-shell pt-0">
        <div className="grid gap-4 lg:grid-cols-3">
          {workoutPrograms.map((program) => (
            <article
              key={program.title}
              className="hero-glass-card ring-glow overflow-hidden rounded-[22px] border border-white/14 bg-[#102622]"
            >
              <div className="relative h-52">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="space-y-2 p-4">
                <p className="text-[10px] tracking-[0.14em] uppercase text-sage">
                  {program.length} · {program.level}
                </p>
                <h2 className="font-heading text-2xl">{program.title}</h2>
                <p className="text-sm text-cream/80">{program.detail}</p>
              </div>
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
