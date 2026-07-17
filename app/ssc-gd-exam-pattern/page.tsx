import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "../../components/Navbar";
import ToolContainer from "../../components/ToolContainer";

export const metadata: Metadata = {
  title: "SSC GD Exam Pattern 2026 — Complete Paper Pattern",

  description:
    "Check SSC GD Exam Pattern 2026 including CBT paper pattern, marking scheme, physical test, subjects, exam duration and selection process.",
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

                SSC GD{" "}

                <span className="text-orange-400">
                  Exam Pattern 2026
                </span>

              </h1>

              <p className="text-white/60 text-lg md:text-xl leading-9 mt-8 max-w-4xl mx-auto">

                Check complete SSC GD Constable Exam Pattern,
                CBT paper pattern, marking scheme, physical
                test, exam duration and latest selection process.

              </p>

            </div>

            {/* Quick Cards */}

            <div className="grid md:grid-cols-4 gap-8 mt-20">

              {[
                {
                  title: "Questions",
                  value: "80",
                },

                {
                  title: "Marks",
                  value: "160",
                },

                {
                  title: "Duration",
                  value: "60 Minutes",
                },

                {
                  title: "Negative",
                  value: "0.25 Mark",
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
                SSC GD Exam Pattern Overview
              </h2>

              <p className="text-white/70 text-lg leading-9 mt-8">

                SSC GD Constable Examination is conducted by the
                Staff Selection Commission for recruitment into
                CAPFs, SSF, Assam Rifles and Narcotics Control Bureau.

              </p>

              <p className="text-white/70 text-lg leading-9 mt-6">

                The recruitment process consists of Computer Based
                Examination, Physical Efficiency Test (PET),
                Physical Standard Test (PST), Medical Examination
                and Document Verification.

              </p>

            </div>
                        {/* CBT Exam Pattern */}
            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-8 md:p-12">

              <h2 className="text-4xl font-bold">
                SSC GD CBT Exam Pattern 2026
              </h2>

              <p className="text-white/70 text-lg leading-9 mt-6">
                SSC GD Computer Based Test (CBT) consists of
                objective-type multiple-choice questions. The paper
                contains 80 questions carrying 160 marks.
              </p>

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
                      ["General Intelligence & Reasoning", "20", "40"],
                      ["General Knowledge & General Awareness", "20", "40"],
                      ["Elementary Mathematics", "20", "40"],
                      ["English / Hindi", "20", "40"],
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

            {/* Physical Test */}
            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-8 md:p-12">

              <h2 className="text-4xl font-bold">
                SSC GD Physical Test (PET/PST)
              </h2>

              <p className="text-white/70 text-lg leading-9 mt-6">
                Candidates who qualify the CBT are called for
                Physical Efficiency Test (PET) and Physical
                Standard Test (PST). These stages are qualifying
                in nature.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-10">

                {[
                  {
                    title: "Male Candidates",
                    desc: "Running and physical standards are checked according to SSC GD guidelines.",
                  },
                  {
                    title: "Female Candidates",
                    desc: "Female candidates must also qualify PET and PST as prescribed by SSC.",
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
                SSC GD Marking Scheme
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-10">

                {[
                  "Each correct answer carries 2 marks.",
                  "Negative marking is applicable for incorrect answers.",
                  "Unattempted questions carry no penalty.",
                  "Maintain accuracy along with speed.",
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
                    How many questions are asked in SSC GD CBT?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">
                    SSC GD CBT consists of 80 objective-type questions carrying a total of 160 marks.
                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    Is there negative marking in SSC GD Exam?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">
                    Yes, negative marking is applicable for every incorrect answer as per the latest SSC GD notification.
                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    Is PET/PST compulsory in SSC GD?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">
                    Yes, candidates who qualify the CBT must also clear the Physical Efficiency Test (PET) and Physical Standard Test (PST).
                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    What is the duration of the SSC GD CBT?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">
                    The SSC GD Computer Based Test is conducted for 60 minutes.
                  </p>

                </div>

              </div>

            </div>

            {/* Internal Links */}
            <div className="grid md:grid-cols-3 gap-8 mt-24">

              <Link
                href="/ssc-gd-syllabus"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">
                  SSC GD Syllabus
                </h3>

                <p className="text-white/50 mt-4">
                  Complete topic-wise syllabus →
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