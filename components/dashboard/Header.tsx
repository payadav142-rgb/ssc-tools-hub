type Props = {
  name?: string | null;
  quote: string;
  level: string;
};

export default function Header({
  name,
  quote,
  level,
}: Props) {

  return (

    <div className="bg-gradient-to-r from-white/10 to-white/5 border border-white/10 rounded-3xl p-8">

      <h1 className="text-4xl md:text-5xl font-bold">

        Welcome {name} 🚀

      </h1>

      <p className="text-white/60 mt-4 text-lg">

        {quote}

      </p>

      <div className="mt-6 inline-block bg-white text-black px-6 py-3 rounded-2xl font-bold">

        {level}

      </div>

    </div>

  );

}