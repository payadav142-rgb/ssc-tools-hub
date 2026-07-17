import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "../../components/Navbar";
import ToolContainer from "../../components/ToolContainer";

export const metadata: Metadata = {
  title: "SSC MTS Syllabus 2026 — Complete Exam Syllabus",

  description:
    "Check complete SSC MTS syllabus 2026 including Numerical Aptitude, Reasoning, English and General Awareness with latest exam pattern.",

  keywords: [
    "SSC MTS Syllabus 2026",
    "SSC MTS Exam Pattern",
    "SSC MTS Preparation",
    "SSC MTS Paper 1 Syllabus",
    "SSC MTS Havaldar Syllabus",
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
                SSC MTS 2026
              </p>

              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mt-5">
                SSC MTS <span className="text-orange-400">Syllabus 2026</span>
              </h1>

              <p className="text-white/60 text-lg md:text-xl leading-9 mt-8 max-w-4xl mx-auto">
                Check complete SSC MTS syllabus 2026 including
                Numerical Aptitude, Reasoning, English,
                General Awareness, latest paper pattern
                and preparation strategy.
              </p>

            </div>

            {/* Quick Cards */}
            <div className="grid md:grid-cols-4 gap-8 mt-20">

              {[
                {
                  title: "Subjects",
                  value: "4",
                },

                {
                  title: "Sessions",
                  value: "2",
                },

                {
                  title: "Mode",
                  value: "Online CBT",
                },

                {
                  title: "Level",
                  value: "10th Pass",
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
                SSC MTS Syllabus Overview
              </h2>

              <p className="text-white/70 text-lg leading-9 mt-8">
                SSC Multi Tasking Staff (MTS) examination is conducted
                by the Staff Selection Commission for recruitment to
                various non-technical Group C posts in central government departments.
              </p>

              <p className="text-white/70 text-lg leading-9 mt-6">
                Understanding the latest SSC MTS syllabus and exam pattern
                helps candidates prepare effectively and score better
                in both examination sessions.
              </p>

            </div>

            {/* Subjects */}
            <div className="mt-24">

              <h2 className="text-4xl md:text-5xl font-bold">
                SSC MTS Exam Subjects
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-12">

                {[
                  {
                    title: "Numerical Aptitude",
                    topics: [
                      "Percentage",
                      "Profit & Loss",
                      "Ratio & Proportion",
                      "Average",
                      "Simple Interest",
                      "Mensuration",
                    ],
                  },

                  {
                    title: "Reasoning Ability",
                    topics: [
                      "Analogy",
                      "Classification",
                      "Coding-Decoding",
                      "Series",
                      "Blood Relation",
                      "Puzzle",
                    ],
                  },

                  {
                    title: "English Language",
                    topics: [
                      "Grammar",
                      "Vocabulary",
                      "Sentence Correction",
                      "Comprehension",
                      "Synonyms",
                      "Antonyms",
                    ],
                  },

                  {
                    title: "General Awareness",
                    topics: [
                      "History",
                      "Geography",
                      "Polity",
                      "Science",
                      "Economics",
                      "Current Affairs",
                    ],
                  },

                ].map((item, index) => (

                  <div
                    key={index}
                    className="bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8"
                  >

                    <h3 className="text-2xl font-bold text-orange-300">
                      {item.title}
                    </h3>

                    <ul className="mt-6 space-y-4 text-white/70">

                      {item.topics.map((topic, i) => (

                        <li key={i}>
                          • {topic}
                        </li>

                      ))}

                    </ul>

                  </div>

                ))}

              </div>

            </div>
                        {/* Paper Pattern */}
            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10 md:p-14">

              <h2 className="text-4xl md:text-5xl font-bold">
                SSC MTS Paper Pattern 2026
              </h2>

              <p className="text-white/70 text-lg leading-8 mt-8">
                SSC MTS examination is conducted in two sessions.
                Both sessions are held on the same day in
                Computer Based Test (CBT) mode.
              </p>

              <div className="overflow-x-auto mt-10">

                <table className="w-full border border-orange-500/10 rounded-3xl overflow-hidden">

                  <thead className="bg-orange-500 text-black">

                    <tr>

                      <th className="px-6 py-4 text-left">
                        Session
                      </th>

                      <th className="px-6 py-4 text-left">
                        Subjects
                      </th>

                      <th className="px-6 py-4 text-left">
                        Marks
                      </th>

                    </tr>

                  </thead>

                  <tbody>

                    {[
                      [
                        "Session 1",
                        "Numerical Aptitude & Reasoning",
                        "120",
                      ],

                      [
                        "Session 2",
                        "English & General Awareness",
                        "150",
                      ],

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

                        <td className="px-6 py-5 text-orange-300 font-semibold">
                          {row[2]}
                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>

            </div>

            {/* Marking Scheme */}
            <div className="mt-24">

              <h2 className="text-4xl font-bold">
                SSC MTS Marking Scheme
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-10">

                {[
                  "Session 1 has no negative marking.",
                  "Session 2 has 1 mark negative marking.",
                  "Each correct answer carries prescribed marks.",
                  "Accuracy improves overall score significantly.",
                ].map((item) => (

                  <div
                    key={item}
                    className="bg-[#111827]/70 border border-orange-500/10 rounded-3xl p-6"
                  >

                    <p className="text-lg leading-8">
                      ✅ {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>

            {/* Preparation Tips */}
            <div className="mt-24">

              <h2 className="text-4xl font-bold">
                SSC MTS Preparation Tips
              </h2>

              <div className="space-y-6 mt-10">

                {[
                  "Solve previous year question papers regularly.",
                  "Practice mock tests every week.",
                  "Focus on accuracy along with speed.",
                  "Revise formulas and grammar rules daily.",
                  "Prepare current affairs consistently.",
                ].map((tip) => (

                  <div
                    key={tip}
                    className="bg-[#111827]/70 border border-orange-500/10 rounded-3xl p-6"
                  >

                    <p className="text-lg leading-8">
                      ✅ {tip}
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
                    Is SSC MTS syllabus difficult?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">
                    SSC MTS syllabus is considered easy to moderate.
                    Regular practice, revision and mock tests help
                    candidates score well in the examination.
                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    Does SSC MTS have negative marking?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">
                    Yes. Negative marking is applicable in Session 2
                    of the SSC MTS Computer Based Examination.
                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    How many subjects are included in SSC MTS syllabus?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">
                    The SSC MTS syllabus covers four major subjects:
                    Numerical Aptitude, Reasoning Ability,
                    English Language and General Awareness.
                  </p>

                </div>

              </div>

            </div>

            {/* Internal Links */}
            <div className="grid md:grid-cols-3 gap-8 mt-24">

              <Link
                href="/ssc-mts-exam-pattern"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">
                  SSC MTS Exam Pattern
                </h3>

                <p className="text-white/50 mt-4">
                  Latest paper pattern →
                </p>

              </Link>

              <Link
                href="/ssc-mts-cutoff"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">
                  SSC MTS Cutoff
                </h3>

                <p className="text-white/50 mt-4">
                  Expected & previous year cutoff →
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
                  Salary, perks & allowances →
                </p>

              </Link>

            </div>

          </div>

        </section>

      </main>

    </ToolContainer>

  );

}