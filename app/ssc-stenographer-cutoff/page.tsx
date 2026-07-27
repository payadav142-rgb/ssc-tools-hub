import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "../../components/Navbar";
import ToolContainer from "../../components/ToolContainer";

export const metadata: Metadata = {
  title:
    "SSC Stenographer Cutoff 2026 — Expected & Previous Year Cutoff",

  description:
    "Check SSC Stenographer Cutoff 2026 including expected cutoff, previous year cutoff, category-wise trends and factors affecting cutoff.",

  keywords: [
    "SSC Stenographer Cutoff 2026",
    "SSC Stenographer Expected Cutoff",
    "SSC Stenographer Previous Year Cutoff",
    "SSC Stenographer Grade C Cutoff",
    "SSC Stenographer Grade D Cutoff",
  ],
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
                SSC Stenographer 2026
              </p>

              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mt-5">

                SSC Stenographer

                <span className="text-orange-400">
                  {" "}Cutoff 2026
                </span>

              </h1>

              <p className="text-white/60 text-lg md:text-xl leading-9 mt-8 max-w-4xl mx-auto">

                Check SSC Stenographer expected cutoff,
                previous year cutoff,
                category-wise qualifying marks
                and cutoff trends for Grade C & Grade D.

              </p>

            </div>

            {/* Quick Cards */}
            <div className="grid md:grid-cols-4 gap-8 mt-20">

              {[
                {
                  title: "Posts",
                  value: "Grade C & D",
                },

                {
                  title: "Cutoff",
                  value: "Category-wise",
                },

                {
                  title: "Exam",
                  value: "CBT",
                },

                {
                  title: "Updated",
                  value: "2026",
                },

              ].map((item, index) => (

                <div
                  key={index}
                  className="bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8"
                >

                  <h2 className="text-3xl font-bold text-orange-300">
                    {item.value}
                  </h2>

                  <p className="text-white/60 mt-4 text-lg">
                    {item.title}
                  </p>

                </div>

              ))}

            </div>

            {/* Overview */}
            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10 md:p-14">

              <h2 className="text-4xl font-bold">
                SSC Stenographer Cutoff Overview
              </h2>

              <p className="text-white/70 text-lg leading-9 mt-8">

                SSC releases separate cutoff marks
                for Grade C and Grade D posts after
                the Computer Based Examination.
                Candidates scoring above the cutoff
                qualify for the Skill Test stage.

              </p>

              <p className="text-white/70 text-lg leading-9 mt-6">

                The cutoff changes every year depending
                on the number of vacancies,
                difficulty level of the examination,
                number of candidates and overall performance.

              </p>

            </div>
                        {/* Expected Cutoff */}
            <div className="mt-24">

              <h2 className="text-4xl md:text-5xl font-bold">
                SSC Stenographer Expected Cutoff 2026
              </h2>

              <p className="text-white/70 text-lg leading-8 mt-8">

                The expected cutoff is estimated based on
                previous year trends, examination difficulty,
                vacancies and candidate performance.
                The official cutoff will be released by SSC
                after the examination process.

              </p>

              <div className="overflow-x-auto mt-10">

                <table className="w-full border border-orange-500/10 rounded-3xl overflow-hidden">

                  <thead className="bg-orange-500 text-black">

                    <tr>

                      <th className="px-6 py-4 text-left">
                        Category
                      </th>

                      <th className="px-6 py-4 text-left">
                        Grade C
                      </th>

                      <th className="px-6 py-4 text-left">
                        Grade D
                      </th>

                    </tr>

                  </thead>

                  <tbody>

                    {[
                      ["General", "Expected", "Expected"],
                      ["OBC", "Expected", "Expected"],
                      ["SC", "Expected", "Expected"],
                      ["ST", "Expected", "Expected"],
                      ["EWS", "Expected", "Expected"],
                    ].map((row) => (

                      <tr
                        key={row[0]}
                        className="border-t border-orange-500/10"
                      >

                        <td className="px-6 py-5 font-medium">
                          {row[0]}
                        </td>

                        <td className="px-6 py-5 text-orange-300 font-semibold">
                          {row[1]}
                        </td>

                        <td className="px-6 py-5 text-orange-300 font-semibold">
                          {row[2]}
                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>

            </div>

            {/* Previous Year Trend */}
            <div className="mt-24">

              <h2 className="text-4xl font-bold">
                Previous Year Cutoff Trends
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-10">

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8">

                  <h3 className="text-2xl font-bold text-orange-300">
                    Grade C
                  </h3>

                  <p className="text-white/60 leading-8 mt-5">

                    Grade C cutoff generally remains competitive
                    due to limited vacancies and higher competition.
                    Candidates should target a score comfortably
                    above the expected cutoff.

                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8">

                  <h3 className="text-2xl font-bold text-orange-300">
                    Grade D
                  </h3>

                  <p className="text-white/60 leading-8 mt-5">

                    Grade D cutoff also varies according to
                    category, vacancies and examination difficulty.
                    Previous year trends can help candidates
                    set a realistic target score.

                  </p>

                </div>

              </div>

            </div>

            {/* Factors */}
            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10 md:p-14">

              <h2 className="text-4xl font-bold">
                Factors Affecting SSC Stenographer Cutoff
              </h2>

              <div className="space-y-6 mt-10">

                {[
                  "Difficulty level of the Computer Based Examination.",
                  "Total number of vacancies announced by SSC.",
                  "Number of candidates appearing for the examination.",
                  "Overall performance of candidates.",
                  "Category-wise reservation and competition.",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="bg-black/20 border border-orange-500/10 rounded-3xl p-6"
                  >

                    <p className="text-lg">
                      ✅ {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>

            {/* Safe Score */}
            <div className="mt-24">

              <h2 className="text-4xl font-bold">
                How to Score Above the Cutoff
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-10">

                {[
                  "Solve previous year question papers regularly.",
                  "Take full-length mock tests every week.",
                  "Improve accuracy and avoid unnecessary guesses.",
                  "Focus on English Language preparation.",
                  "Revise General Awareness and current affairs regularly.",
                  "Analyze mock test performance and improve weak areas.",
                ].map((tip, index) => (

                  <div
                    key={index}
                    className="bg-[#111827]/70 border border-orange-500/10 rounded-3xl p-6"
                  >

                    <p className="text-lg">
                      🎯 {tip}
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

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    When will SSC Stenographer Cutoff 2026 be released?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">

                    SSC Stenographer Cutoff 2026 is expected to be
                    released along with or after the Computer Based
                    Examination result. Candidates should check the
                    official SSC website for the latest cutoff notice.

                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    Is SSC Stenographer cutoff different for Grade C and Grade D?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">

                    Yes. SSC generally releases separate cutoff
                    marks for Grade C and Grade D. The cutoff may
                    also vary across different categories.

                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    What happens after clearing the cutoff?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">

                    Candidates who meet the required cutoff and
                    other eligibility conditions are shortlisted
                    for the Stenography Skill Test. The skill test
                    is qualifying in nature.

                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    How can I check the official SSC Stenographer cutoff?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">

                    Candidates can check the official cutoff
                    notice and result updates through the
                    Staff Selection Commission website.

                  </p>

                </div>

              </div>

            </div>

            {/* Internal Links */}
            <div className="grid md:grid-cols-3 gap-8 mt-24">

              <Link
                href="/ssc-stenographer"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">
                  SSC Stenographer
                </h3>

                <p className="text-white/50 mt-4">
                  Complete guide →
                </p>

              </Link>

              <Link
                href="/ssc-stenographer-notification"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">
                  SSC Stenographer Notification
                </h3>

                <p className="text-white/50 mt-4">
                  Vacancy & eligibility →
                </p>

              </Link>

              <Link
                href="/ssc-stenographer-syllabus"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">
                  SSC Stenographer Syllabus
                </h3>

                <p className="text-white/50 mt-4">
                  Complete syllabus →
                </p>

              </Link>

              <Link
                href="/ssc-stenographer-exam-pattern"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">
                  SSC Stenographer Exam Pattern
                </h3>

                <p className="text-white/50 mt-4">
                  Latest paper pattern →
                </p>

              </Link>

              <Link
                href="/ssc-stenographer-salary"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">
                  SSC Stenographer Salary
                </h3>

                <p className="text-white/50 mt-4">
                  Salary & allowances →
                </p>

              </Link>

              <Link
                href="/ssc-stenographer-admit-card"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">
                  SSC Stenographer Admit Card
                </h3>

                <p className="text-white/50 mt-4">
                  Download admit card →
                </p>

              </Link>

            </div>

          </div>

        </section>

      </main>

    </ToolContainer>

  );
}