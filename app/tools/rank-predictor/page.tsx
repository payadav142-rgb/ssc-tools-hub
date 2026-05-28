"use client";

import { useState } from "react";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function RankPredictorPage() {

  const [score, setScore] =
    useState("");

  const [rank, setRank] =
    useState<string | null>(null);

  function predictRank() {

    const marks =
      Number(score);

    if (marks >= 170) {
      setRank("Top 500");
    }

    else if (marks >= 150) {
      setRank("Top 2,000");
    }

    else if (marks >= 130) {
      setRank("Top 5,000");
    }

    else if (marks >= 110) {
      setRank("Top 15,000");
    }

    else if (marks >= 90) {
      setRank("Top 40,000");
    }

    else {
      setRank("Needs Improvement");
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="px-6 py-24">

        <div className="max-w-3xl mx-auto">

          {/* Heading */}
          <div className="text-center">

            <h1 className="text-6xl font-extrabold">
              SSC Rank Predictor
            </h1>

            <p className="text-white/50 text-xl mt-6 leading-relaxed">
              Predict your estimated SSC rank instantly.
            </p>

          </div>

          {/* Card */}
          <div className="mt-16 bg-white/[0.04] border border-white/10 rounded-[32px] p-10">

            {/* Input */}
            <div>

              <label className="block text-lg mb-4 text-white/70">
                Enter Your Score
              </label>

              <input
                type="number"
                value={score}
                onChange={(e) =>
                  setScore(e.target.value)
                }
                placeholder="Enter your SSC marks"
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/20"
              />

            </div>

            {/* Button */}
            <button
              onClick={predictRank}
              className="w-full mt-10 bg-white text-black py-4 rounded-2xl text-lg font-semibold hover:scale-[1.01] transition"
            >
              Predict Rank
            </button>

            {/* Result */}
            {rank && (

              <div className="mt-12 bg-white/[0.05] border border-white/10 rounded-3xl p-8 text-center">

                <p className="text-white/50 text-lg">
                  Estimated Rank
                </p>

                <h2 className="text-6xl font-extrabold mt-4">
                  {rank}
                </h2>

              </div>

            )}

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}