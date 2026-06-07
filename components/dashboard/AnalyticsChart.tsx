type Props = {
  averageHours: string | number;
  bestDay:
    | {
        date: string;
        hours: number;
      }
    | null;
};

export default function AnalyticsChart({
  averageHours,
  bestDay,
}: Props) {

  return (

    <div className="grid md:grid-cols-2 gap-6 mt-10">

      <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

        <h2 className="text-2xl font-bold mb-4">

          Average Study Hours 📊

        </h2>

        <p className="text-5xl font-bold">

          {averageHours}

        </p>

      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

        <h2 className="text-2xl font-bold mb-4">

          Best Study Day 🏆

        </h2>

        {bestDay ? (

          <div>

            <p className="text-xl">

              {bestDay.date}

            </p>

            <p className="text-4xl font-bold mt-2">

              {bestDay.hours} Hours

            </p>

          </div>

        ) : (

          <p className="text-white/60">

            No data yet

          </p>

        )}

      </div>

    </div>

  );

}