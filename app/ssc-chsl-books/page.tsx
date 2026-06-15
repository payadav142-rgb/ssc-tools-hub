import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Best SSC CHSL Books 2026 — Subject Wise Preparation Books",
  description:
    "Check the best SSC CHSL books for Maths, English, Reasoning and General Awareness preparation.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white overflow-hidden relative">

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full pointer-events-none"></div>

      <section className="relative z-10 px-6 py-20">

        <div className="max-w-5xl mx-auto">

          <p className="text-orange-300 font-medium">
            SSC CHSL Preparation
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold mt-5">
            Best SSC CHSL Books 2026
          </h1>

          <p className="text-white/60 text-xl leading-9 mt-8">
            Choosing the right SSC CHSL books can significantly improve
            preparation quality and exam performance.
          </p>

          {/* Maths */}
          <div className="mt-20 bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8">
            <h2 className="text-3xl font-bold text-orange-300">
              Maths Books
            </h2>

            <ul className="mt-6 space-y-4 text-white/70">
              <li>• Fast Track Arithmetic – Rajesh Verma</li>
              <li>• SSC Mathematics – Rakesh Yadav</li>
              <li>• Advanced Maths Practice Books</li>
            </ul>
          </div>

          {/* Reasoning */}
          <div className="mt-10 bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8">
            <h2 className="text-3xl font-bold text-orange-300">
              Reasoning Books
            </h2>

            <ul className="mt-6 space-y-4 text-white/70">
              <li>• A Modern Approach To Verbal Reasoning</li>
              <li>• Analytical Reasoning Practice Books</li>
              <li>• Previous Year Reasoning Questions</li>
            </ul>
          </div>

          {/* English */}
          <div className="mt-10 bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8">
            <h2 className="text-3xl font-bold text-orange-300">
              English Books
            </h2>

            <ul className="mt-6 space-y-4 text-white/70">
              <li>• Objective General English – SP Bakshi</li>
              <li>• Plinth To Paramount</li>
              <li>• English Vocabulary Practice Books</li>
            </ul>
          </div>

          {/* GK */}
          <div className="mt-10 bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8">
            <h2 className="text-3xl font-bold text-orange-300">
              General Awareness Books
            </h2>

            <ul className="mt-6 space-y-4 text-white/70">
              <li>• Lucent General Knowledge</li>
              <li>• NCERT Notes</li>
              <li>• Monthly Current Affairs Magazines</li>
            </ul>
          </div>

          <div className="mt-10 bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8">

  <h2 className="text-3xl font-bold text-orange-300">
    How To Choose SSC CHSL Books
  </h2>

  <p className="text-white/70 mt-6 leading-8">
    Candidates should choose books that cover the complete SSC CHSL syllabus,
    provide sufficient practice questions and include previous year papers.
    It is recommended to avoid using too many books for the same subject.
    Consistent revision from a limited number of quality books is usually
    more effective than studying from multiple sources.
  </p>

</div>

          {/* FAQ */}
          <div className="mt-20">

            <h2 className="text-4xl font-bold">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6 mt-10">

              <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-6">
                <h3 className="text-2xl font-semibold">
                  Which book is best for SSC CHSL Maths?
                </h3>

                <p className="text-white/60 mt-4">
                  Fast Track Arithmetic and Rakesh Yadav Maths books are popular among SSC aspirants.
                </p>
              </div>

              <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-6">
                <h3 className="text-2xl font-semibold">
                  Is Lucent GK enough for SSC CHSL?
                </h3>

                <p className="text-white/60 mt-4">
                  Lucent GK is useful for static GK but should be combined with current affairs preparation.
                </p>
              </div>

            </div>

          </div>

          <div className="mt-10 bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8">

  <h2 className="text-3xl font-bold text-orange-300">
    SSC CHSL Preparation Tips
  </h2>

  <ul className="mt-6 space-y-4 text-white/70">
    <li>• Follow the latest SSC CHSL syllabus.</li>
    <li>• Practice previous year question papers regularly.</li>
    <li>• Focus on mock tests and time management.</li>
    <li>• Revise important formulas and concepts frequently.</li>
    <li>• Read current affairs daily for General Awareness preparation.</li>
  </ul>

</div>

          {/* Internal Links */}
          <div className="grid md:grid-cols-3 gap-8 mt-24">

            <Link
              href="/ssc-chsl-syllabus"
              className="bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8"
            >
              <h3 className="text-2xl font-bold">
                SSC CHSL Syllabus
              </h3>
            </Link>

            <Link
              href="/ssc-chsl-salary"
              className="bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8"
            >
              <h3 className="text-2xl font-bold">
                SSC CHSL Salary
              </h3>
            </Link>

            <Link
              href="/ssc-chsl-cutoff"
              className="bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8"
            >
              <h3 className="text-2xl font-bold">
                SSC CHSL-Cut Off
              </h3>
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}