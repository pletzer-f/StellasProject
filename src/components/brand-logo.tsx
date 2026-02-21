type BrandLogoProps = {
  tone?: "dark" | "light";
  showWordmark?: boolean;
  compact?: boolean;
};

export default function BrandLogo({
  tone = "dark",
  showWordmark = true,
  compact = false,
}: BrandLogoProps) {
  const isLight = tone === "light";
  const borderTone = isLight ? "border-white/45" : "border-ink/28";
  const ringTone = isLight ? "border-white/25" : "border-ink/20";
  const textTone = isLight ? "text-white" : "text-ink";
  const subTone = isLight ? "text-white/66" : "text-ink/60";

  return (
    <div className="flex items-center gap-2.5">
      <span
        className={`relative grid h-9 w-9 place-items-center rounded-full border ${borderTone} bg-white/10 backdrop-blur`}
        aria-hidden="true"
      >
        <span className={`absolute inset-1 rounded-full border ${ringTone}`} />
        <span className={`font-heading relative text-[11px] tracking-[0.2em] ${textTone}`}>
          SH
        </span>
        <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-sage" />
      </span>
      {showWordmark ? (
        <div className="leading-none">
          <p
            className={`font-heading ${compact ? "text-xs tracking-[0.16em]" : "text-sm tracking-[0.14em]"} uppercase ${textTone}`}
          >
            Stella Horntvedt
          </p>
          {!compact ? (
            <p className={`text-[10px] tracking-[0.16em] uppercase ${subTone}`}>Longevity Studio</p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
