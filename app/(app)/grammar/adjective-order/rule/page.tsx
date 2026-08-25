import Link from "next/link";
import type { ReactNode } from "react";

import { AdjectiveOrderRuleProgress } from "@/components/grammar/AdjectiveOrderRuleProgress";
import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";

export const dynamic = "force-dynamic";

const categories = [
  { name: "💭 Opinion", desc: "what you think about it — beautiful, boring, strange", dot: "#f472b6" },
  { name: "📏 Size", desc: "how big or small it is", dot: "#4fd1ff" },
  { name: "⏳ Age", desc: "how old or new it is", dot: "#34d399" },
  { name: "🔷 Shape", desc: "its form or outline", dot: "#fbbf24" },
  { name: "🎨 Colour", desc: "its basic colour", dot: "#a78bfa" },
  { name: "🌍 Origin", desc: "where it comes from", dot: "#38bdf8" },
  { name: "🧱 Material", desc: "what it is made of", dot: "#fb923c" },
  { name: "🎯 Type / purpose", desc: "what it is used for", dot: "#f87171" }
];

const tableRows = [
  { num: "1", emoji: "💭", cat: "Opinion", ex1: "gorgeous", ex2: "—", ex3: "sleek" },
  { num: "2", emoji: "📏", cat: "Size", ex1: "—", ex2: "tiny", ex3: "—" },
  { num: "3", emoji: "⏳", cat: "Age", ex1: "old", ex2: "—", ex3: "—" },
  { num: "4", emoji: "🔷", cat: "Shape", ex1: "—", ex2: "round", ex3: "—" },
  { num: "5", emoji: "🎨", cat: "Colour", ex1: "—", ex2: "green", ex3: "—" },
  { num: "6", emoji: "🌍", cat: "Origin", ex1: "—", ex2: "—", ex3: "French" },
  { num: "7", emoji: "🧱", cat: "Material", ex1: "wooden", ex2: "—", ex3: "—" },
  { num: "8", emoji: "🎯", cat: "Type", ex1: "—", ex2: "—", ex3: "racing" }
];

const speechExamples = [
  { text: "a <b>gorgeous old</b> wooden cabin", tags: "opinion + age + material" },
  { text: "a <b>tiny round</b> silver coin", tags: "size + shape + material" },
  { text: "a <b>charming little</b> Italian café", tags: "opinion + size + origin" },
  { text: "a <b>modern black</b> leather jacket", tags: "age + colour + material" },
  { text: "a <b>new red</b> sports car", tags: "age + colour + type/purpose" }
];

export default function AdjectiveOrderRulePage() {
  return (
    <>
      <AdjectiveOrderRuleProgress />
      <TopBar title="Adjective Order Rule" />
      <div className="content-shell pb-10">
        <div className="mb-4">
          <Link href="/grammar/adjective-order" className="text-xs text-zinc-500 transition-colors hover:text-zinc-300">
            &larr; Back to Adjective Order
          </Link>
        </div>

        <section className="overflow-hidden rounded-[34px] border border-[#262b38] bg-[#0a0c11] p-5 shadow-2xl shadow-black/35">
          <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#5d6577]">
            Grammar lesson
          </div>
          <h1 className="bg-gradient-to-r from-[#4fd1ff] via-[#a78bfa] to-[#f472b6] bg-clip-text text-[32px] font-black leading-[1.05] tracking-tight text-transparent">
            Adjective Order
          </h1>
          <p className="mt-2 max-w-lg text-[14px] leading-6 text-[#8b93a5]">
            When you use more than one adjective, they follow a natural order &mdash; even if you never learned the rule.
          </p>
          <div className="my-[20px] h-[3px] rounded-full bg-gradient-to-r from-[#4fd1ff] via-[#a78bfa] to-[#f472b6] opacity-90" />

          <div className="space-y-4">
            {/* Card 00 */}
            <article className="rounded-[20px] border border-[#262b38] bg-[#151822] px-[18px] py-5">
              <div className="flex items-center gap-3">
                <RuleBadge tone="cyan">00</RuleBadge>
                <h2 className="text-[16px] font-bold text-[#eef0f5]">One noun, many adjectives</h2>
              </div>
              <p className="mt-2 text-[13.5px] leading-6 text-[#8b93a5]">
                In English, we can use more than one adjective before a noun. When we do this,
                the adjectives usually follow a <strong className="font-semibold text-[#eef0f5]">fixed, natural order</strong>. Native speakers use
                this order automatically &mdash; without thinking about it.
              </p>
              <div className="mt-3 flex gap-2 rounded-xl bg-[#1b1f2b] p-3 text-[13px] leading-relaxed text-[#8b93a5]">
                <span>📌</span>
                <span>If we don&apos;t want to make one adjective stand out more than the others, there is a normal, safe order to follow.</span>
              </div>
            </article>

            {/* Card 01 */}
            <article className="rounded-[20px] border border-[#262b38] bg-[#151822] px-[18px] py-5">
              <div className="flex items-center gap-3">
                <RuleBadge tone="violet">01</RuleBadge>
                <h2 className="text-[16px] font-bold text-[#eef0f5]">The 8 categories</h2>
              </div>
              <p className="mt-2 text-[13.5px] leading-6 text-[#8b93a5]">
                Each type of adjective answers a different question about the noun.
              </p>
              <div className="mt-4 space-y-3">
                {categories.map((cat) => (
                  <div key={cat.name} className="flex items-start gap-2.5">
                    <span
                      className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                      style={{ backgroundColor: cat.dot }}
                    />
                    <div>
                      <div className="text-[13.5px] font-bold text-[#eef0f5]">{cat.name}</div>
                      <div className="text-[12.5px] text-[#8b93a5]">{cat.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            {/* Card 02 */}
            <article className="rounded-[20px] border border-[#262b38] bg-[#151822] px-[18px] py-5">
              <div className="flex items-center gap-3 mb-3">
                <RuleBadge tone="pink">02</RuleBadge>
                <h2 className="text-[16px] font-bold text-[#eef0f5]">One sentence, every category</h2>
              </div>

              <div className="overflow-hidden rounded-xl border border-[#262b38]">
                {/* Header row */}
                <div className="flex items-center border-b border-[#262b38] bg-[#10131c]">
                  <div className="w-[34%] shrink-0 p-2 text-[10.5px] font-bold text-[#5d6577]">
                    Article
                  </div>
                  <span className="w-[22%] shrink-0 text-center text-[13px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4fd1ff] to-[#a78bfa]">a</span>
                  <span className="w-[22%] shrink-0 text-center text-[13px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4fd1ff] to-[#a78bfa]">a</span>
                  <span className="w-[22%] shrink-0 text-center text-[13px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4fd1ff] to-[#a78bfa]">a</span>
                </div>

                {/* Categories rows */}
                {tableRows.map((row, idx) => (
                  <div
                    key={row.num}
                    className={`flex items-center border-b border-[#262b38] ${
                      idx % 2 === 0 ? "bg-[#1b1f2b]" : "bg-[#181c27]"
                    }`}
                  >
                    <div className="flex w-[34%] shrink-0 items-center gap-1.5 p-2">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded bg-[#0a0c11] text-[9.5px] font-bold text-[#4fd1ff]">
                        {row.num}
                      </span>
                      <span className="text-[11px]">{row.emoji}</span>
                      <span className="text-[11px] font-semibold text-[#8b93a5]">{row.cat}</span>
                    </div>
                    <span className={`w-[22%] shrink-0 text-center text-[11.5px] font-bold ${row.ex1 === "—" ? "font-normal text-[#5d6577]" : "text-[#eef0f5]"}`}>
                      {row.ex1}
                    </span>
                    <span className={`w-[22%] shrink-0 text-center text-[11.5px] font-bold ${row.ex2 === "—" ? "font-normal text-[#5d6577]" : "text-[#eef0f5]"}`}>
                      {row.ex2}
                    </span>
                    <span className={`w-[22%] shrink-0 text-center text-[11.5px] font-bold ${row.ex3 === "—" ? "font-normal text-[#5d6577]" : "text-[#eef0f5]"}`}>
                      {row.ex3}
                    </span>
                  </div>
                ))}

                {/* Noun row */}
                <div className="flex items-center bg-[linear-gradient(135deg,_rgba(79,209,255,0.10),_rgba(244,114,182,0.08))]">
                  <div className="w-[34%] shrink-0 p-2 text-[11px] font-bold text-[#eef0f5]">
                    Noun
                  </div>
                  <span className="w-[22%] shrink-0 text-center text-[12px] font-bold text-[#f472b6]">cabin</span>
                  <span className="w-[22%] shrink-0 text-center text-[12px] font-bold text-[#f472b6]">rug</span>
                  <span className="w-[22%] shrink-0 text-center text-[12px] font-bold text-[#f472b6]">bike</span>
                </div>
              </div>

              <p className="mt-3 text-center text-[13px] italic text-[#8b93a5] leading-relaxed">
                &ldquo;a <strong className="font-bold text-[#eef0f5] not-italic">gorgeous old wooden</strong> cabin&rdquo; &middot; &ldquo;a <strong className="font-bold text-[#eef0f5] not-italic">tiny round green</strong> rug&rdquo; &middot; &ldquo;a <strong className="font-bold text-[#eef0f5] not-italic">sleek French racing</strong> bike&rdquo;
              </p>
            </article>

            {/* Card 03 */}
            <article className="rounded-[20px] border border-[#262b38] bg-[#151822] px-[18px] py-5">
              <div className="flex items-center gap-3">
                <RuleBadge tone="green">03</RuleBadge>
                <h2 className="text-[16px] font-bold text-[#eef0f5]">Put it together</h2>
              </div>
              <p className="mt-2 text-[13.5px] leading-6 text-[#8b93a5]">
                In real speech, we usually combine just 2&ndash;3 adjectives. Here&apos;s what that looks like:
              </p>
              <div className="mt-4 space-y-2.5">
                {speechExamples.map((item, idx) => (
                  <div key={idx} className="border-l-2 border-[#262b38] pl-3 py-0.5">
                    <div
                      className="text-[13.5px] text-[#eef0f5]"
                      dangerouslySetInnerHTML={{
                        __html: item.text.replace(/<b>(.*?)<\/b>/g, '<strong class="font-bold text-[#4fd1ff]">$1</strong>')
                      }}
                    />
                    <span className="block text-[11px] text-[#5d6577] mt-0.5">{item.tags}</span>
                  </div>
                ))}
              </div>
            </article>

            {/* Card 04 */}
            <article className="rounded-[20px] border border-[#262b38] bg-[#151822] px-[18px] py-5">
              <div className="flex items-center gap-3">
                <RuleBadge tone="cyan">04</RuleBadge>
                <h2 className="text-[16px] font-bold text-[#eef0f5]">Keep it short</h2>
              </div>
              <p className="mt-2 text-[13.5px] leading-6 text-[#8b93a5]">
                We normally don&apos;t use more than <strong className="font-semibold text-[#eef0f5]">three</strong> adjectives before a noun. If there are more,
                English speakers usually use a relative clause instead.
              </p>
              <div className="mt-3.5 flex gap-2.5">
                <div className="flex-1 rounded-xl border border-[#262b38] bg-[#1b1f2b] p-3">
                  <div className="text-[13px] font-bold text-[#34d399] mb-1.5">&#10003; natural</div>
                  <div className="text-[12.5px] italic text-[#eef0f5]">a charming ancient cottage</div>
                </div>
                <div className="flex-1 rounded-xl border border-[#262b38] bg-[#1b1f2b] p-3">
                  <div className="text-[13px] font-bold text-[#fb7185] mb-1.5">&#10007; too many</div>
                  <div className="text-[12.5px] italic text-[#eef0f5] leading-snug">a charming ancient tiny red Italian stone cottage</div>
                </div>
              </div>
            </article>
          </div>

          {/* Footer tip */}
          <div className="mt-5 flex gap-3 rounded-2xl border border-[#262b38] bg-[linear-gradient(135deg,_rgba(79,209,255,0.10),_rgba(244,114,182,0.10))] px-4 py-[14px]">
            <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#fbbf24]" />
            <p className="m-0 text-[13px] leading-6 text-[#8b93a5]">
              <strong className="text-[#eef0f5]">Quick memory tip:</strong> Opinion &rarr; Size &rarr; Age &rarr; Shape &rarr; Colour &rarr; Origin &rarr; Material &rarr; Type/purpose &rarr; Noun.
              Think: what you feel, then what you see, in that order.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

function RuleBadge({ children, tone }: { children: ReactNode; tone: "cyan" | "violet" | "pink" | "green" }) {
  const toneClass = {
    cyan: "bg-[#4fd1ff]/[0.14] text-[#4fd1ff]",
    violet: "bg-[#a78bfa]/[0.16] text-[#a78bfa]",
    pink: "bg-[#f472b6]/[0.14] text-[#f472b6]",
    green: "bg-[#34d399]/[0.14] text-[#34d399]"
  }[tone];

  return (
    <span className={`flex h-[34px] min-w-[34px] shrink-0 items-center justify-center rounded-[10px] px-2 text-[15px] font-black ${toneClass}`}>
      {children}
    </span>
  );
}
