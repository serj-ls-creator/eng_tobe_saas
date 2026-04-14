import Link from "next/link";
import { TopBar } from "@/components/layout/TopBar";
import { Card } from "@/components/ui/card";
import { IDIOM_CATS } from "@/constants/categories";
import { notFound } from "next/navigation";

export default async function FindMistakePage({ params }: { params: { categoryId: string; levelId: string } }) {
  const category = IDIOM_CATS.find(cat => cat.id === params.categoryId);
  
  if (!category) {
    notFound();
  }

  const levelName = params.levelId.replace('level-', 'Level ');

  return (
    <>
      <TopBar title={`${category.name} - ${levelName} - Find the Mistake`} />
      <div className="content-shell pb-4">
        <div className="mb-4">
          <Link 
            href={`/idioms/${params.categoryId}/${params.levelId}`} 
            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            {"<-"} Back to Activities
          </Link>
        </div>

        <Card className="p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Find the Mistake
            </h2>
            <p className="text-zinc-400 mb-6">
              Identify incorrect usage of idioms
            </p>
            <div className="p-6 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
              <p className="text-yellow-400">
                This activity is coming soon! We're working on creating exercises to identify incorrect idiom usage.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
