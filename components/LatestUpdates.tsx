export default function LatestUpdates() {

  const updates = [

    "SSC CGL 2026 notification expected soon.",

    "New SSC CGL salary structure updated.",

    "SSC CHSL preparation guide added.",

    "Latest SSC cutoff trends available now.",

  ];

  return (

    <section className="px-6 pb-24">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold mb-10">

          Latest Updates 🚀

        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {updates.map(
            (update, index) => (

              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-6"
              >

                <p className="text-lg text-white/80">

                  {update}

                </p>

              </div>

            )
          )}

        </div>

      </div>

    </section>

  );

}