"use client";

import { useState } from "react";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

import ToolContainer from "../../../components/ToolContainer";
import ToolSEOContent from "../../../components/ToolSEOContent";
import AdBanner from "../../../components/AdBanner";
import RelatedTools from "../../../components/RelatedTools";

export default function AgeCalculatorPage() {

  const [birthDate, setBirthDate] =
    useState("");

  const [age, setAge] =
    useState<number | null>(null);

  function calculateAge() {

    if (!birthDate) {
      return;
    }

    const today =
      new Date();

    const birth =
      new Date(birthDate);

    let calculatedAge =
      today.getFullYear() -
      birth.getFullYear();

    const monthDifference =
      today.getMonth() -
      birth.getMonth();

    if (
      monthDifference < 0 ||
      (
        monthDifference === 0 &&
        today.getDate() <
        birth.getDate()
      )
    ) {

      calculatedAge--;

    }

    setAge(calculatedAge);

  }

  let eligibility = "";

  if (age !== null) {

    if (
      age >= 18 &&
      age <= 32
    ) {

      eligibility =
        "Eligible for most SSC exams ✅";

    }

    else if (age < 18) {

      eligibility =
        "You are below SSC eligibility age ⚠️";

    }

    else {

      eligibility =
        "Age exceeds some SSC exam limits ⚠️";

    }

  }

  return (

    <ToolContainer>

      <Navbar />

      <section className="px-6 py-24">

        <div className="max-w-3xl mx-auto">

          {/* Heading */}
          <div className="text-center">

            <h1 className="text-6xl font-extrabold">
              SSC Age Calculator
            </h1>

            <p className="text-white/50 text-xl mt-6">
              Check your SSC exam age eligibility instantly.
            </p>

          </div>

          {/* Card */}
          <div className="mt-16 bg-white/[0.04] border border-white/10 rounded-[32px] p-10">

            {/* Input */}
            <div>

              <label className="block text-lg mb-4 text-white/70">
                Select Your Birth Date
              </label>

              <input
                type="date"
                value={birthDate}
                onChange={(e) =>
                  setBirthDate(
                    e.target.value
                  )
                }
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/20"
              />

            </div>

            {/* Button */}
            <button
              onClick={calculateAge}
              className="w-full mt-10 bg-white text-black py-4 rounded-2xl text-lg font-semibold hover:scale-[1.01] transition"
            >
              Calculate Age
            </button>

            {/* Result */}
            {age !== null && (

              <div className="mt-14 bg-black border border-white/10 rounded-3xl p-10 text-center">

                <p className="text-white/50 text-lg">
                  Your Age
                </p>

                <h2 className="text-7xl font-extrabold mt-6">
                  {age}
                </h2>

                <p className="text-2xl mt-4">
                  Years
                </p>

                <p className="mt-8 text-2xl font-semibold">
                  {eligibility}
                </p>

              </div>

            )}

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
        title="SSC Age Calculator"
        description="Check SSC exam eligibility instantly using SSC Age Calculator. Calculate your age accurately for SSC CGL, CHSL, GD, MTS and other SSC exams."
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