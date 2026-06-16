import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "../../components/Navbar";
import ToolContainer from "../../components/ToolContainer";

export const metadata: Metadata = {
  title:
    "SSC CGL Cutoff 2026 — Expected Cutoff, Previous Year Trends & Safe Score",

  description:
    "Check SSC CGL Cutoff 2026 including expected cutoff, previous year cutoff trends, category wise analysis and safe score for Tier 1 exam.",
};

export default function Page() {
  return (
    <ToolContainer>

      <Navbar />

      <main className="min-h-screen bg-[#0B0F19] text-white overflow-hidden relative">

        {/* Glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="absolute top-[40%] right-0 w-[400px] h-[400px] bg-amber-400/10 blur-[120px] rounded-full pointer-events-none"></div>

        <section className="relative z-10 px-6 py-20">

          <div className="max-w-6xl mx-auto">

            {/* Hero */}
            <div className="text-center">

              <p className="text-orange-300 font-medium">
                SSC CGL 2026
              </p>

              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mt-5">
                SSC CGL
                <span className="text-orange-400">
                  {" "}Cutoff 2026
                </span>
              </h1>

              <p className="text-white/60 text-xl leading-9 mt-8 max-w-4xl mx-auto">
                Check SSC CGL expected cutoff, previous year trends,
                category wise qualifying marks and safe score analysis
                for Tier 1 examination.
              </p>

            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6 mt-20">

              <div className="bg-[#111827]/80 border border-orange-500/10 rounded-[28px] p-8">
                <p className="text-white/50">
                  Expected UR
                </p>

                <h3 className="text-3xl font-bold text-orange-300 mt-3">
                  150+
                </h3>
              </div>

              <div className="bg-[#111827]/80 border border-orange-500/10 rounded-[28px] p-8">
                <p className="text-white/50">
                  Safe Score
                </p>

                <h3 className="text-3xl font-bold text-orange-300 mt-3">
                  160+
                </h3>
              </div>

              <div className="bg-[#111827]/80 border border-orange-500/10 rounded-[28px] p-8">
                <p className="text-white/50">
                  Exam Level
                </p>

                <h3 className="text-3xl font-bold text-orange-300 mt-3">
                  Moderate
                </h3>
              </div>

              <div className="bg-[#111827]/80 border border-orange-500/10 rounded-[28px] p-8">
                <p className="text-white/50">
                  Selection
                </p>

                <h3 className="text-3xl font-bold text-orange-300 mt-3">
                  Tier Wise
                </h3>
              </div>

            </div>

            {/* Expected Cutoff */}
            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10 md:p-14">

              <h2 className="text-4xl md:text-5xl font-bold">
                SSC CGL Expected Cutoff 2026
              </h2>

              <p className="text-white/70 text-lg leading-8 mt-8">
                Based on previous year trends, exam difficulty,
                vacancies and competition level, the expected
                SSC CGL cutoff may remain around the following range.
              </p>

              <div className="overflow-x-auto mt-12">

                <table className="w-full">

                  <thead>

                    <tr className="border-b border-orange-500/20">

                      <th className="text-left py-4">
                        Category
                      </th>

                      <th className="text-left py-4">
                        Expected Cutoff
                      </th>

                    </tr>

                  </thead>

                  <tbody>

                    {[
                      ["General", "145 - 155"],
                      ["OBC", "140 - 150"],
                      ["EWS", "140 - 150"],
                      ["SC", "125 - 135"],
                      ["ST", "115 - 125"],
                    ].map((item) => (

                      <tr
                        key={item[0]}
                        className="border-b border-orange-500/10"
                      >
                        <td className="py-5">
                          {item[0]}
                        </td>

                        <td className="py-5 text-orange-300 font-semibold">
                          {item[1]}
                        </td>
                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>

            </div>
                        {/* Previous Year Cutoff */}
            <div className="mt-24">

              <h2 className="text-4xl md:text-5xl font-bold">
                Previous Year SSC CGL Cutoff Trends
              </h2>

              <p className="text-white/70 text-lg leading-8 mt-8">
                Previous year cutoff analysis helps candidates
                understand the competition level and estimate
                a realistic target score for SSC CGL 2026.
              </p>

              <div className="overflow-x-auto mt-12">

                <table className="w-full bg-[#111827]/70 border border-orange-500/10 rounded-[32px] overflow-hidden">

                  <thead className="bg-orange-500 text-black">

                    <tr>

                      <th className="px-6 py-4 text-left">
                        Year
                      </th>

                      <th className="px-6 py-4 text-left">
                        General
                      </th>

                      <th className="px-6 py-4 text-left">
                        OBC
                      </th>

                      <th className="px-6 py-4 text-left">
                        SC
                      </th>

                      <th className="px-6 py-4 text-left">
                        ST
                      </th>

                    </tr>

                  </thead>

                  <tbody>

                    {[
                      ["2025", "153", "148", "132", "122"],
                      ["2024", "150", "145", "130", "120"],
                      ["2023", "148", "143", "128", "118"],
                    ].map((row) => (

                      <tr
                        key={row[0]}
                        className="border-t border-orange-500/10"
                      >

                        <td className="px-6 py-5">
                          {row[0]}
                        </td>

                        <td className="px-6 py-5">
                          {row[1]}
                        </td>

                        <td className="px-6 py-5">
                          {row[2]}
                        </td>

                        <td className="px-6 py-5">
                          {row[3]}
                        </td>

                        <td className="px-6 py-5">
                          {row[4]}
                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>

            </div>

            {/* Safe Score Analysis */}
            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10">

              <h2 className="text-4xl font-bold">
                SSC CGL Safe Score Analysis
              </h2>

              <p className="text-white/70 text-lg leading-8 mt-8">
                A safe score is generally considered higher than
                the expected cutoff. Candidates scoring above
                the safe score usually have a stronger chance
                of qualifying for the next stage.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mt-12">

                <div className="bg-black/20 rounded-3xl p-8">

                  <h3 className="text-3xl font-bold text-red-400">
                    130+
                  </h3>

                  <p className="text-white/60 mt-4">
                    Borderline Score
                  </p>

                </div>

                <div className="bg-black/20 rounded-3xl p-8">

                  <h3 className="text-3xl font-bold text-yellow-400">
                    150+
                  </h3>

                  <p className="text-white/60 mt-4">
                    Competitive Score
                  </p>

                </div>

                <div className="bg-black/20 rounded-3xl p-8">

                  <h3 className="text-3xl font-bold text-green-400">
                    160+
                  </h3>

                  <p className="text-white/60 mt-4">
                    Safe Score
                  </p>

                </div>

              </div>

            </div>

            {/* Factors Affecting Cutoff */}
            <div className="mt-24">

              <h2 className="text-4xl font-bold">
                Factors Affecting SSC CGL Cutoff
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-10">

                {[
                  "Total vacancies released by SSC",
                  "Overall exam difficulty level",
                  "Number of candidates appearing",
                  "Normalization process",
                  "Previous year cutoff trends",
                  "Competition level across shifts",
                ].map((item) => (

                  <div
                    key={item}
                    className="bg-[#111827]/70 border border-orange-500/10 rounded-3xl p-8"
                  >

                    <p className="text-lg text-white/75">
                      ✅ {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>

            {/* Category Analysis */}
            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10">

              <h2 className="text-4xl font-bold">
                Category Wise Cutoff Analysis
              </h2>

              <p className="text-white/70 text-lg leading-8 mt-8">
                SSC releases separate cutoff marks for
                General, OBC, EWS, SC and ST categories.
                Cutoff differences depend on reservation,
                vacancies and candidate performance.
              </p>

              <p className="text-white/70 text-lg leading-8 mt-8">
                General and OBC categories usually witness
                higher competition, whereas reserved
                categories may have comparatively lower
                qualifying marks.
              </p>

            </div>
                        {/* FAQ */}
            <div className="mt-24">

              <h2 className="text-4xl font-bold">
                SSC CGL Cutoff FAQs
              </h2>

              <div className="space-y-6 mt-10">

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">
                  <h3 className="text-2xl font-semibold">
                    What is a safe score for SSC CGL Tier 1?
                  </h3>

                  <p className="text-white/60 mt-4 leading-8">
                    A score above 160 is generally considered
                    safe for General category candidates,
                    although actual cutoff varies every year.
                  </p>
                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">
                  <h3 className="text-2xl font-semibold">
                    Does normalization affect SSC CGL cutoff?
                  </h3>

                  <p className="text-white/60 mt-4 leading-8">
                    Yes. SSC uses normalization for exams
                    conducted in multiple shifts to ensure
                    fairness among candidates.
                  </p>
                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">
                  <h3 className="text-2xl font-semibold">
                    Is SSC CGL cutoff released category wise?
                  </h3>

                  <p className="text-white/60 mt-4 leading-8">
                    Yes. SSC publishes separate cutoffs for
                    UR, OBC, EWS, SC, ST and other categories.
                  </p>
                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">
                  <h3 className="text-2xl font-semibold">
                    Does SSC CGL cutoff change every year?
                  </h3>

                  <p className="text-white/60 mt-4 leading-8">
                    Yes. Vacancies, difficulty level,
                    attendance and competition significantly
                    impact the final cutoff.
                  </p>
                </div>

              </div>

            </div>

            {/* Related Articles */}
            <div className="mt-24">

              <h2 className="text-4xl font-bold">
                Related SSC CGL Resources
              </h2>

              <div className="grid md:grid-cols-3 gap-8 mt-10">

                <Link
                  href="/ssc-cgl-syllabus"
                  className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
                >
                  <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">
                    SSC CGL Syllabus
                  </h3>

                  <p className="text-white/50 mt-4">
                    Complete Subject Wise Syllabus →
                  </p>
                </Link>

                <Link
                  href="/ssc-cgl-exam-pattern"
                  className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
                >
                  <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">
                    SSC CGL Exam Pattern
                  </h3>

                  <p className="text-white/50 mt-4">
                    Latest Tier 1 & Tier 2 Pattern →
                  </p>
                </Link>

                <Link
                  href="/ssc-cgl-salary"
                  className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
                >
                  <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">
                    SSC CGL Salary
                  </h3>

                  <p className="text-white/50 mt-4">
                    Pay Level & In-Hand Salary →
                  </p>
                </Link>

              </div>

            </div>

          </div>

        </section>

      </main>

    </ToolContainer>

  );

}