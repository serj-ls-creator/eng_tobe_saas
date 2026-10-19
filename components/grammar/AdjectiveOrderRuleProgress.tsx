'use client';

import { useEffect } from "react";

import { recordLearningProgress } from "@/lib/learning-progress-client";

export function AdjectiveOrderRuleProgress() {
  useEffect(() => {
    void recordLearningProgress({
      section: "grammar",
      categoryId: "adjectives",
      topicId: "adjective-order",
      activityId: "rule",
      activityName: "Rule",
      title: "Adjective Order Rule",
      href: "/grammar/adjectives/adjective-order/rule",
    });
  }, []);

  return null;
}
