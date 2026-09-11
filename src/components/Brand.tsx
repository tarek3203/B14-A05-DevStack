interface BrandProps {
  size?: "sm" | "md"
}

export default function Brand({ size = "md" }: BrandProps) {
  const box = size === "sm" ? "h-7 w-7 text-[11px]" : "h-8 w-8 text-xs"
  const word = size === "sm" ? "text-base" : "text-xl"

  return (
    <a href="#" className="flex shrink-0 items-center gap-2">
      <span
        className={`brand-gradient grid place-items-center rounded-lg font-extrabold text-white ${box}`}
      >
        DS
      </span>
      <span className={`font-bold tracking-tight text-slate-900 ${word}`}>
        Dev <span className="brand-gradient-text font-extrabold">Stack</span>
      </span>
    </a>
  )
}
