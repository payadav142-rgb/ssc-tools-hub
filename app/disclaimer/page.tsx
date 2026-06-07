import Navbar from "../../components/Navbar";
import ToolContainer from "../../components/ToolContainer";

export default function DisclaimerPage() {

  return (

    <ToolContainer>

      <Navbar />

      <section className="px-6 py-20">

        <div className="max-w-5xl mx-auto">

          <h1 className="text-5xl font-bold">

            Disclaimer

          </h1>

          <p className="text-white/70 mt-8 leading-8 text-lg">

            SSC Tools Hub is an independent educational platform
            created for informational and preparation purposes only.

          </p>

          <p className="text-white/70 mt-6 leading-8 text-lg">

            We are not affiliated with SSC,
            Government of India,
            or any official government organization.

          </p>

          <p className="text-white/70 mt-6 leading-8 text-lg">

            Although we try to provide accurate information,
            users should verify important exam details
            from official SSC notifications and websites.

          </p>

        </div>

      </section>

    </ToolContainer>

  );

}