import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "../../components/Navbar";
import ToolContainer from "../../components/ToolContainer";

export const metadata: Metadata = {
  title:
    "SSC GD Notification 2026 — Vacancy, Eligibility, Exam Date & Apply Online",

  description:
    "Check SSC GD Notification 2026 including vacancy, eligibility, age limit, important dates, exam date, selection process and application details.",

  keywords: [
    "SSC GD Notification 2026",
    "SSC GD Vacancy 2026",
    "SSC GD Apply Online",
    "SSC GD Eligibility",
    "SSC GD Exam Date",
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

                SSC GD

                <span className="text-orange-400">
                  {" "}Notification 2026
                </span>

              </h1>

              <p className="text-white/60 text-lg md:text-xl leading-9 mt-8 max-w-4xl mx-auto">

                Check complete SSC GD Notification 2026 including
                vacancy, eligibility, age limit,
                important dates, exam date,
                application process and selection procedure.

              </p>

            </div>

            {/* Quick Cards */}

            <div className="grid md:grid-cols-4 gap-8 mt-20">

              {[
                {
                  title: "Posts",
                  value: "GD Constable",
                },

                {
                  title: "Qualification",
                  value: "10th Pass",
                },

                {
                  title: "Mode",
                  value: "Online",
                },

                {
                  title: "Selection",
                  value: "CBT + PET/PST",
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

            {/* Overview */}

            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10 md:p-14">

              <h2 className="text-4xl font-bold">
                SSC GD Notification Overview
              </h2>

              <p className="text-white/70 text-lg leading-9 mt-8">

                Staff Selection Commission releases the SSC GD
                Notification every year to recruit Constables in
                BSF, CISF, CRPF, ITBP, SSB, Assam Rifles,
                SSF and NCB.

              </p>

              <p className="text-white/70 text-lg leading-9 mt-6">

                Candidates must satisfy the eligibility criteria,
                educational qualification and age limit before
                submitting the online application form.

              </p>

            </div>
                        {/* Important Dates */}
            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10 md:p-14">

              <h2 className="text-4xl font-bold">
                SSC GD Important Dates 2026
              </h2>

              <div className="overflow-x-auto mt-10">

                <table className="w-full border border-orange-500/10 rounded-3xl overflow-hidden">

                  <thead className="bg-orange-500 text-black">

                    <tr>

                      <th className="px-6 py-4 text-left">
                        Event
                      </th>

                      <th className="px-6 py-4 text-left">
                        Date
                      </th>

                    </tr>

                  </thead>

                  <tbody>

                    {[
                      ["Notification Release", "To be Announced"],
                      ["Online Application Start", "To be Announced"],
                      ["Last Date to Apply", "To be Announced"],
                      ["Application Correction", "To be Announced"],
                      ["Admit Card", "Before Exam"],
                      ["CBT Exam Date", "To be Announced"],
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

            {/* Vacancy */}
            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10 md:p-14">

              <h2 className="text-4xl font-bold">
                SSC GD Vacancy 2026
              </h2>

              <p className="text-white/70 text-lg leading-9 mt-8">

                SSC releases category-wise and force-wise vacancies
                along with the official notification.
                Thousands of vacancies are generally announced
                every year for various Central Armed Police Forces.

              </p>

            </div>

            {/* Eligibility */}
            <div className="mt-24">

              <h2 className="text-4xl font-bold">
                SSC GD Eligibility Criteria
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-10">

                {[
                  {
                    title: "Educational Qualification",
                    desc: "Candidates must have passed Class 10 (Matriculation) from a recognized board.",
                  },

                  {
                    title: "Nationality",
                    desc: "Applicants must be Indian citizens and fulfill SSC nationality conditions.",
                  },

                  {
                    title: "Age Limit",
                    desc: "Candidates should generally be between 18 to 23 years. Age relaxation applies for reserved categories.",
                  },

                  {
                    title: "Physical Standards",
                    desc: "Candidates must satisfy the required Physical Standard Test (PST) criteria.",
                  },

                ].map((item) => (

                  <div
                    key={item.title}
                    className="bg-black/20 border border-orange-500/10 rounded-3xl p-8"
                  >

                    <h3 className="text-2xl font-bold text-orange-300">
                      {item.title}
                    </h3>

                    <p className="text-white/60 leading-8 mt-5">
                      {item.desc}
                    </p>

                  </div>

                ))}

              </div>

            </div>

            {/* Selection Process */}
            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10 md:p-14">

              <h2 className="text-4xl font-bold">
                SSC GD Selection Process
              </h2>

              <div className="space-y-6 mt-10">

                {[
                  "Computer Based Test (CBT)",
                  "Physical Efficiency Test (PET)",
                  "Physical Standard Test (PST)",
                  "Medical Examination",
                  "Document Verification",
                ].map((item) => (

                  <div
                    key={item}
                    className="bg-black/20 border border-orange-500/10 rounded-3xl p-6"
                  >

                    <p className="text-lg">
                      ✅ {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>
                        {/* Application Fee */}
            <div className="mt-24">

              <h2 className="text-4xl font-bold">
                SSC GD Application Fee
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-10">

                {[
                  "General / OBC / EWS candidates are required to pay the prescribed application fee.",
                  "Women, SC, ST and Ex-Servicemen are generally exempted from the application fee as per SSC rules.",
                  "Fee can be paid through online payment modes.",
                  "Always verify the latest fee details in the official notification.",
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

            {/* How to Apply */}
            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10 md:p-14">

              <h2 className="text-4xl font-bold">
                How to Apply for SSC GD 2026?
              </h2>

              <div className="space-y-6 mt-10">

                {[
                  "Visit the official SSC website and complete One-Time Registration (OTR), if required.",
                  "Log in and fill out the SSC GD online application form carefully.",
                  "Upload the required photograph, signature and other documents.",
                  "Pay the application fee (if applicable) and submit the form.",
                  "Download and print the confirmation page for future reference.",
                ].map((step, index) => (

                  <div
                    key={index}
                    className="bg-black/20 border border-orange-500/10 rounded-3xl p-6"
                  >

                    <p className="text-lg">
                      {index + 1}. {step}
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
                    When will SSC GD Notification 2026 be released?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">
                    The notification will be released by SSC on its official website. Candidates should regularly check for updates.
                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    What is the educational qualification for SSC GD?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">
                    Candidates must have passed Class 10 (Matriculation) from a recognized board.
                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    Is there a physical test in SSC GD?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">
                    Yes. Candidates who qualify the CBT must appear for the Physical Efficiency Test (PET) and Physical Standard Test (PST).
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
                  Complete subject-wise syllabus →
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
                  Latest CBT pattern →
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