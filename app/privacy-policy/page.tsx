import Navbar from "../../components/Navbar";
import ToolContainer from "../../components/ToolContainer";

export default function PrivacyPolicyPage() {

  return (

    <ToolContainer>

      <Navbar />

      <section className="px-6 py-20">

        <div className="max-w-5xl mx-auto">

          <h1 className="text-5xl font-bold">

            Privacy Policy

          </h1>

          <p className="text-white/70 mt-8 leading-8 text-lg">

            SSC Tools Hub values user privacy
            and is committed to protecting
            your personal information.

          </p>

          <p className="text-white/70 mt-6 leading-8 text-lg">

            We may collect limited analytics data
            to improve website performance,
            user experience and tool functionality.

          </p>

          <p className="text-white/70 mt-6 leading-8 text-lg">

            We do not sell personal information
            to third parties.

          </p>

          <p className="text-white/70 mt-6 leading-8 text-lg">

            By using this platform,
            you agree to this privacy policy.

          </p>

        </div>

      </section>

    </ToolContainer>

  );

}