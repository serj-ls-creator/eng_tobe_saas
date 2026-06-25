create extension if not exists "pgcrypto";

create table if not exists public.profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  is_premium boolean not null default false,
  premium_expires_at timestamptz,
  creem_customer_id text,
  streak integer not null default 0,
  total_streak integer not null default 0,
  points integer not null default 0,
  last_activity_date text,
  daily_activities integer not null default 0,
  display_name text,
  avatar text,
  created_at timestamptz not null default now()
);

create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  section text not null check (section in ('words', 'sentences', 'idioms', 'games')),
  name text not null,
  icon text not null,
  color text not null,
  is_free boolean not null default false,
  "order" integer not null default 0
);

create table if not exists public.content (
  id uuid primary key default gen_random_uuid(),
  category_id uuid not null references public.categories(id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.learning_activity_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  path_key text not null,
  section text not null check (section in ('words', 'sentences', 'idioms')),
  category_id text not null,
  topic_id text,
  subcategory_id text,
  level_id text,
  activity_id text not null,
  activity_name text not null,
  title text not null,
  href text not null,
  score integer,
  total integer,
  is_perfect boolean not null default false,
  completion_count integer not null default 1,
  first_completed_at timestamptz not null default now(),
  last_completed_at timestamptz not null default now(),
  next_recall_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, path_key)
);

alter table public.profiles enable row level security;
alter table public.categories enable row level security;
alter table public.content enable row level security;
alter table public.learning_activity_progress enable row level security;

create policy "profiles_select_own"
on public.profiles
for select
to authenticated
using (auth.uid() = user_id);

create policy "profiles_insert_own"
on public.profiles
for insert
to authenticated
with check (auth.uid() = user_id);

create policy "profiles_update_own"
on public.profiles
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "categories_read_authenticated"
on public.categories
for select
to authenticated
using (true);

create policy "content_read_free_or_premium"
on public.content
for select
to authenticated
using (
  exists (
    select 1
    from public.categories c
    where c.id = content.category_id
      and (
        c.is_free = true
        or exists (
          select 1
          from public.profiles p
          where p.user_id = auth.uid()
            and p.is_premium = true
        )
      )
  )
);

create policy "learning_progress_select_own"
on public.learning_activity_progress
for select
to authenticated
using (auth.uid() = user_id);

create policy "learning_progress_insert_own"
on public.learning_activity_progress
for insert
to authenticated
with check (auth.uid() = user_id);

create policy "learning_progress_update_own"
on public.learning_activity_progress
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

-- Weekly Streak Table
create table if not exists public.weekly_streak (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  week_start_date text not null,
  day_flags integer not null default 0,
  days_completed integer not null default 0,
  bonus_awarded boolean not null default false,
  updated_at timestamptz not null default now(),
  unique (user_id, week_start_date)
);

alter table public.weekly_streak enable row level security;

create policy "weekly_streak_select_own"
on public.weekly_streak
for select
to authenticated
using (auth.uid() = user_id);

create policy "weekly_streak_insert_own"
on public.weekly_streak
for insert
to authenticated
with check (auth.uid() = user_id);

create policy "weekly_streak_update_own"
on public.weekly_streak
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

-- RPC for incrementing points atomic update
create or replace function public.increment_points(user_id_input uuid, points_to_add integer)
returns integer
language plpgsql
security definer
as $$
declare
  new_points integer;
begin
  update public.profiles
  set points = coalesce(points, 0) + points_to_add
  where user_id = user_id_input
  returning points into new_points;
  
  return new_points;
end;
$$;

-- RPC for completing user activity atomically with streak calculation and locking
create or replace function public.complete_user_activity(user_id_input uuid, today_input text)
returns jsonb
language plpgsql
security definer
as $$
declare
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
begin
  -- 1. Select the profile with FOR UPDATE to prevent concurrency race conditions
  select streak, total_streak, daily_activities, last_activity_date, points
  into p_streak, p_total_streak, p_daily_activities, p_last_activity_date, p_points
  from public.profiles
  where user_id = user_id_input
  for update;

  if not found then
    return jsonb_build_object('error', 'Profile not found');
  end if;

  p_streak := coalesce(p_streak, 0);
  p_total_streak := coalesce(p_total_streak, 0);
  p_daily_activities := coalesce(p_daily_activities, 0);
  p_points := coalesce(p_points, 0);

  -- 2. Reset daily counter and check streak break if new day
  if p_last_activity_date is null or p_last_activity_date != today_input then
    if p_last_activity_date is not null then
      -- If more than 1 day has passed, or yesterday was not completed (activities < 4), reset streaks
      if (today_input::date - p_last_activity_date::date) > 1 or p_daily_activities < 4 then
        p_streak := 0;
        p_total_streak := 0;
      end if;
    end if;
    p_daily_activities := 0;
  end if;

  -- 3. Increment daily activities (cap at 4)
  prev_activities := p_daily_activities;
  if p_daily_activities < 4 then
    p_daily_activities := p_daily_activities + 1;
  end if;

  -- 4. Check if day is completed
  if prev_activities < 4 and p_daily_activities >= 4 then
    day_completed := true;
    p_streak := p_streak + 1;
    p_total_streak := p_total_streak + 1;
  end if;

  -- 5. Update profile basic stats
  update public.profiles
  set streak = p_streak,
      total_streak = p_total_streak,
      daily_activities = p_daily_activities,
      last_activity_date = today_input
  where user_id = user_id_input;

  -- 6. Weekly streak logic
  if day_completed then
    week_start := (today_input::date - (p_streak - 1))::text;
    day_index := p_streak - 1;
    
    -- Check weekly_streak row
    select id, bonus_awarded, day_flags
    into week_row_id, week_bonus_awarded, new_flag
    from public.weekly_streak
    where user_id = user_id_input and week_start_date = week_start
    for update;
    
    new_flag := coalesce(new_flag, 0) | (1 << day_index);
    week_bonus_awarded := coalesce(week_bonus_awarded, false);
    
    if week_row_id is null then
      insert into public.weekly_streak (user_id, week_start_date, days_completed, day_flags, bonus_awarded)
      values (user_id_input, week_start, p_streak, new_flag, false);
    else
      update public.weekly_streak
      set days_completed = p_streak,
          day_flags = new_flag
      where id = week_row_id;
    end if;
    
    -- Weekly bonus at 7 days
    if p_streak = 7 and not week_bonus_awarded then
      p_points := p_points + 1000;
      weekly_bonus := true;
      
      update public.profiles
      set points = p_points,
          streak = 0  -- Reset streak after completing 7 days
      where user_id = user_id_input;
      
      update public.weekly_streak
      set bonus_awarded = true
      where user_id = user_id_input and week_start_date = week_start;
      
      p_streak := 0;
    end if;
  end if;

  return jsonb_build_object(
    'streak', p_streak,
    'dailyActivities', p_daily_activities,
    'dayCompleted', day_completed,
    'weeklyBonus', weekly_bonus
  );
end;
$$;

-- RPC for recording learning progress atomically, avoiding concurrency race conditions
create or replace function public.record_learning_progress_secure(
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
returns boolean
language plpgsql
security definer
as $$
declare
  prev_count integer := 0;
  prev_perfect boolean := false;
  days_to_add integer;
  next_recall timestamptz;
  now_time timestamptz := now();
begin
  -- 1. Check existing record with FOR UPDATE to prevent concurrency race conditions
  select completion_count, is_perfect
  into prev_count, prev_perfect
  from public.learning_activity_progress
  where user_id = user_id_input and path_key = path_key_input
  for update;

  prev_count := coalesce(prev_count, 0);
  prev_perfect := coalesce(prev_perfect, false);

  -- 2. Calculate next recall interval
  if prev_count <= 0 then
    days_to_add := 1;
    if score_input is not null and total_input is not null then
      if score_input >= total_input then
        days_to_add := 3;
      elseif score_input >= (total_input - 2) then
        days_to_add := 2;
      end if;
    else
      days_to_add := 3;
    end if;
  elsif prev_count = 1 then
    days_to_add := 7;
  else
    days_to_add := 30;
  end if;

  next_recall := now_time + (days_to_add * interval '1 day');

  -- 3. Atomic Upsert
  insert into public.learning_activity_progress (
    user_id, path_key, section, category_id, topic_id, subcategory_id, level_id,
    activity_id, activity_name, title, href, score, total, is_perfect,
    completion_count, first_completed_at, last_completed_at, next_recall_at, updated_at
  )
  values (
    user_id_input, path_key_input, section_input, category_id_input, topic_id_input, subcategory_id_input, level_id_input,
    activity_id_input, activity_name_input, title_input, href_input, score_input, total_input,
    (prev_perfect or is_perfect_input), prev_count + 1, now_time, now_time, next_recall, now_time
  )
  on conflict (user_id, path_key)
  do update set
    score = score_input,
    total = total_input,
    is_perfect = (learning_activity_progress.is_perfect or excluded.is_perfect),
    completion_count = learning_activity_progress.completion_count + 1,
    last_completed_at = excluded.last_completed_at,
    next_recall_at = excluded.next_recall_at,
    updated_at = excluded.updated_at;

  return true;
end;
$$;
