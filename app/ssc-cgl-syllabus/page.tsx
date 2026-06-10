import type { Metadata } from "next";

import Navbar from "../../components/Navbar";
import ToolContainer from "../../components/ToolContainer";

export const metadata: Metadata = {

  title:
    "SSC CGL Syllabus 2026 — Tier 1 & Tier 2 Complete Syllabus",

  description:
    "Check complete SSC CGL syllabus 2026 for Tier 1 and Tier 2 including Quantitative Aptitude, English, Reasoning and General Awareness.",

  keywords: [
    "SSC CGL Syllabus 2026",
    "SSC CGL Tier 1 Syllabus",
    "SSC CGL Tier 2 Syllabus",
    "SSC CGL Exam Pattern",
    "SSC CGL Preparation",
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

                SSC CGL 2026

              </p>

              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mt-5">

                SSC CGL <span className="text-orange-400">Syllabus 2026</span>

              </h1>

              <p className="text-white/60 text-lg leading-8 mt-8 max-w-3xl mx-auto">

                Check complete SSC CGL syllabus for Tier 1 and Tier 2 exams
                including Quantitative Aptitude, English Language,
                General Awareness and Reasoning topics.

              </p>

            </div>

            {/* Overview */}
            <div className="mt-20 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-8 md:p-12">

              <h2 className="text-4xl font-bold">

                SSC CGL Syllabus Overview

              </h2>

              <p className="text-white/70 leading-8 text-lg mt-8">

                SSC Combined Graduate Level (CGL) examination is conducted
                every year by Staff Selection Commission for recruitment
                to various Group B and Group C posts.

              </p>

              <p className="text-white/70 leading-8 text-lg mt-6">

                Candidates preparing for SSC CGL 2026 should understand
                the latest syllabus and exam pattern carefully to build
                an effective preparation strategy.

              </p>

            </div>

            {/* Tier 1 */}
            <div className="mt-24">

              <h2 className="text-4xl md:text-5xl font-bold">

                SSC CGL Tier 1 Syllabus

              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-12">

                {[
                  {
                    title: "General Intelligence & Reasoning",
                    topics: [
                      "Analogy",
                      "Coding-Decoding",
                      "Blood Relations",
                      "Direction Test",
                      "Puzzle",
                      "Number Series",
                    ],
                  },

                  {
                    title: "Quantitative Aptitude",
                    topics: [
                      "Percentage",
                      "Profit & Loss",
                      "Time & Work",
                      "Algebra",
                      "Geometry",
                      "Trigonometry",
                    ],
                  },

                  {
                    title: "English Language",
                    topics: [
                      "Reading Comprehension",
                      "Vocabulary",
                      "Synonyms",
                      "Antonyms",
                      "Idioms & Phrases",
                      "Grammar",
                    ],
                  },

                  {
                    title: "General Awareness",
                    topics: [
                      "History",
                      "Geography",
                      "Polity",
                      "Economics",
                      "Science",
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

            {/* Tier 2 */}
            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10 md:p-14">

              <h2 className="text-4xl md:text-5xl font-bold">

                SSC CGL Tier 2 Syllabus

              </h2>

              <p className="text-white/70 text-lg leading-8 mt-8">

                SSC CGL Tier 2 examination contains multiple papers including
                Mathematical Abilities, English Language,
                Reasoning, Computer Knowledge and Data Entry Speed Test.

              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-12">

                <div className="bg-black/20 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-bold">

                    Mathematical Abilities

                  </h3>

                  <p className="text-white/60 leading-8 mt-5">

                    Algebra, Geometry, Mensuration,
                    Statistics, Trigonometry,
                    Number System and Arithmetic.

                  </p>

                </div>

                <div className="bg-black/20 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-bold">

                    English Language

                  </h3>

                  <p className="text-white/60 leading-8 mt-5">

                    Vocabulary, Grammar,
                    Reading Comprehension,
                    Sentence Correction
                    and Writing Ability.

                  </p>

                </div>

              </div>

            </div>

            {/* Preparation Tips */}
            <div className="mt-24">

              <h2 className="text-4xl font-bold">

                SSC CGL Preparation Tips

              </h2>

              <div className="space-y-6 mt-10">

                {[
                  "Solve previous year question papers regularly.",
                  "Practice mock tests for speed and accuracy.",
                  "Focus on revision and short notes.",
                  "Improve current affairs preparation daily.",
                  "Maintain consistency and proper time management.",
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

                    Is SSC CGL syllabus difficult?

                  </h3>

                  <p className="text-white/60 leading-8 mt-4">

                    SSC CGL syllabus is moderate in difficulty.
                    Consistent practice and revision can help candidates
                    score well in the examination.

                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">

                    Does SSC CGL syllabus change every year?

                  </h3>

                  <p className="text-white/60 leading-8 mt-4">

                    Major syllabus topics usually remain similar,
                    but candidates should always check the latest
                    official SSC notification.

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