import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SSC CHSL Cutoff 2026 — Expected & Previous Year Cutoff",
  description:
    "Check SSC CHSL Cutoff 2026, expected cutoff marks and previous year trends.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold">
          SSC CHSL Cutoff 2026
        </h1>

        <p className="text-white/60 mt-6 text-lg">
          Check expected and previous year SSC CHSL cutoff marks.
        </p>

        <div className="space-y-8 mt-16">

          <section className="bg-[#111827] rounded-3xl p-8">
            <h2 className="text-3xl font-bold">
              Expected Cutoff 2026
            </h2>

            <p className="text-white/70 mt-4 leading-8">
              Expected cutoff may range between
              145 to 165 marks depending upon
              category and exam difficulty.
            </p>
          </section>

          <section className="bg-[#111827] rounded-3xl p-8">
            <h2 className="text-3xl font-bold">
              Previous Year Cutoff
            </h2>

            <p className="text-white/70 mt-4 leading-8">
              Previous year cutoff trends help
              candidates estimate safe scores.
            </p>
          </section>

        </div>

      </div>
    </main>
  );
}