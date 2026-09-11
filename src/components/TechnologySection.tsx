import type { Technology } from "../types/technology"
import TechnologyCard from "./TechnologyCard"

interface TechnologySectionProps {
  technologies: Technology[]
  loading: boolean
}

export default function TechnologySection({
  technologies,
  loading,
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
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {technologies.map((technology) => (
            <TechnologyCard key={technology.id} technology={technology} />
          ))}
        </div>
      )}
    </section>
  )
}
