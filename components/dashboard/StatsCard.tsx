type Props = {
  title: string;
  value: string | number;
  buttonText: string;
  onClick: () => void;
  onReset: () => void;
};

export default function StatsCard({
  title,
  value,
  buttonText,
  onClick,
  onReset,
}: Props) {

  return (

    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:scale-105 transition duration-300">

      <h2 className="text-xl font-semibold mb-3">

        {title}

      </h2>

      <p className="text-5xl font-bold">

        {value}

      </p>

      <button
        onClick={onClick}
        className="mt-5 bg-white text-black px-4 py-2 rounded-xl font-semibold w-full"
      >

        {buttonText}

      </button>

      <button
        onClick={onReset}
        className="mt-3 bg-red-500 text-white px-4 py-2 rounded-xl font-semibold w-full"
      >

        Reset

      </button>

    </div>

  );

}