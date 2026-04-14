import Link from "next/link";
import { TopBar } from "@/components/layout/TopBar";
import { Card } from "@/components/ui/card";
import { IDIOM_CATS } from "@/constants/categories";
import { notFound } from "next/navigation";

export default async function MultipleChoicePage({ params }: { params: { categoryId: string; levelId: string } }) {
  const category = IDIOM_CATS.find(cat => cat.id === params.categoryId);
  
  if (!category) {
    notFound();
  }

  const levelName = params.levelId.replace('level-', 'Level ');

  return (
    <>
      <TopBar title={`${category.name} - ${levelName} - Multiple Choice`} />
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
              Multiple Choice
            </h2>
            <p className="text-zinc-400 mb-6">
              Choose the correct meaning of the idiom
            </p>
            <div className="p-6 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
              <p className="text-yellow-400">
                This activity is coming soon! We're working on creating engaging multiple choice questions for idioms.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
