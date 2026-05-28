import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Resources from "../../components/Resources";

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="px-6 pt-24 pb-16 text-center">

        <div className="max-w-4xl mx-auto">

          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
            SSC Resources
          </h1>

          <p className="text-white/60 mt-8 text-xl leading-relaxed">
            Curated SSC preparation resources, PDFs, PYQs, notes, and smart study material — all in one place.
          </p>

        </div>

      </section>

      <Resources />

      <Footer />

    </main>
  );
}