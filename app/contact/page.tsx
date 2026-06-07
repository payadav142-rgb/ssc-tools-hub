import Navbar from "../../components/Navbar";
import ToolContainer from "../../components/ToolContainer";

export default function ContactPage() {

  return (

    <ToolContainer>

      <Navbar />

      <section className="px-6 py-20">

        <div className="max-w-5xl mx-auto">

          <h1 className="text-5xl font-bold">

            Contact Us

          </h1>

          <p className="text-white/70 mt-8 leading-8 text-lg">

            Have questions, suggestions or feedback?
            Feel free to contact us anytime.

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

              We usually respond within
              24 to 48 hours.

            </p>

          </div>

        </div>

      </section>

    </ToolContainer>

  );

}