import { NextRequest, NextResponse } from "next/server";

import type { RecordLearningProgressPayload } from "@/lib/learning-progress-shared";
import { buildProgressKey } from "@/lib/learning-progress-shared";
import { createSupabaseServerClient } from "@/lib/supabase";

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
    const isPerfect =
      typeof payload.score === "number" && typeof payload.total === "number"
        ? payload.score >= payload.total
        : true;

    // Call the thread-safe database function to record progress atomically
    const { data: success, error } = await supabase.rpc('record_learning_progress_secure', {
      user_id_input: user.id,
      path_key_input: pathKey,
      section_input: payload.section,
      category_id_input: payload.categoryId,
      topic_id_input: payload.topicId ?? null,
      subcategory_id_input: payload.subcategoryId ?? null,
      level_id_input: payload.levelId ?? null,
      activity_id_input: payload.activityId,
      activity_name_input: payload.activityName,
      title_input: payload.title,
      href_input: payload.href,
      score_input: payload.score ?? null,
      total_input: payload.total ?? null,
      is_perfect_input: isPerfect,
    });

    if (error) {
      console.error("Failed to save learning progress:", error);
      return NextResponse.json({ saved: false }, { status: 500 });
    }

    return NextResponse.json({ saved: !!success });
  } catch (error) {
    console.error("Unexpected learning progress error", error);
    return NextResponse.json({ saved: false }, { status: 500 });
  }
}
