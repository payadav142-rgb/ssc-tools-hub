import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "../../components/Navbar";
import ToolContainer from "../../components/ToolContainer";

export const metadata: Metadata = {
  title: "SSC GD Salary 2026 — In Hand Salary, Pay Level & Allowances",

  description:
    "Check SSC GD Constable Salary 2026 including in-hand salary, basic pay, pay level, allowances, job profile and promotion details.",

  keywords: [
    "SSC GD Salary 2026",
    "SSC GD In Hand Salary",
    "SSC GD Salary Structure",
    "SSC GD Pay Level",
    "SSC GD Allowances",
  ],
};

export default function Page() {
  return (
    <ToolContainer>

      <Navbar />

      <main className="min-h-screen bg-[#0B0F19] text-white overflow-hidden relative">

        {/* Glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="absolute top-[40%] right-0 w-[400px] h-[400px] bg-amber-400/10 blur-[120px] rounded-full pointer-events-none"></div>

        <section className="relative z-10 px-6 py-20">

          <div className="max-w-6xl mx-auto">

            {/* Hero */}
            <div className="text-center">

              <p className="text-orange-300 font-medium">
                SSC GD 2026
              </p>

              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mt-5">
                SSC GD <span className="text-orange-400">Salary 2026</span>
              </h1>

              <p className="text-white/60 text-lg md:text-xl leading-9 mt-8 max-w-4xl mx-auto">
                Check SSC GD Constable Salary 2026 including
                in-hand salary, basic pay, pay level,
                allowances, promotion opportunities
                and complete salary structure.
              </p>

            </div>

            {/* Quick Cards */}
            <div className="grid md:grid-cols-4 gap-8 mt-20">

              {[
                {
                  title: "Pay Level",
                  value: "Level 3",
                },

                {
                  title: "Basic Pay",
                  value: "₹21,700",
                },

                {
                  title: "In-Hand",
                  value: "₹30K–35K",
                },

                {
                  title: "Job Type",
                  value: "Central Govt",
                },

              ].map((item, index) => (

                <div
                  key={index}
                  className="bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8"
                >

                  <h2 className="text-3xl font-bold text-orange-300">
                    {item.value}
                  </h2>

                  <p className="text-white/60 mt-4 text-lg">
                    {item.title}
                  </p>

                </div>

              ))}

            </div>

            {/* Salary Overview */}
            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10 md:p-14">

              <h2 className="text-4xl font-bold">
                SSC GD Salary Overview
              </h2>

              <p className="text-white/70 text-lg leading-9 mt-8">
                SSC GD Constables are recruited in various Central Armed Police Forces
                such as BSF, CISF, CRPF, ITBP, SSB, Assam Rifles and SSF.
                They receive salary according to the 7th Pay Commission
                under Pay Level-3.
              </p>

              <p className="text-white/70 text-lg leading-9 mt-6">
                Along with the basic pay, candidates receive several
                allowances including Dearness Allowance (DA),
                House Rent Allowance (HRA), Transport Allowance (TA),
                Medical Facilities and other government benefits.
              </p>

            </div>
                        {/* Salary Structure */}
            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10 md:p-14">

              <h2 className="text-4xl font-bold">
                SSC GD Salary Structure 2026
              </h2>

              <p className="text-white/70 text-lg leading-9 mt-8">
                SSC GD Constables are placed under Pay Level-3 of the
                7th Pay Commission. Along with the basic pay,
                employees receive various allowances and benefits
                provided by the Central Government.
              </p>

              <div className="overflow-x-auto mt-10">

                <table className="w-full border border-orange-500/10 rounded-3xl overflow-hidden">

                  <thead className="bg-orange-500 text-black">

                    <tr>

                      <th className="px-6 py-4 text-left">
                        Component
                      </th>

                      <th className="px-6 py-4 text-left">
                        Details
                      </th>

                    </tr>

                  </thead>

                  <tbody>

                    {[
                      ["Pay Level", "Level-3"],
                      ["Basic Pay", "₹21,700"],
                      ["Pay Scale", "₹21,700 – ₹69,100"],
                      ["In-Hand Salary", "₹30,000 – ₹35,000 (Approx.)"],
                    ].map((row) => (

                      <tr
                        key={row[0]}
                        className="border-t border-orange-500/10"
                      >

                        <td className="px-6 py-5">
                          {row[0]}
                        </td>

                        <td className="px-6 py-5 text-orange-300 font-semibold">
                          {row[1]}
                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>

            </div>

            {/* In-Hand Salary */}
            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10 md:p-14">

              <h2 className="text-4xl font-bold">
                SSC GD In-Hand Salary
              </h2>

              <p className="text-white/70 text-lg leading-9 mt-8">
                The approximate in-hand salary of an SSC GD Constable
                ranges between <span className="text-orange-300 font-semibold">₹30,000 to ₹35,000 per month</span>.
                The exact salary depends on the city of posting,
                HRA category, deductions and other applicable allowances.
              </p>

            </div>

            {/* Allowances */}
            <div className="mt-24">

              <h2 className="text-4xl font-bold">
                SSC GD Allowances & Benefits
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-10">

                {[
                  "Dearness Allowance (DA)",
                  "House Rent Allowance (HRA)",
                  "Transport Allowance (TA)",
                  "Medical Facilities",
                  "Pension & Retirement Benefits",
                  "Paid Leaves and Government Holidays",
                ].map((item) => (

                  <div
                    key={item}
                    className="bg-[#111827]/70 border border-orange-500/10 rounded-3xl p-6"
                  >

                    <p className="text-lg leading-8">
                      ✅ {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>

            {/* Promotion */}
            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10 md:p-14">

              <h2 className="text-4xl font-bold">
                SSC GD Promotion & Career Growth
              </h2>

              <p className="text-white/70 text-lg leading-9 mt-8">
                SSC GD Constables receive regular promotions based on
                departmental examinations, experience and service record.
                Career progression includes promotions to
                Head Constable, Assistant Sub Inspector (ASI),
                Sub Inspector (SI) and higher ranks over time.
              </p>

            </div>
                        {/* FAQ */}
            <div className="mt-24">

              <h2 className="text-4xl font-bold">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6 mt-10">

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    What is the basic pay of SSC GD Constable?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">
                    The basic pay of SSC GD Constable is ₹21,700
                    under Pay Level-3 of the 7th Pay Commission.
                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    What is the in-hand salary of SSC GD?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">
                    The approximate in-hand salary ranges between
                    ₹30,000 and ₹35,000 per month depending on
                    the posting location and applicable allowances.
                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    Which allowances are provided to SSC GD Constables?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">
                    SSC GD personnel receive Dearness Allowance,
                    House Rent Allowance, Transport Allowance,
                    Medical Facilities and other government benefits.
                  </p>

                </div>

              </div>

            </div>

            {/* Internal Links */}
            <div className="grid md:grid-cols-3 gap-8 mt-24">

              <Link
                href="/ssc-gd-syllabus"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">
                  SSC GD Syllabus
                </h3>

                <p className="text-white/50 mt-4">
                  Complete syllabus →
                </p>

              </Link>

              <Link
                href="/ssc-gd-exam-pattern"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">
                  SSC GD Exam Pattern
                </h3>

                <p className="text-white/50 mt-4">
                  Latest exam pattern →
                </p>

              </Link>

              <Link
                href="/ssc-gd-cutoff"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">
                  SSC GD Cutoff
                </h3>

                <p className="text-white/50 mt-4">
                  Expected & previous year cutoff →
                </p>

              </Link>

            </div>

          </div>

        </section>

      </main>

    </ToolContainer>

  );

}