import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "../../components/Navbar";
import ToolContainer from "../../components/ToolContainer";

export const metadata: Metadata = {
  title: "SSC MTS Exam Pattern 2026 — Complete Paper Pattern",

  description:
    "Check SSC MTS Exam Pattern 2026 including paper pattern, marking scheme, session-wise exam pattern, subjects, duration and negative marking.",
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
                SSC MTS 2026
              </p>

              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mt-5">

                SSC MTS{" "}

                <span className="text-orange-400">
                  Exam Pattern 2026
                </span>

              </h1>

              <p className="text-white/60 text-lg md:text-xl leading-9 mt-8 max-w-4xl mx-auto">

                Check complete SSC MTS Exam Pattern,
                session-wise paper pattern, marking scheme,
                subjects, exam duration and latest selection process.

              </p>

            </div>

            {/* Quick Cards */}

            <div className="grid md:grid-cols-4 gap-8 mt-20">

              {[
                {
                  title: "Sessions",
                  value: "2",
                },

                {
                  title: "Questions",
                  value: "90",
                },

                {
                  title: "Duration",
                  value: "90 Min",
                },

                {
                  title: "Negative",
                  value: "Session 2",
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
                SSC MTS Exam Pattern Overview
              </h2>

              <p className="text-white/70 text-lg leading-9 mt-8">

                SSC Multi Tasking Staff (MTS) Examination is
                conducted by the Staff Selection Commission
                for recruitment of Multi Tasking Staff and
                Havaldar posts.

              </p>

              <p className="text-white/70 text-lg leading-9 mt-6">

                The Computer Based Examination consists of
                two sessions. Candidates should understand
                the latest paper pattern to improve their
                preparation strategy.

              </p>

            </div>
                        {/* Paper Pattern */}
            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-8 md:p-12">

              <h2 className="text-4xl font-bold">
                SSC MTS Paper Pattern 2026
              </h2>

              <p className="text-white/70 text-lg leading-9 mt-6">
                SSC MTS Computer Based Examination consists of
                two sessions. Both sessions are conducted on the
                same day. Session 1 has no negative marking,
                while Session 2 includes negative marking.
              </p>

              <div className="overflow-x-auto mt-10">

                <table className="w-full border border-orange-500/10 rounded-3xl overflow-hidden">

                  <thead className="bg-orange-500 text-black">

                    <tr>

                      <th className="px-6 py-4 text-left">
                        Session
                      </th>

                      <th className="px-6 py-4 text-left">
                        Subjects
                      </th>

                      <th className="px-6 py-4 text-left">
                        Questions
                      </th>

                    </tr>

                  </thead>

                  <tbody>

                    {[
                      [
                        "Session 1",
                        "Numerical Aptitude & Reasoning",
                        "40",
                      ],

                      [
                        "Session 2",
                        "English & General Awareness",
                        "50",
                      ],

                    ].map((row) => (

                      <tr
                        key={row[0]}
                        className="border-t border-orange-500/10"
                      >

                        <td className="px-6 py-5 font-semibold text-orange-300">
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

            {/* Session Details */}
            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-8 md:p-12">

              <h2 className="text-4xl font-bold">
                Session-wise Exam Pattern
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-10">

                {[
                  {
                    title: "Session 1",
                    desc: "Includes Numerical Aptitude and Reasoning. No negative marking is applicable.",
                  },

                  {
                    title: "Session 2",
                    desc: "Includes English Language and General Awareness. Negative marking is applicable.",
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

            {/* Marking Scheme */}
            <div className="mt-24">

              <h2 className="text-4xl font-bold">
                SSC MTS Marking Scheme
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-10">

                {[
                  "Session 1 has no negative marking.",
                  "Session 2 includes negative marking for incorrect answers.",
                  "Each correct answer carries marks as prescribed by SSC.",
                  "Focus on both speed and accuracy during the examination.",
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
                        {/* Marking Scheme */}
            <div className="mt-24">

              <h2 className="text-4xl font-bold">
                SSC MTS Marking Scheme
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-10">

                {[
                  "Session 1 has no negative marking.",
                  "Session 2 has negative marking for incorrect answers.",
                  "Each correct answer carries the prescribed marks.",
                  "Candidates should focus on both speed and accuracy.",
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
                    Is SSC MTS conducted online?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">
                    Yes, SSC MTS examination is conducted in online CBT mode.
                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    How many sessions are there in SSC MTS?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">
                    SSC MTS examination consists of Session 1 and Session 2.
                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    Is there negative marking in SSC MTS?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">
                    Yes, negative marking is applicable in Session 2 as per SSC rules.
                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    What is the duration of SSC MTS exam?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">
                    Both sessions are conducted separately with the duration prescribed by SSC.
                  </p>

                </div>

              </div>

            </div>

            {/* Internal Links */}
            <div className="grid md:grid-cols-3 gap-8 mt-24">

              <Link
                href="/ssc-mts-syllabus"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">
                  SSC MTS Syllabus
                </h3>

                <p className="text-white/50 mt-4">
                  Complete topic-wise syllabus →
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
                  Expected & previous year cutoff →
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