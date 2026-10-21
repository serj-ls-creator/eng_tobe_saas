import Link from "next/link";

const categories = [
  ["💭", "Opinion", "what you think: beautiful, boring, strange", "#f472b6"],
  ["📏", "Size", "how big or small it is", "#4fd1ff"],
  ["⏳", "Age", "how old or new it is", "#34d399"],
  ["🔷", "Shape", "its form", "#fbbf24"],
  ["🎨", "Colour", "its colour", "#a78bfa"],
  ["🌍", "Origin", "where it comes from", "#38bdf8"],
  ["🧱", "Material", "what it is made of", "#fb923c"],
  ["🎯", "Type / purpose", "what it is used for", "#f87171"]
] as const;

const rows = [
  ["1", "💭", "Opinion", "gorgeous", "—", "sleek"], ["2", "📏", "Size", "—", "tiny", "—"],
  ["3", "⏳", "Age", "old", "—", "—"], ["4", "🔷", "Shape", "—", "round", "—"],
  ["5", "🎨", "Colour", "—", "green", "—"], ["6", "🌍", "Origin", "—", "—", "French"],
  ["7", "🧱", "Material", "wooden", "—", "—"], ["8", "🎯", "Type", "—", "—", "racing"]
] as const;

const examples = [
  ["a gorgeous old wooden cabin", "opinion + age + material"],
  ["a tiny round silver coin", "size + shape + material"],
  ["a charming little Italian café", "opinion + size + origin"],
  ["a modern black leather jacket", "age + colour + material"],
  ["a new red sports car", "age + colour + type / purpose"]
] as const;

export function AdjectiveOrderLesson() {
  return (
    <div className="content-shell pb-10">
      <div className="mb-4">
        <Link href="/grammar" className="text-xs text-zinc-500 transition-colors hover:text-zinc-300">&larr; Back to Grammar</Link>
      </div>
      <section className="overflow-hidden rounded-[34px] border border-[#262b38] bg-[#0a0c11] p-5 shadow-2xl shadow-black/35">
        <div className="mb-2 text-center text-[11px] font-bold uppercase tracking-[0.16em] text-[#5d6577]">Grammar lesson · A2</div>
        <h1 className="bg-gradient-to-r from-[#4fd1ff] via-[#a78bfa] to-[#f472b6] bg-clip-text text-center text-[32px] font-black leading-[1.05] tracking-tight text-transparent">Adjective Order</h1>
        <p className="mx-auto mt-2 max-w-lg text-center text-[14px] leading-6 text-[#8b93a5]">When you use more than one adjective, they usually follow a natural order.</p>
        <div className="my-5 h-[3px] rounded-full bg-gradient-to-r from-[#4fd1ff] via-[#a78bfa] to-[#f472b6] opacity-90" />

        <div className="space-y-4">
          <article className="grammar-lesson-card px-[18px] py-5">
            <RuleHeading badge="00" title="One noun, many adjectives" tone="cyan" />
            <p className="mt-2 text-[13.5px] leading-6 text-[#8b93a5]">We can put two or more adjectives before a noun. They usually go in a set order. For example: <strong className="text-[#eef0f5]">a small old house</strong>, not “an old small house”.</p>
            <div className="mt-3 flex gap-2 rounded-xl bg-[#1b1f2b] p-3 text-[13px] leading-relaxed text-[#8b93a5]"><span>📌</span><span>In everyday English, two or three adjectives are usually enough.</span></div>
          </article>

          <article className="grammar-lesson-card px-[18px] py-5">
            <RuleHeading badge="01" title="The 8 adjective groups" tone="violet" />
            <p className="mt-2 text-[13.5px] leading-6 text-[#8b93a5]">The order tells us what kind of information each adjective gives.</p>
            <div className="mt-4 space-y-3">
              {categories.map(([emoji, name, description, color]) => <div key={name} className="flex items-start gap-2.5"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: color }} /><div><div className="text-[13.5px] font-bold text-[#eef0f5]">{emoji} {name}</div><div className="text-[12.5px] text-[#8b93a5]">{description}</div></div></div>)}
            </div>
          </article>

          <article className="grammar-lesson-card px-3 py-5 sm:px-[18px]">
            <RuleHeading badge="02" title="One phrase, all the groups" tone="pink" />
            <p className="mb-3 mt-2 text-[13.5px] leading-6 text-[#8b93a5]">Follow the order from left to right. The noun comes last.</p>
            <div className="overflow-hidden rounded-xl border border-[#262b38]">
              <div className="flex items-center border-b border-[#262b38] bg-[#10131c] text-[10px] font-bold text-[#5d6577]"><div className="w-[34%] shrink-0 p-2">Group</div>{["Example 1", "Example 2", "Example 3"].map((head) => <span key={head} className="w-[22%] shrink-0 text-center">{head}</span>)}</div>
              {rows.map(([num, emoji, name, a, b, c], index) => <div key={num} className={`flex items-center border-b border-[#262b38] ${index % 2 === 0 ? "bg-[#1b1f2b]" : "bg-[#181c27]"}`}><div className="flex w-[34%] shrink-0 items-center gap-1 p-2"><span className="flex h-4 w-4 items-center justify-center rounded bg-[#0a0c11] text-[9px] text-[#4fd1ff]">{num}</span><span className="text-[10px]">{emoji}</span><span className="text-[10px] font-semibold text-[#8b93a5]">{name}</span></div>{[a, b, c].map((word, i) => <span key={i} className={`w-[22%] shrink-0 text-center text-[10px] sm:text-[11.5px] ${word === "—" ? "text-[#5d6577]" : "font-bold text-[#eef0f5]"}`}>{word}</span>)}</div>)}
              <div className="flex items-center bg-[linear-gradient(135deg,_rgba(79,209,255,0.10),_rgba(244,114,182,0.08))] text-[10px] font-bold text-[#f472b6]"><div className="w-[34%] shrink-0 p-2 text-[#eef0f5]">Noun</div><span className="w-[22%] text-center">cabin</span><span className="w-[22%] text-center">rug</span><span className="w-[22%] text-center">bike</span></div>
            </div>
            <p className="mt-3 text-center text-[12px] italic leading-relaxed text-[#8b93a5]">“a <strong className="text-[#eef0f5]">gorgeous old wooden</strong> cabin” · “a <strong className="text-[#eef0f5]">tiny round green</strong> rug” · “a <strong className="text-[#eef0f5]">sleek French racing</strong> bike”</p>
          </article>

          <article className="grammar-lesson-card px-[18px] py-5">
            <RuleHeading badge="03" title="Put it together" tone="green" />
            <p className="mt-2 text-[13.5px] leading-6 text-[#8b93a5]">Here are common adjective combinations:</p>
            <div className="mt-4 space-y-2.5">{examples.map(([phrase, groups]) => <div key={phrase} className="border-l-2 border-[#262b38] py-0.5 pl-3"><div className="text-[13.5px] text-[#eef0f5]">{phrase}</div><span className="mt-0.5 block text-[11px] text-[#5d6577]">{groups}</span></div>)}</div>
          </article>

          <article className="grammar-lesson-card px-[18px] py-5">
            <RuleHeading badge="04" title="Keep it short" tone="cyan" />
            <p className="mt-2 text-[13.5px] leading-6 text-[#8b93a5]">Usually, use no more than three adjectives before a noun. A short phrase sounds more natural.</p>
            <div className="mt-3.5 flex gap-2.5"><div className="flex-1 rounded-xl border border-[#262b38] bg-[#1b1f2b] p-3"><div className="mb-1.5 text-[13px] font-bold text-[#34d399]">✓ Natural</div><div className="text-[12.5px] italic text-[#eef0f5]">a charming old cottage</div></div><div className="flex-1 rounded-xl border border-[#262b38] bg-[#1b1f2b] p-3"><div className="mb-1.5 text-[13px] font-bold text-[#fb7185]">✗ Too many</div><div className="text-[12.5px] italic leading-snug text-[#eef0f5]">a charming old tiny red Italian stone cottage</div></div></div>
          </article>
        </div>
        <div className="mt-5 flex gap-3 rounded-2xl border border-[#262b38] bg-[linear-gradient(135deg,_rgba(79,209,255,0.10),_rgba(244,114,182,0.10))] px-4 py-[14px]"><div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#fbbf24]" /><p className="m-0 text-[13px] leading-6 text-[#8b93a5]"><strong className="text-[#eef0f5]">Remember:</strong> Opinion → Size → Age → Shape → Colour → Origin → Material → Type / purpose → Noun.</p></div>
      </section>
    </div>
  );
}

function RuleHeading({ badge, title, tone }: { badge: string; title: string; tone: "cyan" | "violet" | "pink" | "green" }) {
  const colors = { cyan: "bg-[#4fd1ff]/[0.14] text-[#4fd1ff]", violet: "bg-[#a78bfa]/[0.16] text-[#a78bfa]", pink: "bg-[#f472b6]/[0.14] text-[#f472b6]", green: "bg-[#34d399]/[0.14] text-[#34d399]" };
  return <div className="flex items-center gap-3"><span className={`flex h-[34px] min-w-[34px] items-center justify-center rounded-[10px] px-2 text-[14px] font-black ${colors[tone]}`}>{badge}</span><h2 className="text-[16px] font-bold text-[#eef0f5]">{title}</h2></div>;
}
