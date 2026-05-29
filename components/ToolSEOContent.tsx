type Props = {

  title: string;

  description: string;

};

export default function ToolSEOContent({
  title,
  description,
}: Props) {

  return (

    <section className="px-6 py-20">

      <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-10">

        <h2 className="text-4xl font-bold">

          {title}

        </h2>

        <p className="text-white/70 leading-8 text-lg mt-8">

          {description}

        </p>

        <p className="text-white/70 leading-8 text-lg mt-6">

          SSC Tools Hub provides smart preparation tools
          for SSC aspirants including calculators,
          predictors, planners, quizzes and analytics.

        </p>

      </div>

    </section>

  );

}