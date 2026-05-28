import Link from "next/link";

type ResourceCardProps = {
  title: string;
  category: string;
  link: string;
};

export default function ResourceCard({
  title,
  category,
  link,
}: ResourceCardProps) {
  return (
    <div className="group bg-gradient-to-br from-white/[0.07] to-white/[0.03] border border-white/10 rounded-3xl p-7 hover:border-white/20 hover:-translate-y-1 transition duration-300">

      <span className="text-sm text-white/40 uppercase tracking-widest">
        {category}
      </span>

      <h3 className="text-2xl font-bold mt-4 leading-snug">
        {title}
      </h3>

      <p className="text-white/50 mt-4 leading-relaxed">
        Carefully curated SSC preparation material for smart preparation.
      </p>

     <a
  href={link}
  target="_blank"
  className="inline-flex items-center gap-2 mt-8 bg-white text-black px-5 py-3 rounded-2xl font-medium hover:scale-105 transition"
>
  Download PDF →
</a>    </div>
  );
}