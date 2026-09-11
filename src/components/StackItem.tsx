import type { Technology } from "../types/technology"

interface StackItemProps {
  technology: Technology
}

export default function StackItem({ technology }: StackItemProps) {
  return (
    <li className="flex items-center gap-3 rounded-lg border border-slate-200 p-3">
      <img
        src={technology.icon}
        alt={`${technology.name} logo`}
        className="h-7 w-7 shrink-0 object-contain"
      />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-bold text-slate-900">
          {technology.name}
        </p>
        <p className="text-[11px] text-slate-500">{technology.category}</p>
      </div>
    </li>
  )
}
