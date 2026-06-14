import type { Metadata } from "next";

import Navbar from "../../components/Navbar";
import ToolContainer from "../../components/ToolContainer";

export const metadata: Metadata = {
  title: "Privacy Policy - SSC Tools Hub",
  description:
    "Read the Privacy Policy of SSC Tools Hub regarding data collection, cookies, analytics and user privacy.",
};

export default function PrivacyPolicyPage() {
  return (
    <ToolContainer>

      <Navbar />

      <section className="px-6 py-20">

        <div className="max-w-5xl mx-auto">

          <h1 className="text-5xl md:text-6xl font-bold">
            Privacy Policy
          </h1>

          <p className="text-white/70 mt-8 leading-8 text-lg">
            SSC Tools Hub respects your privacy and is committed
            to protecting your personal information. This page
            explains how information may be collected and used
            while you access our website.
          </p>

          <div className="space-y-8 mt-16">

            <section className="bg-white/5 border border-white/10 rounded-3xl p-8">

              <h2 className="text-3xl font-bold">
                Information We Collect
              </h2>

              <p className="text-white/70 mt-5 leading-8">
                We may collect limited non-personal information
                such as browser type, device information,
                pages visited and website usage statistics
                for analytics purposes.
              </p>

            </section>

            <section className="bg-white/5 border border-white/10 rounded-3xl p-8">

              <h2 className="text-3xl font-bold">
                Cookies
              </h2>

              <p className="text-white/70 mt-5 leading-8">
                Our website may use cookies to improve user
                experience, remember preferences and analyze
                website performance.
              </p>

            </section>

            <section className="bg-white/5 border border-white/10 rounded-3xl p-8">

              <h2 className="text-3xl font-bold">
                Analytics
              </h2>

              <p className="text-white/70 mt-5 leading-8">
                We may use analytics tools to understand how
                visitors interact with the website and improve
                educational content and user experience.
              </p>

            </section>

            <section className="bg-white/5 border border-white/10 rounded-3xl p-8">

              <h2 className="text-3xl font-bold">
                Third Party Services
              </h2>

              <p className="text-white/70 mt-5 leading-8">
                Some third-party services may use cookies or
                collect information according to their own
                privacy policies.
              </p>

            </section>

            <section className="bg-white/5 border border-white/10 rounded-3xl p-8">

              <h2 className="text-3xl font-bold">
                Data Protection
              </h2>

              <p className="text-white/70 mt-5 leading-8">
                We take reasonable measures to protect
                information and maintain website security.
              </p>

            </section>

            <section className="bg-white/5 border border-white/10 rounded-3xl p-8">

              <h2 className="text-3xl font-bold">
                Consent
              </h2>

              <p className="text-white/70 mt-5 leading-8">
                By using SSC Tools Hub, you consent to this
                Privacy Policy and agree to its terms.
              </p>

            </section>

          </div>

        </div>

      </section>

    </ToolContainer>
  );
}