import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "../../components/Navbar";
import ToolContainer from "../../components/ToolContainer";

export const metadata: Metadata = {
  title:
    "SSC Stenographer Exam Pattern 2026 — Grade C & D Paper Pattern",

  description:
    "Check SSC Stenographer Exam Pattern 2026 including subjects, marking scheme, skill test, exam duration and selection process.",

  keywords: [
    "SSC Stenographer Exam Pattern 2026",
    "SSC Stenographer Paper Pattern",
    "SSC Stenographer Grade C Pattern",
    "SSC Stenographer Grade D Pattern",
    "SSC Stenographer Skill Test",
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
                  {" "}Exam Pattern 2026
                </span>

              </h1>

              <p className="text-white/60 text-lg md:text-xl leading-9 mt-8 max-w-4xl mx-auto">

                Check the latest SSC Stenographer Grade C & Grade D
                exam pattern including subjects, marks,
                exam duration, negative marking,
                skill test and selection process.

              </p>

            </div>

            {/* Quick Cards */}
            <div className="grid md:grid-cols-4 gap-8 mt-20">

              {[
                {
                  title: "Questions",
                  value: "200",
                },

                {
                  title: "Marks",
                  value: "200",
                },

                {
                  title: "Duration",
                  value: "2 Hours",
                },

                {
                  title: "Skill Test",
                  value: "Qualifying",
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
                SSC Stenographer Exam Overview
              </h2>

              <p className="text-white/70 text-lg leading-9 mt-8">

                The SSC Stenographer examination consists of a
                Computer Based Test followed by a qualifying
                Stenography Skill Test. Candidates must clear
                both stages to be considered for final selection.

              </p>

              <p className="text-white/70 text-lg leading-9 mt-6">

                The written examination tests General
                Intelligence & Reasoning, General Awareness
                and English Language through objective-type
                multiple-choice questions.

              </p>

            </div>
                        {/* Exam Pattern Table */}
            <div className="mt-24">

              <h2 className="text-4xl md:text-5xl font-bold">
                SSC Stenographer Paper Pattern
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

            {/* Important Highlights */}
            <div className="mt-24">

              <h2 className="text-4xl font-bold">
                Important Highlights
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-10">

                {[
                  "Objective type multiple-choice questions.",
                  "Total duration of 2 hours.",
                  "Computer Based Examination mode.",
                  "Negative marking is applicable.",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="bg-[#111827]/70 border border-orange-500/10 rounded-3xl p-6"
                  >

                    <p className="text-lg">
                      ✅ {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>

            {/* Negative Marking */}
            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10 md:p-14">

              <h2 className="text-4xl font-bold">
                Negative Marking
              </h2>

              <p className="text-white/70 text-lg leading-9 mt-8">

                SSC Stenographer examination includes
                negative marking for incorrect answers.
                Candidates should attempt questions
                carefully to maximize their final score
                and avoid unnecessary deductions.

              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-10">

                <div className="bg-black/20 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-bold">
                    Correct Answer
                  </h3>

                  <p className="text-white/60 leading-8 mt-5">

                    Marks are awarded for every correct
                    response according to the official
                    examination scheme.

                  </p>

                </div>

                <div className="bg-black/20 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-bold">
                    Wrong Answer
                  </h3>

                  <p className="text-white/60 leading-8 mt-5">

                    A penalty is applied for incorrect
                    answers as per the SSC notification.

                  </p>

                </div>

              </div>

            </div>

            {/* Skill Test */}
            <div className="mt-24">

              <h2 className="text-4xl font-bold">
                Stenography Skill Test
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-10">

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8">

                  <h3 className="text-2xl font-bold text-orange-300">
                    Grade C
                  </h3>

                  <p className="text-white/60 leading-8 mt-5">

                    Candidates are required to qualify
                    the prescribed shorthand dictation
                    and transcription standards for
                    Grade C posts.

                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8">

                  <h3 className="text-2xl font-bold text-orange-300">
                    Grade D
                  </h3>

                  <p className="text-white/60 leading-8 mt-5">

                    Grade D candidates must also
                    qualify the stenography skill test
                    according to SSC guidelines.

                  </p>

                </div>

              </div>

            </div>
                        {/* Selection Process */}
            <div className="mt-24">

              <h2 className="text-4xl font-bold">
                SSC Stenographer Selection Process
              </h2>

              <div className="space-y-6 mt-10">

                {[
                  "Computer Based Examination (CBT)",
                  "Stenography Skill Test (Qualifying)",
                  "Document Verification",
                  "Final Selection",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="bg-[#111827]/70 border border-orange-500/10 rounded-3xl p-6"
                  >

                    <p className="text-lg">
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
                    How many questions are asked in SSC Stenographer exam?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">

                    The Computer Based Test consists of
                    200 objective-type questions carrying
                    a total of 200 marks.

                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    Is there negative marking in SSC Stenographer?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">

                    Yes, negative marking is applicable for
                    incorrect answers as per the official
                    SSC examination rules.

                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    Is the skill test compulsory?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">

                    Yes. Candidates qualifying the written
                    examination must also clear the qualifying
                    stenography skill test.

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