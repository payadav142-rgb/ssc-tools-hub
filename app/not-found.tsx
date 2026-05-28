import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-6">

      <h1 className="text-8xl font-bold">
        404
      </h1>

      <p className="text-white/60 mt-6 text-xl">
        Page not found.
      </p>

      <Link
        href="/"
        className="mt-10 bg-white text-black px-6 py-3 rounded-2xl font-medium"
      >
        Go Home
      </Link>

    </main>
  );
}