import { categories } from "../data/categories";

export default function Categories() {

  return (

    <section className="px-6 pb-28 relative">

      {/* Background Glow */}
      <div className="absolute left-0 top-0 w-[350px] h-[350px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div className="mb-16 text-center md:text-left">

          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">

            Explore <span className="text-orange-400">Categories</span>

          </h2>

          <p className="text-white/50 mt-5 text-lg max-w-2xl">

            Everything you need for SSC preparation in one smart platform.

          </p>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {categories.map((category) => (

            <div
              key={category}
              className="group bg-[#111827]/80 backdrop-blur-xl border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 hover:-translate-y-2 transition-all duration-300 cursor-pointer text-center shadow-[0_0_40px_rgba(249,115,22,0.05)]"
            >

              {/* Icon */}
              <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-orange-500/20 to-amber-400/10 border border-orange-500/10 flex items-center justify-center text-5xl mb-6 group-hover:scale-110 transition duration-300 shadow-lg shadow-orange-500/10">

                {category === "Quant" && "📘"}

                {category === "Reasoning" && "🧠"}

                {category === "English" && "✍️"}

                {category === "GK" && "🌍"}

                {category === "PYQs" && "📄"}

                {category === "Tools" && "🛠️"}

              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">

                {category}

              </h3>

              {/* Description */}
              <p className="text-white/50 mt-4 text-sm leading-relaxed">

                Smart study material and curated SSC preparation resources.

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}