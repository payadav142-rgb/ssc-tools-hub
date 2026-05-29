"use client";

import Navbar from "../../components/Navbar";
import ToolContainer from "../../components/ToolContainer";

export default function TermsPage() {

  return (

    <ToolContainer>

      <Navbar />

      <section className="px-6 py-20">

        <div className="max-w-5xl mx-auto">

          <h1 className="text-5xl font-bold">

            Terms & Conditions

          </h1>

          <p className="text-white/70 mt-8 leading-8 text-lg">

            By using SSC Tools Hub,
            you agree to use the platform responsibly
            and only for educational purposes.

          </p>

          <p className="text-white/70 mt-6 leading-8 text-lg">

            We reserve the right to update tools,
            content and services anytime without notice.

          </p>

          <p className="text-white/70 mt-6 leading-8 text-lg">

            Users should not misuse calculators,
            quizzes or analytics systems available on the platform.

          </p>

        </div>

      </section>

    </ToolContainer>

  );

}