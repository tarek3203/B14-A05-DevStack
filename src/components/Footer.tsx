import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import Brand from "./Brand"

const LINK_GROUPS = [
  { title: "Product", links: ["Home", "Technologies", "Projects"] },
  { title: "Company", links: ["About", "Contact", "Careers"] },
  { title: "Legal", links: ["Privacy Policy", "Terms of Service"] },
]

const SOCIALS = [
  { label: "GitHub", icon: FaGithub },
  { label: "Twitter", icon: FaTwitter },
  { label: "LinkedIn", icon: FaLinkedin },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-[1200px] px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Brand />
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-slate-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="mt-4 flex gap-4">
              {SOCIALS.map(({ label, icon: Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="text-slate-500 transition-colors hover:text-slate-900"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-bold uppercase tracking-wide text-slate-900">
                {group.title}
              </h4>
              <ul className="mt-4 flex flex-col gap-2">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs text-slate-500 transition-colors hover:text-slate-900"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] text-slate-400">
            © 2026 Dev Stack. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-[11px] text-slate-400 transition-colors hover:text-slate-700"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-[11px] text-slate-400 transition-colors hover:text-slate-700"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
