import type { Metadata } from "next";

export const metadata: Metadata = {

  title:
    "SSC CHSL Notification 2026 — Apply Online, Vacancy & Exam Date",

  description:
    "Check SSC CHSL Notification 2026 including exam date, vacancy, eligibility, salary and apply online details.",

};

export default function Page() {

  return (

    <main className="min-h-screen bg-[#0B0F19] text-white px-6 py-16">

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 blur-[140px] rounded-full"></div>

      <div className="relative max-w-5xl mx-auto">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-5 py-2 text-blue-200 text-sm mb-8">

          📢 SSC CHSL 2026

        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">

          SSC CHSL
          {" "}
          <span className="text-blue-400">

            Notification 2026

          </span>

        </h1>

        {/* Description */}
        <p className="text-white/60 text-xl leading-relaxed mt-8 max-w-3xl">

          Check SSC CHSL notification 2026,
          vacancy details, eligibility,
          exam dates, syllabus and apply online process.

        </p>

        {/* Quick Info */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">

          {[
            {
              title: "Exam Name",
              value: "SSC CHSL 2026",
            },
            {
              title: "Posts",
              value: "LDC, DEO, JSA",
            },
            {
              title: "Mode",
              value: "Online",
            },
          ].map((item, index) => (

            <div
              key={index}
              className="bg-[#111827]/80 border border-blue-500/10 rounded-[28px] p-8"
            >

              <p className="text-white/50 text-sm">

                {item.title}

              </p>

              <h3 className="text-2xl font-bold mt-3 text-blue-300">

                {item.value}

              </h3>

            </div>

          ))}

        </div>

        {/* Sections */}
        <div className="space-y-10 mt-20">

          {/* Vacancy */}
          <section className="bg-[#111827]/80 border border-blue-500/10 rounded-[32px] p-10">

            <h2 className="text-4xl font-bold">

              SSC CHSL Vacancy 2026

            </h2>

            <p className="text-white/70 leading-8 text-lg mt-6">

              SSC will release category-wise and post-wise
              CHSL vacancies along with the official notification.
              Candidates can apply for LDC, JSA and DEO posts.

            </p>

          </section>

          {/* Eligibility */}
          <section className="bg-[#111827]/80 border border-blue-500/10 rounded-[32px] p-10">

            <h2 className="text-4xl font-bold">

              SSC CHSL Eligibility 2026

            </h2>

            <p className="text-white/70 leading-8 text-lg mt-6">

              Candidates must have passed Class 12th
              from a recognized board.
              The age limit is generally 18 to 27 years.

            </p>

          </section>

          {/* Exam Pattern */}
          <section className="bg-[#111827]/80 border border-blue-500/10 rounded-[32px] p-10">

            <h2 className="text-4xl font-bold">

              SSC CHSL Exam Pattern

            </h2>

            <p className="text-white/70 leading-8 text-lg mt-6">

              The SSC CHSL Tier 1 exam includes
              General Intelligence, English,
              Quantitative Aptitude and General Awareness.

            </p>

          </section>

          {/* Apply Online */}
          <section className="bg-gradient-to-r from-blue-500/20 to-cyan-500/10 border border-blue-500/20 rounded-[32px] p-10">

            <h2 className="text-4xl font-bold">

              SSC CHSL Apply Online

            </h2>

            <p className="text-white/70 leading-8 text-lg mt-6">

              Candidates can apply online through
              the SSC official website after
              the release of notification.

            </p>

            <a
              href="https://ssc.gov.in/"
              target="_blank"
              className="inline-block mt-8 bg-blue-500 hover:bg-blue-400 text-black font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105"
            >

              Apply Online →

            </a>

          </section>

        </div>

      </div>

    </main>

  );

}