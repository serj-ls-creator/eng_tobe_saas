import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { GrammarMistakeLevels } from "@/components/grammar/GrammarMistakeLevels";
import { findGrammarTopic, GRAMMAR_SECTIONS } from "@/constants/grammar";
import { getGrammarMistakeLevels } from "@/data/grammar/find_the_mistake";
import { getLearningProgressSnapshot } from "@/lib/learning-progress";
import { isPremium } from "@/lib/isPremium";
import { createPageMetadata } from "@/lib/metadata";

export const dynamic = "force-dynamic";

interface FindMistakePageProps {
  params: {
    categoryId: string;
    topicId: string;
  };
}

export async function generateMetadata({ params }: FindMistakePageProps): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const section = GRAMMAR_SECTIONS.find((item) => item.id === resolvedParams?.categoryId);
  const topic = findGrammarTopic(section?.topics, resolvedParams?.topicId);

  if (!topic) {
    return createPageMetadata({
      title: "Find the Mistake - English Grammar Lesson",
      description: "Find and fix grammar mistakes in sentences to test your English skills.",
    });
  }

  return createPageMetadata({
    title: `${topic.name}: Find the Mistake - Grammar Lesson`,
    description: `Find and correct grammar mistakes for ${topic.name}. Practice with multiple levels.`,
  });
}

export default async function GrammarFindMistakeLevelsPage({ params }: FindMistakePageProps) {
  const section = GRAMMAR_SECTIONS.find((item) => item.id === params.categoryId);
  const topic = findGrammarTopic(section?.topics, params.topicId);
  if (!section || !topic) notFound();
  if (section.id === "tenses" && !(await isPremium())) redirect("/store");

  const levels = getGrammarMistakeLevels(section.id, topic.id);
  if (!levels) notFound();
  const progress = await getLearningProgressSnapshot();
  const basePath = `/grammar/${section.id}/${topic.id}/find-the-mistake`;

  return (
    <>
      <TopBar title={`${topic.name} — Find the Mistake`} />
      <div className="content-shell pb-8">
        <GrammarMistakeLevels categoryId={section.id} topicId={topic.id} title={topic.name} levels={levels} basePath={basePath} backHref={`/grammar/${section.id}/${topic.id}`} progress={progress} />
      </div>
    </>
  );
}
