"use client";

import { useEffect, useState } from "react";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function StudyTrackerPage() {

  const [hours, setHours] =
    useState("");

  const [history, setHistory] =
    useState<number[]>([]);
    useEffect(() => {

  const savedHistory =
    localStorage.getItem(
      "studyHistory"
    );

  if (savedHistory) {

    setHistory(
      JSON.parse(savedHistory)
    );
  }

}, []);

  function addStudyHours() {

    const studyHours =
      Number(hours);

    if (studyHours <= 0) {
      return;
    }

    const updatedHistory = [
  ...history,
  studyHours,
];

setHistory(updatedHistory);

localStorage.setItem(
  "studyHistory",
  JSON.stringify(updatedHistory)
);

    setHours("");
  }

  const totalHours =
    history.reduce(
      (acc, curr) =>
        acc + curr,
      0
    );
    const streak =
  history.length;
let motivation = "";

if (totalHours >= 100) {
  motivation =
    "SSC Beast Mode Activated 🔥";
}

else if (totalHours >= 50) {
  motivation =
    "Excellent Consistency 🚀";
}

else if (totalHours >= 20) {
  motivation =
    "Great Progress ⚡";
}

else if (totalHours >= 5) {
  motivation =
    "Good Start 📚";
}

else {
  motivation =
    "Start Your SSC Journey Today 💪";
}
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="px-6 py-24">

        <div className="max-w-3xl mx-auto">

          {/* Heading */}
          <div className="text-center">

            <h1 className="text-6xl font-extrabold">
              Daily Study Tracker
            </h1>

            <p className="text-white/50 text-xl mt-6 leading-relaxed">
              Track your daily SSC preparation consistency.
            </p>

          </div>

          {/* Card */}
          <div className="mt-16 bg-white/[0.04] border border-white/10 rounded-[32px] p-10">

            {/* Input */}
            <div>

              <label className="block text-lg mb-4 text-white/70">
                Study Hours Completed Today
              </label>

              <input
                type="number"
                value={hours}
                onChange={(e) =>
                  setHours(e.target.value)
                }
                placeholder="Enter completed hours"
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/20"
              />

            </div>

            {/* Button */}
            <button
              onClick={addStudyHours}
              className="w-full mt-10 bg-white text-black py-4 rounded-2xl text-lg font-semibold hover:scale-[1.01] transition"
            >
              Add Progress
            </button>
{/* Streak */}
<div className="mt-12 bg-white/[0.05] border border-white/10 rounded-3xl p-8 text-center">

  <p className="text-white/50 text-lg">
    Current Study Streak
  </p>

  <h2 className="text-6xl font-extrabold mt-4">
    {streak} Days
  </h2>

</div>
            {/* Total */}
            <div className="mt-12 bg-white/[0.05] border border-white/10 rounded-3xl p-8 text-center">

              <p className="text-white/50 text-lg">
                Total Study Hours
              </p>

              <h2 className="text-6xl font-extrabold mt-4">
                {totalHours}
              </h2>
<p className="mt-6 text-2xl font-semibold">
  {motivation}
</p>
            </div>

            {/* History */}
            {history.length > 0 && (

              <div className="mt-10">

                <h3 className="text-2xl font-bold mb-6">
                  Daily History
                </h3>

                <div className="space-y-4">

                  {history.map(
                    (item, index) => (

                      <div
                        key={index}
                        className="bg-black border border-white/10 rounded-2xl px-5 py-4"
                      >
                        Day {index + 1} → {item} hrs
                      </div>
                    )
                  )}

                </div>

              </div>

            )}

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}