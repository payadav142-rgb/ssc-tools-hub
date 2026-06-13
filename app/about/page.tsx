import type { Metadata } from "next";

import Link from "next/link";

import Navbar from "../../components/Navbar";
import ToolContainer from "../../components/ToolContainer";

export const metadata: Metadata = {
  title: "About SSC Tools Hub",
  description:
    "Learn more about SSC Tools Hub, our mission, educational resources, SSC preparation tools and support for aspirants.",
};

export default function AboutPage() {
  return (
    <ToolContainer>

      <Navbar />

      <section className="px-6 py-20">

        <div className="max-w-5xl mx-auto">

          <h1 className="text-5xl md:text-6xl font-bold">
            About SSC Tools Hub
          </h1>

          <p className="text-white/70 mt-8 leading-8 text-lg">
            SSC Tools Hub is an educational platform created
            to help SSC aspirants access useful preparation
            resources, exam information and productivity tools
            in one place.
          </p>

          <p className="text-white/70 mt-6 leading-8 text-lg">
            Our goal is to simplify SSC preparation through
            easy-to-use study resources covering SSC CGL,
            SSC CHSL, SSC MTS, SSC GD and other SSC exams.
          </p>

          <div className="mt-16 bg-white/[0.04] border border-white/10 rounded-[32px] p-8">

            <h2 className="text-3xl font-bold">
              Our Mission
            </h2>

            <p className="text-white/70 mt-5 leading-8">
              We aim to provide free and accessible educational
              content for SSC candidates. Our focus is to help
              students make informed decisions through exam
              guides, syllabus information, salary details,
              PYQs and preparation resources.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">

            <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-6">
              <h3 className="text-2xl font-bold">
                Study Resources
              </h3>

              <p className="text-white/60 mt-4">
                Syllabus, books, preparation guides and exam updates.
              </p>
            </div>

            <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-6">
              <h3 className="text-2xl font-bold">
                PYQs
              </h3>

              <p className="text-white/60 mt-4">
                Practice previous year questions and exam patterns.
              </p>
            </div>

            <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-6">
              <h3 className="text-2xl font-bold">
                SSC Information
              </h3>

              <p className="text-white/60 mt-4">
                Salary, notification, cutoff and recruitment details.
              </p>
            </div>

          </div>

          <div className="mt-16 bg-white/[0.04] border border-white/10 rounded-[32px] p-8">

            <h2 className="text-3xl font-bold">
              Why Trust SSC Tools Hub?
            </h2>

            <ul className="mt-6 space-y-4 text-white/70 leading-8">
              <li>• Educational and informational content.</li>
              <li>• Regularly updated SSC resources.</li>
              <li>• Mobile-friendly experience.</li>
              <li>• Free access to preparation material.</li>
              <li>• Easy navigation and user-focused design.</li>
            </ul>

          </div>

          <div className="mt-16">

            <h2 className="text-3xl font-bold">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6 mt-8">

              <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-6">
                <h3 className="text-xl font-bold">
                  Is SSC Tools Hub free to use?
                </h3>

                <p className="text-white/60 mt-3">
                  Yes, the platform is completely free for SSC aspirants.
                </p>
              </div>

              <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-6">
                <h3 className="text-xl font-bold">
                  Which SSC exams are covered?
                </h3>

                <p className="text-white/60 mt-3">
                  SSC CGL, CHSL, MTS, GD and related SSC examinations.
                </p>
              </div>

            </div>

          </div>

          <div className="mt-16">

            <h2 className="text-3xl font-bold mb-8">
              Useful Links
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

              <Link
                href="/ssc-cgl-syllabus"
                className="bg-white/[0.04] border border-white/10 rounded-3xl p-6"
              >
                SSC CGL Syllabus
              </Link>

              <Link
                href="/ssc-cgl-salary"
                className="bg-white/[0.04] border border-white/10 rounded-3xl p-6"
              >
                SSC CGL Salary
              </Link>

              <Link
                href="/resources"
                className="bg-white/[0.04] border border-white/10 rounded-3xl p-6"
              >
                SSC Resources
              </Link>

            </div>

          </div>

        </div>

      </section>

    </ToolContainer>
  );
}