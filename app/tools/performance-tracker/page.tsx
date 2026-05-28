"use client";

import { useState } from "react";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function PerformanceTrackerPage() {

  const [maths, setMaths] =
    useState("");

  const [reasoning, setReasoning] =
    useState("");

  const [english, setEnglish] =
    useState("");

  const [gk, setGk] =
    useState("");

  const [average, setAverage] =
    useState<number | null>(null);

  function calculatePerformance() {

    const scores = [

      Number(maths),
      Number(reasoning),
      Number(english),
      Number(gk),

    ];

    const total =
      scores.reduce(
        (acc, curr) =>
          acc + curr,
        0
      );

    const avg =
      total / scores.length;

    setAverage(avg);

  }

  const subjects = [

    {
      name:
        "Mathematics",
      score:
        Number(maths) || 0,
    },

    {
      name:
        "Reasoning",
      score:
        Number(reasoning) || 0,
    },

    {
      name:
        "English",
      score:
        Number(english) || 0,
    },

    {
      name:
        "General Knowledge",
      score:
        Number(gk) || 0,
    },

  ];

  return (

    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="px-6 py-24">

        <div className="max-w-4xl mx-auto">

          {/* Heading */}
          <div className="text-center">

            <h1 className="text-6xl font-extrabold">
              SSC Performance Tracker
            </h1>

            <p className="text-white/50 text-xl mt-6">
              Analyze your SSC preparation performance.
            </p>

          </div>

          {/* Form */}
          <div className="mt-16 bg-white/[0.04] border border-white/10 rounded-[32px] p-10 space-y-8">

            {/* Maths */}
            <input
              type="number"
              value={maths}
              onChange={(e) =>
                setMaths(
                  e.target.value
                )
              }
              placeholder="Mathematics Marks"
              className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none"
            />

            {/* Reasoning */}
            <input
              type="number"
              value={reasoning}
              onChange={(e) =>
                setReasoning(
                  e.target.value
                )
              }
              placeholder="Reasoning Marks"
              className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none"
            />

            {/* English */}
            <input
              type="number"
              value={english}
              onChange={(e) =>
                setEnglish(
                  e.target.value
                )
              }
              placeholder="English Marks"
              className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none"
            />

            {/* GK */}
            <input
              type="number"
              value={gk}
              onChange={(e) =>
                setGk(
                  e.target.value
                )
              }
              placeholder="GK Marks"
              className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none"
            />

            {/* Button */}
            <button
              onClick={calculatePerformance}
              className="w-full bg-white text-black py-4 rounded-2xl text-lg font-semibold hover:scale-[1.01] transition"
            >
              Track Performance
            </button>

          </div>

          {/* Analytics */}
          {average !== null && (

            <div className="mt-16 bg-white/[0.04] border border-white/10 rounded-[32px] p-10">

              <h2 className="text-4xl font-bold text-center">
                Performance Analytics
              </h2>

              {/* Average */}
              <div className="mt-10 text-center">

                <p className="text-white/50 text-lg">
                  Average Score
                </p>

                <h3 className="text-7xl font-extrabold mt-4">

                  {average.toFixed(1)}

                </h3>

              </div>

              {/* Subject Bars */}
              <div className="mt-14 space-y-8">

                {subjects.map(
                  (subject) => (

                    <div
                      key={subject.name}
                    >

                      <div className="flex justify-between mb-3">

                        <p className="text-lg">
                          {subject.name}
                        </p>

                        <p className="text-white/50">
                          {subject.score}%
                        </p>

                      </div>

                      <div className="w-full h-5 bg-black rounded-full overflow-hidden border border-white/10">

                        <div
                          className="h-full bg-white transition-all duration-500"
                          style={{
                            width:
                              `${subject.score}%`,
                          }}
                        />

                      </div>

                    </div>

                  )
                )}

              </div>

            </div>

          )}

        </div>

      </section>

      <Footer />

    </main>

  );

}