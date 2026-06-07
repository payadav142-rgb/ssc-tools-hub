
"use client";

import { useState } from "react";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

import ToolContainer from "../../../components/ToolContainer";
import ToolSEOContent from "../../../components/ToolSEOContent";
import AdBanner from "../../../components/AdBanner";
import RelatedTools from "../../../components/RelatedTools";

export default function EligibilityCheckerPage() {

  const [age, setAge] =
    useState("");

  const [qualification, setQualification] =
    useState("");

  const [result, setResult] =
    useState("");

  function checkEligibility() {

    const userAge =
      Number(age);

    if (
      qualification === "12th" &&
      userAge >= 18 &&
      userAge <= 27
    ) {

      setResult(
        "Eligible for SSC CHSL ✅"
      );

    }

    else if (
      qualification === "graduate" &&
      userAge >= 18 &&
      userAge <= 32
    ) {

      setResult(
        "Eligible for SSC CGL ✅"
      );

    }

    else {

      setResult(
        "Eligibility criteria not matched ⚠️"
      );

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
              SSC Eligibility Checker
            </h1>

            <p className="text-white/50 text-xl mt-6">
              Check your SSC exam eligibility instantly.
            </p>

          </div>

          {/* Card */}
          <div className="mt-16 bg-white/[0.04] border border-white/10 rounded-[32px] p-10">

            {/* Age */}
            <div>

              <label className="block text-lg mb-4 text-white/70">
                Your Age
              </label>

              <input
                type="number"
                value={age}
                onChange={(e) =>
                  setAge(
                    e.target.value
                  )
                }
                placeholder="Enter your age"
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/20"
              />

            </div>

            {/* Qualification */}
            <div className="mt-8">

              <label className="block text-lg mb-4 text-white/70">
                Qualification
              </label>

              <select
                value={qualification}
                onChange={(e) =>
                  setQualification(
                    e.target.value
                  )
                }
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/20"
              >

                <option value="">
                  Select Qualification
                </option>

                <option value="12th">
                  12th Pass
                </option>

                <option value="graduate">
                  Graduate
                </option>

              </select>

            </div>

            {/* Button */}
            <button
              onClick={checkEligibility}
              className="w-full mt-10 bg-white text-black py-4 rounded-2xl text-lg font-semibold hover:scale-[1.01] transition"
            >
              Check Eligibility
            </button>

            {/* Result */}
            {result && (

              <div className="mt-14 bg-black border border-white/10 rounded-3xl p-10 text-center">

                <h2 className="text-4xl font-bold">
                  {result}
                </h2>

              </div>

            )}

          </div>

        </div>

      </section>

      {/* Top Ad */}
      <section className="px-6 pb-20">

        <div className="max-w-5xl mx-auto">

          <AdBanner />

        </div>

      </section>

      {/* SEO Content */}
      <ToolSEOContent
        title="SSC Eligibility Checker"
        description="Check SSC exam eligibility instantly based on age and qualification. Useful for SSC CGL, CHSL, MTS, GD and other SSC exams."
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

