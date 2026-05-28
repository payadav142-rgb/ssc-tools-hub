"use client";

import { useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function MarksCalculatorPage() {

  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);

  const marks =
    correct * 2 - wrong * 0.5;

  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="px-6 py-20 max-w-3xl mx-auto">

        <h1 className="text-5xl font-bold text-center">
          SSC Marks Calculator
        </h1>

        <p className="text-white/60 text-center mt-6">
          Calculate your SSC exam score instantly.
        </p>

        <div className="mt-16 space-y-8">

          {/* Correct */}
          <div>
            <label className="block mb-3 text-lg">
              Correct Answers
            </label>

            <input
              type="number"
              value={correct}
              onChange={(e) =>
                setCorrect(Number(e.target.value))
              }
              className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 outline-none"
            />
          </div>

          {/* Wrong */}
          <div>
            <label className="block mb-3 text-lg">
              Wrong Answers
            </label>

            <input
              type="number"
              value={wrong}
              onChange={(e) =>
                setWrong(Number(e.target.value))
              }
              className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 outline-none"
            />
          </div>

          {/* Result */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center">

            <h2 className="text-2xl text-white/60">
              Your Estimated Marks
            </h2>

            <h3 className="text-6xl font-bold mt-5">
              {marks}
            </h3>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}