import { createSupabaseServerClient } from "@/lib/supabase";
import {
  buildLearningProgressSnapshot,
  buildRecallSnapshot,
  type LearningProgressRow,
  type LearningProgressSnapshot,
  type RecallSnapshot
} from "@/lib/learning-progress-shared";

export * from "@/lib/learning-progress-shared";

export async function getLearningProgressRows(): Promise<{ isLoggedIn: boolean; rows: LearningProgressRow[] }> {
  const supabase = createSupabaseServerClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    return { isLoggedIn: false, rows: [] };
  }

  const { data, error } = await supabase
    .from("learning_activity_progress")
    .select(
      "section, category_id, topic_id, subcategory_id, level_id, activity_id, activity_name, title, href, score, total, is_perfect, next_recall_at"
    )
    .eq("user_id", user.id);

  if (error) {
    console.error("Failed to load learning progress", error);
    return { isLoggedIn: true, rows: [] };
  }

  return { isLoggedIn: true, rows: (data ?? []) as LearningProgressRow[] };
}

export async function getLearningProgressSnapshot(): Promise<LearningProgressSnapshot> {
  const { isLoggedIn, rows } = await getLearningProgressRows();
  return buildLearningProgressSnapshot(rows, isLoggedIn);
}

export async function getRecallSnapshot(): Promise<RecallSnapshot> {
  const supabase = createSupabaseServerClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    return { isLoggedIn: false, sections: { words: [], sentences: [], idioms: [] } };
  }

  const { data, error } = await supabase
    .from("learning_activity_progress")
    .select(
      "section, category_id, topic_id, subcategory_id, level_id, activity_id, activity_name, title, href, score, total, is_perfect, next_recall_at"
    )
    .eq("user_id", user.id)
    .lte("next_recall_at", new Date().toISOString())
    .order("next_recall_at", { ascending: true });

  if (error) {
    console.error("Failed to load recall queue", error);
    return { isLoggedIn: true, sections: { words: [], sentences: [], idioms: [] } };
  }

  return buildRecallSnapshot((data ?? []) as LearningProgressRow[], true);
}
