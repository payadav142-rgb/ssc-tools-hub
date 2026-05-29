"use client";

import { useState } from "react";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ToolContainer from "../../../components/ToolContainer";

export default function NotesManagerPage() {

  const [note, setNote] =
    useState("");

  const [notes, setNotes] =
    useState<string[]>(
      typeof window !== "undefined"
        ? JSON.parse(
            localStorage.getItem(
              "sscNotes"
            ) || "[]"
          )
        : []
    );

  function addNote() {

    if (!note.trim()) {
      return;
    }

    const updatedNotes = [

      note,

      ...notes,

    ];

    setNotes(
      updatedNotes
    );

    localStorage.setItem(
      "sscNotes",
      JSON.stringify(
        updatedNotes
      )
    );

    setNote("");

  }

  function deleteNote(
    index: number
  ) {

    const updatedNotes =
      notes.filter(
        (_, i) =>
          i !== index
      );

    setNotes(
      updatedNotes
    );

    localStorage.setItem(
      "sscNotes",
      JSON.stringify(
        updatedNotes
      )
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
              Smart Notes Manager
            </h1>

            <p className="text-white/50 text-xl mt-6">
              Save your SSC revision notes instantly.
            </p>

          </div>

          {/* Card */}
          <div className="mt-16 bg-white/[0.04] border border-white/10 rounded-[32px] p-10">

            {/* Textarea */}
            <textarea
              value={note}
              onChange={(e) =>
                setNote(
                  e.target.value
                )
              }
              placeholder="Write your study notes here..."
              className="w-full h-40 bg-black border border-white/10 rounded-3xl p-6 outline-none resize-none focus:border-white/20"
            />

            {/* Button */}
            <button
              onClick={addNote}
              className="w-full mt-6 bg-white text-black py-4 rounded-2xl text-lg font-semibold hover:scale-[1.01] transition"
            >
              Save Note
            </button>

            {/* Notes */}
            <div className="mt-12 space-y-6">

              {notes.length === 0 && (

                <div className="text-center text-white/40 py-10">
                  No notes added yet.
                </div>

              )}

              {notes.map(
                (item, index) => (

                  <div
                    key={index}
                    className="bg-black border border-white/10 rounded-3xl p-6"
                  >

                    <p className="text-lg leading-relaxed whitespace-pre-wrap">
                      {item}
                    </p>

                    <button
                      onClick={() =>
                        deleteNote(index)
                      }
                      className="mt-6 bg-red-500 text-white px-5 py-2 rounded-xl hover:opacity-90 transition"
                    >
                      Delete
                    </button>

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