type Props = {
  studyHours: number;
  dailyGoal: number;
  setGoal: (value: number) => void;
};

export default function GoalProgress({
  studyHours,
  dailyGoal,
  setGoal,
}: Props) {

  return (

    <div className="mt-10 bg-white/5 border border-white/10 rounded-3xl p-6">

      <h2 className="text-2xl font-bold mb-5">

        Daily Goal Progress 📈

      </h2>

      <div className="flex flex-wrap items-center gap-4 mb-5">

        <input
          type="number"
          value={dailyGoal}
          onChange={(e) =>
            setGoal(
              Number(
                e.target.value
              )
            )
          }
          className="bg-black border border-white/10 rounded-xl px-4 py-2 w-32"
        />

        <span>

          Hours Goal

        </span>

      </div>

      <div className="w-full h-6 bg-white/10 rounded-full overflow-hidden">

        <div
          className="h-full bg-white transition-all duration-500"
          style={{
            width: `${
              Math.min(
                (
                  studyHours /
                  dailyGoal
                ) * 100,
                100
              )
            }%`
          }}
        />

      </div>

      <p className="mt-3 text-white/60">

        {studyHours} / {dailyGoal} Hours Completed

      </p>

    </div>

  );

}