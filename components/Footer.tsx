import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-orange-500/10 bg-[#0B0F19]">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-4 gap-12">

          <div>
            <h2 className="text-3xl font-extrabold text-white">
              SSC Tools Hub
            </h2>

            <p className="text-white/50 mt-5 leading-7">
              Smart SSC preparation platform with PYQs,
              quizzes, study resources and productivity tools.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-orange-300 mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-white/60">
              <Link href="/">Home</Link>
              <Link href="/tools">Tools</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/pyqs">PYQs</Link>
              <Link href="/resources">Resources</Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-orange-300 mb-5">
              Top SSC Pages
            </h3>

            <div className="flex flex-col gap-3 text-white/60">
              <Link href="/ssc-cgl-notification">SSC CGL Notification</Link>
              <Link href="/ssc-cgl-salary">SSC CGL Salary</Link>
              <Link href="/ssc-chsl-notification">SSC CHSL Notification</Link>
              <Link href="/ssc-mts-notification">SSC MTS Notification</Link>
              <Link href="/ssc-gd-notification">SSC GD Notification</Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-orange-300 mb-5">
              Legal
            </h3>

            <div className="flex flex-col gap-3 text-white/60">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-and-conditions">Terms & Conditions</Link>
              <Link href="/disclaimer">Disclaimer</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/about">About Us</Link>
            </div>
          </div>

        </div>

        <div className="border-t border-orange-500/10 mt-12 pt-6 text-center text-white/40">
          © 2026 SSC Tools Hub. Built for SSC Aspirants 🚀
        </div>

      </div>

    </footer>
  );
}