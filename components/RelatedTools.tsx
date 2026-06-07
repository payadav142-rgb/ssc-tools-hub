import Link from "next/link";

export default function RelatedTools() {

  const tools = [

    {
      title: "SSC Marks Calculator",
      link: "/tools/marks-calculator",
    },

    {
      title: "SSC Study Tracker",
      link: "/tools/study-tracker",
    },

    {
      title: "SSC Percentage Calculator",
      link: "/tools/percentage-calculator",
    },

  ];

  return (

    <section className="px-6 pb-24">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-12">

          Related SSC Tools

        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {tools.map((tool) => (

            <Link
              key={tool.title}
              href={tool.link}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-white/20 transition"
            >

              <h3 className="text-2xl font-bold">

                {tool.title}

              </h3>

              <p className="text-white/60 mt-4">

                Open Tool →

              </p>

            </Link>

          ))}

        </div>

      </div>

    </section>

  );

}