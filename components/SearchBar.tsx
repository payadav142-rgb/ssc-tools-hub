"use client";

type SearchBarProps = {
  query: string;
  setQuery: (value: string) => void;
};

export default function SearchBar({
  query,
  setQuery,
}: SearchBarProps) {
  return (
    <div className="mt-12 max-w-3xl mx-auto">

      <input
        type="text"
        value={query}
        onChange={(e) =>
          setQuery(e.target.value)
        }
        placeholder="Search SSC resources..."
        className="w-full bg-white/[0.05] border border-white/10 rounded-3xl px-6 py-5 outline-none focus:border-white/20 text-lg placeholder:text-white/30"
      />

    </div>
  );
}