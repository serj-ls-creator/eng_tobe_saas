import Link from "next/link";
import { TopBar } from "@/components/layout/TopBar";
import { SentencesTree } from "@/components/sentences/SentencesTree";
import { SENT_CATS } from "@/constants/categories";
import { isPremium } from "@/lib/isPremium";

export default async function SentencesPage() {
  const premium = await isPremium();

  return (
    <>
      <TopBar title="Sentences" />
      <div className="content-shell pb-4">
        <div className="mb-4">
          <Link 
            href="/" 
            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            {"<-"} Back to Home
          </Link>
        </div>
        <SentencesTree categories={SENT_CATS} isPremium={premium} />
      </div>
    </>
  );
}
