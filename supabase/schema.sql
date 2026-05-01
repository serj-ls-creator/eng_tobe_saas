create extension if not exists "pgcrypto";

create table if not exists public.profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  is_premium boolean not null default false,
  streak integer not null default 0,
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
