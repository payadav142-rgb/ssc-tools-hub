import Navbar from "../../components/Navbar";
import ToolContainer from "../../components/ToolContainer";

export default function ResourcesPage() {

  return (

    <ToolContainer>

      <Navbar />

      {/* Hero */}
      <section className="px-4 md:px-6 pt-24 pb-16 text-center">

        <div className="max-w-5xl mx-auto">

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">

            SSC Resources

          </h1>

          <p className="text-white/60 mt-8 text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto">

            Curated SSC preparation resources, books, PYQs,
            notes, current affairs sources, and smart study material —
            all in one place.

          </p>

        </div>

      </section>

      {/* Resource Categories */}
      <section className="px-4 md:px-6 pb-24">

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

          {/* Books */}
          <div className="bg-white/[0.04] border border-white/10 rounded-[32px] p-8 hover:border-white/20 transition">

            <h2 className="text-3xl font-bold">
              Best SSC Books
            </h2>

            <ul className="mt-6 space-y-4 text-white/60 leading-relaxed">

              <li>• Lucent GK</li>
              <li>• RS Aggarwal Reasoning</li>
              <li>• SP Bakshi English</li>
              <li>• Pinnacle SSC Maths</li>
              <li>• Fast Track Arithmetic</li>

            </ul>

          </div>

          {/* YouTube */}
          <div className="bg-white/[0.04] border border-white/10 rounded-[32px] p-8 hover:border-white/20 transition">

            <h2 className="text-3xl font-bold">
              YouTube Channels
            </h2>

            <ul className="mt-6 space-y-4 text-white/60 leading-relaxed">

              <li>• Adda247</li>
              <li>• Study IQ</li>
              <li>• KD Campus</li>
              <li>• RBE Revolution</li>
              <li>• WiFi Study</li>

            </ul>

          </div>

          {/* PDFs */}
          <div className="bg-white/[0.04] border border-white/10 rounded-[32px] p-8 hover:border-white/20 transition">

            <h2 className="text-3xl font-bold">
              Free PDFs
            </h2>

            <ul className="mt-6 space-y-4 text-white/60 leading-relaxed">

              <li>• SSC Notes PDFs</li>
              <li>• Previous Year Papers</li>
              <li>• Formula Sheets</li>
              <li>• Vocabulary PDFs</li>
              <li>• Current Affairs PDFs</li>

            </ul>

          </div>

        </div>

      </section>

      {/* Preparation Strategy */}
      <section className="px-4 md:px-6 pb-24">

        <div className="max-w-6xl mx-auto bg-white/[0.04] border border-white/10 rounded-[40px] p-10 md:p-16">

          <div className="text-center">

            <h2 className="text-4xl md:text-6xl font-bold">

              Smart SSC Preparation Strategy

            </h2>

            <p className="text-white/50 mt-6 text-lg max-w-2xl mx-auto">

              Follow a structured preparation approach to improve consistency and score.

            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-10 mt-16">

            <div>

              <h3 className="text-3xl font-bold">
                01
              </h3>

              <p className="text-white/60 mt-5 leading-relaxed">

                Complete basics of Quant, Reasoning,
                English, and General Awareness.

              </p>

            </div>

            <div>

              <h3 className="text-3xl font-bold">
                02
              </h3>

              <p className="text-white/60 mt-5 leading-relaxed">

                Practice mock tests regularly and analyze weak areas.

              </p>

            </div>

            <div>

              <h3 className="text-3xl font-bold">
                03
              </h3>

              <p className="text-white/60 mt-5 leading-relaxed">

                Revise daily using quizzes, notes,
                flashcards, and current affairs.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Important Resources */}
      <section className="px-4 md:px-6 pb-24">

        <div className="max-w-7xl mx-auto">

          <div className="text-center">

            <h2 className="text-4xl md:text-6xl font-bold">

              Important SSC Resources

            </h2>

            <p className="text-white/50 mt-6 text-lg">

              Useful preparation material for SSC aspirants.

            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-8">

              <h3 className="text-2xl font-bold">
                PYQs
              </h3>

              <p className="text-white/60 mt-5 leading-relaxed">

                Practice previous year SSC question papers.

              </p>

            </div>

            <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-8">

              <h3 className="text-2xl font-bold">
                Current Affairs
              </h3>

              <p className="text-white/60 mt-5 leading-relaxed">

                Daily SSC current affairs revision resources.

              </p>

            </div>

            <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-8">

              <h3 className="text-2xl font-bold">
                Mock Tests
              </h3>

              <p className="text-white/60 mt-5 leading-relaxed">

                Improve accuracy and exam speed with mocks.

              </p>

            </div>

            <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-8">

              <h3 className="text-2xl font-bold">
                Notes & Revision
              </h3>

              <p className="text-white/60 mt-5 leading-relaxed">

                Smart revision notes and formula sheets.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* FAQ */}
      <section className="px-4 md:px-6 pb-24">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-bold text-center">

            Frequently Asked Questions

          </h2>

          <div className="space-y-8 mt-16">

            <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-8">

              <h3 className="text-2xl font-bold">

                Which books are best for SSC preparation?

              </h3>

              <p className="text-white/60 mt-5 leading-relaxed">

                Lucent GK, RS Aggarwal, SP Bakshi,
                and Pinnacle books are commonly recommended.

              </p>

            </div>

            <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-8">

              <h3 className="text-2xl font-bold">

                How many hours should I study daily for SSC?

              </h3>

              <p className="text-white/60 mt-5 leading-relaxed">

                Consistent 5–8 hours daily with proper revision
                and mock practice is usually effective.

              </p>

            </div>

            <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-8">

              <h3 className="text-2xl font-bold">

                Are previous year questions important?

              </h3>

              <p className="text-white/60 mt-5 leading-relaxed">

                Yes. PYQs help understand exam pattern,
                difficulty level, and repeated topics.

              </p>

            </div>

          </div>

        </div>

      </section>

    

    </ToolContainer>

  );

}