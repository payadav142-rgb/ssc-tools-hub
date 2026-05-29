type HistoryItem = {
  date: string;
  hours: number;
};

type Props = {
  history: HistoryItem[];
};

export default function HistorySection({
  history,
}: Props) {

  return (

    <div className="mt-10 bg-white/5 border border-white/10 rounded-3xl p-6">

      <h2 className="text-2xl font-bold mb-6">

        Study History 📅

      </h2>

      <div className="space-y-3">

        {history.length === 0 ? (

          <p className="text-white/60">

            No study history yet.

          </p>

        ) : (

          history
            .slice(-7)
            .reverse()
            .map((item, index) => (

              <div
                key={index}
                className="flex items-center justify-between bg-black/40 p-4 rounded-2xl"
              >

                <span>

                  {item.date}

                </span>

                <span className="font-semibold">

                  {item.hours} Hour

                </span>

              </div>

            ))

        )}

      </div>

    </div>

  );

}