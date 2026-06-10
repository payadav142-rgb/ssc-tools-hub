import type { Metadata } from "next";

import Navbar from "../../components/Navbar";
import ToolContainer from "../../components/ToolContainer";

export const metadata: Metadata = {

  title:
    "SSC MTS Syllabus 2026 — Complete Exam Syllabus",

  description:
    "Check complete SSC MTS syllabus 2026 including Reasoning, Numerical Aptitude, English and General Awareness with latest exam pattern.",

  keywords: [
    "SSC MTS Syllabus 2026",
    "SSC MTS Exam Pattern",
    "SSC MTS Preparation",
    "SSC MTS Paper 1 Syllabus",
    "SSC MTS Havaldar Syllabus",
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

          <div className="max-w-5xl mx-auto">

            {/* Hero */}
            <div className="text-center">

              <p className="text-orange-300 font-medium">

                SSC MTS 2026

              </p>

              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mt-5">

                SSC MTS <span className="text-orange-400">Syllabus 2026</span>

              </h1>

              <p className="text-white/60 text-lg leading-8 mt-8 max-w-3xl mx-auto">

                Check complete SSC MTS syllabus 2026 including
                Numerical Aptitude, Reasoning,
                English Language and General Awareness topics.

              </p>

            </div>

            {/* Overview */}
            <div className="mt-20 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-8 md:p-12">

              <h2 className="text-4xl font-bold">

                SSC MTS Syllabus Overview

              </h2>

              <p className="text-white/70 leading-8 text-lg mt-8">

                SSC Multi Tasking Staff (MTS) examination is conducted
                by Staff Selection Commission for recruitment
                to non-gazetted and non-ministerial posts.

              </p>

              <p className="text-white/70 leading-8 text-lg mt-6">

                Candidates preparing for SSC MTS 2026 should understand
                the latest syllabus and exam pattern properly
                to improve preparation strategy and performance.

              </p>

            </div>

            {/* Subjects */}
            <div className="mt-24">

              <h2 className="text-4xl md:text-5xl font-bold">

                SSC MTS Exam Subjects

              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-12">

                {[
                  {
                    title: "Numerical Aptitude",
                    topics: [
                      "Percentage",
                      "Profit & Loss",
                      "Ratio & Proportion",
                      "Average",
                      "Simple Interest",
                      "Mensuration",
                    ],
                  },

                  {
                    title: "Reasoning Ability",
                    topics: [
                      "Analogy",
                      "Classification",
                      "Coding-Decoding",
                      "Series",
                      "Blood Relation",
                      "Puzzle",
                    ],
                  },

                  {
                    title: "English Language",
                    topics: [
                      "Grammar",
                      "Vocabulary",
                      "Sentence Correction",
                      "Comprehension",
                      "Synonyms",
                      "Antonyms",
                    ],
                  },

                  {
                    title: "General Awareness",
                    topics: [
                      "History",
                      "Geography",
                      "Polity",
                      "Science",
                      "Economics",
                      "Current Affairs",
                    ],
                  },

                ].map((item, index) => (

                  <div
                    key={index}
                    className="bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8"
                  >

                    <h3 className="text-2xl font-bold text-orange-300">

                      {item.title}

                    </h3>

                    <ul className="mt-6 space-y-4 text-white/70">

                      {item.topics.map((topic, i) => (

                        <li key={i}>

                          • {topic}

                        </li>

                      ))}

                    </ul>

                  </div>

                ))}

              </div>

            </div>

            {/* Exam Pattern */}
            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10 md:p-14">

              <h2 className="text-4xl md:text-5xl font-bold">

                SSC MTS Exam Pattern

              </h2>

              <p className="text-white/70 text-lg leading-8 mt-8">

                SSC MTS examination consists of objective type questions
                from multiple subjects including reasoning,
                numerical aptitude, English and general awareness.

              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-12">

                <div className="bg-black/20 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-bold">

                    Session 1

                  </h3>

                  <p className="text-white/60 leading-8 mt-5">

                    Numerical Aptitude and
                    Reasoning Ability based questions
                    are included in first session.

                  </p>

                </div>

                <div className="bg-black/20 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-bold">

                    Session 2

                  </h3>

                  <p className="text-white/60 leading-8 mt-5">

                    English Language and
                    General Awareness questions
                    are included in second session.

                  </p>

                </div>

              </div>

            </div>

            {/* Tips */}
            <div className="mt-24">

              <h2 className="text-4xl font-bold">

                SSC MTS Preparation Tips

              </h2>

              <div className="space-y-6 mt-10">

                {[
                  "Solve SSC MTS previous year papers regularly.",
                  "Focus on speed and accuracy improvement.",
                  "Practice mock tests weekly.",
                  "Improve current affairs preparation daily.",
                  "Revise formulas and short notes consistently.",
                ].map((tip, index) => (

                  <div
                    key={index}
                    className="bg-[#111827]/70 border border-orange-500/10 rounded-3xl p-6"
                  >

                    <p className="text-white/70 text-lg">

                      ✅ {tip}

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

                    Is SSC MTS syllabus difficult?

                  </h3>

                  <p className="text-white/60 leading-8 mt-4">

                    SSC MTS syllabus is considered easy to moderate.
                    Regular practice and revision can help candidates
                    score well in the examination.

                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">

                    Does SSC MTS have negative marking?

                  </h3>

                  <p className="text-white/60 leading-8 mt-4">

                    Yes, negative marking is applicable
                    in some sections of SSC MTS examination.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

      </main>

    </ToolContainer>

  );

}