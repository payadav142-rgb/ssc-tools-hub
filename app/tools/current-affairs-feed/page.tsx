"use client";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ToolContainer from "../../../components/ToolContainer";

const news = [

  {
    title:
      "India launches new AI initiative",
    category:
      "Technology",
    summary:
      "Government announced a major AI development mission for innovation and research.",
  },

  {
    title:
      "ISRO prepares next moon mission",
    category:
      "Science",
    summary:
      "ISRO revealed plans for advanced lunar exploration missions.",
  },

  {
    title:
      "New education reforms introduced",
    category:
      "Education",
    summary:
      "Several policy updates were announced for competitive exam students.",
  },

  {
    title:
      "Indian economy growth rises",
    category:
      "Economy",
    summary:
      "Latest reports show strong economic growth indicators for India.",
  },

];

export default function CurrentAffairsFeedPage() {

  return (

    <ToolContainer>

      <Navbar />

      <section className="px-6 py-24">

        <div className="max-w-5xl mx-auto">

          {/* Heading */}
          <div className="text-center">

            <h1 className="text-6xl font-extrabold">
              Daily Current Affairs
            </h1>

            <p className="text-white/50 text-xl mt-6">
              Stay updated with SSC relevant current affairs.
            </p>

          </div>

          {/* News Feed */}
          <div className="mt-16 space-y-8">

            {news.map(
              (item, index) => (

                <div
                  key={index}
                  className="bg-white/[0.04] border border-white/10 rounded-[32px] p-8 hover:border-white/20 transition"
                >

                  <div className="flex items-center justify-between flex-wrap gap-4">

                    <h2 className="text-3xl font-bold">
                      {item.title}
                    </h2>

                    <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold">

                      {item.category}

                    </span>

                  </div>

                  <p className="text-white/60 text-lg mt-6 leading-relaxed">

                    {item.summary}

                  </p>

                </div>

              )
            )}

          </div>

        </div>

      </section>

      <Footer />

    </ToolContainer>

  );

}