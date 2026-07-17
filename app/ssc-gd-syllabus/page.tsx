import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "../../components/Navbar";
import ToolContainer from "../../components/ToolContainer";

export const metadata: Metadata = {
  title: "SSC GD Syllabus 2026 — Complete Exam Syllabus",

  description:
    "Check complete SSC GD syllabus 2026 including Reasoning, Mathematics, English/Hindi, General Knowledge, exam pattern and preparation tips.",

  keywords: [
    "SSC GD Syllabus 2026",
    "SSC GD Exam Pattern",
    "SSC GD Constable Syllabus",
    "SSC GD Preparation",
    "SSC GD Subjects",
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
                SSC GD 2026
              </p>

              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mt-5">

                SSC GD

                <span className="text-orange-400">
                  {" "}Syllabus 2026
                </span>

              </h1>

              <p className="text-white/60 text-lg md:text-xl leading-9 mt-8 max-w-4xl mx-auto">

                Check complete SSC GD Constable syllabus including
                subject-wise topics, exam pattern,
                preparation strategy and latest syllabus.

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
                  title: "Questions",
                  value: "80",
                },

                {
                  title: "Marks",
                  value: "160",
                },

                {
                  title: "Mode",
                  value: "Online",
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
                SSC GD Syllabus Overview
              </h2>

              <p className="text-white/70 text-lg leading-9 mt-8">

                SSC GD Constable examination is conducted by the Staff Selection Commission for recruitment in BSF, CISF, CRPF, ITBP, SSB, Assam Rifles and other Central Armed Police Forces.

              </p>

              <p className="text-white/70 text-lg leading-9 mt-6">

                Candidates should understand the latest SSC GD syllabus and exam pattern before starting preparation to maximize their score.

              </p>

            </div>
                        {/* SSC GD Syllabus Subjects */}
            <div className="mt-24">

              <h2 className="text-4xl font-bold">
                SSC GD Syllabus 2026
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-10">

                {[
                  {
                    title: "General Intelligence & Reasoning",
                    topics: [
                      "Analogy",
                      "Coding-Decoding",
                      "Series",
                      "Blood Relations",
                      "Classification",
                      "Puzzle",
                    ],
                  },

                  {
                    title: "General Knowledge & General Awareness",
                    topics: [
                      "History",
                      "Geography",
                      "Indian Polity",
                      "Economics",
                      "Current Affairs",
                      "Science",
                    ],
                  },

                  {
                    title: "Elementary Mathematics",
                    topics: [
                      "Percentage",
                      "Ratio & Proportion",
                      "Profit & Loss",
                      "Average",
                      "Time & Work",
                      "Mensuration",
                    ],
                  },

                  {
                    title: "English / Hindi",
                    topics: [
                      "Grammar",
                      "Vocabulary",
                      "Comprehension",
                      "Synonyms",
                      "Antonyms",
                      "Sentence Improvement",
                    ],
                  },

                ].map((item) => (

                  <div
                    key={item.title}
                    className="bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8"
                  >

                    <h3 className="text-2xl font-bold text-orange-300">
                      {item.title}
                    </h3>

                    <ul className="mt-6 space-y-3 text-white/70">

                      {item.topics.map((topic) => (

                        <li key={topic}>
                          ✅ {topic}
                        </li>

                      ))}

                    </ul>

                  </div>

                ))}

              </div>

            </div>

            {/* Preparation Tips */}
            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10 md:p-14">

              <h2 className="text-4xl font-bold">
                SSC GD Preparation Tips
              </h2>

              <div className="space-y-6 mt-10">

                {[
                  "Practice previous year question papers regularly.",
                  "Revise Mathematics formulas daily.",
                  "Read current affairs for General Awareness.",
                  "Improve speed and accuracy through mock tests.",
                  "Maintain physical fitness for PET & PST.",
                ].map((tip) => (

                  <div
                    key={tip}
                    className="bg-black/20 border border-orange-500/10 rounded-3xl p-6"
                  >

                    <p className="text-lg text-white/70">
                      ✅ {tip}
                    </p>

                  </div>

                ))}

              </div>

            </div>

            {/* Internal Links */}
            <div className="grid md:grid-cols-3 gap-8 mt-24">

              <Link
                href="/ssc-gd-exam-pattern"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">
                  SSC GD Exam Pattern
                </h3>

                <p className="text-white/50 mt-4">
                  Latest CBT pattern →
                </p>

              </Link>

              <Link
                href="/ssc-gd-cutoff"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">
                  SSC GD Cutoff
                </h3>

                <p className="text-white/50 mt-4">
                  Expected & previous year cutoff →
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
                  Salary & allowances →
                </p>

              </Link>

            </div>
                        {/* FAQ */}
            <div className="mt-24">

              <h2 className="text-4xl font-bold">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6 mt-10">

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    Is SSC GD syllabus difficult?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">
                    SSC GD syllabus is considered easy to moderate.
                    Regular practice, mock tests and physical preparation
                    help candidates score better.
                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    Does SSC GD have a physical test?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">
                    Yes. Candidates who qualify the CBT are called
                    for PET (Physical Efficiency Test) and PST
                    (Physical Standard Test).
                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    How many subjects are included in SSC GD syllabus?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">
                    SSC GD syllabus includes four subjects:
                    Reasoning, General Knowledge, Elementary Mathematics
                    and English/Hindi.
                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    Is there negative marking in SSC GD exam?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">
                    Yes. Negative marking is applicable as per the latest
                    SSC GD examination rules.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

      </main>

    </ToolContainer>

  );

}