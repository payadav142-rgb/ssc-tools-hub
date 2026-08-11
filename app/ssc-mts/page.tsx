import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "../../components/Navbar";
import ToolContainer from "../../components/ToolContainer";

export const metadata: Metadata = {
  title:
    "SSC MTS 2026 — Notification, Eligibility, Syllabus, Salary & Complete Guide",

  description:
    "Complete SSC MTS 2026 guide including notification, eligibility, syllabus, exam pattern, salary, cutoff, books, admit card and preparation strategy.",

  keywords: [
    "SSC MTS 2026",
    "SSC MTS Notification",
    "SSC MTS Syllabus",
    "SSC MTS Salary",
    "SSC MTS Exam Pattern",
    "SSC MTS Cutoff",
    "SSC MTS Books",
    "SSC MTS Eligibility",
  ],
};

export default function Page() {
  return (
    <ToolContainer>

      <Navbar />

      <main className="min-h-screen bg-[#0B0F19] text-white overflow-hidden relative">

        {/* Glow Effects */}

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="absolute top-[40%] right-0 w-[450px] h-[450px] bg-amber-400/10 blur-[120px] rounded-full pointer-events-none"></div>

        <section className="relative z-10 px-6 py-20">

          <div className="max-w-6xl mx-auto">

            {/* Hero */}

            <div className="text-center">

              <p className="text-orange-300 font-medium">
                Staff Selection Commission
              </p>

              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mt-5">

                SSC MTS

                <span className="text-orange-400">
                  {" "}2026
                </span>

              </h1>

              <p className="text-white/60 text-lg md:text-xl leading-9 mt-8 max-w-4xl mx-auto">

                Complete SSC MTS 2026 guide covering notification,
                eligibility, syllabus, exam pattern, salary, cutoff,
                books, admit card, important dates and preparation
                strategy in one place.

              </p>

            </div>

            {/* Quick Stats */}

            <div className="grid md:grid-cols-4 gap-8 mt-20">

              {[
                {
                  title: "Qualification",
                  value: "10th Pass",
                },

                {
                  title: "Level",
                  value: "Group C",
                },

                {
                  title: "Mode",
                  value: "Online",
                },

                {
                  title: "Exam",
                  value: "CBT",
                },

              ].map((item, index) => (

                <div
                  key={index}
                  className="bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/30 transition-all"
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
                What is SSC MTS?
              </h2>

              <p className="text-white/70 text-lg leading-9 mt-8">

                SSC Multi-Tasking Staff (MTS) Examination is
                conducted by the Staff Selection Commission for
                recruitment to various non-gazetted, non-ministerial
                Group C posts in Central Government offices and
                departments.

              </p>

              <p className="text-white/70 text-lg leading-9 mt-6">

                SSC MTS provides an opportunity for candidates
                who have completed their matriculation or
                equivalent qualification to apply for eligible
                government posts through the recruitment process
                prescribed by the Commission.

              </p>

            </div>

            {/* Highlights */}

            <div className="mt-24">

              <h2 className="text-4xl font-bold">
                SSC MTS Highlights
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-10">

                {[
                  "10th pass level government examination",
                  "Recruitment for Group C posts",
                  "Computer Based Examination",
                  "Central Government job opportunity",
                  "Multiple subjects are tested in the examination",
                  "Selection is based on the applicable SSC recruitment scheme",
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
                        {/* Selection Process */}

            <div className="mt-24">

              <h2 className="text-4xl font-bold">
                SSC MTS Selection Process
              </h2>

              <div className="space-y-6 mt-10">

                {[
                  "Computer Based Examination (CBE)",
                  "Session-I and Session-II of the Computer Based Examination",
                  "PET/PST for candidates applying for Havaldar",
                  "Document Verification",
                  "Final Selection and Post/State/UT/CCA Allocation",
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

            {/* Eligibility */}

            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10 md:p-14">

              <h2 className="text-4xl font-bold">
                SSC MTS Eligibility
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-10">

                <div className="bg-black/20 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-bold text-orange-300">
                    Educational Qualification
                  </h3>

                  <p className="text-white/60 leading-8 mt-5">

                    Candidates applying for SSC MTS are required
                    to have passed the Matriculation or equivalent
                    examination from a recognized board or
                    institution by the prescribed cut-off date
                    mentioned in the recruitment notification.

                  </p>

                </div>

                <div className="bg-black/20 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-bold text-orange-300">
                    Age Limit
                  </h3>

                  <p className="text-white/60 leading-8 mt-5">

                    The applicable age limit depends on the post
                    and vacancy. SSC may have separate age groups
                    for MTS vacancies, while eligible reserved
                    categories receive relaxation according to
                    applicable Government rules.

                  </p>

                </div>

              </div>

            </div>

            {/* Salary Overview */}

            <div className="mt-24">

              <h2 className="text-4xl font-bold">
                SSC MTS Salary Overview
              </h2>

              <p className="text-white/70 text-lg leading-9 mt-8">

                SSC MTS posts offer Central Government employment
                with salary based on the applicable pay level.
                Selected candidates are also entitled to
                applicable allowances and benefits according to
                Government rules and their place of posting.

              </p>

              <div className="grid md:grid-cols-3 gap-8 mt-10">

                {[
                  {
                    title: "Post",
                    value: "MTS",
                  },

                  {
                    title: "Pay",
                    value: "Pay Level Based",
                  },

                  {
                    title: "Benefits",
                    value: "Allowances",
                  },

                ].map((item, index) => (

                  <div
                    key={index}
                    className="bg-[#111827]/70 border border-orange-500/10 rounded-3xl p-8"
                  >

                    <h3 className="text-3xl font-bold text-orange-300">
                      {item.value}
                    </h3>

                    <p className="text-white/60 mt-4">
                      {item.title}
                    </p>

                  </div>

                ))}

              </div>

            </div>

            {/* Important Dates */}

            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10 md:p-14">

              <h2 className="text-4xl font-bold">
                SSC MTS Important Dates
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
                        "Check Official Notification",
                      ],

                      [
                        "Application Start",
                        "Check Official Notification",
                      ],

                      [
                        "Last Date to Apply",
                        "Check Official Notification",
                      ],

                      [
                        "Computer Based Examination",
                        "To Be Announced",
                      ],

                      [
                        "Result / Final Selection",
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

            {/* Exam Pattern Overview */}

            <div className="mt-24">

              <h2 className="text-4xl font-bold">
                SSC MTS Exam Pattern Overview
              </h2>

              <p className="text-white/70 text-lg leading-9 mt-8">

                The Computer Based Examination is conducted in
                two mandatory sessions. Session-I covers
                Numerical and Mathematical Ability along with
                Reasoning Ability and Problem Solving, while
                Session-II covers General Awareness and English
                Language and Comprehension.

              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-10">

                {[
                  "Session-I includes Numerical and Mathematical Ability.",
                  "Session-I also includes Reasoning Ability and Problem Solving.",
                  "Session-II includes General Awareness.",
                  "Session-II includes English Language and Comprehension.",
                  "Both sessions of the Computer Based Examination are mandatory.",
                  "Havaldar candidates may have to qualify PET/PST.",
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
                    What is SSC MTS?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">

                    SSC MTS is a recruitment examination conducted
                    by the Staff Selection Commission for various
                    Group C non-gazetted, non-ministerial posts in
                    Central Government offices and departments.

                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    What is the educational qualification for SSC MTS?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">

                    Candidates generally need to have passed the
                    Matriculation or equivalent examination from
                    a recognized board by the prescribed cut-off
                    date mentioned in the official notification.

                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    Is SSC MTS conducted online?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">

                    Yes. The SSC MTS Computer Based Examination
                    is conducted in online mode and is divided
                    into the prescribed examination sessions.

                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    Is PET/PST required for SSC MTS?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">

                    PET/PST is applicable to candidates being
                    considered for Havaldar posts. The applicable
                    physical standards and requirements are
                    specified in the official SSC notification.

                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    Is there negative marking in SSC MTS?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">

                    Negative marking is applicable according to
                    the examination session and marking scheme
                    prescribed by SSC in the relevant notification.

                  </p>

                </div>

              </div>

            </div>

            {/* Internal Links */}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">

              <Link
                href="/ssc-mts-notification"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">
                  SSC MTS Notification
                </h3>

                <p className="text-white/50 mt-4">
                  Vacancy & eligibility →
                </p>

              </Link>

              <Link
                href="/ssc-mts-syllabus"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">
                  SSC MTS Syllabus
                </h3>

                <p className="text-white/50 mt-4">
                  Complete syllabus →
                </p>

              </Link>

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
                href="/ssc-mts-salary"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">
                  SSC MTS Salary
                </h3>

                <p className="text-white/50 mt-4">
                  Salary & allowances →
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
                  Previous year cutoff →
                </p>

              </Link>

              <Link
                href="/ssc-mts-books"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">
                  SSC MTS Books
                </h3>

                <p className="text-white/50 mt-4">
                  Best preparation books →
                </p>

              </Link>

              <Link
                href="/ssc-mts-admit-card"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">
                  SSC MTS Admit Card
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