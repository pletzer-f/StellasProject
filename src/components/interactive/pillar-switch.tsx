"use client";

import Image from "next/image";
import { useState } from "react";
import { homePillars } from "@/lib/content";

export default function PillarSwitch() {
  const [active, setActive] = useState(0);
  const item = homePillars[active];

  return (
    <article className="panel ring-glow grid gap-6 rounded-[30px] border border-ink/12 p-5 sm:p-6 lg:grid-cols-[0.44fr_0.56fr]">
      <div className="space-y-3">
        <p className="font-heading text-xs tracking-[0.22em] uppercase text-ink/60">
          Core Pillars
        </p>
        <div className="flex gap-2">
          {homePillars.map((pillar, index) => {
            const isActive = index === active;
            return (
              <button
                key={pillar.key}
                type="button"
                onClick={() => setActive(index)}
                className={`cursor-pointer rounded-full px-3 py-1.5 text-xs tracking-[0.15em] uppercase transition ${
                  isActive
                    ? "bg-ink text-cream"
                    : "border border-ink/20 text-ink/75 hover:border-ink/40"
                }`}
              >
                {pillar.label}
              </button>
            );
          })}
        </div>
        <h3 className="font-heading text-3xl leading-tight">{item.title}</h3>
        <p className="text-lg leading-relaxed text-ink/80">{item.statement}</p>
        <div className="rounded-2xl border border-ink/12 bg-white/70 px-4 py-3">
          <p className="text-xs tracking-[0.18em] uppercase text-ink/55">
            {item.metricLabel}
          </p>
          <p className="font-heading mt-1 text-2xl">{item.metricValue}</p>
        </div>
      </div>

      <div className="relative min-h-[19rem] overflow-hidden rounded-[24px] border border-ink/12 bg-sage/20">
        <Image
          key={item.key}
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 1024px) 100vw, 48vw"
          className="object-cover duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/55 to-transparent" />
      </div>
    </article>
  );
}
