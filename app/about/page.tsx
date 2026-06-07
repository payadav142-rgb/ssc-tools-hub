import Navbar from "../../components/Navbar";
import ToolContainer from "../../components/ToolContainer";

export default function AboutPage() {

  return (

    <ToolContainer>

      <Navbar />

      <section className="px-6 py-20">

        <div className="max-w-5xl mx-auto">

          <h1 className="text-5xl font-bold">

            About SSC Tools Hub

          </h1>

          <p className="text-white/70 mt-8 leading-8 text-lg">

            SSC Tools Hub is a modern educational platform
            built for SSC aspirants across India.
            Our mission is to simplify SSC preparation
            using smart tools, calculators, trackers,
            quizzes and study resources.

          </p>

          <p className="text-white/70 mt-6 leading-8 text-lg">

            We provide free preparation tools for
            SSC CGL, CHSL, MTS, GD and other SSC exams
            to help students improve preparation strategy
            and productivity.

          </p>

          <p className="text-white/70 mt-6 leading-8 text-lg">

            Our platform focuses on simplicity,
            performance, mobile responsiveness
            and useful study utilities for serious aspirants.

          </p>

        </div>

      </section>

    </ToolContainer>

  );

}