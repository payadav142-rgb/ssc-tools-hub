import type { Metadata } from "next";

import Navbar from "../../components/Navbar";
import ToolContainer from "../../components/ToolContainer";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "SSC CHSL Cutoff 2026 — Expected & Previous Year Cutoff",

  description:
    "Check SSC CHSL cutoff 2026 including expected cutoff, previous year trends, category wise marks and selection analysis.",
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

          <div className="max-w-5xl mx-auto">

            {/* Hero */}
            <div className="text-center">

              <p className="text-orange-300 font-medium">
                SSC CHSL 2026
              </p>

              <h1 className="text-5xl md:text-7xl font-extrabold mt-5">
                SSC CHSL
                <span className="text-orange-400">
                  {" "}Cutoff 2026
                </span>
              </h1>

              <p className="text-white/60 text-lg leading-8 mt-8 max-w-3xl mx-auto">
                Check SSC CHSL expected cutoff,
                previous year cutoff marks,
                category wise trends and safe score analysis.
              </p>

            </div>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-3 gap-8 mt-20">

              <div className="bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8">
                <h3 className="text-3xl font-bold text-orange-300">
                  145+
                </h3>

                <p className="text-white/60 mt-4">
                  Expected UR Cutoff
                </p>
              </div>

              <div className="bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8">
                <h3 className="text-3xl font-bold text-orange-300">
                  Tier 1
                </h3>

                <p className="text-white/60 mt-4">
                  Cutoff Analysis
                </p>
              </div>

              <div className="bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8">
                <h3 className="text-3xl font-bold text-orange-300">
                  Category Wise
                </h3>

                <p className="text-white/60 mt-4">
                  UR • OBC • SC • ST
                </p>
              </div>

            </div>
                        {/* Expected Cutoff 2026 */}
            <div className="mt-24">

              <h2 className="text-4xl md:text-5xl font-bold">
                SSC CHSL Expected Cutoff 2026
              </h2>

              <p className="text-white/70 text-lg leading-8 mt-8">
                SSC CHSL cutoff depends on vacancies,
                exam difficulty level, normalization
                process and total number of candidates
                appearing in the examination.
              </p>

              <div className="overflow-x-auto mt-10">

                <table className="w-full">

                  <thead>

                    <tr className="bg-orange-500 text-black">

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
                      ["UR", "155 - 165"],
                      ["OBC", "150 - 160"],
                      ["EWS", "150 - 160"],
                      ["SC", "135 - 145"],
                      ["ST", "125 - 135"],
                    ].map((item) => (

                      <tr
                        key={item[0]}
                        className="border-b border-orange-500/10"
                      >

                        <td className="px-6 py-5">
                          {item[0]}
                        </td>

                        <td className="px-6 py-5 text-orange-300 font-semibold">
                          {item[1]}
                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>

            </div>

            {/* Previous Year Cutoff */}
            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10 md:p-14">

              <h2 className="text-4xl md:text-5xl font-bold">
                Previous Year SSC CHSL Cutoff
              </h2>

              <p className="text-white/70 text-lg leading-8 mt-8">
                Previous year cutoff analysis helps
                candidates understand safe scores
                and competition trends.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mt-12">

                <div className="bg-black/20 rounded-3xl p-8">

                  <h3 className="text-3xl font-bold text-orange-300">
                    2025
                  </h3>

                  <p className="text-white/60 mt-4">
                    Around 157 Marks
                  </p>

                </div>

                <div className="bg-black/20 rounded-3xl p-8">

                  <h3 className="text-3xl font-bold text-orange-300">
                    2024
                  </h3>

                  <p className="text-white/60 mt-4">
                    Around 153 Marks
                  </p>

                </div>

                <div className="bg-black/20 rounded-3xl p-8">

                  <h3 className="text-3xl font-bold text-orange-300">
                    2023
                  </h3>

                  <p className="text-white/60 mt-4">
                    Around 150 Marks
                  </p>

                </div>

              </div>

            </div>

            {/* Factors Affecting Cutoff */}
            <div className="mt-24">

              <h2 className="text-4xl font-bold">
                Factors Affecting SSC CHSL Cutoff
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-10">

                {[
                  "Number of Vacancies",
                  "Exam Difficulty Level",
                  "Total Candidates Appearing",
                  "Normalization Process",
                  "Category Wise Competition",
                  "Previous Year Trends",
                ].map((factor) => (

                  <div
                    key={factor}
                    className="bg-[#111827]/70 border border-orange-500/10 rounded-3xl p-6"
                  >

                    <p className="text-lg">
                      📌 {factor}
                    </p>

                  </div>

                ))}

              </div>

            </div>
                        {/* FAQ */}
            <div className="mt-24">

              <h2 className="text-4xl font-bold">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6 mt-10">

                <div className="bg-[#111827]/80 border border-blue-500/10 rounded-3xl p-8">
                  <h3 className="text-2xl font-semibold">
                    What is a safe score for SSC CHSL 2026?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">
                    A score above 160 is generally considered
                    safe for General category candidates,
                    although the actual cutoff depends on
                    vacancies and exam difficulty.
                  </p>
                </div>

                <div className="bg-[#111827]/80 border border-blue-500/10 rounded-3xl p-8">
                  <h3 className="text-2xl font-semibold">
                    Does SSC CHSL cutoff vary every year?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">
                    Yes. Cutoff marks change every year due
                    to competition level, vacancies and
                    difficulty of the examination.
                  </p>
                </div>

                <div className="bg-[#111827]/80 border border-blue-500/10 rounded-3xl p-8">
                  <h3 className="text-2xl font-semibold">
                    Is SSC CHSL cutoff released category-wise?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">
                    Yes, SSC publishes separate cutoff marks
                    for UR, OBC, EWS, SC, ST and other
                    eligible categories.
                  </p>
                </div>

              </div>

            </div>

            {/* Related Pages */}
            <div className="grid md:grid-cols-3 gap-8 mt-24">

              <Link
                href="/ssc-chsl-syllabus"
                className="group bg-[#111827]/80 border border-blue-500/10 rounded-[32px] p-8 hover:border-blue-500/40 transition-all"
              >
                <h3 className="text-2xl font-bold group-hover:text-blue-300 transition">
                  SSC CHSL Syllabus
                </h3>

                <p className="text-white/50 mt-4">
                  Read More →
                </p>
              </Link>

              <Link
                href="/ssc-chsl-salary"
                className="group bg-[#111827]/80 border border-blue-500/10 rounded-[32px] p-8 hover:border-blue-500/40 transition-all"
              >
                <h3 className="text-2xl font-bold group-hover:text-blue-300 transition">
                  SSC CHSL Salary
                </h3>

                <p className="text-white/50 mt-4">
                  Read More →
                </p>
              </Link>

              <Link
                href="/ssc-chsl-books"
                className="group bg-[#111827]/80 border border-blue-500/10 rounded-[32px] p-8 hover:border-blue-500/40 transition-all"
              >
                <h3 className="text-2xl font-bold group-hover:text-blue-300 transition">
                  SSC CHSL Books
                </h3>

                <p className="text-white/50 mt-4">
                  Read More →
                </p>
              </Link>

            </div>

          </div>

        </section>

      </main>

    </ToolContainer>

  );

}