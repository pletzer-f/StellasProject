"use client";

import { useMemo, useState } from "react";

const week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function WorkoutPlanner() {
  const [intensity, setIntensity] = useState(6);
  const [activeDays, setActiveDays] = useState<string[]>(["Mon", "Tue", "Thu", "Sat"]);

  function toggleDay(day: string) {
    setActiveDays((current) => {
      if (current.includes(day)) {
        return current.filter((item) => item !== day);
      }
      return [...current, day];
    });
  }

  const metrics = useMemo(() => {
    const sessionCount = activeDays.length;
    const load = sessionCount * intensity * 11;
    const recovery = Math.max(100 - intensity * 6 - sessionCount * 5, 28);
    const profile = intensity >= 8 ? "high-output week" : intensity >= 5 ? "balanced week" : "recovery week";

    return { sessionCount, load, recovery, profile };
  }, [activeDays, intensity]);

  return (
    <article className="hero-glass-card ring-glow rounded-[26px] border border-white/14 bg-earth p-5 text-cream sm:p-6">
      <div className="grid gap-5 lg:grid-cols-[1fr_0.58fr]">
        <div className="space-y-4">
          <div>
            <p className="font-heading text-[11px] tracking-[0.2em] uppercase text-sage">
              Planner
            </p>
            <h2 className="font-heading mt-2 text-3xl sm:text-4xl">Build your training week</h2>
            <p className="mt-2 text-sm text-cream/78">
              Toggle training days and set intensity to test realistic load and recovery.
            </p>
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between text-[13px] text-cream/80">
              <span>Intensity</span>
              <strong className="font-heading text-lg text-cream">{intensity}/10</strong>
            </div>
            <input
              type="range"
              min={2}
              max={10}
              value={intensity}
              onChange={(event) => setIntensity(Number(event.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/20 accent-sage"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {week.map((day) => {
              const active = activeDays.includes(day);
              return (
                <button
                  key={day}
                  type="button"
                  onClick={() => toggleDay(day)}
                  className={`cursor-pointer rounded-full px-3 py-1.5 text-[11px] tracking-[0.14em] uppercase transition ${
                    active
                      ? "bg-white text-ink"
                      : "border border-white/20 bg-white/[0.03] text-cream/78 hover:border-white/45"
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-2.5">
          <div className="rounded-xl border border-white/14 bg-white/[0.05] p-3">
            <p className="text-[10px] tracking-[0.14em] uppercase text-sage">sessions</p>
            <p className="font-heading mt-1 text-3xl">{metrics.sessionCount}</p>
          </div>
          <div className="rounded-xl border border-white/14 bg-white/[0.05] p-3">
            <p className="text-[10px] tracking-[0.14em] uppercase text-sage">training load</p>
            <p className="font-heading mt-1 text-3xl">{metrics.load}</p>
          </div>
          <div className="rounded-xl border border-white/14 bg-white/[0.05] p-3">
            <p className="text-[10px] tracking-[0.14em] uppercase text-sage">recovery index</p>
            <p className="font-heading mt-1 text-3xl">{metrics.recovery}%</p>
          </div>
          <div className="rounded-xl border border-white/14 bg-black/25 p-3">
            <p className="text-[10px] tracking-[0.14em] uppercase text-sage">profile</p>
            <p className="font-heading mt-1 text-2xl">{metrics.profile}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
