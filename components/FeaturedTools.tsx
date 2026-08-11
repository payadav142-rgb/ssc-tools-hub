import Link from "next/link";

import { tools } from "../data/tools";

export default function FeaturedTools() {
  const featuredTools = tools.slice(0, 6);

  return (
    <section className="relative overflow-hidden px-6 pb-28">

      {/* Background Glow */}
      <div className="pointer-events-none absolute right-[-100px] top-0 h-[450px] w-[450px] rounded-full bg-orange-500/10 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-0 left-[-100px] h-[350px] w-[350px] rounded-full bg-amber-400/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

          <div>

            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
              Smart Preparation
            </div>

            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Featured{" "}
              <span className="text-orange-400">
                Tools
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/50">
              Smart utilities designed to make your SSC
              preparation faster, easier and more organized.
            </p>

          </div>

          <Link
            href="/tools"
            className="inline-flex w-fit items-center rounded-xl border border-orange-500/20 bg-orange-500/5 px-5 py-3 text-sm font-semibold text-orange-200 transition-all duration-300 hover:border-orange-500/40 hover:bg-orange-500/10"
          >
            Explore All Tools →
          </Link>

        </div>

        {/* Tools Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {featuredTools.map((tool, index) => (

            <div
              key={tool.title}
              className="group relative overflow-hidden rounded-[30px] border border-orange-500/10 bg-[#111827]/80 p-7 shadow-[0_0_50px_rgba(249,115,22,0.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/40 hover:bg-[#151D2D]"
            >

              {/* Hover Glow */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-amber-400/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10">

                {/* Top Row */}
                <div className="flex items-start justify-between gap-4">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-500/10 bg-gradient-to-br from-orange-500/20 to-amber-400/10 text-3xl shadow-lg shadow-orange-500/10 transition-transform duration-300 group-hover:scale-110">
                    🛠️
                  </div>

                  <span className="rounded-full border border-orange-500/10 bg-orange-500/5 px-3 py-1 text-xs font-medium text-orange-300/80">
                    Tool {String(index + 1).padStart(2, "0")}
                  </span>

                </div>

                {/* Content */}
                <h3 className="mt-7 text-2xl font-bold leading-snug transition-colors duration-300 group-hover:text-orange-300">
                  {tool.title}
                </h3>

                <p className="mt-4 min-h-[72px] text-[15px] leading-7 text-white/50">
                  {tool.description}
                </p>

                {/* Divider */}
                <div className="my-6 h-px bg-gradient-to-r from-orange-500/20 via-orange-500/5 to-transparent" />

                {/* Action */}
                <Link
                  href={tool.link}
                  className="inline-flex items-center gap-2 text-sm font-bold text-orange-300 transition-all duration-300 group-hover:gap-3"
                >
                  Open Tool
                  <span>→</span>
                </Link>

              </div>

            </div>

          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex justify-center">

          <Link
            href="/tools"
            className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 font-bold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:scale-105 hover:from-orange-400 hover:to-orange-500"
          >
            Explore All Smart Tools

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>

        </div>

      </div>

    </section>
  );
}