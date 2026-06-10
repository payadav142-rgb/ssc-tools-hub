import type { Metadata } from "next";

import Navbar from "../../components/Navbar";
import ToolContainer from "../../components/ToolContainer";

export const metadata: Metadata = {

  title:
    "SSC MTS Exam Pattern 2026 — Complete Paper Pattern",

  description:
    "Check SSC MTS exam pattern 2026 including subjects, marking scheme, paper format and negative marking.",

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

              <h1 className="text-5xl md:text-7xl font-extrabold mt-5">

                SSC MTS
                <span className="text-orange-400">
                  {" "}Exam Pattern 2026
                </span>

              </h1>

              <p className="text-white/60 text-lg leading-8 mt-8 max-w-3xl mx-auto">

                Check SSC MTS exam pattern,
                subjects, marking scheme,
                exam duration and negative marking details.

              </p>

            </div>

            {/* Subjects */}
            <div className="mt-20 grid md:grid-cols-2 gap-8">

              {[
                {
                  title: "Numerical Aptitude",
                  desc: "Percentage, ratio, average, algebra and mensuration.",
                },

                {
                  title: "Reasoning Ability",
                  desc: "Analogy, series, coding-decoding and puzzles.",
                },

                {
                  title: "English Language",
                  desc: "Grammar, comprehension and vocabulary.",
                },

                {
                  title: "General Awareness",
                  desc: "History, geography, polity and current affairs.",
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

            {/* Exam Structure */}
            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10">

              <h2 className="text-4xl font-bold">

                SSC MTS Paper Structure

              </h2>

              <div className="space-y-6 mt-10">

                {[
                  "Session 1 includes Numerical Aptitude and Reasoning.",
                  "Session 2 includes English and General Awareness.",
                  "Objective type multiple choice questions are asked.",
                  "Negative marking is applicable in some sections.",
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

            {/* FAQ */}
            <div className="mt-24">

              <h2 className="text-4xl font-bold">

                Frequently Asked Questions

              </h2>

              <div className="space-y-6 mt-10">

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">

                    Does SSC MTS have negative marking?

                  </h3>

                  <p className="text-white/60 mt-4 leading-8">

                    Yes, SSC MTS exam includes negative marking
                    in some sections.

                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">

                    Is SSC MTS exam difficult?

                  </h3>

                  <p className="text-white/60 mt-4 leading-8">

                    SSC MTS is considered easy to moderate
                    depending on preparation level.

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