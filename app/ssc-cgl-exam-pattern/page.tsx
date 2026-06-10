import type { Metadata } from "next";

import Navbar from "../../components/Navbar";
import ToolContainer from "../../components/ToolContainer";

export const metadata: Metadata = {

  title:
    "SSC CGL Exam Pattern 2026 — Tier 1 & Tier 2 Pattern",

  description:
    "Check complete SSC CGL exam pattern 2026 including Tier 1, Tier 2, marking scheme, negative marking and subject-wise pattern.",

  keywords: [
    "SSC CGL Exam Pattern 2026",
    "SSC CGL Tier 1 Pattern",
    "SSC CGL Tier 2 Pattern",
    "SSC CGL Negative Marking",
    "SSC CGL Marking Scheme",
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

                SSC CGL <span className="text-orange-400">Exam Pattern 2026</span>

              </h1>

              <p className="text-white/60 text-lg leading-8 mt-8 max-w-3xl mx-auto">

                Check complete SSC CGL Tier 1 and Tier 2 exam pattern,
                marking scheme, subjects,
                exam stages and negative marking details.

              </p>

            </div>

            {/* Overview */}
            <div className="mt-20 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10 md:p-14">

              <h2 className="text-4xl font-bold">

                SSC CGL Exam Overview

              </h2>

              <p className="text-white/70 text-lg leading-8 mt-8">

                SSC Combined Graduate Level (CGL) examination
                is conducted by Staff Selection Commission
                for recruitment to various central government departments.

              </p>

              <p className="text-white/70 text-lg leading-8 mt-6">

                SSC CGL selection process includes Tier 1 and Tier 2 examinations.
                Candidates should understand the latest exam pattern carefully
                for effective preparation.

              </p>

            </div>

            {/* Tier 1 */}
            <div className="mt-24">

              <h2 className="text-4xl md:text-5xl font-bold">

                SSC CGL Tier 1 Exam Pattern

              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-12">

                {[
                  {
                    title: "General Intelligence",
                    marks: "50 Marks",
                  },

                  {
                    title: "General Awareness",
                    marks: "50 Marks",
                  },

                  {
                    title: "Quantitative Aptitude",
                    marks: "50 Marks",
                  },

                  {
                    title: "English Comprehension",
                    marks: "50 Marks",
                  },

                ].map((item, index) => (

                  <div
                    key={index}
                    className="bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8"
                  >

                    <h3 className="text-2xl font-bold text-orange-300">

                      {item.title}

                    </h3>

                    <p className="text-white/60 mt-5 text-lg">

                      {item.marks}

                    </p>

                  </div>

                ))}

              </div>

            </div>

            {/* Tier 2 */}
            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10 md:p-14">

              <h2 className="text-4xl md:text-5xl font-bold">

                SSC CGL Tier 2 Pattern

              </h2>

              <p className="text-white/70 text-lg leading-8 mt-8">

                Tier 2 examination includes multiple papers
                based on posts and departments.
                Quantitative Aptitude, English,
                Reasoning and Computer Knowledge are important sections.

              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-12">

                <div className="bg-black/20 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-bold">

                    Paper 1

                  </h3>

                  <p className="text-white/60 leading-8 mt-5">

                    Quantitative Aptitude,
                    English Language,
                    Reasoning and General Awareness.

                  </p>

                </div>

                <div className="bg-black/20 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-bold">

                    Computer Knowledge

                  </h3>

                  <p className="text-white/60 leading-8 mt-5">

                    Basic computer concepts,
                    software, internet and digital awareness.

                  </p>

                </div>

              </div>

            </div>

            {/* Marking */}
            <div className="mt-24">

              <h2 className="text-4xl font-bold">

                SSC CGL Marking Scheme

              </h2>

              <div className="space-y-6 mt-10">

                {[
                  "Each correct answer carries 2 marks.",
                  "Negative marking is applicable in SSC CGL exam.",
                  "Tier 1 contains objective type MCQ questions.",
                  "Time management is important for scoring well.",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="bg-[#111827]/70 border border-orange-500/10 rounded-3xl p-6"
                  >

                    <p className="text-white/70 text-lg">

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

                    Does SSC CGL have negative marking?

                  </h3>

                  <p className="text-white/60 leading-8 mt-4">

                    Yes, SSC CGL examination includes
                    negative marking for incorrect answers.

                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">

                    How many tiers are there in SSC CGL?

                  </h3>

                  <p className="text-white/60 leading-8 mt-4">

                    SSC CGL recruitment process mainly includes
                    Tier 1 and Tier 2 examinations.

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