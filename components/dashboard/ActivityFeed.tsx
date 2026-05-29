type Props = {
  studyHours: number;
  streak: number;
  goals: number;
};

export default function ActivityFeed({
  studyHours,
  streak,
  goals,
}: Props) {

  return (

    <div className="mt-10 bg-white/5 border border-white/10 rounded-3xl p-6">

      <h2 className="text-2xl font-bold mb-6">

        Activity Feed ⚡

      </h2>

      <div className="space-y-4">

        <div className="bg-black/40 p-4 rounded-2xl">

          Total Study Hours:
          {" "}
          {studyHours}

        </div>

        <div className="bg-black/40 p-4 rounded-2xl">

          Current Streak:
          {" "}
          {streak} 🔥

        </div>

        <div className="bg-black/40 p-4 rounded-2xl">

          Goals Completed:
          {" "}
          {goals} 🎯

        </div>

      </div>

    </div>

  );

}