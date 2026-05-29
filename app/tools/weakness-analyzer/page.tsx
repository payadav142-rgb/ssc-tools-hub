"use client";

import { useState } from "react";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ToolContainer from "../../../components/ToolContainer";

export default function WeaknessAnalyzerPage() {

  const [maths, setMaths] =
    useState("");

  const [reasoning, setReasoning] =
    useState("");

  const [english, setEnglish] =
    useState("");

  const [gk, setGk] =
    useState("");

  const [result, setResult] =
    useState("");

  function analyzePerformance() {

    const scores = [

      {
        subject:
          "Mathematics",
        marks:
          Number(maths),
      },

      {
        subject:
          "Reasoning",
        marks:
          Number(reasoning),
      },

      {
        subject:
          "English",
        marks:
          Number(english),
      },

      {
        subject:
          "General Knowledge",
        marks:
          Number(gk),
      },

    ];

    const hasInvalidInput =
      scores.some(
        (item) =>
          isNaN(item.marks)
      );

    if (hasInvalidInput) {

      setResult(
        "Please enter all subject scores."
      );

      return;

    }

    const weakest =
      scores.reduce(
        (prev, curr) =>
          prev.marks <
          curr.marks
            ? prev
            : curr
      );

    setResult(
      `Your weakest subject is ${weakest.subject}. Focus more practice on this area 📚`
    );

  }

  return (

    <ToolContainer>

      <Navbar />

      <section className="px-6 py-24">

        <div className="max-w-3xl mx-auto">

          {/* Heading */}
          <div className="text-center">

            <h1 className="text-6xl font-extrabold">
              SSC Weakness Analyzer
            </h1>

            <p className="text-white/50 text-xl mt-6">
              Discover your weak SSC subjects instantly.
            </p>

          </div>

          {/* Card */}
          <div className="mt-16 bg-white/[0.04] border border-white/10 rounded-[32px] p-10 space-y-8">

            {/* Maths */}
            <div>

              <label className="block text-lg mb-4 text-white/70">
                Mathematics Score
              </label>

              <input
                type="number"
                value={maths}
                onChange={(e) =>
                  setMaths(
                    e.target.value
                  )
                }
                placeholder="Enter maths marks"
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/20"
              />

            </div>

            {/* Reasoning */}
            <div>

              <label className="block text-lg mb-4 text-white/70">
                Reasoning Score
              </label>

              <input
                type="number"
                value={reasoning}
                onChange={(e) =>
                  setReasoning(
                    e.target.value
                  )
                }
                placeholder="Enter reasoning marks"
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/20"
              />

            </div>

            {/* English */}
            <div>

              <label className="block text-lg mb-4 text-white/70">
                English Score
              </label>

              <input
                type="number"
                value={english}
                onChange={(e) =>
                  setEnglish(
                    e.target.value
                  )
                }
                placeholder="Enter english marks"
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/20"
              />

            </div>

            {/* GK */}
            <div>

              <label className="block text-lg mb-4 text-white/70">
                General Knowledge Score
              </label>

              <input
                type="number"
                value={gk}
                onChange={(e) =>
                  setGk(
                    e.target.value
                  )
                }
                placeholder="Enter GK marks"
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/20"
              />

            </div>

            {/* Button */}
            <button
              onClick={analyzePerformance}
              className="w-full bg-white text-black py-4 rounded-2xl text-lg font-semibold hover:scale-[1.01] transition"
            >
              Analyze Performance
            </button>

            {/* Result */}
            {result && (

              <div className="bg-black border border-white/10 rounded-3xl p-10 text-center">

                <h2 className="text-3xl font-bold leading-relaxed">
                  {result}
                </h2>

              </div>

            )}

          </div>

        </div>

      </section>

      <Footer />

    </ToolContainer>

  );

}