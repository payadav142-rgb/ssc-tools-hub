import type { Metadata } from "next";

import Link from "next/link";

export const metadata: Metadata = {

  title:
    "SSC CGL Exam Pattern 2026 — Tier 1 & Tier 2 Pattern",

  description:
    "Check SSC CGL exam pattern 2026 including Tier 1, Tier 2, marking scheme and subject details.",

};

export default function Page() {

  return (

    <main className="min-h-screen bg-[#0B0F19] text-white overflow-hidden relative">

      {/* Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="absolute top-[40%] right-0 w-[400px] h-[400px] bg-amber-400/10 blur-[120px] rounded-full pointer-events-none"></div>

      <section className="relative z-10 px-6 py-20">

        <div className="max-w-5xl mx-auto">

          {/* Hero */}
          <div>

            <p className="text-orange-300 font-medium">

              SSC CGL 2026

            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mt-5">

              SSC CGL Exam Pattern 2026

            </h1>

            <p className="text-white/60 text-xl leading-9 mt-8 max-w-4xl">

              Check SSC CGL Tier 1 and Tier 2 exam pattern,
              marking scheme, subjects, exam duration
              and preparation details.

            </p>

          </div>

          {/* Quick Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">

            {[
              {
                title: "Tier 1",
                desc: "Objective Examination",
              },

              {
                title: "Tier 2",
                desc: "Advanced Level Paper",
              },

              {
                title: "Negative Marking",
                desc: "Applicable",
              },

            ].map((item, index) => (

              <div
                key={index}
                className="bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8"
              >

                <h2 className="text-3xl font-bold text-orange-300">

                  {item.title}

                </h2>

                <p className="text-white/60 mt-4 text-lg">

                  {item.desc}

                </p>

              </div>

            ))}

          </div>

          {/* Tier 1 */}
          <div className="mt-24 bg-[#111827]/70 border border-orange-500/10 rounded-[40px] p-8 md:p-12">

            <h2 className="text-4xl font-bold">

              SSC CGL Tier 1 Exam Pattern

            </h2>

            <p className="text-white/70 text-lg leading-9 mt-8">

              Tier 1 examination consists of objective type multiple choice questions.
              The exam is conducted online and includes four sections.

            </p>

            <div className="space-y-6 mt-10">

              {[
                "General Intelligence & Reasoning",
                "General Awareness",
                "Quantitative Aptitude",
                "English Comprehension",
              ].map((item) => (

                <div
                  key={item}
                  className="bg-black/30 border border-orange-500/10 rounded-3xl p-6"
                >

                  <p className="text-xl font-medium">

                    {item}

                  </p>

                </div>

              ))}

            </div>

            {/* Tier 2 */}
            <h2 className="text-4xl font-bold mt-20">

              SSC CGL Tier 2 Exam Pattern

            </h2>

            <p className="text-white/70 text-lg leading-9 mt-8">

              Tier 2 examination is more advanced and includes mathematical abilities,
              reasoning, English language and computer knowledge sections.

            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-10">

              {[
                "Mathematical Abilities",
                "Reasoning & General Intelligence",
                "English Language",
                "Computer Knowledge Test",
              ].map((item) => (

                <div
                  key={item}
                  className="bg-black/30 border border-orange-500/10 rounded-3xl p-6"
                >

                  <p className="text-lg font-medium">

                    {item}

                  </p>

                </div>

              ))}

            </div>

            {/* Marking Scheme */}
            <h2 className="text-4xl font-bold mt-20">

              SSC CGL Marking Scheme

            </h2>

            <div className="space-y-6 mt-10">

              {[
                "Each correct answer carries positive marks.",
                "Negative marking is applicable for wrong answers.",
                "Candidates should avoid excessive guessing.",
                "Time management plays important role in scoring well.",
              ].map((item) => (

                <div
                  key={item}
                  className="bg-black/30 border border-orange-500/10 rounded-3xl p-6"
                >

                  <p className="text-lg leading-8">

                    {item}

                  </p>

                </div>

              ))}

            </div>

            {/* FAQ */}
            <h2 className="text-4xl font-bold mt-20">

              Frequently Asked Questions

            </h2>

            <div className="space-y-6 mt-10">

              <div className="bg-black/30 border border-orange-500/10 rounded-3xl p-6">

                <h3 className="text-2xl font-semibold">

                  Is SSC CGL exam online?

                </h3>

                <p className="text-white/60 mt-4 leading-8">

                  Yes, SSC CGL Tier 1 and Tier 2 examinations are conducted online.

                </p>

              </div>

              <div className="bg-black/30 border border-orange-500/10 rounded-3xl p-6">

                <h3 className="text-2xl font-semibold">

                  Is there negative marking in SSC CGL?

                </h3>

                <p className="text-white/60 mt-4 leading-8">

                  Yes, negative marking is applicable in SSC CGL examination.

                </p>

              </div>

            </div>

          </div>

          {/* Internal Links */}
          <div className="grid md:grid-cols-3 gap-8 mt-24">

            {[
              {
                title: "SSC CGL Syllabus",
                link: "/ssc-cgl-syllabus",
              },

              {
                title: "SSC CGL Salary",
                link: "/ssc-cgl-salary",
              },

              {
                title: "SSC CGL Cutoff",
                link: "/ssc-cgl-cutoff",
              },

            ].map((item) => (

              <Link
                key={item.title}
                href={item.link}
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">

                  {item.title}

                </h3>

                <p className="text-white/50 mt-4">

                  Read More →

                </p>

              </Link>

            ))}

          </div>

        </div>

      </section>

    </main>

  );

}