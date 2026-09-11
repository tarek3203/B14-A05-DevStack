import { useEffect, useState } from "react"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import TechnologySection from "./components/TechnologySection"
import type { Technology } from "./types/technology"

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([])
  const [loading, setLoading] = useState(true)
  const [stack, setStack] = useState<Technology[]>([])

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data: Technology[]) => setTechnologies(data))
      .finally(() => setLoading(false))
  }, [])

  const handleAddToStack = (technology: Technology) => {
    const alreadyAdded = stack.some((item) => item.id === technology.id)

    if (alreadyAdded) {
      return
    }

    setStack([...stack, technology])
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TechnologySection
        technologies={technologies}
        loading={loading}
        stack={stack}
        onAddToStack={handleAddToStack}
      />
    </div>
  )
}

export default App
