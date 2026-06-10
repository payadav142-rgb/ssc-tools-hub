import type { Metadata } from "next";

import Link from "next/link";

export const metadata: Metadata = {

  title:
    "SSC CGL Job Profile 2026 — Posts, Work & Career Growth",

  description:
    "Check SSC CGL job profile, work responsibilities, departments, promotion and career growth details.",

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

              SSC CGL Careers

            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mt-5">

              SSC CGL Job Profile 2026

            </h1>

            <p className="text-white/60 text-xl leading-9 mt-8 max-w-4xl">

              Check SSC CGL posts, job profile,
              work responsibilities, departments,
              promotion and career growth opportunities.

            </p>

          </div>

          {/* Quick Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">

            {[
              {
                title: "Government Jobs",
                desc: "Central Departments",
              },

              {
                title: "Career Growth",
                desc: "Promotion Opportunities",
              },

              {
                title: "Job Security",
                desc: "Stable Career",
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

              SSC CGL Job Profiles

            </h2>

            <p className="text-white/70 text-lg leading-9 mt-8">

              SSC CGL recruits candidates for various ministries,
              departments and government offices under the Government of India.

            </p>

            <p className="text-white/70 text-lg leading-9 mt-8">

              Candidates get opportunities to work in taxation,
              auditing, investigation, administration and finance departments.

            </p>

            {/* Popular Posts */}
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
                "Examiner",
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

            {/* Responsibilities */}
            <h2 className="text-4xl font-bold mt-20">

              Work Responsibilities

            </h2>

            <div className="grid md:grid-cols-2 gap-6 mt-10">

              {[
                "Tax related work and verification",
                "Office administration",
                "Investigation and inspection",
                "Report preparation and auditing",
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

            <div className="space-y-6 mt-10">

              {[
                "Regular departmental promotions",
                "Higher salary with experience",
                "Senior administrative positions",
                "Government allowances and pension benefits",
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

                  Which SSC CGL post is best?

                </h3>

                <p className="text-white/60 mt-4 leading-8">

                  Income Tax Inspector and Assistant Section Officer are considered among the best SSC CGL posts.

                </p>

              </div>

              <div className="bg-black/30 border border-orange-500/10 rounded-3xl p-6">

                <h3 className="text-2xl font-semibold">

                  Does SSC CGL offer promotion?

                </h3>

                <p className="text-white/60 mt-4 leading-8">

                  Yes, SSC CGL jobs provide excellent promotion and long-term career growth opportunities.

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
                title: "SSC CGL Notification",
                link: "/ssc-cgl-notification",
              },

              {
                title: "SSC CGL Post Preference",
                link: "/ssc-cgl-post-preference",
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