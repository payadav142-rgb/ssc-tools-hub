import type { Metadata } from "next";

import Navbar from "../../components/Navbar";
import ToolContainer from "../../components/ToolContainer";

export const metadata: Metadata = {

  title:
    "SSC GD Exam Pattern 2026 — Complete Paper Pattern",

  description:
    "Check SSC GD exam pattern 2026 including CBT pattern, subjects, marking scheme and physical test details.",

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

              <h1 className="text-5xl md:text-7xl font-extrabold mt-5">

                SSC GD
                <span className="text-orange-400">
                  {" "}Exam Pattern 2026
                </span>

              </h1>

              <p className="text-white/60 text-lg leading-8 mt-8 max-w-3xl mx-auto">

                Check SSC GD Constable exam pattern,
                CBT subjects, marking scheme,
                physical test and selection process.

              </p>

            </div>

            {/* CBT Subjects */}
            <div className="mt-20 grid md:grid-cols-2 gap-8">

              {[
                {
                  title: "General Intelligence & Reasoning",
                  desc: "Analogy, series, coding-decoding and reasoning questions.",
                },

                {
                  title: "General Knowledge",
                  desc: "Current affairs, history, geography and science.",
                },

                {
                  title: "Elementary Mathematics",
                  desc: "Percentage, ratio, algebra and mensuration topics.",
                },

                {
                  title: "English / Hindi",
                  desc: "Grammar, vocabulary and comprehension questions.",
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

            {/* Selection Process */}
            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10">

              <h2 className="text-4xl font-bold">

                SSC GD Selection Process

              </h2>

              <div className="space-y-6 mt-10">

                {[
                  "Computer Based Examination (CBT)",
                  "Physical Efficiency Test (PET)",
                  "Physical Standard Test (PST)",
                  "Medical Examination and Document Verification",
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

            {/* Physical Test */}
            <div className="mt-24">

              <h2 className="text-4xl font-bold">

                Physical Test Details

              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-10">

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8">

                  <h3 className="text-2xl font-bold text-orange-300">

                    Male Candidates

                  </h3>

                  <p className="text-white/60 mt-5 leading-8">

                    Running and physical standards
                    are checked according to SSC GD guidelines.

                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8">

                  <h3 className="text-2xl font-bold text-orange-300">

                    Female Candidates

                  </h3>

                  <p className="text-white/60 mt-5 leading-8">

                    Female candidates also need to qualify
                    physical efficiency and standard tests.

                  </p>

                </div>

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

                    Does SSC GD include physical test?

                  </h3>

                  <p className="text-white/60 mt-4 leading-8">

                    Yes, SSC GD recruitment includes PET and PST tests.

                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">

                    Is SSC GD exam easy?

                  </h3>

                  <p className="text-white/60 mt-4 leading-8">

                    SSC GD exam is considered moderate in difficulty level.

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