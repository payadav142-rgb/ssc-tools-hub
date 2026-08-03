import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "../../components/Navbar";
import ToolContainer from "../../components/ToolContainer";

export const metadata: Metadata = {
  title:
    "SSC CGL 2026 — Notification, Eligibility, Syllabus, Salary & Complete Guide",

  description:
    "Complete SSC CGL 2026 guide including notification, eligibility, syllabus, exam pattern, salary, cutoff, books, admit card and preparation strategy.",

  keywords: [
    "SSC CGL 2026",
    "SSC CGL Notification",
    "SSC CGL Syllabus",
    "SSC CGL Salary",
    "SSC CGL Exam Pattern",
    "SSC CGL Cutoff",
    "SSC CGL Books",
  ],
};

export default function Page() {
  return (
    <ToolContainer>

      <Navbar />

      <main className="min-h-screen bg-[#0B0F19] text-white overflow-hidden relative">

        {/* Glow */}
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

                SSC CGL

                <span className="text-orange-400">

                  {" "}2026

                </span>

              </h1>

              <p className="text-white/60 text-lg md:text-xl leading-9 mt-8 max-w-4xl mx-auto">

                Complete SSC CGL 2026 guide covering notification,
                eligibility, syllabus, exam pattern, salary,
                cutoff, books, admit card, exam dates,
                preparation strategy and every important update
                in one place.

              </p>

            </div>

            {/* Quick Stats */}

            <div className="grid md:grid-cols-4 gap-8 mt-20">

              {[
                {
                  title: "Qualification",
                  value: "Graduate",
                },

                {
                  title: "Selection",
                  value: "Tier I & II",
                },

                {
                  title: "Mode",
                  value: "Online",
                },

                {
                  title: "Salary",
                  value: "₹25K+",
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

                What is SSC CGL?

              </h2>

              <p className="text-white/70 text-lg leading-9 mt-8">

                SSC Combined Graduate Level (SSC CGL) Examination
                is one of the most popular government recruitment
                examinations conducted every year by the Staff
                Selection Commission. It recruits graduates for
                various Group B and Group C posts in ministries,
                departments and government organizations.

              </p>

              <p className="text-white/70 text-lg leading-9 mt-6">

                Through SSC CGL, candidates can get prestigious
                posts like Income Tax Inspector, CBI Inspector,
                Assistant Section Officer, Excise Inspector,
                Auditor, Accountant, Junior Statistical Officer
                and many other central government jobs.

              </p>

            </div>

            {/* Highlights */}

            <div className="mt-24">

              <h2 className="text-4xl font-bold">

                SSC CGL Highlights

              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-10">

                {[
                  "Graduate level examination",
                  "Recruitment for Group B & Group C posts",
                  "Computer Based Examination",
                  "Excellent salary with allowances",
                  "Promotion opportunities",
                  "Jobs across India",
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

                SSC CGL Selection Process

              </h2>

              <div className="space-y-6 mt-10">

                {[
                  "Tier I Computer Based Examination",
                  "Tier II Computer Based Examination",
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

            {/* Eligibility */}

            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10 md:p-14">

              <h2 className="text-4xl font-bold">

                SSC CGL Eligibility

              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-10">

                <div className="bg-black/20 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-bold text-orange-300">

                    Educational Qualification

                  </h3>

                  <p className="text-white/60 leading-8 mt-5">

                    Candidates must possess a Bachelor's Degree
                    from a recognized university. Certain posts
                    require specific educational qualifications
                    such as Statistics, Mathematics or Economics.

                  </p>

                </div>

                <div className="bg-black/20 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-bold text-orange-300">

                    Age Limit

                  </h3>

                  <p className="text-white/60 leading-8 mt-5">

                    The age limit varies according to the post,
                    generally ranging between 18 and 32 years.
                    Reserved category candidates receive age
                    relaxation as per Government rules.

                  </p>

                </div>

              </div>

            </div>

            {/* Salary Overview */}

            <div className="mt-24">

              <h2 className="text-4xl font-bold">

                SSC CGL Salary Overview

              </h2>

              <p className="text-white/70 text-lg leading-9 mt-8">

                SSC CGL offers attractive salaries under different
                pay levels along with Dearness Allowance (DA),
                House Rent Allowance (HRA), Transport Allowance
                (TA), medical facilities, pension benefits and
                several other government perks.

              </p>

              <div className="grid md:grid-cols-3 gap-8 mt-10">

                {[
                  {
                    title: "Pay Level",
                    value: "Level 4–7",
                  },

                  {
                    title: "Starting Salary",
                    value: "₹25K+",
                  },

                  {
                    title: "Allowances",
                    value: "DA + HRA + TA",
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

                Important Dates

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
                      ["Notification Release", "To Be Announced"],
                      ["Application Start", "To Be Announced"],
                      ["Last Date to Apply", "To Be Announced"],
                      ["Tier I Exam", "To Be Announced"],
                      ["Tier II Exam", "To Be Announced"],
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

                Exam Pattern Overview

              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-10">

                {[
                  "Tier I consists of objective-type questions.",
                  "Tier II includes multiple papers depending on the post.",
                  "Computer Based Examination mode.",
                  "Negative marking is applicable in specific papers.",
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

                    What is SSC CGL?

                  </h3>

                  <p className="text-white/60 leading-8 mt-4">

                    SSC Combined Graduate Level (CGL) Examination
                    is conducted by the Staff Selection Commission
                    to recruit candidates for various Group B and
                    Group C posts in Central Government departments.

                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">

                    What is the minimum qualification for SSC CGL?

                  </h3>

                  <p className="text-white/60 leading-8 mt-4">

                    Candidates must possess a Bachelor's Degree
                    from a recognized university. Some posts
                    require additional subject-specific qualifications.

                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">

                    Is there negative marking in SSC CGL?

                  </h3>

                  <p className="text-white/60 leading-8 mt-4">

                    Yes. Negative marking is applicable in
                    specific papers according to the latest
                    SSC examination scheme.

                  </p>

                </div>

              </div>

            </div>

            {/* Internal Links */}

            <div className="grid md:grid-cols-3 gap-8 mt-24">

              <Link
                href="/ssc-cgl-notification"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">

                  SSC CGL Notification

                </h3>

                <p className="text-white/50 mt-4">

                  Vacancy & eligibility →

                </p>

              </Link>

              <Link
                href="/ssc-cgl-syllabus"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">

                  SSC CGL Syllabus

                </h3>

                <p className="text-white/50 mt-4">

                  Complete syllabus →

                </p>

              </Link>

              <Link
                href="/ssc-cgl-exam-pattern"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">

                  SSC CGL Exam Pattern

                </h3>

                <p className="text-white/50 mt-4">

                  Latest paper pattern →

                </p>

              </Link>

              <Link
                href="/ssc-cgl-salary"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">

                  SSC CGL Salary

                </h3>

                <p className="text-white/50 mt-4">

                  Salary & allowances →

                </p>

              </Link>

              <Link
                href="/ssc-cgl-cutoff"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">

                  SSC CGL Cutoff

                </h3>

                <p className="text-white/50 mt-4">

                  Previous year cutoff →

                </p>

              </Link>

              <Link
                href="/ssc-cgl-books"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">

                  SSC CGL Books

                </h3>

                <p className="text-white/50 mt-4">

                  Best books →

                </p>

              </Link>

              <Link
                href="/ssc-cgl-admit-card"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">

                  SSC CGL Admit Card

                </h3>

                <p className="text-white/50 mt-4">

                  Download admit card →

                </p>

              </Link>

              <Link
                href="/ssc-cgl-exam-date"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">

                  SSC CGL Exam Date

                </h3>

                <p className="text-white/50 mt-4">

                  Important schedule →

                </p>

              </Link>

              <Link
                href="/ssc-cgl-job-profile"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">

                  SSC CGL Job Profile

                </h3>

                <p className="text-white/50 mt-4">

                  Roles & responsibilities →

                </p>

              </Link>

              <Link
                href="/ssc-cgl-post-preference"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">

                  SSC CGL Post Preference

                </h3>

                <p className="text-white/50 mt-4">

                  Best post list →

                </p>

              </Link>

            </div>

          </div>

        </section>

      </main>

    </ToolContainer>

  );

}