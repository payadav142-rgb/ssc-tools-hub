

export default function Hero() {
  return (
    <section className="relative px-6 pt-32 pb-24 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-5 py-2 text-sm text-white/70 mb-8">
          🚀 Smart SSC Preparation Platform
        </div>

        {/* Heading */}
        <h1 className="text-6xl md:text-8xl font-extrabold leading-[0.95] tracking-tight max-w-6xl mx-auto">

          Crack SSC Exams
          <br />

          <span className="text-white/60">
            Faster & Smarter
          </span>

        </h1>

        {/* Description */}
        <p className="text-white/60 text-xl leading-relaxed max-w-3xl mx-auto mt-10">
          Free SSC tools, PYQs, study planners, calculators, notes, and curated preparation resources designed for serious aspirants.
        </p>

        

        {/* Buttons */}
        <div className="flex items-center justify-center gap-5 mt-12 flex-wrap">

          <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition">
            Explore Resources
          </button>

          <button className="border border-white/10 bg-white/5 px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition">
            Open Tools
          </button>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24 max-w-5xl mx-auto">

          <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-8">
            <h3 className="text-4xl font-bold">
              100+
            </h3>

            <p className="text-white/50 mt-3">
              Resources
            </p>
          </div>

          <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-8">
            <h3 className="text-4xl font-bold">
              10+
            </h3>

            <p className="text-white/50 mt-3">
              Tools
            </p>
          </div>

          <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-8">
            <h3 className="text-4xl font-bold">
              50+
            </h3>

            <p className="text-white/50 mt-3">
              PYQs
            </p>
          </div>

          <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-8">
            <h3 className="text-4xl font-bold">
              24/7
            </h3>

            <p className="text-white/50 mt-3">
              Access
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}