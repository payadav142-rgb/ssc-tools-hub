import type { Metadata } from "next";

import Link from "next/link";

export const metadata: Metadata = {

  title:
    "SSC CGL Exam Date 2026 — Tier 1 & Tier 2 Schedule",

  description:
    "Check SSC CGL exam date 2026 including Tier 1, Tier 2 schedule, application dates and important events.",

};

export default function Page() {

  return (

    <main className="min-h-screen bg-[#0B0F19] text-white overflow-hidden relative">

      {/* Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="absolute top-[40%] right-0 w-[400px] h-[400px] bg-amber-400/10 blur-[120px] rounded-full pointer-events-none"></div>

      <section className="relative z-10 px-6 py-20">

        <div className="max-w-5xl mx-auto">

          {/* Hero */}
          <div>

            <p className="text-orange-300 font-medium">

              SSC CGL 2026

            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mt-5">

              SSC CGL Exam Date 2026

            </h1>

            <p className="text-white/60 text-xl leading-9 mt-8 max-w-4xl">

              Check SSC CGL Tier 1 and Tier 2 exam schedule,
              application dates, admit card release
              and important events.

            </p>

          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">

            {[
              {
                title: "Tier 1",
                desc: "Online Examination",
              },

              {
                title: "Tier 2",
                desc: "Advanced Paper",
              },

              {
                title: "Admit Card",
                desc: "Hall Ticket Release",
              },

            ].map((item, index) => (

              <div
                key={index}
                className="bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8"
              >

                <h2 className="text-3xl font-bold text-orange-300">

                  {item.title}

                </h2>

                <p className="text-white/60 mt-4">

                  {item.desc}

                </p>

              </div>

            ))}

          </div>

          {/* Main Content */}
          <div className="mt-24 bg-[#111827]/70 border border-orange-500/10 rounded-[40px] p-8 md:p-12">

            <h2 className="text-4xl font-bold">

              SSC CGL Important Dates 2026

            </h2>

            <p className="text-white/70 text-lg leading-9 mt-8">

              SSC releases the official SSC CGL examination schedule
              through the annual examination calendar and notification.

            </p>

            {/* Timeline */}
            <div className="space-y-6 mt-12">

              {[
                "SSC CGL Notification Release",
                "Online Application Start",
                "Last Date To Apply",
                "Admit Card Release",
                "Tier 1 Examination",
                "Tier 2 Examination",
                "Result Declaration",
              ].map((item, index) => (

                <div
                  key={item}
                  className="bg-black/30 border border-orange-500/10 rounded-3xl p-6 flex items-center gap-5"
                >

                  <div className="w-12 h-12 rounded-full bg-orange-500 text-black flex items-center justify-center font-bold text-lg">

                    {index + 1}

                  </div>

                  <p className="text-xl font-medium">

                    {item}

                  </p>

                </div>

              ))}

            </div>

            {/* Tier 1 */}
            <h2 className="text-4xl font-bold mt-20">

              SSC CGL Tier 1 Exam Date

            </h2>

            <p className="text-white/70 text-lg leading-9 mt-8">

              Tier 1 examination is the first stage
              of SSC CGL recruitment process.
              It is conducted online across multiple shifts.

            </p>

            {/* Tier 2 */}
            <h2 className="text-4xl font-bold mt-20">

              SSC CGL Tier 2 Exam Date

            </h2>

            <p className="text-white/70 text-lg leading-9 mt-8">

              Candidates qualifying Tier 1 examination
              are eligible for Tier 2 exam.
              Tier 2 is more advanced and competitive.

            </p>

            {/* Preparation Tips */}
            <h2 className="text-4xl font-bold mt-20">

              Preparation Tips Before Exam

            </h2>

            <div className="space-y-6 mt-10">

              {[
                "Revise important topics regularly.",
                "Practice previous year question papers.",
                "Attempt mock tests weekly.",
                "Improve speed and accuracy.",
              ].map((item) => (

                <div
                  key={item}
                  className="bg-black/30 border border-orange-500/10 rounded-3xl p-6"
                >

                  <p className="text-lg leading-8">

                    {item}

                  </p>

                </div>

              ))}

            </div>

            {/* FAQ */}
            <h2 className="text-4xl font-bold mt-20">

              Frequently Asked Questions

            </h2>

            <div className="space-y-6 mt-10">

              <div className="bg-black/30 border border-orange-500/10 rounded-3xl p-6">

                <h3 className="text-2xl font-semibold">

                  When will SSC CGL exam be conducted?

                </h3>

                <p className="text-white/60 mt-4 leading-8">

                  SSC releases official examination dates through notification and annual calendar.

                </p>

              </div>

              <div className="bg-black/30 border border-orange-500/10 rounded-3xl p-6">

                <h3 className="text-2xl font-semibold">

                  Is SSC CGL exam conducted online?

                </h3>

                <p className="text-white/60 mt-4 leading-8">

                  Yes, SSC CGL Tier 1 and Tier 2 examinations are conducted online.

                </p>

              </div>

            </div>

          </div>

          {/* Internal Links */}
          <div className="grid md:grid-cols-3 gap-8 mt-24">

            {[
              {
                title: "SSC CGL Admit Card",
                link: "/ssc-cgl-admit-card",
              },

              {
                title: "SSC CGL Notification",
                link: "/ssc-cgl-notification",
              },

              {
                title: "SSC CGL Syllabus",
                link: "/ssc-cgl-syllabus",
              },

            ].map((item) => (

              <Link
                key={item.title}
                href={item.link}
                className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 transition-all"
              >

                <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">

                  {item.title}

                </h3>

                <p className="text-white/50 mt-4">

                  Read More →

                </p>

              </Link>

            ))}

          </div>

        </div>

      </section>

    </main>

  );

}