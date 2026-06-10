import type { Metadata } from "next";

import Link from "next/link";

export const metadata: Metadata = {

  title:
    "SSC CGL Notification 2026 — Apply Online, Vacancy & Exam Date",

  description:
    "Check SSC CGL notification 2026 including vacancy, eligibility, exam date, syllabus and apply online details.",

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

              SSC Recruitment 2026

            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mt-5">

              SSC CGL Notification 2026

            </h1>

            <p className="text-white/60 text-xl leading-9 mt-8 max-w-4xl">

              Check SSC CGL 2026 notification,
              eligibility, vacancy, exam date,
              syllabus, age limit and apply online process.

            </p>

          </div>

          {/* Quick Info */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">

            {[
              {
                title: "Graduate Level",
                desc: "Eligibility",
              },
              {
                title: "Tier 1 & 2",
                desc: "Exam Stages",
              },
              {
                title: "Govt Job",
                desc: "Central Government Posts",
              },
            ].map((item, index) => (

              <div
                key={index}
                className="bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8"
              >

                <h2 className="text-3xl font-bold text-orange-300">

                  {item.title}

                </h2>

                <p className="text-white/60 mt-4 text-lg">

                  {item.desc}

                </p>

              </div>

            ))}

          </div>

          {/* Main Content */}
          <div className="mt-24 bg-[#111827]/70 border border-orange-500/10 rounded-[40px] p-8 md:p-12">

            <h2 className="text-4xl font-bold">

              SSC CGL 2026 Overview

            </h2>

            <p className="text-white/70 text-lg leading-9 mt-8">

              SSC Combined Graduate Level Examination is one of the most popular government exams conducted for recruitment in various ministries and departments of the Government of India.

            </p>

            <p className="text-white/70 text-lg leading-9 mt-8">

              Through SSC CGL examination, candidates are recruited for posts like Income Tax Inspector, GST Inspector, Assistant Section Officer, CBI Sub Inspector and Auditor.

            </p>

            {/* Eligibility */}
            <h2 className="text-4xl font-bold mt-20">

              SSC CGL Eligibility

            </h2>

            <div className="space-y-6 mt-10">

              {[
                "Candidates must have graduation degree from recognized university.",
                "Minimum age is generally 18 years.",
                "Maximum age depends on post and category.",
                "Age relaxation is provided for reserved categories.",
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

            {/* Selection Process */}
            <h2 className="text-4xl font-bold mt-20">

              SSC CGL Selection Process

            </h2>

            <div className="grid md:grid-cols-2 gap-6 mt-10">

              {[
                "Tier 1 Examination",
                "Tier 2 Examination",
                "Document Verification",
                "Final Merit List",
              ].map((item) => (

                <div
                  key={item}
                  className="bg-black/30 border border-orange-500/10 rounded-3xl p-6"
                >

                  <p className="text-xl font-medium">

                    {item}

                  </p>

                </div>

              ))}

            </div>

            {/* Important Posts */}
            <h2 className="text-4xl font-bold mt-20">

              Popular SSC CGL Posts

            </h2>

            <div className="space-y-6 mt-10">

              {[
                "Income Tax Inspector",
                "GST Inspector",
                "CBI Sub Inspector",
                "Assistant Section Officer",
                "Auditor",
              ].map((item) => (

                <div
                  key={item}
                  className="bg-black/30 border border-orange-500/10 rounded-3xl p-6"
                >

                  <p className="text-xl font-medium">

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

                  Who can apply for SSC CGL?

                </h3>

                <p className="text-white/60 mt-4 leading-8">

                  Candidates having graduation degree from recognized university can apply for SSC CGL examination.

                </p>

              </div>

              <div className="bg-black/30 border border-orange-500/10 rounded-3xl p-6">

                <h3 className="text-2xl font-semibold">

                  Is SSC CGL a good career option?

                </h3>

                <p className="text-white/60 mt-4 leading-8">

                  Yes, SSC CGL offers excellent salary, job security, promotion opportunities and government benefits.

                </p>

              </div>

            </div>

          </div>

          {/* Internal Links */}
          <div className="grid md:grid-cols-3 gap-8 mt-24">

            {[
              {
                title: "SSC CGL Salary",
                link: "/ssc-cgl-salary",
              },

              {
                title: "SSC CGL Syllabus",
                link: "/ssc-cgl-syllabus",
              },

              {
                title: "SSC CGL Exam Pattern",
                link: "/ssc-cgl-exam-pattern",
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