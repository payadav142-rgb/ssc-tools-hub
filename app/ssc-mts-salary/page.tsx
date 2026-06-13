import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SSC MTS Salary 2026 — In Hand Salary, Pay Level & Allowances",
  description:
    "Check SSC MTS salary 2026 including in hand salary, pay level, allowances, job profile and promotion details.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white overflow-hidden relative">

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full pointer-events-none"></div>

      <section className="relative z-10 px-6 py-20">

        <div className="max-w-5xl mx-auto">

          <p className="text-orange-300 font-medium">
            SSC MTS Recruitment
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold mt-5">
            SSC MTS Salary 2026
          </h1>

          <p className="text-white/60 text-xl mt-8 leading-9">
            Complete SSC MTS salary structure including
            in-hand salary, pay level, allowances,
            job profile and promotion opportunities.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-16">

            <div className="bg-[#111827] border border-orange-500/10 rounded-[28px] p-8">
              <p className="text-white/50">Pay Level</p>
              <h3 className="text-2xl font-bold mt-3 text-orange-300">
                Level 1
              </h3>
            </div>

            <div className="bg-[#111827] border border-orange-500/10 rounded-[28px] p-8">
              <p className="text-white/50">Basic Pay</p>
              <h3 className="text-2xl font-bold mt-3 text-orange-300">
                ₹18,000
              </h3>
            </div>

            <div className="bg-[#111827] border border-orange-500/10 rounded-[28px] p-8">
              <p className="text-white/50">Job Type</p>
              <h3 className="text-2xl font-bold mt-3 text-orange-300">
                Central Govt
              </h3>
            </div>

          </div>

          <div className="space-y-8 mt-20">

            <section className="bg-[#111827] rounded-[32px] p-10">
              <h2 className="text-4xl font-bold">
                SSC MTS In Hand Salary
              </h2>

              <p className="text-white/70 text-lg leading-8 mt-6">
                SSC MTS employees receive basic pay,
                HRA, DA and transport allowance.
                The in-hand salary generally ranges
                between ₹22,000 and ₹30,000 per month
                depending on posting location.
              </p>
            </section>

            <section className="bg-[#111827] rounded-[32px] p-10">
              <h2 className="text-4xl font-bold">
                Allowances & Benefits
              </h2>

              <ul className="text-white/70 text-lg mt-6 space-y-3">
                <li>• Dearness Allowance (DA)</li>
                <li>• House Rent Allowance (HRA)</li>
                <li>• Transport Allowance (TA)</li>
                <li>• Medical Facilities</li>
                <li>• Pension Benefits</li>
                <li>• Paid Leave Benefits</li>
              </ul>
            </section>

            <section className="bg-[#111827] rounded-[32px] p-10">
              <h2 className="text-4xl font-bold">
                SSC MTS Job Profile
              </h2>

              <p className="text-white/70 text-lg leading-8 mt-6">
                SSC MTS employees perform clerical,
                maintenance and support-related duties
                in central government offices and departments.
              </p>
            </section>

            <section className="bg-[#111827] rounded-[32px] p-10">
              <h2 className="text-4xl font-bold">
                Promotion Opportunities
              </h2>

              <p className="text-white/70 text-lg leading-8 mt-6">
                SSC MTS employees can receive departmental
                promotions and may advance to higher
                administrative positions through experience
                and internal examinations.
              </p>
            </section>

            <section className="bg-[#111827] rounded-[32px] p-10">
              <h2 className="text-4xl font-bold">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6 mt-8">

                <div>
                  <h3 className="text-2xl font-semibold">
                    What is the salary of SSC MTS?
                  </h3>

                  <p className="text-white/70 mt-3">
                    SSC MTS employees generally receive
                    ₹22,000 to ₹30,000 per month as
                    in-hand salary depending on location.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold">
                    Is SSC MTS a permanent job?
                  </h3>

                  <p className="text-white/70 mt-3">
                    Yes, SSC MTS is a permanent
                    central government job with
                    multiple benefits and allowances.
                  </p>
                </div>

              </div>

            </section>

          </div>

        </div>

      </section>

    </main>
  );
}