import Link from "next/link";

export default function NotFound() {

  return (

    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="text-center max-w-2xl">

        <h1 className="text-7xl font-extrabold">

          404

        </h1>

        <h2 className="text-4xl font-bold mt-6">

          Page Not Found

        </h2>

        <p className="text-white/60 mt-6 text-lg leading-8">

          The page you are looking for does not exist
          or may have been moved.

        </p>

        <Link
          href="/"
          className="inline-block mt-10 bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
        >

          Back To Home

        </Link>

      </div>

    </main>

  );

}