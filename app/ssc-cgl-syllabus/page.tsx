import type { Metadata } from "next";

import Link from "next/link";

export const metadata: Metadata = {

  title:
    "SSC CGL Syllabus 2026 — Tier 1 & Tier 2 Complete Syllabus",

  description:
    "Check complete SSC CGL syllabus 2026 for Tier 1 and Tier 2 exam preparation with subject-wise topics.",

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

              SSC CGL Syllabus 2026

            </h1>

            <p className="text-white/60 text-xl leading-9 mt-8 max-w-4xl">

              Complete SSC CGL Tier 1 and Tier 2 syllabus
              with subject-wise topics, preparation strategy
              and latest exam pattern.

            </p>

          </div>

          {/* Tier Sections */}
          <div className="space-y-10 mt-20">

            {[
              {
                title: "General Intelligence & Reasoning",
                topics:
                  "Analogy, Coding-Decoding, Blood Relation, Series, Classification, Puzzle and Logical Reasoning.",
              },

              {
                title: "Quantitative Aptitude",
                topics:
                  "Percentage, Ratio, Algebra, Geometry, Trigonometry, Profit & Loss, SI-CI and Data Interpretation.",
              },

              {
                title: "English Language",
                topics:
                  "Grammar, Vocabulary, Error Detection, Synonyms, Antonyms, Cloze Test and Comprehension.",
              },

              {
                title: "General Awareness",
                topics:
                  "History, Geography, Polity, Economy, Science, Current Affairs and Static GK.",
              },

            ].map((item) => (

              <div
                key={item.title}
                className="bg-[#111827]/80 border border-orange-500/10 rounded-[36px] p-8 md:p-10"
              >

                <h2 className="text-3xl md:text-4xl font-bold">

                  {item.title}

                </h2>

                <p className="text-white/65 text-lg leading-8 mt-6">

                  {item.topics}

                </p>

              </div>

            ))}

          </div>

          {/* Tier 2 */}
          <div className="mt-24 bg-[#111827]/70 border border-orange-500/10 rounded-[40px] p-8 md:p-12">

            <h2 className="text-4xl font-bold">

              SSC CGL Tier 2 Syllabus

            </h2>

            <p className="text-white/70 text-lg leading-9 mt-8">

              SSC CGL Tier 2 examination includes advanced level Quantitative Aptitude, English Language, Computer Knowledge and Data Entry Speed Test.

            </p>

            <p className="text-white/70 text-lg leading-9 mt-8">

              Candidates should focus on mock tests, previous year questions and revision strategy for better performance in Tier 2 examination.

            </p>

          </div>

          {/* Preparation Tips */}
          <div className="mt-24">

            <h2 className="text-4xl font-bold">

              SSC CGL Preparation Tips

            </h2>

            <div className="grid md:grid-cols-2 gap-8 mt-10">

              {[
                "Practice previous year questions daily.",
                "Focus on mock tests and revision.",
                "Improve speed and accuracy regularly.",
                "Create a proper study timetable.",
              ].map((tip) => (

                <div
                  key={tip}
                  className="bg-[#111827]/70 border border-orange-500/10 rounded-3xl p-6"
                >

                  <p className="text-lg leading-8">

                    {tip}

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

              <div className="bg-[#111827]/70 border border-orange-500/10 rounded-3xl p-6">

                <h3 className="text-2xl font-semibold">

                  Is SSC CGL syllabus difficult?

                </h3>

                <p className="text-white/60 mt-4 leading-8">

                  SSC CGL syllabus is moderate and requires regular practice and revision.

                </p>

              </div>

              <div className="bg-[#111827]/70 border border-orange-500/10 rounded-3xl p-6">

                <h3 className="text-2xl font-semibold">

                  Does SSC CGL syllabus change every year?

                </h3>

                <p className="text-white/60 mt-4 leading-8">

                  Major syllabus changes are rare but candidates should always check latest official notification.

                </p>

              </div>

            </div>

          </div>

          {/* Internal Links */}
          <div className="grid md:grid-cols-3 gap-8 mt-24">

            {[
              {
                title: "SSC CGL Salary",
                link: "/ssc-cgl-salary",
              },

              {
                title: "SSC CGL Cutoff",
                link: "/ssc-cgl-cutoff",
              },

              {
                title: "SSC CGL Exam Pattern",
                link: "/ssc-cgl-exam-pattern",
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