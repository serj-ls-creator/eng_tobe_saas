'use client';

import { useEffect } from "react";

import { recordLearningProgress } from "@/lib/learning-progress-client";

export function AdjectiveOrderRuleProgress() {
  useEffect(() => {
    void recordLearningProgress({
      section: "grammar",
      categoryId: "adjective-order",
      topicId: "rule",
      activityId: "rule",
      activityName: "Rule",
      title: "Adjective Order Rule",
      href: "/grammar/adjective-order/rule",
      score: 1,
      total: 1
    });
  }, []);

  return null;
}
