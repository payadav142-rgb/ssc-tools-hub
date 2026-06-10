import type { Metadata } from "next";

import Link from "next/link";

import Navbar from "../../../components/Navbar";
import ToolContainer from "../../../components/ToolContainer";

import { blogs } from "../../../data/blogs";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {

  const { slug } =
    await params;

  const blog =
    blogs.find(
      (item) =>
        item.slug === slug
    );

  if (!blog) {

    return {
      title: "Blog Not Found",
    };

  }

  return {
    title: blog.title,
    description: blog.description,
  };
}

export default async function BlogPostPage({
  params,
}: Props) {

  const { slug } =
    await params;

  const blog =
    blogs.find(
      (item) =>
        item.slug === slug
    );

  if (!blog) {

    return (

      <ToolContainer>

        <Navbar />

        <main className="min-h-screen bg-[#0B0F19] text-white relative overflow-hidden">

          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full pointer-events-none"></div>

          <section className="px-6 py-32 relative z-10">

            <div className="max-w-4xl mx-auto text-center">

              <h1 className="text-5xl md:text-6xl font-extrabold">

                Blog Not Found

              </h1>

              <p className="text-white/50 mt-8 text-lg">

                The article you are looking for does not exist.

              </p>

              <Link
                href="/blog"
                className="inline-block mt-10 bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
              >

                Back To Blog

              </Link>

            </div>

          </section>

        </main>

      </ToolContainer>

    );

  }

  const relatedBlogs =
    blogs
      .filter(
        (item) =>
          item.slug !== slug
      )
      .slice(0, 3);

  return (

    <ToolContainer>

      <Navbar />

      <main className="min-h-screen bg-[#0B0F19] text-white overflow-hidden relative">

        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="absolute top-[40%] right-0 w-[400px] h-[400px] bg-amber-400/10 blur-[120px] rounded-full pointer-events-none"></div>

        <section className="relative z-10 px-6 py-20">

          <div className="max-w-5xl mx-auto">

            {/* Breadcrumb */}
            <div className="flex items-center gap-3 text-sm text-white/40">

              <Link
                href="/"
                className="hover:text-orange-300 transition"
              >
                Home
              </Link>

              <span>
                /
              </span>

              <Link
                href="/blog"
                className="hover:text-orange-300 transition"
              >
                Blog
              </Link>

              <span>
                /
              </span>

              <span className="text-orange-300">

                Article

              </span>

            </div>

            {/* Hero */}
            <div className="mt-12">

              <p className="text-orange-300 font-medium tracking-wide uppercase">

                SSC Blog

              </p>

              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mt-6 tracking-tight">

                {blog.title}

              </h1>

              <p className="text-white/65 text-xl leading-9 mt-10 max-w-4xl">

                {blog.description}

              </p>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-5 mt-10 text-white/40 text-sm">

                <span>
                  Updated 2026
                </span>

                <span>
                  •
                </span>

                <span>
                  SSC Tools Hub
                </span>

                <span>
                  •
                </span>

                <span>
                  5 min read
                </span>

              </div>

            </div>

            {/* Article */}
            <article className="mt-16 bg-[#111827]/80 backdrop-blur-xl border border-orange-500/10 rounded-[40px] p-8 md:p-14 shadow-[0_0_60px_rgba(249,115,22,0.06)]">

              <div className="prose prose-invert max-w-none">

                <div className="text-white/80 leading-10 text-[18px] whitespace-pre-line">

                  {blog.content}

                </div>

              </div>

            </article>

            {/* CTA */}
            <div className="mt-16 bg-gradient-to-r from-orange-500/15 to-amber-400/10 border border-orange-500/20 rounded-[40px] p-10 md:p-14 text-center">

              <h2 className="text-4xl md:text-5xl font-bold leading-tight">

                Prepare Smarter With
                <span className="text-orange-400">
                  {" "}SSC Tools Hub
                </span>

              </h2>

              <p className="text-white/60 text-lg leading-8 mt-8 max-w-3xl mx-auto">

                Access smart SSC tools, study planners,
                mock analysis, PYQs, quizzes,
                revision systems and productivity features.

              </p>

              <Link
                href="/tools"
                className="inline-block mt-10 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-500/20"
              >

                Explore Tools

              </Link>

            </div>

            {/* FAQ */}
            <section className="mt-24">

              <h2 className="text-4xl md:text-5xl font-bold">

                Frequently Asked Questions

              </h2>

              <div className="space-y-6 mt-12">

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8">

                  <h3 className="text-2xl font-bold">

                    Is SSC preparation difficult?

                  </h3>

                  <p className="text-white/60 mt-5 leading-8 text-lg">

                    SSC exams require consistency,
                    mock tests, revision,
                    smart strategy and regular practice.

                  </p>

                </div>

                <div className="bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8">

                  <h3 className="text-2xl font-bold">

                    Which SSC exam is best?

                  </h3>

                  <p className="text-white/60 mt-5 leading-8 text-lg">

                    SSC CGL is considered one of the best SSC exams
                    because of salary, promotion,
                    job stability and career growth.

                  </p>

                </div>

              </div>

            </section>

            {/* Related Blogs */}
            <section className="mt-28">

              <div className="flex items-center justify-between flex-col md:flex-row gap-6">

                <div>

                  <h2 className="text-4xl md:text-5xl font-bold">

                    Related Articles

                  </h2>

                  <p className="text-white/50 mt-4 text-lg">

                    More SSC preparation guides and resources.

                  </p>

                </div>

                <Link
                  href="/blog"
                  className="bg-white text-black px-7 py-3 rounded-2xl font-semibold hover:scale-105 transition"
                >

                  View All

                </Link>

              </div>

              <div className="grid md:grid-cols-3 gap-8 mt-14">

                {relatedBlogs.map((item) => (

                  <Link
                    key={item.slug}
                    href={`/blog/${item.slug}`}
                    className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-8 hover:border-orange-500/40 hover:-translate-y-2 transition-all duration-300 shadow-[0_0_40px_rgba(249,115,22,0.05)]"
                  >

                    <h3 className="text-2xl font-bold leading-snug group-hover:text-orange-300 transition">

                      {item.title}

                    </h3>

                    <p className="text-white/60 mt-5 leading-8">

                      {item.description}

                    </p>

                    <div className="mt-8 text-orange-400 font-medium">

                      Read Article →

                    </div>

                  </Link>

                ))}

              </div>

            </section>

          </div>

        </section>

      </main>

    </ToolContainer>

  );

}