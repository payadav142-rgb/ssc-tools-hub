import Link from "next/link";

const updates = [
  {
    title: "SSC CGL 2026 Notification",
    desc:
      "SSC CGL 2026 notification, vacancies, eligibility, important dates and exam details.",
    tag: "Notification",
    href: "/ssc-cgl-notification",
  },

  {
    title: "SSC CGL Salary 2026",
    desc:
      "Explore SSC CGL salary structure, allowances, perks, deductions and promotion details.",
    tag: "Salary",
    href: "/ssc-cgl-salary",
  },

  {
    title: "SSC CHSL Preparation Guide",
    desc:
      "Follow a structured preparation strategy with useful resources and guidance for SSC CHSL.",
    tag: "Guide",
    href: "/resources",
  },

  {
    title: "SSC Cutoff Trends",
    desc:
      "Check previous year cutoff trends and understand how SSC cutoff marks change across exams.",
    tag: "Analysis",
    href: "/ssc-cgl-cutoff",
  },
];

export default function LatestUpdates() {
  return (
    <section className="relative overflow-hidden px-6 pb-28">

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-0 right-[-100px] h-[300px] w-[300px] rounded-full bg-amber-400/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

          <div>

            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
              Stay Updated
            </div>

            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Latest{" "}
              <span className="text-orange-400">
                Updates
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/50">
              Stay updated with important SSC notifications,
              salary information, cutoff trends and preparation guides.
            </p>

          </div>

          <Link
            href="/blog"
            className="inline-flex w-fit items-center rounded-xl border border-orange-500/20 bg-orange-500/5 px-5 py-3 text-sm font-semibold text-orange-200 transition-all duration-300 hover:border-orange-500/40 hover:bg-orange-500/10"
          >
            View All Updates →
          </Link>

        </div>

        {/* Updates Grid */}
        <div className="grid gap-6 md:grid-cols-2">

          {updates.map((update, index) => (

            <Link
              key={update.title}
              href={update.href}
              className="group relative overflow-hidden rounded-[30px] border border-orange-500/10 bg-[#111827]/80 p-8 shadow-[0_0_50px_rgba(249,115,22,0.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/40 hover:bg-[#151D2D]"
            >

              {/* Card Glow */}
              <div className="pointer-events-none absolute right-[-30px] top-[-30px] h-40 w-40 rounded-full bg-orange-500/10 blur-3xl opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10">

                {/* Top Row */}
                <div className="flex items-center justify-between gap-4">

                  <div className="inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-200">
                    🔥 {update.tag}
                  </div>

                  <span className="text-xs font-medium text-white/25">
                    2026
                  </span>

                </div>

                {/* Title */}
                <h3 className="mt-7 text-2xl font-bold leading-snug transition-colors duration-300 group-hover:text-orange-300 sm:text-3xl">
                  {update.title}
                </h3>

                {/* Description */}
                <p className="mt-5 text-[15px] leading-7 text-white/50">
                  {update.desc}
                </p>

                {/* Divider */}
                <div className="my-7 h-px bg-gradient-to-r from-orange-500/20 via-orange-500/5 to-transparent" />

                {/* Bottom */}
                <div className="flex items-center justify-between">

                  <span className="text-sm text-white/30">
                    SSC Tools Hub
                  </span>

                  <span className="font-semibold text-orange-300 transition-all duration-300 group-hover:translate-x-1">
                    Read More →
                  </span>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}