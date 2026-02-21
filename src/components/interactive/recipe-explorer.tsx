"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { recipes } from "@/lib/content";

type Meal = "all" | "breakfast" | "lunch" | "dinner" | "snack";

const filters: Meal[] = ["all", "breakfast", "lunch", "dinner", "snack"];

export default function RecipeExplorer() {
  const [activeFilter, setActiveFilter] = useState<Meal>("all");
  const [expandedId, setExpandedId] = useState<string>(recipes[0].id);

  const visible = useMemo(() => {
    if (activeFilter === "all") {
      return recipes;
    }
    return recipes.filter((recipe) => recipe.meal === activeFilter);
  }, [activeFilter]);

  return (
    <article className="hero-glass-card ring-glow rounded-[26px] border border-white/14 bg-earth p-5 text-cream sm:p-6">
      <div className="mb-4 flex flex-wrap gap-2">
        {filters.map((filter) => {
          const active = activeFilter === filter;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`cursor-pointer rounded-full px-3 py-1.5 text-[11px] tracking-[0.14em] uppercase transition ${
                active
                  ? "bg-white text-ink"
                  : "border border-white/20 bg-white/[0.03] text-cream/78 hover:border-white/45"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {visible.map((recipe) => {
          const expanded = recipe.id === expandedId;
          return (
            <button
              key={recipe.id}
              type="button"
              onClick={() => setExpandedId(recipe.id)}
              className={`group overflow-hidden rounded-[20px] border text-left transition ${
                expanded
                  ? "border-white/35 bg-white/[0.08]"
                  : "border-white/14 bg-white/[0.03] hover:border-white/30"
              }`}
            >
              <div className="relative h-44">
                <Image
                  src={recipe.image}
                  alt={recipe.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                <div className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/30 px-2 py-1 text-[10px] tracking-[0.13em] uppercase text-white/85 backdrop-blur">
                  {recipe.meal}
                </div>
              </div>

              <div className="space-y-2 p-4">
                <div className="flex items-center justify-between text-[11px] tracking-[0.14em] uppercase text-sage">
                  <span>{recipe.time}</span>
                  <span>{recipe.protein} protein</span>
                </div>
                <h3 className="font-heading text-2xl">{recipe.name}</h3>
                <p
                  className={`text-sm text-cream/82 transition-all ${
                    expanded ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  {recipe.ingredients.join(" · ")}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </article>
  );
}
