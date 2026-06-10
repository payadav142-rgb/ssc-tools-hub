import type { Metadata } from "next";

import Link from "next/link";

export const metadata: Metadata = {

  title:
    "Best SSC CGL Books 2026 — Subject Wise Preparation Books",

  description:
    "Check best SSC CGL books 2026 for Quant, Reasoning, English and General Awareness preparation.",

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

              SSC CGL Preparation

            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mt-5">

              Best SSC CGL Books 2026

            </h1>

            <p className="text-white/60 text-xl leading-9 mt-8 max-w-4xl">

              Check subject wise best SSC CGL books
              for Quantitative Aptitude, Reasoning,
              English and General Awareness preparation.

            </p>

          </div>

          {/* Quick Cards */}
          <div className="grid md:grid-cols-4 gap-8 mt-20">

            {[
              {
                title: "Quant",
                desc: "Mathematics Books",
              },

              {
                title: "English",
                desc: "Grammar & Vocabulary",
              },

              {
                title: "Reasoning",
                desc: "Logical Preparation",
              },

              {
                title: "GK",
                desc: "General Awareness",
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

              Best Books For SSC CGL Preparation

            </h2>

            <p className="text-white/70 text-lg leading-9 mt-8">

              Choosing the right SSC CGL books is important
              for building concepts, improving practice
              and scoring well in the examination.

            </p>

            {/* Quant */}
            <h2 className="text-4xl font-bold mt-20">

              Quantitative Aptitude Books

            </h2>

            <div className="space-y-6 mt-10">

              {[
                "Fast Track Arithmetic",
                "SSC Mathematics by Rakesh Yadav",
                "Advanced Maths Practice Books",
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

            {/* English */}
            <h2 className="text-4xl font-bold mt-20">

              English Language Books

            </h2>

            <div className="space-y-6 mt-10">

              {[
                "Objective General English",
                "Plinth To Paramount",
                "Vocabulary & Grammar Practice Books",
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

            {/* Reasoning */}
            <h2 className="text-4xl font-bold mt-20">

              Reasoning Books

            </h2>

            <div className="space-y-6 mt-10">

              {[
                "Verbal & Non Verbal Reasoning",
                "Analytical Reasoning Practice",
                "Previous Year Reasoning Questions",
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

            {/* GK */}
            <h2 className="text-4xl font-bold mt-20">

              General Awareness Books

            </h2>

            <div className="space-y-6 mt-10">

              {[
                "Lucent General Knowledge",
                "Current Affairs Monthly Magazines",
                "NCERT Based GK Notes",
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

                  Which book is best for SSC CGL Maths?

                </h3>

                <p className="text-white/60 mt-4 leading-8">

                  Fast Track Arithmetic and Rakesh Yadav Maths books are popular among SSC aspirants.

                </p>

              </div>

              <div className="bg-black/30 border border-orange-500/10 rounded-3xl p-6">

                <h3 className="text-2xl font-semibold">

                  Are NCERT books useful for SSC CGL?

                </h3>

                <p className="text-white/60 mt-4 leading-8">

                  Yes, NCERT books help build strong basics especially for General Awareness preparation.

                </p>

              </div>

            </div>

          </div>

          {/* Internal Links */}
          <div className="grid md:grid-cols-3 gap-8 mt-24">

            {[
              {
                title: "SSC CGL Syllabus",
                link: "/ssc-cgl-syllabus",
              },

              {
                title: "SSC CGL Cutoff",
                link: "/ssc-cgl-cutoff",
              },

              {
                title: "SSC CGL Salary",
                link: "/ssc-cgl-salary",
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