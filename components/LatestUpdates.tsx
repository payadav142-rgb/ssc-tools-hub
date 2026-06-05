export default function LatestUpdates() {

  const updates = [

    {
      title:
        "SSC CGL 2026 Notification",
      desc:
        "Official SSC CGL 2026 notification is expected very soon with updated vacancies and exam schedule.",
      tag:
        "Latest",
    },

    {
      title:
        "SSC CGL Salary Updated",
      desc:
        "New salary structure, allowances, perks and promotion details are now available.",
      tag:
        "Salary",
    },

    {
      title:
        "SSC CHSL Preparation Guide",
      desc:
        "Complete beginner roadmap and strategy added for SSC CHSL aspirants.",
      tag:
        "Guide",
    },

    {
      title:
        "SSC Cutoff Trends",
      desc:
        "Previous year and expected cutoff analysis for SSC exams updated.",
      tag:
        "Analysis",
    },

  ];

  return (

    <section className="px-6 pb-28 relative">

      {/* Background Glow */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[450px] h-[450px] bg-orange-500/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div className="mb-16 text-center md:text-left">

          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">

            Latest <span className="text-orange-400">Updates</span>

          </h2>

          <p className="text-white/50 mt-5 text-lg max-w-2xl">

            Stay updated with latest SSC notifications,
            salary updates, cutoff trends and preparation guides.

          </p>

        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-7">

          {updates.map(
            (update, index) => (

              <div
                key={index}
                className="group relative bg-[#111827]/80 backdrop-blur-xl border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 hover:-translate-y-2 transition-all duration-300 overflow-hidden shadow-[0_0_50px_rgba(249,115,22,0.05)]"
              >

                {/* Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-3xl rounded-full pointer-events-none"></div>

                {/* Tag */}
                <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 text-sm text-orange-200 mb-6">

                  🔥 {update.tag}

                </div>

                {/* Title */}
                <h3 className="text-3xl font-bold leading-snug group-hover:text-orange-300 transition">

                  {update.title}

                </h3>

                {/* Description */}
                <p className="text-white/55 mt-5 leading-relaxed text-[15px]">

                  {update.desc}

                </p>

                {/* Bottom */}
                <div className="mt-8 flex items-center justify-between">

                  <span className="text-white/30 text-sm">

                    SSC Tools Hub

                  </span>

                  <button className="text-orange-300 font-semibold group-hover:translate-x-1 transition">

                    Read More →

                  </button>

                </div>

              </div>

            )
          )}

        </div>

      </div>

    </section>

  );

}