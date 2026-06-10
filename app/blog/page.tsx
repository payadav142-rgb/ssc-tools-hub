import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "SSC Blog — Latest SSC Updates, Salary, Syllabus & Preparation",

  description:
    "Read latest SSC blogs including SSC CGL, CHSL, MTS and GD updates, syllabus, salary and preparation guides.",
};

const blogs = [
  {
    title: "SSC CGL Notification 2026",
    description:
      "Complete SSC CGL notification, vacancy, eligibility and exam details.",
    href: "/ssc-cgl-notification",
    tag: "Notification",
  },

  {
    title: "SSC CGL Salary 2026",
    description:
      "Check SSC CGL salary, allowances, perks and promotion details.",
    href: "/ssc-cgl-salary",
    tag: "Salary",
  },

  {
    title: "SSC CHSL Salary 2026",
    description:
      "Complete SSC CHSL salary structure with in-hand pay details.",
    href: "/ssc-chsl-salary",
    tag: "Salary",
  },

  {
    title: "SSC MTS Salary 2026",
    description:
      "SSC MTS salary, pay level and job profile explained.",
    href: "/ssc-mts-salary",
    tag: "Salary",
  },

  {
    title: "SSC GD Salary 2026",
    description:
      "SSC GD salary structure, promotion and allowances.",
    href: "/ssc-gd-salary",
    tag: "Salary",
  },

  {
    title: "SSC CHSL Books 2026",
    description:
      "Best books for SSC CHSL preparation and practice.",
    href: "/ssc-chsl-books",
    tag: "Books",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white overflow-hidden relative">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="absolute top-[40%] right-0 w-[400px] h-[400px] bg-amber-400/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 px-6 py-20">

        <div className="max-w-7xl mx-auto">

          {/* Hero */}
          <div className="text-center max-w-4xl mx-auto">

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">

              SSC <span className="text-orange-400">Blog</span>

            </h1>

            <p className="text-white/50 text-lg mt-8 leading-relaxed">

              Latest SSC updates, preparation guides,
              salary details, syllabus, cutoff,
              notifications and exam resources.

            </p>

          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">

            {[
              "SSC CGL",
              "SSC CHSL",
              "SSC MTS",
              "SSC GD",
              "Salary",
              "Books",
              "Cutoff",
            ].map((item) => (

              <button
                key={item}
                className="px-5 py-3 rounded-2xl bg-[#111827]/80 border border-orange-500/10 hover:border-orange-500/40 transition"
              >

                {item}

              </button>

            ))}

          </div>

          {/* Featured Blog */}
          <div className="mt-20">

            <Link
              href="/ssc-cgl-notification"
              className="group block bg-gradient-to-br from-orange-500/15 to-amber-400/5 border border-orange-500/20 rounded-[40px] p-10 md:p-14 hover:border-orange-500/40 transition-all duration-300"
            >

              <p className="text-orange-300 font-medium">

                Featured Article

              </p>

              <h2 className="text-4xl md:text-5xl font-bold mt-5 leading-tight group-hover:text-orange-300 transition">

                SSC CGL Notification 2026

              </h2>

              <p className="text-white/60 mt-6 text-lg leading-relaxed max-w-3xl">

                Check SSC CGL 2026 notification,
                vacancy, eligibility, syllabus,
                exam date and complete application details.

              </p>

              <div className="inline-flex items-center gap-2 mt-8 bg-white text-black px-6 py-3 rounded-2xl font-semibold">

                Read Article →

              </div>

            </Link>

          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

            {blogs.map((blog) => (

              <Link
                key={blog.href}
                href={blog.href}
                className="group bg-[#111827]/80 backdrop-blur-xl border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 hover:-translate-y-2 transition-all duration-300 shadow-[0_0_50px_rgba(249,115,22,0.05)]"
              >

                <p className="text-sm text-orange-300 font-medium">

                  {blog.tag}

                </p>

                <h2 className="text-3xl font-bold mt-5 leading-snug group-hover:text-orange-300 transition">

                  {blog.title}

                </h2>

                <p className="text-white/60 mt-5 leading-relaxed">

                  {blog.description}

                </p>

                <div className="mt-8 flex items-center justify-between">

                  <span className="text-white/40 text-sm">

                    Updated 2026

                  </span>

                  <span className="text-orange-400 text-xl">

                    →

                  </span>

                </div>

              </Link>

            ))}

          </div>

          {/* SEO Content */}
          <section className="mt-28">

            <div className="bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10 md:p-14">

              <h2 className="text-4xl md:text-5xl font-bold leading-tight">

                SSC Preparation Resources &
                <span className="text-orange-400">
                  {" "}Latest Updates
                </span>

              </h2>

              <p className="text-white/70 text-lg leading-8 mt-8">

                SSC Tools Hub provides latest SSC CGL,
                CHSL, MTS and GD updates including
                salary, syllabus, cutoff, exam pattern,
                preparation strategy and important notifications.

              </p>

              <p className="text-white/70 text-lg leading-8 mt-6">

                Our SSC blog section is regularly updated
                with exam resources and preparation guides
                for SSC aspirants across India.

              </p>

            </div>

          </section>

        </div>

      </div>

    </main>
  );
}