import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function PYQsPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="px-6 py-20 text-center">

        <h1 className="text-5xl md:text-6xl font-bold">
          SSC PYQs
        </h1>

        <p className="text-white/60 mt-6 max-w-2xl mx-auto text-lg">
          Previous year questions, practice sets, and exam-wise SSC preparation material.
        </p>

      </section>

      <section className="px-6 pb-20">

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h2 className="text-3xl font-bold">
              SSC CGL PYQs
            </h2>

            <p className="text-white/60 mt-4">
              Previous year questions for SSC CGL preparation.
            </p>

            <button className="mt-6 bg-white text-black px-5 py-2 rounded-xl">
              Open
            </button>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h2 className="text-3xl font-bold">
              SSC CHSL PYQs
            </h2>

            <p className="text-white/60 mt-4">
              Practice previous year questions for SSC CHSL.
            </p>

            <button className="mt-6 bg-white text-black px-5 py-2 rounded-xl">
              Open
            </button>
          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}