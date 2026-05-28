import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FeaturedTools from "../../components/FeaturedTools";

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="px-6 py-20 text-center">

        <h1 className="text-5xl md:text-6xl font-bold">
          SSC Tools
        </h1>

        <p className="text-white/60 mt-6 max-w-2xl mx-auto text-lg">
          Free smart tools for SSC preparation, performance tracking, planning, and analysis.
        </p>

      </section>

      <FeaturedTools />

      <Footer />

    </main>
  );
}