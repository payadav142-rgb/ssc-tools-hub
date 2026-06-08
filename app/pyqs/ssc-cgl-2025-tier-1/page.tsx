"use client";

import { useEffect, useState } from "react";

import Navbar from "../../../components/Navbar";

import {
  sscCgl2025Questions,
} from "../../../data/pyqs/ssc-cgl-2025";

export default function Page() {

  const [selectedAnswers, setSelectedAnswers] =
    useState<{ [key: number]: string }>({});

  const [timeLeft, setTimeLeft] =
    useState(300);

  const [submitted, setSubmitted] =
    useState(false);

  /* Load Saved Answers */
  useEffect(() => {

    const savedAnswers =
      localStorage.getItem(
        "ssc-cgl-pyq-answers"
      );

    if (savedAnswers) {

      setSelectedAnswers(
        JSON.parse(savedAnswers)
      );

    }

  }, []);

  /* Timer */
  useEffect(() => {

    if (timeLeft <= 0 || submitted)
      return;

    const timer = setInterval(() => {

      setTimeLeft((prev) => prev - 1);

    }, 1000);

    return () => clearInterval(timer);

  }, [timeLeft, submitted]);

  const minutes =
    Math.floor(timeLeft / 60);

  const seconds =
    timeLeft % 60;

  /* Select Answer */
  const handleSelect = (
    questionIndex: number,
    option: string
  ) => {

    if (submitted) return;

    const updatedAnswers = {
      ...selectedAnswers,
      [questionIndex]: option,
    };

    setSelectedAnswers(updatedAnswers);

    localStorage.setItem(
      "ssc-cgl-pyq-answers",
      JSON.stringify(updatedAnswers)
    );

  };

  /* Score */
  const score =
    sscCgl2025Questions.filter(
      (
        q: any,
        index: number
      ) =>
        selectedAnswers[index] === q.answer
    ).length;

  const attempted =
    Object.keys(selectedAnswers).length;

  const accuracy =
    attempted > 0
      ? Math.round(
          (score / attempted) * 100
        )
      : 0;

  /* Result Message */
  const getPerformanceMessage = () => {

    if (accuracy === 100)
      return "Outstanding Performance 🔥";

    if (accuracy >= 70)
      return "Great Job 🚀";

    if (accuracy >= 40)
      return "Good Effort 👍";

    return "Keep Practicing 💪";

  };

  return (

    <main className="min-h-screen bg-[#0B0F19] text-white">

      <Navbar />

      {/* Hero */}
      <section className="relative px-6 pt-28 pb-20 overflow-hidden">

        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-500/10 blur-[140px] rounded-full"></div>

        <div className="relative max-w-5xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-5 py-2 text-orange-200 text-sm mb-8">

            🔥 SSC CGL Tier 1 PYQs

          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">

            SSC CGL 2025
            <span className="text-orange-400">
              {" "}Tier 1 PYQ
            </span>

          </h1>

          {/* Description */}
          <p className="text-white/60 text-xl leading-relaxed max-w-3xl mx-auto mt-8">

            Practice SSC CGL questions
            with timer, explanations,
            auto-save and score tracking.

          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-5 mt-12">

            {/* Score */}
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl px-8 py-4">

              <p className="text-sm text-orange-200/70">

                Score

              </p>

              <h3 className="text-3xl font-bold text-orange-300">

                {score}
                /
                {sscCgl2025Questions.length}

              </h3>

            </div>

            {/* Attempted */}
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl px-8 py-4">

              <p className="text-sm text-blue-200/70">

                Attempted

              </p>

              <h3 className="text-3xl font-bold text-blue-300">

                {attempted}

              </h3>

            </div>

            {/* Accuracy */}
            <div className="bg-green-500/10 border border-green-500/20 rounded-2xl px-8 py-4">

              <p className="text-sm text-green-200/70">

                Accuracy

              </p>

              <h3 className="text-3xl font-bold text-green-300">

                {accuracy}
                %

              </h3>

            </div>

            {/* Timer */}
            <div className="bg-red-500/10 border border-red-500/20 rounded-2xl px-8 py-4">

              <p className="text-sm text-red-200/70">

                Timer

              </p>

              <h3 className="text-3xl font-bold text-red-300">

                ⏳
                {" "}
                {minutes}
                :
                {seconds < 10
                  ? `0${seconds}`
                  : seconds}

              </h3>

            </div>

          </div>

          {/* Submit Button */}
          {!submitted && (

            <button
              onClick={() => {

                setSubmitted(true);

                localStorage.removeItem(
                  "ssc-cgl-pyq-answers"
                );

              }}
              className="mt-10 bg-orange-500 hover:bg-orange-400 text-black font-bold px-10 py-4 rounded-2xl transition-all duration-300 hover:scale-105"
            >

              Submit Test

            </button>

          )}

          {/* Result */}
          {submitted && (

            <div className="mt-10 bg-white/5 border border-orange-500/20 rounded-[32px] p-10">

              <h2 className="text-4xl font-bold text-orange-300">

                Test Submitted 🎉

              </h2>

              <p className="text-2xl mt-6">

                Your Score:
                {" "}
                <span className="text-green-400 font-bold">

                  {score}
                  /
                  {sscCgl2025Questions.length}

                </span>

              </p>

              <p className="text-white/60 text-lg mt-4">

                {getPerformanceMessage()}

              </p>

            </div>

          )}

        </div>

      </section>

      {/* Questions */}
      <section className="px-6 pb-28">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_280px] gap-8">

          {/* Questions */}
          <div className="space-y-8">

            {sscCgl2025Questions.map(
              (
                q: any,
                index: number
              ) => (

                <div
                  key={q.id}
                  id={`question-${index}`}
                  className="bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8"
                >

                  {/* Question */}
                  <h2 className="text-2xl font-bold leading-relaxed">

                    Q{index + 1}.
                    {" "}
                    {q.question}

                  </h2>

                  {/* Options */}
                  <div className="grid md:grid-cols-2 gap-4 mt-8">

                    {q.options.map(
                      (
                        option: string
                      ) => {

                        const selected =
                          selectedAnswers[index];

                        const isCorrect =
                          option === q.answer;

                        const isSelected =
                          selected === option;

                        return (

                          <button
                            key={option}
                            onClick={() =>
                              handleSelect(
                                index,
                                option
                              )
                            }
                            className={`border rounded-2xl p-4 text-left transition-all duration-300 ${
                              isSelected &&
                              isCorrect
                                ? "bg-green-500/20 border-green-500/30 text-green-300"
                                : isSelected &&
                                  !isCorrect
                                ? "bg-red-500/20 border-red-500/30 text-red-300"
                                : "bg-white/5 border-white/10 hover:border-orange-500/40"
                            }`}
                          >

                            {option}

                          </button>

                        );

                      }
                    )}

                  </div>

                  {/* Explanation */}
                  {selectedAnswers[index] && (

                    <div className="mt-6 bg-orange-500/10 border border-orange-500/20 rounded-2xl p-5">

                      <h3 className="text-orange-300 font-bold text-lg">

                        Explanation

                      </h3>

                      <p className="text-white/70 mt-3 leading-relaxed">

                        {q.explanation}

                      </p>

                    </div>

                  )}

                </div>

              )
            )}

          </div>

          {/* Question Palette */}
          <div className="sticky top-28 h-fit bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-6">

            <h3 className="text-2xl font-bold mb-6">

              Question Palette

            </h3>

            <div className="grid grid-cols-5 gap-3">

              {sscCgl2025Questions.map(
                (
                  _: any,
                  index: number
                ) => {

                  const attempted =
                    selectedAnswers[index];

                  return (

                    <button
                      key={index}
                      onClick={() => {

                        const element =
                          document.getElementById(
                            `question-${index}`
                          );

                        element?.scrollIntoView({
                          behavior: "smooth",
                        });

                      }}
                      className={`h-12 rounded-xl font-bold transition ${
                        attempted
                          ? "bg-green-500/20 border border-green-500/30 text-green-300"
                          : "bg-white/5 border border-white/10 text-white/60"
                      }`}
                    >

                      {index + 1}

                    </button>

                  );

                }
              )}

            </div>

            <div className="mt-8 space-y-3 text-sm">

              <div className="flex items-center gap-3">

                <div className="w-4 h-4 rounded bg-green-500/30"></div>

                Attempted

              </div>

              <div className="flex items-center gap-3">

                <div className="w-4 h-4 rounded bg-white/10"></div>

                Unattempted

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>

  );

}