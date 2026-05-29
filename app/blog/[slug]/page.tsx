import Navbar from "../../../components/Navbar";
import ToolContainer from "../../../components/ToolContainer";

const blogData: Record<
  string,
  {
    title: string;
    content: string;
  }
> = {

  "crack-ssc-cgl-first-attempt": {

    title:
      "How To Crack SSC CGL In First Attempt",

    content:
      "SSC CGL preparation requires consistency, mock tests, revision strategy and smart time management. Focus on PYQs and daily practice.",

  },

  "ssc-study-plan-for-beginners": {

    title:
      "Best SSC Study Plan For Beginners",

    content:
      "Beginners should focus on basics, NCERT concepts, mock tests and daily revision to build strong SSC preparation foundation.",

  },

};

export default function BlogPostPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {

  const blog =
    blogData[params.slug];

  if (!blog) {

    return (

      <ToolContainer>

        <Navbar />

        <section className="px-6 py-20">

          <div className="max-w-4xl mx-auto">

            <h1 className="text-5xl font-bold">

              Blog Not Found

            </h1>

          </div>

        </section>

      </ToolContainer>

    );

  }

  return (

    <ToolContainer>

      <Navbar />

      <section className="px-6 py-20">

        <div className="max-w-4xl mx-auto">

          <h1 className="text-5xl font-bold leading-tight">

            {blog.title}

          </h1>

          <p className="text-white/70 text-lg leading-8 mt-10">

            {blog.content}

          </p>

        </div>

      </section>

    </ToolContainer>

  );

}