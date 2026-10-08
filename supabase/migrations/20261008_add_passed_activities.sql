-- Migration: Add passed_activities column to user_vocabulary table
alter table public.user_vocabulary 
add column if not exists passed_activities text[] not null default '{}';
