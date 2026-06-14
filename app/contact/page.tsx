import type { Metadata } from "next";

import Link from "next/link";

import Navbar from "../../components/Navbar";
import ToolContainer from "../../components/ToolContainer";

export const metadata: Metadata = {
  title: "Contact Us - SSC Tools Hub",
  description:
    "Contact SSC Tools Hub for support, feedback, suggestions and educational resource related queries.",
};

export default function ContactPage() {
  return (
    <ToolContainer>

      <Navbar />

      <section className="px-6 py-20">

        <div className="max-w-5xl mx-auto">

          <h1 className="text-5xl md:text-6xl font-bold">
            Contact Us
          </h1>

          <p className="text-white/70 mt-8 text-lg leading-8">
            If you have questions, suggestions,
            corrections or feedback related to SSC Tools Hub,
            feel free to contact us.
          </p>

          <div className="mt-12 bg-white/5 border border-white/10 rounded-3xl p-8">

            <h2 className="text-3xl font-bold">
              Email Support
            </h2>

            <p className="text-white/70 mt-6 text-lg">
              support@ssctoolshub.com
            </p>

          </div>

          <div className="mt-8 bg-white/5 border border-white/10 rounded-3xl p-8">

            <h2 className="text-3xl font-bold">
              Response Time
            </h2>

            <p className="text-white/70 mt-6 text-lg leading-8">
              We generally respond within
              24 to 48 business hours.
            </p>

          </div>

          <div className="mt-8 bg-white/5 border border-white/10 rounded-3xl p-8">

            <h2 className="text-3xl font-bold">
              What Can You Contact Us For?
            </h2>

            <ul className="mt-6 space-y-3 text-white/70">
              <li>• Website feedback</li>
              <li>• Content corrections</li>
              <li>• Technical issues</li>
              <li>• Resource suggestions</li>
              <li>• Partnership enquiries</li>
            </ul>

          </div>

          <div className="mt-12">

            <h2 className="text-3xl font-bold">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6 mt-8">

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                <h3 className="text-xl font-bold">
                  Is SSC Tools Hub free?
                </h3>

                <p className="text-white/60 mt-3">
                  Yes, all educational resources on the platform are free.
                </p>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                <h3 className="text-xl font-bold">
                  Can I report incorrect information?
                </h3>

                <p className="text-white/60 mt-3">
                  Yes, you can contact us through email for corrections.
                </p>

              </div>

            </div>

          </div>

          <div className="mt-12">

            <h2 className="text-3xl font-bold mb-6">
              Useful Links
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

              <Link
                href="/about"
                className="bg-white/5 border border-white/10 rounded-3xl p-6"
              >
                About Us
              </Link>

              <Link
                href="/resources"
                className="bg-white/5 border border-white/10 rounded-3xl p-6"
              >
                Resources
              </Link>

              <Link
                href="/ssc-cgl-notification"
                className="bg-white/5 border border-white/10 rounded-3xl p-6"
              >
                SSC CGL Notification
              </Link>

            </div>

          </div>

        </div>

      </section>

    </ToolContainer>
  );
}