create table if not exists public.learning_activity_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  path_key text not null,
  section text not null check (section in ('words', 'sentences', 'idioms', 'grammar')),
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

alter table public.learning_activity_progress enable row level security;

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
