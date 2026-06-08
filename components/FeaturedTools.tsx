import Link from "next/link";
import { tools } from "../data/tools";

export default function FeaturedTools() {
  const featuredTools = tools.slice(0, 6);

  return (
    <section className="px-6 pb-28 relative">

      <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div className="mb-16 text-center md:text-left">

          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Featured <span className="text-orange-400">Tools</span>
          </h2>

          <p className="text-white/50 mt-5 text-lg max-w-2xl">
            Smart utilities designed to boost your SSC preparation.
          </p>

        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

          {featuredTools.map((tool) => (

            <div
              key={tool.title}
              className="group bg-[#111827]/80 backdrop-blur-xl border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 hover:-translate-y-2 transition-all duration-300 shadow-[0_0_50px_rgba(249,115,22,0.05)]"
            >

              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-orange-500/20 to-amber-400/10 border border-orange-500/10 flex items-center justify-center text-5xl mb-7 group-hover:scale-110 transition duration-300">

                🛠️

              </div>

              <h3 className="text-2xl font-bold leading-snug group-hover:text-orange-300 transition">
                {tool.title}
              </h3>

              <p className="text-white/55 mt-5 leading-relaxed text-[15px]">
                {tool.description}
              </p>

              <Link
                href={tool.link}
                className="inline-flex items-center gap-2 mt-8 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-500/20"
              >
                Open Tool →
              </Link>

            </div>

          ))}

        </div>

        {/* View All Tools Button */}
        <div className="text-center mt-14">

          <Link
            href="/tools"
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all duration-300"
          >
            View All Tools →
          </Link>

        </div>

      </div>

    </section>
  );
}