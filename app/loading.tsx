export default function Loading() {
  return (
    <div className="min-h-dvh overflow-hidden bg-[#050505] text-white">
      <header className="fixed top-0 z-50 w-full border-b border-white/[0.08] bg-[#050505]">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 animate-pulse rounded-full bg-white/10" />
            <div className="h-4 w-28 animate-pulse rounded bg-white/10" />
          </div>
          <div className="h-9 w-28 animate-pulse rounded-full bg-white/15" />
        </div>
      </header>

      <main className="grid min-h-dvh place-items-center px-6 pt-16">
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[33fr_41fr_25fr]">
            <section className="flex flex-col justify-center">
              <div className="h-16 w-64 animate-pulse rounded-xl bg-white/10 sm:h-20 sm:w-80" />
              <div className="mt-4 h-16 w-56 animate-pulse rounded-xl bg-white/10 sm:h-20 sm:w-72" />
              <div className="mt-8 h-5 w-80 max-w-full animate-pulse rounded bg-white/10" />
              <div className="mt-4 h-4 w-96 max-w-full animate-pulse rounded bg-white/10" />
              <div className="mt-10 flex gap-4">
                <div className="h-12 w-36 animate-pulse rounded-full bg-white/20" />
                <div className="h-12 w-36 animate-pulse rounded-full border border-white/10 bg-white/5" />
              </div>
            </section>

            <section className="hidden flex-col items-center md:flex">
              <div className="h-64 w-64 animate-pulse rounded-3xl bg-white/10" />
              <div className="mt-6 h-44 w-full max-w-sm animate-pulse rounded-2xl border border-white/10 bg-zinc-900" />
            </section>

            <section className="hidden justify-center lg:flex">
              <div className="h-[580px] w-[280px] animate-pulse rounded-[44px] border border-white/10 bg-zinc-950" />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
