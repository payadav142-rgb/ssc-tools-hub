import Link from "next/link";

import Navbar from "../../components/Navbar";

export default function Page() {

  const pyqs = [

    {
      title:
        "SSC CGL 2025 Tier 1 PYQ",

      desc:
        "Memory based questions with solutions and analysis.",

      link:
        "/pyqs/ssc-cgl-2025-tier-1",
    },

    {
      title:
        "SSC CGL Quant PYQs",

      desc:
        "Previous year quantitative aptitude questions.",

      link:
        "/pyqs/ssc-cgl-quant-pyqs",
    },

    {
      title:
        "SSC CGL Reasoning PYQs",

      desc:
        "Important reasoning PYQs for SSC exams.",

      link:
        "/pyqs/ssc-cgl-reasoning-pyqs",
    },

    {
      title:
        "SSC CGL English PYQs",

      desc:
        "Previous year English questions with explanations.",

      link:
        "/pyqs/ssc-cgl-english-pyqs",
    },

  ];

  return (

    <main className="min-h-screen bg-[#0B0F19] text-white">

      <Navbar />

      {/* Hero */}
      <section className="relative px-6 pt-28 pb-20 overflow-hidden">

        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-500/10 blur-[140px] rounded-full"></div>

        <div className="relative max-w-7xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-5 py-2 text-orange-200 text-sm mb-8">

            🔥 SSC Previous Year Questions

          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">

            SSC CGL
            <span className="text-orange-400">
              {" "}PYQ Hub
            </span>

          </h1>

          {/* Description */}
          <p className="text-white/60 text-xl leading-relaxed max-w-3xl mx-auto mt-8">

            Practice SSC previous year questions,
            memory based papers, shift wise analysis
            and subject wise PYQs.

          </p>

        </div>

      </section>

      {/* Cards */}
      <section className="px-6 pb-28">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-7">

          {pyqs.map((item) => (

            <Link
              key={item.title}
              href={item.link}
              className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 hover:-translate-y-2 transition-all duration-300"
            >

              <div className="text-5xl mb-6">
                📄
              </div>

              <h2 className="text-3xl font-bold group-hover:text-orange-300 transition">

                {item.title}

              </h2>

              <p className="text-white/55 mt-5 leading-relaxed">

                {item.desc}

              </p>

              <div className="mt-8 text-orange-300 font-semibold">

                Open PYQs →

              </div>

            </Link>

          ))}

        </div>

      </section>


    </main>

  );

}