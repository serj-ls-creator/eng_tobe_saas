const quickCards = Array.from({ length: 4 });
const weekDays = Array.from({ length: 7 });

export default function Loading() {
  return (
    <div className="app-shell bg-background">
      <header className="sticky top-0 z-30 border-b border-white/5 bg-[#050505]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-[430px] items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 animate-pulse rounded-full bg-white/10" />
            <div>
              <div className="h-4 w-28 animate-pulse rounded bg-white/10" />
              <div className="mt-1.5 h-3 w-32 animate-pulse rounded bg-white/5" />
            </div>
          </div>
          <div className="h-7 w-16 animate-pulse rounded-full bg-yellow-500/10" />
        </div>
      </header>

      <main className="flex-1">
        <div className="content-shell relative z-10 overflow-hidden">
          <div className="relative z-20 overflow-y-auto px-4 pt-4 pb-4">
            <section className="glass-card p-4">
              <div className="mb-4 flex items-center justify-between">
                {weekDays.map((_, index) => (
                  <div key={index} className="flex flex-col items-center gap-1">
                    <div className="h-2.5 w-3 animate-pulse rounded bg-white/10" />
                    <div className="h-8 w-8 animate-pulse rounded-full border border-white/10 bg-white/[0.03]" />
                  </div>
                ))}
              </div>
              <div className="mb-2 flex items-center justify-between">
                <div className="h-3 w-24 animate-pulse rounded bg-white/10" />
                <div className="h-3 w-14 animate-pulse rounded bg-cyan-400/10" />
              </div>
              <div className="h-2 w-full animate-pulse rounded-full bg-white/10" />
              <div className="mt-3 flex items-center justify-between">
                <div className="h-6 w-24 animate-pulse rounded-full bg-yellow-500/10" />
                <div className="h-3 w-20 animate-pulse rounded bg-white/10" />
              </div>
            </section>

            <section className="mb-5 mt-5">
              <div className="mb-3 h-4 w-24 animate-pulse rounded bg-white/10" />
              <div className="grid grid-cols-2 gap-3">
                {quickCards.map((_, index) => (
                  <div key={index} className="glass-card p-4">
                    <div className="mb-3 h-5 w-5 animate-pulse rounded bg-cyan-400/20" />
                    <div className="h-4 w-20 animate-pulse rounded bg-white/10" />
                    <div className="mt-2 h-3 w-16 animate-pulse rounded bg-white/5" />
                  </div>
                ))}
              </div>
            </section>

            <section className="glass-card p-4">
              <div className="mb-3 h-3 w-32 animate-pulse rounded bg-white/10" />
              <div className="h-4 w-28 animate-pulse rounded bg-white/10" />
              <div className="mt-2 h-6 w-40 animate-pulse rounded bg-cyan-400/10" />
              <div className="mt-3 h-3 w-full animate-pulse rounded bg-white/5" />
            </section>
          </div>
        </div>
      </main>

      <nav className="sticky bottom-0 z-40 border-t border-white/10 bg-[#050505]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[430px] items-center justify-around px-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex min-w-0 flex-1 flex-col items-center gap-1 px-1 py-2">
              <div className="h-5 w-5 animate-pulse rounded bg-white/10" />
              <div className="h-2.5 w-8 animate-pulse rounded bg-white/5" />
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}
