"use client";

import { useState } from "react";
import { insightDeck, todayInsightIndex } from "@/lib/content";

export default function InsightCarousel() {
  const [index, setIndex] = useState(todayInsightIndex());
  const current = insightDeck[index];

  function step(delta: number) {
    const length = insightDeck.length;
    const next = (index + delta + length) % length;
    setIndex(next);
  }

  return (
    <article className="hero-glass-card ring-glow rounded-[26px] border border-white/14 bg-earth p-5 text-cream sm:p-6">
      <div className="mb-3 flex items-center justify-between">
        <p className="font-heading text-[11px] tracking-[0.2em] uppercase text-sage">Insight Deck</p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => step(-1)}
            className="cursor-pointer rounded-full border border-white/20 px-3 py-1 text-[11px] tracking-[0.14em] uppercase text-cream/78 transition hover:border-white/45"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            className="cursor-pointer rounded-full border border-white/20 px-3 py-1 text-[11px] tracking-[0.14em] uppercase text-cream/78 transition hover:border-white/45"
          >
            Next
          </button>
        </div>
      </div>

      <div key={current.title} className="space-y-4">
        <h2 className="font-heading text-4xl leading-tight sm:text-5xl">{current.title}</h2>
        <p className="max-w-2xl text-base text-cream/82 sm:text-xl">{current.line}</p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-white/16 bg-white/[0.06] p-4">
            <p className="text-[10px] tracking-[0.14em] uppercase text-sage">Action</p>
            <p className="mt-1 text-base">{current.action}</p>
          </div>
          <div className="rounded-xl border border-white/16 bg-white/[0.06] p-4">
            <p className="text-[10px] tracking-[0.14em] uppercase text-sage">Focus</p>
            <p className="mt-1 text-base">{current.tag}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
