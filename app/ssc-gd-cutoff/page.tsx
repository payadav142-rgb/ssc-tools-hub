import type { Metadata } from "next";

import Navbar from "../../components/Navbar";
import ToolContainer from "../../components/ToolContainer";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "SSC GD Cutoff 2026 — Expected Cutoff & Previous Year Trends",

  description:
    "Check SSC GD Cutoff 2026 including expected cutoff, previous year cutoff marks, category wise analysis and safe score.",
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
                SSC GD Constable 2026
              </p>

              <h1 className="text-5xl md:text-7xl font-extrabold mt-5">
                SSC GD
                <span className="text-orange-400">
                  {" "}Cutoff 2026
                </span>
              </h1>

              <p className="text-white/60 text-lg leading-8 mt-8 max-w-3xl mx-auto">
                Check SSC GD expected cutoff,
                previous year cutoff trends,
                state wise analysis and safe score
                for SSC GD Constable examination.
              </p>

            </div>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-4 gap-6 mt-20">

              <div className="bg-[#111827]/80 border border-orange-500/10 rounded-[28px] p-8">
                <h3 className="text-3xl font-bold text-orange-300">
                  140+
                </h3>

                <p className="text-white/60 mt-4">
                  Expected UR
                </p>
              </div>

              <div className="bg-[#111827]/80 border border-orange-500/10 rounded-[28px] p-8">
                <h3 className="text-3xl font-bold text-orange-300">
                  150+
                </h3>

                <p className="text-white/60 mt-4">
                  Safe Score
                </p>
              </div>

              <div className="bg-[#111827]/80 border border-orange-500/10 rounded-[28px] p-8">
                <h3 className="text-3xl font-bold text-orange-300">
                  CBT
                </h3>

                <p className="text-white/60 mt-4">
                  Online Exam
                </p>
              </div>

              <div className="bg-[#111827]/80 border border-orange-500/10 rounded-[28px] p-8">
                <h3 className="text-3xl font-bold text-orange-300">
                  State Wise
                </h3>

                <p className="text-white/60 mt-4">
                  Cutoff List
                </p>
              </div>

            </div>
                    {/* Expected Cutoff */}
        <div className="mt-20 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-8 md:p-12">

          <h2 className="text-4xl font-bold">
            SSC GD Expected Cutoff 2026
          </h2>

          <p className="text-white/70 text-lg leading-8 mt-6">
            SSC GD cutoff depends on factors such as exam difficulty,
            total vacancies, number of candidates appearing and overall
            competition level. Candidates should always aim to score
            significantly above the expected cutoff for better chances
            of selection.
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

                {[
                  ["General", "135 - 145"],
                  ["OBC", "130 - 140"],
                  ["EWS", "130 - 140"],
                  ["SC", "120 - 130"],
                  ["ST", "110 - 120"],
                ].map((row) => (

                  <tr
                    key={row[0]}
                    className="border-b border-orange-500/10"
                  >

                    <td className="py-4">
                      {row[0]}
                    </td>

                    <td className="py-4 text-orange-300 font-semibold">
                      {row[1]}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* Previous Year Trends */}
        <div className="mt-24">

          <h2 className="text-4xl font-bold">
            Previous Year SSC GD Cutoff Trends
          </h2>

          <p className="text-white/70 text-lg leading-8 mt-8">
            Previous year cutoff trends help candidates understand
            competition levels and estimate a safe target score.
            Candidates should analyze multiple years of cutoff data
            instead of relying on a single year's results.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div className="bg-[#111827]/70 rounded-3xl p-6">
              <h3 className="text-2xl font-bold text-orange-300">
                Vacancies
              </h3>

              <p className="text-white/60 mt-3">
                More vacancies generally reduce cutoff marks.
              </p>
            </div>

            <div className="bg-[#111827]/70 rounded-3xl p-6">
              <h3 className="text-2xl font-bold text-orange-300">
                Difficulty
              </h3>

              <p className="text-white/60 mt-3">
                Tough papers usually result in lower cutoffs.
              </p>
            </div>

            <div className="bg-[#111827]/70 rounded-3xl p-6">
              <h3 className="text-2xl font-bold text-orange-300">
                Competition
              </h3>

              <p className="text-white/60 mt-3">
                Higher participation can increase cutoff marks.
              </p>
            </div>

          </div>

        </div>
                    {/* Safe Score Analysis */}
            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10">

              <h2 className="text-4xl font-bold">
                SSC GD Safe Score Analysis
              </h2>

              <p className="text-white/70 text-lg leading-8 mt-8">
                Candidates aiming for SSC GD Constable selection should
                target scores above the expected cutoff. A higher score
                improves chances during merit preparation and state-wise
                selection processes.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mt-12">

                <div className="bg-black/20 rounded-3xl p-8">

                  <h3 className="text-3xl font-bold text-red-400">
                    120+
                  </h3>

                  <p className="text-white/60 mt-4">
                    Borderline Score
                  </p>

                </div>

                <div className="bg-black/20 rounded-3xl p-8">

                  <h3 className="text-3xl font-bold text-yellow-400">
                    140+
                  </h3>

                  <p className="text-white/60 mt-4">
                    Competitive Score
                  </p>

                </div>

                <div className="bg-black/20 rounded-3xl p-8">

                  <h3 className="text-3xl font-bold text-green-400">
                    150+
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
                SSC GD Cutoff FAQs
              </h2>

              <div className="space-y-6 mt-10">

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    What is a safe score for SSC GD 2026?
                  </h3>

                  <p className="text-white/60 mt-4 leading-8">
                    A score above 150 is generally considered safe,
                    although actual cutoff varies based on vacancies
                    and competition.
                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    Is SSC GD cutoff released category wise?
                  </h3>

                  <p className="text-white/60 mt-4 leading-8">
                    Yes. SSC releases separate cutoff marks for
                    General, OBC, EWS, SC and ST categories.
                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    Does SSC GD cutoff change every year?
                  </h3>

                  <p className="text-white/60 mt-4 leading-8">
                    Yes. Cutoff changes depending on vacancies,
                    exam difficulty level and number of candidates.
                  </p>

                </div>

              </div>

            </div>

            {/* Related Pages */}
            <div className="mt-24">

              <h2 className="text-4xl font-bold">
                Related SSC GD Resources
              </h2>

              <div className="grid md:grid-cols-3 gap-8 mt-10">

                <Link
                  href="/ssc-gd-syllabus"
                  className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
                >

                  <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">
                    SSC GD Syllabus
                  </h3>

                  <p className="text-white/50 mt-4">
                    Complete Syllabus →
                  </p>

                </Link>

                <Link
                  href="/ssc-gd-salary"
                  className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
                >

                  <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">
                    SSC GD Salary
                  </h3>

                  <p className="text-white/50 mt-4">
                    Pay Scale & Benefits →
                  </p>

                </Link>

                <Link
                  href="/ssc-gd-notification"
                  className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
                >

                  <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">
                    SSC GD Notification
                  </h3>

                  <p className="text-white/50 mt-4">
                    Latest Updates →
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