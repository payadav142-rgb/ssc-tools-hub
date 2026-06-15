import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SSC Syllabus 2026 — CGL, CHSL, MTS & GD Syllabus",
  description:
    "Check SSC CGL, CHSL, MTS and GD syllabus 2026 with subject-wise topics and latest exam pattern.",
};

export default function Page() {
  const syllabusPages = [
    {
      title: "SSC CGL Syllabus",
      desc: "Complete SSC CGL syllabus with exam pattern.",
      link: "/ssc-cgl-syllabus",
    },
    {
      title: "SSC CHSL Syllabus",
      desc: "Latest SSC CHSL syllabus and topic list.",
      link: "/ssc-chsl-syllabus",
    },
    {
      title: "SSC MTS Syllabus",
      desc: "SSC MTS syllabus with section-wise topics.",
      link: "/ssc-mts-syllabus",
    },
    {
      title: "SSC GD Syllabus",
      desc: "SSC GD syllabus and selection process.",
      link: "/ssc-gd-syllabus",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0B0F19] text-white px-6 py-20">

      <div className="max-w-7xl mx-auto">

        <div className="text-center">

          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-5 py-2 text-orange-200 text-sm mb-8">
            📚 SSC Exam Syllabus
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold">
            SSC Syllabus 2026
          </h1>

          <p className="text-white/60 text-xl mt-8 max-w-3xl mx-auto">
            Explore latest SSC CGL, CHSL, MTS and GD syllabus,
            exam pattern and subject-wise topics.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7 mt-20">

          {syllabusPages.map((item) => (

            <Link
              key={item.title}
              href={item.link}
              className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 hover:-translate-y-2 transition-all duration-300"
            >

              <div className="text-5xl mb-6">
                📖
              </div>

              <h2 className="text-2xl font-bold group-hover:text-orange-300 transition">
                {item.title}
              </h2>

              <p className="text-white/55 mt-5 leading-relaxed">
                {item.desc}
              </p>

              <div className="mt-8 text-orange-300 font-semibold">
                Open Syllabus →
              </div>

            </Link>

          ))}

        </div>

      </div>

    </main>
  );
}