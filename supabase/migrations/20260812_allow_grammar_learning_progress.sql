alter table public.learning_activity_progress
drop constraint if exists learning_activity_progress_section_check;

alter table public.learning_activity_progress
add constraint learning_activity_progress_section_check
check (section in ('words', 'sentences', 'idioms', 'grammar'));
