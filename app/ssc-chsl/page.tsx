import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "../../components/Navbar";
import ToolContainer from "../../components/ToolContainer";

export const metadata: Metadata = {
  title:
    "SSC CHSL 2026 — Notification, Eligibility, Syllabus, Salary & Complete Guide",

  description:
    "Complete SSC CHSL 2026 guide including notification, eligibility, syllabus, exam pattern, salary, cutoff, books, admit card and preparation strategy.",

  keywords: [
    "SSC CHSL 2026",
    "SSC CHSL Notification",
    "SSC CHSL Syllabus",
    "SSC CHSL Salary",
    "SSC CHSL Exam Pattern",
    "SSC CHSL Cutoff",
    "SSC CHSL Books",
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

                SSC CHSL

                <span className="text-orange-400">
                  {" "}2026
                </span>

              </h1>

              <p className="text-white/60 text-lg md:text-xl leading-9 mt-8 max-w-4xl mx-auto">

                Complete SSC CHSL 2026 guide covering notification,
                eligibility, syllabus, exam pattern, salary, cutoff,
                books, admit card, exam dates, preparation strategy
                and important updates in one place.

              </p>

            </div>

            {/* Quick Stats */}

            <div className="grid md:grid-cols-4 gap-8 mt-20">

              {[
                {
                  title: "Qualification",
                  value: "12th Pass",
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
                  title: "Posts",
                  value: "LDC / JSA",
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
                What is SSC CHSL?
              </h2>

              <p className="text-white/70 text-lg leading-9 mt-8">

                SSC Combined Higher Secondary Level (CHSL)
                Examination is conducted by the Staff Selection
                Commission for recruitment to various
                clerical and data-entry related posts in
                Central Government departments and offices.

              </p>

              <p className="text-white/70 text-lg leading-9 mt-6">

                Through SSC CHSL, candidates can be recruited
                to posts such as Lower Divisional Clerk (LDC),
                Junior Secretariat Assistant (JSA) and
                Data Entry Operator (DEO), depending on the
                vacancies and eligibility requirements.

              </p>

            </div>

            {/* Highlights */}

            <div className="mt-24">

              <h2 className="text-4xl font-bold">
                SSC CHSL Highlights
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-10">

                {[
                  "12th pass level government examination",
                  "Recruitment for various Group C posts",
                  "Computer Based Examination",
                  "Clerical and data-entry job opportunities",
                  "Skill or typing test for applicable posts",
                  "Central Government employment",
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
                SSC CHSL Selection Process
              </h2>

              <div className="space-y-6 mt-10">

                {[
                  "Tier I Computer Based Examination",
                  "Tier II Examination",
                  "Skill Test or Typing Test, wherever applicable",
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

            {/* Eligibility */}

            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10 md:p-14">

              <h2 className="text-4xl font-bold">
                SSC CHSL Eligibility
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-10">

                <div className="bg-black/20 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-bold text-orange-300">
                    Educational Qualification
                  </h3>

                  <p className="text-white/60 leading-8 mt-5">

                    Candidates applying for SSC CHSL posts
                    generally need to have passed Class 12
                    or an equivalent examination from a
                    recognized board or institution. Specific
                    requirements may vary according to the post.

                  </p>

                </div>

                <div className="bg-black/20 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-bold text-orange-300">
                    Age Limit
                  </h3>

                  <p className="text-white/60 leading-8 mt-5">

                    The prescribed age limit depends on the
                    recruitment notification and post. Candidates
                    belonging to eligible reserved categories
                    receive age relaxation according to applicable
                    Government rules.

                  </p>

                </div>

              </div>

            </div>

            {/* Salary Overview */}

            <div className="mt-24">

              <h2 className="text-4xl font-bold">
                SSC CHSL Salary Overview
              </h2>

              <p className="text-white/70 text-lg leading-9 mt-8">

                SSC CHSL provides Central Government employment
                with salary according to the pay level of the
                selected post. Candidates may also receive
                applicable allowances and benefits according to
                Government rules and their place of posting.

              </p>

              <div className="grid md:grid-cols-3 gap-8 mt-10">

                {[
                  {
                    title: "Posts",
                    value: "LDC / JSA / DEO",
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
                SSC CHSL Important Dates
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
                      ["Notification Release", "Check Official Notification"],
                      ["Application Start", "Check Official Notification"],
                      ["Last Date to Apply", "Check Official Notification"],
                      ["Tier I Examination", "To Be Announced"],
                      ["Tier II Examination", "To Be Announced"],
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
                SSC CHSL Exam Pattern Overview
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-10">

                {[
                  "Tier I is conducted in Computer Based Examination mode.",
                  "The examination contains objective-type questions.",
                  "Tier II is conducted according to the applicable SSC scheme.",
                  "Negative marking is applicable as prescribed in the examination notice.",
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
                    What is SSC CHSL?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">

                    SSC CHSL is a national-level recruitment
                    examination conducted by the Staff Selection
                    Commission for various posts such as LDC,
                    JSA and DEO in Central Government departments
                    and offices.

                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    What is the minimum qualification for SSC CHSL?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">

                    Candidates generally need to have passed
                    Class 12 or an equivalent examination from
                    a recognized board. Specific requirements
                    may vary depending on the post.

                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    Which posts are available through SSC CHSL?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">

                    Major posts include Lower Divisional Clerk,
                    Junior Secretariat Assistant and Data Entry
                    Operator, subject to the vacancies and
                    requirements mentioned in the official
                    recruitment notification.

                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    Is there negative marking in SSC CHSL?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">

                    Yes. Negative marking is applicable according
                    to the marking scheme prescribed in the
                    respective SSC examination notice.

                  </p>

                </div>

              </div>

            </div>

            {/* Internal Links */}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">

              <Link
                href="/ssc-chsl-notification"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">
                  SSC CHSL Notification
                </h3>

                <p className="text-white/50 mt-4">
                  Vacancy & eligibility →
                </p>

              </Link>

              <Link
                href="/ssc-chsl-syllabus"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">
                  SSC CHSL Syllabus
                </h3>

                <p className="text-white/50 mt-4">
                  Complete syllabus →
                </p>

              </Link>

              <Link
                href="/ssc-chsl-exam-pattern"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">
                  SSC CHSL Exam Pattern
                </h3>

                <p className="text-white/50 mt-4">
                  Latest paper pattern →
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
                  Salary & allowances →
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
                  Previous year cutoff →
                </p>

              </Link>

              <Link
                href="/ssc-chsl-books"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">
                  SSC CHSL Books
                </h3>

                <p className="text-white/50 mt-4">
                  Best preparation books →
                </p>

              </Link>

            </div>

          </div>

        </section>

      </main>

    </ToolContainer>
  );
}