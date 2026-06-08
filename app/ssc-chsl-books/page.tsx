import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best SSC CHSL Books 2026 — Subject Wise Book List",
  description:
    "Check the best SSC CHSL books for Maths, English, Reasoning and GK.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white px-6 py-16">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold">
          Best SSC CHSL Books 2026
        </h1>

        <p className="text-white/60 mt-6 text-lg">
          Recommended SSC CHSL preparation books.
        </p>

        <div className="space-y-8 mt-16">

          <section className="bg-[#111827] rounded-3xl p-8">
            <h2 className="text-3xl font-bold">
              Maths
            </h2>

            <p className="text-white/70 mt-4">
              Fast Track Arithmetic by Rajesh Verma.
            </p>
          </section>

          <section className="bg-[#111827] rounded-3xl p-8">
            <h2 className="text-3xl font-bold">
              Reasoning
            </h2>

            <p className="text-white/70 mt-4">
              A Modern Approach to Verbal Reasoning.
            </p>
          </section>

          <section className="bg-[#111827] rounded-3xl p-8">
            <h2 className="text-3xl font-bold">
              English
            </h2>

            <p className="text-white/70 mt-4">
              Objective General English by S.P. Bakshi.
            </p>
          </section>

        </div>

      </div>

    </main>
  );
}