import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SSC GD 2026 — Notification, Syllabus, Salary, Cutoff & More",
  description:
    "Complete SSC GD 2026 information including notification, syllabus, exam pattern, salary, cutoff, admit card and preparation resources.",
};

const pages = [
  {
    title: "SSC GD Notification",
    description:
      "Check SSC GD notification, vacancies, eligibility, important dates and recruitment details.",
    href: "/ssc-gd-notification",
    icon: "📢",
  },
  {
    title: "SSC GD Syllabus",
    description:
      "Explore the complete SSC GD syllabus with subject-wise topics and preparation areas.",
    href: "/ssc-gd-syllabus",
    icon: "📚",
  },
  {
    title: "SSC GD Exam Pattern",
    description:
      "Understand the latest SSC GD exam pattern, sections, marks and selection process.",
    href: "/ssc-gd-exam-pattern",
    icon: "📝",
  },
  {
    title: "SSC GD Salary",
    description:
      "Check SSC GD salary, pay level, allowances, benefits and career growth.",
    href: "/ssc-gd-salary",
    icon: "💰",
  },
  {
    title: "SSC GD Cutoff",
    description:
      "Check SSC GD previous year cutoff trends and expected cutoff information.",
    href: "/ssc-gd-cutoff",
    icon: "📊",
  },
  {
    title: "SSC GD Admit Card",
    description:
      "Find SSC GD admit card updates, download information and important instructions.",
    href: "/ssc-gd-admit-card",
    icon: "🎫",
  },
  {
    title: "SSC GD Books",
    description:
      "Explore useful books and study resources for SSC GD preparation.",
    href: "/ssc-gd-books",
    icon: "📖",
  },
];

export default function SscGdPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0B0F19] text-white">

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-orange-500/15 blur-[140px]" />

      <div className="pointer-events-none absolute right-0 top-[35%] h-[400px] w-[400px] rounded-full bg-amber-400/10 blur-[130px]" />

      <div className="relative z-10 px-6 py-20">

        <div className="mx-auto max-w-7xl">

          {/* Hero */}
          <section className="text-center">

            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2.5 text-sm font-medium text-orange-200">
              🪖 SSC GD Constable 2026
            </div>

            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
              SSC GD{" "}
              <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-200 bg-clip-text text-transparent">
                2026
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
              Complete SSC GD preparation hub with notification,
              syllabus, exam pattern, salary, cutoff, admit card,
              books and other important recruitment resources.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

              <Link
                href="/ssc-gd-syllabus"
                className="w-full rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 font-semibold shadow-lg shadow-orange-500/20 transition-all duration-300 hover:scale-105 hover:from-orange-400 hover:to-orange-500 sm:w-auto"
              >
                Explore Syllabus →
              </Link>

              <Link
                href="/ssc-gd-notification"
                className="w-full rounded-2xl border border-orange-500/20 bg-[#111827]/80 px-8 py-4 font-semibold backdrop-blur-xl transition-all duration-300 hover:border-orange-500/40 hover:bg-orange-500/10 sm:w-auto"
              >
                Check Notification
              </Link>

            </div>

          </section>

          {/* Quick Navigation */}
          <section className="mt-20">

            <div className="mb-10 text-center">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
                SSC GD Resources
              </p>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Everything You Need
              </h2>

            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {pages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="group relative overflow-hidden rounded-[30px] border border-orange-500/10 bg-[#111827]/80 p-7 shadow-[0_0_50px_rgba(249,115,22,0.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/40 hover:bg-[#151D2D]"
                >

                  <div className="relative z-10">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-orange-500/10 bg-gradient-to-br from-orange-500/20 to-amber-400/10 text-3xl transition-transform duration-300 group-hover:scale-110">
                      {page.icon}
                    </div>

                    <h3 className="mt-6 text-2xl font-bold transition-colors duration-300 group-hover:text-orange-300">
                      {page.title}
                    </h3>

                    <p className="mt-4 text-[15px] leading-7 text-white/50">
                      {page.description}
                    </p>

                    <div className="mt-6 font-semibold text-orange-300 transition-all duration-300 group-hover:translate-x-1">
                      Explore →
                    </div>

                  </div>

                </Link>
              ))}

            </div>

          </section>

          {/* Preparation Section */}
          <section className="mt-20">

            <div className="rounded-[36px] border border-orange-500/10 bg-[#111827]/70 p-8 text-center backdrop-blur-xl md:p-14">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
                Prepare Smarter
              </p>

              <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">
                Start Your SSC GD Preparation
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/50">
                Use SSC Tools Hub to explore exam resources,
                previous year questions, smart preparation tools
                and useful study material for SSC GD.
              </p>

              <Link
                href="/tools"
                className="mt-9 inline-flex rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 font-semibold shadow-lg shadow-orange-500/20 transition-all duration-300 hover:scale-105 hover:from-orange-400 hover:to-orange-500"
              >
                Explore Smart Tools →
              </Link>

            </div>

          </section>

        </div>

      </div>

    </main>
  );
}