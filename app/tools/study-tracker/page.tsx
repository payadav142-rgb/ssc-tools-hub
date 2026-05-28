"use client";

import { useEffect, useState } from "react";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function StudyTrackerPage() {

  const [hours, setHours] =
    useState("");

  const [goal, setGoal] =
    useState<number>(100);

  const [history, setHistory] =
    useState<number[]>([]);

  useEffect(() => {

    const savedHistory =
      localStorage.getItem(
        "studyHistory"
      );

    const savedGoal =
      localStorage.getItem(
        "studyGoal"
      );

    if (savedHistory) {

      setHistory(
        JSON.parse(savedHistory)
      );

    }

    if (savedGoal) {

      setGoal(
        Number(savedGoal)
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

  const averageHours =
    history.length > 0
      ? (
          totalHours /
          history.length
        ).toFixed(1)
      : 0;

  const bestDay =
    history.length > 0
      ? Math.max(...history)
      : 0;

  const totalSessions =
    history.length;

  const remainingHours =
    Math.max(
      goal - totalHours,
      0
    );

  const progress =
    goal > 0
      ? Math.min(
          (totalHours / goal) * 100,
          100
        )
      : 0;

  let badge = "";

  let level = "";

  let insight = "";

  let motivation = "";

  // LEVEL SYSTEM
  if (totalHours >= 200) {

    level =
      "👑 SSC Legend";

  }

  else if (totalHours >= 100) {

    level =
      "🔥 SSC Warrior";

  }

  else if (totalHours >= 50) {

    level =
      "⚡ Advanced Learner";

  }

  else if (totalHours >= 20) {

    level =
      "📚 Intermediate";

  }

  else {

    level =
      "🚀 Beginner";

  }

  // BADGE SYSTEM
  if (totalHours >= 100) {

    badge =
      "🏆 SSC Master";

  }

  else if (totalHours >= 50) {

    badge =
      "🔥 Consistency King";

  }

  else if (totalHours >= 25) {

    badge =
      "⚡ Rising Warrior";

  }

  else if (totalHours >= 10) {

    badge =
      "📚 Study Beginner";

  }

  else {

    badge =
      "🚀 New Challenger";

  }

  // SMART INSIGHT
  if (
    totalSessions >= 7 &&
    Number(averageHours) < 2
  ) {

    insight =
      "Increase daily study time for faster SSC progress 📈";

  }

  else if (
    totalHours >= goal
  ) {

    insight =
      "Excellent consistency! Keep pushing forward 🔥";

  }

  else if (
    remainingHours <= 10
  ) {

    insight =
      "You are very close to your study goal 🚀";

  }

  else if (
    totalSessions < 3
  ) {

    insight =
      "Build a daily study habit for better results 📚";

  }

  else {

    insight =
      "Stay consistent and trust the process 💪";

  }

  // MOTIVATION
  if (totalHours >= goal) {

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

            {/* Add Button */}
            <button
              onClick={addStudyHours}
              className="w-full mt-10 bg-white text-black py-4 rounded-2xl text-lg font-semibold hover:scale-[1.01] transition"
            >
              Add Progress
            </button>

            {/* Reset Button */}
            <button
              onClick={() => {

                setHistory([]);

                setHours("");

                setGoal(100);

                localStorage.removeItem(
                  "studyHistory"
                );

                localStorage.removeItem(
                  "studyGoal"
                );

              }}
              className="w-full mt-4 bg-red-500 text-white py-4 rounded-2xl text-lg font-semibold hover:opacity-90 transition"
            >
              Reset Tracker
            </button>

            {/* Goal Input */}
            <div className="mt-12">

              <label className="block text-lg mb-4 text-white/70">
                Set Study Goal (Hours)
              </label>

              <input
                type="number"
                value={goal}
                onChange={(e) => {

                  const newGoal =
                    Number(e.target.value);

                  setGoal(newGoal);

                  localStorage.setItem(
                    "studyGoal",
                    JSON.stringify(newGoal)
                  );

                }}
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/20"
              />

            </div>

            {/* Progress Bar */}
            <div className="mt-12 bg-white/[0.05] border border-white/10 rounded-3xl p-8">

              <div className="flex items-center justify-between mb-4">

                <p className="text-white/50">
                  Study Goal Progress
                </p>

                <p className="font-semibold">
                  {progress.toFixed(0)}%
                </p>

              </div>

              <div className="w-full h-5 bg-black rounded-full overflow-hidden border border-white/10">

                <div
                  className="h-full bg-white transition-all duration-500"
                  style={{
                    width: `${progress}%`,
                  }}
                />

              </div>

            </div>

            {/* Streak */}
            <div className="mt-12 bg-white/[0.05] border border-white/10 rounded-3xl p-8 text-center">

              <p className="text-white/50 text-lg">
                Current Study Streak
              </p>

              <h2 className="text-6xl font-extrabold mt-4">
                {streak} Days
              </h2>

            </div>

            {/* Smart Insight */}
            <div className="mt-12 bg-white/[0.05] border border-white/10 rounded-3xl p-8 text-center">

              <p className="text-white/50 text-lg">
                Smart Study Insight
              </p>

              <h2 className="text-3xl font-bold mt-4 leading-relaxed">
                {insight}
              </h2>

            </div>

            {/* User Level */}
            <div className="mt-12 bg-white/[0.05] border border-white/10 rounded-3xl p-8 text-center">

              <p className="text-white/50 text-lg">
                Current Study Level
              </p>

              <h2 className="text-5xl font-extrabold mt-4">
                {level}
              </h2>

            </div>

            {/* Weekly Analytics */}
            <div className="mt-12 bg-white/[0.05] border border-white/10 rounded-3xl p-8">

              <h2 className="text-3xl font-bold mb-8">
                Study Analytics
              </h2>

              <div className="grid md:grid-cols-3 gap-6">

                <div className="bg-black border border-white/10 rounded-2xl p-6 text-center">

                  <p className="text-white/50">
                    Average Hours
                  </p>

                  <h3 className="text-4xl font-bold mt-3">
                    {averageHours}
                  </h3>

                </div>

                <div className="bg-black border border-white/10 rounded-2xl p-6 text-center">

                  <p className="text-white/50">
                    Best Day
                  </p>

                  <h3 className="text-4xl font-bold mt-3">
                    {bestDay}h
                  </h3>

                </div>

                <div className="bg-black border border-white/10 rounded-2xl p-6 text-center">

                  <p className="text-white/50">
                    Total Sessions
                  </p>

                  <h3 className="text-4xl font-bold mt-3">
                    {totalSessions}
                  </h3>

                </div>

              </div>

            </div>

            {/* Goal Status */}
            <div className="mt-12 bg-white/[0.05] border border-white/10 rounded-3xl p-8 text-center">

              <p className="text-white/50 text-lg">
                Daily Goal Status
              </p>

              {remainingHours > 0 ? (

                <h2 className="text-4xl font-extrabold mt-4">
                  {remainingHours} hrs Remaining
                </h2>

              ) : (

                <h2 className="text-4xl font-extrabold mt-4">
                  Goal Completed ✅
                </h2>

              )}

            </div>

            {/* Badge */}
            <div className="mt-12 bg-white/[0.05] border border-white/10 rounded-3xl p-8 text-center">

              <p className="text-white/50 text-lg">
                Current Achievement
              </p>

              <h2 className="text-4xl font-extrabold mt-4">
                {badge}
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

                  {[...history]
                    .reverse()
                    .map(
                      (item, index) => (

                        <div
                          key={index}
                          className="bg-black border border-white/10 rounded-2xl px-5 py-4"
                        >
                          Session {history.length - index}
                          {" "}
                          → {item} hrs
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