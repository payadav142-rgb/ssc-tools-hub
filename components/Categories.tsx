import Link from "next/link";

import { categories } from "../data/categories";

const categoryData: Record<
  string,
  {
    icon: string;
    description: string;
    href: string;
  }
> = {
  Quant: {
    icon: "📘",
    description:
      "Practice quantitative aptitude with smart SSC preparation resources.",
    href: "/tools",
  },

  Reasoning: {
    icon: "🧠",
    description:
      "Improve logical reasoning with useful practice material and tools.",
    href: "/tools",
  },

  English: {
    icon: "✍️",
    description:
      "Build English skills with grammar, vocabulary and preparation resources.",
    href: "/resources",
  },

  GK: {
    icon: "🌍",
    description:
      "Stay prepared with general knowledge and current affairs resources.",
    href: "/resources",
  },

  PYQs: {
    icon: "📄",
    description:
      "Practice previous year questions and understand SSC exam trends.",
    href: "/pyqs",
  },

  Tools: {
    icon: "🛠️",
    description:
      "Use smart calculators, planners, trackers and SSC preparation tools.",
    href: "/tools",
  },
};

export default function Categories() {
  return (
    <section className="relative overflow-hidden px-6 pb-28">

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-100px] top-0 h-[400px] w-[400px] rounded-full bg-orange-500/10 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-0 right-[-100px] h-[350px] w-[350px] rounded-full bg-amber-400/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

          <div>

            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
              SSC Preparation
            </div>

            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Explore{" "}
              <span className="text-orange-400">
                Categories
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/50">
              Everything you need for SSC preparation,
              organized into simple and useful categories.
            </p>

          </div>

          <Link
            href="/resources"
            className="inline-flex w-fit items-center rounded-xl border border-orange-500/20 bg-orange-500/5 px-5 py-3 text-sm font-semibold text-orange-200 transition-all duration-300 hover:border-orange-500/40 hover:bg-orange-500/10"
          >
            View Resources →
          </Link>

        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-6">

          {categories.map((category) => {

            const data = categoryData[category];

            if (!data) {
              return null;
            }

            return (
              <Link
                key={category}
                href={data.href}
                className="group relative overflow-hidden rounded-[28px] border border-orange-500/10 bg-[#111827]/80 p-6 text-center shadow-[0_0_40px_rgba(249,115,22,0.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/40 hover:bg-[#151D2D]"
              >

                {/* Hover Glow */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-amber-400/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10">

                  {/* Icon */}
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-500/10 bg-gradient-to-br from-orange-500/20 to-amber-400/10 text-4xl shadow-lg shadow-orange-500/10 transition-transform duration-300 group-hover:scale-110">
                    {data.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-orange-300">
                    {category}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-xs leading-6 text-white/45">
                    {data.description}
                  </p>

                  {/* Arrow */}
                  <div className="mt-5 text-sm font-semibold text-orange-400 opacity-70 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    Explore →
                  </div>

                </div>

              </Link>
            );
          })}

        </div>

      </div>

    </section>
  );
}