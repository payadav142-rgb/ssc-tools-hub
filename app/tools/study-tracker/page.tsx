"use client";

import { useState } from "react";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

import ToolContainer from "../../../components/ToolContainer";
import ToolSEOContent from "../../../components/ToolSEOContent";
import AdBanner from "../../../components/AdBanner";
import RelatedTools from "../../../components/RelatedTools";

export default function StudyTrackerPage() {

  const [hours, setHours] =
    useState("");

  const [goal, setGoal] =
    useState<number>(() => {

      if (
        typeof window !==
        "undefined"
      ) {

        const savedGoal =
          localStorage.getItem(
            "studyGoal"
          );

        return savedGoal
          ? Number(savedGoal)
          : 100;

      }

      return 100;

    });

  const [history, setHistory] =
    useState<number[]>(() => {

      if (
        typeof window !==
        "undefined"
      ) {

        const savedHistory =
          localStorage.getItem(
            "studyHistory"
          );

        return savedHistory
          ? JSON.parse(savedHistory)
          : [];

      }

      return [];

    });

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

  const totalSessions =
    history.length;

  const averageHours =
    history.length > 0
      ? (
          totalHours /
          history.length
        ).toFixed(1)
      : 0;

  const remainingHours =
    Math.max(
      goal - totalHours,
      0
    );

  let level = "";

  let badge = "";

  let insight = "";

  let motivation = "";

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

    <ToolContainer>

      <Navbar />

      <section className="px-6 py-24">

        <div className="max-w-3xl mx-auto">

          <div className="text-center">

            <h1 className="text-6xl font-extrabold">
              Daily Study Tracker
            </h1>

            <p className="text-white/50 text-xl mt-6 leading-relaxed">
              Track your daily SSC preparation consistency.
            </p>

          </div>

          <div className="mt-16 bg-white/[0.04] border border-white/10 rounded-[32px] p-10">

            {/* Existing tracker UI same rahega */}

          </div>

        </div>

      </section>

      {/* Ad Banner */}
      <section className="px-6 pb-20">

        <div className="max-w-5xl mx-auto">

          <AdBanner />

        </div>

      </section>

      {/* SEO Content */}
      <ToolSEOContent
        title="SSC Daily Study Tracker"
        description="Track your SSC preparation consistency, study hours, streaks, goals, and performance analytics daily."
      />

      {/* Related Tools */}
      <RelatedTools />

      {/* Bottom Ad */}
      <section className="px-6 pb-24">

        <div className="max-w-5xl mx-auto">

          <AdBanner />

        </div>

      </section>

      <Footer />

    </ToolContainer>

  );

}