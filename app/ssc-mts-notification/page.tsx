import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "../../components/Navbar";
import ToolContainer from "../../components/ToolContainer";

export const metadata: Metadata = {
  title:
    "SSC MTS Notification 2026 — Vacancy, Eligibility & Exam Date",

  description:
    "Check SSC MTS Notification 2026 including vacancy, eligibility, exam date, important dates, application process and latest updates.",

  keywords: [
    "SSC MTS Notification 2026",
    "SSC MTS Vacancy",
    "SSC MTS Exam Date",
    "SSC MTS Eligibility",
    "SSC MTS Apply Online",
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
                SSC MTS 2026
              </p>

              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mt-5">

                SSC MTS

                <span className="text-orange-400">
                  {" "}Notification 2026
                </span>

              </h1>

              <p className="text-white/60 text-lg md:text-xl leading-9 mt-8 max-w-4xl mx-auto">

                Check SSC MTS Notification 2026 including
                vacancy, eligibility, exam date,
                important dates, application process
                and latest recruitment updates.

              </p>

            </div>

            {/* Quick Cards */}

            <div className="grid md:grid-cols-4 gap-8 mt-20">

              {[
                {
                  title: "Qualification",
                  value: "10th Pass",
                },

                {
                  title: "Mode",
                  value: "Online",
                },

                {
                  title: "Posts",
                  value: "MTS & Havaldar",
                },

                {
                  title: "Authority",
                  value: "SSC",
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
                SSC MTS Notification Overview
              </h2>

              <p className="text-white/70 text-lg leading-9 mt-8">

                The Staff Selection Commission (SSC) releases the
                SSC MTS Notification every year to recruit eligible
                candidates for Multi-Tasking Staff (MTS) and Havaldar posts
                in various ministries, departments and government offices.

              </p>

              <p className="text-white/70 text-lg leading-9 mt-6">

                The official notification includes complete details
                regarding vacancies, eligibility criteria,
                application dates, exam pattern,
                selection process and other important instructions
                for candidates.

              </p>

            </div>
                        {/* Important Dates */}
            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10 md:p-14">

              <h2 className="text-4xl font-bold">
                SSC MTS Important Dates 2026
              </h2>

              <div className="overflow-x-auto mt-10">

                <table className="w-full border border-orange-500/10 rounded-3xl overflow-hidden">

                  <thead className="bg-orange-500 text-black">

                    <tr>

                      <th className="px-6 py-4 text-left">
                        Event
                      </th>

                      <th className="px-6 py-4 text-left">
                        Status
                      </th>

                    </tr>

                  </thead>

                  <tbody>

                    {[
                      ["Notification Release", "To be Announced"],
                      ["Online Application Starts", "To be Announced"],
                      ["Last Date to Apply", "To be Announced"],
                      ["Admit Card", "Before Exam"],
                      ["Computer Based Exam", "To be Announced"],
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

            {/* Vacancy Details */}
            <div className="mt-24">

              <h2 className="text-4xl font-bold">
                SSC MTS Vacancy Details
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-10">

                {[
                  {
                    title: "Multi-Tasking Staff (MTS)",
                    desc: "Vacancies are released for various central government ministries, departments and offices across India.",
                  },

                  {
                    title: "Havaldar",
                    desc: "Separate vacancies are announced for Havaldar posts in CBIC and CBN departments.",
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

            {/* Eligibility */}
            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10 md:p-14">

              <h2 className="text-4xl font-bold">
                SSC MTS Eligibility Criteria
              </h2>

              <div className="space-y-6 mt-10">

                {[
                  "Candidates must have passed Matriculation (Class 10) or equivalent from a recognized board.",
                  "Applicants should satisfy the age criteria mentioned in the official notification.",
                  "Age relaxation is available for reserved categories as per government rules.",
                  "Candidates applying for Havaldar posts must also qualify the Physical Efficiency Test (PET) and Physical Standard Test (PST).",
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

            {/* Selection Process */}
            <div className="mt-24">

              <h2 className="text-4xl font-bold">
                SSC MTS Selection Process
              </h2>

              <div className="space-y-6 mt-10">

                {[
                  "Computer Based Examination (CBT)",
                  "Physical Efficiency Test (PET) & Physical Standard Test (PST) for Havaldar posts",
                  "Document Verification",
                  "Final Merit List",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="bg-[#111827]/70 border border-orange-500/10 rounded-3xl p-6"
                  >

                    <p className="text-lg">
                      {index + 1}. {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>
                        {/* Application Fee */}
            <div className="mt-24">

              <h2 className="text-4xl font-bold">
                SSC MTS Application Fee
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-10">

                {[
                  "General, OBC and EWS candidates are required to pay the prescribed application fee.",
                  "Women, SC, ST, PwBD and Ex-Servicemen candidates are generally exempted from the application fee as per SSC rules.",
                  "Application fee can be paid through online payment modes.",
                  "Candidates should verify the latest fee details from the official notification before submitting the application.",
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
                How to Apply for SSC MTS 2026?
              </h2>

              <div className="space-y-6 mt-10">

                {[
                  "Visit the official SSC website and complete One-Time Registration (OTR), if required.",
                  "Log in using your registration credentials.",
                  "Fill in the SSC MTS online application form carefully.",
                  "Upload the required photograph, signature and other documents.",
                  "Pay the application fee (if applicable) and submit the application form.",
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
                    When will SSC MTS Notification 2026 be released?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">
                    SSC will release the official notification on its official website. Candidates should regularly check for the latest updates.
                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    What is the educational qualification for SSC MTS?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">
                    Candidates must have passed Class 10 (Matriculation) or an equivalent examination from a recognized board.
                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    Is there a physical test in SSC MTS?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">
                    Physical Efficiency Test (PET) and Physical Standard Test (PST) are conducted only for candidates applying for Havaldar posts.
                  </p>

                </div>

              </div>

            </div>

            {/* Internal Links */}
            <div className="grid md:grid-cols-3 gap-8 mt-24">

              <Link
                href="/ssc-mts-syllabus"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">
                  SSC MTS Syllabus
                </h3>

                <p className="text-white/50 mt-4">
                  Complete subject-wise syllabus →
                </p>

              </Link>

              <Link
                href="/ssc-mts-exam-pattern"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">
                  SSC MTS Exam Pattern
                </h3>

                <p className="text-white/50 mt-4">
                  Latest paper pattern →
                </p>

              </Link>

              <Link
                href="/ssc-mts-cutoff"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">
                  SSC MTS Cutoff
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