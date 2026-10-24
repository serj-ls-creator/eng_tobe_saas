import { notFound, redirect } from "next/navigation";
import { GrammarFindMistakeGame } from "@/components/grammar/GrammarFindMistakeGame";
import { findGrammarTopic, GRAMMAR_SECTIONS } from "@/constants/grammar";
import { getGrammarMistakeLevels } from "@/data/grammar/find_the_mistake";
import { isPremium } from "@/lib/isPremium";

export default async function GrammarFindMistakeLevelPage({ params }: { params: { categoryId: string; topicId: string; levelId: string } }) {
  const section = GRAMMAR_SECTIONS.find((item) => item.id === params.categoryId);
  const topic = findGrammarTopic(section?.topics, params.topicId);
  const levelNumber = Number(params.levelId.replace("level-", ""));
  if (!section || !topic || !Number.isInteger(levelNumber) || levelNumber < 1 || levelNumber > 4) notFound();
  if (section.id === "tenses" && !(await isPremium())) redirect("/store");

  const levels = getGrammarMistakeLevels(section.id, topic.id);
  const level = levels?.find((item) => item.level === levelNumber);
  if (!level) notFound();

  return <GrammarFindMistakeGame categoryId={section.id} topicId={topic.id} categoryName={section.name} topicName={topic.name} level={level} basePath={`/grammar/${section.id}/${topic.id}/find-the-mistake`} />;
}
