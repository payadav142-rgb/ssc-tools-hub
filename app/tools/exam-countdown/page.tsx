"use client";

import { useEffect, useState } from "react";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function ExamCountdownPage() {

  const [examDate, setExamDate] =
    useState("");

  const [daysLeft, setDaysLeft] =
    useState<number | null>(null);

  useEffect(() => {

    const savedDate =
      localStorage.getItem(
        "sscExamDate"
      );

    if (savedDate) {

      setExamDate(savedDate);

      calculateDays(savedDate);

    }

  }, []);

  function calculateDays(date: string) {

    const today =
      new Date();

    const exam =
      new Date(date);

    const difference =
      exam.getTime() -
      today.getTime();

    const remainingDays =
      Math.ceil(
        difference /
        (1000 * 60 * 60 * 24)
      );

    setDaysLeft(remainingDays);

  }

  function saveDate() {

    if (!examDate) {
      return;
    }

    localStorage.setItem(
      "sscExamDate",
      examDate
    );

    calculateDays(examDate);

  }

  let motivation = "";

  if (
    daysLeft !== null &&
    daysLeft <= 30
  ) {

    motivation =
      "Final revision phase started 🔥";

  }

  else if (
    daysLeft !== null &&
    daysLeft <= 90
  ) {

    motivation =
      "Stay focused and consistent ⚡";

  }

  else {

    motivation =
      "Plenty of time to dominate SSC 🚀";

  }

  return (

    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="px-6 py-24">

        <div className="max-w-3xl mx-auto">

          {/* Heading */}
          <div className="text-center">

            <h1 className="text-6xl font-extrabold">
              SSC Exam Countdown
            </h1>

            <p className="text-white/50 text-xl mt-6">
              Track remaining days before your SSC exam.
            </p>

          </div>

          {/* Card */}
          <div className="mt-16 bg-white/[0.04] border border-white/10 rounded-[32px] p-10">

            {/* Input */}
            <div>

              <label className="block text-lg mb-4 text-white/70">
                Select Exam Date
              </label>

              <input
                type="date"
                value={examDate}
                onChange={(e) =>
                  setExamDate(
                    e.target.value
                  )
                }
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/20"
              />

            </div>

            {/* Button */}
            <button
              onClick={saveDate}
              className="w-full mt-8 bg-white text-black py-4 rounded-2xl text-lg font-semibold hover:scale-[1.01] transition"
            >
              Save Exam Date
            </button>

            {/* Countdown */}
            {daysLeft !== null && (

              <div className="mt-14 bg-black border border-white/10 rounded-3xl p-10 text-center">

                <p className="text-white/50 text-lg">
                  Remaining Time
                </p>

                <h2 className="text-7xl font-extrabold mt-6">
                  {daysLeft}
                </h2>

                <p className="text-2xl mt-4">
                  Days Left
                </p>

                <p className="mt-8 text-2xl font-semibold">
                  {motivation}
                </p>

              </div>

            )}

          </div>

        </div>

      </section>

      <Footer />

    </main>

  );

}