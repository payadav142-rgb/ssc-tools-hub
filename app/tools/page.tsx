"use client";

import { useState } from "react";

import Navbar from "../../components/Navbar";
import ToolContainer from "../../components/ToolContainer";

import { tools } from "../../data/tools";

export default function ToolsPage() {
  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const filteredTools = tools.filter((tool) => {
    const matchesSearch = tool.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All"
        ? true
        : tool.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <ToolContainer>

      <Navbar />

      <section className="px-4 md:px-6 py-20">

        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto">

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">

            Smart <span className="text-orange-400">SSC Tools</span>

          </h1>

          <p className="text-white/50 mt-6 text-lg leading-relaxed">

            Free SSC calculators, productivity systems,
            quizzes, rank predictors and preparation tools
            designed for serious SSC aspirants.

          </p>

        </div>

        {/* Stats */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 mt-16">

          {[
            {
              title: "20+",
              desc: "Free Tools",
            },
            {
              title: "100%",
              desc: "Free Access",
            },
            {
              title: "Daily",
              desc: "Updated",
            },
            {
              title: "SSC",
              desc: "Focused",
            },
          ].map((item, index) => (

            <div
              key={index}
              className="bg-[#111827]/80 border border-orange-500/10 rounded-[28px] p-6 text-center"
            >

              <h2 className="text-4xl font-bold text-orange-400">

                {item.title}

              </h2>

              <p className="text-white/60 mt-2">

                {item.desc}

              </p>

            </div>

          ))}

        </div>

        {/* Search */}
        <div className="max-w-3xl mx-auto mt-14">

          <input
            type="text"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search SSC tools..."
            className="w-full bg-[#111827]/80 border border-orange-500/10 rounded-3xl px-6 py-5 outline-none text-lg focus:border-orange-500/40 transition"
          />

        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 mt-10 justify-center">

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
                setSelectedCategory(category)
              }
              className={`px-5 py-3 rounded-2xl border transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white border-orange-500"
                  : "bg-[#111827]/80 text-white border-orange-500/10 hover:border-orange-500/40"
              }`}
            >

              {category}

            </button>

          ))}

        </div>

        {/* Tools Grid */}
        <div className="max-w-7xl mx-auto mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredTools.map((tool) => (

            <a
              key={tool.title}
              href={tool.link}
              className="group bg-[#111827]/80 backdrop-blur-xl border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 hover:-translate-y-2 transition-all duration-300 block shadow-[0_0_50px_rgba(249,115,22,0.05)]"
            >

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/20 to-amber-400/10 flex items-center justify-center text-3xl mb-6">

                🛠️

              </div>

              <h2 className="text-3xl font-bold leading-snug group-hover:text-orange-300 transition">

                {tool.title}

              </h2>

              <p className="text-white/60 mt-5 leading-relaxed">

                {tool.description}

              </p>

              <div className="mt-8 flex items-center justify-between">

                <p className="text-sm text-white/40">

                  {tool.category}

                </p>

                <span className="text-orange-400 text-xl">

                  →

                </span>

              </div>

            </a>

          ))}

        </div>

        {/* Empty State */}
        {filteredTools.length === 0 && (

          <div className="text-center mt-20">

            <h2 className="text-4xl font-bold">

              No Tools Found

            </h2>

            <p className="text-white/50 mt-4">

              Try another keyword or category.

            </p>

          </div>

        )}

      </section>

      

    </ToolContainer>
  );
}