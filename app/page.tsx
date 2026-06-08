import Link from "next/link";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FeaturedTools from "../components/FeaturedTools";
import LatestUpdates from "../components/LatestUpdates";
import AdBanner from "../components/AdBanner";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute top-[40%] right-0 w-[400px] h-[400px] bg-amber-400/10 blur-[120px] rounded-full"></div>

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Categories */}
      <Categories />

      {/* Featured Tools */}
      <FeaturedTools />

      {/* Ad Banner */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <AdBanner />
        </div>
      </section>

      {/* Latest Blogs */}
      <section className="px-6 py-24 relative z-10">

        <div className="max-w-7xl mx-auto">

          <div className="flex items-center justify-between flex-col md:flex-row gap-6">

            <div>

              <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
                Latest <span className="text-orange-400">SSC Blogs</span>
              </h2>

              <p className="text-white/50 mt-5 text-lg">
                Latest guides and SSC preparation articles.
              </p>

            </div>

            <Link
              href="/blog"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-500/20"
            >
              View All
            </Link>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            {[
              {
                title: "SSC CGL Salary 2026",
                desc: "Complete salary structure, allowances and benefits.",
                link: "/ssc-cgl-salary",
              },
              {
                title: "SSC CGL Cutoff 2026",
                desc: "Expected and previous year cutoff analysis.",
                link: "/ssc-cgl-cutoff",
              },
              {
                title: "Best SSC CGL Books",
                desc: "Recommended books for SSC preparation.",
                link: "/ssc-cgl-books",
              },
              {
                title: "SSC CHSL Notification 2026",
                desc: "Check SSC CHSL vacancy, eligibility and exam date.",
                link: "/ssc-chsl-notification",
              },
            ].map((blog, index) => (
              <Link
                key={index}
                href={blog.link}
                className="bg-[#111827]/70 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 hover:-translate-y-1 transition-all duration-300 shadow-[0_0_40px_rgba(249,115,22,0.06)]"
              >
                <h3 className="text-2xl font-bold leading-tight">
                  {blog.title}
                </h3>

                <p className="text-white/60 mt-5 leading-7">
                  {blog.desc}
                </p>

              </Link>
            ))}

          </div>

        </div>

      </section>

      {/* Latest Updates */}
      <LatestUpdates />

      {/* CTA */}
      <section className="px-4 md:px-6 pb-28">

        <div className="max-w-5xl mx-auto bg-gradient-to-r from-orange-500/20 to-amber-400/10 border border-orange-500/20 rounded-[40px] p-10 md:p-16 text-center backdrop-blur-xl shadow-[0_0_80px_rgba(249,115,22,0.12)]">

          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Start Your SSC Preparation Journey Today
          </h2>

          <p className="text-white/60 text-lg mt-8 max-w-2xl mx-auto leading-relaxed">
            Access smart SSC tools, analytics, planners, quizzes,
            revision systems and productivity features completely free.
          </p>

          <Link
            href="/tools"
            className="inline-block mt-10 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 px-10 py-5 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-xl shadow-orange-500/20"
          >
            Explore Tools
          </Link>

        </div>

      </section>

    </main>
  );
}