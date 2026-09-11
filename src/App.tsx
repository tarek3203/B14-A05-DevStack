import { useEffect, useState } from "react"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import type { Technology } from "./types/technology"

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data: Technology[]) => setTechnologies(data))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      <section id="technologies" className="mx-auto max-w-[1200px] px-4 pb-20">
        {loading ? (
          <div className="flex flex-col items-center gap-3 py-20">
            <span className="loading loading-spinner loading-lg text-pink-600" />
            <p className="text-sm text-slate-500">Loading technologies...</p>
          </div>
        ) : (
          <p className="text-sm text-slate-500">
            {technologies.length} technologies loaded.
          </p>
        )}
      </section>
    </div>
  )
}

export default App
