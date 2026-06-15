import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "../../components/Navbar";
import ToolContainer from "../../components/ToolContainer";

export const metadata: Metadata = {
  title:
    "SSC CHSL Syllabus 2026 PDF Download, Tier 1 & Tier 2 Exam Pattern",

  description:
    "Download SSC CHSL Syllabus 2026 PDF and check Tier 1 & Tier 2 syllabus, exam pattern, subject wise topics, books and preparation tips.",

  keywords: [
    "SSC CHSL Syllabus 2026",
    "SSC CHSL Tier 1 Syllabus",
    "SSC CHSL Tier 2 Syllabus",
    "SSC CHSL Exam Pattern",
    "SSC CHSL Preparation",
    "SSC CHSL PDF",
    "SSC CHSL Books",
  ],
};

export default function Page() {
  return (
    <ToolContainer>
      <Navbar />

      <main className="min-h-screen bg-[#0B0F19] text-white overflow-hidden relative">

        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="absolute top-[40%] right-0 w-[400px] h-[400px] bg-amber-400/10 blur-[120px] rounded-full pointer-events-none"></div>

        <section className="relative z-10 px-6 py-20">

          <div className="max-w-6xl mx-auto">

            {/* Hero */}

            <div className="text-center">

              <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-5 py-2 text-orange-300 text-sm mb-8">
                📘 SSC CHSL 2026
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">

                SSC CHSL{" "}

                <span className="text-orange-400">
                  Syllabus 2026
                </span>

              </h1>

              <p className="text-white/60 text-xl leading-9 mt-8 max-w-4xl mx-auto">

                Check complete SSC CHSL Tier 1 and Tier 2 syllabus,
                latest exam pattern, subject-wise topics,
                preparation strategy, best books and FAQs.

              </p>

            </div>

            {/* Overview Cards */}

            <div className="grid md:grid-cols-3 gap-8 mt-20">

              <div className="bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8">

                <p className="text-white/50">
                  Exam Level
                </p>

                <h3 className="text-3xl font-bold text-orange-300 mt-4">
                  National
                </h3>

              </div>

              <div className="bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8">

                <p className="text-white/50">
                  Selection Stages
                </p>

                <h3 className="text-3xl font-bold text-orange-300 mt-4">
                  Tier 1 + Tier 2
                </h3>

              </div>

              <div className="bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8">

                <p className="text-white/50">
                  Posts
                </p>

                <h3 className="text-3xl font-bold text-orange-300 mt-4">
                  LDC, JSA, DEO
                </h3>

              </div>

            </div>

            {/* Overview */}

            <div className="mt-20 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10 md:p-14">

              <h2 className="text-4xl md:text-5xl font-bold">

                SSC CHSL Syllabus Overview

              </h2>

              <p className="text-white/70 text-lg leading-9 mt-8">

                SSC Combined Higher Secondary Level (CHSL)
                examination is conducted by Staff Selection Commission
                to recruit candidates for various clerical and
                administrative posts in central government departments.

              </p>

              <p className="text-white/70 text-lg leading-9 mt-8">

                Understanding the latest SSC CHSL syllabus
                helps candidates create an effective study plan,
                identify important topics and improve overall preparation.

              </p>

            </div>

            {/* Tier 1 */}

            <div className="mt-24">

              <h2 className="text-4xl md:text-5xl font-bold">

                SSC CHSL Tier 1 Syllabus

              </h2>

              <p className="text-white/60 text-lg mt-6">

                Tier 1 consists of four subjects:
                General Intelligence, Quantitative Aptitude,
                English Language and General Awareness.

              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-12"></div>
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
      "Logical Reasoning",
      "Direction Sense",
    ],
  },

  {
    title: "Quantitative Aptitude",
    topics: [
      "Percentage",
      "Ratio & Proportion",
      "Profit & Loss",
      "Simple & Compound Interest",
      "Algebra",
      "Geometry",
      "Mensuration",
      "Data Interpretation",
    ],
  },

  {
    title: "English Language",
    topics: [
      "Grammar",
      "Vocabulary",
      "Reading Comprehension",
      "Error Detection",
      "Idioms & Phrases",
      "Sentence Improvement",
      "Synonyms",
      "Antonyms",
    ],
  },

  {
    title: "General Awareness",
    topics: [
      "History",
      "Geography",
      "Indian Polity",
      "Economics",
      "Science",
      "Current Affairs",
      "Static GK",
      "Government Schemes",
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

    <ul className="mt-6 space-y-3 text-white/70">

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

  <p className="text-white/70 text-lg leading-9 mt-8">

    SSC CHSL Tier 2 includes descriptive writing,
    skill test and typing test depending upon the post.

  </p>

  <div className="grid md:grid-cols-2 gap-8 mt-12">

    <div className="bg-black/20 border border-orange-500/10 rounded-3xl p-8">

      <h3 className="text-2xl font-bold">
        Descriptive Test
      </h3>

      <p className="text-white/60 mt-5 leading-8">

        Essay writing, letter writing,
        application writing and communication skills.

      </p>

    </div>

    <div className="bg-black/20 border border-orange-500/10 rounded-3xl p-8">

      <h3 className="text-2xl font-bold">
        Skill / Typing Test
      </h3>

      <p className="text-white/60 mt-5 leading-8">

        Typing speed test and data entry test
        for selected SSC CHSL posts.

      </p>

    </div>

  </div>

</div>

{/* Exam Pattern */}

<div className="mt-24">

  <h2 className="text-4xl font-bold">
    SSC CHSL Tier 1 Exam Pattern
  </h2>

  <div className="grid md:grid-cols-4 gap-6 mt-10">

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
        GA Questions
      </p>
    </div>

  </div>

</div>

{/* Best Books */}

<div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10">

  <h2 className="text-4xl font-bold">
    Best SSC CHSL Books 2026
  </h2>

  <div className="grid md:grid-cols-2 gap-8 mt-10">

    <div className="bg-black/20 rounded-3xl p-8">

      <h3 className="text-2xl font-bold text-orange-300">
        Quantitative Aptitude
      </h3>

      <p className="text-white/60 mt-4 leading-8">

        Fast Track Arithmetic by Rajesh Verma,
        SSC Mathematics by Rakesh Yadav and
        previous year practice books.

      </p>

    </div>

    <div className="bg-black/20 rounded-3xl p-8">

      <h3 className="text-2xl font-bold text-orange-300">
        English Language
      </h3>

      <p className="text-white/60 mt-4 leading-8">

        Objective General English by SP Bakshi
        and Plinth To Paramount.

      </p>

    </div>

    <div className="bg-black/20 rounded-3xl p-8">

      <h3 className="text-2xl font-bold text-orange-300">
        General Intelligence
      </h3>

      <p className="text-white/60 mt-4 leading-8">

        A Modern Approach to Verbal &
        Non-Verbal Reasoning by RS Aggarwal.

      </p>

    </div>

    <div className="bg-black/20 rounded-3xl p-8">

      <h3 className="text-2xl font-bold text-orange-300">
        General Awareness
      </h3>

      <p className="text-white/60 mt-4 leading-8">

        Lucent General Knowledge,
        NCERT Notes and Monthly Current Affairs.

      </p>

    </div>

  </div>

</div>
{/* Preparation Tips */}

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
      "Attempt mock tests every week.",
      "Revise important formulas and notes.",
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
        and can be completed comfortably with
        proper planning, practice and revision.
      </p>

    </div>

    <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

      <h3 className="text-2xl font-semibold">
        Does SSC CHSL have a typing test?
      </h3>

      <p className="text-white/60 leading-8 mt-4">
        Yes, SSC CHSL includes typing or skill
        tests for specific posts such as DEO,
        LDC and JSA.
      </p>

    </div>

    <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

      <h3 className="text-2xl font-semibold">
        How many subjects are there in SSC CHSL Tier 1?
      </h3>

      <p className="text-white/60 leading-8 mt-4">
        Tier 1 contains four sections:
        English Language, Quantitative Aptitude,
        General Intelligence and General Awareness.
      </p>

    </div>

    <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

      <h3 className="text-2xl font-semibold">
        Which section is most important in SSC CHSL?
      </h3>

      <p className="text-white/60 leading-8 mt-4">
        All sections carry equal marks,
        so candidates should prepare every
        subject properly to maximize score.
      </p>

    </div>

  </div>

</div>

{/* Related Pages */}

<div className="mt-24">

  <h2 className="text-4xl font-bold">
    Related SSC CHSL Resources
  </h2>

  <div className="grid md:grid-cols-3 gap-8 mt-10">

    <Link
      href="/ssc-chsl-salary"
      className="bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition"
    >

      <h3 className="text-2xl font-bold">
        SSC CHSL Salary
      </h3>

      <p className="text-white/50 mt-4">
        Salary Structure →
      </p>

    </Link>

    <Link
      href="/ssc-chsl-books"
      className="bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition"
    >

      <h3 className="text-2xl font-bold">
        SSC CHSL Books
      </h3>

      <p className="text-white/50 mt-4">
        Best Books →
      </p>

    </Link>

    <Link
      href="/ssc-chsl-cutoff"
      className="bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition"
    >

      <h3 className="text-2xl font-bold">
        SSC CHSL Cutoff
      </h3>

      <p className="text-white/50 mt-4">
        Previous Cutoffs →
      </p>

    </Link>

  </div>

</div>

{/* CTA */}

<div className="mt-24 text-center">

  <h2 className="text-4xl md:text-5xl font-bold">
    Start SSC CHSL Preparation Today
  </h2>

  <p className="text-white/60 text-lg leading-8 mt-6 max-w-3xl mx-auto">

    Understand the latest syllabus,
    follow a proper study plan,
    solve previous year papers and
    attempt mock tests regularly to
    improve your chances of selection.

  </p>

</div>

          

        </section>

      </main>

    </ToolContainer>

  );

}