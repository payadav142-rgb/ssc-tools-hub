import type { Metadata } from "next";

import Link from "next/link";

export const metadata: Metadata = {

  title:
    "SSC CGL Cutoff 2026 — Expected & Previous Year Cutoff",

  description:
    "Check SSC CGL cutoff 2026 including expected cutoff, previous year trends and category wise marks analysis.",

};

export default function Page() {

  return (

    <main className="min-h-screen bg-[#0B0F19] text-white overflow-hidden relative">

      {/* Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="absolute top-[40%] right-0 w-[400px] h-[400px] bg-amber-400/10 blur-[120px] rounded-full pointer-events-none"></div>

      <section className="relative z-10 px-6 py-20">

        <div className="max-w-5xl mx-auto">

          {/* Hero */}
          <div>

            <p className="text-orange-300 font-medium">

              SSC CGL 2026

            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mt-5">

              SSC CGL Cutoff 2026

            </h1>

            <p className="text-white/60 text-xl leading-9 mt-8 max-w-4xl">

              Check SSC CGL expected cutoff,
              previous year cutoff marks,
              category wise analysis and trends.

            </p>

          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">

            {[
              {
                title: "Expected Cutoff",
                desc: "Tier 1 Analysis",
              },

              {
                title: "Previous Year",
                desc: "Past Trends",
              },

              {
                title: "Category Wise",
                desc: "UR, OBC, SC, ST",
              },

            ].map((item, index) => (

              <div
                key={index}
                className="bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8"
              >

                <h2 className="text-3xl font-bold text-orange-300">

                  {item.title}

                </h2>

                <p className="text-white/60 mt-4">

                  {item.desc}

                </p>

              </div>

            ))}

          </div>

          {/* Main Content */}
          <div className="mt-24 bg-[#111827]/70 border border-orange-500/10 rounded-[40px] p-8 md:p-12">

            <h2 className="text-4xl font-bold">

              SSC CGL Expected Cutoff 2026

            </h2>

            <p className="text-white/70 text-lg leading-9 mt-8">

              SSC CGL cutoff depends on multiple factors
              including vacancies, exam difficulty,
              number of candidates and competition level.

            </p>

            {/* Cutoff Table */}
            <div className="overflow-x-auto mt-12">

              <table className="w-full border border-orange-500/10 rounded-3xl overflow-hidden">

                <thead className="bg-orange-500 text-black">

                  <tr>

                    <th className="px-6 py-4 text-left">

                      Category

                    </th>

                    <th className="px-6 py-4 text-left">

                      Expected Cutoff

                    </th>

                  </tr>

                </thead>

                <tbody>

                  {[
                    {
                      category: "General",
                      cutoff: "145 - 155",
                    },

                    {
                      category: "OBC",
                      cutoff: "140 - 150",
                    },

                    {
                      category: "SC",
                      cutoff: "125 - 135",
                    },

                    {
                      category: "ST",
                      cutoff: "115 - 125",
                    },

                  ].map((item) => (

                    <tr
                      key={item.category}
                      className="border-t border-orange-500/10"
                    >

                      <td className="px-6 py-5">

                        {item.category}

                      </td>

                      <td className="px-6 py-5 text-orange-300 font-semibold">

                        {item.cutoff}

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

            {/* Factors */}
            <h2 className="text-4xl font-bold mt-20">

              Factors Affecting SSC CGL Cutoff

            </h2>

            <div className="grid md:grid-cols-2 gap-6 mt-10">

              {[
                "Total vacancies",
                "Exam difficulty level",
                "Number of candidates",
                "Previous year trends",
                "Normalization process",
                "Overall competition",
              ].map((item) => (

                <div
                  key={item}
                  className="bg-black/30 border border-orange-500/10 rounded-3xl p-6"
                >

                  <p className="text-lg leading-8">

                    {item}

                  </p>

                </div>

              ))}

            </div>

            {/* Previous Year */}
            <h2 className="text-4xl font-bold mt-20">

              Previous Year SSC CGL Cutoff Trends

            </h2>

            <p className="text-white/70 text-lg leading-9 mt-8">

              Previous year cutoff analysis helps candidates
              understand competition level and expected marks
              required to qualify the examination.

            </p>

            {/* Preparation Tips */}
            <h2 className="text-4xl font-bold mt-20">

              Tips To Score Above Cutoff

            </h2>

            <div className="space-y-6 mt-10">

              {[
                "Practice previous year papers regularly.",
                "Focus on accuracy and time management.",
                "Attempt mock tests weekly.",
                "Revise important topics consistently.",
              ].map((item) => (

                <div
                  key={item}
                  className="bg-black/30 border border-orange-500/10 rounded-3xl p-6"
                >

                  <p className="text-lg leading-8">

                    {item}

                  </p>

                </div>

              ))}

            </div>

            {/* FAQ */}
            <h2 className="text-4xl font-bold mt-20">

              Frequently Asked Questions

            </h2>

            <div className="space-y-6 mt-10">

              <div className="bg-black/30 border border-orange-500/10 rounded-3xl p-6">

                <h3 className="text-2xl font-semibold">

                  Is SSC CGL cutoff released category wise?

                </h3>

                <p className="text-white/60 mt-4 leading-8">

                  Yes, SSC releases category wise cutoff for General, OBC, SC, ST and other categories.

                </p>

              </div>

              <div className="bg-black/30 border border-orange-500/10 rounded-3xl p-6">

                <h3 className="text-2xl font-semibold">

                  Does SSC CGL cutoff change every year?

                </h3>

                <p className="text-white/60 mt-4 leading-8">

                  Yes, cutoff changes yearly depending on vacancies, exam level and competition.

                </p>

              </div>

            </div>

          </div>

          {/* Internal Links */}
          <div className="grid md:grid-cols-3 gap-8 mt-24">

            {[
              {
                title: "SSC CGL Syllabus",
                link: "/ssc-cgl-syllabus",
              },

              {
                title: "SSC CGL Exam Pattern",
                link: "/ssc-cgl-exam-pattern",
              },

              {
                title: "SSC CGL Salary",
                link: "/ssc-cgl-salary",
              },

            ].map((item) => (

              <Link
                key={item.title}
                href={item.link}
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">

                  {item.title}

                </h3>

                <p className="text-white/50 mt-4">

                  Read More →

                </p>

              </Link>

            ))}

          </div>

        </div>

      </section>

    </main>

  );

}