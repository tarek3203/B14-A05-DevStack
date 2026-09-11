import { useEffect, useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/ReactToastify.css"
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
      toast.warning(`${technology.name} is already in your stack.`)
      return
    }

    setStack([...stack, technology])
    toast.success(`${technology.name} added to your stack.`)
  }

  const handleRemoveFromStack = (id: string) => {
    const removed = stack.find((item) => item.id === id)

    setStack(stack.filter((item) => item.id !== id))
    toast.info(`${removed?.name} removed from your stack.`)
  }

  const handleRemoveAll = () => {
    setStack([])
    toast.info("All technologies removed from your stack.")
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
        onRemoveFromStack={handleRemoveFromStack}
        onRemoveAll={handleRemoveAll}
      />
      <ToastContainer position="top-right" autoClose={2500} theme="light" />
    </div>
  )
}

export default App
