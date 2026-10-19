'use client';

import { useEffect } from "react";
import { recordLearningProgress } from "@/lib/learning-progress-client";

export function GrammarRuleProgress({ categoryId, topicId, title, href }: {
  categoryId: string;
  topicId: string;
  title: string;
  href: string;
}) {
  useEffect(() => {
    void recordLearningProgress({
      section: "grammar",
      categoryId,
      topicId,
      activityId: "rule",
      activityName: "Rule",
      title,
      href
    });
  }, [categoryId, topicId, title, href]);

  return null;
}
