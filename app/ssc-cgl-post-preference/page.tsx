import type { Metadata } from "next";

import Link from "next/link";

export const metadata: Metadata = {

  title:
    "SSC CGL Post Preference 2026 — Best Posts & Ranking",

  description:
    "Check SSC CGL post preference list, best posts, salary, promotion and department ranking details.",

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

              SSC CGL Post Preference 2026

            </h1>

            <p className="text-white/60 text-xl leading-9 mt-8 max-w-4xl">

              Check SSC CGL best posts,
              salary, departments, promotion,
              work profile and ranking details.

            </p>

          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">

            {[
              {
                title: "Best Posts",
                desc: "Top SSC CGL Jobs",
              },

              {
                title: "Promotion",
                desc: "Career Growth",
              },

              {
                title: "Salary",
                desc: "Government Benefits",
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

              Best SSC CGL Posts

            </h2>

            <p className="text-white/70 text-lg leading-9 mt-8">

              SSC CGL offers multiple government jobs
              across ministries and departments.
              Candidates should select post preference carefully
              based on salary, work profile and career growth.

            </p>

            {/* Top Posts */}
            <div className="space-y-6 mt-12">

              {[
                "Income Tax Inspector",
                "Assistant Section Officer",
                "GST Inspector",
                "CBI Sub Inspector",
                "Examiner",
                "Auditor",
              ].map((item) => (

                <div
                  key={item}
                  className="bg-black/30 border border-orange-500/10 rounded-3xl p-6"
                >

                  <p className="text-2xl font-semibold">

                    {item}

                  </p>

                </div>

              ))}

            </div>

            {/* Factors */}
            <h2 className="text-4xl font-bold mt-20">

              Factors To Choose SSC CGL Posts

            </h2>

            <div className="grid md:grid-cols-2 gap-6 mt-10">

              {[
                "Salary and allowances",
                "Promotion opportunities",
                "Work-life balance",
                "Location preference",
                "Department reputation",
                "Job responsibilities",
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

            {/* Promotion */}
            <h2 className="text-4xl font-bold mt-20">

              Promotion & Career Growth

            </h2>

            <p className="text-white/70 text-lg leading-9 mt-8">

              SSC CGL posts provide long-term career stability,
              government benefits and regular promotions.
              Higher posts also provide better authority and responsibilities.

            </p>

            <div className="space-y-6 mt-10">

              {[
                "Departmental promotions",
                "Higher administrative posts",
                "Increased salary over time",
                "Pension and retirement benefits",
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

                  Which is the best SSC CGL post?

                </h3>

                <p className="text-white/60 mt-4 leading-8">

                  Income Tax Inspector and Assistant Section Officer are among the most preferred SSC CGL posts.

                </p>

              </div>

              <div className="bg-black/30 border border-orange-500/10 rounded-3xl p-6">

                <h3 className="text-2xl font-semibold">

                  Does SSC CGL provide government benefits?

                </h3>

                <p className="text-white/60 mt-4 leading-8">

                  Yes, SSC CGL employees receive salary, allowances, pension and other government benefits.

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
                title: "SSC CGL Job Profile",
                link: "/ssc-cgl-job-profile",
              },

              {
                title: "SSC CGL Notification",
                link: "/ssc-cgl-notification",
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