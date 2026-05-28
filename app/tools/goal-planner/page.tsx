"use client";

import { useEffect, useState } from "react";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

type Goal = {
  text: string;
  completed: boolean;
};

export default function GoalPlannerPage() {

  const [goal, setGoal] =
    useState("");

  const [goals, setGoals] =
    useState<Goal[]>([]);

  useEffect(() => {

    const savedGoals =
      localStorage.getItem(
        "sscGoals"
      );

    if (savedGoals) {

      setGoals(
        JSON.parse(savedGoals)
      );

    }

  }, []);

  function saveGoals(
    updatedGoals: Goal[]
  ) {

    setGoals(updatedGoals);

    localStorage.setItem(
      "sscGoals",
      JSON.stringify(updatedGoals)
    );

  }

  function addGoal() {

    if (!goal.trim()) {
      return;
    }

    const updatedGoals = [
      {
        text: goal,
        completed: false,
      },
      ...goals,
    ];

    saveGoals(updatedGoals);

    setGoal("");

  }

  function toggleGoal(
    index: number
  ) {

    const updatedGoals =
      [...goals];

    updatedGoals[index]
      .completed =
      !updatedGoals[index]
        .completed;

    saveGoals(updatedGoals);

  }

  function deleteGoal(
    index: number
  ) {

    const updatedGoals =
      goals.filter(
        (_, i) =>
          i !== index
      );

    saveGoals(updatedGoals);

  }

  const completedGoals =
    goals.filter(
      (goal) =>
        goal.completed
    ).length;

  const progress =
    goals.length > 0
      ? (
          completedGoals /
          goals.length
        ) * 100
      : 0;

  return (

    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="px-6 py-24">

        <div className="max-w-4xl mx-auto">

          {/* Heading */}
          <div className="text-center">

            <h1 className="text-6xl font-extrabold">
              SSC Goal Planner
            </h1>

            <p className="text-white/50 text-xl mt-6">
              Set and achieve your SSC preparation goals.
            </p>

          </div>

          {/* Main Card */}
          <div className="mt-16 bg-white/[0.04] border border-white/10 rounded-[32px] p-10">

            {/* Input */}
            <div className="flex flex-col md:flex-row gap-4">

              <input
                type="text"
                value={goal}
                onChange={(e) =>
                  setGoal(
                    e.target.value
                  )
                }
                placeholder="Enter your goal..."
                className="flex-1 bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/20"
              />

              <button
                onClick={addGoal}
                className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
              >
                Add Goal
              </button>

            </div>

            {/* Progress */}
            <div className="mt-12 bg-black border border-white/10 rounded-3xl p-8">

              <div className="flex items-center justify-between mb-4">

                <p className="text-white/50">
                  Goal Completion
                </p>

                <p className="font-semibold">
                  {progress.toFixed(0)}%
                </p>

              </div>

              <div className="w-full h-5 bg-white/10 rounded-full overflow-hidden">

                <div
                  className="h-full bg-white transition-all duration-500"
                  style={{
                    width: `${progress}%`,
                  }}
                />

              </div>

            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-2 gap-6 mt-10">

              <div className="bg-black border border-white/10 rounded-3xl p-8 text-center">

                <p className="text-white/50">
                  Total Goals
                </p>

                <h2 className="text-5xl font-extrabold mt-4">
                  {goals.length}
                </h2>

              </div>

              <div className="bg-black border border-white/10 rounded-3xl p-8 text-center">

                <p className="text-white/50">
                  Completed Goals
                </p>

                <h2 className="text-5xl font-extrabold mt-4">
                  {completedGoals}
                </h2>

              </div>

            </div>

            {/* Goals List */}
            <div className="mt-12 space-y-5">

              {goals.length === 0 && (

                <div className="text-center text-white/40 py-10">
                  No goals added yet.
                </div>

              )}

              {goals.map(
                (item, index) => (

                  <div
                    key={index}
                    className="bg-black border border-white/10 rounded-3xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
                  >

                    <p
                      className={`text-xl ${
                        item.completed
                          ? "line-through text-white/40"
                          : ""
                      }`}
                    >
                      {item.text}
                    </p>

                    <div className="flex gap-4">

                      <button
                        onClick={() =>
                          toggleGoal(index)
                        }
                        className="bg-green-500 text-white px-5 py-2 rounded-xl hover:opacity-90 transition"
                      >
                        {item.completed
                          ? "Undo"
                          : "Complete"}
                      </button>

                      <button
                        onClick={() =>
                          deleteGoal(index)
                        }
                        className="bg-red-500 text-white px-5 py-2 rounded-xl hover:opacity-90 transition"
                      >
                        Delete
                      </button>

                    </div>

                  </div>

                )
              )}

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </main>

  );

}