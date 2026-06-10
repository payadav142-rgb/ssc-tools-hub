import type { Metadata } from "next";

import Link from "next/link";

export const metadata: Metadata = {

  title:
    "SSC CGL Admit Card 2026 — Download Tier 1 Hall Ticket",

  description:
    "Download SSC CGL Admit Card 2026 for Tier 1 and Tier 2 examination. Check exam date, region wise links and instructions.",

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

              SSC CGL Admit Card 2026

            </h1>

            <p className="text-white/60 text-xl leading-9 mt-8 max-w-4xl">

              Download SSC CGL Tier 1 and Tier 2 admit card,
              check exam date, application status
              and important exam instructions.

            </p>

          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">

            {[
              {
                title: "Tier 1",
                desc: "Hall Ticket",
              },

              {
                title: "Exam Date",
                desc: "Check Schedule",
              },

              {
                title: "Region Wise",
                desc: "Download Links",
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

              SSC CGL Admit Card Download

            </h2>

            <p className="text-white/70 text-lg leading-9 mt-8">

              SSC releases SSC CGL admit cards region wise
              before the examination.
              Candidates can download their hall ticket
              using registration number and password.

            </p>

            {/* Steps */}
            <h2 className="text-4xl font-bold mt-20">

              How To Download SSC CGL Admit Card

            </h2>

            <div className="space-y-6 mt-10">

              {[
                "Visit official SSC regional website",
                "Open SSC CGL admit card link",
                "Enter registration details",
                "Download and print hall ticket",
              ].map((item, index) => (

                <div
                  key={index}
                  className="bg-black/30 border border-orange-500/10 rounded-3xl p-6 flex gap-5"
                >

                  <div className="w-10 h-10 rounded-full bg-orange-500 text-black flex items-center justify-center font-bold">

                    {index + 1}

                  </div>

                  <p className="text-lg leading-8">

                    {item}

                  </p>

                </div>

              ))}

            </div>

            {/* Important Details */}
            <h2 className="text-4xl font-bold mt-20">

              Details Mentioned On Admit Card

            </h2>

            <div className="grid md:grid-cols-2 gap-6 mt-10">

              {[
                "Candidate Name",
                "Roll Number",
                "Exam Date & Time",
                "Exam Center Address",
                "Reporting Time",
                "Exam Instructions",
              ].map((item) => (

                <div
                  key={item}
                  className="bg-black/30 border border-orange-500/10 rounded-3xl p-6"
                >

                  <p className="text-lg font-medium">

                    {item}

                  </p>

                </div>

              ))}

            </div>

            {/* Important Instructions */}
            <h2 className="text-4xl font-bold mt-20">

              Important Exam Instructions

            </h2>

            <div className="space-y-6 mt-10">

              {[
                "Carry printed admit card to exam center.",
                "Bring valid photo identity proof.",
                "Reach examination center before reporting time.",
                "Electronic gadgets are not allowed.",
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

                  When will SSC CGL admit card release?

                </h3>

                <p className="text-white/60 mt-4 leading-8">

                  SSC generally releases admit cards a few weeks before the examination.

                </p>

              </div>

              <div className="bg-black/30 border border-orange-500/10 rounded-3xl p-6">

                <h3 className="text-2xl font-semibold">

                  Is admit card mandatory for SSC exam?

                </h3>

                <p className="text-white/60 mt-4 leading-8">

                  Yes, candidates must carry printed admit card to the examination center.

                </p>

              </div>

            </div>

          </div>

          {/* Internal Links */}
          <div className="grid md:grid-cols-3 gap-8 mt-24">

            {[
              {
                title: "SSC CGL Notification",
                link: "/ssc-cgl-notification",
              },

              {
                title: "SSC CGL Exam Pattern",
                link: "/ssc-cgl-exam-pattern",
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