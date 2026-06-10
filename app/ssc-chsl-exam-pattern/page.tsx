import type { Metadata } from "next";

import Navbar from "../../components/Navbar";
import ToolContainer from "../../components/ToolContainer";

export const metadata: Metadata = {

  title:
    "SSC CHSL Exam Pattern 2026 — Tier 1 & Tier 2 Pattern",

  description:
    "Check SSC CHSL exam pattern 2026 including Tier 1, Tier 2, marking scheme and subject-wise paper pattern.",

};

export default function Page() {

  return (

    <ToolContainer>

      <Navbar />

      <main className="min-h-screen bg-[#0B0F19] text-white overflow-hidden relative">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="absolute top-[40%] right-0 w-[400px] h-[400px] bg-amber-400/10 blur-[120px] rounded-full pointer-events-none"></div>

        <section className="relative z-10 px-6 py-20">

          <div className="max-w-5xl mx-auto">

            <div className="text-center">

              <p className="text-orange-300 font-medium">

                SSC CHSL 2026

              </p>

              <h1 className="text-5xl md:text-7xl font-extrabold mt-5">

                SSC CHSL
                <span className="text-orange-400">
                  {" "}Exam Pattern 2026
                </span>

              </h1>

              <p className="text-white/60 text-lg leading-8 mt-8 max-w-3xl mx-auto">

                Check SSC CHSL Tier 1 and Tier 2 exam pattern,
                subjects, marking scheme and negative marking details.

              </p>

            </div>

            <div className="mt-20 grid md:grid-cols-2 gap-8">

              {[
                {
                  title: "General Intelligence",
                  desc: "Reasoning, analogy, coding-decoding and puzzles.",
                },

                {
                  title: "Quantitative Aptitude",
                  desc: "Arithmetic, algebra, percentage and geometry.",
                },

                {
                  title: "English Language",
                  desc: "Grammar, vocabulary and comprehension.",
                },

                {
                  title: "General Awareness",
                  desc: "Current affairs, history, polity and science.",
                },

              ].map((item, index) => (

                <div
                  key={index}
                  className="bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8"
                >

                  <h2 className="text-2xl font-bold text-orange-300">

                    {item.title}

                  </h2>

                  <p className="text-white/60 mt-5 leading-7">

                    {item.desc}

                  </p>

                </div>

              ))}

            </div>

            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10">

              <h2 className="text-4xl font-bold">

                SSC CHSL Selection Process

              </h2>

              <div className="space-y-6 mt-10">

                {[
                  "Tier 1 Computer Based Examination",
                  "Tier 2 Descriptive / Skill Test",
                  "Document Verification Process",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="bg-black/20 border border-orange-500/10 rounded-3xl p-6"
                  >

                    <p className="text-white/70 text-lg">

                      ✅ {item}

                    </p>

                  </div>

                ))}

              </div>

            </div>

            <div className="mt-24">

              <h2 className="text-4xl font-bold">

                Frequently Asked Questions

              </h2>

              <div className="space-y-6 mt-10">

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">

                    Does SSC CHSL have negative marking?

                  </h3>

                  <p className="text-white/60 mt-4 leading-8">

                    Yes, SSC CHSL examination includes negative marking.

                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">

                    Is SSC CHSL exam easy?

                  </h3>

                  <p className="text-white/60 mt-4 leading-8">

                    SSC CHSL is considered moderate in difficulty level.

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