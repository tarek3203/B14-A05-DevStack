import type { Technology } from "../types/technology"
import TechnologyCard from "./TechnologyCard"
import YourStack from "./YourStack"

interface TechnologySectionProps {
  technologies: Technology[]
  loading: boolean
  stack: Technology[]
  onAddToStack: (technology: Technology) => void
}

export default function TechnologySection({
  technologies,
  loading,
  stack,
  onAddToStack,
}: TechnologySectionProps) {
  return (
    <section id="technologies" className="mx-auto max-w-[1200px] px-4 pb-20">
      <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        Explore the <span className="brand-gradient-text">Technologies</span>
      </h2>
      <p className="mt-2 text-base text-slate-500">
        Pick one technology per category to build your ideal stack.
      </p>

      {loading ? (
        <div className="flex flex-col items-center gap-3 py-20">
          <span className="loading loading-spinner loading-lg text-pink-600" />
          <p className="text-sm text-slate-500">Loading technologies...</p>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 lg:grid-cols-4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-3 xl:grid-cols-3">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                isAdded={stack.some((item) => item.id === technology.id)}
                onAdd={onAddToStack}
              />
            ))}
          </div>

          <aside>
            <YourStack stack={stack} />
          </aside>
        </div>
      )}
    </section>
  )
}
