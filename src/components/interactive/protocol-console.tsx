"use client";

import { useMemo, useState } from "react";

type Mode = "morning" | "training" | "recovery";

const modes: Record<
  Mode,
  {
    title: string;
    line: string;
    metrics: Array<{ label: string; value: number; unit: string }>;
    steps: string[];
  }
> = {
  morning: {
    title: "Morning Sequence",
    line: "Focus, hydration, and nervous-system alignment before input noise.",
    metrics: [
      { label: "Readiness", value: 86, unit: "%" },
      { label: "Hydration", value: 72, unit: "%" },
      { label: "Mobility", value: 14, unit: "min" },
    ],
    steps: [
      "06:10 Wake + daylight",
      "06:20 Mineral hydration",
      "06:35 14-min mobility flow",
      "06:55 Protein-first breakfast",
    ],
  },
  training: {
    title: "Training Block",
    line: "Low noise execution with progressive load and stable heart-rate control.",
    metrics: [
      { label: "Load", value: 78, unit: "%" },
      { label: "Zone 2", value: 44, unit: "min" },
      { label: "Core", value: 92, unit: "%" },
    ],
    steps: [
      "13:00 Dynamic prep",
      "13:08 Strength sequence",
      "13:42 Zone-2 finish",
      "13:50 Recovery drink",
    ],
  },
  recovery: {
    title: "Recovery Protocol",
    line: "Restore output capacity with calm downregulation and clean nutrition timing.",
    metrics: [
      { label: "Recovery", value: 84, unit: "%" },
      { label: "Sleep Debt", value: 11, unit: "%" },
      { label: "Stress", value: 38, unit: "pts" },
    ],
    steps: [
      "19:00 Light walk",
      "19:45 High-protein dinner",
      "21:10 10-min breathwork",
      "22:20 Sleep window",
    ],
  },
};

type ProtocolConsoleProps = {
  embedded?: boolean;
};

export default function ProtocolConsole({ embedded = false }: ProtocolConsoleProps) {
  const [activeMode, setActiveMode] = useState<Mode>("morning");
  const active = modes[activeMode];

  const bars = useMemo(
    () =>
      active.metrics.map((metric) => ({
        ...metric,
        width: Math.max(8, Math.min(metric.value, 100)),
      })),
    [active.metrics],
  );

  const shellClass = embedded
    ? "overflow-hidden rounded-[20px] border border-white/10 bg-black/12 text-cream"
    : "ring-glow overflow-hidden rounded-[24px] border border-ink/12 bg-earth text-cream";

  return (
    <article className={shellClass}>
      <header className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-5">
        <p className="font-heading text-xs tracking-[0.2em] uppercase text-sage">
          Stella Protocol Console
        </p>
        <div className="flex gap-1.5">
          {(["morning", "training", "recovery"] as Mode[]).map((mode) => {
            const activeButton = mode === activeMode;
            return (
              <button
                key={mode}
                type="button"
                onClick={() => setActiveMode(mode)}
                className={`cursor-pointer rounded-full px-2.5 py-1 text-[10px] tracking-[0.15em] uppercase transition ${
                  activeButton
                    ? "bg-cream text-ink"
                    : "border border-white/15 text-cream/74 hover:border-white/35"
                }`}
              >
                {mode}
              </button>
            );
          })}
        </div>
      </header>

      <div className="grid gap-4 p-4 sm:grid-cols-[1.12fr_0.88fr] sm:p-5">
        <div>
          <h3 className="font-heading text-3xl leading-tight">{active.title}</h3>
          <p className="mt-2 text-[0.98rem] leading-relaxed text-cream/80">{active.line}</p>

          <div className="mt-4 space-y-2.5">
            {bars.map((bar) => (
              <div key={bar.label}>
                <div className="mb-1 flex items-center justify-between text-xs text-cream/72">
                  <span>{bar.label}</span>
                  <strong className="font-heading text-base text-cream">
                    {bar.value}
                    {bar.unit}
                  </strong>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/12">
                  <div
                    className="h-full rounded-full bg-sage transition-all duration-500"
                    style={{ width: `${bar.width}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/12 bg-black/15 p-3.5">
          <p className="font-heading text-[10px] tracking-[0.17em] uppercase text-sage/90">
            Timeline
          </p>
          <div className="mt-2.5 space-y-1.5 text-[12px] text-cream/78">
            {active.steps.map((step) => (
              <p key={step} className="rounded-lg bg-white/[0.05] px-2 py-1">
                {step}
              </p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
