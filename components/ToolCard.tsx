type ToolCardProps = {
  title: string;
  description: string;
};

export default function ToolCard({
  title,
  description,
}: ToolCardProps) {
  return (
    <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 hover:scale-[1.02] transition">

      <h4 className="text-2xl font-bold">
        {title}
      </h4>

      <p className="text-white/60 mt-3">
        {description}
      </p>

      <button className="mt-6 bg-white text-black px-5 py-2 rounded-xl font-medium">
        Open Tool
      </button>

    </div>
  );
}