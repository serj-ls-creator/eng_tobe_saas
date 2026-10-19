import { notFound } from "next/navigation";
import { GrammarFindMistakeGame } from "@/components/grammar/GrammarFindMistakeGame";
import { getGrammarMistakeLevels } from "@/data/grammar/find_the_mistake";

export default function ArticlesFindMistakeLevelPage({ params }: { params: { levelId: string } }) {
  const levelNumber = Number(params.levelId.replace("level-", ""));
  if (!Number.isInteger(levelNumber) || levelNumber < 1 || levelNumber > 4) notFound();
  const levels = getGrammarMistakeLevels("articles", "articles");
  const level = levels?.find((item) => item.level === levelNumber);
  if (!level) notFound();
  return <GrammarFindMistakeGame categoryId="articles" topicId="articles" categoryName="Articles" topicName="Articles" level={level} basePath="/grammar/articles/find-the-mistake" />;
}
