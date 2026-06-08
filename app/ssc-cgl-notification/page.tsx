import type { Metadata } from "next";

import Navbar from "../../components/Navbar";

export const metadata: Metadata = {

  title:
    "SSC CGL Notification 2026 — Official PDF, Vacancy & Apply Online",

  description:
    "Download SSC CGL 2026 official notification PDF. Check vacancy, eligibility, important dates, exam pattern and apply online details.",

};

export default function Page() {

  return (

    <main className="min-h-screen bg-[#0B0F19] text-white overflow-hidden">

      <Navbar />

      {/* Hero */}
      <section className="relative px-6 pt-28 pb-20 overflow-hidden">

        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-500/10 blur-[140px] rounded-full pointer-events-none"></div>

        <div className="relative max-w-6xl mx-auto">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-5 py-2 text-orange-200 text-sm mb-8">

            🔥 Official SSC Notification Released

          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight max-w-5xl">

            SSC CGL Notification
            <span className="text-orange-400">
              {" "}2026
            </span>

          </h1>

          {/* Description */}
          <p className="text-white/60 text-xl leading-relaxed max-w-3xl mt-8">

            Download official SSC CGL 2026 notification PDF,
            check vacancies, eligibility, important dates,
            exam pattern and online application details.

          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_cgl_2026.pdf"
              target="_blank"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-500/20"
            >

              Download PDF

            </a>

            <a
              href="https://ssc.gov.in/"
              target="_blank"
              className="border border-orange-500/20 bg-orange-500/10 hover:bg-orange-500/20 px-8 py-4 rounded-2xl font-semibold transition"
            >

              Official Website

            </a>

          </div>

        </div>

      </section>

      {/* Important Dates */}
      <section className="px-6 pb-24">

        <div className="max-w-6xl mx-auto">

          <div className="bg-[#111827]/80 border border-orange-500/10 rounded-[36px] p-10">

            <h2 className="text-4xl font-bold mb-10">

              Important Dates 📅

            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="bg-orange-500/10 border border-orange-500/10 rounded-3xl p-6">

                <p className="text-white/50">
                  Notification Release
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  Released
                </h3>

              </div>

              <div className="bg-orange-500/10 border border-orange-500/10 rounded-3xl p-6">

                <p className="text-white/50">
                  Application Start
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  Active Now
                </h3>

              </div>

              <div className="bg-orange-500/10 border border-orange-500/10 rounded-3xl p-6">

                <p className="text-white/50">
                  Tier 1 Exam
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  As Per SSC Schedule
                </h3>

              </div>

              <div className="bg-orange-500/10 border border-orange-500/10 rounded-3xl p-6">

                <p className="text-white/50">
                  Official Notification PDF
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  Available
                </h3>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Vacancy + Eligibility */}
      <section className="px-6 pb-24">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

          {/* Vacancy */}
          <div className="bg-[#111827]/80 border border-orange-500/10 rounded-[36px] p-10">

            <div className="text-5xl mb-6">
              🏢
            </div>

            <h2 className="text-4xl font-bold">

              SSC CGL Vacancy

            </h2>

            <p className="text-white/60 leading-8 mt-6 text-lg">

              SSC CGL 2026 recruitment includes multiple Group B and Group C posts across various government departments and ministries.

            </p>

          </div>

          {/* Eligibility */}
          <div className="bg-[#111827]/80 border border-orange-500/10 rounded-[36px] p-10">

            <div className="text-5xl mb-6">
              🎓
            </div>

            <h2 className="text-4xl font-bold">

              Eligibility Criteria

            </h2>

            <p className="text-white/60 leading-8 mt-6 text-lg">

              Candidates must possess a graduation degree from a recognized university. Age limit varies according to posts.

            </p>

          </div>

        </div>

      </section>

      {/* Exam Pattern */}
      <section className="px-6 pb-24">

        <div className="max-w-6xl mx-auto bg-[#111827]/80 border border-orange-500/10 rounded-[36px] p-10">

          <h2 className="text-4xl font-bold mb-8">

            SSC CGL Exam Pattern 📝

          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-orange-500/10 rounded-3xl p-6 border border-orange-500/10">

              <h3 className="text-2xl font-bold">
                Quant
              </h3>

            </div>

            <div className="bg-orange-500/10 rounded-3xl p-6 border border-orange-500/10">

              <h3 className="text-2xl font-bold">
                Reasoning
              </h3>

            </div>

            <div className="bg-orange-500/10 rounded-3xl p-6 border border-orange-500/10">

              <h3 className="text-2xl font-bold">
                English
              </h3>

            </div>

            <div className="bg-orange-500/10 rounded-3xl p-6 border border-orange-500/10">

              <h3 className="text-2xl font-bold">
                GK
              </h3>

            </div>

          </div>

        </div>

      </section>

      {/* SEO Content */}
      <section className="px-6 pb-28">

        <div className="max-w-6xl mx-auto bg-[#111827]/80 border border-orange-500/10 rounded-[36px] p-10">

          <h2 className="text-4xl font-bold mb-8">

            SSC CGL 2026 Notification Details

          </h2>

          <p className="text-white/65 leading-9 text-lg">

            Staff Selection Commission has officially released SSC CGL 2026 notification for recruitment of candidates into multiple government departments. Candidates can now check official eligibility criteria, application process, exam pattern, syllabus and vacancy details.

          </p>

          <p className="text-white/65 leading-9 text-lg mt-6">

            SSC CGL is one of the most popular government exams in India for graduate students. Lakhs of aspirants apply every year for posts such as Income Tax Inspector, Assistant Section Officer, Examiner, Auditor and many more.

          </p>

        </div>

      </section>

    

    </main>

  );

}