import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FeaturedTools from "../components/FeaturedTools";
import LatestUpdates from "../components/LatestUpdates";

export default function Home() {

  return (

    <main className="min-h-screen bg-[#0B0F19] text-white overflow-hidden">

      {/* Hero Section */}
      <Hero />

      {/* Categories */}
      <Categories />

      {/* Featured Tools */}
      <FeaturedTools />

      {/* Latest Updates */}
      <LatestUpdates />

    </main>

  );

}