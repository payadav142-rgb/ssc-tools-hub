import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "../../components/Navbar";
import ToolContainer from "../../components/ToolContainer";

export const metadata: Metadata = {
  title:
    "SSC Stenographer Notification 2026 — Vacancy, Eligibility & Exam Date",

  description:
    "Check SSC Stenographer Notification 2026 including vacancy, eligibility, age limit, application dates, exam pattern and selection process.",

  keywords: [
    "SSC Stenographer Notification 2026",
    "SSC Stenographer Vacancy",
    "SSC Stenographer Eligibility",
    "SSC Stenographer Apply Online",
    "SSC Stenographer Exam Date",
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
                  {" "}Notification 2026
                </span>

              </h1>

              <p className="text-white/60 text-lg md:text-xl leading-9 mt-8 max-w-4xl mx-auto">

                Check SSC Stenographer Notification 2026 including
                vacancy, eligibility, age limit,
                application process,
                exam date and selection process.

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
                  title: "Qualification",
                  value: "12th Pass",
                },

                {
                  title: "Mode",
                  value: "Online",
                },

                {
                  title: "Skill Test",
                  value: "Yes",
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

                SSC Stenographer Notification Overview

              </h2>

              <p className="text-white/70 text-lg leading-9 mt-8">

                SSC releases the Stenographer notification every year
                for recruitment to Grade C and Grade D posts in
                various ministries, departments and organizations
                under the Government of India.

              </p>

              <p className="text-white/70 text-lg leading-9 mt-6">

                The notification contains complete information about
                vacancies, eligibility criteria, age limit,
                application dates, exam pattern,
                syllabus and selection process.

              </p>

            </div>
                        {/* Important Dates */}
            <div className="mt-24">

              <h2 className="text-4xl md:text-5xl font-bold">
                SSC Stenographer Important Dates
              </h2>

              <div className="overflow-x-auto mt-10">

                <table className="w-full border border-orange-500/10 rounded-3xl overflow-hidden">

                  <thead className="bg-orange-500 text-black">

                    <tr>

                      <th className="px-6 py-4 text-left">
                        Event
                      </th>

                      <th className="px-6 py-4 text-left">
                        Status
                      </th>

                    </tr>

                  </thead>

                  <tbody>

                    {[
                      [
                        "Notification Release",
                        "To Be Announced",
                      ],

                      [
                        "Online Application",
                        "To Be Announced",
                      ],

                      [
                        "Last Date to Apply",
                        "To Be Announced",
                      ],

                      [
                        "Admit Card",
                        "Before Exam",
                      ],

                      [
                        "Computer Based Test",
                        "To Be Announced",
                      ],

                    ].map((row) => (

                      <tr
                        key={row[0]}
                        className="border-t border-orange-500/10"
                      >

                        <td className="px-6 py-5">
                          {row[0]}
                        </td>

                        <td className="px-6 py-5 text-orange-300 font-semibold">
                          {row[1]}
                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>

            </div>

            {/* Vacancy Details */}
            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10 md:p-14">

              <h2 className="text-4xl font-bold">
                SSC Stenographer Vacancy 2026
              </h2>

              <p className="text-white/70 text-lg leading-9 mt-8">

                SSC releases Grade C and Grade D vacancies through the
                official notification. The number of vacancies varies
                every year depending on the requirements of different
                ministries and government departments.

              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-10">

                {[
                  "Grade C Vacancies",
                  "Grade D Vacancies",
                  "Category-wise Reservation",
                  "Department-wise Allocation",
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

            {/* Eligibility */}
            <div className="mt-24">

              <h2 className="text-4xl font-bold">
                SSC Stenographer Eligibility
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-10">

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8">

                  <h3 className="text-2xl font-bold text-orange-300">
                    Educational Qualification
                  </h3>

                  <p className="text-white/60 leading-8 mt-5">

                    Candidates must have passed Class 12 or an
                    equivalent examination from a recognized board
                    before the prescribed cut-off date.

                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8">

                  <h3 className="text-2xl font-bold text-orange-300">
                    Nationality
                  </h3>

                  <p className="text-white/60 leading-8 mt-5">

                    Applicants must satisfy the nationality criteria
                    specified by the Staff Selection Commission in
                    the official notification.

                  </p>

                </div>

              </div>

            </div>

            {/* Age Limit */}
            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10 md:p-14">

              <h2 className="text-4xl font-bold">
                Age Limit
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-10">

                <div className="bg-black/20 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-bold">
                    Grade C
                  </h3>

                  <p className="text-white/60 leading-8 mt-5">

                    Generally 18 to 30 years. Age relaxation is
                    applicable for reserved categories as per
                    Government rules.

                  </p>

                </div>

                <div className="bg-black/20 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-bold">
                    Grade D
                  </h3>

                  <p className="text-white/60 leading-8 mt-5">

                    Generally 18 to 27 years. Reserved category
                    candidates receive age relaxation according
                    to SSC guidelines.

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
                  "Stenography Skill Test",
                  "Document Verification",
                  "Final Merit List",
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

            {/* Application Process */}
            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10 md:p-14">

              <h2 className="text-4xl font-bold">
                How to Apply
              </h2>

              <div className="space-y-6 mt-10">

                {[
                  "Visit the official SSC website.",
                  "Complete One-Time Registration if required.",
                  "Fill the SSC Stenographer application form.",
                  "Upload photograph and signature.",
                  "Pay the application fee (if applicable).",
                  "Submit the form and save the confirmation page.",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="bg-black/20 border border-orange-500/10 rounded-3xl p-6"
                  >

                    <p className="text-white/70 text-lg">
                      {index + 1}. {item}
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
                    When will SSC Stenographer Notification 2026 be released?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">
                    The notification release date will be announced by SSC through its official examination calendar and notification.
                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    What is the minimum qualification for SSC Stenographer?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">
                    Candidates must have passed Class 12 or an equivalent examination from a recognized board.
                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    Is there a skill test in SSC Stenographer?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">
                    Yes. Candidates who qualify the Computer Based Test must also clear the stenography skill test.
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