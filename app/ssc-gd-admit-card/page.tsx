import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "../../components/Navbar";
import ToolContainer from "../../components/ToolContainer";

export const metadata: Metadata = {
  title:
    "SSC GD Admit Card 2026 — Download Hall Ticket & Exam Date",

  description:
    "Download SSC GD Admit Card 2026 and check exam date, application status, documents required, exam day instructions and latest updates.",

  keywords: [
    "SSC GD Admit Card 2026",
    "SSC GD Hall Ticket",
    "SSC GD Exam Date",
    "SSC GD Application Status",
    "SSC GD Admit Card Download",
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
                  {" "}Admit Card 2026
                </span>

              </h1>

              <p className="text-white/60 text-lg md:text-xl leading-9 mt-8 max-w-4xl mx-auto">

                Download SSC GD Admit Card 2026 and check
                application status, exam date,
                exam city, required documents
                and exam day guidelines.

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
                  title: "Status",
                  value: "Before Exam",
                },

                {
                  title: "Official",
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
                SSC GD Admit Card Overview
              </h2>

              <p className="text-white/70 text-lg leading-9 mt-8">

                Staff Selection Commission releases the
                SSC GD Admit Card a few days before the
                Computer Based Examination (CBT).
                Candidates can download the admit card
                using their Registration Number and Password.

              </p>

              <p className="text-white/70 text-lg leading-9 mt-6">

                The admit card contains important details
                such as exam date, reporting time,
                examination centre, candidate information
                and exam day instructions.

              </p>

            </div>
                        {/* Important Dates */}
            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10 md:p-14">

              <h2 className="text-4xl font-bold">
                SSC GD Admit Card Important Dates
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
                      ["Application Status", "To be Announced"],
                      ["Exam City Slip", "Before Admit Card"],
                      ["Admit Card Release", "Before Exam"],
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

            {/* How to Download */}
            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10 md:p-14">

              <h2 className="text-4xl font-bold">
                How to Download SSC GD Admit Card?
              </h2>

              <div className="space-y-6 mt-10">

                {[
                  "Visit the official SSC website.",
                  "Open the Admit Card section.",
                  "Select your SSC Region.",
                  "Enter Registration Number/Roll Number and Password or Date of Birth.",
                  "Verify the details and submit.",
                  "Download and print the admit card for the examination.",
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

            {/* Details Mentioned */}
            <div className="mt-24">

              <h2 className="text-4xl font-bold">
                Details Mentioned on Admit Card
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-10">

                {[
                  {
                    title: "Candidate Information",
                    desc: "Name, roll number, photograph, signature and registration details.",
                  },

                  {
                    title: "Exam Centre",
                    desc: "Exam city, reporting time and complete examination venue.",
                  },

                  {
                    title: "Exam Schedule",
                    desc: "Exam date, shift timing and reporting instructions.",
                  },

                  {
                    title: "Important Instructions",
                    desc: "Guidelines to be followed on the examination day.",
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

            {/* Documents Required */}
            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10 md:p-14">

              <h2 className="text-4xl font-bold">
                Documents Required at Exam Centre
              </h2>

              <div className="space-y-6 mt-10">

                {[
                  "Printed copy of SSC GD Admit Card.",
                  "Original Photo Identity Proof (Aadhaar Card, PAN Card, Voter ID, Passport, Driving Licence etc.).",
                  "Passport-size photographs, if mentioned in the admit card instructions.",
                  "Any additional document specified by SSC.",
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
                        {/* Exam Day Instructions */}
            <div className="mt-24">

              <h2 className="text-4xl font-bold">
                SSC GD Exam Day Instructions
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-10">

                {[
                  "Reach the examination centre at least 60 minutes before reporting time.",
                  "Carry a printed admit card along with a valid original photo ID proof.",
                  "Electronic gadgets such as mobile phones, smart watches and calculators are strictly prohibited.",
                  "Follow all instructions given by the invigilators during the examination.",
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

            {/* FAQ */}
            <div className="mt-24">

              <h2 className="text-4xl font-bold">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6 mt-10">

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    When will SSC GD Admit Card 2026 be released?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">
                    SSC generally releases the admit card a few days before the Computer Based Examination (CBT).
                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    How can I download my SSC GD Admit Card?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">
                    You can download it using your Registration Number/Roll Number and Password or Date of Birth from the SSC regional website.
                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    Is it mandatory to carry a photo ID?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">
                    Yes. Candidates must carry the printed admit card along with a valid original photo identity proof.
                  </p>

                </div>

              </div>

            </div>

            {/* Internal Links */}
            <div className="grid md:grid-cols-3 gap-8 mt-24">

              <Link
                href="/ssc-gd-notification"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">
                  SSC GD Notification
                </h3>

                <p className="text-white/50 mt-4">
                  Vacancy, eligibility & exam dates →
                </p>

              </Link>

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
                  Latest CBT paper pattern →
                </p>

              </Link>

            </div>

          </div>

        </section>

      </main>

    </ToolContainer>

  );

}