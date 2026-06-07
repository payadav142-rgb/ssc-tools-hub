"use client";

import {
  useMemo,
  useState,
} from "react";

import React from "react";

import { useUser } from "@clerk/nextjs";

import Sidebar from "../../components/dashboard/Sidebar";

import Header from "../../components/dashboard/Header";

import StatsCard from "../../components/dashboard/StatsCard";

import GoalProgress from "../../components/dashboard/GoalProgress";

import BadgeSection from "../../components/dashboard/BadgeSection";

import NotesSection from "../../components/dashboard/NotesSection";

import HistorySection from "../../components/dashboard/HistorySection";

import AnalyticsChart from "../../components/dashboard/AnalyticsChart";

import ActivityFeed from "../../components/dashboard/ActivityFeed";

type HistoryItem = {
  date: string;
  hours: number;
};

export default function DashboardPage() {

  const { user, isLoaded } =
    useUser();

  const [studyHours, setStudyHours] =
    useState(() => {

      if (
        typeof window !==
        "undefined"
      ) {

        return Number(
          localStorage.getItem(
            "studyHours"
          ) || 0
        );

      }

      return 0;

    });

  const [streak, setStreak] =
    useState(() => {

      if (
        typeof window !==
        "undefined"
      ) {

        return Number(
          localStorage.getItem(
            "studyStreak"
          ) || 0
        );

      }

      return 0;

    });

  const [goals, setGoals] =
    useState(() => {

      if (
        typeof window !==
        "undefined"
      ) {

        return Number(
          localStorage.getItem(
            "studyGoals"
          ) || 0
        );

      }

      return 0;

    });

  const [note, setNote] =
    useState(() => {

      if (
        typeof window !==
        "undefined"
      ) {

        return (
          localStorage.getItem(
            "studyNote"
          ) || ""
        );

      }

      return "";

    });

  const [dailyGoal, setDailyGoal] =
    useState(() => {

      if (
        typeof window !==
        "undefined"
      ) {

        return Number(
          localStorage.getItem(
            "dailyGoal"
          ) || 5
        );

      }

      return 5;

    });

  const [history, setHistory] =
    useState<HistoryItem[]>(() => {

      if (
        typeof window !==
        "undefined"
      ) {

        const savedHistory =
          localStorage.getItem(
            "studyHistory"
          );

        return savedHistory
          ? JSON.parse(
              savedHistory
            )
          : [];

      }

      return [];

    });

  const motivationQuotes = [

    "Success needs consistency 🔥",

    "Discipline beats motivation 🚀",

    "Small progress is still progress 📈",

    "Your future self will thank you 😄",

    "Stay focused. Stay consistent 🎯",

    "SSC selection is coming closer 💪",

  ];

  const [randomQuote] =
    useState(() => {

      return motivationQuotes[
        Math.floor(
          Math.random() *
          motivationQuotes.length
        )
      ];

    });

  const addStudyHour = () => {

    const updated =
      studyHours + 1;

    setStudyHours(updated);

    localStorage.setItem(
      "studyHours",
      updated.toString()
    );

    const today =
      new Date().toLocaleDateString();

    const updatedHistory = [

      ...history,

      {
        date: today,
        hours: 1,
      },

    ];

    setHistory(updatedHistory);

    localStorage.setItem(
      "studyHistory",
      JSON.stringify(
        updatedHistory
      )
    );

  };

  const increaseStreak = () => {

    const updated =
      streak + 1;

    setStreak(updated);

    localStorage.setItem(
      "studyStreak",
      updated.toString()
    );

  };

  const completeGoal = () => {

    const updated =
      goals + 1;

    setGoals(updated);

    localStorage.setItem(
      "studyGoals",
      updated.toString()
    );

  };

  const saveNote = () => {

    localStorage.setItem(
      "studyNote",
      note
    );

    alert(
      "Note Saved 🚀"
    );

  };

  const saveDailyGoal = (
    value: number
  ) => {

    setDailyGoal(value);

    localStorage.setItem(
      "dailyGoal",
      value.toString()
    );

  };

  const resetHours = () => {

    setStudyHours(0);

    localStorage.setItem(
      "studyHours",
      "0"
    );

  };

  const resetStreak = () => {

    setStreak(0);

    localStorage.setItem(
      "studyStreak",
      "0"
    );

  };

  const resetGoals = () => {

    setGoals(0);

    localStorage.setItem(
      "studyGoals",
      "0"
    );

  };

  const averageHours =
    history.length > 0
      ? (
          history.reduce(
            (acc, item) =>
              acc + item.hours,
            0
          ) / history.length
        ).toFixed(1)
      : 0;

  const bestStudyDay =
    history.length > 0
      ? history.reduce(
          (
            best,
            current
          ) =>
            current.hours >
            best.hours
              ? current
              : best
        )
      : null;

  const studyLevel =
    useMemo(() => {

      if (studyHours >= 100)
        return "SSC Legend 👑";

      if (studyHours >= 50)
        return "Study Warrior ⚔️";

      if (studyHours >= 20)
        return "Consistent Learner 📚";

      return "Beginner 🚀";

    }, [studyHours]);

  const badges = [];

  if (studyHours >= 10) {
    badges.push(
      "10 Hours Badge 🏅"
    );
  }

  if (studyHours >= 50) {
    badges.push(
      "50 Hours Master 🔥"
    );
  }

  if (streak >= 7) {
    badges.push(
      "7 Day Streak ⚡"
    );
  }

  if (goals >= 25) {
    badges.push(
      "Goal Crusher 🎯"
    );
  }

  if (!isLoaded) {

    return (

      <div className="p-10 text-white">

        Loading...

      </div>

    );

  }

  return (

    <div className="min-h-screen bg-black text-white flex">

      <Sidebar />

      <div className="flex-1 p-6 md:p-10">

        <Header
          name={user?.firstName}
          quote={randomQuote}
          level={studyLevel}
        />

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <StatsCard
            title="Total Study Hours"
            value={studyHours}
            buttonText="+ Add Hour"
            onClick={addStudyHour}
            onReset={resetHours}
          />

          <StatsCard
            title="Current Streak 🔥"
            value={streak}
            buttonText="+ Increase"
            onClick={
              increaseStreak
            }
            onReset={
              resetStreak
            }
          />

          <StatsCard
            title="Goals Completed 🎯"
            value={goals}
            buttonText="+ Complete Goal"
            onClick={
              completeGoal
            }
            onReset={
              resetGoals
            }
          />

        </div>

        <GoalProgress
          studyHours={
            studyHours
          }
          dailyGoal={
            dailyGoal
          }
          setGoal={
            saveDailyGoal
          }
        />

        <AnalyticsChart
          averageHours={
            averageHours
          }
          bestDay={
            bestStudyDay
          }
        />

        <BadgeSection
          badges={badges}
        />

        <ActivityFeed
          studyHours={
            studyHours
          }
          streak={streak}
          goals={goals}
        />

        <NotesSection
          note={note}
          setNote={setNote}
          saveNote={saveNote}
        />

        <HistorySection
          history={history}
        />

      </div>

    </div>

  );

}