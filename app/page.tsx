import Link from "next/link";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FeaturedTools from "../components/FeaturedTools";
import Footer from "../components/Footer";
import LatestUpdates from "../components/LatestUpdates";
import AdBanner from "../components/AdBanner";

export default function Home() {

  return (

    <main className="min-h-screen bg-black text-white overflow-hidden">

      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Stats Section */}
      <section className="px-4 md:px-6 py-20">

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">

          <div className="bg-white/[0.04] border border-white/10 rounded-[32px] p-8 text-center hover:border-white/20 transition">

            <h2 className="text-5xl font-extrabold">
              20+
            </h2>

            <p className="text-white/50 mt-4">
              Smart SSC Tools
            </p>

          </div>

          <div className="bg-white/[0.04] border border-white/10 rounded-[32px] p-8 text-center hover:border-white/20 transition">

            <h2 className="text-5xl font-extrabold">
              100%
            </h2>

            <p className="text-white/50 mt-4">
              Free Platform
            </p>

          </div>

          <div className="bg-white/[0.04] border border-white/10 rounded-[32px] p-8 text-center hover:border-white/20 transition">

            <h2 className="text-5xl font-extrabold">
              AI
            </h2>

            <p className="text-white/50 mt-4">
              Smart Analytics
            </p>

          </div>

          <div className="bg-white/[0.04] border border-white/10 rounded-[32px] p-8 text-center hover:border-white/20 transition">

            <h2 className="text-5xl font-extrabold">
              Daily
            </h2>

            <p className="text-white/50 mt-4">
              SSC Productivity
            </p>

          </div>

        </div>

      </section>

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
      <section className="px-6 py-24">

        <div className="max-w-7xl mx-auto">

          <div className="flex items-center justify-between flex-col md:flex-row gap-6">

            <div>

              <h2 className="text-5xl font-bold">

                Latest SSC Blogs

              </h2>

              <p className="text-white/50 mt-4 text-lg">

                Latest guides and SSC preparation articles.

              </p>

            </div>

            <Link
              href="/blog"
              className="bg-white text-black px-6 py-3 rounded-2xl font-semibold"
            >

              View All

            </Link>

          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <Link
              href="/blog/ssc-cgl-salary"
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-white/20 transition"
            >

              <h3 className="text-3xl font-bold">

                SSC CGL Salary 2026

              </h3>

              <p className="text-white/60 mt-5 leading-7">

                Complete salary structure,
                allowances and benefits.

              </p>

            </Link>

            <Link
              href="/blog/ssc-cgl-cutoff"
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-white/20 transition"
            >

              <h3 className="text-3xl font-bold">

                SSC CGL Cutoff 2026

              </h3>

              <p className="text-white/60 mt-5 leading-7">

                Expected and previous year cutoff analysis.

              </p>

            </Link>

            <Link
              href="/blog/ssc-cgl-books"
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-white/20 transition"
            >

              <h3 className="text-3xl font-bold">

                Best SSC CGL Books

              </h3>

              <p className="text-white/60 mt-5 leading-7">

                Recommended books for SSC preparation.

              </p>

            </Link>

          </div>

        </div>

      </section>

      {/* Latest Updates */}
      <LatestUpdates />

      {/* Trending Section */}
      <section className="px-4 md:px-6 py-24">

        <div className="max-w-7xl mx-auto">

          <div className="text-center">

            <h2 className="text-4xl md:text-6xl font-bold">
              Trending SSC Tools
            </h2>

            <p className="text-white/50 mt-6 text-lg max-w-2xl mx-auto">
              Most used SSC preparation tools by students.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <Link
              href="/tools/rank-predictor"
              className="bg-white/[0.04] border border-white/10 rounded-[32px] p-8 hover:border-white/20 hover:scale-[1.02] transition block"
            >

              <p className="text-sm text-white/40">
                Analytics
              </p>

              <h3 className="text-3xl font-bold mt-5">
                SSC Rank Predictor
              </h3>

              <p className="text-white/60 mt-5 leading-relaxed">
                Predict your SSC rank instantly using score analysis.
              </p>

            </Link>

            <Link
              href="/tools/study-tracker"
              className="bg-white/[0.04] border border-white/10 rounded-[32px] p-8 hover:border-white/20 hover:scale-[1.02] transition block"
            >

              <p className="text-sm text-white/40">
                Productivity
              </p>

              <h3 className="text-3xl font-bold mt-5">
                Daily Study Tracker
              </h3>

              <p className="text-white/60 mt-5 leading-relaxed">
                Track your SSC preparation consistency daily.
              </p>

            </Link>

            <Link
              href="/tools/quiz-challenge"
              className="bg-white/[0.04] border border-white/10 rounded-[32px] p-8 hover:border-white/20 hover:scale-[1.02] transition block"
            >

              <p className="text-sm text-white/40">
                Quizzes
              </p>

              <h3 className="text-3xl font-bold mt-5">
                SSC Quiz Challenge
              </h3>

              <p className="text-white/60 mt-5 leading-relaxed">
                Practice SSC MCQs and improve your score.
              </p>

            </Link>

          </div>

        </div>

      </section>

      {/* SEO Section */}
      <section className="px-6 pb-24">

        <div className="max-w-7xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-10">

          <h2 className="text-4xl font-bold mb-6">

            SSC Tools Hub — Complete SSC Preparation Platform

          </h2>

          <p className="text-white/70 leading-8 text-lg">

            SSC Tools Hub is a modern platform designed for SSC aspirants.
            Here you can access smart calculators, rank predictors,
            study planners, mock analyzers, PYQs, syllabus resources,
            revision planners and productivity tools for SSC preparation.

          </p>

          <p className="text-white/70 leading-8 text-lg mt-6">

            Our goal is to simplify SSC preparation with smart digital tools.
            Whether you are preparing for SSC CGL, CHSL, MTS or GD,
            SSC Tools Hub helps students stay productive and organized.

          </p>

        </div>

      </section>

      {/* Bottom Ad */}
      <section className="px-6 pb-24">

        <div className="max-w-7xl mx-auto">

          <AdBanner />

        </div>

      </section>

      {/* CTA */}
      <section className="px-4 md:px-6 pb-24">

        <div className="max-w-5xl mx-auto bg-white/[0.04] border border-white/10 rounded-[40px] p-10 md:p-16 text-center">

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Start Your SSC Preparation Journey Today
          </h2>

          <p className="text-white/50 text-lg mt-8 max-w-2xl mx-auto leading-relaxed">
            Access smart SSC tools, analytics, planners, quizzes, revision systems,
            and productivity features completely free.
          </p>

          <Link
            href="/tools"
            className="inline-block mt-10 bg-white text-black px-8 py-4 rounded-2xl text-lg font-semibold hover:scale-105 transition"
          >
            Explore Tools
          </Link>

        </div>

      </section>

      <Footer />

    </main>

  );

}