"use client";

import { useState } from "react";

import Navbar from "../../../components/Navbar";
import ToolContainer from "../../../components/ToolContainer";
import ToolSEOContent from "../../../components/ToolSEOContent";
import AdBanner from "../../../components/AdBanner";
import RelatedTools from "../../../components/RelatedTools";

export default function AgeCalculatorPage() {
  const [birthDate, setBirthDate] = useState("");

  const [age, setAge] = useState<{
    years: number;
    months: number;
    days: number;
  } | null>(null);

  const [error, setError] = useState("");

  function calculateAge() {
    setError("");
    setAge(null);

    if (!birthDate) {
      setError("Please select your date of birth.");
      return;
    }

    const today = new Date();
    const birth = new Date(`${birthDate}T00:00:00`);

    if (birth > today) {
      setError("Date of birth cannot be in the future.");
      return;
    }

    let years =
      today.getFullYear() -
      birth.getFullYear();

    let months =
      today.getMonth() -
      birth.getMonth();

    let days =
      today.getDate() -
      birth.getDate();

    if (days < 0) {
      months--;

      const previousMonth =
        new Date(
          today.getFullYear(),
          today.getMonth(),
          0
        );

      days += previousMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({
      years,
      months,
      days,
    });
  }

  function resetCalculator() {
    setBirthDate("");
    setAge(null);
    setError("");
  }

  let eligibility = "";

  if (age !== null) {
    if (age.years < 18) {
      eligibility =
        "You are below the usual minimum age for many SSC exams.";
    } else if (age.years <= 32) {
      eligibility =
        "You may be eligible for several SSC exams, subject to the specific post and cut-off date.";
    } else {
      eligibility =
        "Your age may exceed the limit for some SSC posts. Check the specific exam notification.";
    }
  }

  return (
    <ToolContainer>

      <Navbar />

      <main className="min-h-screen bg-[#0B0F19] text-white overflow-hidden relative">

        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="absolute top-[45%] right-0 w-[400px] h-[400px] bg-amber-400/10 blur-[120px] rounded-full pointer-events-none" />

        {/* Main Tool */}
        <section className="relative z-10 px-4 md:px-6 py-20 md:py-28">

          <div className="max-w-4xl mx-auto">

            {/* Heading */}
            <div className="text-center">

              <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-5 py-2.5 text-sm text-orange-200">
                🎂 SSC Preparation Tool
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mt-8">

                SSC{" "}

                <span className="text-orange-400">
                  Age Calculator
                </span>

              </h1>

              <p className="text-white/50 text-lg md:text-xl leading-relaxed mt-6 max-w-2xl mx-auto">
                Calculate your exact age and get a quick
                indication of your SSC age eligibility.
              </p>

            </div>

            {/* Calculator Card */}
            <div className="mt-16 bg-[#111827]/80 backdrop-blur-xl border border-orange-500/10 rounded-[36px] p-6 md:p-10 shadow-[0_0_60px_rgba(249,115,22,0.06)]">

              {/* Input */}
              <div>

                <label
                  htmlFor="birthDate"
                  className="block text-lg font-semibold text-white/80 mb-4"
                >
                  Date of Birth
                </label>

                <input
                  id="birthDate"
                  type="date"
                  value={birthDate}
                  max={
                    new Date()
                      .toISOString()
                      .split("T")[0]
                  }
                  onChange={(e) => {
                    setBirthDate(e.target.value);
                    setError("");
                    setAge(null);
                  }}
                  className="w-full bg-[#0B0F19] border border-orange-500/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-orange-500/50 transition-all"
                />

              </div>

              {/* Error */}
              {error && (
                <div className="mt-5 rounded-2xl border border-red-500/20 bg-red-500/10 px-5 py-4 text-red-300">
                  ⚠️ {error}
                </div>
              )}

              {/* Buttons */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8">

                <button
                  onClick={calculateAge}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-[1.01] shadow-lg shadow-orange-500/20"
                >
                  Calculate Age
                </button>

                <button
                  onClick={resetCalculator}
                  className="border border-orange-500/20 bg-orange-500/5 hover:bg-orange-500/10 text-white/80 hover:text-white py-4 rounded-2xl text-lg font-semibold transition-all"
                >
                  Reset
                </button>

              </div>

              {/* Result */}
              {age !== null && (

                <div className="mt-12">

                  <div className="rounded-[32px] border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-amber-400/5 p-7 md:p-10 text-center">

                    <p className="text-white/50 text-lg">
                      Your Exact Age
                    </p>

                    <div className="grid grid-cols-3 gap-3 md:gap-6 mt-8">

                      <div className="bg-[#0B0F19]/80 border border-orange-500/10 rounded-2xl p-4 md:p-6">

                        <h2 className="text-4xl md:text-5xl font-extrabold text-orange-300">
                          {age.years}
                        </h2>

                        <p className="text-white/50 mt-2">
                          Years
                        </p>

                      </div>

                      <div className="bg-[#0B0F19]/80 border border-orange-500/10 rounded-2xl p-4 md:p-6">

                        <h2 className="text-4xl md:text-5xl font-extrabold text-orange-300">
                          {age.months}
                        </h2>

                        <p className="text-white/50 mt-2">
                          Months
                        </p>

                      </div>

                      <div className="bg-[#0B0F19]/80 border border-orange-500/10 rounded-2xl p-4 md:p-6">

                        <h2 className="text-4xl md:text-5xl font-extrabold text-orange-300">
                          {age.days}
                        </h2>

                        <p className="text-white/50 mt-2">
                          Days
                        </p>

                      </div>

                    </div>

                    <div className="mt-8 bg-[#0B0F19]/60 border border-orange-500/10 rounded-2xl p-5">

                      <p className="text-white/70 leading-relaxed">
                        {eligibility}
                      </p>

                    </div>

                  </div>

                </div>

              )}

            </div>

          </div>

        </section>

        {/* Ad Banner */}
        <section className="relative z-10 px-4 md:px-6 pb-20">

          <div className="max-w-5xl mx-auto">

            <AdBanner />

          </div>

        </section>

        {/* SEO Content */}
        <div className="relative z-10">

          <ToolSEOContent
            title="SSC Age Calculator"
            description="Check your age for SSC exams using our free SSC Age Calculator. Calculate your exact age and understand the general age eligibility range for SSC CGL, CHSL, GD, MTS and other SSC examinations."
          />

        </div>

        {/* Related Tools */}
        <div className="relative z-10">

          <RelatedTools />

        </div>

        {/* Bottom Ad */}
        <section className="relative z-10 px-4 md:px-6 pb-24">

          <div className="max-w-5xl mx-auto">

            <AdBanner />

          </div>

        </section>

      </main>

    </ToolContainer>
  );
}