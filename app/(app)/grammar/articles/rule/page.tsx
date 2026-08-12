import Link from "next/link";
import type { ReactNode } from "react";

import { ArticlesRuleProgress } from "@/components/grammar/ArticlesRuleProgress";
import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";

export const dynamic = "force-dynamic";

const examples = ["a university", "an hour", "an MBA", "a European"];
const zeroExamples = ["dogs are loyal", "love water", "for breakfast", "speak Spanish", "in France"];

export default function ArticlesRulePage() {
  return (
    <>
      <ArticlesRuleProgress />
      <TopBar title="Articles Rule" />
      <div className="content-shell pb-10">
        <div className="mb-4">
          <Link href="/grammar/articles" className="text-xs text-zinc-500 transition-colors hover:text-zinc-300">
            &larr; Back to Articles
          </Link>
        </div>

        <section className="overflow-hidden rounded-[34px] border border-[#262b38] bg-[#0a0c11] p-5 shadow-2xl shadow-black/35">
          <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#5d6577]">
            Grammar card
          </div>
          <h1 className="bg-gradient-to-r from-[#4fd1ff] via-[#a78bfa] to-[#f472b6] bg-clip-text text-[34px] font-black leading-[1.05] tracking-tight text-transparent">
            A &middot; AN &middot; THE
          </h1>
          <p className="mt-2 max-w-lg text-[14.5px] leading-6 text-[#8b93a5]">
            Three short rules. No boring theory &mdash; just listen, notice, remember.
          </p>
          <div className="my-[22px] h-[3px] rounded-full bg-gradient-to-r from-[#4fd1ff] via-[#a78bfa] to-[#f472b6] opacity-90" />

          <div className="space-y-4">
            <article className="rounded-[20px] border border-[#262b38] bg-[#151822] px-[18px] py-5">
              <div className="flex items-center gap-3">
                <RuleBadge tone="cyan">A/AN</RuleBadge>
                <h2 className="text-[16.5px] font-bold text-[#eef0f5]">Listen to the sound, not the letter</h2>
              </div>
              <p className="mt-2 text-[13.5px] leading-6 text-[#8b93a5]">
                Use <strong className="font-semibold text-[#eef0f5]">A</strong> before a consonant sound. Use{" "}
                <strong className="font-semibold text-[#eef0f5]">AN</strong> before a vowel sound. The sound matters
                &mdash; not the spelling.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {examples.map((example) => (
                  <ExampleChip key={example} example={example} />
                ))}
              </div>
              <p className="mt-3 text-[11.5px] leading-5 text-[#5d6577]">
                university starts with a &quot;y&quot; sound &mdash; that&apos;s a consonant. hour starts with a vowel
                sound, even without &quot;h&quot;
              </p>
            </article>

            <article className="rounded-[20px] border border-[#262b38] bg-[#151822] px-[18px] py-5">
              <div className="flex items-center gap-3">
                <RuleBadge tone="violet">THE</RuleBadge>
                <h2 className="text-[16.5px] font-bold text-[#eef0f5]">Use it when everyone knows what you mean</h2>
              </div>
              <p className="mt-2 text-[13.5px] leading-6 text-[#8b93a5]">
                The first time you mention something, it&apos;s new &mdash; use{" "}
                <strong className="font-semibold text-[#eef0f5]">a/an</strong>. After that, everyone knows which one you
                mean &mdash; use <strong className="font-semibold text-[#eef0f5]">the</strong>.
              </p>
              <div className="mt-4 rounded-xl bg-[#1b1f2b] px-[14px] py-3">
                <StoryLine label="new">
                  I saw <ArticleMark>a</ArticleMark> cat in the yard.
                </StoryLine>
                <StoryLine label="known">
                  <ArticleMark>The</ArticleMark> cat looked straight at me.
                </StoryLine>
              </div>
            </article>

            <article className="rounded-[20px] border border-[#262b38] bg-[#151822] px-[18px] py-5">
              <div className="flex items-center gap-3">
                <RuleBadge tone="pink">0</RuleBadge>
                <h2 className="text-[16.5px] font-bold text-[#eef0f5]">Sometimes you don&apos;t need any article</h2>
              </div>
              <p className="mt-2 text-[13.5px] leading-6 text-[#8b93a5]">
                Plural nouns in general, uncountable things, meals, languages, and most names and countries &mdash; no
                article needed.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {zeroExamples.map((example) => (
                  <span key={example} className="rounded-full border border-[#262b38] bg-[#1b1f2b] px-[13px] py-[7px] text-[12.5px] font-medium text-[#eef0f5]">
                    {example}
                  </span>
                ))}
              </div>
            </article>
          </div>

          <div className="mt-5 flex gap-3 rounded-2xl border border-[#262b38] bg-[linear-gradient(135deg,_rgba(79,209,255,0.10),_rgba(244,114,182,0.10))] px-4 py-[14px]">
            <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#fbbf24]" />
            <p className="m-0 text-[13px] leading-6 text-[#8b93a5]">
              <strong className="text-[#eef0f5]">Quick test:</strong> can you say &quot;this exact one&quot;? Use{" "}
              <strong className="text-[#eef0f5]">the</strong>. Can you say &quot;just any one&quot;? Use{" "}
              <strong className="text-[#eef0f5]">a/an</strong>. Talking in general? Use nothing.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

function RuleBadge({ children, tone }: { children: ReactNode; tone: "cyan" | "violet" | "pink" }) {
  const toneClass = {
    cyan: "bg-[#4fd1ff]/[0.14] text-[#4fd1ff]",
    violet: "bg-[#a78bfa]/[0.16] text-[#a78bfa]",
    pink: "bg-[#f472b6]/[0.14] text-[#f472b6]"
  }[tone];

  return (
    <span className={`flex h-[34px] min-w-[34px] shrink-0 items-center justify-center rounded-[10px] px-2 text-[15px] font-black ${toneClass}`}>
      {children}
    </span>
  );
}

function StoryLine({ children, label }: { children: ReactNode; label: string }) {
  const tagClass = label === "new" ? "bg-[#2a1418] text-[#fb7185]" : "bg-[#12261f] text-[#34d399]";

  return (
    <div className="flex items-center justify-between gap-3 py-1 text-sm leading-6 text-[#eef0f5]">
      <span>{children}</span>
      <span className={`rounded-md px-1.5 py-px text-[10px] font-bold uppercase tracking-[0.05em] ${tagClass}`}>
        {label}
      </span>
    </div>
  );
}

function ArticleMark({ children }: { children: ReactNode }) {
  return <mark className="bg-transparent font-bold text-[#a78bfa]">{children}</mark>;
}

function ExampleChip({ example }: { example: string }) {
  const [article, ...rest] = example.split(" ");
  const isVowelSound = article === "an";
  const borderClass = isVowelSound ? "border-[#4fd1ff]/35" : "border-[#a78bfa]/35";
  const articleClass = isVowelSound ? "text-[#4fd1ff]" : "text-[#a78bfa]";

  return (
    <span className={`rounded-xl border bg-[#1b1f2b] px-3 py-2.5 text-[13.5px] text-[#eef0f5] ${borderClass}`}>
      <strong className={`font-black ${articleClass}`}>{article}</strong> {rest.join(" ")}
    </span>
  );
}
