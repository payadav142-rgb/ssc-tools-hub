"use client";

import { useState } from "react";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ToolContainer from "../../../components/ToolContainer";

export default function TimetableGeneratorPage() {

  const [hours, setHours] =
    useState("");

  const [timetable, setTimetable] =
    useState<string[]>([]);

  function generateTimetable() {

    const studyHours =
      Number(hours);

    if (
      studyHours <= 0
    ) {
      return;
    }

    const subjects = [

      "Quantitative Aptitude",
      "Reasoning",
      "English",
      "General Awareness",

    ];

    const generatedPlan =
      subjects.map(
        (subject) => {

          const allocatedHours =
            (
              studyHours /
              subjects.length
            ).toFixed(1);

          return `${subject} → ${allocatedHours} hrs`;

        }
      );

    setTimetable(
      generatedPlan
    );

  }

  return (

    <ToolContainer>

      <Navbar />

      <section className="px-6 py-24">

        <div className="max-w-4xl mx-auto">

          {/* Heading */}
          <div className="text-center">

            <h1 className="text-6xl font-extrabold">
              Study Timetable Generator
            </h1>

            <p className="text-white/50 text-xl mt-6">
              Generate your smart SSC daily study routine.
            </p>

          </div>

          {/* Main Card */}
          <div className="mt-16 bg-white/[0.04] border border-white/10 rounded-[32px] p-10">

            {/* Input */}
            <div>

              <label className="block text-lg mb-4 text-white/70">
                Daily Study Hours
              </label>

              <input
                type="number"
                value={hours}
                onChange={(e) =>
                  setHours(
                    e.target.value
                  )
                }
                placeholder="Enter total study hours"
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/20"
              />

            </div>

            {/* Button */}
            <button
              onClick={generateTimetable}
              className="w-full mt-8 bg-white text-black py-4 rounded-2xl text-lg font-semibold hover:scale-[1.01] transition"
            >
              Generate Timetable
            </button>

            {/* Timetable */}
            {timetable.length > 0 && (

              <div className="mt-14 bg-black border border-white/10 rounded-3xl p-10">

                <h2 className="text-4xl font-bold mb-8 text-center">
                  Your Study Plan
                </h2>

                <div className="space-y-5">

                  {timetable.map(
                    (item, index) => (

                      <div
                        key={index}
                        className="bg-white/[0.04] border border-white/10 rounded-2xl px-6 py-5 text-xl"
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

      <Footer />

    </ToolContainer>

  );

}