"use client";

import { useState } from "react";

import Navbar from "../../../components/Navbar";
import ToolContainer from "../../../components/ToolContainer";

export default function StudyPlannerPage() {

  const [hours, setHours] =
    useState("");

  const [days, setDays] =
    useState("");

  const [plan, setPlan] =
    useState<string[]>([]);

  function generatePlan() {

    const studyHours =
      Number(hours);

    const remainingDays =
      Number(days);

    if (
      studyHours <= 0 ||
      remainingDays <= 0
    ) {
      return;
    }

    const subjects = [

      "Quant",
      "Reasoning",
      "English",
      "GK",

    ];

    const generatedPlan =
      subjects.map(
        (subject) => {

          const perSubject =
            (
              studyHours /
              subjects.length
            ).toFixed(1);

          return `${subject} → ${perSubject} hrs/day for ${remainingDays} days`;

        }
      );

    setPlan(generatedPlan);

  }

  return (

    <ToolContainer>

      <Navbar />

      <section className="px-6 py-24">

        <div className="max-w-3xl mx-auto">

          {/* Heading */}
          <div className="text-center">

            <h1 className="text-6xl font-extrabold">
              SSC Study Planner
            </h1>

            <p className="text-white/50 text-xl mt-6 leading-relaxed">
              Generate a smart daily study schedule instantly.
            </p>

          </div>

          {/* Card */}
          <div className="mt-16 bg-white/[0.04] border border-white/10 rounded-[32px] p-10">

            {/* Hours */}
            <div>

              <label className="block text-lg mb-4 text-white/70">
                Study Hours Per Day
              </label>

              <input
                type="number"
                value={hours}
                onChange={(e) =>
                  setHours(
                    e.target.value
                  )
                }
                placeholder="Enter daily study hours"
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/20"
              />

            </div>

            {/* Days */}
            <div className="mt-8">

              <label className="block text-lg mb-4 text-white/70">
                Days Remaining
              </label>

              <input
                type="number"
                value={days}
                onChange={(e) =>
                  setDays(
                    e.target.value
                  )
                }
                placeholder="Enter remaining days"
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/20"
              />

            </div>

            {/* Button */}
            <button
              onClick={generatePlan}
              className="w-full mt-10 bg-white text-black py-4 rounded-2xl text-lg font-semibold hover:scale-[1.01] transition"
            >
              Generate Plan
            </button>

            {/* Result */}
            {plan.length > 0 && (

              <div className="mt-12 bg-white/[0.05] border border-white/10 rounded-3xl p-8">

                <h2 className="text-3xl font-bold mb-8">
                  Your Study Plan
                </h2>

                <div className="space-y-5">

                  {plan.map(
                    (item) => (

                      <div
                        key={item}
                        className="bg-black border border-white/10 rounded-2xl px-5 py-4"
                      >
                        {item}
                      </div>

                    )
                  )}

                </div>

              </div>

            )}

          </div>

        </div>

      </section>

    </ToolContainer>

  );

}