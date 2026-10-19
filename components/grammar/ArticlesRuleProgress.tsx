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
    });
  }, []);

  return null;
}
