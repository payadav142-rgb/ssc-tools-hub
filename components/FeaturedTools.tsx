import Link from "next/link";
import { tools } from "../data/tools";

export default function FeaturedTools() {

  return (

    <section className="px-6 pb-24">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-14">

          <h2 className="text-5xl font-bold">

            Featured Tools

          </h2>

          <p className="text-white/50 mt-4 text-lg">

            Smart utilities for faster SSC preparation.

          </p>

        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Existing Tools */}
          {tools.map((tool) => (

            <div
              key={tool.title}
              className="group bg-gradient-to-br from-white/[0.06] to-white/[0.03] border border-white/10 rounded-3xl p-8 hover:border-white/20 hover:-translate-y-1 transition duration-300"
            >

              <div className="text-5xl mb-6">

                🛠️

              </div>

              <h3 className="text-2xl font-bold leading-snug">

                {tool.title}

              </h3>

              <p className="text-white/50 mt-4 leading-relaxed">

                {tool.description}

              </p>

              <Link
                href={tool.link}
                className="inline-flex items-center gap-2 mt-8 bg-white text-black px-5 py-3 rounded-2xl font-medium hover:scale-105 transition"
              >

                Open Tool →

              </Link>

            </div>

          ))}

          {/* SSC Salary SEO Card */}
          <Link
            href="/ssc-cgl-salary"
            className="group bg-gradient-to-br from-white/[0.06] to-white/[0.03] border border-white/10 rounded-3xl p-8 hover:border-white/20 hover:-translate-y-1 transition duration-300 block"
          >

            <div className="text-5xl mb-6">

              💰

            </div>

            <h3 className="text-2xl font-bold leading-snug">

              SSC CGL Salary

            </h3>

            <p className="text-white/50 mt-4 leading-relaxed">

              Check in-hand salary,
              allowances, perks,
              promotion and career growth.

            </p>

            <div className="inline-flex items-center gap-2 mt-8 bg-white text-black px-5 py-3 rounded-2xl font-medium hover:scale-105 transition">

              Read Article →

            </div>

          </Link>

        </div>

      </div>

    </section>

  );

}