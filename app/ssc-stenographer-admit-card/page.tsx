import type { Metadata } from "next";
import Link from "next/link";

import Navbar from "../../components/Navbar";
import ToolContainer from "../../components/ToolContainer";

export const metadata: Metadata = {
  title:
    "SSC Stenographer Admit Card 2026 — Download Hall Ticket",

  description:
    "Check SSC Stenographer Admit Card 2026 release date, download process, exam details, important instructions and regional SSC websites.",

  keywords: [
    "SSC Stenographer Admit Card 2026",
    "SSC Stenographer Hall Ticket",
    "SSC Stenographer Admit Card Download",
    "SSC Stenographer Exam Date",
    "SSC Stenographer Call Letter",
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
                SSC Stenographer 2026
              </p>

              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mt-5">

                SSC Stenographer

                <span className="text-orange-400">
                  {" "}Admit Card 2026
                </span>

              </h1>

              <p className="text-white/60 text-lg md:text-xl leading-9 mt-8 max-w-4xl mx-auto">

                Check SSC Stenographer Admit Card 2026
                release updates, exam date,
                hall ticket download process,
                regional websites and important
                instructions for candidates.

              </p>

            </div>

            {/* Quick Cards */}
            <div className="grid md:grid-cols-4 gap-8 mt-20">

              {[
                {
                  title: "Exam",
                  value: "CBT",
                },

                {
                  title: "Admit Card",
                  value: "Online",
                },

                {
                  title: "Download",
                  value: "Regional",
                },

                {
                  title: "Official Website",
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
                SSC Stenographer Admit Card Overview
              </h2>

              <p className="text-white/70 text-lg leading-9 mt-8">

                The Staff Selection Commission releases
                admit cards for eligible candidates before
                the Computer Based Examination. Candidates
                can download their hall ticket through the
                relevant SSC regional website.

              </p>

              <p className="text-white/70 text-lg leading-9 mt-6">

                Candidates should carefully check their
                name, roll number, examination date,
                reporting time and examination centre
                details after downloading the admit card.

              </p>

            </div>

            {/* Important Information */}
            <div className="mt-24">

              <h2 className="text-4xl md:text-5xl font-bold">
                Important Admit Card Information
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-12">

                {[
                  {
                    title: "Release Date",
                    text:
                      "The admit card is generally released before the Computer Based Examination. Candidates should regularly check official SSC updates.",
                  },

                  {
                    title: "Download Mode",
                    text:
                      "SSC Stenographer admit card is available online through the concerned SSC regional website.",
                  },

                  {
                    title: "Login Details",
                    text:
                      "Candidates may need their registration number, roll number, date of birth or other required credentials to access the admit card.",
                  },

                  {
                    title: "Exam Centre",
                    text:
                      "The admit card contains important details about the examination centre, reporting time and candidate instructions.",
                  },

                ].map((item, index) => (

                  <div
                    key={index}
                    className="bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8"
                  >

                    <h3 className="text-2xl font-bold text-orange-300">
                      {item.title}
                    </h3>

                    <p className="text-white/60 leading-8 mt-5">
                      {item.text}
                    </p>

                  </div>

                ))}

              </div>

            </div>
                        {/* Download Steps */}
            <div className="mt-24">

              <h2 className="text-4xl md:text-5xl font-bold">
                How to Download SSC Stenographer Admit Card
              </h2>

              <div className="space-y-6 mt-10">

                {[
                  "Visit the official SSC website or the concerned regional SSC website.",
                  "Open the SSC Stenographer Admit Card 2026 link.",
                  "Enter your registration number or roll number and date of birth.",
                  "Submit the required details to access your admit card.",
                  "Download and save the admit card PDF.",
                  "Take a clear printout and carry it to the examination centre.",
                ].map((step, index) => (

                  <div
                    key={index}
                    className="bg-[#111827]/70 border border-orange-500/10 rounded-3xl p-6 flex gap-5"
                  >

                    <div className="min-w-10 h-10 rounded-full bg-orange-500 text-black font-bold flex items-center justify-center">
                      {index + 1}
                    </div>

                    <p className="text-white/70 text-lg leading-8">
                      {step}
                    </p>

                  </div>

                ))}

              </div>

            </div>

            {/* Documents Required */}
            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10 md:p-14">

              <h2 className="text-4xl font-bold">
                Documents Required on Exam Day
              </h2>

              <p className="text-white/70 text-lg leading-9 mt-8">

                Candidates should carefully check the instructions
                mentioned on their admit card and carry all
                required documents to the examination centre.

              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-10">

                {[
                  "Printed copy of SSC Stenographer Admit Card.",
                  "Valid original photo identity proof.",
                  "Recent passport-size photograph, if required.",
                  "Any additional document mentioned in the admit card instructions.",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="bg-black/20 border border-orange-500/10 rounded-3xl p-6"
                  >

                    <p className="text-lg">
                      ✅ {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>

            {/* Important Instructions */}
            <div className="mt-24">

              <h2 className="text-4xl font-bold">
                SSC Stenographer Exam Day Instructions
              </h2>

              <div className="space-y-6 mt-10">

                {[
                  "Reach the examination centre well before the reporting time.",
                  "Carry the admit card and required original identity proof.",
                  "Check the examination centre address before leaving for the exam.",
                  "Follow all instructions printed on the admit card carefully.",
                  "Do not carry prohibited electronic devices or other restricted items.",
                  "Keep the admit card safe until the complete recruitment process is over.",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="bg-[#111827]/70 border border-orange-500/10 rounded-3xl p-6"
                  >

                    <p className="text-lg leading-8">
                      ⚠️ {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>

            {/* Regional Website */}
            <div className="mt-24 bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10 md:p-14">

              <h2 className="text-4xl font-bold">
                SSC Regional Websites
              </h2>

              <p className="text-white/70 text-lg leading-9 mt-8">

                SSC Stenographer admit cards may be made available
                through the concerned regional SSC website.
                Candidates should use only official SSC websites
                to download their admit card and avoid unofficial
                third-party links.

              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-10">

                {[
                  "SSC Northern Region",
                  "SSC Central Region",
                  "SSC Eastern Region",
                  "SSC Western Region",
                  "SSC Southern Region",
                  "SSC North Eastern Region",
                  "SSC Madhya Pradesh Region",
                  "SSC North Western Region",
                  "SSC Karnataka Kerala Region",
                ].map((region, index) => (

                  <div
                    key={index}
                    className="bg-black/20 border border-orange-500/10 rounded-3xl p-6"
                  >

                    <p className="text-lg text-white/70">
                      🌐 {region}
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
                    When will SSC Stenographer Admit Card 2026 be released?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">

                    The SSC Stenographer Admit Card is generally
                    released before the Computer Based Examination.
                    Candidates should regularly check the official
                    SSC website and concerned regional website
                    for the latest release updates.

                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    How can I download SSC Stenographer Admit Card?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">

                    Candidates can download the admit card online
                    through the concerned SSC regional website.
                    They need to enter the required login details
                    and download the available admit card.

                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    What should I carry to the SSC Stenographer exam centre?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">

                    Candidates should carry a printed copy of the
                    admit card and a valid original photo identity
                    proof. Any additional documents mentioned in
                    the admit card instructions should also be carried.

                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-3xl p-8">

                  <h3 className="text-2xl font-semibold">
                    Can I show the admit card on my mobile phone?
                  </h3>

                  <p className="text-white/60 leading-8 mt-4">

                    Candidates should follow the instructions given
                    by SSC on the admit card and official examination
                    notice. It is recommended to carry a clear printed
                    copy of the admit card to the examination centre.

                  </p>

                </div>

              </div>

            </div>

            {/* Internal Links */}
            <div className="grid md:grid-cols-3 gap-8 mt-24">

              <Link
                href="/ssc-stenographer"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">
                  SSC Stenographer
                </h3>

                <p className="text-white/50 mt-4">
                  Complete guide →
                </p>

              </Link>

              <Link
                href="/ssc-stenographer-notification"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">
                  SSC Stenographer Notification
                </h3>

                <p className="text-white/50 mt-4">
                  Vacancy & eligibility →
                </p>

              </Link>

              <Link
                href="/ssc-stenographer-syllabus"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">
                  SSC Stenographer Syllabus
                </h3>

                <p className="text-white/50 mt-4">
                  Complete syllabus →
                </p>

              </Link>

              <Link
                href="/ssc-stenographer-exam-pattern"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">
                  SSC Stenographer Exam Pattern
                </h3>

                <p className="text-white/50 mt-4">
                  Latest paper pattern →
                </p>

              </Link>

              <Link
                href="/ssc-stenographer-salary"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">
                  SSC Stenographer Salary
                </h3>

                <p className="text-white/50 mt-4">
                  Salary & allowances →
                </p>

              </Link>

              <Link
                href="/ssc-stenographer-cutoff"
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">
                  SSC Stenographer Cutoff
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