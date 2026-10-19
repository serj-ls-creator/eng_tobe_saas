import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { GrammarMistakeLevels } from "@/components/grammar/GrammarMistakeLevels";
import { getGrammarMistakeLevels } from "@/data/grammar/find_the_mistake";
import { getLearningProgressSnapshot } from "@/lib/learning-progress";

export const dynamic = "force-dynamic";

export default async function ArticlesFindMistakeLevelsPage() {
  const levels = getGrammarMistakeLevels("articles", "articles") ?? [];
  const progress = await getLearningProgressSnapshot();
  return (
    <>
      <TopBar title="Articles — Find the Mistake" />
      <div className="content-shell pb-8">
        <GrammarMistakeLevels categoryId="articles" topicId="articles" title="Articles" levels={levels} basePath="/grammar/articles/find-the-mistake" backHref="/grammar/articles" progress={progress} />
      </div>
    </>
  );
}
