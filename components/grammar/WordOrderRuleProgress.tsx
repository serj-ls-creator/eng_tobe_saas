'use client';

import { useEffect } from "react";

import { recordLearningProgress } from "@/lib/learning-progress-client";

export function WordOrderRuleProgress() {
  useEffect(() => {
    void recordLearningProgress({
      section: "grammar",
      categoryId: "word-order",
      topicId: "rule",
      activityId: "rule",
      activityName: "Rule",
      title: "Word Order Rule",
      href: "/grammar/word-order/rule",
      score: 1,
      total: 1
    });
  }, []);

  return null;
}
