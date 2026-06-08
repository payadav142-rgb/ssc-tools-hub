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

      {/* Stats */}
      <section className="px-4 md:px-6 py-24 relative z-10">

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">

          {[
            {
              title: "20+",
              desc: "Smart SSC Tools",
            },
            {
              title: "100%",
              desc: "Free Platform",
            },
            {
              title: "AI",
              desc: "Smart Analytics",
            },
            {
              title: "Daily",
              desc: "SSC Productivity",
            },
          ].map((item, index) => (

            <div
              key={index}
              className="bg-[#111827]/80 backdrop-blur-xl border border-orange-500/10 rounded-[32px] p-8 text-center hover:border-orange-500/40 transition-all duration-300"
            >

              <h2 className="text-5xl font-extrabold bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">

                {item.title}

              </h2>

              <p className="text-white/60 mt-4 text-lg">

                {item.desc}

              </p>

            </div>

          ))}

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

      {/* Latest Updates */}
      <LatestUpdates />

      {/* CTA */}
      <section className="px-4 md:px-6 pb-28">

        <div className="max-w-5xl mx-auto bg-gradient-to-r from-orange-500/20 to-amber-400/10 border border-orange-500/20 rounded-[40px] p-10 md:p-16 text-center">

          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">

            Start Your SSC Preparation Journey Today

          </h2>

          <p className="text-white/60 text-lg mt-8 max-w-2xl mx-auto leading-relaxed">

            Access smart SSC tools, quizzes,
            planners and PYQs completely free.

          </p>

          <Link
            href="/tools"
            className="inline-block mt-10 bg-orange-500 hover:bg-orange-400 px-10 py-5 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-105"
          >

            Explore Tools

          </Link>

        </div>

      </section>

    </main>

  );

}