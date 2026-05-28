"use client";

import { useState } from "react";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function PercentageCalculatorPage() {

  const [obtainedMarks, setObtainedMarks] =
    useState("");

  const [totalMarks, setTotalMarks] =
    useState("");

  const [percentage, setPercentage] =
    useState<number | null>(null);

  function calculatePercentage() {

    const obtained =
      Number(obtainedMarks);

    const total =
      Number(totalMarks);

    if (
      obtained <= 0 ||
      total <= 0
    ) {
      return;
    }

    const result =
      (obtained / total) * 100;

    setPercentage(result);

  }

  return (

    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="px-6 py-24">

        <div className="max-w-3xl mx-auto">

          {/* Heading */}
          <div className="text-center">

            <h1 className="text-6xl font-extrabold">
              Percentage Calculator
            </h1>

            <p className="text-white/50 text-xl mt-6">
              Calculate your percentage instantly.
            </p>

          </div>

          {/* Card */}
          <div className="mt-16 bg-white/[0.04] border border-white/10 rounded-[32px] p-10">

            {/* Obtained Marks */}
            <div>

              <label className="block text-lg mb-4 text-white/70">
                Obtained Marks
              </label>

              <input
                type="number"
                value={obtainedMarks}
                onChange={(e) =>
                  setObtainedMarks(
                    e.target.value
                  )
                }
                placeholder="Enter obtained marks"
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/20"
              />

            </div>

            {/* Total Marks */}
            <div className="mt-8">

              <label className="block text-lg mb-4 text-white/70">
                Total Marks
              </label>

              <input
                type="number"
                value={totalMarks}
                onChange={(e) =>
                  setTotalMarks(
                    e.target.value
                  )
                }
                placeholder="Enter total marks"
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/20"
              />

            </div>

            {/* Button */}
            <button
              onClick={calculatePercentage}
              className="w-full mt-10 bg-white text-black py-4 rounded-2xl text-lg font-semibold hover:scale-[1.01] transition"
            >
              Calculate Percentage
            </button>

            {/* Result */}
            {percentage !== null && (

              <div className="mt-14 bg-black border border-white/10 rounded-3xl p-10 text-center">

                <p className="text-white/50 text-lg">
                  Your Percentage
                </p>

                <h2 className="text-7xl font-extrabold mt-6">

                  {percentage.toFixed(2)}%

                </h2>

              </div>

            )}

          </div>

        </div>

      </section>

      <Footer />

    </main>

  );

}