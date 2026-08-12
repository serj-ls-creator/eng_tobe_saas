'use client';

import { useEffect } from "react";

import { recordLearningProgress } from "@/lib/learning-progress-client";

export function ArticlesRuleProgress() {
  useEffect(() => {
    void recordLearningProgress({
      section: "grammar",
      categoryId: "articles",
      topicId: "rule",
      activityId: "rule",
      activityName: "Rule",
      title: "Articles Rule",
      href: "/grammar/articles/rule",
      score: 1,
      total: 1
    });
  }, []);

  return null;
}
