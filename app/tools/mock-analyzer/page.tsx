import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function MockAnalyzerPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="px-6 py-24 text-center">

        <h1 className="text-6xl font-extrabold">
          Mock Test Analyzer
        </h1>

        <p className="text-white/50 text-xl mt-6">
          Coming Soon 🚀
        </p>

      </section>

      <Footer />

    </main>
  );
}