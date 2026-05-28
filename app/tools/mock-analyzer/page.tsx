"use client";

import { useState } from "react";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function MockAnalyzerPage() {

  const [correct, setCorrect] =
    useState("");

  const [wrong, setWrong] =
    useState("");

  const [accuracy, setAccuracy] =
    useState<number | null>(null);

  const [performance, setPerformance] =
    useState("");

  function analyzeMock() {

    const correctAnswers =
      Number(correct);

    const wrongAnswers =
      Number(wrong);

    const total =
      correctAnswers + wrongAnswers;

    if (total === 0) {
      return;
    }

    const calculatedAccuracy =
      (
        (correctAnswers / total) *
        100
      ).toFixed(1);

    setAccuracy(
      Number(calculatedAccuracy)
    );

    const acc =
      Number(calculatedAccuracy);

    if (acc >= 90) {
      setPerformance("Excellent 🔥");
    }

    else if (acc >= 75) {
      setPerformance("Good 🚀");
    }

    else if (acc >= 60) {
      setPerformance("Average ⚡");
    }

    else {
      setPerformance("Needs Improvement 📚");
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
              Mock Test Analyzer
            </h1>

            <p className="text-white/50 text-xl mt-6 leading-relaxed">
              Analyze your mock test performance instantly.
            </p>

          </div>

          {/* Card */}
          <div className="mt-16 bg-white/[0.04] border border-white/10 rounded-[32px] p-10">

            {/* Correct */}
            <div>

              <label className="block text-lg mb-4 text-white/70">
                Correct Answers
              </label>

              <input
                type="number"
                value={correct}
                onChange={(e) =>
                  setCorrect(e.target.value)
                }
                placeholder="Enter correct answers"
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/20"
              />

            </div>

            {/* Wrong */}
            <div className="mt-8">

              <label className="block text-lg mb-4 text-white/70">
                Wrong Answers
              </label>

              <input
                type="number"
                value={wrong}
                onChange={(e) =>
                  setWrong(e.target.value)
                }
                placeholder="Enter wrong answers"
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/20"
              />

            </div>

            {/* Button */}
            <button
              onClick={analyzeMock}
              className="w-full mt-10 bg-white text-black py-4 rounded-2xl text-lg font-semibold hover:scale-[1.01] transition"
            >
              Analyze Performance
            </button>

            {/* Result */}
            {accuracy !== null && (

              <div className="mt-12 bg-white/[0.05] border border-white/10 rounded-3xl p-8 text-center">

                <p className="text-white/50 text-lg">
                  Accuracy
                </p>

                <h2 className="text-6xl font-extrabold mt-4">
                  {accuracy}%
                </h2>

                <p className="mt-6 text-2xl font-semibold">
                  {performance}
                </p>

              </div>

            )}

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}