'use client';

import { useEffect } from "react";

import { recordLearningProgress } from "@/lib/learning-progress-client";

export function WordOrderRuleProgress() {
  useEffect(() => {
    void recordLearningProgress({
      section: "grammar",
      categoryId: "sentences",
      topicId: "word-order",
      activityId: "rule",
      activityName: "Rule",
      title: "Word Order Rule",
      href: "/grammar/sentences/word-order/rule",
    });
  }, []);

  return null;
}
