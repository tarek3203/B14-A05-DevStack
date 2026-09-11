import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <div className="h-[800px]" />
    </div>
  )
}

export default App
