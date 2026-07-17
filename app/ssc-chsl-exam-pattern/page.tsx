import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "../../components/Navbar";
import ToolContainer from "../../components/ToolContainer";

export const metadata: Metadata = {
  title: "SSC CHSL Exam Pattern 2026 — Tier 1 & Tier 2 Pattern",

  description:
    "Check SSC CHSL Exam Pattern 2026 including Tier 1, Tier 2, marking scheme, negative marking, exam duration and subject-wise paper pattern.",
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
                SSC CHSL 2026
              </p>

              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mt-5">

                SSC CHSL{" "}

                <span className="text-orange-400">
                  Exam Pattern 2026
                </span>

              </h1>

              <p className="text-white/60 text-lg md:text-xl leading-9 mt-8 max-w-4xl mx-auto">

                Check complete SSC CHSL Tier 1 and Tier 2 exam pattern,
                marking scheme, negative marking, exam duration,
                subjects and latest selection process.

              </p>

            </div>

            {/* Quick Cards */}

            <div className="grid md:grid-cols-4 gap-8 mt-20">

              {[
                {
                  title: "Questions",
                  value: "100",
                },

                {
                  title: "Marks",
                  value: "200",
                },

                {
                  title: "Duration",
                  value: "60 Minutes",
                },

                {
                  title: "Negative",
                  value: "0.50 Mark",
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
                SSC CHSL Exam Pattern Overview
              </h2>

              <p className="text-white/70 text-lg leading-9 mt-8">

                SSC Combined Higher Secondary Level (CHSL)
                Examination is conducted by Staff Selection
                Commission to recruit candidates for posts
                like LDC, JSA and DEO.

              </p>

              <p className="text-white/70 text-lg leading-9 mt-6">

                Candidates have to qualify Tier 1 and Tier 2
                examinations. Understanding the latest exam
                pattern helps candidates improve preparation
                strategy and maximize their score.

              </p>

            </div>
                        {/* Tier 1 Pattern */}

            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-8 md:p-12">

              <h2 className="text-4xl font-bold">
                SSC CHSL Tier 1 Exam Pattern 2026
              </h2>

              <p className="text-white/70 text-lg leading-9 mt-6">

                Tier 1 is an objective-type online examination.
                The paper consists of 100 questions carrying
                200 marks. Candidates are given 60 minutes
                to complete the examination.

              </p>

              <div className="overflow-x-auto mt-10">

                <table className="w-full border border-orange-500/10 rounded-3xl overflow-hidden">

                  <thead className="bg-orange-500 text-black">

                    <tr>

                      <th className="px-6 py-4 text-left">
                        Subject
                      </th>

                      <th className="px-6 py-4 text-left">
                        Questions
                      </th>

                      <th className="px-6 py-4 text-left">
                        Marks
                      </th>

                    </tr>

                  </thead>

                  <tbody>

                    {[
                      ["General Intelligence", "25", "50"],
                      ["General Awareness", "25", "50"],
                      ["Quantitative Aptitude", "25", "50"],
                      ["English Language", "25", "50"],
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

            {/* Tier 2 Pattern */}

            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-8 md:p-12">

              <h2 className="text-4xl font-bold">
                SSC CHSL Tier 2 Exam Pattern 2026
              </h2>

              <p className="text-white/70 text-lg leading-9 mt-6">

                Tier 2 includes objective questions along with
                skill test or typing test depending upon
                the post applied for by the candidate.

              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-10">

                {[
                  {
                    title: "Mathematical Abilities",
                    desc: "Arithmetic, Percentage, Profit & Loss, Algebra and Geometry.",
                  },

                  {
                    title: "Reasoning Ability",
                    desc: "Coding-Decoding, Analogy, Series, Puzzle and Logical Reasoning.",
                  },

                  {
                    title: "English Language",
                    desc: "Grammar, Vocabulary, Synonyms, Antonyms and Comprehension.",
                  },

                  {
                    title: "Computer Knowledge",
                    desc: "Computer Basics, Internet, MS Office and Digital Awareness.",
                  },

                ].map((item) => (

                  <div
                    key={item.title}
                    className="bg-black/20 border border-orange-500/10 rounded-3xl p-8"
                  >

                    <h3 className="text-2xl font-bold text-orange-300">
                      {item.title}
                    </h3>

                    <p className="text-white/60 leading-8 mt-5">
                      {item.desc}
                    </p>

                  </div>

                ))}

              </div>

            </div>

            {/* Selection Process */}

            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10">

              <h2 className="text-4xl font-bold">
                SSC CHSL Selection Process
              </h2>

              <div className="space-y-6 mt-10">

                {[
                  "Tier 1 Computer Based Examination",
                  "Tier 2 Examination",
                  "Skill Test / Typing Test",
                  "Document Verification",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="bg-black/20 border border-orange-500/10 rounded-3xl p-6"
                  >

                    <p className="text-white/70 text-lg">
                      ✅ {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>
                        {/* Marking Scheme */}

            <div className="mt-24">

              <h2 className="text-4xl font-bold">
                SSC CHSL Marking Scheme
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-10">

                {[
                  "Each correct answer carries 2 marks.",
                  "0.50 marks are deducted for every incorrect answer.",
                  "No marks are deducted for unattempted questions.",
                  "Accuracy and time management are important for scoring well.",
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

            {/* FAQ */}

            <div className="mt-24">

              <h2 className="text-4xl font-bold">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6 mt-10">

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    Is SSC CHSL conducted online?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">
                    Yes, SSC CHSL Tier 1 and Tier 2 are conducted in online CBT mode.
                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    How many questions are asked in SSC CHSL Tier 1?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">
                    Tier 1 consists of 100 objective questions carrying 200 marks.
                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    Is there negative marking in SSC CHSL?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">
                    Yes, 0.50 marks are deducted for every incorrect answer.
                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    What is the duration of SSC CHSL Tier 1?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">
                    Candidates get 60 minutes to complete the examination.
                  </p>

                </div>

              </div>

            </div>

            {/* Internal Links */}

            <div className="grid md:grid-cols-3 gap-8 mt-24">

              <Link
                href="/ssc-chsl-syllabus"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">
                  SSC CHSL Syllabus
                </h3>

                <p className="text-white/50 mt-4">
                  Complete topic-wise syllabus →
                </p>

              </Link>

              <Link
                href="/ssc-chsl-cutoff"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">
                  SSC CHSL Cutoff
                </h3>

                <p className="text-white/50 mt-4">
                  Expected & previous year cutoff →
                </p>

              </Link>

              <Link
                href="/ssc-chsl-salary"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">
                  SSC CHSL Salary
                </h3>

                <p className="text-white/50 mt-4">
                  In-hand salary & allowances →
                </p>

              </Link>

            </div>

          </div>

        </section>

      </main>

    </ToolContainer>

  );

}