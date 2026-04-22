'use client';

import { startTransition, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChevronDown, Handshake, Sparkles, Target } from 'lucide-react';

import { TopBar } from '@/components/layout/TopBar';
import { NegotiationResultModal } from '@/components/games/NegotiationResultModal';
import { Card } from '@/components/ui/card';
import type {
  NegotiationChoice,
  NegotiationEnding,
  NegotiationNode,
  NegotiationQuest,
} from '@/data/games/negotiation/perfect-suit';
import { addPoints } from '@/lib/useAddPoints';
import { completeActivity, type ActivityResult } from '@/lib/useCompleteActivity';
import { usePoints } from '@/lib/usePoints';

interface NegotiationQuestClientProps {
  quest: NegotiationQuest;
}

interface TranscriptStep {
  nodeId: string;
  choiceId?: string;
}

function getChoice(node: NegotiationNode, choiceId: string): NegotiationChoice | undefined {
  return node.choices?.find((choice) => choice.id === choiceId);
}

function getEnding(quest: NegotiationQuest, node: NegotiationNode): NegotiationEnding | null {
  if (node.type !== 'ending' || !node.endingCode) return null;
  return quest.endings[node.endingCode] ?? null;
}

export function NegotiationQuestClient({ quest }: NegotiationQuestClientProps) {
  const router = useRouter();
  const points = usePoints();
  const [steps, setSteps] = useState<TranscriptStep[]>([{ nodeId: quest.startNodeId }]);
  const [activityResult, setActivityResult] = useState<ActivityResult | null>(null);
  const [rewardedEndingCode, setRewardedEndingCode] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(false);

  const currentStep = steps[steps.length - 1];
  const currentNode = quest.nodes[currentStep.nodeId];
  const ending = getEnding(quest, currentNode);

  useEffect(() => {
    setShowHint(false);
  }, [currentNode.id]);

  useEffect(() => {
    if (!ending || rewardedEndingCode === ending.code) return;

    setRewardedEndingCode(ending.code);
    addPoints(ending.points);
    completeActivity().then((result) => {
      if (result) setActivityResult(result);
    });
  }, [ending, rewardedEndingCode]);

  const restartQuest = () => {
    setSteps([{ nodeId: quest.startNodeId }]);
    setActivityResult(null);
    setRewardedEndingCode(null);
  };

  const choose = (choice: NegotiationChoice) => {
    startTransition(() => {
      setSteps((prev) => {
        const next = [...prev];
        next[next.length - 1] = { ...next[next.length - 1], choiceId: choice.id };
        next.push({ nodeId: choice.next });
        return next;
      });
    });
  };

  const transcript = steps.slice(0, -1);

  return (
    <>
      <style>{`
        @keyframes negotiationChoiceGradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      <TopBar points={points} />
      <div className="content-shell pb-8">
        <div className="mb-4">
          <Link href="/games/negotiation" className="text-xs text-zinc-500 transition-colors hover:text-zinc-300">
            ← Back to Quests
          </Link>
        </div>

        <div className="relative mb-6 overflow-hidden rounded-[28px] border border-cyan-400/20 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.22),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(250,204,21,0.18),_transparent_35%),linear-gradient(180deg,_rgba(15,23,42,0.95),_rgba(2,6,23,0.96))] p-5">
          <div className="absolute inset-y-0 right-0 w-24 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent)] blur-2xl" />
          <div className="relative">
            <div className="mb-3 flex items-center gap-2 text-cyan-300">
              <Handshake className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em]">Negotiation Quest</span>
            </div>
            <h1 className="mb-2 text-3xl font-black text-white">{quest.title}</h1>
            <p className="mb-4 max-w-md text-sm leading-6 text-zinc-200">{quest.tagline}</p>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-3">
                <div className="mb-1 flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-zinc-400">
                  <Target className="h-3.5 w-3.5" />
                  Starting Price
                </div>
                <div className="text-xl font-black text-yellow-300">${quest.originalPrice}</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-3">
                <div className="mb-1 flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-zinc-400">
                  <Sparkles className="h-3.5 w-3.5" />
                  Status
                </div>
                <div className="text-sm font-semibold text-white">
                  {ending ? ending.shortLabel : `Turn ${steps.length}`}
                </div>
              </div>
            </div>
          </div>
        </div>

        {transcript.length > 0 && (
          <div className="mb-5 space-y-3">
            {transcript.map((step, index) => {
              const node = quest.nodes[step.nodeId];
              const choice = step.choiceId ? getChoice(node, step.choiceId) : undefined;

              return (
                <div key={`${step.nodeId}-${index}`} className="space-y-2">
                  <Card className="rounded-[24px] border border-white/8 bg-white/[0.05] p-4">
                    <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-300">
                      {node.character ?? 'Narrator'}
                    </div>
                    <p className="text-sm leading-6 text-zinc-100">{node.text}</p>
                  </Card>
                  {choice && (
                    <div className="ml-10 rounded-[22px] border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm leading-6 text-cyan-50">
                      <span className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-300">
                        You
                      </span>
                      {choice.text}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        <Card className="mb-5 overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))]">
          {currentNode.scene && (
            <div className="border-b border-white/8 bg-white/[0.04] px-5 py-4 text-sm leading-6 text-zinc-300">
              {currentNode.scene}
            </div>
          )}
          <div className="p-5">
            <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              {currentNode.character ?? 'Narrator'}
            </div>
            <p className="text-lg font-semibold leading-8 text-white">{currentNode.text}</p>
          </div>
        </Card>

        {currentNode.hint && !ending && (
          <div className="mb-5">
            <button
              onClick={() => setShowHint((prev) => !prev)}
              className="flex w-full items-center justify-between rounded-[22px] border border-yellow-400/25 bg-yellow-400/10 px-4 py-3 text-left transition-colors hover:bg-yellow-400/15"
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-yellow-200">Hint</div>
              <ChevronDown className={`h-4 w-4 text-yellow-200 transition-transform ${showHint ? 'rotate-180' : ''}`} />
            </button>
            {showHint && (
              <Card className="mt-3 rounded-[24px] border border-yellow-400/20 bg-yellow-400/10 p-4">
                <p className="text-sm leading-6 text-yellow-50">{currentNode.hint}</p>
              </Card>
            )}
          </div>
        )}

        {!ending && currentNode.choices && (
          <div className="space-y-3">
            <div className="mb-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-300">Your Reply</div>
            {currentNode.choices.map((choice, index) => (
              <button
                key={choice.id}
                onClick={() => choose(choice)}
                className={`fade-up fade-up-d${Math.min(index + 1, 5)} w-full rounded-[24px] border px-5 py-4 text-left transition-all hover:scale-[1.01] hover:border-cyan-300/60 hover:shadow-[0_0_28px_rgba(34,211,238,0.14)]`}
                style={{
                  borderColor: 'rgba(34, 211, 238, 0.28)',
                  background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
                  backgroundSize: '200% 200%',
                  animation: 'negotiationChoiceGradientMove 6s ease infinite',
                  boxShadow: '0 0 22px rgba(34, 211, 238, 0.08)',
                }}
              >
                <div className="text-sm leading-6 text-zinc-100">{choice.text}</div>
              </button>
            ))}
          </div>
        )}

        {ending && (
          <NegotiationResultModal
            ending={ending}
            activityResult={activityResult}
            onRestart={restartQuest}
            onBack={() => router.push('/games/negotiation')}
          />
        )}
      </div>
    </>
  );
}
