import type { Metadata } from "next";

import Link from "next/link";

import { blogs } from "../../data/blogs";

export const metadata: Metadata = {
  title:
    "SSC Blog — Latest SSC Updates, Salary, Syllabus & Preparation",

  description:
    "Read latest SSC blogs including SSC CGL, CHSL, MTS and GD updates, syllabus, salary and preparation guides.",
};

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

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mt-16">

            {[
              {
                title: "50+",
                desc: "SSC Articles",
              },
              {
                title: "Daily",
                desc: "Updates",
              },
              {
                title: "CGL",
                desc: "Focused",
              },
              {
                title: "100%",
                desc: "Free Guides",
              },
            ].map((item, index) => (

              <div
                key={index}
                className="bg-[#111827]/80 border border-orange-500/10 rounded-[28px] p-6 text-center"
              >

                <h2 className="text-4xl font-bold text-orange-400">

                  {item.title}

                </h2>

                <p className="text-white/60 mt-2">

                  {item.desc}

                </p>

              </div>

            ))}

          </div>

          {/* Featured Article */}
          <div className="mt-20">

            <Link
              href={`/blog/${blogs[0].slug}`}
              className="group block bg-gradient-to-br from-orange-500/15 to-amber-400/5 border border-orange-500/20 rounded-[40px] p-10 md:p-14 hover:border-orange-500/40 transition-all duration-300"
            >

              <p className="text-orange-300 font-medium">

                Featured Article

              </p>

              <h2 className="text-4xl md:text-5xl font-bold mt-5 leading-tight group-hover:text-orange-300 transition">

                {blogs[0].title}

              </h2>

              <p className="text-white/60 mt-6 text-lg leading-relaxed max-w-3xl">

                {blogs[0].description}

              </p>

              <div className="inline-flex items-center gap-2 mt-8 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-2xl font-semibold">

                Read Article →

              </div>

            </Link>

          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

            {blogs.map((blog) => (

              <Link
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                className="group bg-[#111827]/80 backdrop-blur-xl border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 hover:-translate-y-2 transition-all duration-300 shadow-[0_0_50px_rgba(249,115,22,0.05)]"
              >

                <p className="text-sm text-orange-300 font-medium">

                  SSC Article

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

          {/* SEO Section */}
          <section className="mt-24">

            <div className="bg-[#111827]/80 border border-orange-500/10 rounded-[40px] p-10 md:p-14 text-center">

              <h2 className="text-4xl md:text-5xl font-bold">

                SSC Preparation Resources

              </h2>

              <p className="text-white/60 mt-6 max-w-3xl mx-auto leading-8 text-lg">

                Explore SSC CGL, CHSL, MTS and GD study material,
                preparation guides, salary details, syllabus,
                exam patterns, previous year analysis and
                latest SSC recruitment updates.

              </p>

            </div>

          </section>

        </div>

      </div>

    </main>
  );
}