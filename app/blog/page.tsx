import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SSC Blog — Latest SSC Updates, Salary, Syllabus & Preparation",
  description:
    "Read latest SSC blogs including SSC CGL, CHSL, MTS and GD updates, syllabus, salary and preparation guides.",
};

const blogs = [
  {
    title: "SSC CGL Notification 2026",
    description: "Complete SSC CGL notification details.",
    href: "/ssc-cgl-notification",
  },
  {
    title: "SSC CGL Salary 2026",
    description: "Salary, allowances and benefits.",
    href: "/ssc-cgl-salary",
  },
  {
    title: "SSC CHSL Salary 2026",
    description: "Complete CHSL salary structure.",
    href: "/ssc-chsl-salary",
  },
  {
    title: "SSC MTS Salary 2026",
    description: "Salary, pay level and allowances.",
    href: "/ssc-mts-salary",
  },
  {
    title: "SSC GD Salary 2026",
    description: "SSC GD salary and promotion details.",
    href: "/ssc-gd-salary",
  },
  {
    title: "SSC CHSL Books 2026",
    description: "Best books for SSC CHSL preparation.",
    href: "/ssc-chsl-books",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl md:text-6xl font-bold">
          SSC Blog
        </h1>

        <p className="text-white/60 text-lg mt-6 max-w-3xl">
          Latest SSC updates, preparation guides,
          salary details, syllabus and important resources.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {blogs.map((blog) => (
            <Link
              key={blog.href}
              href={blog.href}
              className="bg-[#111827] border border-orange-500/10 rounded-3xl p-8 hover:border-orange-500/40 transition-all"
            >
              <h2 className="text-2xl font-bold">
                {blog.title}
              </h2>

              <p className="text-white/60 mt-4">
                {blog.description}
              </p>
            </Link>
          ))}

        </div>

      </div>
    </main>
  );
}