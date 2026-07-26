import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "../../components/Navbar";
import ToolContainer from "../../components/ToolContainer";

export const metadata: Metadata = {
  title:
    "SSC Stenographer Syllabus 2026 — Complete Grade C & D Syllabus",

  description:
    "Check SSC Stenographer syllabus 2026 including General Intelligence, General Awareness and English Language with latest exam pattern.",

  keywords: [
    "SSC Stenographer Syllabus 2026",
    "SSC Stenographer Grade C Syllabus",
    "SSC Stenographer Grade D Syllabus",
    "SSC Stenographer Exam Pattern",
    "SSC Stenographer Preparation",
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
                  {" "}Syllabus 2026
                </span>

              </h1>

              <p className="text-white/60 text-lg md:text-xl leading-9 mt-8 max-w-4xl mx-auto">

                Check complete SSC Stenographer Grade C & Grade D
                syllabus including General Intelligence,
                General Awareness, English Language,
                skill test and preparation strategy.

              </p>

            </div>

            {/* Quick Cards */}
            <div className="grid md:grid-cols-4 gap-8 mt-20">

              {[
                {
                  title: "Subjects",
                  value: "3",
                },

                {
                  title: "Skill Test",
                  value: "Yes",
                },

                {
                  title: "Mode",
                  value: "Online CBT",
                },

                {
                  title: "Posts",
                  value: "Grade C & D",
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
                SSC Stenographer Syllabus Overview
              </h2>

              <p className="text-white/70 text-lg leading-9 mt-8">

                SSC Stenographer examination consists of
                a Computer Based Test followed by a
                qualifying Skill Test in stenography.
                Candidates preparing for Grade C and Grade D
                posts should understand the latest syllabus
                before starting their preparation.

              </p>

              <p className="text-white/70 text-lg leading-9 mt-6">

                The written examination evaluates candidates
                in General Intelligence & Reasoning,
                General Awareness and English Language.
                A good understanding of the syllabus helps
                improve accuracy and overall performance.

              </p>

            </div>
                        {/* Subject-wise Syllabus */}
            <div className="mt-24">

              <h2 className="text-4xl md:text-5xl font-bold">
                Subject-wise SSC Stenographer Syllabus
              </h2>

              <div className="grid md:grid-cols-3 gap-8 mt-12">

                {[
                  {
                    title: "General Intelligence & Reasoning",
                    topics: [
                      "Analogy",
                      "Coding-Decoding",
                      "Series",
                      "Classification",
                      "Blood Relations",
                      "Direction Sense",
                    ],
                  },

                  {
                    title: "General Awareness",
                    topics: [
                      "Current Affairs",
                      "History",
                      "Geography",
                      "Polity",
                      "Economics",
                      "Science",
                    ],
                  },

                  {
                    title: "English Language",
                    topics: [
                      "Grammar",
                      "Vocabulary",
                      "Synonyms & Antonyms",
                      "Reading Comprehension",
                      "Sentence Improvement",
                      "Error Spotting",
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

            {/* Skill Test */}
            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10 md:p-14">

              <h2 className="text-4xl font-bold">
                Stenography Skill Test
              </h2>

              <p className="text-white/70 text-lg leading-9 mt-8">

                Candidates qualifying the Computer Based Test
                are required to appear for a qualifying
                Stenography Skill Test. Dictation is provided
                at different speeds for Grade C and Grade D,
                followed by transcription on a computer within
                the prescribed time limit.

              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-10">

                <div className="bg-black/20 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-bold">
                    Grade C
                  </h3>

                  <p className="text-white/60 leading-8 mt-5">
                    Higher dictation speed and transcription
                    standards are required for Grade C posts.
                  </p>

                </div>

                <div className="bg-black/20 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-bold">
                    Grade D
                  </h3>

                  <p className="text-white/60 leading-8 mt-5">
                    Candidates must meet the prescribed
                    shorthand speed and transcription
                    requirements for Grade D.
                  </p>

                </div>

              </div>

            </div>

            {/* Exam Pattern */}
            <div className="mt-24">

              <h2 className="text-4xl font-bold">
                Written Exam Pattern
              </h2>

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
                      [
                        "General Intelligence & Reasoning",
                        "50",
                        "50",
                      ],

                      [
                        "General Awareness",
                        "50",
                        "50",
                      ],

                      [
                        "English Language",
                        "100",
                        "100",
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

            {/* Preparation Tips */}
            <div className="mt-24">

              <h2 className="text-4xl font-bold">
                Preparation Tips
              </h2>

              <div className="space-y-6 mt-10">

                {[
                  "Practice shorthand and typing regularly.",
                  "Revise English grammar every day.",
                  "Read newspapers for current affairs.",
                  "Solve previous year question papers.",
                  "Take mock tests to improve speed and accuracy.",
                ].map((tip, index) => (

                  <div
                    key={index}
                    className="bg-[#111827]/70 border border-orange-500/10 rounded-3xl p-6"
                  >

                    <p className="text-lg">
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
                    What are the subjects in SSC Stenographer syllabus?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">

                    The written examination includes General
                    Intelligence & Reasoning, General Awareness
                    and English Language.

                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    Is the skill test compulsory?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">

                    Yes. Candidates qualifying the Computer Based
                    Test must appear for the qualifying
                    Stenography Skill Test.

                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    Is the syllabus the same for Grade C and Grade D?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">

                    Yes. The written examination syllabus is
                    generally the same for both Grade C and
                    Grade D posts, while the skill test standards differ.

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
                href="/ssc-stenographer-cutoff"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">
                  SSC Stenographer Cutoff
                </h3>

                <p className="text-white/50 mt-4">
                  Previous year cutoff →
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