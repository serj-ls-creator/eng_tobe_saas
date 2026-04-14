import Link from "next/link";
import { TopBar } from "@/components/layout/TopBar";
import { WordsTree } from "@/components/words/WordsTree";
import { CATS } from "@/constants/categories";
import { isPremium } from "@/lib/isPremium";

export default async function WordsPage() {
  const premium = await isPremium();

  return (
    <>
      <TopBar title="Words" />
      <div className="content-shell pb-6">
        <div className="mb-4">
          <Link 
            href="/" 
            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
        <WordsTree categories={CATS} isPremium={premium} />
      </div>
    </>
  );
}
