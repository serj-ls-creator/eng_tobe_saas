import Link from "next/link";
import type { ReactNode } from "react";

import { WordOrderRuleProgress } from "@/components/grammar/WordOrderRuleProgress";
import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";

export const dynamic = "force-dynamic";

const questionChips = [
  { emo: "🙋", word: "Who?" },
  { emo: "🏃", word: "Does what?" },
  { emo: "🎯", word: "What?" },
  { emo: "🎭", word: "How?" },
  { emo: "📍", word: "Where?" },
  { emo: "⏰", word: "When?" }
];

const tableRows = [
  { num: "1", emoji: "🙋", cat: "Subject", q: "Who?", word: "She", isHi: false },
  { num: "2", emoji: "🏃", cat: "Verb", q: "Does what?", word: "ate", isHi: false },
  { num: "3", emoji: "🎯", cat: "Object", q: "What?", word: "breakfast", isHi: false },
  { num: "4", emoji: "🎭", cat: "Manner", q: "How?", word: "quickly", isHi: false },
  { num: "5", emoji: "📍", cat: "Place", q: "Where?", word: "at home", isHi: false },
  { num: "6", emoji: "⏰", cat: "Time", q: "When?", word: "this morning", isHi: true }
];

export default function WordOrderRulePage() {
  return (
    <>
      <WordOrderRuleProgress />
      <TopBar title="Word Order Rule" />
      <div className="content-shell pb-10">
        <div className="mb-4">
          <Link href="/grammar/word-order" className="text-xs text-zinc-500 transition-colors hover:text-zinc-300">
            &larr; Back to Word Order
          </Link>
        </div>

        <section className="overflow-hidden rounded-[34px] border border-[#262b38] bg-[#0a0c11] p-5 shadow-2xl shadow-black/35">
          <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#5d6577]">
            Grammar lesson
          </div>
          <h1 className="bg-gradient-to-r from-[#4fd1ff] via-[#a78bfa] to-[#f472b6] bg-clip-text text-[32px] font-black leading-[1.05] tracking-tight text-transparent">
            Word Order
          </h1>
          <p className="mt-2 max-w-lg text-[14px] leading-6 text-[#8b93a5]">
            English words have a fixed place in a sentence. Learn all the positions.
          </p>
          <div className="my-[20px] h-[3px] rounded-full bg-gradient-to-r from-[#4fd1ff] via-[#a78bfa] to-[#f472b6] opacity-90" />

          <div className="space-y-4">
            {/* Card 00 */}
            <article className="rounded-[20px] border border-[#262b38] bg-[#151822] px-[18px] py-5">
              <div className="flex items-center gap-3">
                <RuleBadge tone="cyan">00</RuleBadge>
                <h2 className="text-[16px] font-bold text-[#eef0f5]">Why word order matters</h2>
              </div>
              <p className="mt-2 text-[13.5px] leading-6 text-[#8b93a5]">
                In English, we <strong className="font-semibold text-[#eef0f5]">cannot</strong> put words in any order we like. Every word has its own place.
                If we change the order, the sentence sounds wrong &mdash; or the meaning changes.
              </p>
              <div className="mt-3 flex gap-2 rounded-xl bg-[#1b1f2b] p-3 text-[13px] leading-relaxed text-[#8b93a5]">
                <span>📌</span>
                <span>Word order tells us <strong className="font-semibold text-[#eef0f5]">who does what</strong> &mdash; and <strong className="font-semibold text-[#eef0f5]">how</strong>, <strong className="font-semibold text-[#eef0f5]">where</strong>, and <strong className="font-semibold text-[#eef0f5]">when</strong> it happens.</span>
              </div>
              <div className="mt-3.5 flex flex-wrap gap-1.5">
                {questionChips.map((chip) => (
                  <div
                    key={chip.word}
                    className="flex items-center gap-1.5 rounded-full border border-[#262b38] bg-[#1b1f2b] px-3 py-1.5 text-xs text-[#eef0f5]"
                  >
                    <span>{chip.emo}</span>
                    <span className="font-semibold">{chip.word}</span>
                  </div>
                ))}
              </div>
            </article>

            {/* Card 01 */}
            <article className="rounded-[20px] border border-[#262b38] bg-[#151822] px-[18px] py-5">
              <div className="flex items-center gap-3">
                <RuleBadge tone="violet">01</RuleBadge>
                <h2 className="text-[16px] font-bold text-[#eef0f5]">The basic order: S &ndash; V &ndash; O</h2>
              </div>
              <p className="mt-2 text-[13.5px] leading-6 text-[#8b93a5]">
                Every simple sentence starts with these three parts, in this order:
              </p>

              {/* Train */}
              <div className="my-3.5 flex flex-wrap items-center justify-center gap-2">
                <div className="flex min-w-[64px] flex-col items-center gap-1 rounded-xl border border-[#262b38] bg-[#1b1f2b] px-3 py-2">
                  <span className="text-lg">🙋</span>
                  <span className="text-[11px] font-bold text-[#eef0f5]">Subject</span>
                </div>
                <span className="text-[#5d6577] text-sm">&rarr;</span>
                <div className="flex min-w-[64px] flex-col items-center gap-1 rounded-xl border border-[#262b38] bg-[#1b1f2b] px-3 py-2">
                  <span className="text-lg">🏃</span>
                  <span className="text-[11px] font-bold text-[#eef0f5]">Verb</span>
                </div>
                <span className="text-[#5d6577] text-sm">&rarr;</span>
                <div className="flex min-w-[64px] flex-col items-center gap-1 rounded-xl border border-[#262b38] bg-[#1b1f2b] px-3 py-2">
                  <span className="text-lg">🎯</span>
                  <span className="text-[11px] font-bold text-[#eef0f5]">Object</span>
                </div>
              </div>

              <div className="space-y-2 mt-3">
                <div className="rounded-xl bg-[#1b1f2b] px-3 py-2 text-[13px] text-[#eef0f5]">
                  <strong className="text-[#4fd1ff] font-bold">Subject</strong> = who does it &nbsp;&middot;&nbsp;{" "}
                  <strong className="text-[#4fd1ff] font-bold">Verb</strong> = the action &nbsp;&middot;&nbsp;{" "}
                  <strong className="text-[#4fd1ff] font-bold">Object</strong> = who or what receives it
                </div>
                <div className="rounded-xl bg-[#1b1f2b] px-3 py-2 text-[13px] text-[#eef0f5]">
                  🙋 The boy <strong className="text-[#4fd1ff] font-bold">&middot;</strong> 🏃 played{" "}
                  <strong className="text-[#4fd1ff] font-bold">&middot;</strong> 🎯 football.
                </div>
                <div className="rounded-xl bg-[#1b1f2b] px-3 py-2 text-[13px] text-[#eef0f5]">
                  🙋 She <strong className="text-[#4fd1ff] font-bold">&middot;</strong> 🏃 reads{" "}
                  <strong className="text-[#4fd1ff] font-bold">&middot;</strong> 🎯 books.
                </div>
              </div>
            </article>

            {/* Card 02 */}
            <article className="rounded-[20px] border border-[#262b38] bg-[#151822] px-[18px] py-5">
              <div className="flex items-center gap-3">
                <RuleBadge tone="pink">02</RuleBadge>
                <h2 className="text-[16px] font-bold text-[#eef0f5]">Adding more: how, where, when</h2>
              </div>
              <p className="mt-2 text-[13.5px] leading-6 text-[#8b93a5]">
                After subject &ndash; verb &ndash; object, we can add extra information. It goes in this order:{" "}
                <strong className="font-semibold text-[#eef0f5]">Manner</strong> (how) &rarr;{" "}
                <strong className="font-semibold text-[#eef0f5]">Place</strong> (where) &rarr;{" "}
                <strong className="font-semibold text-[#eef0f5]">Time</strong> (when).
              </p>

              {/* Vertical Table */}
              <div className="mt-3.5 overflow-hidden rounded-xl border border-[#262b38]">
                {tableRows.map((row, idx) => (
                  <div
                    key={row.num}
                    className={`flex items-center gap-2 border-b border-[#262b38] px-3 py-2.5 last:border-b-0 ${
                      row.isHi
                        ? "bg-[linear-gradient(135deg,_rgba(79,209,255,0.10),_rgba(244,114,182,0.08))]"
                        : idx % 2 === 0
                        ? "bg-[#1b1f2b]"
                        : "bg-[#181c27]"
                    }`}
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#0a0c11] text-[10px] font-extrabold text-[#4fd1ff]">
                      {row.num}
                    </span>
                    <span className="text-sm shrink-0">{row.emoji}</span>
                    <div className="flex w-[80px] shrink-0 flex-col leading-tight">
                      <span className="text-[12px] font-bold text-[#eef0f5]">{row.cat}</span>
                      <span className="text-[10px] text-[#5d6577]">{row.q}</span>
                    </div>
                    <span
                      className={`flex-1 text-right text-[13px] font-bold ${
                        row.isHi ? "text-[#f472b6]" : "text-[#eef0f5]"
                      }`}
                    >
                      {row.word}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-3 text-center text-[13px] italic text-[#8b93a5] leading-relaxed">
                &ldquo;<strong className="font-bold text-[#eef0f5] not-italic">She ate breakfast quickly at home this morning.</strong>&rdquo;
              </p>

              <div className="mt-3 rounded-xl border border-[#262b38] bg-[linear-gradient(135deg,_rgba(251,191,36,0.10),_rgba(244,114,182,0.08))] p-3 text-[12.5px] leading-relaxed text-[#8b93a5]">
                <strong className="text-[#fbbf24] font-bold">Memory trick:</strong> Some Very Odd Monkeys Prefer Tea ={" "}
                <strong className="text-[#eef0f5]">S</strong>ubject, <strong className="text-[#eef0f5]">V</strong>erb,{" "}
                <strong className="text-[#eef0f5]">O</strong>bject, <strong className="text-[#eef0f5]">M</strong>anner,{" "}
                <strong className="text-[#eef0f5]">P</strong>lace, <strong className="text-[#eef0f5]">T</strong>ime.
              </div>
            </article>

            {/* Card 03 */}
            <article className="rounded-[20px] border border-[#262b38] bg-[#151822] px-[18px] py-5">
              <div className="flex items-center gap-3">
                <RuleBadge tone="green">03</RuleBadge>
                <h2 className="text-[16px] font-bold text-[#eef0f5]">Put it together</h2>
              </div>
              <p className="mt-2 text-[13.5px] leading-6 text-[#8b93a5]">
                Here are more sentences using this order:
              </p>

              <div className="mt-3.5 space-y-2.5">
                <div className="border-l-2 border-[#262b38] pl-3 py-0.5 text-[13.5px] text-[#eef0f5]">
                  <div>The boy played <strong className="font-bold text-[#4fd1ff]">happily</strong> in the park at nine o&apos;clock.</div>
                  <span className="block text-[11px] text-[#5d6577] mt-0.5">verb + manner + place + time (no object)</span>
                </div>
                <div className="border-l-2 border-[#262b38] pl-3 py-0.5 text-[13.5px] text-[#eef0f5]">
                  <div>We watched a movie <strong className="font-bold text-[#4fd1ff]">quietly</strong> at the cinema last night.</div>
                  <span className="block text-[11px] text-[#5d6577] mt-0.5">subject + verb + object + manner + place + time</span>
                </div>
                <div className="border-l-2 border-[#262b38] pl-3 py-0.5 text-[13.5px] text-[#eef0f5]">
                  <div>He drives his car <strong className="font-bold text-[#4fd1ff]">carefully</strong> to work every day.</div>
                  <span className="block text-[11px] text-[#5d6577] mt-0.5">subject + verb + object + manner + place + time</span>
                </div>
              </div>

              <div className="mt-3 rounded-xl border border-[#262b38] bg-[#1b1f2b] p-3 text-[12.5px] leading-relaxed text-[#8b93a5]">
                <strong className="text-[#fbbf24] font-bold">Note:</strong> Not every sentence needs all six parts. Use only the parts you need.
              </div>
            </article>

            {/* Card 04 */}
            <article className="rounded-[20px] border border-[#262b38] bg-[#151822] px-[18px] py-5">
              <div className="flex items-center gap-3">
                <RuleBadge tone="amber">04</RuleBadge>
                <h2 className="text-[16px] font-bold text-[#eef0f5]">Frequency words &mdash; a different spot!</h2>
              </div>
              <p className="mt-2 text-[13.5px] leading-6 text-[#8b93a5]">
                Words like <strong className="font-semibold text-[#eef0f5]">always, usually, often, sometimes, never</strong> don&apos;t follow the same rule. They go in a special place:
              </p>

              <div className="mt-3.5 flex gap-2.5">
                <div className="flex-1 rounded-xl border border-[#262b38] bg-[#1b1f2b] p-3">
                  <div className="text-[12.5px] font-bold text-[#34d399] mb-1">before the verb</div>
                  <div className="text-[12.5px] text-[#eef0f5]">I <strong className="font-bold text-[#4fd1ff]">always</strong> drink coffee.</div>
                </div>
                <div className="flex-1 rounded-xl border border-[#262b38] bg-[#1b1f2b] p-3">
                  <div className="text-[12.5px] font-bold text-[#34d399] mb-1">after &quot;to be&quot;</div>
                  <div className="text-[12.5px] text-[#eef0f5]">She <strong className="font-bold text-[#4fd1ff]">is usually</strong> late.</div>
                </div>
              </div>

              <div className="mt-3 rounded-xl border border-[#262b38] bg-[#1b1f2b] p-3 text-[12.5px] leading-relaxed text-[#8b93a5]">
                <strong className="text-[#fb7185] font-bold">Wrong:</strong> <s className="text-zinc-500">I drink always coffee.</s> Frequency words never go after a normal verb.
              </div>
            </article>

            {/* Card 05 */}
            <article className="rounded-[20px] border border-[#262b38] bg-[#151822] px-[18px] py-5">
              <div className="flex items-center gap-3">
                <RuleBadge tone="cyan">05</RuleBadge>
                <h2 className="text-[16px] font-bold text-[#eef0f5]">Moving time to the front</h2>
              </div>
              <p className="mt-2 text-[13.5px] leading-6 text-[#8b93a5]">
                Sometimes we move the <strong className="font-semibold text-[#eef0f5]">time</strong> to the start of the sentence. This is not wrong &mdash; it just makes the time feel more important.
              </p>
              <div className="mt-3 space-y-2">
                <div className="rounded-xl bg-[#1b1f2b] px-3 py-2 text-[13px] text-[#eef0f5]">
                  <strong className="text-[#4fd1ff] font-bold">At nine o&apos;clock</strong>, the boy played happily in the park.
                </div>
                <div className="rounded-xl bg-[#1b1f2b] px-3 py-2 text-[13px] text-[#eef0f5]">
                  <strong className="text-[#4fd1ff] font-bold">This morning</strong>, she ate breakfast quickly at home.
                </div>
              </div>
            </article>

            {/* Card 06 */}
            <article className="rounded-[20px] border border-[#262b38] bg-[#151822] px-[18px] py-5">
              <div className="flex items-center gap-3">
                <RuleBadge tone="violet">06</RuleBadge>
                <h2 className="text-[16px] font-bold text-[#eef0f5]">Questions change the order</h2>
              </div>
              <p className="mt-2 text-[13.5px] leading-6 text-[#8b93a5]">
                In questions, the order changes: <strong className="font-semibold text-[#eef0f5]">(question word) + auxiliary + subject + verb.</strong>
              </p>
              <div className="mt-3 space-y-2">
                <div className="rounded-xl bg-[#1b1f2b] px-3 py-2 text-[13px] text-[#eef0f5]">
                  <strong className="text-[#4fd1ff] font-bold">Did</strong> the boy play in the park?
                </div>
                <div className="rounded-xl bg-[#1b1f2b] px-3 py-2 text-[13px] text-[#eef0f5]">
                  <strong className="text-[#4fd1ff] font-bold">Where did</strong> the boy play?
                </div>
                <div className="rounded-xl bg-[#1b1f2b] px-3 py-2 text-[13px] text-[#eef0f5]">
                  <strong className="text-[#4fd1ff] font-bold">What time did</strong> the boy play in the park?
                </div>
              </div>
            </article>
          </div>

          {/* Footer tip */}
          <div className="mt-5 flex gap-3 rounded-2xl border border-[#262b38] bg-[linear-gradient(135deg,_rgba(79,209,255,0.10),_rgba(244,114,182,0.10))] px-4 py-[14px]">
            <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#fbbf24]" />
            <p className="m-0 text-[13px] leading-6 text-[#8b93a5]">
              <strong className="text-[#eef0f5]">Quick review:</strong> Subject &rarr; Verb &rarr; Object &rarr; Manner &rarr; Place &rarr; Time. Frequency words (always, usually...) go before the verb, but after &quot;to be&quot;.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

function RuleBadge({ children, tone }: { children: ReactNode; tone: "cyan" | "violet" | "pink" | "green" | "amber" }) {
  const toneClass = {
    cyan: "bg-[#4fd1ff]/[0.14] text-[#4fd1ff]",
    violet: "bg-[#a78bfa]/[0.16] text-[#a78bfa]",
    pink: "bg-[#f472b6]/[0.14] text-[#f472b6]",
    green: "bg-[#34d399]/[0.14] text-[#34d399]",
    amber: "bg-[#fbbf24]/[0.16] text-[#fbbf24]"
  }[tone];

  return (
    <span className={`flex h-[34px] min-w-[34px] shrink-0 items-center justify-center rounded-[10px] px-2 text-[15px] font-black ${toneClass}`}>
      {children}
    </span>
  );
}
