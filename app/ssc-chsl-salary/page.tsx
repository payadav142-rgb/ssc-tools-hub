import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SSC CHSL Salary 2026 — In Hand Salary, Pay Level & Allowances",
  description:
    "Check SSC CHSL Salary 2026 including in hand salary, pay level, allowances and promotion details.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white px-6 py-16">

      <div className="max-w-5xl mx-auto">

        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-5 py-2 text-blue-200 text-sm mb-8">
          💰 SSC CHSL Salary 2026
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          SSC CHSL
          <span className="text-blue-400"> Salary 2026</span>
        </h1>

        <p className="text-white/60 text-xl mt-8 leading-relaxed">
          Complete SSC CHSL salary structure, in-hand salary,
          allowances, job profile and promotion details.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-16">

          <div className="bg-[#111827] border border-blue-500/10 rounded-[28px] p-8">
            <p className="text-white/50">Pay Level</p>
            <h3 className="text-2xl font-bold mt-3 text-blue-300">
              Level 2 - 4
            </h3>
          </div>

          <div className="bg-[#111827] border border-blue-500/10 rounded-[28px] p-8">
            <p className="text-white/50">Salary Range</p>
            <h3 className="text-2xl font-bold mt-3 text-blue-300">
              ₹19,900 - ₹81,100
            </h3>
          </div>

          <div className="bg-[#111827] border border-blue-500/10 rounded-[28px] p-8">
            <p className="text-white/50">Job Type</p>
            <h3 className="text-2xl font-bold mt-3 text-blue-300">
              Central Govt
            </h3>
          </div>

        </div>

        <div className="space-y-8 mt-20">

          <section className="bg-[#111827] rounded-[32px] p-10">
            <h2 className="text-4xl font-bold">
              SSC CHSL In Hand Salary
            </h2>

            <p className="text-white/70 text-lg leading-8 mt-6">
              SSC CHSL employees receive basic pay,
              DA, HRA and transport allowance.
              The in-hand salary generally ranges
              between ₹28,000 to ₹40,000 depending
              on city and post.
            </p>
          </section>

          <section className="bg-[#111827] rounded-[32px] p-10">
            <h2 className="text-4xl font-bold">
              Allowances
            </h2>

            <ul className="text-white/70 text-lg mt-6 space-y-3">
              <li>• Dearness Allowance (DA)</li>
              <li>• House Rent Allowance (HRA)</li>
              <li>• Transport Allowance (TA)</li>
              <li>• Medical Benefits</li>
              <li>• Pension Benefits</li>
            </ul>
          </section>

          <section className="bg-[#111827] rounded-[32px] p-10">
            <h2 className="text-4xl font-bold">
              Promotion Opportunities
            </h2>

            <p className="text-white/70 text-lg leading-8 mt-6">
              SSC CHSL employees get regular
              departmental promotions and career
              growth opportunities in central
              government departments.
            </p>
          </section>

        </div>

      </div>

    </main>
  );
}