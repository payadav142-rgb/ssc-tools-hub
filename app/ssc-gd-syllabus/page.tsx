import type { Metadata } from "next";

import Navbar from "../../components/Navbar";
import ToolContainer from "../../components/ToolContainer";

export const metadata: Metadata = {

  title:
    "SSC GD Syllabus 2026 — Complete Exam Syllabus",

  description:
    "Check complete SSC GD syllabus 2026 including Reasoning, Mathematics, English/Hindi and General Knowledge with latest exam pattern.",

  keywords: [
    "SSC GD Syllabus 2026",
    "SSC GD Exam Pattern",
    "SSC GD Constable Syllabus",
    "SSC GD Preparation",
    "SSC GD Subjects",
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

                SSC GD 2026

              </p>

              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mt-5">

                SSC GD <span className="text-orange-400">Syllabus 2026</span>

              </h1>

              <p className="text-white/60 text-lg leading-8 mt-8 max-w-3xl mx-auto">

                Check complete SSC GD Constable syllabus 2026 including
                Reasoning, Mathematics,
                General Knowledge and English/Hindi topics.

              </p>

            </div>

            {/* Overview */}
            <div className="mt-20 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-8 md:p-12">

              <h2 className="text-4xl font-bold">

                SSC GD Syllabus Overview

              </h2>

              <p className="text-white/70 leading-8 text-lg mt-8">

                SSC GD Constable examination is conducted
                by Staff Selection Commission for recruitment
                in BSF, CISF, CRPF, ITBP, SSB and other forces.

              </p>

              <p className="text-white/70 leading-8 text-lg mt-6">

                Candidates preparing for SSC GD 2026 should understand
                the latest syllabus and exam pattern carefully
                to improve preparation and performance.

              </p>

            </div>

            {/* Subjects */}
            <div className="mt-24">

              <h2 className="text-4xl md:text-5xl font-bold">

                SSC GD Exam Subjects

              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-12">

                {[
                  {
                    title: "General Intelligence & Reasoning",
                    topics: [
                      "Analogy",
                      "Coding-Decoding",
                      "Series",
                      "Blood Relation",
                      "Puzzle",
                      "Classification",
                    ],
                  },

                  {
                    title: "Mathematics",
                    topics: [
                      "Percentage",
                      "Profit & Loss",
                      "Ratio",
                      "Average",
                      "Time & Distance",
                      "Mensuration",
                    ],
                  },

                  {
                    title: "English / Hindi",
                    topics: [
                      "Grammar",
                      "Vocabulary",
                      "Comprehension",
                      "Sentence Formation",
                      "Synonyms",
                      "Antonyms",
                    ],
                  },

                  {
                    title: "General Knowledge",
                    topics: [
                      "History",
                      "Geography",
                      "Polity",
                      "Current Affairs",
                      "Science",
                      "Sports",
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

                SSC GD Exam Pattern

              </h2>

              <p className="text-white/70 text-lg leading-8 mt-8">

                SSC GD examination consists of Computer Based Test,
                Physical Efficiency Test (PET),
                Physical Standard Test (PST) and Medical Examination.

              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-12">

                <div className="bg-black/20 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-bold">

                    Computer Based Test

                  </h3>

                  <p className="text-white/60 leading-8 mt-5">

                    Objective type questions from reasoning,
                    mathematics, language and general knowledge.

                  </p>

                </div>

                <div className="bg-black/20 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-bold">

                    Physical Test

                  </h3>

                  <p className="text-white/60 leading-8 mt-5">

                    Running, physical measurements
                    and medical fitness tests
                    are conducted after CBT.

                  </p>

                </div>

              </div>

            </div>

            {/* Tips */}
            <div className="mt-24">

              <h2 className="text-4xl font-bold">

                SSC GD Preparation Tips

              </h2>

              <div className="space-y-6 mt-10">

                {[
                  "Practice SSC GD mock tests regularly.",
                  "Improve physical fitness daily.",
                  "Focus on current affairs and GK preparation.",
                  "Revise formulas and reasoning shortcuts.",
                  "Solve previous year papers consistently.",
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

                    Is SSC GD syllabus difficult?

                  </h3>

                  <p className="text-white/60 leading-8 mt-4">

                    SSC GD syllabus is considered moderate.
                    Regular practice and physical preparation
                    can help candidates perform well.

                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">

                    Does SSC GD have physical test?

                  </h3>

                  <p className="text-white/60 leading-8 mt-4">

                    Yes, SSC GD recruitment process includes
                    Physical Efficiency Test and
                    Physical Standard Test.

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