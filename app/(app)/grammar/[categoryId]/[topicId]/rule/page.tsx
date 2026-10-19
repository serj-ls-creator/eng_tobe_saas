import Link from "next/link";
import type { ReactNode } from "react";
import { notFound, redirect } from "next/navigation";
import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { AdjectiveOrderLesson } from "@/components/grammar/AdjectiveOrderLesson";
import { AdjectiveOrderRuleProgress } from "@/components/grammar/AdjectiveOrderRuleProgress";
import { GrammarRuleProgress } from "@/components/grammar/GrammarRuleProgress";
import { GrammarLessonRenderer } from "@/components/grammar/GrammarLessonRenderer";
import { findGrammarTopic, GRAMMAR_SECTIONS } from "@/constants/grammar";
import { GRAMMAR_EXAMPLES } from "@/constants/grammar-examples";
import { ADJECTIVE_LESSONS } from "@/constants/grammar-lessons/adjectives";
import { ADVERB_LESSONS } from "@/constants/grammar-lessons/adverbs";
import { CONDITIONAL_LESSONS } from "@/constants/grammar-lessons/conditionals";
import { GERUND_INFINITIVE_LESSONS } from "@/constants/grammar-lessons/gerunds-infinitives";
import { MODAL_LESSONS } from "@/constants/grammar-lessons/modals";
import { NOUN_LESSONS } from "@/constants/grammar-lessons/nouns";
import { PARTICIPLE_LESSONS } from "@/constants/grammar-lessons/participles";
import { PASSIVE_VOICE_LESSONS } from "@/constants/grammar-lessons/passive-voice";
import { PHRASAL_VERB_LESSONS } from "@/constants/grammar-lessons/phrasal-verbs";
import { PREPOSITION_LESSONS } from "@/constants/grammar-lessons/prepositions";
import { PRONOUN_LESSONS } from "@/constants/grammar-lessons/pronouns";
import { QUANTIFIER_LESSONS } from "@/constants/grammar-lessons/quantifiers";
import { QUESTION_LESSONS } from "@/constants/grammar-lessons/questions";
import { REPORTED_SPEECH_LESSONS } from "@/constants/grammar-lessons/reported-speech";
import { SENTENCE_LESSONS } from "@/constants/grammar-lessons/sentences";
import { VERB_LESSONS } from "@/constants/grammar-lessons/verbs";
import { TENSE_LESSONS } from "@/constants/grammar-lessons/tenses";
import { isPremium } from "@/lib/isPremium";

export default async function GrammarRulePage({ params }: { params: { categoryId: string; topicId: string } }) {
  const section = GRAMMAR_SECTIONS.find((item) => item.id === params.categoryId);
  const topic = findGrammarTopic(section?.topics, params.topicId);
  if (!section || !topic) notFound();
  if (section.id === "tenses" && !(await isPremium())) redirect("/premium");
  const examples = GRAMMAR_EXAMPLES[topic.id] ?? [];
  const lesson = section.id === "adjectives" ? ADJECTIVE_LESSONS[topic.id]
    : section.id === "adverbs" ? ADVERB_LESSONS[topic.id]
    : section.id === "conditional-sentences" ? CONDITIONAL_LESSONS[topic.id]
    : section.id === "gerunds-infinitives" ? GERUND_INFINITIVE_LESSONS[topic.id]
    : section.id === "modals" ? MODAL_LESSONS[topic.id]
    : section.id === "nouns" ? NOUN_LESSONS[topic.id]
    : section.id === "participles" ? PARTICIPLE_LESSONS[topic.id]
    : section.id === "passive-voice" ? PASSIVE_VOICE_LESSONS[topic.id]
    : section.id === "phrasal-verbs" ? PHRASAL_VERB_LESSONS[topic.id]
    : section.id === "prepositions" ? PREPOSITION_LESSONS[topic.id]
    : section.id === "pronouns" ? PRONOUN_LESSONS[topic.id]
    : section.id === "quantifiers" ? QUANTIFIER_LESSONS[topic.id]
    : section.id === "questions" ? QUESTION_LESSONS[topic.id]
    : section.id === "reported-speech" ? REPORTED_SPEECH_LESSONS[topic.id]
    : section.id === "sentences" ? SENTENCE_LESSONS[topic.id]
    : section.id === "verbs" ? VERB_LESSONS[topic.id]
    : section.id === "tenses" ? TENSE_LESSONS[topic.id] : undefined;

  if (topic.id === "word-order") redirect("/grammar/word-order/rule");
  if (topic.id === "adjective-order") {
    return <><AdjectiveOrderRuleProgress /><TopBar title="Adjective Order Rule" /><AdjectiveOrderLesson /></>;
  }

  return (
    <>
      {topic.id !== "adjective-order" && <GrammarRuleProgress categoryId={section.id} topicId={topic.id} title={`${topic.name} Rule`} href={`/grammar/${section.id}/${topic.id}/rule`} />}
      <TopBar title={`${topic.name} Rule`} />
      <div className="content-shell pb-10">
        <div className="mb-4">
          <Link href="/grammar" className="text-xs text-zinc-500 transition-colors hover:text-zinc-300">← Back to Grammar</Link>
        </div>
        <section className="overflow-hidden rounded-[34px] border border-[#262b38] bg-[#0a0c11] p-5 shadow-2xl shadow-black/35">
          <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#5d6577]">{section.name} · Grammar</div>
          <h1 className="bg-gradient-to-r from-[#4fd1ff] via-[#a78bfa] to-[#f472b6] bg-clip-text text-[34px] font-black leading-[1.05] tracking-tight text-transparent">
            {topic.name}
          </h1>
          <p className="mt-2 max-w-lg text-[14.5px] leading-6 text-[#8b93a5]">
            {lesson?.intro ?? "Read the rule and examples. Notice how the words work together in a sentence."}
          </p>
          <div className="my-[22px] h-[3px] rounded-full bg-gradient-to-r from-[#4fd1ff] via-[#a78bfa] to-[#f472b6] opacity-90" />

          {lesson ? <GrammarLessonRenderer lesson={lesson} /> : <>
          <article className="rounded-[20px] border border-[#262b38] bg-[#151822] px-[18px] py-5">
            <div className="flex items-center gap-3">
              <RuleBadge tone="cyan">RULE</RuleBadge>
              <h2 className="text-[16.5px] font-bold text-[#eef0f5]">How to use it</h2>
            </div>
            <p className="mt-3 text-[13.5px] leading-6 text-[#c0c5d1]">{topic.rule}</p>
          </article>

          <article className="mt-4 rounded-[20px] border border-[#262b38] bg-[#151822] px-[18px] py-5">
            <div className="flex items-center gap-3">
              <RuleBadge tone="violet">EX</RuleBadge>
              <h2 className="text-[16.5px] font-bold text-[#eef0f5]">Examples</h2>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {examples.map((example) => (
                <span key={example} className="rounded-xl border border-[#a78bfa]/30 bg-[#1b1f2b] px-3 py-2.5 text-[13.5px] leading-5 text-[#eef0f5]">
                  {example}
                </span>
              ))}
            </div>
          </article>

          <div className="mt-5 flex gap-3 rounded-2xl border border-[#262b38] bg-[linear-gradient(135deg,_rgba(79,209,255,0.10),_rgba(244,114,182,0.10))] px-4 py-[14px]">
            <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#fbbf24]" />
            <p className="m-0 text-[13px] leading-6 text-[#8b93a5]">
              <strong className="text-[#eef0f5]">Try it:</strong> Make one sentence about your day using this rule.
            </p>
          </div>
          </>}
        </section>
      </div>
    </>
  );
}

function RuleBadge({ children, tone }: { children: ReactNode; tone: "cyan" | "violet" }) {
  const toneClass = tone === "cyan" ? "bg-[#4fd1ff]/[0.14] text-[#4fd1ff]" : "bg-[#a78bfa]/[0.16] text-[#a78bfa]";
  return <span className={`flex h-[34px] min-w-[34px] shrink-0 items-center justify-center rounded-[10px] px-2 text-[12px] font-black ${toneClass}`}>{children}</span>;
}
