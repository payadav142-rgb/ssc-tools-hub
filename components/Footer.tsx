import Link from "next/link";

const quickLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Tools",
    href: "/tools",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Syllabus",
    href: "/syllabus",
  },
  {
    name: "PYQs",
    href: "/pyqs",
  },
  {
    name: "Resources",
    href: "/resources",
  },
];

const topSscPages = [
  {
    name: "SSC CGL Notification",
    href: "/ssc-cgl-notification",
  },
  {
    name: "SSC CGL Salary",
    href: "/ssc-cgl-salary",
  },
  {
    name: "SSC CHSL Notification",
    href: "/ssc-chsl-notification",
  },
  {
    name: "SSC MTS Notification",
    href: "/ssc-mts-notification",
  },
  {
    name: "SSC GD Notification",
    href: "/ssc-gd-notification",
  },
];

const legalLinks = [
  {
    name: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    name: "Terms & Conditions",
    href: "/terms-and-conditions",
  },
  {
    name: "Disclaimer",
    href: "/disclaimer",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "About Us",
    href: "/about",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-orange-500/10 bg-[#080C14] text-white">

      {/* Glow Effects */}
      <div className="absolute bottom-0 left-0 h-[400px] w-[500px] rounded-full bg-orange-500/10 blur-[120px] pointer-events-none" />

      <div className="absolute right-0 top-0 h-[350px] w-[400px] rounded-full bg-amber-400/5 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">

        {/* Footer Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>

            <Link
              href="/"
              className="inline-block text-3xl font-extrabold tracking-tight"
            >
              <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                SSC
              </span>{" "}
              <span className="text-white">
                Tools Hub
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-white/50 leading-8">
              Smart SSC preparation platform with PYQs,
              quizzes, study resources, exam guides and
              productivity tools — all in one place.
            </p>

            <Link
              href="/tools"
              className="mt-7 inline-flex items-center rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:scale-105 hover:from-orange-400 hover:to-orange-500"
            >
              Explore Tools →
            </Link>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-lg font-bold text-orange-300">
              Quick Links
            </h3>

            <div className="mt-6 flex flex-col gap-4">

              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/50 transition-colors duration-200 hover:text-orange-300"
                >
                  {link.name}
                </Link>
              ))}

            </div>

          </div>

          {/* Top SSC Pages */}
          <div>

            <h3 className="text-lg font-bold text-orange-300">
              Top SSC Pages
            </h3>

            <div className="mt-6 flex flex-col gap-4">

              {topSscPages.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/50 transition-colors duration-200 hover:text-orange-300"
                >
                  {link.name}
                </Link>
              ))}

            </div>

          </div>

          {/* Legal */}
          <div>

            <h3 className="text-lg font-bold text-orange-300">
              Legal & Company
            </h3>

            <div className="mt-6 flex flex-col gap-4">

              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/50 transition-colors duration-200 hover:text-orange-300"
                >
                  {link.name}
                </Link>
              ))}

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-orange-500/10 pt-8">

          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">

            <p className="text-sm text-white/40">
              © {new Date().getFullYear()} SSC Tools Hub.
              All rights reserved.
            </p>

            <p className="text-sm text-white/30">
              Built for SSC Aspirants 🚀
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}