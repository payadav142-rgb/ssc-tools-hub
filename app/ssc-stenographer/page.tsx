import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "../../components/Navbar";
import ToolContainer from "../../components/ToolContainer";

export const metadata: Metadata = {
  title:
    "SSC Stenographer 2026 — Notification, Syllabus, Salary & Exam Pattern",

  description:
    "Complete SSC Stenographer 2026 guide including notification, syllabus, exam pattern, salary, cutoff, admit card and preparation tips.",

  keywords: [
    "SSC Stenographer 2026",
    "SSC Stenographer Notification",
    "SSC Stenographer Syllabus",
    "SSC Stenographer Salary",
    "SSC Stenographer Exam Pattern",
    "SSC Stenographer Cutoff",
    "SSC Stenographer Admit Card",
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

                SSC

                <span className="text-orange-400">
                  {" "}Stenographer 2026
                </span>

              </h1>

              <p className="text-white/60 text-lg md:text-xl leading-9 mt-8 max-w-4xl mx-auto">

                Complete SSC Stenographer 2026 guide including
                notification, eligibility, syllabus,
                exam pattern, salary,
                cutoff, admit card and preparation strategy.

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
                  title: "Mode",
                  value: "Online CBT",
                },

                {
                  title: "Skill Test",
                  value: "Yes",
                },

                {
                  title: "Authority",
                  value: "SSC",
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

                SSC Stenographer Overview

              </h2>

              <p className="text-white/70 text-lg leading-9 mt-8">

                SSC Stenographer is one of the most popular
                recruitment examinations conducted by the
                Staff Selection Commission for Grade C and
                Grade D stenographer posts in various
                ministries, departments and government organizations.

              </p>

              <p className="text-white/70 text-lg leading-9 mt-6">

                The recruitment process includes a Computer
                Based Examination followed by a Skill Test
                in stenography. Candidates who qualify both
                stages are considered for final selection.

              </p>

            </div>
                        {/* Grade C vs Grade D */}
            <div className="mt-24">

              <h2 className="text-4xl md:text-5xl font-bold">
                Grade C vs Grade D
              </h2>

              <div className="overflow-x-auto mt-10">

                <table className="w-full border border-orange-500/10 rounded-3xl overflow-hidden">

                  <thead className="bg-orange-500 text-black">

                    <tr>

                      <th className="px-6 py-4 text-left">
                        Feature
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
                      [
                        "Pay Level",
                        "Level 6",
                        "Level 4",
                      ],

                      [
                        "Posting",
                        "Ministries & Departments",
                        "Government Offices",
                      ],

                      [
                        "Skill Requirement",
                        "Higher",
                        "Standard",
                      ],

                      [
                        "Promotion",
                        "Faster Growth",
                        "Good Career Progression",
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

                        <td className="px-6 py-5">
                          {row[2]}
                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>

            </div>

            {/* Selection Process */}
            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10 md:p-14">

              <h2 className="text-4xl font-bold">
                SSC Stenographer Selection Process
              </h2>

              <div className="space-y-6 mt-10">

                {[
                  "Computer Based Examination (CBT)",
                  "Stenography Skill Test",
                  "Document Verification",
                  "Final Merit List",
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

            {/* Eligibility Highlights */}
            <div className="mt-24">

              <h2 className="text-4xl font-bold">
                Eligibility Highlights
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-10">

                {[
                  {
                    title: "Educational Qualification",
                    desc: "Candidates must have passed Class 12 or an equivalent examination from a recognized board.",
                  },

                  {
                    title: "Age Limit",
                    desc: "The age limit varies depending on the post and category as specified in the official notification.",
                  },

                  {
                    title: "Nationality",
                    desc: "Applicants must satisfy the nationality conditions prescribed by the Staff Selection Commission.",
                  },

                  {
                    title: "Skill Test",
                    desc: "Candidates qualifying the CBT must also pass the prescribed stenography skill test.",
                  },

                ].map((item, index) => (

                  <div
                    key={index}
                    className="bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8"
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

            {/* Why Choose SSC Stenographer */}
            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10 md:p-14">

              <h2 className="text-4xl font-bold">
                Why Choose SSC Stenographer?
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-10">

                {[
                  "Central Government Job",
                  "Good Salary & Allowances",
                  "Promotion Opportunities",
                  "Job Security",
                  "Work-Life Balance",
                  "Prestigious Government Departments",
                ].map((item) => (

                  <div
                    key={item}
                    className="bg-black/20 border border-orange-500/10 rounded-3xl p-6"
                  >

                    <p className="text-lg">
                      ✅ {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>
                        {/* Career Growth */}
            <div className="mt-24">

              <h2 className="text-4xl font-bold">
                Career Growth
              </h2>

              <p className="text-white/70 text-lg leading-9 mt-8">

                SSC Stenographer offers excellent career growth
                opportunities through departmental promotions,
                experience and performance. Candidates can move
                to higher administrative positions over time
                while enjoying attractive salary increments,
                government allowances and job security.

              </p>

              <div className="grid md:grid-cols-3 gap-8 mt-10">

                {[
                  "Regular Promotions",
                  "Higher Pay Levels",
                  "Leadership Opportunities",
                ].map((item) => (

                  <div
                    key={item}
                    className="bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8"
                  >

                    <p className="text-lg font-semibold">
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
                    What is SSC Stenographer?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">

                    SSC Stenographer is a national-level recruitment
                    examination conducted by the Staff Selection
                    Commission for Grade C and Grade D stenographer posts.

                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    Is there a skill test in SSC Stenographer?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">

                    Yes. Candidates who qualify the Computer Based
                    Examination must also clear the stenography
                    skill test for final selection.

                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    Which post is better, Grade C or Grade D?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">

                    Grade C generally offers higher pay and faster
                    career progression, while both posts provide
                    stable central government employment.

                  </p>

                </div>

              </div>

            </div>

            {/* Internal Links */}
            <div className="grid md:grid-cols-3 gap-8 mt-24">

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
                href="/ssc-stenographer-cutoff"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">
                  SSC Stenographer Cutoff
                </h3>

                <p className="text-white/50 mt-4">
                  Previous year & expected cutoff →
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
                  Download & exam details →
                </p>

              </Link>

            </div>

          </div>

        </section>

      </main>

    </ToolContainer>

  );

}