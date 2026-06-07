type Props = {
  badges: string[];
};

export default function BadgeSection({
  badges,
}: Props) {

  return (

    <div className="mt-10 bg-white/5 border border-white/10 rounded-3xl p-6">

      <h2 className="text-2xl font-bold mb-6">

        Achievement Badges 🏅

      </h2>

      <div className="flex flex-wrap gap-4">

        {badges.length > 0 ? (

          badges.map(
            (badge, index) => (

              <div
                key={index}
                className="bg-white text-black px-5 py-3 rounded-2xl font-semibold"
              >

                {badge}

              </div>

            )
          )

        ) : (

          <p className="text-white/60">

            No badges unlocked yet.

          </p>

        )}

      </div>

    </div>

  );

}