import { NextRequest, NextResponse } from "next/server";

import type { RecordLearningProgressPayload } from "@/lib/learning-progress-shared";
import { buildProgressKey } from "@/lib/learning-progress-shared";
import { createSupabaseServerClient } from "@/lib/supabase";

function getNextRecallAt(
  previousCompletionCount: number,
  score?: number | null,
  total?: number | null
): string {
  const now = new Date();
  let daysToAdd: number;

  if (previousCompletionCount <= 0) {
    daysToAdd = 1;

    if (typeof score === "number" && typeof total === "number") {
      if (score >= total) {
        daysToAdd = 3;
      } else if (score >= Math.max(1, total - 2)) {
        daysToAdd = 2;
      }
    } else {
      daysToAdd = 3;
    }
  } else if (previousCompletionCount === 1) {
    daysToAdd = 7;
  } else {
    daysToAdd = 30;
  }

  now.setDate(now.getDate() + daysToAdd);
  return now.toISOString();
}

export async function POST(req: NextRequest) {
  try {
    const payload = (await req.json()) as RecordLearningProgressPayload;
    const supabase = createSupabaseServerClient();
    const {
      data: { user }
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ saved: false, anonymous: true });
    }

    const pathKey = buildProgressKey(payload);
    const now = new Date().toISOString();
    const isPerfect =
      typeof payload.score === "number" && typeof payload.total === "number"
        ? payload.score >= payload.total
        : true;

    const { data: existing, error: existingError } = await supabase
      .from("learning_activity_progress")
      .select("id, completion_count, score, is_perfect")
      .eq("user_id", user.id)
      .eq("path_key", pathKey)
      .maybeSingle();

    if (existingError) {
      console.error("Failed to read learning progress record", existingError);
    }

    const previousCompletionCount = existing?.completion_count ?? 0;
    const nextRecallAt = getNextRecallAt(previousCompletionCount, payload.score, payload.total);

    const record = {
      user_id: user.id,
      path_key: pathKey,
      section: payload.section,
      category_id: payload.categoryId,
      topic_id: payload.topicId ?? null,
      subcategory_id: payload.subcategoryId ?? null,
      level_id: payload.levelId ?? null,
      activity_id: payload.activityId,
      activity_name: payload.activityName,
      title: payload.title,
      href: payload.href,
      score: payload.score ?? null,
      total: payload.total ?? null,
      is_perfect: existing?.is_perfect ? true : isPerfect,
      completion_count: previousCompletionCount + 1,
      last_completed_at: now,
      next_recall_at: nextRecallAt,
      updated_at: now,
      ...(existing ? {} : { first_completed_at: now })
    };

    const { error } = await supabase
      .from("learning_activity_progress")
      .upsert(record, { onConflict: "user_id,path_key" });

    if (error) {
      console.error("Failed to save learning progress", error);
      return NextResponse.json({ saved: false }, { status: 500 });
    }

    return NextResponse.json({ saved: true });
  } catch (error) {
    console.error("Unexpected learning progress error", error);
    return NextResponse.json({ saved: false }, { status: 500 });
  }
}
