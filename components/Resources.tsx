"use client";

import { useState } from "react";

import { resources } from "../data/resources";

import ResourceCard from "./ResourceCard";

import SearchBar from "./SearchBar";

export default function Resources() {

  const [query, setQuery] =
    useState("");

  const filteredResources =
    resources.filter((resource) =>
      resource.title
        .toLowerCase()
        .includes(query.toLowerCase())
    );

  return (
    <section className="px-6 pb-20">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-10">

          <h3 className="text-5xl font-bold">
            Latest Resources
          </h3>

          <p className="text-white/50 mt-4 text-lg">
            Curated SSC preparation material and study resources.
          </p>

        </div>

        {/* Search */}
        <SearchBar
          query={query}
          setQuery={setQuery}
        />

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          {filteredResources.map((resource) => (
            <ResourceCard
              key={resource.title}
              title={resource.title}
              category={resource.category}
              link={resource.link}
            />
          ))}

        </div>

        {/* Empty State */}
        {filteredResources.length === 0 && (
          <div className="text-center mt-20">

            <h3 className="text-3xl font-bold">
              No resources found
            </h3>

            <p className="text-white/50 mt-4">
              Try searching another keyword.
            </p>

          </div>
        )}

      </div>

    </section>
  );
}