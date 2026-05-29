"use client";

import { useState } from "react";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

import ToolContainer from "../../../components/ToolContainer";
import ToolSEOContent from "../../../components/ToolSEOContent";
import AdBanner from "../../../components/AdBanner";
import RelatedTools from "../../../components/RelatedTools";

const quizQuestions = [

  {
    question:
      "Who is known as the Father of the Indian Constitution?",
    options: [
      "Mahatma Gandhi",
      "Jawaharlal Nehru",
      "Dr. B. R. Ambedkar",
      "Subhash Chandra Bose",
    ],
    answer:
      "Dr. B. R. Ambedkar",
  },

  {
    question:
      "What is the capital of Australia?",
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
      "Which planet is called the Red Planet?",
    options: [
      "Earth",
      "Mars",
      "Jupiter",
      "Venus",
    ],
    answer:
      "Mars",
  },

];

export default function QuizChallengePage() {

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [score, setScore] =
    useState(0);

  const [selectedAnswer, setSelectedAnswer] =
    useState("");

  const [showResult, setShowResult] =
    useState(false);

  function handleAnswer(
    option: string
  ) {

    setSelectedAnswer(option);

  }

  function nextQuestion() {

    if (
      selectedAnswer ===
      quizQuestions[
        currentQuestion
      ].answer
    ) {

      setScore(
        score + 1
      );

    }

    setSelectedAnswer("");

    if (
      currentQuestion + 1 <
      quizQuestions.length
    ) {

      setCurrentQuestion(
        currentQuestion + 1
      );

    }

    else {

      setShowResult(true);

    }

  }

  function restartQuiz() {

    setCurrentQuestion(0);

    setScore(0);

    setSelectedAnswer("");

    setShowResult(false);

  }

  return (

    <ToolContainer>

      <Navbar />

      <section className="px-6 py-24">

        <div className="max-w-3xl mx-auto">

          {/* Heading */}
          <div className="text-center">

            <h1 className="text-6xl font-extrabold">
              SSC Quiz Challenge
            </h1>

            <p className="text-white/50 text-xl mt-6">
              Practice SSC MCQs and improve your preparation.
            </p>

          </div>

          {/* Quiz */}
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
                  {quizQuestions.length}

                </p>

                <h2 className="text-4xl font-bold mt-8 leading-relaxed">

                  {
                    quizQuestions[
                      currentQuestion
                    ].question
                  }

                </h2>

                <div className="mt-10 space-y-5">

                  {
                    quizQuestions[
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
                          className={`w-full text-left px-6 py-5 rounded-2xl border transition ${
                            selectedAnswer ===
                            option
                              ? "bg-white text-black border-white"
                              : "bg-black border-white/10 text-white"
                          }`}
                        >

                          {option}

                        </button>

                      )
                    )
                  }

                </div>

                <button
                  onClick={nextQuestion}
                  disabled={!selectedAnswer}
                  className="w-full mt-10 bg-white text-black py-4 rounded-2xl text-lg font-semibold hover:scale-[1.01] transition disabled:opacity-50"
                >
                  Next Question
                </button>

              </>

            ) : (

              <div className="text-center">

                <h2 className="text-5xl font-extrabold">
                  Quiz Completed 🎉
                </h2>

                <p className="text-3xl mt-8">

                  Your Score:
                  {" "}
                  {score}
                  {" "}
                  /
                  {" "}
                  {quizQuestions.length}

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

      {/* Top Ad */}
      <section className="px-6 pb-20">

        <div className="max-w-5xl mx-auto">

          <AdBanner />

        </div>

      </section>

      {/* SEO Content */}
      <ToolSEOContent
        title="SSC Quiz Challenge"
        description="Practice SSC quiz questions online for SSC CGL, CHSL, GD and MTS exams. Improve your preparation with free SSC MCQ quizzes."
      />

      {/* Related Tools */}
      <RelatedTools />

      {/* Bottom Ad */}
      <section className="px-6 pb-24">

        <div className="max-w-5xl mx-auto">

          <AdBanner />

        </div>

      </section>

      <Footer />

    </ToolContainer>

  );

}
