"use client";

import { useState } from "react";

import ToolContainer from "../../../components/ToolContainer";

export default function MarksCalculatorPage() {

  const [correct, setCorrect] =
    useState("");

  const [wrong, setWrong] =
    useState("");

  const [score, setScore] =
    useState<number | null>(null);

  function calculateMarks() {

    const correctAnswers =
      Number(correct);

    const wrongAnswers =
      Number(wrong);

    const total =
      correctAnswers * 2 -
      wrongAnswers * 0.5;

    setScore(total);
  }

  return (

    <ToolContainer>

      <section className="px-6 py-24">

        <div className="max-w-3xl mx-auto">

          {/* Heading */}
          <div className="text-center">

            <h1 className="text-6xl font-extrabold">
              SSC Marks Calculator
            </h1>

            <p className="text-white/50 text-xl mt-6 leading-relaxed">
              Instantly calculate your SSC exam score with negative marking.
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
              onClick={calculateMarks}
              className="w-full mt-10 bg-white text-black py-4 rounded-2xl text-lg font-semibold hover:scale-[1.01] transition"
            >
              Calculate Score
            </button>

            {/* Result */}
            {score !== null && (

              <div className="mt-10 text-center bg-white/[0.05] border border-white/10 rounded-3xl p-8">

                <p className="text-white/50 text-lg">
                  Your Estimated Score
                </p>

                <h2 className="text-6xl font-extrabold mt-4">
                  {score}
                </h2>

              </div>

            )}

          </div>

        </div>

      </section>

    </ToolContainer>

  );

}