"use client";

import { useState } from "react";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const questions = [

  {
    question:
      "Who is the Prime Minister of India?",
    options: [
      "Narendra Modi",
      "Rahul Gandhi",
      "Amit Shah",
      "Yogi Adityanath",
    ],
    answer:
      "Narendra Modi",
  },

  {
    question:
      "Which is the capital of Australia?",
    options: [
      "Sydney",
      "Melbourne",
      "Canberra",
      "Perth",
    ],
    answer:
      "Canberra",
  },

  {
    question:
      "Which planet is known as the Red Planet?",
    options: [
      "Venus",
      "Mars",
      "Jupiter",
      "Saturn",
    ],
    answer:
      "Mars",
  },

];

export default function CurrentAffairsQuizPage() {

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [score, setScore] =
    useState(0);

  const [showResult, setShowResult] =
    useState(false);

  function handleAnswer(
    option: string
  ) {

    if (
      option ===
      questions[currentQuestion]
        .answer
    ) {

      setScore(
        score + 1
      );

    }

    const nextQuestion =
      currentQuestion + 1;

    if (
      nextQuestion <
      questions.length
    ) {

      setCurrentQuestion(
        nextQuestion
      );

    }

    else {

      setShowResult(true);

    }

  }

  function restartQuiz() {

    setCurrentQuestion(0);

    setScore(0);

    setShowResult(false);

  }

  return (

    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="px-6 py-24">

        <div className="max-w-3xl mx-auto">

          {/* Heading */}
          <div className="text-center">

            <h1 className="text-6xl font-extrabold">
              Current Affairs Quiz
            </h1>

            <p className="text-white/50 text-xl mt-6">
              Practice SSC current affairs questions daily.
            </p>

          </div>

          {/* Quiz Card */}
          <div className="mt-16 bg-white/[0.04] border border-white/10 rounded-[32px] p-10">

            {!showResult ? (

              <>

                <p className="text-white/50 text-lg">

                  Question
                  {" "}
                  {currentQuestion + 1}
                  {" "}
                  /
                  {" "}
                  {questions.length}

                </p>

                <h2 className="text-4xl font-bold mt-6 leading-relaxed">

                  {
                    questions[
                      currentQuestion
                    ].question
                  }

                </h2>

                <div className="mt-10 space-y-5">

                  {
                    questions[
                      currentQuestion
                    ].options.map(
                      (option) => (

                        <button
                          key={option}
                          onClick={() =>
                            handleAnswer(
                              option
                            )
                          }
                          className="w-full bg-black border border-white/10 rounded-2xl px-6 py-5 text-left text-xl hover:border-white/30 transition"
                        >
                          {option}
                        </button>

                      )
                    )
                  }

                </div>

              </>

            ) : (

              <div className="text-center">

                <h2 className="text-6xl font-extrabold">
                  Quiz Completed 🎉
                </h2>

                <p className="text-3xl mt-8">

                  Your Score:
                  {" "}
                  {score}
                  {" "}
                  /
                  {" "}
                  {questions.length}

                </p>

                <button
                  onClick={restartQuiz}
                  className="mt-10 bg-white text-black px-8 py-4 rounded-2xl text-lg font-semibold hover:scale-105 transition"
                >
                  Restart Quiz
                </button>

              </div>

            )}

          </div>

        </div>

      </section>

      <Footer />

    </main>

  );

}