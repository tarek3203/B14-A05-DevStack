import { useState } from "react"
import { HiBars3, HiXMark } from "react-icons/hi2"
import Brand from "./Brand"

const NAV_LINKS = ["Home", "Technologies", "Projects", "About", "Contact"]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-3 px-4">
        {/* Left — hamburger on mobile, brand on desktop */}
        <div className="flex flex-1 items-center lg:flex-none">
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-md p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
          >
            {menuOpen ? <HiXMark size={20} /> : <HiBars3 size={20} />}
          </button>

          <div className="hidden lg:block">
            <Brand />
          </div>
        </div>

        {/* Center — brand on mobile, links on desktop */}
        <div className="lg:hidden">
          <Brand size="sm" />
        </div>

        <nav className="hidden lg:flex lg:items-center lg:gap-8">
          {NAV_LINKS.map((link, index) => (
            <a
              key={link}
              href="#"
              className={
                index === 0
                  ? "text-sm font-semibold text-pink-600"
                  : "text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
              }
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Right — auth buttons */}
        <div className="flex flex-1 items-center justify-end gap-2 lg:flex-none lg:gap-4">
          <button
            type="button"
            className="whitespace-nowrap text-xs font-medium text-slate-700 hover:text-slate-900 sm:text-sm"
          >
            Sign In
          </button>
          <button
            type="button"
            className="brand-gradient whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm transition-opacity hover:opacity-90 sm:px-5 sm:py-2 sm:text-sm"
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav className="border-t border-slate-100 bg-white px-4 py-3 lg:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link, index) => (
              <li key={link}>
                <a
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-md px-3 py-2 text-sm ${
                    index === 0
                      ? "font-semibold text-pink-600"
                      : "font-medium text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
