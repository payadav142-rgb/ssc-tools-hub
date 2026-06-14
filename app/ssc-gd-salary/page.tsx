import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title:
    "SSC GD Salary 2026 — In Hand Salary, Pay Scale & Promotion",
  description:
    "Check SSC GD salary 2026 including in hand salary, pay scale, allowances, job profile and promotion opportunities.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white overflow-hidden relative">

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full pointer-events-none"></div>

      <section className="relative z-10 px-6 py-20">

        <div className="max-w-5xl mx-auto">

          <p className="text-orange-300 font-medium">
            SSC GD Constable
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold mt-5">
            SSC GD Salary 2026
          </h1>

          <p className="text-white/60 text-xl mt-8 leading-9">
            Complete SSC GD salary structure including
            in-hand salary, allowances, job profile
            and promotion opportunities.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-16">

            <div className="bg-[#111827] border border-orange-500/10 rounded-[28px] p-8">
              <p className="text-white/50">Pay Level</p>
              <h3 className="text-2xl font-bold mt-3 text-orange-300">
                Level 3
              </h3>
            </div>

            <div className="bg-[#111827] border border-orange-500/10 rounded-[28px] p-8">
              <p className="text-white/50">Basic Pay</p>
              <h3 className="text-2xl font-bold mt-3 text-orange-300">
                ₹21,700
              </h3>
            </div>

            <div className="bg-[#111827] border border-orange-500/10 rounded-[28px] p-8">
              <p className="text-white/50">Job Type</p>
              <h3 className="text-2xl font-bold mt-3 text-orange-300">
                Central Armed Force
              </h3>
            </div>

          </div>

          <div className="space-y-8 mt-20">

            <section className="bg-[#111827] rounded-[32px] p-10">
              <h2 className="text-4xl font-bold">
                SSC GD In Hand Salary
              </h2>

              <p className="text-white/70 text-lg leading-8 mt-6">
                SSC GD Constables receive basic pay,
                DA, HRA, transport allowance and other
                benefits. The approximate in-hand salary
                ranges between ₹30,000 and ₹40,000 per month.
              </p>
            </section>

            <section className="bg-[#111827] rounded-[32px] p-10">
              <h2 className="text-4xl font-bold">
                Allowances & Benefits
              </h2>

              <ul className="text-white/70 text-lg mt-6 space-y-3">
                <li>• Dearness Allowance (DA)</li>
                <li>• House Rent Allowance (HRA)</li>
                <li>• Transport Allowance</li>
                <li>• Medical Facilities</li>
                <li>• Pension Benefits</li>
                <li>• Risk & Security Related Benefits</li>
              </ul>
            </section>

            <section className="bg-[#111827] rounded-[32px] p-10">
              <h2 className="text-4xl font-bold">
                SSC GD Job Profile
              </h2>

              <p className="text-white/70 text-lg leading-8 mt-6">
                SSC GD Constables serve in various
                Central Armed Police Forces and perform
                security, law enforcement and public
                safety duties.
              </p>
            </section>

            <section className="bg-[#111827] rounded-[32px] p-10">
              <h2 className="text-4xl font-bold">
                Promotion Opportunities
              </h2>

              <p className="text-white/70 text-lg leading-8 mt-6">
                SSC GD personnel can be promoted to
                higher ranks based on service record,
                departmental examinations and experience.
              </p>
            </section>

            <section className="bg-[#111827] rounded-[32px] p-10">
              <h2 className="text-4xl font-bold">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6 mt-8">

                <div>
                  <h3 className="text-2xl font-semibold">
                    What is the in-hand salary of SSC GD?
                  </h3>

                  <p className="text-white/70 mt-3">
                    The approximate in-hand salary ranges
                    from ₹30,000 to ₹40,000 per month.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold">
                    Is SSC GD a permanent government job?
                  </h3>

                  <p className="text-white/70 mt-3">
                    Yes, SSC GD is a permanent government
                    job with salary, allowances and
                    long-term career growth opportunities.
                  </p>
                </div>

              </div>

            </section>

            <div className="grid md:grid-cols-3 gap-6 mt-16">

  <Link
    href="/ssc-gd-syllabus"
    className="bg-[#111827] border border-orange-500/10 rounded-[28px] p-8 hover:border-orange-500/40 transition"
  >
    <h3 className="text-2xl font-bold">
      SSC GD Syllabus
    </h3>

    <p className="text-white/50 mt-3">
      Read More →
    </p>
  </Link>

  <Link
    href="/ssc-gd-cutoff"
    className="bg-[#111827] border border-orange-500/10 rounded-[28px] p-8 hover:border-orange-500/40 transition"
  >
    <h3 className="text-2xl font-bold">
      SSC GD Cut Off
    </h3>

    <p className="text-white/50 mt-3">
      Read More →
    </p>
  </Link>

  <Link
    href="/ssc-gd-notification"
    className="bg-[#111827] border border-orange-500/10 rounded-[28px] p-8 hover:border-orange-500/40 transition"
  >
    <h3 className="text-2xl font-bold">
      SSC GD Notification
    </h3>

    <p className="text-white/50 mt-3">
      Read More →
    </p>
  </Link>

</div>

          </div>

        </div>

      </section>

    </main>
  );
}