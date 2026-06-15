import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";

export const metadata: Metadata = {
  title:
    "SSC CGL Syllabus 2026 — Tier 1 & Tier 2 Complete Syllabus",
  description:
    "Check complete SSC CGL syllabus 2026 for Tier 1 and Tier 2 exam preparation with subject-wise topics, exam pattern and preparation strategy.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white overflow-hidden relative">

      <Navbar />

      {/* Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="absolute top-[40%] right-0 w-[400px] h-[400px] bg-amber-400/10 blur-[120px] rounded-full pointer-events-none"></div>

      <section className="relative z-10 px-6 pt-28 pb-20">

        <div className="max-w-6xl mx-auto">

          {/* Hero */}
          <div className="text-center">

            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-5 py-2 text-orange-200 text-sm mb-8">
              📚 SSC CGL 2026 Latest Syllabus
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              SSC CGL
              <span className="text-orange-400">
                {" "}Syllabus 2026
              </span>
            </h1>

            <p className="text-white/60 text-xl leading-9 max-w-4xl mx-auto mt-8">
              Complete SSC CGL Tier 1 and Tier 2 syllabus,
              exam pattern, subject-wise topics, preparation
              strategy and important study resources.
            </p>

          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 mt-20">

            <div className="bg-[#111827]/80 border border-orange-500/10 rounded-[28px] p-8 text-center">
              <p className="text-white/50">
                Tier 1 Questions
              </p>

              <h3 className="text-4xl font-bold text-orange-300 mt-3">
                100
              </h3>
            </div>

            <div className="bg-[#111827]/80 border border-orange-500/10 rounded-[28px] p-8 text-center">
              <p className="text-white/50">
                Total Marks
              </p>

              <h3 className="text-4xl font-bold text-orange-300 mt-3">
                200
              </h3>
            </div>

            <div className="bg-[#111827]/80 border border-orange-500/10 rounded-[28px] p-8 text-center">
              <p className="text-white/50">
                Duration
              </p>

              <h3 className="text-4xl font-bold text-orange-300 mt-3">
                60 Min
              </h3>
            </div>

            <div className="bg-[#111827]/80 border border-orange-500/10 rounded-[28px] p-8 text-center">
              <p className="text-white/50">
                Negative Marking
              </p>

              <h3 className="text-4xl font-bold text-orange-300 mt-3">
                0.50
              </h3>
            </div>

          </div>

          {/* Tier 1 */}
          <div className="mt-24">

            <h2 className="text-4xl md:text-5xl font-bold">
              SSC CGL Tier 1 Syllabus
            </h2>

            <p className="text-white/60 text-lg leading-8 mt-8">
              SSC CGL Tier 1 examination consists of
              four subjects namely Reasoning, Quantitative
              Aptitude, English Language and General
              Awareness. Each section carries equal
              weightage in the examination.
            </p>

            <div className="space-y-8 mt-12">

              <div className="bg-[#111827]/80 border border-orange-500/10 rounded-[36px] p-8">
                <h3 className="text-3xl font-bold">
                  General Intelligence & Reasoning
                </h3>

                <p className="text-white/65 text-lg leading-8 mt-6">
                  Analogy, Classification, Coding-Decoding,
                  Blood Relation, Direction Sense,
                  Number Series, Alphabet Series,
                  Puzzle, Syllogism and Logical Reasoning.
                </p>
              </div>

              <div className="bg-[#111827]/80 border border-orange-500/10 rounded-[36px] p-8">
                <h3 className="text-3xl font-bold">
                  Quantitative Aptitude
                </h3>

                <p className="text-white/65 text-lg leading-8 mt-6">
                  Percentage, Ratio & Proportion,
                  Average, Profit & Loss, Simple Interest,
                  Compound Interest, Algebra,
                  Geometry, Mensuration,
                  Trigonometry and Data Interpretation.
                </p>
              </div>

              <div className="bg-[#111827]/80 border border-orange-500/10 rounded-[36px] p-8">
                <h3 className="text-3xl font-bold">
                  English Language
                </h3>

                <p className="text-white/65 text-lg leading-8 mt-6">
                  Grammar, Vocabulary,
                  Error Detection, Synonyms,
                  Antonyms, Cloze Test,
                  One Word Substitution,
                  Idioms & Phrases and Reading Comprehension.
                </p>
              </div>

              <div className="bg-[#111827]/80 border border-orange-500/10 rounded-[36px] p-8">
                <h3 className="text-3xl font-bold">
                  General Awareness
                </h3>

                <p className="text-white/65 text-lg leading-8 mt-6">
                  History, Geography, Polity,
                  Economy, Physics, Chemistry,
                  Biology, Static GK and
                  Current Affairs.
                </p>
              </div>

            </div>

          </div>

          {/* Tier 2 */}
          <div className="mt-24 bg-[#111827]/70 border border-orange-500/10 rounded-[40px] p-8 md:p-12">

            <h2 className="text-4xl font-bold">
              SSC CGL Tier 2 Syllabus
            </h2>

            <p className="text-white/70 text-lg leading-9 mt-8">
              SSC CGL Tier 2 is the most important stage
              of the examination and includes advanced
              level Quantitative Aptitude, English Language,
              Computer Knowledge and Data Entry Speed Test.
            </p>

            <p className="text-white/70 text-lg leading-9 mt-8">
              Candidates should focus heavily on mock tests,
              previous year questions, revision and speed
              improvement to maximize Tier 2 score.
            </p>

          </div>

          {/* Exam Pattern */}
          <div className="mt-24">

            <h2 className="text-4xl font-bold">
              SSC CGL Tier 1 Exam Pattern
            </h2>

            <div className="grid md:grid-cols-4 gap-6 mt-10">

              <div className="bg-[#111827]/80 rounded-3xl p-8">
                <h3 className="text-3xl font-bold text-orange-300">
                  25
                </h3>

                <p className="text-white/60 mt-3">
                  Reasoning Questions
                </p>
              </div>

              <div className="bg-[#111827]/80 rounded-3xl p-8">
                <h3 className="text-3xl font-bold text-orange-300">
                  25
                </h3>

                <p className="text-white/60 mt-3">
                  Quant Questions
                </p>
              </div>

              <div className="bg-[#111827]/80 rounded-3xl p-8">
                <h3 className="text-3xl font-bold text-orange-300">
                  25
                </h3>

                <p className="text-white/60 mt-3">
                  English Questions
                </p>
              </div>

              <div className="bg-[#111827]/80 rounded-3xl p-8">
                <h3 className="text-3xl font-bold text-orange-300">
                  25
                </h3>

                <p className="text-white/60 mt-3">
                  GA Questions
                </p>
              </div>

            </div>

          </div>
                    {/* Preparation Strategy */}
          <div className="mt-24">

            <h2 className="text-4xl font-bold">
              SSC CGL Preparation Strategy 2026
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mt-10">

              {[
                "Complete the syllabus subject-wise before attempting full mock tests.",
                "Solve SSC previous year questions regularly to understand exam trends.",
                "Maintain short notes for revision and important formulas.",
                "Practice daily mock tests to improve speed and accuracy.",
              ].map((tip) => (

                <div
                  key={tip}
                  className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-6"
                >

                  <p className="text-lg leading-8 text-white/70">
                    {tip}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* Best Books */}
          <div className="mt-24 bg-[#111827]/70 border border-orange-500/10 rounded-[40px] p-8 md:p-12">

            <h2 className="text-4xl font-bold">
              Best Books For SSC CGL Preparation
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mt-10">

              <div className="bg-black/30 rounded-3xl p-6">
                <h3 className="text-2xl font-bold">
                  Quantitative Aptitude
                </h3>

                <p className="text-white/60 mt-4 leading-8">
                  Fast Track Arithmetic by Rajesh Verma,
                  Rakesh Yadav Maths and SSC previous
                  year question books.
                </p>
              </div>

              <div className="bg-black/30 rounded-3xl p-6">
                <h3 className="text-2xl font-bold">
                  English Language
                </h3>

                <p className="text-white/60 mt-4 leading-8">
                  Objective General English by SP Bakshi
                  and Plinth To Paramount.
                </p>
              </div>

              <div className="bg-black/30 rounded-3xl p-6">
                <h3 className="text-2xl font-bold">
                  Reasoning
                </h3>

                <p className="text-white/60 mt-4 leading-8">
                  A Modern Approach to Verbal and
                  Non-Verbal Reasoning by RS Aggarwal.
                </p>
              </div>

              <div className="bg-black/30 rounded-3xl p-6">
                <h3 className="text-2xl font-bold">
                  General Awareness
                </h3>

                <p className="text-white/60 mt-4 leading-8">
                  Lucent General Knowledge,
                  NCERT Notes and Current Affairs magazines.
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

              {[
                {
                  q: "What is the SSC CGL syllabus?",
                  a: "SSC CGL syllabus includes Reasoning, Quantitative Aptitude, English Language and General Awareness."
                },
                {
                  q: "How many subjects are there in SSC CGL Tier 1?",
                  a: "There are four subjects in SSC CGL Tier 1 examination."
                },
                {
                  q: "Is SSC CGL syllabus difficult?",
                  a: "The syllabus is moderate and can be completed with proper planning and revision."
                },
                {
                  q: "Does SSC CGL syllabus change every year?",
                  a: "Major changes are rare, but candidates should always check the latest notification."
                },
                {
                  q: "Which subject is most important in SSC CGL?",
                  a: "All subjects carry equal weightage, but Quantitative Aptitude usually requires more preparation time."
                },
                {
                  q: "How long does it take to complete SSC CGL syllabus?",
                  a: "Most candidates complete the syllabus within 3 to 6 months of consistent preparation."
                },
                {
                  q: "Are previous year questions important?",
                  a: "Yes, previous year questions are extremely important for understanding exam patterns."
                },
                {
                  q: "Can I crack SSC CGL in first attempt?",
                  a: "Yes, many candidates clear SSC CGL in their first attempt with disciplined preparation."
                },
              ].map((faq) => (

                <div
                  key={faq.q}
                  className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-6"
                >

                  <h3 className="text-2xl font-semibold">
                    {faq.q}
                  </h3>

                  <p className="text-white/60 mt-4 leading-8">
                    {faq.a}
                  </p>

                </div>

              ))}

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