import type { Metadata } from "next";

import Link from "next/link";

export const metadata: Metadata = {

  title:
    "SSC CGL Salary 2026 — In Hand Salary, Pay Level & Promotion",

  description:
    "Check SSC CGL salary 2026 including in-hand salary, pay level, allowances, promotion, job profile and career growth.",

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

              SSC CGL Salary 2026

            </h1>

            <p className="text-white/60 text-xl leading-9 mt-8 max-w-4xl">

              Check SSC CGL in-hand salary, pay level,
              allowances, promotion, job profile,
              career growth and complete salary structure.

            </p>

          </div>

          {/* Salary Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">

            {[
              {
                title: "₹35K - ₹75K",
                desc: "Monthly In-Hand Salary",
              },
              {
                title: "Level 4 - 8",
                desc: "Pay Level",
              },
              {
                title: "Govt Job",
                desc: "Career Stability",
              },
            ].map((item, index) => (

              <div
                key={index}
                className="bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8"
              >

                <h2 className="text-4xl font-bold text-orange-300">

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

              SSC CGL Salary Structure

            </h2>

            <p className="text-white/70 text-lg leading-9 mt-8">

              SSC CGL is one of the most popular government exams in India because of its attractive salary, promotion opportunities and job security.

              The SSC CGL salary depends on the department, city and post selected by the candidate. The salary structure is based on pay levels defined by the 7th Pay Commission.

            </p>

            <p className="text-white/70 text-lg leading-9 mt-8">

              Candidates selected through SSC CGL receive multiple benefits including DA, HRA, TA, pension benefits and medical facilities.

            </p>

            {/* Allowances */}
            <h2 className="text-4xl font-bold mt-20">

              SSC CGL Allowances

            </h2>

            <div className="grid md:grid-cols-2 gap-6 mt-10">

              {[
                "Dearness Allowance (DA)",
                "House Rent Allowance (HRA)",
                "Travel Allowance (TA)",
                "Medical Benefits",
                "Pension Benefits",
                "Paid Leaves",
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
                "Examiner",
              ].map((post) => (

                <div
                  key={post}
                  className="bg-black/30 border border-orange-500/10 rounded-3xl p-6"
                >

                  <p className="text-xl font-medium">

                    {post}

                  </p>

                </div>

              ))}

            </div>

            {/* FAQ */}
            <h2 className="text-4xl font-bold mt-20">

{/* In Hand Salary */}
<h2 className="text-4xl font-bold mt-20">
  SSC CGL In Hand Salary
</h2>

<p className="text-white/70 text-lg leading-9 mt-8">
  SSC CGL in hand salary varies according to the post,
  city category and pay level. Most candidates receive
  monthly in hand salary between ₹35,000 and ₹75,000.
  Posts located in metro cities generally receive higher
  HRA and overall salary compared to smaller cities.
</p>

<p className="text-white/70 text-lg leading-9 mt-8">
  Apart from basic pay, employees receive DA, HRA,
  Transport Allowance and other government benefits.
  Annual salary growth also occurs through increments
  and revisions.
</p>

{/* Promotion */}
<h2 className="text-4xl font-bold mt-20">
  SSC CGL Promotion & Career Growth
</h2>

<p className="text-white/70 text-lg leading-9 mt-8">
  SSC CGL posts offer excellent promotion opportunities.
  Employees can move to higher administrative positions
  through departmental exams, seniority and regular
  promotion cycles.
</p>

<div className="space-y-6 mt-10">

  {[
    "Assistant Section Officer → Section Officer",
    "Income Tax Inspector → Income Tax Officer",
    "GST Inspector → Superintendent",
    "Auditor → Senior Auditor",
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

{/* Job Profile */}
<h2 className="text-4xl font-bold mt-20">
  SSC CGL Job Profile
</h2>

<p className="text-white/70 text-lg leading-9 mt-8">
  SSC CGL recruits candidates for various ministries,
  departments and government organizations. Job
  responsibilities differ according to the post,
  department and field assignment.
</p>

<p className="text-white/70 text-lg leading-9 mt-8">
  Common responsibilities include administration,
  taxation work, auditing, investigation, file
  management, policy implementation and public service.
</p>

{/* Why SSC CGL */}
<h2 className="text-4xl font-bold mt-20">
  Why SSC CGL Is A Popular Career Choice
</h2>

<p className="text-white/70 text-lg leading-9 mt-8">
  SSC CGL provides job security, attractive salary,
  government allowances, work-life balance and long
  term career growth. It remains one of the most
  preferred government examinations in India.
</p>



              Frequently Asked Questions

            </h2>

            <div className="space-y-6 mt-10">

              <div className="bg-black/30 border border-orange-500/10 rounded-3xl p-6">

                <h3 className="text-2xl font-semibold">

                  What is SSC CGL in-hand salary?

                </h3>

                <p className="text-white/60 mt-4 leading-8">

                  SSC CGL in-hand salary ranges between ₹35,000 to ₹75,000 depending on post and location.

                </p>

              </div>

              <div className="bg-black/30 border border-orange-500/10 rounded-3xl p-6">

                <h3 className="text-2xl font-semibold">

                  Which SSC CGL post has highest salary?

                </h3>

                <p className="text-white/60 mt-4 leading-8">

                  Assistant Audit Officer and Assistant Section Officer are among the highest paying SSC CGL posts.

                </p>

              </div>

            </div>

          </div>

          {/* Internal Links */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">

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