import Link from "next/link";

export default function Footer() {

  return (

    <footer className="relative border-t border-orange-500/10 mt-24 overflow-hidden">

      {/* Glow */}
      <div className="absolute left-0 bottom-0 w-[350px] h-[350px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>

            <h2 className="text-4xl font-extrabold tracking-tight">

              <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">

                SSC

              </span>{" "}

              <span className="text-white">

                Tools Hub

              </span>

            </h2>

            <p className="text-white/50 mt-5 leading-8 text-[15px]">

              Smart SSC tools, PYQs,
              planners, notes and preparation resources
              for serious aspirants.

            </p>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 mt-6 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 text-sm text-orange-200">

              🚀 India's Smart SSC Platform

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-bold text-white mb-6">

              Quick Links

            </h3>

            <div className="flex flex-col gap-4 text-white/60">

              <Link
                href="/"
                className="hover:text-orange-300 transition"
              >
                Home
              </Link>

              <Link
                href="/tools"
                className="hover:text-orange-300 transition"
              >
                Tools
              </Link>

              <Link
                href="/resources"
                className="hover:text-orange-300 transition"
              >
                Resources
              </Link>

              <Link
                href="/pyqs"
                className="hover:text-orange-300 transition"
              >
                PYQs
              </Link>

            </div>

          </div>

          {/* Legal */}
          <div>

            <h3 className="text-xl font-bold text-white mb-6">

              Legal

            </h3>

            <div className="flex flex-col gap-4 text-white/60">

              <Link
                href="/about"
                className="hover:text-orange-300 transition"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="hover:text-orange-300 transition"
              >
                Contact
              </Link>

              <Link
                href="/privacy-policy"
                className="hover:text-orange-300 transition"
              >
                Privacy Policy
              </Link>

              <Link
                href="/disclaimer"
                className="hover:text-orange-300 transition"
              >
                Disclaimer
              </Link>

              <Link
                href="/terms-and-conditions"
                className="hover:text-orange-300 transition"
              >
                Terms & Conditions
              </Link>

            </div>

          </div>

          {/* Popular Pages */}
          <div>

            <h3 className="text-xl font-bold text-white mb-6">

              Popular Pages

            </h3>

            <div className="flex flex-col gap-4 text-white/60">

              <Link
                href="/ssc-cgl-salary"
                className="hover:text-orange-300 transition"
              >
                SSC CGL Salary
              </Link>

              <Link
                href="/ssc-cgl-cutoff"
                className="hover:text-orange-300 transition"
              >
                SSC CGL Cutoff
              </Link>

              <Link
                href="/ssc-cgl-books"
                className="hover:text-orange-300 transition"
              >
                SSC CGL Books
              </Link>

              <Link
                href="/ssc-cgl-notification"
                className="hover:text-orange-300 transition"
              >
                SSC CGL Notification
              </Link>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-orange-500/10 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-white/40 text-sm">

            © 2026 SSC Tools Hub. All rights reserved.

          </p>

          <div className="flex items-center gap-5 text-sm text-white/40">

            <Link
              href="/privacy-policy"
              className="hover:text-orange-300 transition"
            >
              Privacy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="hover:text-orange-300 transition"
            >
              Terms
            </Link>

            <Link
              href="/contact"
              className="hover:text-orange-300 transition"
            >
              Contact
            </Link>

          </div>

        </div>

      </div>

    </footer>

  );

}