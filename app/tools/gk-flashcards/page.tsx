"use client";

import { useState } from "react";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ToolContainer from "../../../components/ToolContainer";

const flashcards = [

  {
    question:
      "Who wrote the Indian Constitution?",
    answer:
      "Dr. B. R. Ambedkar",
  },

  {
    question:
      "What is the capital of Canada?",
    answer:
      "Ottawa",
  },

  {
    question:
      "Which planet is closest to the Sun?",
    answer:
      "Mercury",
  },

  {
    question:
      "Who is known as the Missile Man of India?",
    answer:
      "Dr. A. P. J. Abdul Kalam",
  },

];

export default function GKFlashcardsPage() {

  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [showAnswer, setShowAnswer] =
    useState(false);

  function nextCard() {

    setShowAnswer(false);

    setCurrentIndex(
      (prev) =>
        (prev + 1) %
        flashcards.length
    );

  }

  function previousCard() {

    setShowAnswer(false);

    setCurrentIndex(
      (prev) =>
        prev === 0
          ? flashcards.length - 1
          : prev - 1
    );

  }

  return (

    <ToolContainer>

      <Navbar />

      <section className="px-6 py-24">

        <div className="max-w-3xl mx-auto text-center">

          {/* Heading */}
          <h1 className="text-6xl font-extrabold">
            SSC GK Flashcards
          </h1>

          <p className="text-white/50 text-xl mt-6">
            Revise SSC GK quickly with smart flashcards.
          </p>

          {/* Flashcard */}
          <div className="mt-20 bg-white/[0.04] border border-white/10 rounded-[32px] p-14 min-h-[350px] flex flex-col justify-center">

            <p className="text-white/50 text-lg">
              Flashcard
              {" "}
              {currentIndex + 1}
              {" "}
              /
              {" "}
              {flashcards.length}
            </p>

            <h2 className="text-4xl font-bold mt-8 leading-relaxed">

              {
                showAnswer
                  ? flashcards[
                      currentIndex
                    ].answer
                  : flashcards[
                      currentIndex
                    ].question
              }

            </h2>

            <button
              onClick={() =>
                setShowAnswer(
                  !showAnswer
                )
              }
              className="mt-10 bg-white text-black py-4 rounded-2xl text-lg font-semibold hover:scale-[1.01] transition"
            >
              {
                showAnswer
                  ? "Show Question"
                  : "Show Answer"
              }
            </button>

          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-6 mt-10">

            <button
              onClick={previousCard}
              className="bg-black border border-white/10 px-8 py-4 rounded-2xl text-lg hover:border-white/30 transition"
            >
              Previous
            </button>

            <button
              onClick={nextCard}
              className="bg-white text-black px-8 py-4 rounded-2xl text-lg font-semibold hover:scale-105 transition"
            >
              Next
            </button>

          </div>

        </div>

      </section>

      <Footer />

    </ToolContainer>

  );

}