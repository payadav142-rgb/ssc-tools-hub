import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SSC CHSL Syllabus 2026 — Tier 1 & Tier 2 Complete Syllabus",
  description:
    "Check SSC CHSL syllabus 2026 for Tier 1 and Tier 2 examination.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white px-6 py-16">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold">
          SSC CHSL Syllabus 2026
        </h1>

        <p className="text-white/60 mt-6 text-lg">
          Complete SSC CHSL Tier 1 and Tier 2 syllabus.
        </p>

        <div className="space-y-8 mt-16">

          <section className="bg-[#111827] rounded-3xl p-8">
            <h2 className="text-3xl font-bold">
              General Intelligence
            </h2>

            <p className="text-white/70 mt-4">
              Analogy, Coding-Decoding,
              Classification, Series etc.
            </p>
          </section>

          <section className="bg-[#111827] rounded-3xl p-8">
            <h2 className="text-3xl font-bold">
              Quantitative Aptitude
            </h2>

            <p className="text-white/70 mt-4">
              Percentage, Profit & Loss,
              Ratio, Algebra, Geometry etc.
            </p>
          </section>

          <section className="bg-[#111827] rounded-3xl p-8">
            <h2 className="text-3xl font-bold">
              English Language
            </h2>

            <p className="text-white/70 mt-4">
              Grammar, Vocabulary,
              Comprehension and Error Detection.
            </p>
          </section>

        </div>

      </div>

    </main>
  );
}