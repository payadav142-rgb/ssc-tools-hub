export default function AdBanner() {
  return (
    <div className="relative w-full overflow-hidden rounded-[28px] border border-orange-500/10 bg-[#111827]/60 backdrop-blur-xl">

      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/5 blur-[100px]" />

      <div className="relative flex min-h-[160px] items-center justify-center px-6 py-10">

        <div className="text-center">

          <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/25">
            Advertisement
          </div>

          <div className="mx-auto flex h-16 max-w-[728px] items-center justify-center rounded-xl border border-dashed border-white/10 bg-white/[0.02] px-8">

            <span className="text-sm text-white/25">
              Google AdSense
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}