-- Add display_name and avatar columns to profiles table
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS display_name TEXT,
ADD COLUMN IF NOT EXISTS avatar TEXT;

CREATE TABLE IF NOT EXISTS public.learning_activity_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  path_key text NOT NULL,
  section text NOT NULL CHECK (section IN ('words', 'sentences', 'idioms')),
  category_id text NOT NULL,
  topic_id text,
  subcategory_id text,
  level_id text,
  activity_id text NOT NULL,
  activity_name text NOT NULL,
  title text NOT NULL,
  href text NOT NULL,
  score integer,
  total integer,
  is_perfect boolean NOT NULL DEFAULT false,
  completion_count integer NOT NULL DEFAULT 1,
  first_completed_at timestamptz NOT NULL DEFAULT now(),
  last_completed_at timestamptz NOT NULL DEFAULT now(),
  next_recall_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, path_key)
);

ALTER TABLE public.learning_activity_progress ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "learning_progress_select_own" ON public.learning_activity_progress;
CREATE POLICY "learning_progress_select_own"
ON public.learning_activity_progress
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "learning_progress_insert_own" ON public.learning_activity_progress;
CREATE POLICY "learning_progress_insert_own"
ON public.learning_activity_progress
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "learning_progress_update_own" ON public.learning_activity_progress;
CREATE POLICY "learning_progress_update_own"
ON public.learning_activity_progress
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Migration: Add missing profiles columns
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS premium_expires_at TIMESTAMPTZ,
ADD COLUMN IF NOT EXISTS total_streak INTEGER NOT NULL DEFAULT 0,
ADD COLUMN IF NOT EXISTS points INTEGER NOT NULL DEFAULT 0,
ADD COLUMN IF NOT EXISTS last_activity_date TEXT,
ADD COLUMN IF NOT EXISTS daily_activities INTEGER NOT NULL DEFAULT 0;

-- Migration: Create weekly_streak table if not exists
CREATE TABLE IF NOT EXISTS public.weekly_streak (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  week_start_date text NOT NULL,
  day_flags integer NOT NULL DEFAULT 0,
  days_completed integer NOT NULL DEFAULT 0,
  bonus_awarded boolean NOT NULL DEFAULT false,
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, week_start_date)
);

ALTER TABLE public.weekly_streak ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "weekly_streak_select_own" ON public.weekly_streak;
CREATE POLICY "weekly_streak_select_own"
ON public.weekly_streak
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "weekly_streak_insert_own" ON public.weekly_streak;
CREATE POLICY "weekly_streak_insert_own"
ON public.weekly_streak
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "weekly_streak_update_own" ON public.weekly_streak;
CREATE POLICY "weekly_streak_update_own"
ON public.weekly_streak
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Migration: RPC for incrementing points atomic update
CREATE OR REPLACE FUNCTION public.increment_points(user_id_input uuid, points_to_add integer)
RETURNS integer
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  new_points integer;
BEGIN
  UPDATE public.profiles
  SET points = COALESCE(points, 0) + points_to_add
  WHERE user_id = user_id_input
  RETURNING points INTO new_points;
  
  RETURN new_points;
END;
$$;

-- Migration: RPC for completing user activity atomically with streak calculation and locking
CREATE OR REPLACE FUNCTION public.complete_user_activity(user_id_input uuid, today_input text)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  p_streak integer;
  p_total_streak integer;
  p_daily_activities integer;
  p_last_activity_date text;
  p_points integer;
  
  prev_activities integer;
  day_completed boolean := false;
  weekly_bonus boolean := false;
  
  week_start text;
  day_index integer;
  new_flag integer;
  week_row_id uuid;
  week_bonus_awarded boolean;
BEGIN
  -- 1. Select the profile with FOR UPDATE to prevent concurrency race conditions
  SELECT streak, total_streak, daily_activities, last_activity_date, points
  INTO p_streak, p_total_streak, p_daily_activities, p_last_activity_date, p_points
  FROM public.profiles
  WHERE user_id = user_id_input
  FOR UPDATE;

  IF NOT FOUND THEN
    RETURN jsonb_build_object('error', 'Profile not found');
  END IF;

  p_streak := COALESCE(p_streak, 0);
  p_total_streak := COALESCE(p_total_streak, 0);
  p_daily_activities := COALESCE(p_daily_activities, 0);
  p_points := COALESCE(p_points, 0);

  -- 2. Reset daily counter and check streak break if new day
  IF p_last_activity_date IS NULL OR p_last_activity_date != today_input THEN
    IF p_last_activity_date IS NOT NULL THEN
      -- If more than 1 day has passed, reset streaks
      IF (today_input::date - p_last_activity_date::date) > 1 THEN
        p_streak := 0;
        p_total_streak := 0;
      END IF;
    END IF;
    p_daily_activities := 0;
  END IF;

  -- 3. Increment daily activities (cap at 4)
  prev_activities := p_daily_activities;
  IF p_daily_activities < 4 THEN
    p_daily_activities := p_daily_activities + 1;
  END IF;

  -- 4. Check if day is completed
  IF prev_activities < 4 AND p_daily_activities >= 4 THEN
    day_completed := true;
    p_streak := p_streak + 1;
    p_total_streak := p_total_streak + 1;
  END IF;

  -- 5. Update profile basic stats
  UPDATE public.profiles
  SET streak = p_streak,
      total_streak = p_total_streak,
      daily_activities = p_daily_activities,
      last_activity_date = today_input
  WHERE user_id = user_id_input;

  -- 6. Weekly streak logic
  IF day_completed THEN
    week_start := (today_input::date - (p_streak - 1))::text;
    day_index := p_streak - 1;
    
    -- Check weekly_streak row
    SELECT id, bonus_awarded, day_flags
    INTO week_row_id, week_bonus_awarded, new_flag
    FROM public.weekly_streak
    WHERE user_id = user_id_input AND week_start_date = week_start
    FOR UPDATE;
    
    new_flag := COALESCE(new_flag, 0) | (1 << day_index);
    week_bonus_awarded := COALESCE(week_bonus_awarded, false);
    
    IF week_row_id IS NULL THEN
      INSERT INTO public.weekly_streak (user_id, week_start_date, days_completed, day_flags, bonus_awarded)
      VALUES (user_id_input, week_start, p_streak, new_flag, false);
    ELSE
      UPDATE public.weekly_streak
      SET days_completed = p_streak,
          day_flags = new_flag
      WHERE id = week_row_id;
    END IF;
    
    -- Weekly bonus at 7 days
    IF p_streak = 7 AND NOT week_bonus_awarded THEN
      p_points := p_points + 1000;
      weekly_bonus := true;
      
      UPDATE public.profiles
      SET points = p_points,
          streak = 0  -- Reset streak after completing 7 days
      WHERE user_id = user_id_input;
      
      UPDATE public.weekly_streak
      SET bonus_awarded = true
      WHERE user_id = user_id_input AND week_start_date = week_start;
      
      p_streak := 0;
    END IF;
  END IF;

  RETURN jsonb_build_object(
    'streak', p_streak,
    'dailyActivities', p_daily_activities,
    'dayCompleted', day_completed,
    'weeklyBonus', weekly_bonus
  );
END;
$$;

-- Migration: RPC for recording learning progress atomically, avoiding concurrency race conditions
CREATE OR REPLACE FUNCTION public.record_learning_progress_secure(
  user_id_input uuid,
  path_key_input text,
  section_input text,
  category_id_input text,
  topic_id_input text,
  subcategory_id_input text,
  level_id_input text,
  activity_id_input text,
  activity_name_input text,
  title_input text,
  href_input text,
  score_input integer,
  total_input integer,
  is_perfect_input boolean
)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  prev_count integer := 0;
  prev_perfect boolean := false;
  days_to_add integer;
  next_recall timestamptz;
  now_time timestamptz := now();
BEGIN
  -- 1. Check existing record with FOR UPDATE to prevent concurrency race conditions
  SELECT completion_count, is_perfect
  INTO prev_count, prev_perfect
  FROM public.learning_activity_progress
  WHERE user_id = user_id_input AND path_key = path_key_input
  FOR UPDATE;

  prev_count := COALESCE(prev_count, 0);
  prev_perfect := COALESCE(prev_perfect, false);

  -- 2. Calculate next recall interval
  IF prev_count <= 0 THEN
    days_to_add := 1;
    IF score_input IS NOT NULL AND total_input IS NOT NULL THEN
      IF score_input >= total_input THEN
        days_to_add := 3;
      ELSEIF score_input >= (total_input - 2) THEN
        days_to_add := 2;
      END IF;
    ELSE
      days_to_add := 3;
    END IF;
  ELSEIF prev_count = 1 THEN
    days_to_add := 7;
  ELSE
    days_to_add := 30;
  END IF;

  next_recall := now_time + (days_to_add * INTERVAL '1 day');

  -- 3. Atomic Upsert
  INSERT INTO public.learning_activity_progress (
    user_id, path_key, section, category_id, topic_id, subcategory_id, level_id,
    activity_id, activity_name, title, href, score, total, is_perfect,
    completion_count, first_completed_at, last_completed_at, next_recall_at, updated_at
  )
  VALUES (
    user_id_input, path_key_input, section_input, category_id_input, topic_id_input, subcategory_id_input, level_id_input,
    activity_id_input, activity_name_input, title_input, href_input, score_input, total_input,
    (prev_perfect OR is_perfect_input), prev_count + 1, now_time, now_time, next_recall, now_time
  )
  ON CONFLICT (user_id, path_key)
  DO UPDATE SET
    score = score_input,
    total = total_input,
    is_perfect = (learning_activity_progress.is_perfect OR excluded.is_perfect),
    completion_count = learning_activity_progress.completion_count + 1,
    last_completed_at = excluded.last_completed_at,
    next_recall_at = excluded.next_recall_at,
    updated_at = excluded.updated_at;

  RETURN true;
END;
$$;
