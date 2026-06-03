import Link from "next/link";

export default function Hero() {

  return (

    <section className="relative px-6 pt-36 pb-28 overflow-hidden">

      {/* Orange Glow */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-orange-500/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-400/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-orange-500/20 bg-orange-500/10 rounded-full px-6 py-3 text-sm text-orange-200 mb-10 backdrop-blur-xl">

          🚀 India's Smart SSC Preparation Platform

        </div>

        {/* Heading */}
        <h1 className="text-6xl md:text-8xl font-extrabold leading-[0.95] tracking-tight max-w-6xl mx-auto">

          Crack SSC Exams
          <br />

          <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-200 bg-clip-text text-transparent">

            Faster & Smarter

          </span>

        </h1>

        {/* Description */}
        <p className="text-white/60 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto mt-10">

          Smart SSC tools, PYQs, study planners, calculators,
          quizzes and productivity systems built for serious aspirants.

        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-5 mt-14 flex-wrap">

          <Link
            href="/resources"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-xl shadow-orange-500/20"
          >

            Explore Resources

          </Link>

          <Link
            href="/tools"
            className="border border-orange-500/20 bg-[#111827]/80 backdrop-blur-xl px-10 py-5 rounded-2xl font-semibold text-lg hover:border-orange-500/50 hover:bg-orange-500/10 transition-all duration-300"
          >

            Open Tools

          </Link>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24 max-w-5xl mx-auto">

          {[
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
              label: "Access",
            },
          ].map((item, index) => (

            <div
              key={index}
              className="bg-[#111827]/80 backdrop-blur-xl border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 hover:-translate-y-1 transition-all duration-300 shadow-[0_0_40px_rgba(249,115,22,0.08)]"
            >

              <h3 className="text-4xl font-extrabold bg-gradient-to-r from-orange-300 to-amber-200 bg-clip-text text-transparent">

                {item.number}

              </h3>

              <p className="text-white/50 mt-3 text-lg">

                {item.label}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}