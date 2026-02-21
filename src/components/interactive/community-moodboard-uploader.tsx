"use client";

import Image from "next/image";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { featuredCommunityPosts } from "@/lib/content";

type UploadEntry = {
  id: string;
  image: string;
  caption: string;
  city: string;
  createdAt: number;
};

const STORAGE_KEY = "stella-community-moodboard-v1";

export default function CommunityMoodboardUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [caption, setCaption] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [uploads, setUploads] = useState<UploadEntry[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        return [];
      }
      return JSON.parse(raw) as UploadEntry[];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(uploads.slice(0, 24)));
  }, [uploads]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    if (!file) {
      setError("Please choose an image first.");
      return;
    }
    if (file.size > 2_500_000) {
      setError("Please upload an image smaller than 2.5 MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result !== "string") {
        setError("Could not read the image. Try a different file.");
        return;
      }
      const item: UploadEntry = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        image: reader.result,
        caption: caption.trim() || "My weekly reset",
        city: city.trim() || "Community",
        createdAt: Date.now(),
      };
      setUploads((current) => [item, ...current].slice(0, 24));
      setFile(null);
      setCaption("");
      setCity("");
      const input = document.getElementById("community-upload-file") as HTMLInputElement | null;
      if (input) {
        input.value = "";
      }
    };
    reader.onerror = () => setError("Could not read this file.");
    reader.readAsDataURL(file);
  }

  const mergedFeed = useMemo(
    () => [
      ...uploads.map((entry) => ({
        id: entry.id,
        image: entry.image,
        caption: entry.caption,
        name: "You",
        city: entry.city,
      })),
      ...featuredCommunityPosts,
    ],
    [uploads],
  );

  return (
    <section className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
      <article className="hero-glass-card ring-glow rounded-[24px] border border-white/14 bg-earth p-5 sm:p-6">
        <p className="font-heading text-[11px] tracking-[0.2em] uppercase text-sage">Contribute</p>
        <h2 className="font-heading mt-2 text-3xl leading-tight sm:text-4xl">Upload your lifestyle frame</h2>
        <p className="mt-2 text-sm text-cream/80">
          Share one image from your weekly routine: training, nutrition, nature or recovery.
        </p>

        <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="community-upload-file" className="mb-1 block text-xs text-cream/80">
              Image
            </label>
            <input
              id="community-upload-file"
              type="file"
              accept="image/*"
              onChange={(event) => setFile(event.target.files?.[0] ?? null)}
              className="w-full rounded-lg border border-white/18 bg-white/[0.06] px-3 py-2 text-sm file:mr-3 file:rounded-md file:border-0 file:bg-white/90 file:px-2 file:py-1 file:text-xs file:text-ink"
            />
          </div>

          <div>
            <label htmlFor="community-upload-caption" className="mb-1 block text-xs text-cream/80">
              Caption
            </label>
            <input
              id="community-upload-caption"
              type="text"
              value={caption}
              onChange={(event) => setCaption(event.target.value)}
              placeholder="Example: Morning walk before work"
              className="w-full rounded-lg border border-white/18 bg-white/[0.06] px-3 py-2 text-sm text-cream placeholder:text-cream/45"
            />
          </div>

          <div>
            <label htmlFor="community-upload-city" className="mb-1 block text-xs text-cream/80">
              City
            </label>
            <input
              id="community-upload-city"
              type="text"
              value={city}
              onChange={(event) => setCity(event.target.value)}
              placeholder="Copenhagen"
              className="w-full rounded-lg border border-white/18 bg-white/[0.06] px-3 py-2 text-sm text-cream placeholder:text-cream/45"
            />
          </div>

          {error ? <p className="text-xs text-sand">{error}</p> : null}

          <button
            type="submit"
            className="rounded-full bg-white px-4 py-2 text-[11px] tracking-[0.14em] uppercase text-ink transition hover:bg-white/92"
          >
            Upload to community board
          </button>
          <p className="text-xs text-cream/62">
            Uploads are stored locally in your browser for now while we prepare shared moderation.
          </p>
        </form>
      </article>

      <article className="hero-glass-card ring-glow rounded-[24px] border border-white/14 bg-olive p-4 sm:p-5">
        <p className="font-heading text-[11px] tracking-[0.2em] uppercase text-sage">Community Moodboard</p>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {mergedFeed.map((item) => (
            <figure key={item.id} className="overflow-hidden rounded-xl border border-white/14 bg-black/20">
              <div className="relative h-28 sm:h-32">
                <Image src={item.image} alt={item.caption} fill sizes="33vw" className="object-cover" />
              </div>
              <figcaption className="space-y-1 p-2">
                <p className="truncate text-[11px] text-cream/90">{item.caption}</p>
                <p className="text-[10px] tracking-[0.12em] uppercase text-sage/90">
                  {item.name} · {item.city}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </article>
    </section>
  );
}
