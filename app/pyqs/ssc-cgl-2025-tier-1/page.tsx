import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function Page() {

  const questions = [

    {
      question:
        "What is the square root of 144?",

      options:
        ["10", "11", "12", "13"],

      answer:
        "12",
    },

    {
      question:
        "Who is known as the Father of the Indian Constitution?",

      options:
        [
          "Mahatma Gandhi",
          "B. R. Ambedkar",
          "Jawaharlal Nehru",
          "Sardar Patel",
        ],

      answer:
        "B. R. Ambedkar",
    },

    {
      question:
        "Simplify: 25 × 4",

      options:
        ["50", "75", "100", "125"],

      answer:
        "100",
    },

  ];

  return (

    <main className="min-h-screen bg-[#0B0F19] text-white">

      <Navbar />

      {/* Hero */}
      <section className="relative px-6 pt-28 pb-20 overflow-hidden">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-500/10 blur-[140px] rounded-full"></div>

        <div className="relative max-w-5xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-5 py-2 text-orange-200 text-sm mb-8">

            🔥 SSC CGL Tier 1 PYQs

          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">

            SSC CGL 2025
            <span className="text-orange-400">
              {" "}Tier 1 PYQ
            </span>

          </h1>

          <p className="text-white/60 text-xl leading-relaxed max-w-3xl mx-auto mt-8">

            Practice memory based SSC CGL previous year questions
            with answers and detailed analysis.

          </p>

        </div>

      </section>

      {/* Questions */}
      <section className="px-6 pb-28">

        <div className="max-w-5xl mx-auto space-y-8">

          {questions.map((q, index) => (

            <div
              key={index}
              className="bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8"
            >

              <h2 className="text-2xl font-bold leading-relaxed">

                Q{index + 1}.
                {" "}
                {q.question}

              </h2>

              <div className="grid md:grid-cols-2 gap-4 mt-8">

                {q.options.map((option) => (

                  <div
                    key={option}
                    className={`border rounded-2xl p-4 ${
                      option === q.answer
                        ? "bg-green-500/20 border-green-500/30 text-green-300"
                        : "bg-white/5 border-white/10"
                    }`}
                  >

                    {option}

                  </div>

                ))}

              </div>

              <div className="mt-6 text-orange-300 font-semibold">

                Correct Answer:
                {" "}
                {q.answer}

              </div>

            </div>

          ))}

        </div>

      </section>

      <Footer />

    </main>

  );

}