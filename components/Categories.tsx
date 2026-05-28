import { categories } from "../data/categories";

export default function Categories() {
  return (
    <section className="px-6 pb-24">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-14">

          <h2 className="text-5xl font-bold">
            Explore Categories
          </h2>

          <p className="text-white/50 mt-4 text-lg">
            Everything you need for SSC preparation.
          </p>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {categories.map((category) => (
            <div
              key={category}
              className="group bg-gradient-to-br from-white/[0.06] to-white/[0.03] border border-white/10 rounded-3xl p-8 hover:border-white/20 hover:-translate-y-1 transition duration-300 cursor-pointer text-center"
            >

              <div className="text-5xl mb-5">
                {category === "Quant" && "📘"}

                {category === "Reasoning" && "🧠"}

                {category === "English" && "✍️"}

                {category === "GK" && "🌍"}

                {category === "PYQs" && "📄"}

                {category === "Tools" && "🛠️"}
              </div>

              <h3 className="text-2xl font-bold">
                {category}
              </h3>

              <p className="text-white/50 mt-3 text-sm leading-relaxed">
                Explore curated study material and preparation content.
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}