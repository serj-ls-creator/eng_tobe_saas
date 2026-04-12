import { TopBar } from "@/components/layout/TopBar";
import { WordsTree } from "@/components/words/WordsTree";
import { CATS } from "@/constants/categories";
import { isPremium } from "@/lib/isPremium";

export default async function WordsPage() {
  const premium = await isPremium();

  return (
    <>
      <TopBar title="Words" />
      <div className="content-shell">
        <WordsTree categories={CATS} isPremium={premium} />
      </div>
    </>
  );
}
