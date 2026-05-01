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

CREATE POLICY "learning_progress_select_own"
ON public.learning_activity_progress
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "learning_progress_insert_own"
ON public.learning_activity_progress
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "learning_progress_update_own"
ON public.learning_activity_progress
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);
