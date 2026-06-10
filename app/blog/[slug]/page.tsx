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

        <section className="px-6 py-24">

          <div className="max-w-4xl mx-auto text-center">

            <h1 className="text-5xl font-bold">

              Blog Not Found

            </h1>

            <p className="text-white/50 mt-6">

              The article you are looking for does not exist.

            </p>

          </div>

        </section>

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

      <section className="px-6 py-20">

        <div className="max-w-4xl mx-auto">

          {/* Tag */}
          <p className="text-orange-300 font-medium">

            SSC Blog

          </p>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mt-5">

            {blog.title}

          </h1>

          {/* Meta */}
          <div className="flex items-center gap-4 mt-8 text-white/40 text-sm">

            <span>
              Updated 2026
            </span>

            <span>
              •
            </span>

            <span>
              SSC Tools Hub
            </span>

          </div>

          {/* Description */}
          <p className="text-white/70 text-xl leading-9 mt-10">

            {blog.description}

          </p>

          {/* Content */}
          <div className="mt-14 bg-[#111827]/70 border border-orange-500/10 rounded-[40px] p-8 md:p-12">

            <div className="text-white/75 leading-9 text-lg whitespace-pre-line">

              {blog.content}

            </div>

          </div>

          {/* FAQ */}
          <div className="mt-20">

            <h2 className="text-4xl font-bold">

              Frequently Asked Questions

            </h2>

            <div className="space-y-6 mt-10">

              <div className="bg-[#111827]/70 border border-orange-500/10 rounded-3xl p-6">

                <h3 className="text-2xl font-semibold">

                  Is SSC preparation difficult?

                </h3>

                <p className="text-white/60 mt-4 leading-7">

                  SSC exams require consistency,
                  mock tests, revision and smart strategy.

                </p>

              </div>

              <div className="bg-[#111827]/70 border border-orange-500/10 rounded-3xl p-6">

                <h3 className="text-2xl font-semibold">

                  Which SSC exam is best?

                </h3>

                <p className="text-white/60 mt-4 leading-7">

                  SSC CGL is considered one of
                  the best SSC exams because of salary,
                  promotion and career growth.

                </p>

              </div>

            </div>

          </div>

          {/* Related Posts */}
          <div className="mt-24">

            <h2 className="text-4xl font-bold">

              Related Articles

            </h2>

            <div className="grid md:grid-cols-3 gap-8 mt-10">

              {relatedBlogs.map((item) => (

                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  className="group bg-[#111827]/80 border border-orange-500/10 rounded-[32px] p-7 hover:border-orange-500/40 hover:-translate-y-1 transition-all duration-300"
                >

                  <h3 className="text-2xl font-bold group-hover:text-orange-300 transition">

                    {item.title}

                  </h3>

                  <p className="text-white/60 mt-5 leading-7">

                    {item.description}

                  </p>

                </Link>

              ))}

            </div>

          </div>

        </div>

      </section>

    </ToolContainer>

  );

}