"use client";

import { useState } from "react";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ToolContainer from "../../../components/ToolContainer";

const syllabusData = [

  {
    subject: "Quantitative Aptitude",
    topics: [
      "Percentage",
      "Profit and Loss",
      "Time and Work",
      "Algebra",
      "Geometry",
    ],
  },

  {
    subject: "Reasoning",
    topics: [
      "Coding-Decoding",
      "Analogy",
      "Series",
      "Blood Relations",
      "Puzzles",
    ],
  },

  {
    subject: "English",
    topics: [
      "Grammar",
      "Vocabulary",
      "Reading Comprehension",
      "Synonyms",
      "Antonyms",
    ],
  },

  {
    subject: "General Knowledge",
    topics: [
      "History",
      "Geography",
      "Polity",
      "Economics",
      "Current Affairs",
    ],
  },

];

export default function SyllabusViewerPage() {

  const [selectedSubject, setSelectedSubject] =
    useState(
      syllabusData[0]
    );

  return (

    <ToolContainer>

      <Navbar />

      <section className="px-6 py-24">

        <div className="max-w-5xl mx-auto">

          {/* Heading */}
          <div className="text-center">

            <h1 className="text-6xl font-extrabold">
              SSC Syllabus Viewer
            </h1>

            <p className="text-white/50 text-xl mt-6">
              Explore SSC syllabus subjects and important topics.
            </p>

          </div>

          {/* Subjects */}
          <div className="flex flex-wrap justify-center gap-4 mt-14">

            {syllabusData.map(
              (item) => (

                <button
                  key={item.subject}
                  onClick={() =>
                    setSelectedSubject(
                      item
                    )
                  }
                  className={`px-6 py-3 rounded-2xl border transition ${
                    selectedSubject.subject ===
                    item.subject
                      ? "bg-white text-black border-white"
                      : "bg-black text-white border-white/10"
                  }`}
                >

                  {item.subject}

                </button>

              )
            )}

          </div>

          {/* Topics Card */}
          <div className="mt-16 bg-white/[0.04] border border-white/10 rounded-[32px] p-10">

            <h2 className="text-4xl font-bold">

              {selectedSubject.subject}

            </h2>

            <div className="mt-10 grid md:grid-cols-2 gap-6">

              {selectedSubject.topics.map(
                (topic) => (

                  <div
                    key={topic}
                    className="bg-black border border-white/10 rounded-2xl px-6 py-5 text-lg"
                  >

                    {topic}

                  </div>

                )
              )}

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </ToolContainer>

  );

}