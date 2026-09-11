import { FaStar } from "react-icons/fa"
import type { Technology } from "../types/technology"

const BADGE_STYLES: Record<string, string> = {
  Popular: "bg-sky-50 text-sky-600",
  Versatile: "bg-emerald-50 text-emerald-700",
  Fast: "bg-orange-50 text-orange-600",
  "SSR / Edge": "bg-purple-50 text-purple-700",
  Standard: "bg-emerald-50 text-emerald-600",
  "Top SQL": "bg-blue-50 text-blue-600",
  Cache: "bg-red-50 text-red-600",
  Ubiquitous: "bg-amber-50 text-amber-600",
  Essential: "bg-sky-50 text-sky-700",
  Robust: "bg-indigo-50 text-indigo-600",
  Modern: "bg-cyan-50 text-cyan-600",
  Containers: "bg-blue-50 text-blue-700",
}

interface TechnologyCardProps {
  technology: Technology
}

export default function TechnologyCard({ technology }: TechnologyCardProps) {
  const { name, category, description, icon, rating, difficulty, badge } =
    technology

  return (
    <article className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <img src={icon} alt={`${name} logo`} className="h-8 w-8 object-contain" />
        <span
          className={`rounded px-2 py-1 text-[11px] font-semibold ${
            BADGE_STYLES[badge] ?? "bg-slate-100 text-slate-600"
          }`}
        >
          {badge}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-bold text-slate-900">{name}</h3>

      <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-600">
        {description}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
        <span className="rounded bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-600">
          {category}
        </span>
        <span className="text-[11px] font-medium text-slate-500">
          {difficulty}
        </span>
        <span className="ml-auto flex items-center gap-1 text-[11px] font-semibold text-slate-700">
          <FaStar className="text-amber-400" />
          {rating}
        </span>
      </div>

      <button
        type="button"
        className="mt-4 w-full rounded-lg bg-ink px-4 py-2.5 text-xs font-medium text-white transition-opacity hover:opacity-90"
      >
        Add to Stack
      </button>
    </article>
  )
}
