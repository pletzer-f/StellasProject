"use client";

import { useMemo, useState } from "react";

type Goal = "maintain" | "lean" | "perform";

const goalLabels: Record<Goal, string> = {
  maintain: "Maintain",
  lean: "Lean Out",
  perform: "Performance",
};

const multipliers: Record<Goal, { protein: number; carbs: number; fats: number }> = {
  maintain: { protein: 1.8, carbs: 2.6, fats: 0.9 },
  lean: { protein: 2.0, carbs: 2.0, fats: 0.8 },
  perform: { protein: 1.9, carbs: 3.2, fats: 1.0 },
};

export default function NutritionCalculator() {
  const [weightKg, setWeightKg] = useState(63);
  const [goal, setGoal] = useState<Goal>("maintain");

  const targets = useMemo(() => {
    const rule = multipliers[goal];
    const protein = Math.round(weightKg * rule.protein);
    const carbs = Math.round(weightKg * rule.carbs);
    const fats = Math.round(weightKg * rule.fats);
    const calories = protein * 4 + carbs * 4 + fats * 9;

    return { protein, carbs, fats, calories };
  }, [goal, weightKg]);

  return (
    <article className="hero-glass-card ring-glow rounded-[26px] border border-white/14 bg-earth p-5 text-cream sm:p-6">
      <div className="grid gap-5 lg:grid-cols-[1fr_0.92fr]">
        <div>
          <p className="font-heading text-[11px] tracking-[0.2em] uppercase text-sage">
            Nutrition Calculator
          </p>
          <h2 className="font-heading mt-2 text-3xl sm:text-4xl">Set daily macro targets</h2>
          <p className="mt-2 max-w-xl text-sm text-cream/78">
            Practical baseline for Stella&apos;s weekly plan. Adjust bodyweight and goal to estimate targets.
          </p>

          <label className="mt-5 block">
            <span className="mb-2 block text-[13px] text-cream/80">Bodyweight (kg)</span>
            <input
              type="range"
              min={45}
              max={95}
              value={weightKg}
              onChange={(event) => setWeightKg(Number(event.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/20 accent-sage"
            />
            <span className="font-heading mt-2 inline-block text-2xl">{weightKg} kg</span>
          </label>

          <div className="mt-4 flex flex-wrap gap-2">
            {(Object.keys(goalLabels) as Goal[]).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setGoal(item)}
                className={`cursor-pointer rounded-full px-3 py-1.5 text-[11px] tracking-[0.14em] uppercase transition ${
                  goal === item
                    ? "bg-white text-ink"
                    : "border border-white/20 bg-white/[0.03] text-cream/78 hover:border-white/45"
                }`}
              >
                {goalLabels[item]}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2.5">
          <div className="rounded-xl border border-white/14 bg-white/[0.05] p-3.5">
            <div className="mb-1 flex items-center justify-between text-[13px]">
              <span className="text-cream/78">Protein</span>
              <strong className="font-heading text-xl">{targets.protein}g</strong>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-white/18">
              <div
                className="h-full rounded-full bg-sage transition-all duration-500"
                style={{ width: `${Math.min((targets.protein / 180) * 100, 100)}%` }}
              />
            </div>
          </div>

          <div className="rounded-xl border border-white/14 bg-white/[0.05] p-3.5">
            <div className="mb-1 flex items-center justify-between text-[13px]">
              <span className="text-cream/78">Carbs</span>
              <strong className="font-heading text-xl">{targets.carbs}g</strong>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-white/18">
              <div
                className="h-full rounded-full bg-olive transition-all duration-500"
                style={{ width: `${Math.min((targets.carbs / 280) * 100, 100)}%` }}
              />
            </div>
          </div>

          <div className="rounded-xl border border-white/14 bg-white/[0.05] p-3.5">
            <div className="mb-1 flex items-center justify-between text-[13px]">
              <span className="text-cream/78">Fats</span>
              <strong className="font-heading text-xl">{targets.fats}g</strong>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-white/18">
              <div
                className="h-full rounded-full bg-sand transition-all duration-500"
                style={{ width: `${Math.min((targets.fats / 110) * 100, 100)}%` }}
              />
            </div>
          </div>

          <div className="rounded-xl border border-white/14 bg-black/24 p-3.5">
            <p className="text-[10px] tracking-[0.14em] uppercase text-sage">Estimated energy</p>
            <p className="font-heading mt-1 text-3xl">{targets.calories} kcal</p>
          </div>
        </div>
      </div>
    </article>
  );
}
