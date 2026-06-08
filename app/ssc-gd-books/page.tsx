import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best SSC GD Books 2026 — Subject Wise Book List",
  description:
    "Check the best SSC GD books for Maths, Reasoning, English and GK.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold">
          Best SSC GD Books 2026
        </h1>

        <p className="text-white/60 mt-6 text-lg">
          Recommended SSC GD books for preparation.
        </p>

      </div>
    </main>
  );
}