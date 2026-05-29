import Navbar from "../../components/Navbar";
import ToolContainer from "../../components/ToolContainer";

export default function SSCCGLCutoffPage() {

  return (

    <ToolContainer>

      <Navbar />

      <section className="px-6 py-20">

        <div className="max-w-5xl mx-auto">

          <h1 className="text-5xl font-bold leading-tight">

            SSC CGL Cutoff 2026 — Expected & Previous Year Cutoff

          </h1>

          <p className="text-white/60 mt-6 text-lg leading-8">

            SSC CGL cutoff marks determine candidate selection
            for Tier 1 and Tier 2 exams. The cutoff depends on
            exam difficulty, vacancies and number of candidates.

          </p>

          <div className="mt-10 bg-white/5 border border-white/10 rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-6">

              Expected SSC CGL Cutoff 2026

            </h2>

            <ul className="space-y-4 text-white/70 text-lg">

              <li>
                • General: 145 - 160
              </li>

              <li>
                • OBC: 140 - 155
              </li>

              <li>
                • SC: 125 - 140
              </li>

              <li>
                • ST: 115 - 130
              </li>

              <li>
                • EWS: 138 - 150
              </li>

            </ul>

          </div>

          <div className="mt-10 bg-white/5 border border-white/10 rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-6">

              Factors Affecting SSC CGL Cutoff

            </h2>

            <p className="text-white/70 text-lg leading-8">

              SSC CGL cutoff changes every year depending on
              paper difficulty level, number of vacancies,
              competition and overall student performance.

            </p>

          </div>

        </div>

      </section>

    </ToolContainer>

  );

}