import Link from "next/link";

const stats = [
  {
    number: "100+",
    label: "Resources",
  },
  {
    number: "20+",
    label: "Smart Tools",
  },
  {
    number: "50+",
    label: "PYQs",
  },
  {
    number: "24/7",
    label: "Free Access",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-28 pt-28 md:pb-32 md:pt-36">

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[750px] w-[750px] -translate-x-1/2 rounded-full bg-orange-500/20 blur-[150px]" />

      <div className="pointer-events-none absolute bottom-0 right-[-100px] h-[450px] w-[450px] rounded-full bg-amber-400/10 blur-[130px]" />

      {/* Subtle Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl text-center">

        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2.5 text-sm font-medium text-orange-200 backdrop-blur-xl">
          <span>🚀</span>
          India's Smart SSC Preparation Platform
        </div>

        {/* Heading */}
        <h1 className="mx-auto max-w-6xl text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">

          Crack SSC Exams

          <br />

          <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-200 bg-clip-text text-transparent">
            Faster & Smarter
          </span>

        </h1>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/60 sm:text-xl md:text-2xl md:leading-9">
          Smart SSC tools, PYQs, study planners, calculators,
          quizzes and productivity systems built for serious
          aspirants.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <Link
            href="/tools"
            className="w-full rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-9 py-4.5 text-lg font-semibold text-white shadow-xl shadow-orange-500/20 transition-all duration-300 hover:scale-105 hover:from-orange-400 hover:to-orange-500 sm:w-auto"
          >
            Explore Smart Tools →
          </Link>

          <Link
            href="/resources"
            className="w-full rounded-2xl border border-orange-500/20 bg-[#111827]/80 px-9 py-4.5 text-lg font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-orange-500/40 hover:bg-orange-500/10 sm:w-auto"
          >
            Explore Resources
          </Link>

        </div>

        {/* Trust Text */}
        <p className="mt-6 text-sm text-white/35">
          Free to use • Built for SSC aspirants • No complicated setup
        </p>

        {/* Stats */}
        <div className="mx-auto mt-20 grid max-w-5xl grid-cols-2 gap-4 md:mt-24 md:grid-cols-4 md:gap-6">

          {stats.map((item) => (
            <div
              key={item.label}
              className="group rounded-[28px] border border-orange-500/10 bg-[#111827]/80 p-6 shadow-[0_0_40px_rgba(249,115,22,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:bg-[#111827]"
            >

              <h2 className="bg-gradient-to-r from-orange-300 to-amber-200 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
                {item.number}
              </h2>

              <p className="mt-2 text-sm text-white/50 sm:text-base">
                {item.label}
              </p>

            </div>
          ))}

        </div>

        {/* Bottom Highlight */}
        <div className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/40">

          <span>✓ SSC CGL</span>
          <span>✓ SSC CHSL</span>
          <span>✓ SSC MTS</span>
          <span>✓ SSC GD</span>
          <span>✓ SSC Stenographer</span>

        </div>

      </div>

    </section>
  );
}