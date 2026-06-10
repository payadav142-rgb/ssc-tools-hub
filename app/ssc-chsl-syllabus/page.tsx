import type { Metadata } from "next";

import Navbar from "../../components/Navbar";
import ToolContainer from "../../components/ToolContainer";

export const metadata: Metadata = {

  title:
    "SSC CHSL Syllabus 2026 — Tier 1 & Tier 2 Complete Syllabus",

  description:
    "Check complete SSC CHSL syllabus 2026 for Tier 1 and Tier 2 exam including English, Quantitative Aptitude, Reasoning and General Awareness.",

  keywords: [
    "SSC CHSL Syllabus 2026",
    "SSC CHSL Tier 1 Syllabus",
    "SSC CHSL Tier 2 Syllabus",
    "SSC CHSL Exam Pattern",
    "SSC CHSL Preparation",
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

                SSC CHSL 2026

              </p>

              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mt-5">

                SSC CHSL <span className="text-orange-400">Syllabus 2026</span>

              </h1>

              <p className="text-white/60 text-lg leading-8 mt-8 max-w-3xl mx-auto">

                Check complete SSC CHSL syllabus for Tier 1 and Tier 2 exams
                including English Language, Quantitative Aptitude,
                General Intelligence and General Awareness.

              </p>

            </div>

            {/* Overview */}
            <div className="mt-20 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-8 md:p-12">

              <h2 className="text-4xl font-bold">

                SSC CHSL Syllabus Overview

              </h2>

              <p className="text-white/70 leading-8 text-lg mt-8">

                SSC Combined Higher Secondary Level (CHSL) examination
                is conducted by Staff Selection Commission for recruitment
                to posts like LDC, JSA and DEO.

              </p>

              <p className="text-white/70 leading-8 text-lg mt-6">

                Candidates preparing for SSC CHSL 2026 should understand
                the latest syllabus and exam pattern carefully to improve
                preparation strategy and score.

              </p>

            </div>

            {/* Tier 1 */}
            <div className="mt-24">

              <h2 className="text-4xl md:text-5xl font-bold">

                SSC CHSL Tier 1 Syllabus

              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-12">

                {[
                  {
                    title: "General Intelligence",
                    topics: [
                      "Analogy",
                      "Coding-Decoding",
                      "Classification",
                      "Series",
                      "Blood Relations",
                      "Puzzle",
                    ],
                  },

                  {
                    title: "Quantitative Aptitude",
                    topics: [
                      "Percentage",
                      "Profit & Loss",
                      "Ratio",
                      "Algebra",
                      "Geometry",
                      "Mensuration",
                    ],
                  },

                  {
                    title: "English Language",
                    topics: [
                      "Grammar",
                      "Vocabulary",
                      "Comprehension",
                      "Error Detection",
                      "Idioms & Phrases",
                      "Sentence Improvement",
                    ],
                  },

                  {
                    title: "General Awareness",
                    topics: [
                      "History",
                      "Geography",
                      "Polity",
                      "Economics",
                      "Current Affairs",
                      "Science",
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

            {/* Tier 2 */}
            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10 md:p-14">

              <h2 className="text-4xl md:text-5xl font-bold">

                SSC CHSL Tier 2 Syllabus

              </h2>

              <p className="text-white/70 text-lg leading-8 mt-8">

                SSC CHSL Tier 2 examination includes descriptive paper,
                essay writing, letter writing and skill test depending
                on the post applied by candidates.

              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-12">

                <div className="bg-black/20 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-bold">

                    Descriptive Paper

                  </h3>

                  <p className="text-white/60 leading-8 mt-5">

                    Essay writing, letter writing,
                    application writing and basic
                    communication skills.

                  </p>

                </div>

                <div className="bg-black/20 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-bold">

                    Skill Test

                  </h3>

                  <p className="text-white/60 leading-8 mt-5">

                    Typing speed test and data entry
                    skill test for specific SSC CHSL posts.

                  </p>

                </div>

              </div>

            </div>

            {/* Tips */}
            <div className="mt-24">

              <h2 className="text-4xl font-bold">

                SSC CHSL Preparation Tips

              </h2>

              <div className="space-y-6 mt-10">

                {[
                  "Solve previous year papers regularly.",
                  "Practice typing daily for skill test.",
                  "Improve grammar and vocabulary.",
                  "Read current affairs consistently.",
                  "Attempt mock tests weekly.",
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

                    Is SSC CHSL syllabus easy?

                  </h3>

                  <p className="text-white/60 leading-8 mt-4">

                    SSC CHSL syllabus is considered moderate
                    and can be completed with proper practice
                    and revision strategy.

                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">

                    Does SSC CHSL have typing test?

                  </h3>

                  <p className="text-white/60 leading-8 mt-4">

                    Yes, SSC CHSL includes typing or skill test
                    for specific posts like DEO and LDC.

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