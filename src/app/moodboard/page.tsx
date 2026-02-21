import Image from "next/image";
import Link from "next/link";
import { socialMoodboard } from "@/lib/content";

export const metadata = {
  title: "Moodboard | Stella Horntvedt",
  description: "Curated social and lifestyle moodboard from Stella Horntvedt.",
};

export default function MoodboardPage() {
  return (
    <main className="pb-14 text-cream">
      <section className="section-shell py-10 sm:py-12">
        <div className="grid gap-4 lg:grid-cols-[1.02fr_0.98fr]">
          <article className="hero-glass-card ring-glow rounded-[24px] border border-white/14 bg-earth p-5 sm:p-6">
            <p className="font-heading text-[11px] tracking-[0.2em] uppercase text-sage">Social Moodboard</p>
            <h1 className="font-heading mt-2 text-4xl leading-tight sm:text-5xl">
              Stella&apos;s full lifestyle board
            </h1>
            <p className="mt-3 max-w-2xl text-base text-cream/82">
              A visual stream of weekly training, nutrition, recovery, and aesthetic references.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Link
                href="/community-moodboard"
                className="rounded-full bg-white px-4 py-2 text-[11px] tracking-[0.16em] uppercase text-ink transition hover:bg-white/90"
              >
                Open community moodboard
              </Link>
              <Link
                href="/lifestyle"
                className="rounded-full border border-white/30 px-4 py-2 text-[11px] tracking-[0.16em] uppercase text-white/86 transition hover:border-white/52"
              >
                Go to lifestyle page
              </Link>
            </div>
          </article>

          <article className="ring-glow relative min-h-[16rem] overflow-hidden rounded-[24px] border border-white/14">
            <Image
              src="/moodboard/nature-red-house.jpg"
              alt="Nordic lifestyle visual"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
          </article>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {socialMoodboard.map((item, index) => (
            <article
              key={item.id}
              className={`group overflow-hidden rounded-[20px] border border-white/14 ${
                index % 5 === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className={`relative ${index % 5 === 0 ? "h-64 sm:h-72" : "h-52 sm:h-60"}`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/62 to-transparent" />
                <div className="absolute left-3 right-3 bottom-3">
                  <p className="text-[10px] tracking-[0.14em] uppercase text-sage">{item.tag}</p>
                  <p className="text-lg text-white">{item.title}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
