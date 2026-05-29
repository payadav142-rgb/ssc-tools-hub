"use client";

import { useState } from "react";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ToolContainer from "../../../components/ToolContainer";

const topicsData = [

  "Percentage",
  "Profit and Loss",
  "Time and Work",
  "Ratio and Proportion",
  "Coding-Decoding",
  "Analogy",
  "Blood Relations",
  "Grammar",
  "Vocabulary",
  "Reading Comprehension",
  "History",
  "Polity",
  "Geography",
  "Current Affairs",

];

export default function TopicProgressTrackerPage() {

  const [completedTopics, setCompletedTopics] =
    useState<string[]>(() => {

      if (
        typeof window !==
        "undefined"
      ) {

        const savedTopics =
          localStorage.getItem(
            "sscCompletedTopics"
          );

        return savedTopics
          ? JSON.parse(savedTopics)
          : [];

      }

      return [];

    });

  function toggleTopic(
    topic: string
  ) {

    let updatedTopics =
      [...completedTopics];

    if (
      updatedTopics.includes(topic)
    ) {

      updatedTopics =
        updatedTopics.filter(
          (item) =>
            item !== topic
        );

    }

    else {

      updatedTopics.push(topic);

    }

    setCompletedTopics(
      updatedTopics
    );

    localStorage.setItem(
      "sscCompletedTopics",
      JSON.stringify(updatedTopics)
    );

  }

  const progress =
    (
      (
        completedTopics.length /
        topicsData.length
      ) * 100
    ).toFixed(0);

  return (

    <ToolContainer>

      <Navbar />

      <section className="px-6 py-24">

        <div className="max-w-4xl mx-auto">

          {/* Heading */}
          <div className="text-center">

            <h1 className="text-6xl font-extrabold">
              SSC Topic Progress Tracker
            </h1>

            <p className="text-white/50 text-xl mt-6">
              Track completed SSC preparation topics.
            </p>

          </div>

          {/* Progress Card */}
          <div className="mt-16 bg-white/[0.04] border border-white/10 rounded-[32px] p-10 text-center">

            <p className="text-white/50 text-lg">
              Overall Progress
            </p>

            <h2 className="text-7xl font-extrabold mt-6">
              {progress}%
            </h2>

            <div className="w-full h-5 bg-black rounded-full overflow-hidden border border-white/10 mt-10">

              <div
                className="h-full bg-white transition-all duration-500"
                style={{
                  width:
                    `${progress}%`,
                }}
              />

            </div>

          </div>

          {/* Topics */}
          <div className="mt-16 grid md:grid-cols-2 gap-6">

            {topicsData.map(
              (topic) => {

                const completed =
                  completedTopics.includes(
                    topic
                  );

                return (

                  <button
                    key={topic}
                    onClick={() =>
                      toggleTopic(
                        topic
                      )
                    }
                    className={`p-6 rounded-3xl border transition text-left ${
                      completed
                        ? "bg-white text-black border-white"
                        : "bg-white/[0.04] border-white/10 text-white"
                    }`}
                  >

                    <div className="flex items-center justify-between">

                      <h3 className="text-2xl font-bold">
                        {topic}
                      </h3>

                      <span className="text-3xl">

                        {completed
                          ? "✅"
                          : "⭕"}

                      </span>

                    </div>

                  </button>

                );

              }
            )}

          </div>

        </div>

      </section>

      <Footer />

    </ToolContainer>

  );

}