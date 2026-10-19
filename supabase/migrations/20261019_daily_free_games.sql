-- Records one free Wordle and one free Wordsearch play per account per UTC day.
-- This migration creates a table and an insert policy; it does not delete user data.
CREATE TABLE IF NOT EXISTS public.game_daily_plays (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  game_type TEXT NOT NULL CHECK (game_type IN ('wordle', 'wordsearch')),
  played_on DATE NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, game_type, played_on)
);

ALTER TABLE public.game_daily_plays ENABLE ROW LEVEL SECURITY;
GRANT INSERT ON public.game_daily_plays TO authenticated;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'game_daily_plays'
      AND policyname = 'game_daily_plays_insert_own'
  ) THEN
    CREATE POLICY "game_daily_plays_insert_own"
    ON public.game_daily_plays
    FOR INSERT
    TO authenticated
    WITH CHECK (auth.uid() = user_id);
  END IF;
END;
$$;
