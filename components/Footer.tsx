import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>

            <h2 className="text-3xl font-bold">
              SSC Tools Hub
            </h2>

            <p className="text-white/50 mt-5 leading-relaxed">
              Smart SSC preparation platform with tools, PYQs, notes, planners, and curated study resources.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4 text-white/50">

              <Link
                href="/"
                className="hover:text-white transition"
              >
                Home
              </Link>

              <Link
                href="/tools"
                className="hover:text-white transition"
              >
                Tools
              </Link>

              <Link
                href="/resources"
                className="hover:text-white transition"
              >
                Resources
              </Link>

              <Link
                href="/pyqs"
                className="hover:text-white transition"
              >
                PYQs
              </Link>

            </div>

          </div>

          {/* Categories */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Categories
            </h3>

            <div className="flex flex-col gap-4 text-white/50">

              <p>Quant</p>

              <p>Reasoning</p>

              <p>English</p>

              <p>General Knowledge</p>

            </div>

          </div>

          {/* Newsletter */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Stay Updated
            </h3>

            <p className="text-white/50 leading-relaxed">
              Get latest SSC resources and preparation updates.
            </p>

            <div className="mt-6 flex flex-col gap-4">

              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/5 border border-white/10 rounded-2xl px-5 py-3 outline-none focus:border-white/20"
              />

              <button className="bg-white text-black rounded-2xl px-5 py-3 font-medium hover:scale-[1.02] transition">
                Subscribe
              </button>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-white/40">
            © 2026 SSC Tools Hub. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-white/40">

            <a href="#">
              Privacy
            </a>

            <a href="#">
              Terms
            </a>

            <a href="#">
              Contact
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}