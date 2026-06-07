"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ToolContainer from "../../components/ToolContainer";

export default function SSCCGLSalaryPage() {

  return (

    <ToolContainer>

      <Navbar />

      <section className="px-6 py-20">

        <div className="max-w-5xl mx-auto">

          <h1 className="text-5xl font-bold leading-tight">

            SSC CGL Salary 2026 — Complete Salary Structure

          </h1>

          <p className="text-white/60 mt-6 text-lg leading-8">

            SSC CGL offers one of the best government salaries in India.
            Selected candidates receive attractive in-hand salary,
            HRA, DA, TA and multiple government benefits.

          </p>

          <div className="mt-10 bg-white/5 border border-white/10 rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-6">

              SSC CGL Salary Overview

            </h2>

            <ul className="space-y-4 text-white/70 text-lg">

              <li>
                • Pay Level: Level 4 to Level 8
              </li>

              <li>
                • In-Hand Salary: ₹35,000 to ₹75,000
              </li>

              <li>
                • House Rent Allowance (HRA)
              </li>

              <li>
                • Dearness Allowance (DA)
              </li>

              <li>
                • Transport Allowance (TA)
              </li>

              <li>
                • Government Pension Benefits
              </li>

            </ul>

          </div>

          <div className="mt-10 bg-white/5 border border-white/10 rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-6">

              Why SSC CGL Jobs Are Popular

            </h2>

            <p className="text-white/70 text-lg leading-8">

              SSC CGL jobs provide financial stability,
              career growth, job security and multiple promotions.
              Many aspirants choose SSC CGL because of
              excellent work-life balance and government benefits.

            </p>

          </div>

        </div>

      </section>

      <Footer />

    </ToolContainer>

  );

}