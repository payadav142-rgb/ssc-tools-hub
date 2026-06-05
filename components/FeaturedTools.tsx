import Link from "next/link";
import { tools } from "../data/tools";

export default function FeaturedTools() {

  return (

    <section className="px-6 pb-28 relative">

      {/* Glow */}
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

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">

          {/* Existing Tools */}
          {tools.map((tool) => (

            <div
              key={tool.title}
              className="group bg-[#111827]/80 backdrop-blur-xl border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 hover:-translate-y-2 transition-all duration-300 shadow-[0_0_50px_rgba(249,115,22,0.05)]"
            >

              {/* Icon */}
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-orange-500/20 to-amber-400/10 border border-orange-500/10 flex items-center justify-center text-5xl mb-7 group-hover:scale-110 transition duration-300 shadow-lg shadow-orange-500/10">

                🛠️

              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold leading-snug group-hover:text-orange-300 transition">

                {tool.title}

              </h3>

              {/* Description */}
              <p className="text-white/55 mt-5 leading-relaxed text-[15px]">

                {tool.description}

              </p>

              {/* Button */}
              <Link
                href={tool.link}
                className="inline-flex items-center gap-2 mt-8 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-500/20"
              >

                Open Tool →

              </Link>

            </div>

          ))}

          {/* SEO Card */}
          <Link
            href="/ssc-cgl-salary"
            className="group bg-gradient-to-br from-orange-500/15 to-amber-400/5 border border-orange-500/20 rounded-[32px] p-8 hover:border-orange-500/40 hover:-translate-y-2 transition-all duration-300 block shadow-[0_0_60px_rgba(249,115,22,0.08)]"
          >

            {/* Icon */}
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-orange-500/20 to-amber-400/10 border border-orange-500/10 flex items-center justify-center text-5xl mb-7 group-hover:scale-110 transition duration-300 shadow-lg shadow-orange-500/10">

              💰

            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold leading-snug group-hover:text-orange-300 transition">

              SSC CGL Salary

            </h3>

            {/* Description */}
            <p className="text-white/60 mt-5 leading-relaxed text-[15px]">

              Check in-hand salary,
              allowances, perks,
              promotion and career growth.

            </p>

            {/* CTA */}
            <div className="inline-flex items-center gap-2 mt-8 bg-white text-black px-6 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105">

              Read Article →

            </div>

          </Link>

        </div>

      </div>

    </section>

  );

}