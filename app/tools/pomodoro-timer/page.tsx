"use client";

import { useEffect, useState } from "react";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function PomodoroTimerPage() {

  const [minutes, setMinutes] =
    useState(25);

  const [seconds, setSeconds] =
    useState(0);

  const [isRunning, setIsRunning] =
    useState(false);

  useEffect(() => {

    let timer: NodeJS.Timeout;

    if (isRunning) {

      timer = setInterval(() => {

        if (seconds > 0) {

          setSeconds(seconds - 1);

        }

        else {

          if (minutes === 0) {

            setIsRunning(false);

            return;

          }

          setMinutes(minutes - 1);

          setSeconds(59);

        }

      }, 1000);

    }

    return () =>
      clearInterval(timer);

  }, [isRunning, minutes, seconds]);

  function startTimer() {

    setIsRunning(true);

  }

  function pauseTimer() {

    setIsRunning(false);

  }

  function resetTimer() {

    setIsRunning(false);

    setMinutes(25);

    setSeconds(0);

  }

  return (

    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="px-6 py-24">

        <div className="max-w-3xl mx-auto text-center">

          {/* Heading */}
          <h1 className="text-6xl font-extrabold">
            Pomodoro Study Timer
          </h1>

          <p className="text-white/50 text-xl mt-6">
            Stay focused and improve your SSC productivity.
          </p>

          {/* Timer Card */}
          <div className="mt-20 bg-white/[0.04] border border-white/10 rounded-[32px] p-14">

            <div className="text-8xl font-extrabold tracking-widest">

              {String(minutes).padStart(2, "0")}
              :
              {String(seconds).padStart(2, "0")}

            </div>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-6 mt-12">

              <button
                onClick={startTimer}
                className="bg-white text-black px-8 py-4 rounded-2xl text-lg font-semibold hover:scale-105 transition"
              >
                Start
              </button>

              <button
                onClick={pauseTimer}
                className="bg-yellow-500 text-black px-8 py-4 rounded-2xl text-lg font-semibold hover:scale-105 transition"
              >
                Pause
              </button>

              <button
                onClick={resetTimer}
                className="bg-red-500 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:scale-105 transition"
              >
                Reset
              </button>

            </div>

            {/* Tips */}
            <div className="mt-14 text-left bg-black border border-white/10 rounded-3xl p-8">

              <h2 className="text-3xl font-bold mb-6">
                Pomodoro Tips
              </h2>

              <ul className="space-y-4 text-white/70 text-lg">

                <li>
                  • Study with full focus for 25 minutes
                </li>

                <li>
                  • Take a short 5 minute break
                </li>

                <li>
                  • Repeat consistently for maximum productivity
                </li>

              </ul>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </main>

  );

}