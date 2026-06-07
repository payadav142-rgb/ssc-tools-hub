"use client";

import { useState } from "react";

import ToolContainer from "../../../components/ToolContainer";
import ToolSEOContent from "../../../components/ToolSEOContent";
import AdBanner from "../../../components/AdBanner";
import RelatedTools from "../../../components/RelatedTools";

export default function RankPredictorPage() {

  const [score, setScore] =
    useState("");

  const [rank, setRank] =
    useState<string | null>(null);

  const [message, setMessage] =
    useState("");

  function predictRank() {

    const marks =
      Number(score);

    if (!score) {
      return;
    }

    if (marks >= 170) {

      setRank("Top 500");

      setMessage(
        "Outstanding performance. You are competing among the top SSC aspirants 🔥"
      );

    }

    else if (marks >= 150) {

      setRank("Top 2,000");

      setMessage(
        "Excellent score. High selection chances with strong consistency 🚀"
      );

    }

    else if (marks >= 130) {

      setRank("Top 5,000");

      setMessage(
        "Very good performance. Keep improving mock accuracy ⚡"
      );

    }

    else if (marks >= 110) {

      setRank("Top 15,000");

      setMessage(
        "Decent score. Focus on revision and speed improvement 📚"
      );

    }

    else if (marks >= 90) {

      setRank("Top 40,000");

      setMessage(
        "You need stronger consistency and daily practice 💪"
      );

    }

    else {

      setRank("Needs Improvement");

      setMessage(
        "Focus on fundamentals, mock tests, and revision strategy."
      );

    }

  }

  return (

    <ToolContainer>

      {/* Hero */}
      <section className="px-4 md:px-6 py-24">

        <div className="max-w-5xl mx-auto text-center">

          <h1 className="text-4xl md:text-7xl font-extrabold leading-tight">

            SSC Rank Predictor

          </h1>

          <p className="text-white/50 text-lg md:text-2xl mt-8 leading-relaxed max-w-3xl mx-auto">

            Predict your expected SSC rank instantly using your exam score,
            performance analysis, and smart estimation logic.

          </p>

        </div>

      </section>

      {/* Predictor */}
      <section className="px-4 md:px-6 pb-24">

        <div className="max-w-3xl mx-auto bg-white/[0.04] border border-white/10 rounded-[32px] p-8 md:p-10">

          <div>

            <label className="block text-lg mb-4 text-white/70">

              Enter Your SSC Score

            </label>

            <input
              type="number"
              value={score}
              onChange={(e) =>
                setScore(
                  e.target.value
                )
              }
              placeholder="Enter your SSC marks"
              className="w-full bg-black border border-white/10 rounded-2xl px-5 py-5 outline-none focus:border-white/20 text-lg"
            />

          </div>

          <button
            onClick={predictRank}
            className="w-full mt-10 bg-white text-black py-5 rounded-2xl text-lg font-semibold hover:scale-[1.01] transition"
          >

            Predict My Rank

          </button>

          {rank && (

            <div className="mt-12 bg-white/[0.05] border border-white/10 rounded-3xl p-8 text-center">

              <p className="text-white/50 text-lg">

                Estimated SSC Rank

              </p>

              <h2 className="text-5xl md:text-7xl font-extrabold mt-6">

                {rank}

              </h2>

              <p className="text-white/60 text-lg leading-relaxed mt-8 max-w-2xl mx-auto">

                {message}

              </p>

            </div>

          )}

        </div>

      </section>

      {/* Top Ad */}
      <section className="px-6 pb-20">

        <div className="max-w-5xl mx-auto">

          <AdBanner />

        </div>

      </section>

      {/* Features */}
      <section className="px-4 md:px-6 pb-24">

        <div className="max-w-7xl mx-auto">

          <div className="text-center">

            <h2 className="text-4xl md:text-6xl font-bold">

              Why Use Our Rank Predictor?

            </h2>

            <p className="text-white/50 text-lg mt-6 max-w-2xl mx-auto">

              Smart SSC analytics designed for serious aspirants.

            </p>

          </div>

        </div>

      </section>

      {/* SEO Content */}
      <ToolSEOContent
        title="SSC Rank Predictor for Smart Preparation"
        description="SSC Rank Predictor helps aspirants estimate expected SSC ranks using score-based performance analysis."
      />

      {/* Related Tools */}
      <RelatedTools />

      {/* Bottom Ad */}
      <section className="px-6 pb-24">

        <div className="max-w-5xl mx-auto">

          <AdBanner />

        </div>

      </section>

    </ToolContainer>

  );

}