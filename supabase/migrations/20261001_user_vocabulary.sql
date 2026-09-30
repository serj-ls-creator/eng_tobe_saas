-- User vocabulary tables and RLS
create table if not exists public.user_vocabulary_sets (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  created_at timestamptz not null default now(),
  unique (user_id, name)
);

create table if not exists public.user_vocabulary (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  word text not null,
  ipa text,
  definition text,
  translation text,
  synonyms text,
  notes text,
  set_name text not null default 'General',
  status text not null default 'new' check (status in ('new', 'learning', 'learned')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.user_vocabulary_sets enable row level security;
alter table public.user_vocabulary enable row level security;

-- Policies for user_vocabulary_sets
create policy "user_vocabulary_sets_select_own"
on public.user_vocabulary_sets
for select
to authenticated
using (auth.uid() = user_id);

create policy "user_vocabulary_sets_insert_own"
on public.user_vocabulary_sets
for insert
to authenticated
with check (auth.uid() = user_id);

create policy "user_vocabulary_sets_delete_own"
on public.user_vocabulary_sets
for delete
to authenticated
using (auth.uid() = user_id);

-- Policies for user_vocabulary
create policy "user_vocabulary_select_own"
on public.user_vocabulary
for select
to authenticated
using (auth.uid() = user_id);

create policy "user_vocabulary_insert_own"
on public.user_vocabulary
for insert
to authenticated
with check (auth.uid() = user_id);

create policy "user_vocabulary_update_own"
on public.user_vocabulary
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "user_vocabulary_delete_own"
on public.user_vocabulary
for delete
to authenticated
using (auth.uid() = user_id);
