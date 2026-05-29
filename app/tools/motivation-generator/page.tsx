"use client";

import { useState } from "react";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ToolContainer from "../../../components/ToolContainer";

const quotes = [

  "Success in SSC comes from consistency, not motivation alone.",

  "Study now so your future self can thank you later.",

  "Every hour of study brings you closer to selection.",

  "Discipline beats talent when talent does not work hard.",

  "Your dream government job is worth the sacrifice.",

  "Small daily improvements create massive results.",

  "Focus on progress, not perfection.",

];

export default function MotivationGeneratorPage() {

  const [quote, setQuote] =
    useState(
      quotes[0]
    );

  function generateQuote() {

    const randomIndex =
      Math.floor(
        Math.random() *
        quotes.length
      );

    setQuote(
      quotes[randomIndex]
    );

  }

  return (

    <ToolContainer>

      <Navbar />

      <section className="px-6 py-24">

        <div className="max-w-3xl mx-auto text-center">

          {/* Heading */}
          <h1 className="text-6xl font-extrabold">
            SSC Motivation Generator
          </h1>

          <p className="text-white/50 text-xl mt-6">
            Stay motivated during your SSC preparation journey.
          </p>

          {/* Quote Card */}
          <div className="mt-20 bg-white/[0.04] border border-white/10 rounded-[32px] p-14">

            <p className="text-3xl leading-relaxed font-semibold">

              &ldquo;{quote}&rdquo;

            </p>

            <button
              onClick={generateQuote}
              className="mt-12 bg-white text-black px-8 py-4 rounded-2xl text-lg font-semibold hover:scale-105 transition"
            >
              Generate New Quote
            </button>

          </div>

        </div>

      </section>

      <Footer />

    </ToolContainer>

  );

}