import Link from "next/link";

export default function Footer() {

  return (

    <footer className="border-t border-white/10 mt-24">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>

            <h2 className="text-3xl font-bold text-white">

              SSC Tools Hub

            </h2>

            <p className="text-white/50 mt-4 leading-7">

              Smart tools and resources
              for SSC aspirants.

            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold text-white mb-4">

              Quick Links

            </h3>

            <div className="flex flex-col gap-3 text-white/60">

              <Link href="/">
                Home
              </Link>

              <Link href="/tools">
                Tools
              </Link>

              <Link href="/resources">
                Resources
              </Link>

              <Link href="/pyqs">
                PYQs
              </Link>

            </div>

          </div>

          {/* Legal */}
          <div>

            <h3 className="text-xl font-semibold text-white mb-4">

              Legal

            </h3>

            <div className="flex flex-col gap-3 text-white/60">

              <Link href="/about">
                About
              </Link>

              <Link href="/contact">
                Contact
              </Link>

              <Link href="/privacy-policy">
                Privacy Policy
              </Link>

              <Link href="/disclaimer">
                Disclaimer
              </Link>

              <Link href="/terms-and-conditions">
                Terms & Conditions
              </Link>

            </div>

          </div>

          {/* SEO */}
          <div>

            <h3 className="text-xl font-semibold text-white mb-4">

              Popular Pages

            </h3>

            <div className="flex flex-col gap-3 text-white/60">

              <Link href="/ssc-cgl-salary">
                SSC CGL Salary
              </Link>

              <Link href="/ssc-cgl-cutoff">
                SSC CGL Cutoff
              </Link>

              <Link href="/ssc-cgl-books">
                SSC CGL Books
              </Link>

              <Link href="/ssc-cgl-notification">
                SSC CGL Notification
              </Link>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-white/40">

          © 2026 SSC Tools Hub.
          All rights reserved.

        </div>

      </div>

    </footer>

  );

}