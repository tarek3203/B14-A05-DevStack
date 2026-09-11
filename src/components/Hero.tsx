import bannerStack from "../assets/banner-stack.png"

export default function Hero() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-12 lg:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-[52px]">
            Build Your Ideal
            <br />
            <span className="brand-gradient-text">Development Stack</span>
          </h1>

          <p className="mt-6 max-w-lg text-base text-slate-600 sm:text-lg">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#technologies"
              className="brand-gradient rounded-lg px-5 py-3 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
            >
              Explore Technologies
            </a>
            <a
              href="#technologies"
              className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={bannerStack}
            alt="Layered illustration of a development stack"
            className="w-full max-w-[420px] lg:max-w-[520px]"
          />
        </div>
      </div>
    </section>
  )
}
