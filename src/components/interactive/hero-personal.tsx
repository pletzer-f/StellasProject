"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import BrandLogo from "@/components/brand-logo";
import { images } from "@/lib/content";

type Insight = {
  title: string;
  line: string;
  action: string;
};

type Mode = "training" | "nutrition" | "recovery";

export default function HeroPersonal({ insight }: { insight: Insight }) {
  const [mode, setMode] = useState<Mode>("training");
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, active: false });

  const modeData = useMemo(() => {
    return {
      training: {
        title: "Current training plan",
        line: "This week: 3 strength sessions + 2 zone-2 sessions.",
        stats: [
          { label: "Strength", value: "3 sessions" },
          { label: "Zone-2", value: "2 sessions" },
          { label: "Session length", value: "45 min" },
        ],
        checklist: [
          "Mon · Lower body + core",
          "Tue · Zone-2 run",
          "Thu · Upper body + core",
          "Fri · Zone-2 bike",
          "Sat · Full-body strength",
        ],
      },
      nutrition: {
        title: "Current nutrition plan",
        line: "Protein-first meals with fixed meal timing and hydration targets.",
        stats: [
          { label: "Protein", value: "112 g/day" },
          { label: "Hydration", value: "2.7 L/day" },
          { label: "Eating window", value: "10 hours" },
        ],
        checklist: [
          "Breakfast: eggs + yogurt + fruit",
          "Lunch: fish/chicken + greens",
          "Dinner: protein + vegetables",
          "No random snacking",
          "Hydration before caffeine",
        ],
      },
      recovery: {
        title: "Current recovery plan",
        line: "Sleep consistency and daily downregulation to keep output stable.",
        stats: [
          { label: "Sleep", value: "8 h target" },
          { label: "Breathwork", value: "10 min" },
          { label: "Walk", value: "20 min PM" },
        ],
        checklist: [
          "No late high-sugar meals",
          "Evening walk after dinner",
          "Breathwork before sleep",
          "Phone off before bed",
          "Same wake time daily",
        ],
      },
    }[mode];
  }, [mode]);

  return (
    <section
      className="relative overflow-hidden bg-cream text-ink"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setSpotlight({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
          active: true,
        });
      }}
      onMouseLeave={() => setSpotlight((current) => ({ ...current, active: false }))}
    >
      <Image
        src={images.natureAlt}
        alt=""
        fill
        priority
        sizes="100vw"
        className="hero-sketch-image object-cover opacity-28 mix-blend-multiply"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(125deg,rgba(246,242,240,0.82)_0%,rgba(206,208,186,0.34)_100%)]"
        aria-hidden="true"
      />
      <div
        className={`hero-spotlight absolute h-[20rem] w-[20rem] ${spotlight.active ? "opacity-100" : "opacity-0"}`}
        style={{
          left: `${spotlight.x}px`,
          top: `${spotlight.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="section-shell relative z-10 grid min-h-[calc(100vh-4rem)] gap-5 py-8 md:grid-cols-[0.8fr_1.2fr] md:items-stretch">
        <aside className="flex h-full flex-col gap-4">
          <article className="hero-solid-card ring-glow rounded-2xl border border-earth/28 p-5">
            <BrandLogo />
            <h1 className="font-heading mt-3 text-4xl leading-[0.95] sm:text-5xl">
              Stella Horntvedt
            </h1>
            <p className="mt-3 text-base leading-relaxed text-ink/82">
              A real plan, not a mood board. This is what I&apos;m following right now.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                href="/workouts"
                className="rounded-full bg-earth px-4 py-2 text-[10px] tracking-[0.16em] uppercase text-cream transition hover:bg-earth/92"
              >
                View full modules
              </Link>
              <Link
                href="/insights"
                className="rounded-full border border-earth/30 px-4 py-2 text-[10px] tracking-[0.16em] uppercase text-earth transition hover:border-earth/55"
              >
                Daily insight
              </Link>
            </div>
          </article>

          <article className="ring-glow relative min-h-[15rem] overflow-hidden rounded-2xl border border-earth/28">
            <Image
              src={images.heroTrain}
              alt="Stella in training"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 30vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
            <div className="absolute left-3 right-3 bottom-3 rounded-xl border border-white/16 bg-black/35 px-3 py-2 text-xs text-white/82 backdrop-blur">
              Tuesday session clip · actual training week
            </div>
          </article>

          <article className="hero-solid-card ring-glow rounded-2xl border border-earth/28 p-3">
            <p className="text-[10px] tracking-[0.16em] uppercase text-earth/80">today&apos;s insight</p>
            <p className="mt-1 text-sm text-ink/86">{insight.title}</p>
          </article>
        </aside>

        <article className="hero-solid-card ring-glow flex h-full min-h-[30rem] flex-col rounded-2xl border border-earth/28 p-4 sm:p-5">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="font-heading text-[13px] tracking-[0.2em] uppercase text-earth/82">
                Stella Live
              </p>
              <p className="text-[13px] text-ink/78">
                Stella&apos;s current training and nutrition plan
              </p>
            </div>
            <p className="rounded-full border border-earth/24 bg-cream/55 px-2.5 py-1 text-[12px] tracking-[0.14em] uppercase text-earth/84">
              updated today
            </p>
          </div>

          <div className="mb-4 flex flex-wrap gap-1.5">
            {(["training", "nutrition", "recovery"] as const).map((entry) => {
              const active = mode === entry;
              return (
                <button
                  key={entry}
                  type="button"
                  onClick={() => setMode(entry)}
                  className={`cursor-pointer rounded-full px-3 py-1.5 text-[11px] tracking-[0.14em] uppercase transition ${
                    active
                      ? "bg-earth text-cream"
                      : "border border-earth/24 text-earth/78 hover:border-earth/50"
                  }`}
                >
                  {entry}
                </button>
              );
            })}
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl">{modeData.title}</h2>
          <p className="mt-2 text-sm text-ink/80 sm:text-base">{modeData.line}</p>

          <div className="mt-4 grid gap-2 sm:grid-cols-3">
            {modeData.stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-earth/24 bg-cream/45 p-3">
                <p className="text-[11px] tracking-[0.14em] uppercase text-earth/78">{stat.label}</p>
                <p className="font-heading mt-1 text-xl">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 flex-1 rounded-xl border border-earth/24 bg-cream/38 p-3">
            <p className="mb-2 text-[11px] tracking-[0.16em] uppercase text-earth/78">this week</p>
            <div className="grid gap-1.5 sm:grid-cols-2">
              {modeData.checklist.map((item) => (
                <p
                  key={item}
                  className="rounded-lg border border-earth/22 bg-cream/55 px-2 py-1.5 text-[13px] text-ink/86"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
