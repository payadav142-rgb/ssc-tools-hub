import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "../../components/Navbar";
import ToolContainer from "../../components/ToolContainer";

export const metadata: Metadata = {
  title:
    "SSC MTS Admit Card 2026 — Download Hall Ticket & Exam Date",

  description:
    "Download SSC MTS Admit Card 2026. Check release date, exam date, region-wise admit card links, documents required and exam day guidelines.",

  keywords: [
    "SSC MTS Admit Card 2026",
    "SSC MTS Hall Ticket",
    "SSC MTS Exam Date",
    "SSC MTS Admit Card Download",
    "SSC MTS Region Wise Admit Card",
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
                  {" "}Admit Card 2026
                </span>

              </h1>

              <p className="text-white/60 text-lg md:text-xl leading-9 mt-8 max-w-4xl mx-auto">

                Download SSC MTS Admit Card 2026 and check
                exam date, application status,
                region-wise hall ticket links,
                documents required and exam day instructions.

              </p>

            </div>

            {/* Quick Cards */}

            <div className="grid md:grid-cols-4 gap-8 mt-20">

              {[
                {
                  title: "Mode",
                  value: "Online",
                },

                {
                  title: "Exam",
                  value: "CBT",
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
                SSC MTS Admit Card Overview
              </h2>

              <p className="text-white/70 text-lg leading-9 mt-8">

                The Staff Selection Commission (SSC) releases
                the SSC MTS Admit Card a few days before the
                Computer Based Examination. Candidates can
                download their hall ticket from the respective
                SSC regional website using their registration
                details.

              </p>

              <p className="text-white/70 text-lg leading-9 mt-6">

                The admit card contains important information
                such as exam date, reporting time,
                examination centre, shift timing and
                candidate details. Candidates should carefully
                verify all information before the examination.

              </p>

            </div>
                        {/* Important Dates */}
            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10 md:p-14">

              <h2 className="text-4xl font-bold">
                SSC MTS Admit Card Important Dates
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
                      ["Application Status", "Before Admit Card"],
                      ["Admit Card Release", "Few Days Before Exam"],
                      ["SSC MTS CBT Exam", "To be Announced"],
                      ["Result Declaration", "After Examination"],
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

            {/* How to Download */}
            <div className="mt-24">

              <h2 className="text-4xl font-bold">
                How to Download SSC MTS Admit Card
              </h2>

              <div className="space-y-6 mt-10">

                {[
                  "Visit the official SSC regional website.",
                  "Open the Admit Card or Application Status section.",
                  "Select SSC MTS Examination.",
                  "Enter your Registration Number/Roll Number and Date of Birth.",
                  "Submit the details and download your admit card.",
                  "Take a clear printout for the examination day.",
                ].map((step, index) => (

                  <div
                    key={index}
                    className="bg-[#111827]/70 border border-orange-500/10 rounded-3xl p-6"
                  >

                    <p className="text-lg">
                      {index + 1}. {step}
                    </p>

                  </div>

                ))}

              </div>

            </div>

            {/* Details Mentioned */}
            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10 md:p-14">

              <h2 className="text-4xl font-bold">
                Details Mentioned on SSC MTS Admit Card
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-10">

                {[
                  "Candidate's Name",
                  "Roll Number & Registration Number",
                  "Exam Date & Shift Timing",
                  "Reporting Time",
                  "Exam Centre Address",
                  "Candidate Photograph & Signature",
                  "Important Exam Instructions",
                  "Exam Duration",
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

            {/* Documents Required */}
            <div className="mt-24">

              <h2 className="text-4xl font-bold">
                Documents Required at Exam Centre
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-10">

                {[
                  "Printed copy of SSC MTS Admit Card.",
                  "Original Photo ID Proof (Aadhaar, PAN, Passport, Voter ID, Driving Licence, etc.).",
                  "Passport-size photographs, if mentioned in the admit card instructions.",
                  "Any additional documents required by SSC for verification.",
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
                        {/* Exam Day Instructions */}
            <div className="mt-24">

              <h2 className="text-4xl font-bold">
                SSC MTS Exam Day Instructions
              </h2>

              <div className="space-y-6 mt-10">

                {[
                  "Reach the examination centre at least 60 minutes before the reporting time.",
                  "Carry a printed copy of the SSC MTS Admit Card along with a valid original photo ID proof.",
                  "Electronic gadgets such as mobile phones, smart watches and calculators are strictly prohibited.",
                  "Follow all instructions given by the invigilator throughout the examination.",
                  "Verify your seat number and candidate details before starting the CBT.",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="bg-[#111827]/70 border border-orange-500/10 rounded-3xl p-6"
                  >

                    <p className="text-lg">
                      ✅ {item}
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
                    When will SSC MTS Admit Card 2026 be released?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">

                    SSC generally releases the admit card a few days before the examination. Candidates should regularly check the official regional SSC websites.

                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    What should I do if there is an error on my admit card?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">

                    Immediately contact the concerned SSC regional office to get the issue corrected before the examination.

                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    Is a digital copy of the admit card accepted?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">

                    No. Candidates should carry a printed copy of the admit card along with a valid original photo ID proof.

                  </p>

                </div>

              </div>

            </div>

            {/* Internal Links */}
            <div className="grid md:grid-cols-3 gap-8 mt-24">

              <Link
                href="/ssc-mts-notification"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">
                  SSC MTS Notification
                </h3>

                <p className="text-white/50 mt-4">
                  Vacancy & eligibility →
                </p>

              </Link>

              <Link
                href="/ssc-mts-syllabus"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">
                  SSC MTS Syllabus
                </h3>

                <p className="text-white/50 mt-4">
                  Complete topic-wise syllabus →
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