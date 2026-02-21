"use client";

import { useEffect, useMemo, useState } from "react";
import { communityTickerStats, communityTickerTape } from "@/lib/content";

export default function LiveCommunityTicker() {
  const [counts, setCounts] = useState<number[]>(communityTickerStats.map(() => 0));

  useEffect(() => {
    let frameId = 0;
    let start = 0;
    const duration = 1400;

    function animate(timestamp: number) {
      if (!start) {
        start = timestamp;
      }
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCounts(communityTickerStats.map((stat) => Math.round(stat.value * eased)));
      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    }

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const tape = useMemo(
    () =>
      [...communityTickerTape, ...communityTickerTape].map((item, index) => (
        <span key={`${item}-${index}`} className="mx-3 inline-flex items-center gap-3 whitespace-nowrap">
          <span className="h-1.5 w-1.5 rounded-full bg-sage" />
          <span>{item}</span>
        </span>
      )),
    [],
  );

  return (
    <section className="border-y border-white/12 bg-[#0b211f] text-cream">
      <div className="section-shell py-4">
        <div className="grid gap-3 lg:grid-cols-[0.44fr_0.56fr] lg:items-center">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {communityTickerStats.map((stat, index) => (
              <article key={stat.label} className="rounded-xl border border-white/16 bg-white/[0.04] px-3 py-2">
                <p className="text-[10px] tracking-[0.14em] uppercase text-sage/90">{stat.label}</p>
                <p className="font-heading mt-1 text-xl sm:text-2xl">
                  {counts[index].toLocaleString()}
                  {stat.label === "countries" ? "" : "+"}
                </p>
              </article>
            ))}
          </div>

          <div className="marquee overflow-hidden rounded-xl border border-white/12 bg-black/20 py-2 text-[12px] text-cream/82">
            <div className="marquee-track">{tape}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
