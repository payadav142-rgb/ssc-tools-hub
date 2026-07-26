import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "../../components/Navbar";
import ToolContainer from "../../components/ToolContainer";

export const metadata: Metadata = {
  title:
    "SSC Stenographer Salary 2026 — Grade C & Grade D Salary Structure",

  description:
    "Check SSC Stenographer Salary 2026 including Grade C & Grade D pay scale, in-hand salary, allowances, job profile and promotion.",

  keywords: [
    "SSC Stenographer Salary 2026",
    "SSC Stenographer Grade C Salary",
    "SSC Stenographer Grade D Salary",
    "SSC Stenographer In Hand Salary",
    "SSC Stenographer Job Profile",
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
                  {" "}Salary 2026
                </span>

              </h1>

              <p className="text-white/60 text-lg md:text-xl leading-9 mt-8 max-w-4xl mx-auto">

                Check SSC Stenographer Grade C & Grade D
                salary structure, pay level,
                in-hand salary, allowances,
                job profile and promotion opportunities.

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
                  title: "Pay Level",
                  value: "4-6",
                },

                {
                  title: "Allowances",
                  value: "DA + HRA",
                },

                {
                  title: "Promotion",
                  value: "Available",
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
                SSC Stenographer Salary Overview
              </h2>

              <p className="text-white/70 text-lg leading-9 mt-8">

                SSC Stenographer Grade C and Grade D
                employees receive salary according to
                the 7th Central Pay Commission.
                Along with basic pay, employees are
                entitled to several government allowances.

              </p>

              <p className="text-white/70 text-lg leading-9 mt-6">

                The exact in-hand salary depends on
                posting location, pay level,
                applicable allowances and deductions.
                Government employees also receive
                excellent career growth opportunities.

              </p>

            </div>
                        {/* Salary Structure */}
            <div className="mt-24">

              <h2 className="text-4xl md:text-5xl font-bold">
                SSC Stenographer Salary Structure
              </h2>

              <div className="overflow-x-auto mt-10">

                <table className="w-full border border-orange-500/10 rounded-3xl overflow-hidden">

                  <thead className="bg-orange-500 text-black">

                    <tr>

                      <th className="px-6 py-4 text-left">
                        Post
                      </th>

                      <th className="px-6 py-4 text-left">
                        Pay Level
                      </th>

                      <th className="px-6 py-4 text-left">
                        Basic Pay
                      </th>

                    </tr>

                  </thead>

                  <tbody>

                    {[
                      [
                        "Grade C",
                        "Level 6",
                        "₹35,400",
                      ],

                      [
                        "Grade D",
                        "Level 4",
                        "₹25,500",
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

            {/* Allowances */}
            <div className="mt-24">

              <h2 className="text-4xl font-bold">
                Salary Allowances
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-10">

                {[
                  "Dearness Allowance (DA)",
                  "House Rent Allowance (HRA)",
                  "Transport Allowance (TA)",
                  "Medical Benefits",
                  "Leave Travel Concession (LTC)",
                  "National Pension Scheme (NPS)",
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

            {/* In-Hand Salary */}
            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10 md:p-14">

              <h2 className="text-4xl font-bold">
                In-Hand Salary
              </h2>

              <p className="text-white/70 text-lg leading-9 mt-8">

                The in-hand salary of SSC Stenographer
                varies depending on the city of posting,
                HRA category, applicable allowances and
                statutory deductions. Employees also receive
                additional benefits provided under
                Central Government service rules.

              </p>

            </div>

            {/* Job Profile */}
            <div className="mt-24">

              <h2 className="text-4xl font-bold">
                Job Profile
              </h2>

              <div className="space-y-6 mt-10">

                {[
                  "Take shorthand dictation during meetings.",
                  "Transcribe dictation into official documents.",
                  "Maintain confidential government records.",
                  "Assist senior officers in administrative work.",
                  "Prepare reports, letters and office correspondence.",
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
                        {/* Promotion */}
            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10 md:p-14">

              <h2 className="text-4xl font-bold">
                Career Growth & Promotion
              </h2>

              <p className="text-white/70 text-lg leading-9 mt-8">

                SSC Stenographers receive regular promotions
                based on departmental rules, experience,
                performance and vacancies. With time,
                employees can move to higher administrative
                positions with better pay and responsibilities.

              </p>

            </div>

            {/* FAQ */}
            <div className="mt-24">

              <h2 className="text-4xl font-bold">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6 mt-10">

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    What is the basic pay of SSC Stenographer Grade D?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">

                    SSC Stenographer Grade D is placed in
                    Pay Level 4 with a basic pay starting
                    from ₹25,500 under the 7th CPC.

                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    Does SSC Stenographer receive allowances?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">

                    Yes. Employees receive DA, HRA,
                    Transport Allowance and other
                    government benefits.

                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    Is there promotion in SSC Stenographer?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">

                    Yes. SSC Stenographers have good
                    promotion opportunities through
                    departmental career progression.

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