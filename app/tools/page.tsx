"use client";

import { useState } from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ToolContainer from "../../components/ToolContainer";

import { tools } from "../../data/tools";

export default function ToolsPage() {

  const [search, setSearch] =
    useState("");

  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState("All");

  const filteredTools =
    tools.filter((tool) => {

      const matchesSearch =
        tool.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesCategory =
        selectedCategory === "All"
          ? true
          : tool.category ===
            selectedCategory;

      return (
        matchesSearch &&
        matchesCategory
      );

    });

  return (

    <ToolContainer>

      <Navbar />

      <section className="px-4 md:px-6 py-20">

        {/* Heading */}
        <div className="text-center">

          <h1 className="text-4xl md:text-6xl font-bold">
            SSC Tools
          </h1>

          <p className="text-white/60 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Free smart tools for SSC preparation, performance tracking,
            planning, quizzes, analytics, and productivity.
          </p>

        </div>

        {/* Search */}
        <div className="max-w-3xl mx-auto mt-12">

          <input
            type="text"
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            placeholder="Search tools..."
            className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-6 py-5 outline-none text-lg"
          />

        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 mt-8 justify-center">

          {[
            "All",
            "Calculators",
            "Productivity",
            "Analytics",
            "Quizzes",
            "Revision",
            "Utilities",
          ].map((category) => (

            <button
              key={category}
              onClick={() =>
                setSelectedCategory(
                  category
                )
              }
              className={`px-5 py-3 rounded-2xl border transition ${
                selectedCategory ===
                category
                  ? "bg-white text-black border-white"
                  : "bg-white/[0.04] text-white border-white/10"
              }`}
            >

              {category}

            </button>

          ))}

        </div>

        {/* Tools Grid */}
        <div className="max-w-7xl mx-auto mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredTools.map(
            (tool) => (

              <a
                key={tool.title}
                href={tool.link}
                className="bg-white/[0.04] border border-white/10 rounded-[32px] p-8 hover:border-white/20 hover:scale-[1.02] transition duration-300 block"
              >

                <h2 className="text-3xl font-bold leading-snug">
                  {tool.title}
                </h2>

                <p className="text-white/60 mt-5 leading-relaxed">
                  {tool.description}
                </p>

                <div className="mt-6 flex items-center justify-between">

                  <p className="text-sm text-white/40">
                    {tool.category}
                  </p>

                  <span className="text-white/40 text-xl">
                    →
                  </span>

                </div>

              </a>

            )
          )}

        </div>

        {/* Empty State */}
        {filteredTools.length === 0 && (

          <div className="text-center mt-20">

            <h2 className="text-3xl font-bold">
              No Tools Found
            </h2>

            <p className="text-white/50 mt-4">
              Try searching with another keyword.
            </p>

          </div>

        )}

      </section>

      <Footer />

    </ToolContainer>

  );

}