import type { Technology } from "../types/technology"

interface YourStackProps {
  stack: Technology[]
}

export default function YourStack({ stack }: YourStackProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 lg:sticky lg:top-20">
      <h3 className="text-base font-bold text-slate-900">Your Stack</h3>
      <p className="mt-1 text-xs text-slate-500">
        {stack.length} Technology Selected
      </p>

      {stack.length === 0 ? (
        <p className="mt-6 text-xs text-slate-400">
          No technologies selected yet.
        </p>
      ) : null}

      <button
        type="button"
        className="mt-6 w-full rounded-lg border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-600 transition-colors hover:bg-red-50"
      >
        Remove All
      </button>
    </div>
  )
}
