import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const syllabus = [

  {
    subject:
      "Quantitative Aptitude",
    topics: [
      "Percentage",
      "Profit and Loss",
      "Time and Work",
      "Average",
      "Simplification",
      "Ratio and Proportion",
    ],
  },

  {
    subject:
      "General Intelligence",
    topics: [
      "Analogy",
      "Coding-Decoding",
      "Series",
      "Classification",
      "Blood Relations",
      "Direction Test",
    ],
  },

  {
    subject:
      "English Language",
    topics: [
      "Grammar",
      "Vocabulary",
      "Synonyms",
      "Antonyms",
      "Reading Comprehension",
      "Error Detection",
    ],
  },

  {
    subject:
      "General Awareness",
    topics: [
      "History",
      "Geography",
      "Polity",
      "Economics",
      "Science",
      "Current Affairs",
    ],
  },

];

export default function SyllabusViewerPage() {

  return (

    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="px-6 py-24">

        <div className="max-w-5xl mx-auto">

          {/* Heading */}
          <div className="text-center">

            <h1 className="text-6xl font-extrabold">
              SSC Syllabus Viewer
            </h1>

            <p className="text-white/50 text-xl mt-6">
              Explore complete SSC exam syllabus topics.
            </p>

          </div>

          {/* Syllabus Cards */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">

            {syllabus.map(
              (item) => (

                <div
                  key={item.subject}
                  className="bg-white/[0.04] border border-white/10 rounded-[32px] p-8"
                >

                  <h2 className="text-3xl font-bold">
                    {item.subject}
                  </h2>

                  <div className="mt-8 space-y-4">

                    {item.topics.map(
                      (topic) => (

                        <div
                          key={topic}
                          className="bg-black border border-white/10 rounded-2xl px-5 py-4 text-lg"
                        >
                          {topic}
                        </div>

                      )
                    )}

                  </div>

                </div>

              )
            )}

          </div>

        </div>

      </section>

      <Footer />

    </main>

  );

}