import type { Metadata } from "next";

import Navbar from "../../components/Navbar";
import ToolContainer from "../../components/ToolContainer";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "SSC MTS Cutoff 2026 — Expected & Previous Year Cutoff",
  description:
    "Check SSC MTS Cutoff 2026 including expected cutoff, previous year trends, category wise analysis and safe score.",
};

export default function Page() {
  return (
    <ToolContainer>

      <Navbar />

      <main className="min-h-screen bg-[#0B0F19] text-white overflow-hidden relative">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="absolute top-[40%] right-0 w-[400px] h-[400px] bg-amber-400/10 blur-[120px] rounded-full pointer-events-none"></div>

        <section className="relative z-10 px-6 py-20">

          <div className="max-w-5xl mx-auto">

            {/* Hero */}

            <div className="text-center">

              <p className="text-orange-300 font-medium">
                SSC MTS 2026
              </p>

              <h1 className="text-5xl md:text-7xl font-extrabold mt-5">
                SSC MTS
                <span className="text-orange-400">
                  {" "}Cutoff 2026
                </span>
              </h1>

              <p className="text-white/60 text-lg leading-8 mt-8 max-w-3xl mx-auto">
                Check SSC MTS expected cutoff, previous year cutoff trends,
                category-wise marks analysis and safe score strategy.
              </p>

            </div>

            {/* Overview Cards */}

            <div className="grid md:grid-cols-3 gap-8 mt-20">

              <div className="bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8">
                <p className="text-white/50">
                  Expected Cutoff
                </p>

                <h3 className="text-3xl font-bold text-orange-300 mt-3">
                  130+
                </h3>
              </div>

              <div className="bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8">
                <p className="text-white/50">
                  Competition
                </p>

                <h3 className="text-3xl font-bold text-orange-300 mt-3">
                  High
                </h3>
              </div>

              <div className="bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8">
                <p className="text-white/50">
                  Exam Level
                </p>

                <h3 className="text-3xl font-bold text-orange-300 mt-3">
                  Moderate
                </h3>
              </div>

            </div>

            {/* Expected Cutoff */}

            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10">

              <h2 className="text-4xl font-bold">
                SSC MTS Expected Cutoff 2026
              </h2>

              <p className="text-white/70 text-lg leading-8 mt-8">
                SSC MTS cutoff depends on vacancies,
                difficulty level, normalization process
                and total number of candidates appearing
                in the examination.
              </p>

              <div className="overflow-x-auto mt-10">

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

                    <tr className="border-b border-orange-500/10">
                      <td className="py-4">
                        General
                      </td>

                      <td className="py-4 text-orange-300">
                        130-140
                      </td>
                    </tr>

                    <tr className="border-b border-orange-500/10">
                      <td className="py-4">
                        OBC
                      </td>

                      <td className="py-4 text-orange-300">
                        125-135
                      </td>
                    </tr>

                    <tr className="border-b border-orange-500/10">
                      <td className="py-4">
                        SC
                      </td>

                      <td className="py-4 text-orange-300">
                        110-120
                      </td>
                    </tr>

                    <tr>
                      <td className="py-4">
                        ST
                      </td>

                      <td className="py-4 text-orange-300">
                        100-110
                      </td>
                    </tr>

                  </tbody>

                </table>

              </div>

            </div>
                        {/* Previous Year Trends */}

            <div className="mt-24">

              <h2 className="text-4xl font-bold">
                Previous Year SSC MTS Cutoff Trends
              </h2>

              <p className="text-white/70 text-lg leading-8 mt-8">
                Previous year cutoff analysis helps candidates
                understand competition trends and estimate a
                realistic target score for SSC MTS 2026.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mt-12">

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8">

                  <h3 className="text-3xl font-bold text-orange-300">
                    2025
                  </h3>

                  <p className="text-white/60 mt-4">
                    Around 138 Marks
                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8">

                  <h3 className="text-3xl font-bold text-orange-300">
                    2024
                  </h3>

                  <p className="text-white/60 mt-4">
                    Around 134 Marks
                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8">

                  <h3 className="text-3xl font-bold text-orange-300">
                    2023
                  </h3>

                  <p className="text-white/60 mt-4">
                    Around 130 Marks
                  </p>

                </div>

              </div>

            </div>

            {/* Factors Affecting Cutoff */}

            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10">

              <h2 className="text-4xl font-bold">
                Factors Affecting SSC MTS Cutoff
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-10">

                {[
                  "Number of Vacancies",
                  "Exam Difficulty Level",
                  "Normalization Process",
                  "Number of Candidates",
                  "Category Wise Competition",
                  "Previous Year Trends",
                ].map((factor) => (

                  <div
                    key={factor}
                    className="bg-black/20 border border-orange-500/10 rounded-3xl p-6"
                  >

                    <p className="text-lg">
                      📌 {factor}
                    </p>

                  </div>

                ))}

              </div>

            </div>

            {/* Safe Score Analysis */}

            <div className="mt-24">

              <h2 className="text-4xl font-bold">
                SSC MTS Safe Score Analysis
              </h2>

              <p className="text-white/70 text-lg leading-8 mt-8">
                Candidates should always target scores above
                the expected cutoff to maximize selection chances.
                A higher score provides a safer margin during
                final merit preparation.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mt-12">

                <div className="bg-[#111827]/80 border border-red-500/20 rounded-[32px] p-8">

                  <h3 className="text-3xl font-bold text-red-400">
                    110+
                  </h3>

                  <p className="text-white/60 mt-4">
                    Borderline Score
                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-yellow-500/20 rounded-[32px] p-8">

                  <h3 className="text-3xl font-bold text-yellow-400">
                    125+
                  </h3>

                  <p className="text-white/60 mt-4">
                    Competitive Score
                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-green-500/20 rounded-[32px] p-8">

                  <h3 className="text-3xl font-bold text-green-400">
                    140+
                  </h3>

                  <p className="text-white/60 mt-4">
                    Safe Score
                  </p>

                </div>

              </div>

            </div>
                        {/* FAQ */}
            <div className="mt-24">

              <h2 className="text-4xl font-bold">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6 mt-10">

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    What is a safe score in SSC MTS 2026?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">
                    A score significantly above the expected cutoff
                    is generally considered safe. Candidates should
                    target maximum accuracy and attempt mock tests
                    regularly.
                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    Does SSC MTS cutoff vary by category?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">
                    Yes, SSC releases separate cutoff marks for
                    different categories such as UR, OBC, SC,
                    ST and EWS.
                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    Which factors affect SSC MTS cutoff?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">
                    Vacancies, exam difficulty, normalization,
                    attendance and competition level are the
                    major factors affecting cutoff marks.
                  </p>

                </div>

              </div>

            </div>

            {/* Related Pages */}
            <div className="grid md:grid-cols-3 gap-8 mt-24">

              <Link
                href="/ssc-mts-syllabus"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">
                  SSC MTS Syllabus
                </h3>

                <p className="text-white/50 mt-4">
                  Read More →
                </p>

              </Link>

              <Link
                href="/ssc-mts-salary"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">
                  SSC MTS Salary
                </h3>

                <p className="text-white/50 mt-4">
                  Read More →
                </p>

              </Link>

              <Link
                href="/ssc-mts-books"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">
                  SSC MTS Books
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